import type { Metadata } from "next";
import { Suspense } from "react";
import { ProductCatalog } from "./ProductCatalog";

export const metadata: Metadata = {
  title: "Semua Produk",
  description:
    "Katalog lengkap A&G Cosmetics: face care, body care, fragrance, dan decorative. Filter berdasarkan masalah kulit, tipe produk, dan kandungan.",
};

export default function ProdukPage() {
  return (
    // Katalog membaca query string, jadi butuh batas Suspense saat prerender
    <Suspense fallback={<div className="container-ag section-y" />}>
      <ProductCatalog />
    </Suspense>
  );
}
