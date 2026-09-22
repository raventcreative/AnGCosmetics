import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "elevated" | "promo";

const variants: Record<Variant, string> = {
  default: "border border-line",
  elevated: "border border-line shadow-sm",
  promo: "border border-cotton-pink shadow-md",
};

/** Semua card berlatar white agar clean dan elegan. Warna brand lewat teks, badge, foto. */
export function Card({
  variant = "default",
  children,
  className,
  as: As = "div",
}: {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section" | "li";
}) {
  return (
    <As className={cn("rounded-lg bg-white p-4 desktop:p-6", variants[variant], className)}>
      {children}
    </As>
  );
}

export function CardEyebrow({ children }: { children: ReactNode }) {
  return <p className="text-label uppercase tracking-[0.12em] text-blossom-deep">{children}</p>;
}
