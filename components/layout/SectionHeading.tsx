import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Judul section: eyebrow label + headline Fraunces dengan satu kata aksen italic. */
export function SectionHeading({
  eyebrow,
  title,
  accent,
  desc,
  align = "left",
  className,
  action,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  desc?: string;
  align?: "left" | "center";
  className?: string;
  action?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start",
        action && "tablet:flex-row tablet:items-end tablet:justify-between",
        className,
      )}
    >
      <div className={cn("flex flex-col gap-3", align === "center" && "items-center")}>
        {eyebrow && (
          <p className="text-label uppercase tracking-[0.12em] text-sage-deep">{eyebrow}</p>
        )}
        <h2 className="max-w-[46ch] font-display text-heading-1 text-cocoa">
          {title} {accent && <em className="accent">{accent}</em>}
        </h2>
        {desc && (
          <p className={cn("max-w-[58ch] text-body text-cocoa-soft", align === "center" && "mx-auto")}>
            {desc}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}
