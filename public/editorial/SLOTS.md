# Slot foto editorial

Timpa file dengan nama yang persis sama — tidak ada kode yang perlu diubah.

**Sudah terisi aset asli:** `hero-wide.jpg` dan `hero-portrait.jpg`.
Sisanya masih placeholder.

| File | Rasio | Dipakai di | Isi yang dibutuhkan |
| --- | --- | --- | --- |
| `hero-wide.jpg` | 16:9 | Hero homepage (tablet ke atas) | **Terisi** — banner rangkaian produk di atas podium, latar pink lembut, ruang kosong di kiri untuk teks. |
| `hero-portrait.jpg` | 3:4 | Hero homepage (mobile) + hero halaman Tentang | **Terisi** — versi potret dari banner yang sama, dibuat dengan `scripts/make-hero-portrait.py`. |
| `skin-detail.jpg` | 3:4 (1200×1600) | Section rutinitas + cover artikel PDRN | Close-up bahu, leher, dan lengan. Tekstur kulit asli, tanpa retouch berlebihan. |
| `ritual-hands.jpg` | 3:4 (1200×1600) | Banner reseller + cover artikel rutinitas | Tangan mengoleskan lotion ke lengan, tanpa kemasan berlabel. |
| `morning-ritual.jpg` | 16:9 (2048×1152) | Section brand full-bleed + halaman Tentang | Rutinitas pagi di kamar mandi, cahaya alami, palet putih dan pasir. Teks putih ditaruh di bawah, jadi sisakan area bawah yang tidak ramai. |
| `ugc-1.jpg` … `ugc-4.jpg` | 9:16 (900×1600) | Section ulasan pelanggan | Gaya konten pelanggan: selfie kamar mandi, memakai lotion, close-up glow, dan satu model berhijab. Cahaya rumah biasa, bukan studio. |
| `ingredient-botanical.jpg` | 3:4 (1200×1600) | Section kandungan + nilai brand | Still life licorice dan daun di atas permukaan putih matte. |
| `texture-serum.jpg` | 3:4 (1200×1600) | Nilai brand + cover artikel BPOM | Makro tetes serum dan olesan krim di permukaan putih. |
| `nature-terrace.jpg` | 3:4 (1200×1600) | Nilai brand + penutup halaman Tentang | Lanskap Indonesia berkabut, warna teredam. |

## Aturan foto

- Kulit bertekstur asli: pori terlihat, tanpa smoothing plastik.
- Cahaya alami dengan bayangan yang masuk akal. Tanpa blur palsu.
- Warna teredam, tidak oversaturasi. Palet putih, pasir, dan warna kulit.
- Tanpa kemasan berlabel di foto model — produk ditampilkan terpisah lewat
  foto produk di `public/products/`.

## Versi potret dari banner lanskap

```bash
python3 scripts/make-hero-portrait.py banner.jpg public/editorial/hero-portrait.jpg
```

Sisi kanan banner (yang berisi produk) dipakai penuh selebar kanvas dan ditempel di
bawah, lalu ruang di atasnya diisi gradasi lanjutan dari baris teratas potongan itu —
sambungannya tidak terlihat dan bagian atas tetap lapang untuk headline.

## Membuat ulang placeholder

```bash
python3 scripts/make-image-placeholders.py
```

Jalankan hanya kalau ada slot baru. Begitu foto asli masuk, jangan dijalankan lagi.
