import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Badge bunga scallop — latar produk dan sticker diskon.
 * Dibuat dari SVG agar tepinya halus di semua ukuran.
 */
export function FlowerBadge({
  children,
  color = "blossom",
  className,
}: {
  children?: ReactNode;
  color?: "blossom" | "cotton" | "butter";
  className?: string;
}) {
  const fill =
    color === "cotton" ? "var(--color-cotton-pink)" : color === "butter" ? "var(--color-butter-cream)" : "var(--color-blossom-pink)";

  const petals = Array.from({ length: 12 }, (_, i) => {
    const angle = (i / 12) * Math.PI * 2;
    return { cx: 50 + Math.cos(angle) * 38, cy: 50 + Math.sin(angle) * 38 };
  });

  return (
    <div className={cn("relative", className)}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 size-full" aria-hidden="true">
        {petals.map((p, i) => (
          <circle key={i} cx={p.cx} cy={p.cy} r="14" fill={fill} />
        ))}
        <circle cx="50" cy="50" r="42" fill={fill} />
      </svg>
      <div className="relative flex size-full items-center justify-center">{children}</div>
    </div>
  );
}

/** Daun sage + garis tangkai organik. Maksimal dua elemen per desain. */
export function SageLeaf({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" className={cn("text-sage", className)} aria-hidden="true">
      <path
        d="M4 72C20 34 54 10 116 8c-4 40-38 66-78 66"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M116 8C86 26 58 48 40 74" fill="none" stroke="currentColor" strokeWidth="1.2" />
      {[0.25, 0.45, 0.65].map((t, i) => (
        <ellipse
          key={i}
          cx={30 + t * 70}
          cy={60 - t * 40}
          rx="12"
          ry="5"
          fill="currentColor"
          opacity="0.45"
          transform={`rotate(${-35 - i * 6} ${30 + t * 70} ${60 - t * 40})`}
        />
      ))}
    </svg>
  );
}
