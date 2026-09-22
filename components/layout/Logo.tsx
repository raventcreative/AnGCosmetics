import Link from "next/link";
import { cn } from "@/lib/utils";

type Tone = "cocoa" | "deep" | "ivory";

const tones: Record<Tone, string> = {
  cocoa: "text-cocoa",
  deep: "text-blossom-deep",
  ivory: "text-ivory",
};

/**
 * Wordmark A&G (Bodoni Moda 500) dengan deskriptor COSMETICS berjarak lebar.
 * Clear space setinggi huruf "A" kecil; minimum 24px di layar.
 * Catatan design system: wordmark ini tulisan ulang — ganti dengan file vektor
 * resmi bila sudah tersedia.
 */
export function Logo({
  tone = "cocoa",
  descriptor = true,
  size = "md",
  className,
}: {
  tone?: Tone;
  descriptor?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const wordmark = size === "lg" ? "text-[40px]" : size === "sm" ? "text-[22px]" : "text-[28px]";
  const desc = size === "lg" ? "text-[11px]" : "text-[9px]";

  return (
    <span className={cn("inline-flex flex-col items-center leading-none", tones[tone], className)}>
      <span className={cn("font-logo font-medium tracking-[0.02em]", wordmark)}>A&amp;G</span>
      {descriptor && (
        <span className={cn("mt-1 font-sans font-semibold uppercase tracking-[0.38em]", desc)}>
          Cosmetics
        </span>
      )}
    </span>
  );
}

export function LogoLink({ tone = "cocoa" }: { tone?: Tone }) {
  return (
    <Link href="/" aria-label="A&G Cosmetics — kembali ke halaman utama" className="shrink-0 px-1">
      <Logo tone={tone} />
    </Link>
  );
}
