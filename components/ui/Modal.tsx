"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { Button } from "./Button";

/** Dialog di atas overlay cocoa 45%. Card white radius-lg, shadow-lg, maks 480px. */
export function Modal({
  open,
  onClose,
  title,
  children,
  primaryLabel = "Oke, mengerti",
  onPrimary,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  primaryLabel?: string;
  onPrimary?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    ref.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center p-4 tablet:items-center"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="absolute inset-0 bg-cocoa/45"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={ref}
        tabIndex={-1}
        className="relative w-full max-w-[480px] rounded-lg bg-white p-6 shadow-lg outline-none"
      >
        <div className="flex items-start justify-between gap-4">
          <h2 className="font-display text-heading-2">{title}</h2>
          <button
            onClick={onClose}
            aria-label="Tutup"
            className="-mr-1 -mt-1 flex size-9 items-center justify-center rounded-full text-cocoa-soft transition hover:bg-cotton-pink/40 hover:text-cocoa"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.6" fill="none" />
            </svg>
          </button>
        </div>
        <div className="mt-3 text-body-sm text-cocoa-soft">{children}</div>
        <div className="mt-6 flex flex-col gap-3 tablet:flex-row tablet:justify-end">
          <Button variant="primary" onClick={onPrimary ?? onClose} className="tablet:order-2">
            {primaryLabel}
          </Button>
          <Button variant="secondary" onClick={onClose} className="tablet:order-1">
            Nanti dulu
          </Button>
        </div>
      </div>
    </div>
  );
}
