import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/layout/Hero";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { FlowerBadge, SageLeaf } from "@/components/layout/FlowerBadge";
import { ProductGrid } from "@/components/commerce/ProductCard";
import { IngredientsSection } from "@/components/content/IngredientsSection";
import { Testimonial } from "@/components/content/Testimonial";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { BlogCard } from "@/components/content/BlogCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowIcon } from "@/components/ui/Icons";
import { categories, products } from "@/lib/data/products";
import { achievements, about } from "@/lib/data/company";
import { articles } from "@/lib/data/journal";
import { faqs } from "@/lib/data/faq";
import { site, waLink } from "@/lib/site";

export default function HomePage() {
  const bestSellers = products.filter((p) => p.bestSeller || p.isNew).slice(0, 4);
  const heroIngredients = products[3].ingredients;

  return (
    <>
      <Hero />

      {/* Kategori */}
      <section className="section-y bg-butter-cream">
        <div className="container-ag flex flex-col gap-8">
          <SectionHeading
            eyebrow="Kategori"
            title="Satu brand untuk seluruh"
            accent="rutinitas"
            desc="Dari kamar mandi sampai touch up di tas. Semua sudah punya izin edar BPOM dan sertifikasi halal."
          />
          <div className="grid gap-4 tablet:grid-cols-3 tablet:gap-6">
            {categories.map((cat) => {
              const sample = products.find((p) => p.category === cat.id)!;
              return (
                <Link
                  key={cat.id}
                  href={`/produk?kategori=${cat.id}`}
                  className="group flex flex-col gap-4 rounded-lg border border-line bg-white p-6 transition hover:shadow-md"
                >
                  <FlowerBadge color="cotton" className="size-32 self-center">
                    <Image
                      src={sample.image}
                      alt=""
                      width={400}
                      height={400}
                      className="h-[76%] w-auto object-contain"
                    />
                  </FlowerBadge>
                  <div>
                    <p className="text-label uppercase tracking-[0.12em] text-sage-deep">
                      {cat.items}
                    </p>
                    <h3 className="mt-1 font-display text-heading-2 text-cocoa">{cat.label}</h3>
                    <p className="mt-2 text-body-sm text-cocoa-soft">{cat.desc}</p>
                  </div>
                  <span className="mt-auto inline-flex items-center gap-2 text-body-sm font-semibold text-blossom-deep">
                    Lihat produk
                    <ArrowIcon className="transition group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Best seller */}
      <section className="section-y">
        <div className="container-ag flex flex-col gap-8">
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

      {/* Kredibilitas */}
      <section className="relative overflow-hidden bg-cocoa section-y text-ivory">
        <SageLeaf className="absolute -left-6 bottom-0 w-48 opacity-25" />
        <div className="container-ag relative flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <p className="text-label uppercase tracking-[0.12em] text-cotton-pink">
              Kenapa bestie percaya
            </p>
            <h2 className="max-w-[30ch] font-display text-heading-1">
              {about.yearsExperience}+ tahun di industri kecantikan{" "}
              <em className="italic text-cotton-pink">Indonesia</em>
            </h2>
          </div>
          <ul className="grid gap-6 tablet:grid-cols-2 desktop:grid-cols-4">
            {achievements.map((item, i) => (
              <li key={item.title} className="flex flex-col gap-2 border-t border-ivory/20 pt-4">
                <span className="font-display text-heading-2 text-cotton-pink">
                  0{i + 1}
                </span>
                <p className="text-title">{item.title}</p>
                <p className="text-body-sm text-ivory/75">{item.desc}</p>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 tablet:flex-row">
            <Button href="/tentang" variant="primary-light">
              Cerita lengkap A&amp;G
            </Button>
            <Button
              href={waLink("Hai A&G, aku mau tanya soal produk A&G Cosmetics.")}
              variant="secondary-light"
              external
            >
              Chat bestie kami
            </Button>
          </div>
        </div>
      </section>

      <IngredientsSection
        ingredients={heroIngredients}
        title="Kandungan yang kami tulis"
        accent="terbuka"
        desc="Contoh dari PDRN Booster Body Serum. Kami hanya menulis klaim yang bisa dibuktikan dari komposisi resmi produk."
      />

      {/* Rutinitas 3 langkah */}
      <section className="section-y">
        <div className="container-ag grid gap-10 desktop:grid-cols-[1fr_1.1fr] desktop:items-center">
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="Rutinitas"
              title="Tiga langkah, glow-nya"
              accent="kelihatan"
              desc="Nggak perlu sepuluh produk. Yang penting urutannya benar dan konsisten."
            />
            <ol className="flex flex-col gap-4">
              {[
                { step: "Bersihkan", desc: "Advanced Brightening Shower Gel atau Niajic Brightening Soap." },
                { step: "Rawat", desc: "PDRN Booster Body Serum di area yang mau diratakan warnanya." },
                { step: "Lindungi", desc: "Whitening Booster Body Lotion — sudah ada UV Filter." },
              ].map((item, i) => (
                <li key={item.step} className="flex gap-4 rounded-lg border border-line bg-white p-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-cotton-pink font-display text-title text-blossom-deep">
                    {i + 1}
                  </span>
                  <span>
                    <span className="block text-title text-cocoa">{item.step}</span>
                    <span className="block text-body-sm text-cocoa-soft">{item.desc}</span>
                  </span>
                </li>
              ))}
            </ol>
            <Button href="/journal/urutan-body-care-biar-glow-nya-kelihatan" variant="text">
              Baca panduan lengkapnya →
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/gallery/advanced-brightening-shower-gel-1.jpg"
              alt="Advanced Brightening Shower Gel"
              width={900}
              height={1274}
              className="col-span-2 w-full rounded-xl border border-line object-cover"
            />
            <Image
              src="/gallery/pdrn-booster-body-serum-1.jpg"
              alt="PDRN Booster Body Serum"
              width={900}
              height={1274}
              className="w-full rounded-lg border border-line object-cover"
            />
            <Image
              src="/gallery/whitening-booster-body-lotion-1.jpg"
              alt="Whitening Booster Body Lotion"
              width={900}
              height={1274}
              className="w-full rounded-lg border border-line object-cover"
            />
          </div>
        </div>
      </section>

      <Testimonial />

      {/* Journal */}
      <section className="section-y">
        <div className="container-ag flex flex-col gap-8">
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
          <div className="grid gap-6 tablet:grid-cols-3">
            {articles.slice(0, 3).map((a) => (
              <BlogCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + reseller CTA */}
      <section className="section-y bg-butter-cream">
        <div className="container-ag grid gap-10 desktop:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-6">
            <SectionHeading eyebrow="FAQ" title="Yang paling sering" accent="ditanya" />
            <FAQAccordion items={faqs.filter((f) => f.group !== "reseller").slice(0, 5)} />
            <Button href="/faq" variant="text">
              Lihat semua pertanyaan →
            </Button>
          </div>
          <div className="flex flex-col gap-4 rounded-lg border border-cotton-pink bg-white p-6 shadow-md desktop:p-8">
            <Badge tone="promo">Peluang usaha</Badge>
            <h3 className="font-display text-heading-1 text-cocoa">
              Jadi <em className="accent">reseller</em> A&amp;G
            </h3>
            <p className="text-body text-cocoa-soft">
              Margin sampai dua kali harga ambil, produk sudah BPOM dan Halal, dan materi jualan
              siap pakai. Diskon 5% untuk pengambilan di atas 3 lusin.
            </p>
            <ul className="flex flex-col gap-2 text-body-sm text-cocoa">
              {["Harga reseller mulai Rp 12.500", "Materi konten dan foto produk siap pakai", "Bisa online maupun toko offline"].map(
                (point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sage" aria-hidden="true" />
                    {point}
                  </li>
                ),
              )}
            </ul>
            <div className="mt-2 flex flex-col gap-3 tablet:flex-row">
              <Button href="/reseller">Lihat daftar harga</Button>
              <Button
                href={waLink(
                  `Hai ${site.contact.person}, aku mau tanya soal kerja sama reseller A&G Cosmetics.`,
                )}
                variant="secondary"
                external
              >
                Chat {site.contact.person}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
