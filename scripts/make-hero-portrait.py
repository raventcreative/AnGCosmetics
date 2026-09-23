"""
Membuat versi potret hero dari banner lanskap.

Banner aslinya lebar dengan produk menumpuk di kanan. Kalau langsung dipotong
jadi 3:4, produknya ikut terpotong. Jadi: sisi kanan yang berisi produk dipakai
penuh selebar kanvas dan ditempel di bawah, lalu ruang di atasnya diisi gradasi
yang dilanjutkan dari baris teratas potongan itu — sambungannya tidak terlihat
dan bagian atas tetap lapang untuk headline.

Pakai: python3 scripts/make-hero-portrait.py <banner.jpg> <keluaran.jpg>
"""
import sys

import numpy as np
from PIL import Image

WIDTH, HEIGHT = 1536, 2048
CROP_FROM = 0.34   # ambil dari 34% lebar ke kanan (produk mulai sekitar 45%)
TOP_TONE = (253, 250, 249)  # warna paling terang di banner, untuk puncak kanvas


def build(src: str, dst: str) -> None:
    img = Image.open(src).convert("RGB")
    w, h = img.size

    crop = img.crop((int(w * CROP_FROM), 0, w, h))
    scaled_h = round(WIDTH * crop.height / crop.width)
    crop = crop.resize((WIDTH, scaled_h), Image.LANCZOS)

    top = HEIGHT - scaled_h
    if top <= 0:  # potongan sudah lebih tinggi dari kanvas
        canvas = crop.crop((0, scaled_h - HEIGHT, WIDTH, scaled_h))
        canvas.save(dst, quality=88, optimize=True, progressive=True)
        print(f"{dst} {canvas.size} (tanpa perpanjangan)")
        return

    seam = np.asarray(crop, dtype=np.float32)[0]          # baris teratas potongan
    apex = np.array(TOP_TONE, dtype=np.float32)
    ramp = np.linspace(0.0, 1.0, top, dtype=np.float32)[:, None, None]
    fill = apex[None, None, :] * (1 - ramp) + seam[None, :, :] * ramp

    canvas = Image.new("RGB", (WIDTH, HEIGHT))
    canvas.paste(Image.fromarray(fill.astype(np.uint8)), (0, 0))
    canvas.paste(crop, (0, top))
    canvas.save(dst, quality=88, optimize=True, progressive=True)
    print(f"{dst} {canvas.size} · sambungan di y={top}")


if __name__ == "__main__":
    build(sys.argv[1], sys.argv[2])
