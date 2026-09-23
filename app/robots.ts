import type { MetadataRoute } from "next";

// Wajib agar ikut ter-generate saat static export (EXPORT=1).
export const dynamic = "force-static";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
