import Link from "next/link";
import { ProductCard } from "@/components/commerce/ProductCard";
import { Button } from "@/components/ui/Button";
import { productsByCategory } from "@/lib/data/products";

/**
 * Peluncuran lini perawatan wajah. Ditaruh terpisah dari best seller karena
 * produknya belum punya harga, ulasan, dan nomor izin edar yang bisa ditampilkan.
 */
export function NewLine() {
  const items = productsByCategory("face-care");
  if (items.length === 0) return null;

  return (
    <section className="section-y bg-mist">
      <div className="container-ag flex flex-col gap-10">
        <div className="flex flex-col gap-4 desktop:flex-row desktop:items-end desktop:justify-between">
          <div className="flex flex-col gap-4">
            <p className="text-nav uppercase text-blossom-deep">Baru</p>
            <h2 className="max-w-[20ch] font-display text-heading-1 text-cocoa desktop:text-display-l">
              Lini perawatan <em className="accent">wajah</em>
            </h2>
            <p className="max-w-[54ch] text-body text-cocoa-soft">
              Tiga langkah dasar untuk wajah: bersihkan dengan facial foam low pH, siapkan kulit
              dengan essence toner, lalu rawat dengan serum. Harga dan nomor izin edarnya menyusul.
            </p>
          </div>
          <Button href="/produk?kategori=face-care" variant="secondary" size="sm">
            Lihat lini wajah
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 tablet:grid-cols-3 tablet:gap-x-6 desktop:gap-x-8">
          {items.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <p className="text-caption text-cocoa-soft">
          Produk sedang dalam proses pendaftaran. Hubungi kami lewat WhatsApp untuk menanyakan
          ketersediaan dan jadwal rilisnya.{" "}
          <Link href="/kontak" className="text-blossom-deep underline-offset-4 hover:underline">
            Hubungi kami
          </Link>
        </p>
      </div>
    </section>
  );
}
