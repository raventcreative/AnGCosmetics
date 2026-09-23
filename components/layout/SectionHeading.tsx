import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Judul section: eyebrow uppercase berjarak lebar + headline Fraunces dengan
 * satu kata aksen italic blossom-deep.
 */
export function SectionHeading({
  eyebrow,
  title,
  accent,
  desc,
  align = "left",
  size = "md",
  className,
  action,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  desc?: string;
  align?: "left" | "center";
  size?: "md" | "lg";
  className?: string;
  action?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start",
        action && "tablet:flex-row tablet:items-end tablet:justify-between",
        className,
      )}
    >
      <div className={cn("flex flex-col gap-4", align === "center" && "items-center")}>
        {eyebrow && <p className="text-nav uppercase text-cocoa-soft">{eyebrow}</p>}
        <h2
          className={cn(
            "max-w-[24ch] font-display text-cocoa",
            size === "lg" ? "text-heading-1 desktop:text-display-l" : "text-heading-1",
          )}
        >
          {title} {accent && <em className="accent">{accent}</em>}
        </h2>
        {desc && (
          <p className={cn("max-w-[56ch] text-body text-cocoa-soft", align === "center" && "mx-auto")}>
            {desc}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}
