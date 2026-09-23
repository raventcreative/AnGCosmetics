"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { site, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const columns = [
  {
    title: "Belanja",
    links: [
      { label: "Semua produk", href: "/produk" },
      { label: "Body Care", href: "/produk?kategori=body-care" },
      { label: "Fragrance", href: "/produk?kategori=fragrance" },
      { label: "Decorative", href: "/produk?kategori=decorative" },
    ],
  },
  {
    title: "Bantuan",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Cek nomor BPOM", href: "/journal/baca-nomor-bpom-sebelum-checkout" },
      { label: "Jadi reseller", href: "/reseller" },
      { label: "Hubungi kami", href: "/kontak" },
    ],
  },
  {
    title: "Tentang",
    links: [
      { label: "Cerita A&G", href: "/tentang" },
      { label: "Bestie Journal", href: "/journal" },
      { label: "Brand guideline", href: "/brand-guideline" },
      { label: "Design system", href: "/design-system" },
    ],
  },
];

/** Footer di atas background cocoa dengan teks ivory. Mobile: kolom jadi accordion. */
export function Footer() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <footer className="mt-12 bg-cocoa text-ivory desktop:mt-16">
      <div className="container-ag grid gap-10 py-12 desktop:grid-cols-[1.2fr_repeat(3,0.8fr)_1.2fr] desktop:py-16">
        <div className="flex flex-col gap-4">
          <Logo tone="ivory" />
          <p className="font-display text-tagline italic text-cotton-pink">{site.tagline}</p>
          <div className="flex gap-3">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-ivory/25 px-4 py-2 text-nav uppercase transition hover:border-cotton-pink hover:text-cotton-pink"
            >
              Instagram
            </a>
            <a
              href={site.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-ivory/25 px-4 py-2 text-nav uppercase transition hover:border-cotton-pink hover:text-cotton-pink"
            >
              TikTok
            </a>
          </div>
        </div>

        {columns.map((col) => {
          const isOpen = open === col.title;
          return (
            <div key={col.title} className="border-b border-ivory/15 pb-4 desktop:border-0 desktop:pb-0">
              <button
                onClick={() => setOpen(isOpen ? null : col.title)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between py-2 text-left desktop:pointer-events-none desktop:py-0"
              >
                <span className="text-label uppercase tracking-[0.12em] text-cotton-pink">
                  {col.title}
                </span>
                <span className="text-ivory desktop:hidden" aria-hidden="true">
                  {isOpen ? "–" : "+"}
                </span>
              </button>
              <ul className={cn("flex-col gap-2 pt-3", isOpen ? "flex" : "hidden desktop:flex")}>
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-body-sm text-ivory/80 transition hover:text-cotton-pink"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

        <div className="flex flex-col gap-3">
          <span className="text-label uppercase tracking-[0.12em] text-cotton-pink">
            Newsletter
          </span>
          <p className="text-body-sm text-ivory/80">
            Tips perawatan dan info produk baru, dikirim seminggu sekali. Tanpa spam.
          </p>
          <form
            className="flex flex-col gap-3"
            action={waLink("Hai A&G, aku mau ikut newsletter Bestie Journal, ya.")}
            method="get"
            target="_blank"
          >
            <label htmlFor="footer-email" className="sr-only">
              Alamat email
            </label>
            <input
              id="footer-email"
              type="email"
              placeholder="email@kamu.com"
              className="h-11 border border-ivory/25 bg-transparent px-4 text-body text-ivory placeholder:text-ivory/50 focus:border-cotton-pink focus:outline-none"
            />
            <Button type="submit" variant="paper">
              Daftar newsletter
            </Button>
          </form>
        </div>
      </div>

      <div className="border-t border-ivory/15">
        <div className="container-ag flex flex-col gap-4 py-6 text-caption text-ivory/70 desktop:flex-row desktop:items-center desktop:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Seluruh hak cipta dilindungi.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="cert-light">BPOM</Badge>
            <Badge tone="cert-light">Halal</Badge>
            <span className="ml-2">Pembayaran: Transfer · QRIS · COD lewat marketplace</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
