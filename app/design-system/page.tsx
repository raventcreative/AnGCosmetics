import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { Logo } from "@/components/layout/Logo";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { FlowerBadge, SageLeaf } from "@/components/layout/FlowerBadge";
import { Button } from "@/components/ui/Button";
import { Badge, CertBadges } from "@/components/ui/Badge";
import { Card, CardEyebrow } from "@/components/ui/Card";
import { Rating } from "@/components/ui/Rating";
import { ProductCard } from "@/components/commerce/ProductCard";
import { CheckoutSummary } from "@/components/commerce/CheckoutSummary";
import { Review } from "@/components/commerce/Review";
import { BlogCard } from "@/components/content/BlogCard";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { FeedTemplate } from "@/components/social/FeedTemplate";
import { StoryTemplate } from "@/components/social/StoryTemplate";
import { Carousel } from "@/components/social/Carousel";
import { MarketplaceKit } from "@/components/social/MarketplaceKit";
import { LiveAdsKit } from "@/components/social/LiveAdsKit";
import { CartDemo, InputDemo, ModalDemo, PaginationDemo, ToastDemo } from "./Demos";
import {
  breakpointTokens,
  colorTokens,
  componentGroups,
  principles,
  radiusTokens,
  shadowTokens,
  spacingTokens,
  typeScale,
} from "@/lib/data/tokens";
import { products } from "@/lib/data/products";
import { articles } from "@/lib/data/journal";
import { faqs } from "@/lib/data/faq";

export const metadata: Metadata = {
  title: "Design System",
  description:
    "Design system A&G Garden Blossom: token warna, tipografi, spacing, grid, dan 24 komponen website serta social media dengan aturan pakainya.",
};

function ComponentBlock({
  no,
  name,
  desc,
  children,
}: {
  no: string;
  name: string;
  desc: string;
  children: ReactNode;
}) {
  return (
    <article id={name.toLowerCase()} className="scroll-mt-28 border-t border-line pt-8">
      <div className="flex flex-col gap-2">
        <p className="text-label uppercase tracking-[0.12em] text-blossom-deep">
          Komponen {no}
        </p>
        <h3 className="font-display text-heading-2 text-cocoa">{name}</h3>
        <p className="max-w-[72ch] text-body-sm text-cocoa-soft">{desc}</p>
      </div>
      <div className="mt-6 rounded-lg border border-line bg-white p-4 desktop:p-8">{children}</div>
    </article>
  );
}

export default function DesignSystemPage() {
  const product = products[0];

  return (
    <>
      {/* Cover */}
      <section className="relative overflow-hidden border-b border-line bg-butter-cream">
        <FlowerBadge
          color="cotton"
          className="pointer-events-none absolute -right-16 -top-10 size-64 opacity-60"
        />
        <div className="container-ag relative flex flex-col gap-6 py-16 desktop:py-24">
          <p className="text-label uppercase tracking-[0.12em] text-blossom-deep">
            Design system · Versi 1.0 · 22 September 2026
          </p>
          <Logo size="lg" />
          <h1 className="font-display text-display-l text-cocoa desktop:text-display-xl">
            A&amp;G <em className="accent">Garden Blossom</em>
          </h1>
          <p className="max-w-[62ch] text-body text-cocoa-soft">
            Token warna, tipografi, spacing, 24 komponen dengan aturan pakai, dan template konten
            untuk website serta social media A&amp;G Cosmetics. Semua komponen di halaman ini adalah
            komponen asli yang dipakai website ini — bukan screenshot.
          </p>
          <div className="flex flex-wrap gap-2">
            {componentGroups.map((g) => (
              <a
                key={g.id}
                href={`#${g.id}`}
                className="rounded-full border border-blossom-deep/30 bg-white px-4 py-2 text-body-sm font-semibold text-blossom-deep transition hover:bg-cotton-pink/30"
              >
                {g.no} · {g.title} ({g.count})
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Prinsip */}
      <section className="section-y">
        <div className="container-ag flex flex-col gap-8">
          <SectionHeading eyebrow="01 · Brand book" title="Prinsip" accent="visual" />
          <ol className="grid gap-4 tablet:grid-cols-2 desktop:grid-cols-4">
            {principles.map((p, i) => (
              <li key={p.title} className="rounded-lg border border-line bg-white p-6">
                <span className="font-display text-heading-2 text-blossom-pink">0{i + 1}</span>
                <p className="mt-2 text-title text-cocoa">{p.title}</p>
                <p className="mt-1 text-body-sm text-cocoa-soft">{p.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Token warna */}
      <section id="foundations" className="bg-butter-cream section-y scroll-mt-28">
        <div className="container-ag flex flex-col gap-8">
          <SectionHeading
            eyebrow="02 · Foundations"
            title="Token"
            accent="warna"
            desc="Focus ring memakai alias blossom-deep. Proporsi: 60 ivory/butter-cream · 25 blossom/cotton pink · 10 cocoa · 5 blossom-deep/sage."
          />
          <div className="grid gap-4 tablet:grid-cols-2 desktop:grid-cols-3">
            {colorTokens.map((c) => (
              <div key={c.token} className="overflow-hidden rounded-lg border border-line bg-white">
                <div className={`${c.class} ${c.text} flex h-20 items-end justify-between p-4`}>
                  <span className="text-caption font-semibold">{c.token}</span>
                  <span className="text-caption">{c.hex}</span>
                </div>
                <div className="p-4">
                  <p className="text-body-sm text-cocoa">{c.usage}</p>
                  <p className="mt-2 text-caption text-sage-deep">{c.contrast}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipografi */}
      <section id="tipografi" className="section-y scroll-mt-28">
        <div className="container-ag flex flex-col gap-8">
          <SectionHeading
            eyebrow="02 · Foundations"
            title="Skala"
            accent="tipografi"
            desc="Logo: Bodoni Moda 500 · Display: Fraunces 400/600 + italic · Sans: Nunito 400/600. Semua font berlisensi SIL Open Font License."
          />
          <div className="overflow-hidden rounded-lg border border-line bg-white">
            <ul className="divide-y divide-line">
              {typeScale.map((t) => (
                <li
                  key={t.style}
                  className="flex flex-col gap-3 p-4 desktop:flex-row desktop:items-center desktop:justify-between desktop:p-6"
                >
                  <p className={`${t.class} text-cocoa`}>{t.sample}</p>
                  <div className="shrink-0 desktop:w-[340px] desktop:text-right">
                    <p className="text-body-sm font-semibold text-cocoa">
                      {t.style} · {t.size}
                    </p>
                    <p className="text-caption text-cocoa-soft">{t.usage}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Spacing, radius, shadow, grid */}
      <section className="bg-butter-cream section-y">
        <div className="container-ag flex flex-col gap-8">
          <SectionHeading
            eyebrow="02 · Foundations"
            title="Spacing, radius, shadow &"
            accent="grid"
          />
          <div className="grid gap-6 desktop:grid-cols-2">
            <div className="rounded-lg border border-line bg-white p-6">
              <p className="text-label uppercase tracking-[0.12em] text-sage-deep">Spacing</p>
              <ul className="mt-4 flex flex-col gap-3">
                {spacingTokens.map((s) => (
                  <li key={s.token} className="flex items-center gap-4">
                    <span className="w-20 shrink-0 text-body-sm font-semibold text-cocoa">
                      {s.token}
                    </span>
                    <span
                      className="h-3 rounded-full bg-blossom-pink"
                      style={{ width: s.value }}
                      aria-hidden="true"
                    />
                    <span className="w-12 shrink-0 text-caption text-cocoa-soft">{s.value}</span>
                    <span className="hidden flex-1 text-caption text-cocoa-soft tablet:block">
                      {s.usage}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-lg border border-line bg-white p-6">
                <p className="text-label uppercase tracking-[0.12em] text-sage-deep">Radius</p>
                <ul className="mt-4 grid grid-cols-5 gap-3">
                  {radiusTokens.map((r) => (
                    <li key={r.token} className="flex flex-col items-center gap-2 text-center">
                      <span
                        className={`size-14 border border-line bg-cotton-pink ${r.class}`}
                        aria-hidden="true"
                      />
                      <span className="text-caption text-cocoa">{r.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-line bg-white p-6">
                <p className="text-label uppercase tracking-[0.12em] text-sage-deep">Shadow</p>
                <ul className="mt-4 grid gap-4 tablet:grid-cols-3">
                  {shadowTokens.map((s) => (
                    <li key={s.token} className="flex flex-col items-center gap-2 text-center">
                      <span
                        className={`size-16 rounded-lg bg-white ${s.class}`}
                        aria-hidden="true"
                      />
                      <span className="text-caption font-semibold text-cocoa">{s.token}</span>
                      <span className="text-caption text-cocoa-soft">{s.usage}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-line bg-white">
            <table className="w-full text-left">
              <caption className="sr-only">Breakpoint dan grid</caption>
              <thead>
                <tr className="border-b border-line bg-cotton-pink/30">
                  <th scope="col" className="p-4 text-label uppercase tracking-[0.12em]">Token</th>
                  <th scope="col" className="p-4 text-label uppercase tracking-[0.12em]">Nilai</th>
                  <th scope="col" className="p-4 text-label uppercase tracking-[0.12em]">Grid</th>
                </tr>
              </thead>
              <tbody>
                {breakpointTokens.map((b) => (
                  <tr key={b.token} className="border-b border-line last:border-0">
                    <th scope="row" className="p-4 text-body-sm font-semibold text-cocoa">
                      {b.token}
                    </th>
                    <td className="p-4 text-body-sm text-blossom-deep">{b.value}</td>
                    <td className="p-4 text-body-sm text-cocoa-soft">{b.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 03 Dasar UI */}
      <section id="dasar-ui" className="section-y scroll-mt-28">
        <div className="container-ag flex flex-col gap-10">
          <SectionHeading
            eyebrow="03 · Komponen"
            title="Dasar"
            accent="UI"
            desc="8 komponen: Button, Input, Badge, Card, Modal, Toast, Pagination, Rating."
          />

          <ComponentBlock
            no="01"
            name="Button"
            desc="Tiga varian: primary (blossom-deep, satu per layar untuk aksi utama), secondary (outline), dan text. Bentuk selalu pill, label 15px Nunito 600. Tinggi default 44px, sm 36px. Disabled opacity 40%."
          >
            <div className="flex flex-wrap items-center gap-4">
              <Button>Masukkan keranjang</Button>
              <Button variant="secondary">Beli sekarang</Button>
              <Button variant="text">Lihat detail</Button>
              <Button size="sm">Tambah</Button>
              <Button size="sm" variant="secondary">
                Ukuran sm
              </Button>
              <Button disabled>Stok habis</Button>
            </div>
          </ComponentBlock>

          <ComponentBlock
            no="02"
            name="Input"
            desc="Tinggi 44px, background white, border line 1px, radius-sm. Focus: border blossom-deep 1.5px. Error: border error dengan pesan 12px yang menjelaskan cara memperbaiki."
          >
            <InputDemo />
          </ComponentBlock>

          <ComponentBlock
            no="03"
            name="Badge"
            desc="Chip varian cotton-pink (terpilih: outline blossom-deep), badge promo blossom-deep, badge natural sage, badge sertifikasi outline sage-deep. Maksimal 2 badge di satu product card."
          >
            <div className="flex flex-wrap items-center gap-3">
              <Badge>250 gram</Badge>
              <Badge tone="variant-selected">Terpilih</Badge>
              <Badge tone="promo">Promo 20%</Badge>
              <Badge tone="natural">Niacinamide</Badge>
              <Badge tone="success">Stok tersedia</Badge>
              <Badge tone="warning">Stok menipis</Badge>
              <Badge tone="error">Stok habis</Badge>
              <CertBadges pom="NA18260700903" />
            </div>
          </ComponentBlock>

          <ComponentBlock
            no="04"
            name="Card"
            desc="Semua card berlatar white: default (border line), elevated (border + shadow-sm), dan promo (border cotton-pink + shadow-md, eyebrow blossom-deep). Warna brand muncul lewat teks, badge, dan foto."
          >
            <div className="grid gap-4 tablet:grid-cols-3">
              <Card>
                <p className="text-title text-cocoa">Default</p>
                <p className="mt-1 text-body-sm text-cocoa-soft">Border line 1px, tanpa shadow.</p>
              </Card>
              <Card variant="elevated">
                <p className="text-title text-cocoa">Elevated</p>
                <p className="mt-1 text-body-sm text-cocoa-soft">
                  Untuk card yang bisa diklik. Hover: shadow-md.
                </p>
              </Card>
              <Card variant="promo">
                <CardEyebrow>Promo</CardEyebrow>
                <p className="mt-1 text-title text-cocoa">Bundle glow</p>
                <p className="mt-1 text-body-sm text-cocoa-soft">Border cotton-pink + shadow-md.</p>
              </Card>
            </div>
          </ComponentBlock>

          <ComponentBlock
            no="05"
            name="Modal"
            desc="Dialog di atas overlay cocoa 45%. Card white radius-lg, shadow-lg, lebar maksimal 480px, padding space-6. Judul heading-2 Fraunces, tombol utama kanan bawah (mobile: full width, primary di atas), bisa ditutup dengan Esc."
          >
            <ModalDemo />
          </ComponentBlock>

          <ComponentBlock
            no="06"
            name="Toast"
            desc="Notifikasi singkat di pojok kanan atas (mobile: atas tengah), hilang otomatis dalam 4 detik. Background white, shadow-md, radius-sm; status ditandai ikon bulat success, warning, atau error."
          >
            <ToastDemo />
          </ComponentBlock>

          <ComponentBlock
            no="07"
            name="Pagination"
            desc="Item 40×40 radius-pill, halaman aktif blossom-deep teks ivory, lainnya cocoa dengan hover cotton-pink. Mobile: hanya tombol Sebelumnya/Berikutnya dan nomor halaman saat ini."
          >
            <PaginationDemo />
          </ComponentBlock>

          <ComponentBlock
            no="08"
            name="Rating"
            desc="Bintang 5 skala berwarna blossom-deep dengan angka rata-rata dan jumlah ulasan. Product card 14px, detail produk 18px. Jangan tampilkan rating tanpa jumlah ulasan."
          >
            <div className="flex flex-col gap-3">
              <Rating value={4.8} count={214} />
              <Rating value={4.5} count={96} size={18} />
            </div>
          </ComponentBlock>
        </div>
      </section>

      {/* 04 E-commerce */}
      <section id="ecommerce" className="bg-butter-cream section-y scroll-mt-28">
        <div className="container-ag flex flex-col gap-10">
          <SectionHeading
            eyebrow="04 · Komponen"
            title="E-commerce"
            accent="kit"
            desc="5 komponen: ProductCard, ProductDetail, Cart, CheckoutSummary, Review. Website A&G mengarahkan transaksi ke toko resmi marketplace, jadi Cart dan CheckoutSummary tersedia sebagai referensi dan demo."
          />

          <ComponentBlock
            no="09"
            name="ProductCard"
            desc="Card dan area foto berlatar white dengan divider line, rasio foto 1:1 sampai 4:5, produk utuh dan label terbaca. Isi: label ukuran, nama, rating, harga blossom-deep, tombol tambah. Grid 2/3/4 kolom."
          >
            <div className="grid grid-cols-2 gap-4 desktop:grid-cols-4">
              {products.slice(0, 4).map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </ComponentBlock>

          <ComponentBlock
            no="10"
            name="ProductDetail"
            desc="Kiri: galeri foto (utama radius-xl + thumbnail). Kanan: breadcrumb, nama heading-1 Fraunces, rating, harga, chip varian, quantity stepper, tombol primary dan secondary, badge BPOM/Halal, poin manfaat. Mobile: tombol aksi menempel di bawah layar."
          >
            <div className="flex flex-col gap-4">
              <p className="text-body-sm text-cocoa-soft">
                Contoh live: halaman detail {product.name}.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href={`/produk/${product.slug}`} variant="secondary">
                  Buka halaman detail produk
                </Button>
              </div>
              <div className="grid gap-4 tablet:grid-cols-[200px_1fr]">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="rounded-xl border border-line bg-white p-4"
                />
                <div className="flex flex-col gap-2">
                  <p className="text-label uppercase tracking-[0.12em] text-sage-deep">
                    {product.eyebrow}
                  </p>
                  <p className="font-display text-heading-1 text-cocoa">{product.name}</p>
                  <Rating value={product.rating} count={product.reviewCount} size={18} />
                  <p className="text-heading-2 font-semibold text-blossom-deep">Rp 60.000</p>
                  <CertBadges pom={product.pom} />
                </div>
              </div>
            </div>
          </ComponentBlock>

          <ComponentBlock
            no="11"
            name="Cart"
            desc="Cart drawer dari kanan (mobile: full screen). Header jumlah item, progress bar gratis ongkir (sage di atas line), daftar item dengan thumbnail 64px, stepper, harga, dan hapus. Footer: subtotal dan tombol Checkout full width, plus satu cross-sell."
          >
            <CartDemo />
          </ComponentBlock>

          <ComponentBlock
            no="12"
            name="CheckoutSummary"
            desc="Ringkasan pesanan (desktop: kolom kanan sticky, mobile: accordion di atas). Card white shadow-sm: daftar item, input voucher, rincian subtotal, ongkir, diskon (success), total heading-2, metode pembayaran, tombol Bayar, badge keamanan."
          >
            <div className="mx-auto max-w-[480px]">
              <CheckoutSummary />
            </div>
          </ComponentBlock>

          <ComponentBlock
            no="13"
            name="Review"
            desc="Kiri: rata-rata heading-1, bintang, bar distribusi blossom-deep di atas line. Kanan: kartu ulasan dengan nama, badge Pembeli terverifikasi (sage-deep), rating, teks body-sm, dan varian yang dibeli. Filter dengan chip."
          >
            <Review average={4.8} total={214} />
          </ComponentBlock>
        </div>
      </section>

      {/* 05 Layout & navigasi */}
      <section id="layout" className="section-y scroll-mt-28">
        <div className="container-ag flex flex-col gap-10">
          <SectionHeading
            eyebrow="05 · Komponen"
            title="Layout &"
            accent="navigasi"
            desc="3 komponen: Navbar, Hero, Footer. Ketiganya aktif di seluruh halaman website ini."
          />

          <ComponentBlock
            no="14"
            name="Navbar"
            desc="Header sticky: announcement bar blossom-deep, lalu bar utama ivory dengan wordmark kiri, menu kategori tengah, ikon cari/akun/keranjang kanan. Hover kategori membuka mega menu card white radius-md shadow-md. Mobile: hamburger kiri, logo tengah, keranjang kanan."
          >
            <div className="flex flex-col gap-3">
              <div className="rounded-md border border-line">
                <div className="rounded-t-md bg-blossom-deep px-4 py-2 text-center text-caption text-ivory">
                  Gratis ongkir untuk pembelian di toko resmi · Semua produk BPOM &amp; Halal
                </div>
                <div className="flex items-center justify-between px-4 py-3">
                  <Logo size="sm" />
                  <div className="hidden gap-2 tablet:flex">
                    {["Produk", "Tentang", "Bestie Journal", "Reseller"].map((m) => (
                      <span key={m} className="rounded-full px-3 py-1 text-body-sm text-cocoa">
                        {m}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 text-cocoa-soft">
                    <span className="text-caption">cari</span>
                    <span className="text-caption">akun</span>
                    <span className="text-caption">keranjang</span>
                  </div>
                </div>
              </div>
              <p className="text-caption text-cocoa-soft">
                Navbar asli terpasang di bagian atas halaman ini — arahkan kursor ke menu
                &ldquo;Produk&rdquo; untuk melihat mega menu.
              </p>
            </div>
          </ComponentBlock>

          <ComponentBlock
            no="15"
            name="Hero"
            desc="Kiri: eyebrow, headline display-xl Fraunces dengan satu kata aksen italic blossom-deep, subteks, tombol primary + secondary, dan 3 trust point (BPOM, Halal, Standar Korea). Kanan: foto produk di atas bentuk bunga scallop blossom-pink dengan daun sage. Mobile: gambar di atas, headline display-l."
          >
            <div className="grid items-center gap-6 tablet:grid-cols-2">
              <div className="flex flex-col gap-3">
                <p className="text-label uppercase tracking-[0.12em] text-sage-deep">
                  Affordable luxury · Sejak 2008
                </p>
                <p className="font-display text-display-l text-cocoa">
                  Glow ala <em className="accent">Korea</em>, buatan Indonesia
                </p>
                <p className="text-body text-cocoa-soft">
                  Semua sudah BPOM dan Halal, di harga Rp 30rb sampai Rp 80rb.
                </p>
                <div className="flex gap-3">
                  <Button size="sm">Lihat produk</Button>
                  <Button size="sm" variant="secondary">
                    Keranjang kuning
                  </Button>
                </div>
              </div>
              <div className="relative flex justify-center">
                <FlowerBadge className="size-52">
                  <Image
                    src="/products/advanced-brightening-shower-gel.png"
                    alt=""
                    width={400}
                    height={400}
                    className="h-[76%] w-auto object-contain"
                  />
                </FlowerBadge>
                <SageLeaf className="absolute -bottom-2 left-0 w-20" />
              </div>
            </div>
          </ComponentBlock>

          <ComponentBlock
            no="16"
            name="Footer"
            desc="Background cocoa dengan teks ivory. Kolom: logo + tagline italic + sosial media, menu Belanja, Bantuan, Tentang, dan newsletter (input + tombol blossom-pink teks cocoa). Baris bawah: copyright, badge BPOM/Halal, metode pembayaran. Mobile: kolom jadi accordion."
          >
            <div className="rounded-md bg-cocoa p-6 text-ivory">
              <div className="grid gap-6 tablet:grid-cols-4">
                <div>
                  <Logo tone="ivory" size="sm" />
                  <p className="mt-2 font-display text-body italic text-cotton-pink">
                    Your Skin&apos;s Bestie.
                  </p>
                </div>
                {["Belanja", "Bantuan", "Tentang"].map((col) => (
                  <div key={col}>
                    <p className="text-label uppercase tracking-[0.12em] text-cotton-pink">{col}</p>
                    <p className="mt-2 text-caption text-ivory/70">4 tautan</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 border-t border-ivory/15 pt-3 text-caption text-ivory/60">
                Footer asli ada di bagian paling bawah halaman ini.
              </p>
            </div>
          </ComponentBlock>
        </div>
      </section>

      {/* 06 Konten & edukasi */}
      <section id="konten" className="bg-butter-cream section-y scroll-mt-28">
        <div className="container-ag flex flex-col gap-10">
          <SectionHeading
            eyebrow="06 · Komponen"
            title="Konten &"
            accent="edukasi"
            desc="4 komponen: BlogCard, IngredientsSection, FAQAccordion, Testimonial."
          />

          <ComponentBlock
            no="17"
            name="BlogCard"
            desc="Gambar 16:10 radius-lg, label kategori sage-deep, judul maksimal 2 baris, ringkasan 2 baris, waktu baca. Grid 1 kolom mobile, 3 desktop. Judul menjawab masalah audiens, bukan promosi."
          >
            <div className="grid gap-6 tablet:grid-cols-3">
              {articles.slice(0, 3).map((a) => (
                <BlogCard key={a.slug} article={a} />
              ))}
            </div>
          </ComponentBlock>

          <ComponentBlock
            no="18"
            name="IngredientsSection"
            desc="Judul heading-1, lalu grid kartu kandungan: ikon daun di lingkaran sage atau cotton-pink, nama kandungan (title), fungsi singkat (body-sm), dan persentase bila ada. Hanya klaim yang bisa dibuktikan dari komposisi resmi produk."
          >
            <div className="-my-12 [&>section]:bg-transparent">
              <div className="grid gap-4 tablet:grid-cols-2 desktop:grid-cols-4">
                {products[3].ingredients.map((ing, i) => (
                  <div
                    key={ing.name}
                    className="flex flex-col gap-3 rounded-lg border border-line bg-white p-6"
                  >
                    <span
                      className={`flex size-11 items-center justify-center rounded-full ${
                        i % 2 === 0 ? "bg-sage/40 text-sage-deep" : "bg-cotton-pink text-blossom-deep"
                      }`}
                    >
                      <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
                        <path
                          d="M20 4c0 8-5 13-12 13H5c0-8 5-13 12-13h3z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        />
                      </svg>
                    </span>
                    <div>
                      <p className="text-title text-cocoa">
                        {ing.name}
                        {ing.pct && (
                          <span className="ml-2 text-body-sm font-semibold text-blossom-deep">
                            {ing.pct}
                          </span>
                        )}
                      </p>
                      <p className="mt-1 text-body-sm text-cocoa-soft">{ing.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ComponentBlock>

          <ComponentBlock
            no="19"
            name="FAQAccordion"
            desc="Setiap item: pertanyaan title dengan ikon plus/minus di kanan, border bawah line. Item terbuka memakai background white radius-md dan jawaban body-sm cocoa-soft. Satu item terbuka dalam satu waktu."
          >
            <FAQAccordion items={faqs.slice(0, 4)} />
          </ComponentBlock>

          <ComponentBlock
            no="20"
            name="Testimonial"
            desc="Kartu white dengan kutipan Fraunces italic 18px, nama dan kota, rating, serta produk yang dipakai. Background section cotton-pink dengan badge bunga dekoratif. Hanya pakai testimoni asli pelanggan dengan izin."
          >
            <div className="rounded-lg bg-cotton-pink/60 p-6">
              <div className="grid gap-4 tablet:grid-cols-2">
                {[0, 1].map((i) => (
                  <div key={i} className="flex flex-col gap-3 rounded-lg border border-line bg-white p-6">
                    <p className="font-display text-[18px] italic leading-7 text-cocoa">
                      &ldquo;Shower gel-nya nggak bikin kulit ketarik, wanginya lembut banget.&rdquo;
                    </p>
                    <Rating value={5} count={1} />
                    <p className="text-body-sm font-semibold text-cocoa">Dina · Bandung</p>
                    <p className="text-caption text-cocoa-soft">Contoh layout, bukan testimoni asli</p>
                  </div>
                ))}
              </div>
            </div>
          </ComponentBlock>
        </div>
      </section>

      {/* 07 Social media */}
      <section id="social" className="section-y scroll-mt-28">
        <div className="container-ag flex flex-col gap-10">
          <SectionHeading
            eyebrow="07 · Template"
            title="Social"
            accent="media"
            desc="5 template: FeedTemplate, Carousel, StoryTemplate, MarketplaceKit, LiveAdsKit. Semua dibuat dengan container query, jadi proporsinya tetap benar saat diekspor ke 1080×1350 atau 1080×1920."
          />

          <ComponentBlock
            no="21"
            name="FeedTemplate"
            desc="Feed Instagram/TikTok 4:5 (1080×1350). Lima tipe: Produk, Edukasi, Quote, Promo, Review. Logo kecil di pojok, margin aman 64px, maksimal 12 kata di headline. Grid feed selang-seling — tidak ada tiga foto produk berderet."
          >
            <div className="grid gap-4 tablet:grid-cols-3 desktop:grid-cols-5">
              <FeedTemplate type="produk" />
              <FeedTemplate type="edukasi" />
              <FeedTemplate type="quote" />
              <FeedTemplate type="promo" />
              <FeedTemplate type="review" />
            </div>
          </ComponentBlock>

          <ComponentBlock
            no="22"
            name="Carousel"
            desc="Carousel edukasi 5 slide 4:5. Slide 1 hook (display), slide 2–4 satu poin per slide dengan nomor besar dan ilustrasi daun, slide 5 CTA dengan produk. Background selang-seling ivory dan butter-cream, nomor slide di pojok kanan atas."
          >
            <div className="mx-auto max-w-[420px]">
              <Carousel />
            </div>
          </ComponentBlock>

          <ComponentBlock
            no="23"
            name="StoryTemplate"
            desc="Story/Reels 9:16 (1080×1920). Logo atas, produk tengah, headline dan CTA bawah. Safe zone: tidak ada teks penting 250px dari atas dan bawah (garis putus-putus). Termasuk cover Reels dan highlight cover."
          >
            <div className="grid gap-4 tablet:grid-cols-3">
              <StoryTemplate variant="story" />
              <StoryTemplate variant="cover" />
              <StoryTemplate variant="highlight" />
            </div>
          </ComponentBlock>

          <ComponentBlock
            no="24"
            name="MarketplaceKit"
            desc="Aset Shopee dan TikTok Shop. Thumbnail 1:1: produk di tengah di atas cotton-pink atau butter-cream, logo kecil kiri atas, badge BPOM·Halal kanan bawah, harga di pill blossom-deep. Banner toko 1200×400: satu headline Fraunces, maksimal dua produk."
          >
            <MarketplaceKit />
          </ComponentBlock>

          <ComponentBlock
            no="25"
            name="LiveAdsKit"
            desc="Overlay live shopping (TikTok Live / Shopee Live) dan template iklan. Live overlay: bar judul atas dengan logo, kartu produk pin kiri bawah, badge LIVE only dan timer flash sale — area tengah dibiarkan kosong agar tidak menutupi wajah host. Iklan: hook 1 kalimat, produk dominan, maksimal 3 benefit, CTA jelas."
          >
            <LiveAdsKit />
          </ComponentBlock>
        </div>
      </section>

      {/* Catatan */}
      <section className="bg-cotton-pink/40 section-y">
        <div className="container-ag flex flex-col gap-4 desktop:max-w-[76ch]">
          <SectionHeading eyebrow="Catatan" title="Sebelum dipakai" accent="produksi" />
          <ul className="flex flex-col gap-3 text-body text-cocoa">
            {[
              "Nama dan kutipan di komponen Review dan Testimonial adalah contoh layout, bukan testimoni asli.",
              "Harga mengikuti daftar harga company profile dan perlu dicek ulang untuk produk baru.",
              "Wordmark A&G di website ini ditulis ulang memakai Bodoni Moda — ganti dengan file vektor resmi bila tersedia.",
              "Tautan tombol beli mengarah ke placeholder marketplace di lib/site.ts. Ganti dengan URL toko resmi.",
            ].map((note) => (
              <li key={note.slice(0, 24)} className="flex items-start gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-blossom-deep" aria-hidden="true" />
                {note}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 tablet:flex-row">
            <Button href="/brand-guideline">Buka brand guideline</Button>
            <Button href="/produk" variant="secondary">
              Lihat implementasi di katalog
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
