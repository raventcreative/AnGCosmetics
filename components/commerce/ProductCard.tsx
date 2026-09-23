import Image from "next/image";
import Link from "next/link";
import { Rating } from "@/components/ui/Rating";
import type { Product } from "@/lib/data/products";
import { site, waLink } from "@/lib/site";
import { cn, rupiah } from "@/lib/utils";

/**
 * Product card tanpa kotak: foto duduk di tile mist, teks mengalir di atas putih.
 * Produk tampil utuh dan label kemasan tetap terbaca. Maksimal satu penanda.
 */
export function ProductCard({ product, className }: { product: Product; className?: string }) {
  const badge = product.bestSeller ? "Best seller" : product.isNew ? "Baru" : null;

  return (
    <article className={cn("group flex flex-col", className)}>
      <Link
        href={`/produk/${product.slug}`}
        className="relative block aspect-square overflow-hidden bg-mist"
      >
        {badge && (
          <span className="absolute left-3 top-3 z-10 bg-paper px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-cocoa">
            {badge}
          </span>
        )}
        <Image
          src={product.image}
          alt={product.name}
          width={700}
          height={700}
          className="size-full scale-[0.82] object-contain transition duration-700 group-hover:scale-[0.88]"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-1.5 pt-4">
        <p className="text-nav uppercase text-cocoa-soft">
          {product.type}
          {product.size ? ` · ${product.size}` : ""}
        </p>
        <h3 className="font-sans text-title text-cocoa">
          <Link href={`/produk/${product.slug}`} className="transition hover:text-blossom-deep">
            {product.name}
          </Link>
        </h3>
        {product.reviewCount > 0 && (
          <Rating value={product.rating} count={product.reviewCount} />
        )}
        <p className="mt-1 text-price text-blossom-deep">
          {product.price === null ? (
            <span className="text-body-sm font-semibold text-cocoa-soft">Harga menyusul</span>
          ) : (
            rupiah(product.price)
          )}
        </p>

        <div className="mt-3 flex items-center gap-4">
          <a
            href={
              product.price === null
                ? waLink(`Hai A&G, aku mau tanya ketersediaan ${product.name}.`)
                : site.marketplace.shopee
            }
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 flex-1 items-center justify-center bg-cocoa text-button font-semibold text-ivory transition hover:bg-blossom-deep"
          >
            {product.price === null ? "Tanya stok" : "Beli"}
          </a>
          <Link
            href={`/produk/${product.slug}`}
            className="text-body-sm text-cocoa-soft underline-offset-4 transition hover:text-blossom-deep hover:underline"
          >
            Detail
          </Link>
        </div>

        {product.pom && (
          <p className="pt-2 text-caption text-cocoa-soft">POM {product.pom}</p>
        )}
      </div>
    </article>
  );
}

export function ProductGrid({
  products,
  className,
}: {
  products: Product[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-x-4 gap-y-10 tablet:grid-cols-3 tablet:gap-x-6 desktop:grid-cols-4 desktop:gap-x-8",
        className,
      )}
    >
      {products.map((p) => (
        <ProductCard key={p.slug} product={p} />
      ))}
    </div>
  );
}
