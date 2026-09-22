"use client";

import { cn } from "@/lib/utils";

/** Item 40x40 radius-pill, halaman aktif blossom-deep teks ivory. */
export function Pagination({
  page,
  totalPages,
  onChange,
}: {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex items-center justify-center gap-2" aria-label="Navigasi halaman">
      <button
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={page === 1}
        className="h-10 rounded-full px-4 text-body-sm font-semibold text-cocoa transition hover:bg-cotton-pink disabled:opacity-40"
      >
        Sebelumnya
      </button>

      <span className="text-body-sm text-cocoa-soft tablet:hidden">
        Halaman {page} dari {totalPages}
      </span>

      <ul className="hidden items-center gap-1 tablet:flex">
        {pages.map((p) => (
          <li key={p}>
            <button
              onClick={() => onChange(p)}
              aria-current={p === page ? "page" : undefined}
              className={cn(
                "size-10 rounded-full text-body-sm font-semibold transition",
                p === page
                  ? "bg-blossom-deep text-ivory"
                  : "text-cocoa hover:bg-cotton-pink",
              )}
            >
              {p}
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={() => onChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        className="h-10 rounded-full px-4 text-body-sm font-semibold text-cocoa transition hover:bg-cotton-pink disabled:opacity-40"
      >
        Berikutnya
      </button>
    </nav>
  );
}
