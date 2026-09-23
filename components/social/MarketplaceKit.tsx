import Image from "next/image";
import { Logo } from "@/components/layout/Logo";
import { FlowerBadge, SageLeaf } from "@/components/layout/FlowerBadge";

/**
 * Aset Shopee dan TikTok Shop. Thumbnail 1:1: produk di tengah di atas cotton-pink
 * atau butter-cream, logo kecil kiri atas, badge BPOM·Halal kanan bawah,
 * harga di pill blossom-deep. Banner toko 1200×400.
 */
export function MarketplaceKit() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-4 tablet:grid-cols-3">
        {[
          { bg: "bg-cotton-pink", img: "/products/whitening-booster-body-lotion.png", price: "Rp 60.000" },
          { bg: "bg-butter-cream", img: "/products/niajic-brightening-soap.png", price: "Rp 30.000" },
          { bg: "bg-cotton-pink", img: "/products/cherry-muse-lip-cream.png", price: "Rp 40.000" },
        ].map((item) => (
          <div
            key={item.img}
            className={`cq relative aspect-square overflow-hidden rounded-lg border border-hairline ${item.bg}`}
          >
            <Logo size="sm" className="absolute left-[5cqw] top-[5cqw] scale-[0.7]" />
            <div className="flex size-full items-center justify-center p-[12cqw]">
              <Image
                src={item.img}
                alt=""
                width={700}
                height={700}
                className="size-full object-contain"
              />
            </div>
            <span className="absolute bottom-[5cqw] left-[5cqw] rounded-full bg-blossom-deep px-[4cqw] py-[2cqw] text-[4cqw] font-semibold text-ivory">
              {item.price}
            </span>
            <span className="absolute bottom-[5cqw] right-[5cqw] rounded-full border border-sage-deep bg-white px-[3cqw] py-[1.6cqw] text-[3cqw] font-semibold uppercase tracking-[0.1em] text-sage-deep">
              BPOM · Halal
            </span>
          </div>
        ))}
      </div>

      <div className="cq relative aspect-[3/1] overflow-hidden rounded-lg border border-hairline bg-ivory">
        <SageLeaf className="absolute -left-[2cqw] bottom-0 w-[18cqw] opacity-70" />
        <div className="flex size-full items-center justify-between px-[6cqw]">
          <div>
            <p className="text-[2.4cqw] font-semibold uppercase tracking-[0.12em] text-sage-deep">
              Toko resmi A&amp;G Cosmetics
            </p>
            <p className="mt-[1.4cqw] font-display text-[6cqw] leading-tight text-cocoa">
              Glow ala <em className="accent">Korea</em>, harga bestie
            </p>
            <p className="mt-[2cqw] inline-block rounded-full bg-blossom-deep px-[3.4cqw] py-[1.6cqw] text-[2.6cqw] font-semibold text-ivory">
              Belanja sekarang
            </p>
          </div>
          <div className="flex items-end gap-[2cqw]">
            <FlowerBadge className="size-[24cqw]">
              <Image
                src="/products/advanced-brightening-shower-gel.png"
                alt=""
                width={700}
                height={700}
                className="h-[76%] w-auto object-contain"
              />
            </FlowerBadge>
            <Image
              src="/products/pdrn-booster-body-serum.png"
              alt=""
              width={700}
              height={700}
              className="w-[18cqw] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
