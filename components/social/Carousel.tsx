"use client";

import Image from "next/image";
import { useState } from "react";
import { Logo } from "@/components/layout/Logo";
import { SageLeaf } from "@/components/layout/FlowerBadge";
import { cn } from "@/lib/utils";

const slides = [
  { kind: "hook", title: "Kulit kusam padahal rajin mandi?", sub: "Bukan sabunnya kurang, urutannya kebalik." },
  { kind: "poin", n: 1, title: "Bersihkan tanpa bikin ketarik", sub: "Shower gel no-SLES, aman dipakai harian." },
  { kind: "poin", n: 2, title: "Rawat dengan serum", sub: "Aktif 18%++ di area yang mau diratakan." },
  { kind: "poin", n: 3, title: "Tutup dengan lotion UV", sub: "Pagi cukup sampai langkah ini." },
  { kind: "cta", title: "Mulai dari satu produk", sub: "Cek keranjang kuning, ya bestie." },
] as const;

/**
 * Carousel edukasi 5 slide 4:5. Slide 1 hook, slide 2–4 satu poin per slide dengan
 * nomor besar, slide 5 CTA dengan produk. Background selang-seling ivory dan butter-cream.
 */
export function Carousel() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  return (
    <div className="flex flex-col gap-4">
      <div
        className={cn(
          "cq relative aspect-4/5 w-full overflow-hidden rounded-xl border border-hairline p-[6cqw]",
          index % 2 === 0 ? "bg-ivory" : "bg-butter-cream",
        )}
      >
        <div className="flex size-full flex-col justify-between">
          <div className="flex items-start justify-between">
            <Logo size="sm" className="scale-[0.8]" />
            <span className="text-[3cqw] font-semibold uppercase tracking-[0.12em] text-cocoa-soft">
              {index + 1} / {slides.length}
            </span>
          </div>

          {slide.kind === "hook" && (
            <div>
              <p className="font-display text-[10cqw] leading-tight text-cocoa">
                Kulit <em className="accent">kusam</em> padahal rajin mandi?
              </p>
              <p className="mt-[3cqw] text-[4cqw] text-cocoa-soft">{slide.sub}</p>
            </div>
          )}

          {slide.kind === "poin" && (
            <div className="flex items-end gap-[4cqw]">
              <span className="font-display text-[26cqw] leading-none text-blossom-pink">
                {slide.n}
              </span>
              <div className="pb-[2cqw]">
                <p className="font-display text-[6.4cqw] leading-tight text-cocoa">{slide.title}</p>
                <p className="mt-[1.6cqw] text-[3.6cqw] text-cocoa-soft">{slide.sub}</p>
              </div>
            </div>
          )}

          {slide.kind === "cta" && (
            <div className="flex items-center gap-[4cqw]">
              <Image
                src="/products/advanced-brightening-shower-gel.png"
                alt=""
                width={700}
                height={700}
                className="w-[40cqw] object-contain"
              />
              <div>
                <p className="font-display text-[7cqw] leading-tight text-cocoa">{slide.title}</p>
                <p className="mt-[2cqw] text-[3.6cqw] text-cocoa-soft">{slide.sub}</p>
                <p className="mt-[3cqw] inline-block rounded-full bg-blossom-deep px-[4cqw] py-[2cqw] text-[3.4cqw] font-semibold text-ivory">
                  Belanja sekarang
                </p>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between">
            <SageLeaf className="w-[16cqw]" />
            <button
              onClick={() => setIndex((i) => (i + 1) % slides.length)}
              className="flex size-[10cqw] items-center justify-center rounded-full bg-white text-[4cqw] text-blossom-deep shadow-sm"
              aria-label="Slide berikutnya"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.title}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === index ? "w-6 bg-blossom-deep" : "w-1.5 bg-line",
            )}
          />
        ))}
      </div>
    </div>
  );
}
