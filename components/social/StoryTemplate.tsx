import Image from "next/image";
import { Logo } from "@/components/layout/Logo";
import { FlowerBadge } from "@/components/layout/FlowerBadge";
import { cn } from "@/lib/utils";

/**
 * Template Story/Reels 9:16 (1080×1920). Logo atas, produk tengah, headline + CTA bawah.
 * Safe zone: tidak ada teks penting 250px dari atas dan bawah (≈13% tinggi).
 */
export function StoryTemplate({
  variant = "story",
  className,
}: {
  variant?: "story" | "cover" | "highlight";
  className?: string;
}) {
  if (variant === "highlight") {
    return (
      <div
        className={cn(
          "cq flex aspect-9/16 w-full items-center justify-center rounded-xl border border-line bg-cotton-pink",
          className,
        )}
      >
        <div className="flex size-[40cqw] items-center justify-center rounded-full bg-ivory">
          <svg viewBox="0 0 24 24" className="size-[22cqw] text-blossom-deep" aria-hidden="true">
            <path
              d="M20 4c0 8-5 13-12 13H5c0-8 5-13 12-13h3z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            />
          </svg>
        </div>
      </div>
    );
  }

  if (variant === "cover") {
    return (
      <div
        className={cn(
          "cq relative flex aspect-9/16 w-full flex-col items-center justify-center gap-[3cqw] rounded-xl border border-line bg-butter-cream p-[6cqw] text-center",
          className,
        )}
      >
        <p className="text-[3.4cqw] font-semibold uppercase tracking-[0.12em] text-sage-deep">
          Bestie tips
        </p>
        <p className="font-display text-[13cqw] leading-[1.05] text-cocoa">
          Urutan <em className="accent">glow</em>
        </p>
        <p className="text-[4cqw] text-cocoa-soft">Biar hasilnya kelihatan</p>
        <Logo size="sm" className="absolute bottom-[6cqw] scale-[0.85]" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "cq relative flex aspect-9/16 w-full flex-col items-center justify-between rounded-xl border border-line bg-ivory py-[14%]",
        className,
      )}
    >
      <Logo size="sm" className="scale-[0.9]" />
      <FlowerBadge className="size-[70cqw]">
        <Image
          src="/products/pdrn-booster-body-serum.png"
          alt=""
          width={700}
          height={700}
          className="h-[76%] w-auto object-contain"
        />
      </FlowerBadge>
      <div className="flex flex-col items-center gap-[3cqw] text-center">
        <p className="font-display text-[8cqw] leading-tight text-cocoa">
          18%++ <em className="accent">aktif</em>
        </p>
        <p className="text-[3.6cqw] text-cocoa-soft">PDRN Booster Body Serum · 30 ml</p>
        <p className="rounded-full bg-blossom-deep px-[5cqw] py-[2.4cqw] text-[3.6cqw] font-semibold text-ivory">
          Cek keranjang kuning
        </p>
      </div>
      <span className="pointer-events-none absolute inset-x-0 top-0 h-[13%] border-b border-dashed border-blossom-deep/30" />
      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[13%] border-t border-dashed border-blossom-deep/30" />
    </div>
  );
}
