# A&G Cosmetics — Website

Website resmi A&G Cosmetics: company profile, katalog produk, Bestie Journal, halaman
reseller, plus dua halaman dokumentasi yang tersemat langsung di website —
**Brand Guideline** dan **Design System "Garden Blossom"**.

Tampilan memakai web theme **"Quiet Blossom"**: background putih, tipografi editorial,
foto besar sebagai pembuka tiap halaman, dan pink yang turun menjadi aksen. Arahnya
elegan dan tenang di paruh atas halaman, lalu masuk ke blok konversi (best seller,
ulasan, reseller) di paruh bawah.

Transaksi retail diarahkan ke toko resmi marketplace (Shopee / TikTok Shop), jadi website
ini tidak menjalankan cart dan checkout sendiri. Komponen `Cart` dan `CheckoutSummary`
tetap dibangun sebagai bagian design system dan bisa dipakai kalau nanti mau punya
checkout sendiri.

## Stack

- Next.js 15 (App Router) + React 19, TypeScript
- Tailwind CSS v4 — seluruh token design system didefinisikan di `app/globals.css` (`@theme`)
- Font: Bodoni Moda (logo), Fraunces (display), Nunito (sans) via `next/font/google`
- Tanpa database. Semua konten ada di `lib/data/`

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build produksi (28 halaman, semuanya static)
npm run start
```

## Struktur

```
app/
  page.tsx                 Home
  produk/                  Katalog + detail produk (12 SKU, static generated)
  tentang/                 Company profile: visi misi, core values, timeline, target market
  reseller/                Daftar harga reseller + simulasi margin + alur daftar
  journal/                 Bestie Journal (4 artikel edukasi)
  faq/  kontak/            FAQ dan kontak (form mengarah ke WhatsApp)
  brand-guideline/         Brand Guideline V3 "Garden Blossom" sebagai halaman web
  design-system/           Design System: token + 24 komponen live
  globals.css              SEMUA token: warna, tipografi, spacing, radius, shadow, breakpoint
components/
  ui/                      Button, Input, Badge, Card, Modal, Toast, Pagination, Rating
  commerce/                ProductCard, ProductDetail, Cart, CheckoutSummary, Review
  layout/                  Navbar, Hero, Footer, Logo, FlowerBadge, SectionHeading
  content/                 BlogCard, IngredientsSection, FAQAccordion, Testimonial
  social/                  FeedTemplate, Carousel, StoryTemplate, MarketplaceKit, LiveAdsKit
lib/
  site.ts                  Konfigurasi tautan: marketplace, WhatsApp, sosial media
  data/                    products, company, brand, tokens, faq, journal, testimonials
public/
  products/                12 foto produk PNG transparan (diekstrak dari company profile)
  gallery/                 14 visual produk untuk galeri halaman detail
  editorial/               12 slot foto editorial + SLOTS.md (lihat catatan di bawah)
  graphics/                Ornamen tangkai untuk aksen
scripts/
  make-image-placeholders.py  Membuat ulang placeholder slot foto
```

## Token design system

Sumber: `design_system_ang_cosmetics.pdf` (02 · Foundations). Semua token hidup di
`app/globals.css` sehingga bisa dipakai sebagai utility Tailwind:

| Kelompok | Contoh pakai |
| --- | --- |
| Warna | `bg-blossom-pink`, `text-blossom-deep`, `bg-butter-cream`, `text-cocoa-soft`, `border-line` |
| Tipografi | `text-display-xl`, `text-heading-2`, `text-title`, `text-body-sm`, `text-price`, `text-label` |
| Font | `font-display` (Fraunces), `font-sans` (Nunito), `font-logo` (Bodoni Moda) |
| Radius | `rounded-sm` 8px · `rounded-md` 12px · `rounded-lg` 20px · `rounded-xl` 28px · `rounded-full` |
| Shadow | `shadow-sm`, `shadow-md`, `shadow-lg` |
| Breakpoint | `tablet:` 768px · `desktop:` 1200px (mobile-first, tanpa prefix) |
| Web theme | `bg-paper` (putih), `bg-mist` (bidang jeda), `border-hairline` (garis tipis) |
| Utility brand | `container-ag` (maks 1200px), `section-y`, `section-y-lg`, `rule-top`, `accent` |

Catatan warna: `blossom-deep` di web memakai `#A9436C` (versi gelap dari `#C2577F` di brand
guideline) supaya teks ivory di atasnya lolos kontras AA 5.6:1. `#C2577F` tetap tersedia
sebagai `blossom-guide` untuk elemen dekoratif besar.

## Web theme "Quiet Blossom"

Turunan Garden Blossom khusus website. Seluruh keputusannya didokumentasikan di halaman
`/design-system` bagian **Web theme**, dan diringkas di `/brand-guideline`:

- Background halaman putih (`paper`), bidang jeda `mist`, pemisah `hairline` 1px.
- Pink hanya untuk harga, kata aksen italic, chip varian, dan foto produk.
- Sudut siku untuk permukaan, tile foto, input, dan tombol. Pill tetap dipakai untuk chip,
  badge, dan seluruh materi social media sesuai brand guideline.
- Shadow hanya untuk elemen melayang: modal, cart drawer, mega menu, toast.
- Setiap halaman utama dibuka satu foto besar dengan satu pesan.

Proporsi warna 60/25/10/5 dan radius pill di brand guideline **tetap berlaku penuh** untuk
kemasan, social media, dan marketplace.

## Foto editorial

`public/editorial/` saat ini berisi **placeholder**, bukan foto final. Daftar slot, rasio,
dan arahan isinya ada di [`public/editorial/SLOTS.md`](public/editorial/SLOTS.md). Timpa
file dengan nama yang sama — tidak ada kode yang perlu diubah.

## Yang perlu diganti sebelum publikasi

1. **Tautan marketplace** — `lib/site.ts`: `marketplace.shopee`, `marketplace.tiktok`, dan
   `social.instagram` / `social.tiktok` masih placeholder.
2. **Domain** — `site.url` dipakai untuk sitemap, robots, dan structured data.
3. **Logo vektor** — wordmark A&G saat ini ditulis ulang memakai Bodoni Moda
   (`components/layout/Logo.tsx`), sesuai catatan design system. Ganti dengan file SVG resmi
   bila sudah ada.
4. **Testimoni dan ulasan** — `lib/data/testimonials.ts` dan section ulasan di homepage
   (`components/home/UGCReviews.tsx`) masih contoh layout, bukan pelanggan asli. Ganti
   dengan ulasan asli beserta izinnya.
5. **Foto editorial** — 12 slot di `public/editorial/` masih placeholder.
6. **Harga** — `lib/data/products.ts` mengikuti tabel harga company profile 2026. Cek ulang
   untuk produk baru.

## Aturan konten yang dipegang website ini

- Sapa dengan "Bestie" atau "kamu", tanpa ALL CAPS dan tanda seru bertumpuk.
- Hanya klaim yang bisa dibuktikan: nomor BPOM, sertifikasi halal, kandungan resmi, dan
  hasil survei yang selalu disertai catatan sumbernya.
- Nomor POM ditampilkan terbuka di setiap product card dan halaman detail.
