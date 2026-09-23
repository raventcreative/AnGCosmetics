import Image from "next/image";
import Link from "next/link";
import { HeroEditorial } from "@/components/home/HeroEditorial";
import { Statement } from "@/components/home/Statement";
import { ActiveTrio } from "@/components/home/ActiveTrio";
import { FullBleedStory } from "@/components/home/FullBleedStory";
import { TrustStrip } from "@/components/home/TrustStrip";
import { RoutineSteps } from "@/components/home/RoutineSteps";
import { UGCReviews } from "@/components/home/UGCReviews";
import { ValuesTrio } from "@/components/home/ValuesTrio";
import { ResellerBanner } from "@/components/home/ResellerBanner";
import { SocialGrid } from "@/components/home/SocialGrid";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { ProductGrid } from "@/components/commerce/ProductCard";
import { IngredientsSection } from "@/components/content/IngredientsSection";
import { BlogCard } from "@/components/content/BlogCard";
import { Button } from "@/components/ui/Button";
import { ArrowIcon } from "@/components/ui/Icons";
import { categories, getProduct, products } from "@/lib/data/products";
import { articles } from "@/lib/data/journal";

export default function HomePage() {
  const bestSellers = products.filter((p) => p.bestSeller || p.isNew).slice(0, 4);
  const serum = getProduct("pdrn-booster-body-serum");

  return (
    <>
      <HeroEditorial />
      <TrustStrip />

      <Statement eyebrow="Sejak 2008">
        Semua yang dibutuhkan rutinitasmu, dibuat dengan <em className="accent">niat</em> dalam satu
        brand.
      </Statement>

      <ActiveTrio />

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
          <div className="grid gap-8 tablet:grid-cols-3 tablet:gap-6">
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

      {/* Best seller */}
      <section className="section-y">
        <div className="container-ag flex flex-col gap-10">
          <SectionHeading
            eyebrow="Paling dicari"
            title="Yang bestie borong"
            accent="terus"
            action={
              <Button href="/produk" variant="secondary" size="sm">
                Semua produk
              </Button>
            }
          />
          <ProductGrid products={bestSellers} />
        </div>
      </section>

      <RoutineSteps />

      {serum && (
        <IngredientsSection
          ingredients={serum.ingredients}
          title="Kandungan yang kami tulis"
          accent="terbuka"
          desc="Contoh dari PDRN Booster Body Serum. Kadar setiap bahan aktif kami cantumkan sesuai komposisi resmi yang terdaftar di BPOM."
        />
      )}

      <UGCReviews />
      <ValuesTrio />

      {/* Journal */}
      <section className="section-y">
        <div className="container-ag flex flex-col gap-10">
          <SectionHeading
            eyebrow="Bestie Journal"
            title="Belajar dulu, belanja"
            accent="kemudian"
            action={
              <Button href="/journal" variant="secondary" size="sm">
                Semua artikel
              </Button>
            }
          />
          <div className="grid gap-8 tablet:grid-cols-3 tablet:gap-6">
            {articles.slice(0, 3).map((a) => (
              <BlogCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>

      <ResellerBanner />
      <SocialGrid />
    </>
  );
}
