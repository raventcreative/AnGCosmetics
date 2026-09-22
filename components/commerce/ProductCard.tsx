import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Rating } from "@/components/ui/Rating";
import { CartIcon } from "@/components/ui/Icons";
import type { Product } from "@/lib/data/products";
import { site } from "@/lib/site";
import { rupiah } from "@/lib/utils";

/**
 * Card dan area foto berlatar white dengan divider line. Produk utuh, label terbaca.
 * Maksimal satu badge promo. Grid: 2 kolom mobile, 3 tablet, 4 desktop.
 */
export function ProductCard({ product }: { product: Product }) {
  const badge = product.bestSeller ? "Best seller" : product.isNew ? "Baru" : null;

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-line bg-white transition hover:shadow-md">
      <Link href={`/produk/${product.slug}`} className="relative block border-b border-line p-4">
        {badge && (
          <Badge tone="promo" className="absolute left-3 top-3 z-10">
            {badge}
          </Badge>
        )}
        <Image
          src={product.image}
          alt={product.name}
          width={700}
          height={700}
          className="mx-auto aspect-square w-full max-w-[220px] object-contain transition duration-300 group-hover:scale-[1.03]"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-label uppercase tracking-[0.12em] text-cocoa-soft">
          {product.type} · {product.size}
        </p>
        <h3 className="text-title font-sans text-cocoa">
          <Link href={`/produk/${product.slug}`} className="hover:text-blossom-deep">
            {product.name}
          </Link>
        </h3>
        <Rating value={product.rating} count={product.reviewCount} />
        <p className="mt-auto flex items-baseline gap-2 pt-2">
          <span className="text-price text-blossom-deep">{rupiah(product.price)}</span>
        </p>
        <div className="flex flex-col gap-2 tablet:flex-row tablet:items-center">
          <a
            href={site.marketplace.shopee}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 items-center justify-center gap-2 rounded-full bg-blossom-deep text-button font-semibold text-ivory transition hover:bg-[#93395d] tablet:flex-1"
          >
            <CartIcon width={18} height={18} />
            Beli
          </a>
          <Link
            href={`/produk/${product.slug}`}
            className="flex h-11 items-center justify-center rounded-full border border-blossom-deep px-4 text-button font-semibold text-blossom-deep transition hover:bg-cotton-pink/40"
          >
            Detail
          </Link>
        </div>
        <p className="text-caption text-cocoa-soft">POM {product.pom}</p>
      </div>
    </article>
  );
}

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 tablet:grid-cols-3 tablet:gap-6 desktop:grid-cols-4">
      {products.map((p) => (
        <ProductCard key={p.slug} product={p} />
      ))}
    </div>
  );
}
