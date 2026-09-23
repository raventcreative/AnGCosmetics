import type { MetadataRoute } from "next";

// Wajib agar ikut ter-generate saat static export (EXPORT=1).
export const dynamic = "force-static";
import { products } from "@/lib/data/products";
import { articles } from "@/lib/data/journal";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: "", priority: 1 },
    { path: "/produk", priority: 0.9 },
    { path: "/tentang", priority: 0.8 },
    { path: "/reseller", priority: 0.8 },
    { path: "/journal", priority: 0.7 },
    { path: "/faq", priority: 0.6 },
    { path: "/kontak", priority: 0.6 },
    { path: "/brand-guideline", priority: 0.4 },
    { path: "/design-system", priority: 0.4 },
  ];

  return [
    ...staticPages.map((p) => ({
      url: `${site.url}${p.path}`,
      lastModified: new Date(),
      priority: p.priority,
    })),
    ...products.map((p) => ({
      url: `${site.url}/produk/${p.slug}`,
      lastModified: new Date(),
      priority: 0.8,
    })),
    ...articles.map((a) => ({
      url: `${site.url}/journal/${a.slug}`,
      lastModified: new Date(),
      priority: 0.6,
    })),
  ];
}
