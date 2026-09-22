"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";

export type ToastStatus = "success" | "warning" | "error";

const dot: Record<ToastStatus, string> = {
  success: "bg-success",
  warning: "bg-warning",
  error: "bg-error",
};

/** Notifikasi singkat, hilang otomatis dalam 4 detik. */
export function Toast({
  open,
  status = "success",
  message,
  action,
  onClose,
  inline = false,
}: {
  open: boolean;
  status?: ToastStatus;
  message: string;
  action?: { label: string; onClick: () => void };
  onClose: () => void;
  inline?: boolean;
}) {
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(onClose, 4000);
    return () => clearTimeout(t);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "flex items-center gap-3 rounded-sm border border-line bg-white px-4 py-3 shadow-md",
        inline
          ? "w-full"
          : "fixed left-1/2 top-4 z-50 w-[calc(100%-32px)] max-w-[380px] -translate-x-1/2 tablet:left-auto tablet:right-6 tablet:translate-x-0",
      )}
    >
      <span className={cn("size-2.5 shrink-0 rounded-full", dot[status])} aria-hidden="true" />
      <p className="flex-1 text-body-sm text-cocoa">{message}</p>
      {action && (
        <button
          onClick={action.onClick}
          className="text-body-sm font-semibold text-blossom-deep hover:underline"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}
