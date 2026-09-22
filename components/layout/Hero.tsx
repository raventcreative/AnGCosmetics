import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ShieldIcon, LeafIcon, SparkleIcon } from "@/components/ui/Icons";
import { FlowerBadge, SageLeaf } from "./FlowerBadge";
import { trustPoints } from "@/lib/data/company";
import { site } from "@/lib/site";

const icons = [ShieldIcon, LeafIcon, SparkleIcon];

/**
 * Section pembuka homepage.
 * Kiri: eyebrow, headline display-xl dengan satu kata aksen italic, subteks,
 * tombol primary + secondary, 3 trust point. Kanan: produk di atas bunga scallop.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-ag grid items-center gap-10 py-12 desktop:grid-cols-2 desktop:gap-16 desktop:py-24">
        <div className="order-2 flex flex-col gap-6 desktop:order-1">
          <p className="text-label uppercase tracking-[0.12em] text-sage-deep">
            Affordable luxury · Sejak 2008
          </p>
          <h1 className="font-display text-display-l text-cocoa desktop:text-display-xl">
            Glow ala <em className="accent">Korea</em>, buatan Indonesia
          </h1>
          <p className="max-w-[46ch] text-body text-cocoa-soft">
            Rangkaian body care, fragrance, dan makeup yang lengkap untuk rutinitas harianmu.
            Semua sudah BPOM dan Halal, di harga Rp 30rb sampai Rp 80rb.
          </p>
          <div className="flex flex-col gap-3 tablet:flex-row">
            <Button href="/produk" size="default">
              Lihat semua produk
            </Button>
            <Button href={site.marketplace.shopee} variant="secondary" external>
              Cek keranjang kuning
            </Button>
          </div>
          <ul className="mt-2 grid gap-4 tablet:grid-cols-3">
            {trustPoints.map((point, i) => {
              const Icon = icons[i];
              return (
                <li key={point.title} className="flex items-start gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-cotton-pink text-blossom-deep">
                    <Icon width={18} height={18} />
                  </span>
                  <span>
                    <span className="block text-body-sm font-semibold text-cocoa">
                      {point.title}
                    </span>
                    <span className="block text-caption text-cocoa-soft">{point.desc}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="relative order-1 flex justify-center desktop:order-2">
          <FlowerBadge className="size-[280px] tablet:size-[380px] desktop:size-[460px]">
            <Image
              src="/products/advanced-brightening-shower-gel.png"
              alt="Advanced Brightening Shower Gel A&G Cosmetics"
              width={700}
              height={700}
              priority
              className="h-[78%] w-auto object-contain drop-shadow-[0_18px_28px_rgba(59,46,48,0.18)]"
            />
          </FlowerBadge>
          <SageLeaf className="absolute -bottom-2 -left-2 w-28 rotate-12 tablet:w-36 desktop:-left-6 desktop:w-44" />
          <div className="absolute -right-1 top-4 rounded-full bg-white px-4 py-2 shadow-md desktop:right-4">
            <p className="text-caption font-semibold text-cocoa">Best seller</p>
            <p className="text-price text-blossom-deep">Rp 60.000</p>
          </div>
        </div>
      </div>
    </section>
  );
}
