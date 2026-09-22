"use client";

import { useState } from "react";
import type { Faq } from "@/lib/data/faq";
import { cn } from "@/lib/utils";

/** Satu item terbuka dalam satu waktu. Item terbuka: background white radius-md. */
export function FAQAccordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="flex flex-col">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li
            key={item.q}
            className={cn(
              "border-b border-line",
              isOpen && "rounded-md border-b-transparent bg-white shadow-sm",
            )}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 p-4 text-left"
            >
              <span className="text-title text-cocoa">{item.q}</span>
              <span
                aria-hidden="true"
                className="flex size-8 shrink-0 items-center justify-center rounded-full bg-cotton-pink/60 text-title text-blossom-deep"
              >
                {isOpen ? "–" : "+"}
              </span>
            </button>
            {isOpen && <p className="px-4 pb-4 text-body-sm text-cocoa-soft">{item.a}</p>}
          </li>
        );
      })}
    </ul>
  );
}
