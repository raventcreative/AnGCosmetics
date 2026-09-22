# Catatan untuk sesi berikutnya

Website A&G Cosmetics — Next.js 15 App Router + Tailwind v4, tanpa database.

## Prinsip yang harus dijaga

1. **Token dulu, jangan hardcode warna.** Semua warna, ukuran teks, radius, dan shadow
   sudah jadi utility Tailwind di `app/globals.css`. Jangan tulis hex di komponen.
2. **Satu sumber data.** Konten produk, company profile, brand guideline, dan token
   dokumentasi ada di `lib/data/`. Halaman hanya me-render, tidak menyimpan konten.
3. **Card selalu putih.** Warna brand masuk lewat teks, badge, dan foto — bukan background
   card. Background halaman `ivory`, section selang-seling `butter-cream`.
4. **Satu tombol primary per layar.** `blossom-deep` hanya untuk aksi utama, harga, dan link.
5. **Jangan bentrokkan utility warna lewat `className`.** Untuk tombol/badge di atas
   background gelap pakai varian `primary-light`, `secondary-light`, `cert-light` —
   menimpa `bg-*` lewat className tidak deterministik di Tailwind.
6. **Klaim jujur.** Setiap angka hasil survei wajib ada catatan sumbernya. Testimoni yang
   masih contoh layout wajib diberi keterangan.
7. **Mobile-first.** Breakpoint kustom: `tablet:` (768px) dan `desktop:` (1200px). Target
   sentuh minimal 44px.

## Verifikasi sebelum bilang selesai

```bash
npm run build                        # wajib lolos, semua halaman static

# screenshot + cek error console, response 4xx, dan horizontal overflow
npm install --no-save playwright-core
npx next start -p 3210 &
SHOTS=./.shots node shot.mjs         # ONLY=home,produk untuk sebagian halaman saja
```

`shot.mjs` juga melaporkan error console, response 4xx, dan horizontal overflow per halaman.
