"""
Membuat placeholder untuk slot foto editorial di public/editorial/.
Jalankan ulang hanya kalau slot baru ditambahkan — begitu foto asli tersedia,
timpa file dengan nama yang sama dan jangan jalankan script ini lagi.
"""
from PIL import Image, ImageDraw, ImageFont
import pathlib

OUT = pathlib.Path("public/editorial")
OUT.mkdir(parents=True, exist_ok=True)
SANS = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
SERIF = "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf"

SLOTS = [
    ("hero-wide", 2048, 1152, "Hero editorial · model"),
    ("hero-portrait", 1536, 2048, "Hero mobile · model"),
    ("skin-detail", 1200, 1600, "Detail kulit · bahu & leher"),
    ("ritual-hands", 1200, 1600, "Tangan mengaplikasikan lotion"),
    ("morning-ritual", 2048, 1152, "Rutinitas pagi · kamar mandi"),
    ("ugc-1", 900, 1600, "UGC · selfie kamar mandi"),
    ("ugc-2", 900, 1600, "UGC · pakai lotion"),
    ("ugc-3", 900, 1600, "UGC · close up glow"),
    ("ugc-4", 900, 1600, "UGC · hijab"),
    ("ingredient-botanical", 1200, 1600, "Kandungan · licorice & daun"),
    ("texture-serum", 1200, 1600, "Tekstur · tetes serum"),
    ("nature-terrace", 1200, 1600, "Alam · terasering pagi"),
]

BG_TOP, BG_BOTTOM = (245, 242, 238), (234, 229, 222)
INK = (150, 140, 136)

for name, w, h, caption in SLOTS:
    im = Image.new("RGB", (w, h), BG_TOP)
    d = ImageDraw.Draw(im)
    for y in range(h):  # gradasi vertikal halus
        t = y / h
        d.line(
            [(0, y), (w, y)],
            fill=tuple(round(BG_TOP[i] + (BG_BOTTOM[i] - BG_TOP[i]) * t) for i in range(3)),
        )
    mark = ImageFont.truetype(SERIF, int(min(w, h) * 0.075))
    small = ImageFont.truetype(SANS, int(min(w, h) * 0.021))
    d.text((w / 2, h / 2 - min(w, h) * 0.03), "A&G", font=mark, fill=INK, anchor="mm")
    d.text((w / 2, h / 2 + min(w, h) * 0.045), caption.upper(), font=small, fill=INK, anchor="mm")
    d.text(
        (w / 2, h / 2 + min(w, h) * 0.085),
        f"{name}.jpg · {w}×{h}",
        font=small,
        fill=(196, 188, 182),
        anchor="mm",
    )
    im.save(OUT / f"{name}.jpg", quality=82, optimize=True)
    print("placeholder", name, f"{w}x{h}")
