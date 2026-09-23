import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  about,
  achievements,
  closing,
  consumerInsight,
  coreValues,
  goals,
  targetMarket,
  timeline,
} from "@/lib/data/company";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tentang A&G Cosmetics",
  description:
    "Company profile A&G Cosmetics: perjalanan sejak 2008, visi misi, core values, pencapaian, strategi, dan segmentasi pasar.",
};

export default function TentangPage() {
  return (
    <>
      {/* Hero brand */}
      <section className="relative isolate">
        <div className="relative min-h-[460px] w-full overflow-hidden tablet:min-h-[560px]">
          <Image
            src="/editorial/hero-portrait.jpg"
            alt="Model A&G Cosmetics dalam cahaya alami"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[62%_28%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/85 to-paper/10 tablet:from-paper/96 tablet:via-paper/70 tablet:to-transparent" />
          <div className="container-ag relative flex min-h-[460px] items-center py-14 tablet:min-h-[560px]">
            <div className="flex max-w-[540px] flex-col gap-5">
              <p className="text-nav uppercase text-blossom-deep">Tentang kami</p>
              <h1 className="font-display text-display-l text-cocoa desktop:text-display-2xl">
                Your Skin&apos;s <em className="accent">Bestie</em>
              </h1>
              <p className="text-body text-cocoa-soft">{about.positioning}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cerita */}
      <section className="section-y">
        <div className="container-ag grid gap-10 desktop:grid-cols-[1fr_1fr] desktop:gap-20">
          <div className="flex flex-col gap-5">
            <p className="text-nav uppercase text-cocoa-soft">01 · Cerita</p>
            <p className="text-body text-cocoa">{about.intro}</p>
            <p className="text-body text-cocoa-soft">{about.pandemic}</p>
          </div>
          <div className="flex flex-col gap-6 border-l border-hairline pl-8 desktop:pl-12">
            <p className="font-display text-heading-2 italic text-blossom-deep">{about.now}</p>
            <div className="relative aspect-[4/3] overflow-hidden bg-mist">
              <Image
                src="/editorial/morning-ritual.jpg"
                alt="Rutinitas pagi dengan produk A&G Cosmetics"
                fill
                sizes="(max-width: 1200px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="bg-mist section-y">
        <div className="container-ag flex flex-col gap-8">
          <p className="max-w-[40ch] font-display text-heading-1 text-cocoa">
            {about.positioning}
          </p>
          <div className="grid gap-4 tablet:grid-cols-2 tablet:gap-6">
            <div className="flex flex-col gap-3 border border-hairline bg-paper p-6 desktop:p-8">
              <Badge tone="variant">Visi</Badge>
              <p className="text-body text-cocoa">{about.vision}</p>
            </div>
            <div className="flex flex-col gap-3 border border-hairline bg-paper p-6 desktop:p-8">
              <Badge tone="variant">Misi</Badge>
              <p className="text-body text-cocoa">{about.mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="section-y">
        <div className="container-ag flex flex-col gap-8">
          <SectionHeading eyebrow="02 · Core values" title="Fondasi" accent="kami" />
          <div className="grid gap-4 tablet:grid-cols-2 tablet:gap-6">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="flex flex-col gap-3 border border-hairline bg-paper p-6 desktop:p-8"
              >
                <h3 className="font-display text-heading-2 text-cocoa">{value.title}</h3>
                <p className="text-body text-cocoa-soft">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-cocoa section-y text-ivory">
        <div className="container-ag flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <p className="text-label uppercase tracking-[0.12em] text-cotton-pink">Perjalanan</p>
            <h2 className="font-display text-heading-1">
              Dari A&amp;G Shower Gold ke <em className="italic text-cotton-pink">Garden Blossom</em>
            </h2>
          </div>
          <ol className="grid gap-6 tablet:grid-cols-2 desktop:grid-cols-4">
            {timeline.map((item) => (
              <li key={item.year} className="flex flex-col gap-2 border-t border-ivory/20 pt-4">
                <span className="font-display text-heading-2 text-cotton-pink">{item.year}</span>
                <p className="text-title">{item.title}</p>
                <p className="text-body-sm text-ivory/75">{item.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-y">
        <div className="container-ag flex flex-col gap-8">
          <SectionHeading
            eyebrow="03 · Achievements & accountability"
            title="Pencapaian &"
            accent="akuntabilitas"
          />
          <div className="grid gap-4 tablet:grid-cols-2 desktop:grid-cols-4 tablet:gap-6">
            {achievements.map((item) => (
              <div key={item.title} className="border border-hairline bg-paper p-6">
                <h3 className="text-title font-sans text-cocoa">{item.title}</h3>
                <p className="mt-2 text-body-sm text-cocoa-soft">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals & strategy */}
      <section className="bg-mist section-y">
        <div className="container-ag flex flex-col gap-8">
          <SectionHeading
            eyebrow="04 · Goals & strategy"
            title={goals.headline}
            desc={goals.desc}
          />
          <div className="grid gap-4 tablet:grid-cols-3 tablet:gap-6">
            {goals.strategy.map((item, i) => (
              <div key={item.title} className="border border-hairline bg-paper p-6">
                <span className="font-display text-heading-2 text-blossom-pink">0{i + 1}</span>
                <h3 className="mt-2 text-title font-sans text-cocoa">{item.title}</h3>
                <p className="mt-1 text-body-sm text-cocoa-soft">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target market */}
      <section className="section-y">
        <div className="container-ag flex flex-col gap-8">
          <SectionHeading
            eyebrow="05 · Target segmentation"
            title="Siapa bestie"
            accent="A&G"
            desc="Segmentasi pasar yang kami layani, langsung dari company profile 2026."
          />
          <div className="grid gap-4 tablet:grid-cols-2 tablet:gap-6">
            {targetMarket.map((segment) => (
              <div key={segment.label} className="border border-hairline bg-paper p-6">
                <p className="text-label uppercase tracking-[0.12em] text-sage-deep">
                  {segment.label}
                </p>
                <ul className="mt-3 flex flex-col gap-2">
                  {segment.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-body-sm text-cocoa">
                      <span
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-blossom-pink"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="bg-mist p-6">
            <p className="text-label uppercase tracking-[0.12em] text-cocoa-soft">
              Consumer&apos;s insight
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {consumerInsight.map((insight) => (
                <li key={insight}>
                  <Badge tone="variant">{insight}</Badge>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="relative isolate">
        <div className="relative min-h-[320px] w-full overflow-hidden tablet:min-h-[420px]">
          <Image
            src="/editorial/nature-terrace.jpg"
            alt="Lanskap Indonesia di pagi hari"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cocoa/75 via-cocoa/45 to-cocoa/15" />
          <div className="container-ag relative flex min-h-[320px] items-center py-12 tablet:min-h-[420px]">
            <p className="max-w-[26ch] font-display text-heading-1 text-ivory desktop:text-display-l">
              Dibuat di Indonesia, untuk kulit <em className="italic">Indonesia</em>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-mist section-y">
        <div className="container-ag flex flex-col gap-6 desktop:max-w-[76ch]">
          <p className="text-label uppercase tracking-[0.12em] text-blossom-deep">08 · Penutup</p>
          <h2 className="font-display text-heading-1 text-cocoa">{closing.headline}</h2>
          {closing.paragraphs.map((p) => (
            <p key={p.slice(0, 32)} className="text-body text-cocoa-soft">
              {p}
            </p>
          ))}
          <div className="flex flex-col gap-3 tablet:flex-row">
            <Button
              href={waLink(
                `Hai ${site.contact.person}, saya mau berdiskusi soal kerja sama distribusi produk A&G Cosmetics.`,
              )}
              external
            >
              Diskusi kerja sama
            </Button>
            <Button href="/reseller" variant="secondary">
              Lihat daftar harga
            </Button>
          </div>
          <p className="text-body-sm text-cocoa-soft">
            Kontak person: {site.contact.phone} ({site.contact.person})
          </p>
        </div>
      </section>
    </>
  );
}
