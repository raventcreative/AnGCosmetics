import Image from "next/image";
import Link from "next/link";
import { getProduct } from "@/lib/data/products";
import { rupiah } from "@/lib/utils";

/**
 * Tiga produk penanda brand, dibaca lewat kandungan aktifnya.
 * Pita warna tipis di belakang produk memberi ritme tanpa membuat halaman ramai.
 */
const trio = [
  {
    slug: "pdrn-booster-body-serum",
    active: "PDRN 2% + Alpha Arbutin 10%",
    band: "bg-cotton-pink/45",
    note: "Serum tubuh dengan 18%++ bahan aktif untuk warna kulit yang lebih rata.",
  },
  {
    slug: "whitening-booster-body-lotion",
    active: "UV Filter + Niacinamide",
    band: "bg-mist",
    note: "Lotion booster yang melembapkan sekaligus melindungi dari sinar UV harian.",
  },
  {
    slug: "advanced-brightening-shower-gel",
    active: "Licorice + Panthenol",
    band: "bg-sage/25",
    note: "Sabun mandi no-SLES yang membersihkan tanpa membuat kulit terasa ketarik.",
  },
];

export function ActiveTrio() {
  return (
    <section className="section-y">
      <div className="container-ag">
        <div className="grid gap-12 tablet:grid-cols-3 tablet:gap-8">
          {trio.map((item) => {
            const product = getProduct(item.slug);
            if (!product) return null;
            return (
              <article key={item.slug} className="group flex flex-col">
                <Link href={`/produk/${product.slug}`} className="relative block">
                  <span
                    className={`absolute inset-x-0 top-[38%] block h-[26%] ${item.band}`}
                    aria-hidden="true"
                  />
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={700}
                    height={700}
                    className="relative mx-auto h-[280px] w-auto object-contain transition duration-700 group-hover:-translate-y-2 desktop:h-[320px]"
                  />
                </Link>
                <div className="mt-7 flex flex-col gap-2 text-center">
                  <p className="text-nav uppercase text-cocoa-soft">{item.active}</p>
                  <h3 className="font-display text-heading-2 font-normal text-cocoa">
                    <Link href={`/produk/${product.slug}`} className="hover:text-blossom-deep">
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mx-auto max-w-[34ch] text-body-sm text-cocoa-soft">{item.note}</p>
                  {product.price !== null && (
                    <p className="mt-1 text-price text-blossom-deep">{rupiah(product.price)}</p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
