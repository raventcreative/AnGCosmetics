import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant =
  | "primary"
  | "secondary"
  | "text"
  | "ink"
  | "paper"
  | "primary-light"
  | "secondary-light";
type Size = "default" | "sm";

const base =
  "inline-flex items-center justify-center gap-2 text-button font-semibold transition disabled:opacity-40 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  // primary: satu per layar untuk aksi utama (Beli, Checkout)
  primary: "bg-blossom-deep text-ivory hover:bg-[#93395d] active:bg-[#82324f]",
  secondary:
    "border border-cocoa/25 text-cocoa bg-paper hover:border-cocoa hover:bg-mist",
  text: "text-blossom-deep hover:bg-cotton-pink/40 underline-offset-4 hover:underline",
  // ink & paper: aksi editorial (hero, banner foto) — tenang, tanpa warna kuat
  ink: "bg-cocoa text-ivory hover:bg-[#2b2122]",
  paper: "bg-paper text-cocoa hover:bg-mist",
  // dua varian di bawah untuk dipakai di atas background cocoa
  "primary-light": "bg-blossom-pink text-cocoa hover:bg-cotton-pink shadow-sm",
  "secondary-light": "border border-ivory/50 text-ivory hover:bg-ivory/10",
};

const sizes: Record<Size, string> = {
  default: "h-11 px-6", // 44px, target sentuh mobile
  sm: "h-9 px-4",
};

type Props = {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  fullWidth?: boolean;
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<"button">, "children" | "className">;

export function Button({
  variant = "primary",
  size = "default",
  href,
  external,
  fullWidth,
  children,
  className,
  ...rest
}: Props) {
  const classes = cn(base, variants[variant], sizes[size], fullWidth && "w-full", className);

  if (href) {
    if (external || href.startsWith("http")) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
