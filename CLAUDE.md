# Catatan untuk sesi berikutnya

Website A&G Cosmetics — Next.js 15 App Router + Tailwind v4, tanpa database.
Tampilan memakai web theme **"Quiet Blossom"**: background putih, pink jadi aksen.

## Prinsip yang harus dijaga

1. **Token dulu, jangan hardcode warna.** Semua warna, ukuran teks, radius, dan shadow
   sudah jadi utility Tailwind di `app/globals.css`. Jangan tulis hex di komponen.
2. **Satu sumber data.** Konten produk, company profile, brand guideline, dan token
   dokumentasi ada di `lib/data/`. Halaman hanya me-render, tidak menyimpan konten.
3. **Putih dominan.** Background halaman `paper`. Bidang jeda memakai `mist`, bukan
   butter-cream. Pink hanya untuk harga, kata aksen italic, chip, dan foto produk —
   tidak pernah jadi bidang besar di website.
4. **Garis, bukan kotak.** Pemisah memakai `border-hairline` 1px dan jarak. Shadow hanya
   untuk elemen melayang: modal, cart drawer, mega menu, toast.
5. **Sudut siku.** Permukaan, tile foto, input, dan tombol memakai sudut 0. Pill tetap
   dipakai untuk chip, badge, dan seluruh materi social media sesuai brand guideline.
6. **Satu tombol primary per layar.** Aksi utama di halaman editorial memakai varian
   `ink`; `blossom-deep` tetap untuk harga, link, dan aksi commerce.
7. **Jangan bentrokkan utility warna lewat `className`.** Untuk tombol/badge di atas
   background gelap pakai varian `ink`, `paper`, `primary-light`, `secondary-light`,
   `cert-light` — menimpa `bg-*` lewat className tidak deterministik di Tailwind.
8. **Teks di atas foto wajib punya scrim.** Gradien `from-paper`/`from-cocoa` supaya
   kontras aman berapa pun terang fotonya. Jangan andalkan foto tertentu.
9. **Hati-hati satuan `ch`.** `max-w-[30ch]` di elemen wrapper dihitung dari font 16px,
   bukan dari headline di dalamnya. Untuk kolom teks hero pakai px.
10. **Klaim jujur.** Setiap angka hasil survei wajib ada catatan sumbernya. Testimoni dan
    ulasan yang masih contoh layout wajib diberi keterangan.
11. **Data produk yang belum lengkap ditulis `null`, bukan dikarang.** `price`, `size`, dan
    `pom` boleh null. UI wajib menanganinya: harga jadi "Harga menyusul", tombol jadi "Tanya
    ketersediaan", badge BPOM/Halal disembunyikan, klaim stok disembunyikan, dan blok `offers`
    di structured data tidak dibuat. Rating disembunyikan saat `reviewCount` 0.
12. **Mobile-first.** Breakpoint kustom: `tablet:` (768px) dan `desktop:` (1200px). Target
    sentuh minimal 44px.

## Foto

`public/editorial/` masih berisi placeholder. Baca `public/editorial/SLOTS.md` untuk
daftar slot, rasio, dan arahan isinya. Timpa file dengan nama yang sama — tidak ada kode
yang perlu diubah.

## Verifikasi sebelum bilang selesai

```bash
npm run build                        # wajib lolos, semua halaman static

# screenshot + cek error console, response 4xx, dan horizontal overflow
npm install --no-save playwright-core
npx next start -p 3210 &
SHOTS=./.shots node shot.mjs         # ONLY=home,produk untuk sebagian halaman saja
```

`shot.mjs` melaporkan error console, response 4xx, dan horizontal overflow per halaman.

## Preview statis

`EXPORT=1 npm run build` lalu `python3 scripts/make-static-preview.py out` menghasilkan
`out/` yang bisa disajikan dari mana pun. Verifikasi dengan `node previewcheck.mjs`
(butuh server statis di port 3211) — yang wajib lolos: CSS dan font termuat, navigasi
antar halaman jalan, dan hidrasi React hidup (accordion FAQ bisa dibuka).
