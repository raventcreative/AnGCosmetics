import Image from "next/image";
import Link from "next/link";
import { HeroEditorial } from "@/components/home/HeroEditorial";
import { Statement } from "@/components/home/Statement";
import { ActiveTrio } from "@/components/home/ActiveTrio";
import { NewLine } from "@/components/home/NewLine";
import { FullBleedStory } from "@/components/home/FullBleedStory";
import { TrustStrip } from "@/components/home/TrustStrip";
import { RoutineSteps } from "@/components/home/RoutineSteps";
import { UGCReviews } from "@/components/home/UGCReviews";
import { ValuesTrio } from "@/components/home/ValuesTrio";
import { SocialGrid } from "@/components/home/SocialGrid";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArrowIcon } from "@/components/ui/Icons";
import { categories, products } from "@/lib/data/products";

export default function HomePage() {
  return (
    <>
      <HeroEditorial />
      <TrustStrip />

      <Statement eyebrow="Sejak 2008">
        Semua yang dibutuhkan rutinitasmu, dibuat dengan <em className="accent">niat</em> dalam satu
        brand.
      </Statement>

      <ActiveTrio />
      <NewLine />

      {/* Kategori */}
      <section className="section-y rule-top">
        <div className="container-ag flex flex-col gap-10">
          <SectionHeading
            eyebrow="Kategori"
            title="Dari kamar mandi sampai"
            accent="touch up"
            action={
              <Button href="/produk" variant="text" className="px-0">
                Semua produk →
              </Button>
            }
          />
          <div className="grid gap-8 tablet:grid-cols-2 tablet:gap-6 desktop:grid-cols-4">
            {categories.map((cat) => {
              const sample = products.find((p) => p.category === cat.id)!;
              return (
                <Link key={cat.id} href={`/produk?kategori=${cat.id}`} className="group flex flex-col gap-5">
                  <span className="relative aspect-[4/3] overflow-hidden bg-mist">
                    <Image
                      src={sample.image}
                      alt=""
                      width={500}
                      height={500}
                      className="absolute inset-0 m-auto h-[72%] w-auto object-contain transition duration-700 group-hover:scale-105"
                    />
                  </span>
                  <span className="flex flex-col gap-1.5">
                    <span className="text-nav uppercase text-cocoa-soft">{cat.items}</span>
                    <span className="font-display text-heading-2 text-cocoa">{cat.label}</span>
                    <span className="text-body-sm text-cocoa-soft">{cat.desc}</span>
                    <span className="mt-1 inline-flex items-center gap-2 text-body-sm font-semibold text-blossom-deep">
                      Lihat produk
                      <ArrowIcon className="transition group-hover:translate-x-1" />
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <FullBleedStory />

      <RoutineSteps />

      <UGCReviews />
      <ValuesTrio />

      <SocialGrid />
    </>
  );
}
