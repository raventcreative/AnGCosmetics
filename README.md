# A&G Cosmetics — Website

Website resmi A&G Cosmetics: company profile, katalog produk, Bestie Journal, halaman
reseller, plus dua halaman dokumentasi yang tersemat langsung di website —
**Brand Guideline** dan **Design System "Garden Blossom"**.

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
  gallery/                 14 visual produk untuk galeri detail dan cover artikel
  graphics/                Ornamen tangkai untuk aksen
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
| Utility brand | `container-ag` (maks 1200px), `section-y` (48/64px), `accent` (kata aksen italic) |

Catatan warna: `blossom-deep` di web memakai `#A9436C` (versi gelap dari `#C2577F` di brand
guideline) supaya teks ivory di atasnya lolos kontras AA 5.6:1. `#C2577F` tetap tersedia
sebagai `blossom-guide` untuk elemen dekoratif besar.

## Yang perlu diganti sebelum publikasi

1. **Tautan marketplace** — `lib/site.ts`: `marketplace.shopee`, `marketplace.tiktok`, dan
   `social.instagram` / `social.tiktok` masih placeholder.
2. **Domain** — `site.url` dipakai untuk sitemap, robots, dan structured data.
3. **Logo vektor** — wordmark A&G saat ini ditulis ulang memakai Bodoni Moda
   (`components/layout/Logo.tsx`), sesuai catatan design system. Ganti dengan file SVG resmi
   bila sudah ada.
4. **Testimoni dan ulasan** — `lib/data/testimonials.ts` masih contoh layout, bukan
   testimoni asli. Ganti dengan ulasan asli pelanggan beserta izinnya.
5. **Harga** — `lib/data/products.ts` mengikuti tabel harga company profile 2026. Cek ulang
   untuk produk baru.

## Aturan konten yang dipegang website ini

- Sapa dengan "Bestie" atau "kamu", tanpa ALL CAPS dan tanda seru bertumpuk.
- Hanya klaim yang bisa dibuktikan: nomor BPOM, sertifikasi halal, kandungan resmi, dan
  hasil survei yang selalu disertai catatan sumbernya.
- Nomor POM ditampilkan terbuka di setiap product card dan halaman detail.
