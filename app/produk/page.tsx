import type { Metadata } from "next";
import { ProductCatalog } from "./ProductCatalog";

export const metadata: Metadata = {
  title: "Semua Produk",
  description:
    "Katalog lengkap A&G Cosmetics: body care, fragrance, dan decorative. Semua produk sudah BPOM dan Halal, harga Rp 30rb sampai Rp 80rb.",
};

export default function ProdukPage() {
  return <ProductCatalog />;
}
