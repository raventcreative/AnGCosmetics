"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Rating } from "@/components/ui/Rating";
import { ratingDistribution, reviews } from "@/lib/data/testimonials";
import { cn } from "@/lib/utils";

const filters = ["Semua", "5 bintang", "4 bintang", "Dengan foto"];

/**
 * Ringkasan dan daftar ulasan di detail produk.
 * Kiri: rata-rata heading-1, bintang, bar distribusi. Kanan: kartu ulasan dengan
 * badge "Pembeli terverifikasi" (sage-deep). Filter dengan chip.
 *
 * CATATAN: nama dan kutipan adalah contoh layout, bukan ulasan asli.
 */
export function Review({ average, total }: { average: number; total: number }) {
  const [filter, setFilter] = useState(filters[0]);
  const max = Math.max(...ratingDistribution.map((r) => r.count));

  const visible = reviews.filter((r) => {
    if (filter === "5 bintang") return r.rating === 5;
    if (filter === "4 bintang") return r.rating === 4;
    return true;
  });

  return (
    <div className="grid gap-8 desktop:grid-cols-[300px_1fr] desktop:gap-12">
      <div className="flex flex-col gap-4">
        <div>
          <p className="font-display text-heading-1 text-cocoa">{average.toFixed(1)}</p>
          <Rating value={average} count={total} size={18} />
        </div>
        <ul className="flex flex-col gap-2">
          {ratingDistribution.map((row) => (
            <li key={row.star} className="flex items-center gap-3">
              <span className="w-10 text-caption text-cocoa-soft">{row.star} ★</span>
              <span className="h-1.5 flex-1 rounded-full bg-line">
                <span
                  className="block h-full rounded-full bg-blossom-deep"
                  style={{ width: `${(row.count / max) * 100}%` }}
                />
              </span>
              <span className="w-8 text-right text-caption text-cocoa-soft">{row.count}</span>
            </li>
          ))}
        </ul>
        <p className="text-caption text-cocoa-soft">
          Contoh layout ulasan. Ganti dengan ulasan asli pelanggan sebelum publikasi.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full px-3 py-1.5 text-body-sm transition",
                filter === f
                  ? "bg-cotton-pink text-cocoa ring-[1.5px] ring-blossom-deep"
                  : "bg-cotton-pink/40 text-cocoa hover:bg-cotton-pink",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <ul className="flex flex-col gap-4">
          {visible.map((r) => (
            <li key={r.name} className="rounded-lg border border-line bg-white p-4 desktop:p-6">
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-body-sm font-semibold text-cocoa">{r.name}</p>
                {r.verified && <Badge tone="cert">Pembeli terverifikasi</Badge>}
                <span className="text-caption text-cocoa-soft">{r.date}</span>
              </div>
              <div className="mt-2">
                <Rating value={r.rating} count={1} />
              </div>
              <p className="mt-3 text-body-sm text-cocoa">{r.text}</p>
              <p className="mt-2 text-caption text-cocoa-soft">Varian dibeli: {r.variant}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
