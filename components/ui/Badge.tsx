import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone =
  | "variant"
  | "variant-selected"
  | "promo"
  | "natural"
  | "cert"
  | "cert-light"
  | "success"
  | "warning"
  | "error";

const tones: Record<Tone, string> = {
  variant: "bg-cotton-pink text-cocoa",
  "variant-selected": "bg-cotton-pink text-cocoa ring-[1.5px] ring-blossom-deep",
  promo: "bg-blossom-deep text-ivory",
  natural: "bg-sage text-cocoa",
  cert: "border border-sage-deep text-sage-deep bg-white",
  // untuk dipakai di atas background cocoa
  "cert-light": "border border-ivory/30 text-ivory/80",
  success: "bg-success/12 text-success",
  warning: "bg-warning/12 text-warning",
  error: "bg-error/12 text-error",
};

export function Badge({
  tone = "variant",
  children,
  className,
}: {
  tone?: Tone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-label font-semibold uppercase tracking-[0.12em]",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Badge sertifikasi BPOM · HALAL — outline sage-deep. */
export function CertBadges({ pom, className }: { pom?: string | null; className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      <Badge tone="cert">BPOM{pom ? ` ${pom}` : ""}</Badge>
      <Badge tone="cert">Halal</Badge>
    </div>
  );
}
