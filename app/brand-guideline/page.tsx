import type { Metadata } from "next";
import { Logo } from "@/components/layout/Logo";
import { FlowerBadge, SageLeaf } from "@/components/layout/FlowerBadge";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FeedTemplate } from "@/components/social/FeedTemplate";
import { StoryTemplate } from "@/components/social/StoryTemplate";
import {
  avoidList,
  brandAbout,
  brandMeta,
  colorProportion,
  graphicElements,
  logoRules,
  packagingRules,
  socialAssets,
  voiceExample,
  voiceRules,
} from "@/lib/data/brand";
import { colorTokens, typeScale } from "@/lib/data/tokens";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Brand Guideline",
  description:
    "Brand guideline A&G Cosmetics versi Garden Blossom: karakter brand, tagline, voice & tone, aturan logo, palet warna, tipografi, elemen grafis, dan penerapan sosial media.",
};

const sections = [
  { id: "brand", label: "01 · Brand" },
  { id: "logo", label: "02 · Logo" },
  { id: "warna", label: "03 · Warna" },
  { id: "tipografi", label: "04 · Tipografi" },
  { id: "elemen", label: "05 · Elemen grafis" },
  { id: "penerapan", label: "06 · Penerapan" },
];

export default function BrandGuidelinePage() {
  return (
    <>
      {/* Cover */}
      <section className="relative overflow-hidden border-b border-hairline bg-mist">
        <SageLeaf className="absolute -right-6 bottom-0 w-52 opacity-60" />
        <div className="container-ag relative flex flex-col gap-6 py-16 desktop:py-24">
          <p className="text-label uppercase tracking-[0.12em] text-blossom-deep">
            {brandMeta.version}
          </p>
          <Logo size="lg" />
          <h1 className="font-display text-display-l text-cocoa desktop:text-display-xl">
            Brand <em className="accent">Guideline</em>
          </h1>
          <p className="max-w-[56ch] text-body text-cocoa-soft">{brandMeta.note}</p>
          <div className="flex flex-wrap gap-2">
            <Badge tone="variant">{brandMeta.date}</Badge>
            <Badge tone="cert">BPOM · Halal</Badge>
          </div>
          <nav aria-label="Daftar isi" className="mt-4 flex flex-wrap gap-2">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full border border-blossom-deep/30 bg-white px-4 py-2 text-body-sm font-semibold text-blossom-deep transition hover:bg-white/60"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* 01 Brand */}
      <section id="brand" className="section-y scroll-mt-28">
        <div className="container-ag flex flex-col gap-8">
          <SectionHeading eyebrow="01 · Brand" title="Tentang" accent="A&G" />
          <div className="grid gap-6 desktop:grid-cols-[1.2fr_0.8fr]">
            <p className="text-body text-cocoa">{brandAbout.text}</p>
            <div className="border border-hairline bg-paper p-6">
              <p className="text-label uppercase tracking-[0.12em] text-sage-deep">
                Karakter brand
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {brandAbout.character.map((c) => (
                  <li key={c}>
                    <Badge tone="variant">{c}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 rounded-xl bg-butter-cream p-10 text-center">
            <p className="text-label uppercase tracking-[0.12em] text-cocoa-soft">Tagline</p>
            <p className="font-display text-display-l italic text-cocoa">{site.tagline}</p>
            <p className="max-w-[48ch] text-body-sm text-cocoa-soft">{brandAbout.taglineUsage}</p>
          </div>

          <div className="grid gap-6 desktop:grid-cols-2">
            <div className="border border-hairline bg-paper p-6">
              <p className="text-label uppercase tracking-[0.12em] text-sage-deep">Voice & tone</p>
              <ul className="mt-3 flex flex-col gap-2">
                {voiceRules.map((rule) => (
                  <li key={rule} className="flex items-start gap-3 text-body-sm text-cocoa">
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-sage"
                      aria-hidden="true"
                    />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-4">
              <div className="rounded-lg border border-success/30 bg-success/8 p-6">
                <p className="text-label uppercase tracking-[0.12em] text-success">Contoh benar</p>
                <p className="mt-2 text-body text-cocoa">&ldquo;{voiceExample.right}&rdquo;</p>
              </div>
              <div className="rounded-lg border border-error/30 bg-error/8 p-6">
                <p className="text-label uppercase tracking-[0.12em] text-error">Hindari</p>
                <p className="mt-2 text-body text-cocoa">&ldquo;{voiceExample.wrong}&rdquo;</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 Logo */}
      <section id="logo" className="bg-mist section-y scroll-mt-28">
        <div className="container-ag flex flex-col gap-8">
          <SectionHeading eyebrow="02 · Logo" title="Logo &" accent="penggunaannya" desc={logoRules.desc} />

          <div className="grid gap-4 tablet:grid-cols-2 desktop:grid-cols-4">
            <div className="flex aspect-4/3 flex-col items-center justify-center gap-3 border border-hairline bg-paper">
              <Logo />
              <p className="text-caption text-cocoa-soft">Primary · utama</p>
            </div>
            <div className="flex aspect-4/3 flex-col items-center justify-center gap-3 border border-hairline bg-paper">
              <Logo descriptor={false} />
              <p className="text-caption text-cocoa-soft">Wordmark · ruang sempit</p>
            </div>
            <div className="flex aspect-4/3 flex-col items-center justify-center gap-3 rounded-lg border border-hairline bg-blossom-pink">
              <Logo tone="cocoa" />
              <p className="text-caption text-cocoa">Di atas warna brand</p>
            </div>
            <div className="flex aspect-4/3 flex-col items-center justify-center gap-3 rounded-lg border border-hairline bg-cocoa">
              <Logo tone="ivory" />
              <p className="text-caption text-ivory/70">Diapositif · latar gelap</p>
            </div>
          </div>

          <div className="grid gap-6 desktop:grid-cols-2">
            <div className="border border-hairline bg-paper p-6">
              <p className="text-label uppercase tracking-[0.12em] text-success">Aturan wajib</p>
              <ul className="mt-3 flex flex-col gap-2">
                {logoRules.must.map((rule) => (
                  <li key={rule} className="flex items-start gap-3 text-body-sm text-cocoa">
                    <span className="mt-1 text-success" aria-hidden="true">
                      ✓
                    </span>
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-hairline bg-paper p-6">
              <p className="text-label uppercase tracking-[0.12em] text-error">Jangan dilakukan</p>
              <ul className="mt-3 flex flex-col gap-2">
                {logoRules.never.map((rule) => (
                  <li key={rule} className="flex items-start gap-3 text-body-sm text-cocoa">
                    <span className="mt-1 text-error" aria-hidden="true">
                      ✕
                    </span>
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-caption text-cocoa-soft">
            Wordmark di website ini adalah tulisan ulang memakai Bodoni Moda. Ganti dengan file
            vektor resmi begitu tersedia.
          </p>
        </div>
      </section>

      {/* 03 Warna */}
      <section id="warna" className="section-y scroll-mt-28">
        <div className="container-ag flex flex-col gap-8">
          <SectionHeading
            eyebrow="03 · Foundations"
            title="Palet"
            accent="warna"
            desc="Proporsi dalam satu layout: 60% ivory dan butter-cream, 25% blossom dan cotton pink, 10% cocoa, 5% blossom-deep dan sage."
          />

          <div className="overflow-hidden rounded-full border border-hairline">
            <div className="flex h-10">
              {colorProportion.map((p) => (
                <div
                  key={p.label}
                  className={`${p.class} flex items-center justify-center`}
                  style={{ width: `${p.value}%` }}
                >
                  <span className="hidden text-caption font-semibold text-cocoa tablet:block">
                    {p.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
          <ul className="flex flex-wrap gap-4 text-caption text-cocoa-soft">
            {colorProportion.map((p) => (
              <li key={p.label} className="flex items-center gap-2">
                <span className={`size-3 rounded-full ${p.class}`} aria-hidden="true" />
                {p.label}
              </li>
            ))}
          </ul>

          <div className="grid gap-4 tablet:grid-cols-2 desktop:grid-cols-3">
            {colorTokens.slice(0, 11).map((c) => (
              <div key={c.token} className="overflow-hidden border border-hairline bg-paper">
                <div className={`${c.class} ${c.text} flex h-24 items-end p-4`}>
                  <span className="text-caption font-semibold">{c.hex}</span>
                </div>
                <div className="p-4">
                  <p className="text-title text-cocoa">{c.token}</p>
                  <p className="mt-1 text-body-sm text-cocoa-soft">{c.usage}</p>
                  <p className="mt-2 text-caption text-sage-deep">{c.contrast}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-body-sm text-cocoa-soft">
            Tidak aman: teks blossom-pink, cotton-pink, sage, atau butter-cream di atas ivory.
            Untuk teks selalu pakai cocoa, cocoa-soft, blossom-deep, atau sage-deep.
          </p>
        </div>
      </section>

      {/* 04 Tipografi */}
      <section id="tipografi" className="bg-mist section-y scroll-mt-28">
        <div className="container-ag flex flex-col gap-8">
          <SectionHeading
            eyebrow="04 · Foundations"
            title="Tipografi &"
            accent="skala"
            desc="Logo: Bodoni Moda 500 · Display: Fraunces 400/600 + italic · Sans: Nunito 400/600. Maksimal dua ukuran display dalam satu layar."
          />
          <div className="flex flex-col gap-3">
            {typeScale.slice(0, 6).map((t) => (
              <div
                key={t.style}
                className="flex flex-col gap-2 border border-hairline bg-paper p-6 desktop:flex-row desktop:items-center desktop:justify-between"
              >
                <p className={`${t.class} text-cocoa`}>{t.sample}</p>
                <div className="shrink-0 desktop:text-right">
                  <p className="text-body-sm font-semibold text-cocoa">{t.style}</p>
                  <p className="text-caption text-cocoa-soft">{t.size}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="border border-hairline bg-paper p-6">
            <p className="text-label uppercase tracking-[0.12em] text-sage-deep">
              Karakter Nunito
            </p>
            <p className="mt-2 break-words text-body text-cocoa">
              Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
              0123456789
            </p>
          </div>
          <Button href="/design-system#tipografi" variant="secondary">
            Lihat skala lengkap di design system
          </Button>
        </div>
      </section>

      {/* 05 Elemen grafis */}
      <section id="elemen" className="section-y scroll-mt-28">
        <div className="container-ag flex flex-col gap-8">
          <SectionHeading eyebrow="05 · Elemen grafis" title="Bunga, daun," accent="tangkai" />
          <div className="grid gap-6 desktop:grid-cols-[1fr_1fr]">
            <div className="grid gap-4 tablet:grid-cols-3">
              <div className="flex aspect-square items-center justify-center border border-hairline bg-paper p-4">
                <FlowerBadge className="size-28" />
              </div>
              <div className="flex aspect-square items-center justify-center border border-hairline bg-paper p-4">
                <FlowerBadge color="cotton" className="size-28" />
              </div>
              <div className="flex aspect-square items-center justify-center border border-hairline bg-paper p-4">
                <SageLeaf className="w-24" />
              </div>
            </div>
            <ul className="flex flex-col gap-4">
              {graphicElements.map((el) => (
                <li key={el.title} className="border border-hairline bg-paper p-6">
                  <p className="text-title text-cocoa">{el.title}</p>
                  <p className="mt-1 text-body-sm text-cocoa-soft">{el.desc}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-error/30 bg-error/8 p-6">
            <p className="text-label uppercase tracking-[0.12em] text-error">Hindari</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {avoidList.map((a) => (
                <li
                  key={a}
                  className="rounded-full border border-error/30 bg-white px-3 py-1 text-body-sm text-cocoa"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 06 Penerapan */}
      <section id="penerapan" className="bg-mist section-y scroll-mt-28">
        <div className="container-ag flex flex-col gap-8">
          <SectionHeading
            eyebrow="06 · Penerapan"
            title="Sosial media, marketplace &"
            accent="kemasan"
          />

          <div className="overflow-hidden border border-hairline bg-paper">
            <table className="w-full text-left">
              <caption className="sr-only">Ukuran dan aturan aset sosial media</caption>
              <thead>
                <tr className="border-b border-hairline bg-cotton-pink/30">
                  <th scope="col" className="p-4 text-label uppercase tracking-[0.12em]">Aset</th>
                  <th scope="col" className="p-4 text-label uppercase tracking-[0.12em]">Ukuran</th>
                  <th scope="col" className="p-4 text-label uppercase tracking-[0.12em]">Aturan</th>
                </tr>
              </thead>
              <tbody>
                {socialAssets.map((a) => (
                  <tr key={a.asset} className="border-b border-hairline last:border-0">
                    <th scope="row" className="p-4 text-body-sm font-semibold text-cocoa">
                      {a.asset}
                    </th>
                    <td className="p-4 text-body-sm text-blossom-deep">{a.size}</td>
                    <td className="p-4 text-body-sm text-cocoa-soft">{a.rule}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid gap-6 tablet:grid-cols-2 desktop:grid-cols-4">
            <FeedTemplate type="produk" />
            <FeedTemplate type="edukasi" />
            <FeedTemplate type="quote" />
            <StoryTemplate />
          </div>

          <div className="border border-hairline bg-paper p-6">
            <p className="text-label uppercase tracking-[0.12em] text-sage-deep">Kemasan</p>
            <ul className="mt-3 grid gap-2 tablet:grid-cols-2">
              {packagingRules.map((rule) => (
                <li key={rule} className="flex items-start gap-3 text-body-sm text-cocoa">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-blossom-pink" aria-hidden="true" />
                  {rule}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-hairline bg-paper p-6">
            <p className="text-nav uppercase text-blossom-deep">Catatan penerapan web</p>
            <p className="mt-2 max-w-[70ch] text-body-sm text-cocoa-soft">
              Website A&amp;G memakai turunan bernama <strong className="font-semibold text-cocoa">Quiet Blossom</strong>:
              background putih, pink turun menjadi aksen, dan sudut siku untuk permukaan serta tombol.
              Aturan di halaman ini — proporsi warna 60/25/10/5, radius pill, dan bidang cotton-pink —
              tetap berlaku penuh untuk kemasan, social media, dan marketplace. Rinciannya ada di
              design system.
            </p>
          </div>

          <div className="flex flex-col gap-3 tablet:flex-row">
            <Button href="/design-system">Buka design system</Button>
            <Button href="/tentang" variant="secondary">
              Baca company profile
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
