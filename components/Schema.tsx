import type { Product } from "@/lib/data/products";
import { site } from "@/lib/site";

/** Structured data organisasi — dipasang sekali di root layout. */
export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    slogan: site.tagline,
    description: site.description,
    foundingDate: "2008",
    address: { "@type": "PostalAddress", addressCountry: "ID" },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+62${site.contact.waNumber.slice(2)}`,
      contactType: "customer service",
      availableLanguage: ["id"],
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Structured data produk — dipasang di halaman detail produk. */
export function ProductSchema({ product }: { product: Product }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.summary,
    image: `${site.url}${product.image}`,
    brand: { "@type": "Brand", name: site.name },
    category: product.categoryLabel,
    weight: product.size ?? undefined,
    additionalProperty: product.pom
      ? {
          "@type": "PropertyValue",
          name: "Nomor izin edar BPOM",
          value: product.pom,
        }
      : undefined,
    // Produk yang harganya belum ditetapkan tidak boleh punya blok penawaran
    offers:
      product.price === null
        ? undefined
        : {
            "@type": "Offer",
            price: product.price,
            priceCurrency: "IDR",
            availability: "https://schema.org/InStock",
            url: `${site.url}/produk/${product.slug}`,
          },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
