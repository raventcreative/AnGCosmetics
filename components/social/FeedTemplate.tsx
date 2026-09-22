import Image from "next/image";
import { Logo } from "@/components/layout/Logo";
import { FlowerBadge, SageLeaf } from "@/components/layout/FlowerBadge";
import { cn } from "@/lib/utils";

export type FeedType = "produk" | "edukasi" | "quote" | "promo" | "review";

/**
 * Template feed Instagram/TikTok 4:5 (1080×1350). Lima tipe.
 * Logo kecil di pojok, margin aman 64px (≈5.9% sisi), maks 12 kata di headline.
 * Ukuran teks memakai satuan container query supaya preview tetap proporsional
 * saat diperkecil di website maupun diekspor 1080×1350.
 */
export function FeedTemplate({ type, className }: { type: FeedType; className?: string }) {
  return (
    <div
      className={cn(
        "cq relative aspect-4/5 w-full overflow-hidden rounded-xl border border-line",
        type === "edukasi" && "bg-butter-cream",
        type === "quote" && "bg-cocoa",
        type === "promo" && "bg-blossom-deep",
        type === "produk" && "bg-ivory",
        type === "review" && "bg-cotton-pink/70",
        className,
      )}
    >
      <div className="absolute inset-0 p-[6cqw]">
        {type === "produk" && (
          <div className="flex size-full flex-col items-center justify-between text-center">
            <p className="text-[3cqw] font-semibold uppercase tracking-[0.12em] text-sage-deep">
              Body Care
            </p>
            <FlowerBadge className="size-[62cqw]">
              <Image
                src="/products/advanced-brightening-shower-gel.png"
                alt=""
                width={700}
                height={700}
                className="h-[78%] w-auto object-contain"
              />
            </FlowerBadge>
            <div>
              <p className="font-display text-[8cqw] leading-tight text-cocoa">
                Glow ala <em className="accent">Korea</em>
              </p>
              <p className="mt-[1cqw] text-[3.4cqw] text-cocoa-soft">
                Advanced Brightening Shower Gel · 250 gram
              </p>
            </div>
            <Logo size="sm" className="scale-[0.9]" />
          </div>
        )}

        {type === "edukasi" && (
          <div className="flex size-full flex-col justify-between">
            <div className="flex items-center justify-between">
              <p className="text-[3cqw] font-semibold uppercase tracking-[0.12em] text-blossom-deep">
                Bestie tips
              </p>
              <Logo size="sm" className="scale-[0.8]" />
            </div>
            <div>
              <p className="font-display text-[9cqw] leading-tight text-cocoa">
                3 step <em className="accent">glow</em>
              </p>
              <ul className="mt-[3cqw] flex flex-col gap-[2cqw]">
                {["Bersihkan pakai shower gel", "Rawat pakai body serum", "Tutup pakai lotion UV"].map(
                  (step, i) => (
                    <li key={step} className="flex items-center gap-[2cqw]">
                      <span className="flex size-[7cqw] items-center justify-center rounded-full bg-white text-[3.4cqw] font-semibold text-blossom-deep">
                        {i + 1}
                      </span>
                      <span className="text-[3.6cqw] text-cocoa">{step}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="flex items-end justify-between">
              <p className="rounded-full bg-white px-[3cqw] py-[1.4cqw] text-[2.8cqw] font-semibold uppercase tracking-[0.12em] text-sage-deep">
                BPOM · Halal
              </p>
              <SageLeaf className="w-[18cqw]" />
            </div>
          </div>
        )}

        {type === "quote" && (
          <div className="flex size-full flex-col items-center justify-center gap-[4cqw] text-center">
            <SageLeaf className="w-[16cqw] opacity-80" />
            <p className="font-display text-[9cqw] italic leading-tight text-ivory">
              Cantik nggak harus mahal.
            </p>
            <p className="text-[3.2cqw] text-cotton-pink">Your Skin&apos;s Bestie.</p>
            <Logo tone="ivory" size="sm" className="mt-[4cqw] scale-[0.9]" />
          </div>
        )}

        {type === "promo" && (
          <div className="flex size-full flex-col justify-between text-ivory">
            <div className="flex items-start justify-between">
              <Logo tone="ivory" size="sm" className="scale-[0.8]" />
              <span className="rounded-full bg-ivory px-[3cqw] py-[1.4cqw] text-[2.8cqw] font-semibold uppercase tracking-[0.12em] text-blossom-deep">
                Promo
              </span>
            </div>
            <div className="flex items-center gap-[3cqw]">
              <Image
                src="/products/whitening-booster-body-lotion.png"
                alt=""
                width={700}
                height={700}
                className="w-[42cqw] object-contain"
              />
              <div>
                <p className="font-display text-[8cqw] leading-tight">
                  Booster <em className="italic text-cotton-pink">lotion</em>
                </p>
                <p className="mt-[1cqw] text-[3.2cqw] text-cotton-pink line-through">Rp 75.000</p>
                <p className="text-[9cqw] font-semibold leading-none">Rp 60.000</p>
              </div>
            </div>
            <p className="text-[3.2cqw]">Cek keranjang kuning, ya bestie.</p>
          </div>
        )}

        {type === "review" && (
          <div className="flex size-full flex-col justify-between">
            <p className="text-[3cqw] font-semibold uppercase tracking-[0.12em] text-blossom-deep">
              Kata bestie
            </p>
            <div className="rounded-[4cqw] bg-white p-[5cqw]">
              <p className="text-[4cqw] text-blossom-deep">★★★★★</p>
              <p className="mt-[2cqw] font-display text-[5cqw] italic leading-snug text-cocoa">
                &ldquo;Nggak bikin kulit ketarik, wanginya lembut banget.&rdquo;
              </p>
              <p className="mt-[3cqw] text-[3cqw] text-cocoa-soft">Dina · Bandung (contoh layout)</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[3.2cqw] text-cocoa">Advanced Brightening Shower Gel</p>
              <Logo size="sm" className="scale-[0.8]" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
