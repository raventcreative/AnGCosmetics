import { cn } from "@/lib/utils";

function Star({ fill, size }: { fill: number; size: number }) {
  const id = `star-${Math.round(fill * 100)}-${size}`;
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true" className="shrink-0">
      <defs>
        <linearGradient id={id}>
          <stop offset={`${fill * 100}%`} stopColor="#A9436C" />
          <stop offset={`${fill * 100}%`} stopColor="#EFE6DA" />
        </linearGradient>
      </defs>
      <path
        d="M10 1.6l2.47 5.28 5.53.72-4.05 3.85 1.02 5.62L10 14.4l-4.97 2.67 1.02-5.62L2 7.6l5.53-.72L10 1.6z"
        fill={`url(#${id})`}
      />
    </svg>
  );
}

/** Jangan tampilkan rating tanpa jumlah ulasan (aturan design system). */
export function Rating({
  value,
  count,
  size = 14,
  className,
}: {
  value: number;
  count: number;
  size?: 14 | 18;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex items-center gap-0.5" role="img" aria-label={`${value} dari 5 bintang`}>
        {[0, 1, 2, 3, 4].map((i) => (
          <Star key={i} size={size} fill={Math.max(0, Math.min(1, value - i))} />
        ))}
      </div>
      <span className={cn("font-semibold text-cocoa", size === 18 ? "text-body" : "text-body-sm")}>
        {value.toFixed(1)}
      </span>
      <span className={cn("text-cocoa-soft", size === 18 ? "text-body-sm" : "text-caption")}>
        ({count} ulasan)
      </span>
    </div>
  );
}
