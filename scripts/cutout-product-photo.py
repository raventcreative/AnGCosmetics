"""
Mengubah foto produk studio (latar abu terang bergradasi) menjadi PNG transparan
siap pakai di tile produk website.

Pendekatan: latar dikenali lewat PETA TEPI, bukan kemiripan warna — karena botol
putih di atas latar abu terang nyaris sewarna, sementara kontur botolnya tetap
punya tepi. Area latar = piksel bebas-tepi yang tersambung ke pinggir kanvas.
Lubang di dalam produk (kaca bening, bayangan dalam) otomatis ikut terjaga.

Pakai: python3 scripts/cutout-product-photo.py <input.jpg> <output.png> [--debug]
"""
from collections import deque
import sys

import numpy as np
from PIL import Image, ImageFilter

EDGE_THRESHOLD = 2      # makin kecil, makin sensitif terhadap tepi lembut
EDGE_DILATE = 5         # menutup celah kecil pada kontur
MARGIN = 0.08           # ruang kosong di sekeliling produk
SIZE = 1400             # sisi kanvas akhir
FEATHER = 1.4           # pelembut tepi mask
EROSION = 17            # kikis mask untuk membuang rumbai bayangan


def edge_map(img: Image.Image, threshold: int = EDGE_THRESHOLD) -> np.ndarray:
    gray = img.convert("L").filter(ImageFilter.GaussianBlur(1.0))
    a = np.asarray(gray, dtype=np.float32)
    gx = np.zeros_like(a)
    gy = np.zeros_like(a)
    gx[:, 1:-1] = a[:, 2:] - a[:, :-2]
    gy[1:-1, :] = a[2:, :] - a[:-2, :]
    mag = np.hypot(gx, gy)
    edges = Image.fromarray((mag > threshold).astype(np.uint8) * 255)
    edges = edges.filter(ImageFilter.MaxFilter(EDGE_DILATE))  # tutup celah kontur
    return np.asarray(edges) > 127


def fade_shadow(img: Image.Image, mask: np.ndarray, core: np.ndarray,
                bg_luma: float) -> np.ndarray:
    """
    Bayangan alas menempel di dasar produk sehingga lolos dari pembersihan bentuk.
    Di luar inti produk, piksel netral yang hampir seterang latar dipudarkan
    bertahap — hasilnya bayangan lembut, bukan noda abu bertepi keras.
    """
    rgb = np.asarray(img, dtype=np.float32)
    luma = rgb @ np.array([0.299, 0.587, 0.114], dtype=np.float32)
    chroma = rgb.max(axis=2) - rgb.min(axis=2)

    neutral = chroma < 18
    ring = mask & ~core & neutral
    strength = np.clip((bg_luma - luma) / 26.0, 0.0, 1.0)

    alpha = mask.astype(np.float32)
    alpha[ring] = strength[ring]
    return (alpha * 255).astype(np.uint8)


def background_alpha(img: Image.Image, threshold: int = EDGE_THRESHOLD) -> Image.Image:
    edges = edge_map(img, threshold)
    h, w = edges.shape
    visited = np.zeros((h, w), dtype=bool)
    q = deque()

    def seed(y, x):
        if not edges[y, x] and not visited[y, x]:
            visited[y, x] = True
            q.append((y, x))

    for x in range(w):
        seed(0, x)
        seed(h - 1, x)
    for y in range(h):
        seed(y, 0)
        seed(y, w - 1)

    while q:
        y, x = q.popleft()
        for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            ny, nx = y + dy, x + dx
            if 0 <= ny < h and 0 <= nx < w and not visited[ny, nx] and not edges[ny, nx]:
                visited[ny, nx] = True
                q.append((ny, nx))

    solid, core = clean_mask(~visited)
    bg_luma = float(
        np.median((np.asarray(img, dtype=np.float32) @ np.array([0.299, 0.587, 0.114], dtype=np.float32))[visited])
    )
    alpha = fade_shadow(img, solid, core, bg_luma)
    return Image.fromarray(alpha).filter(ImageFilter.GaussianBlur(FEATHER))


def clean_mask(mask: np.ndarray):
    """
    Ambang tepi yang sensitif menyelamatkan bagian produk yang terang, tapi ikut
    menahan bercak bayangan di latar. Bercak itu tipis dan berumbai, sedangkan
    produk adalah bidang tebal — jadi dibersihkan secara bentuk:
    kikis (erosi) -> ambil komponen terbesar -> kembangkan lagi, lalu iris
    dengan mask asli supaya tepi produk tetap presisi.
    """
    img = Image.fromarray(np.where(mask, 255, 0).astype(np.uint8))
    eroded = np.asarray(img.filter(ImageFilter.MinFilter(EROSION))) > 127
    core = keep_main_components(eroded, min_ratio=1.0)  # hanya komponen terbesar
    grown = np.asarray(
        Image.fromarray(np.where(core, 255, 0).astype(np.uint8)).filter(
            ImageFilter.MaxFilter(EROSION + 6)
        )
    ) > 127
    return grown & mask, core


def keep_main_components(mask: np.ndarray, min_ratio: float = 0.15) -> np.ndarray:
    """Buang serpihan bayangan yang tidak menyatu dengan produk."""
    h, w = mask.shape
    seen = np.zeros((h, w), dtype=bool)
    comps = []
    for sy in range(h):
        row = mask[sy]
        for sx in range(w):
            if not row[sx] or seen[sy, sx]:
                continue
            q = deque([(sy, sx)])
            seen[sy, sx] = True
            cells = []
            while q:
                y, x = q.popleft()
                cells.append((y, x))
                for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                    ny, nx = y + dy, x + dx
                    if 0 <= ny < h and 0 <= nx < w and mask[ny, nx] and not seen[ny, nx]:
                        seen[ny, nx] = True
                        q.append((ny, nx))
            comps.append(cells)
    if not comps:
        return mask
    biggest = max(len(c) for c in comps)
    out = np.zeros_like(mask)
    for cells in comps:
        if len(cells) >= biggest * min_ratio:
            ys, xs = zip(*cells)
            out[np.array(ys), np.array(xs)] = True
    return out


def cutout(src: str, dst: str, threshold: int = EDGE_THRESHOLD) -> None:
    img = Image.open(src).convert("RGB")
    alpha = background_alpha(img, threshold)
    out = img.copy()
    out.putalpha(alpha)

    box = out.getbbox()
    if box:
        out = out.crop(box)

    side = int(max(out.size) * (1 + MARGIN * 2))
    canvas = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    canvas.paste(out, ((side - out.width) // 2, (side - out.height) // 2), out)
    canvas = canvas.resize((SIZE, SIZE), Image.LANCZOS)
    canvas.save(dst, optimize=True)

    a = np.asarray(canvas)[:, :, 3]
    print(f"{dst.split('/')[-1]}  isi {int((a > 200).mean() * 100)}% bidang")


if __name__ == "__main__":
    # Ambang tepi bisa diturunkan untuk produk berwarna terang di latar terang
    # (misal botol putih), agar konturnya tetap menahan pertumbuhan area latar.
    thr = EDGE_THRESHOLD
    if "--edge" in sys.argv:
        thr = int(sys.argv[sys.argv.index("--edge") + 1])
    cutout(sys.argv[1], sys.argv[2], thr)
