import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/commerce/ProductDetail";
import { ProductGrid } from "@/components/commerce/ProductCard";
import { Review } from "@/components/commerce/Review";
import { IngredientsSection } from "@/components/content/IngredientsSection";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { ProductSchema } from "@/components/Schema";
import { getProduct, products, relatedProducts } from "@/lib/data/products";
import { faqs } from "@/lib/data/faq";
import { rupiah } from "@/lib/utils";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Produk tidak ditemukan" };
  return {
    title: product.name,
    description: `${product.summary} ${product.size}, POM ${product.pom}. ${rupiah(product.price)}.`,
    openGraph: { title: product.name, description: product.summary, images: [product.image] },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = relatedProducts(slug);

  return (
    <>
      <ProductSchema product={product} />
      <ProductDetail product={product} />

      {product.claims && (
        <section className="bg-cotton-pink/50 section-y">
          <div className="container-ag flex flex-col gap-6">
            <SectionHeading
              eyebrow="Hasil uji"
              title="Angka yang bisa kami"
              accent="tunjukkan"
              align="center"
            />
            <ul className="grid gap-4 tablet:grid-cols-3">
              {product.claims.map((claim) => (
                <li
                  key={claim.label}
                  className="rounded-lg border border-line bg-white p-6 text-center"
                >
                  <p className="font-display text-display-l text-blossom-deep">{claim.value}</p>
                  <p className="mt-2 text-body-sm text-cocoa">{claim.label}</p>
                </li>
              ))}
            </ul>
            {product.claimNote && (
              <p className="text-center text-caption text-cocoa-soft">*{product.claimNote}</p>
            )}
          </div>
        </section>
      )}

      <IngredientsSection
        ingredients={product.ingredients}
        title="Kandungan di dalam"
        accent={product.type.toLowerCase()}
        desc="Ditulis sesuai komposisi resmi produk yang terdaftar di BPOM."
      />

      <section className="section-y">
        <div className="container-ag flex flex-col gap-8">
          <SectionHeading eyebrow="Ulasan" title="Kata bestie yang sudah" accent="pakai" />
          <Review average={product.rating} total={product.reviewCount} />
        </div>
      </section>

      <section className="bg-butter-cream section-y">
        <div className="container-ag flex flex-col gap-8 desktop:grid desktop:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading eyebrow="FAQ" title="Sebelum kamu" accent="checkout" />
          <FAQAccordion items={faqs.filter((f) => f.group !== "reseller").slice(0, 4)} />
        </div>
      </section>

      <section className="section-y">
        <div className="container-ag flex flex-col gap-8">
          <SectionHeading eyebrow="Lengkapi rutinitas" title="Sering dibeli" accent="bareng" />
          <ProductGrid products={related} />
        </div>
      </section>
    </>
  );
}
