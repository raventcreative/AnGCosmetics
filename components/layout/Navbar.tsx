"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo, LogoLink } from "./Logo";
import { CartIcon, SearchIcon, UserIcon } from "@/components/ui/Icons";
import { categories, products } from "@/lib/data/products";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const concerns = [
  { label: "Kulit kusam", href: "/produk?concern=kusam" },
  { label: "Kulit kering", href: "/produk?concern=kering" },
  { label: "Noda hitam", href: "/produk?concern=noda" },
  { label: "Tampil rapi seharian", href: "/produk?concern=makeup" },
];

const mainMenu = [
  { label: "Produk", href: "/produk", mega: true },
  { label: "Tentang", href: "/tentang" },
  { label: "Bestie Journal", href: "/journal" },
  { label: "Reseller", href: "/reseller" },
  { label: "FAQ", href: "/faq" },
];

const docsMenu = [
  { label: "Brand Guideline", href: "/brand-guideline" },
  { label: "Design System", href: "/design-system" },
];

/**
 * Header sticky: announcement bar blossom-deep, lalu bar utama ivory.
 * Desktop: logo kiri, menu tengah, ikon kanan + mega menu on hover.
 * Mobile: hamburger kiri, logo tengah, keranjang kanan.
 */
export function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const [openMega, setOpenMega] = useState(false);
  const featured = products[0];

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-blossom-deep py-2 text-center">
        <p className="container-ag text-caption text-ivory">
          Gratis ongkir untuk pembelian di toko resmi · Semua produk BPOM &amp; Halal
        </p>
      </div>

      <div className="border-b border-line bg-ivory/95 backdrop-blur">
        <div className="container-ag flex h-16 items-center justify-between gap-4 desktop:h-20">
          <button
            onClick={() => setOpenMenu((v) => !v)}
            aria-expanded={openMenu}
            aria-label="Buka menu"
            className="flex size-11 items-center justify-center rounded-full text-cocoa transition hover:bg-cotton-pink/50 desktop:hidden"
          >
            <span className="flex flex-col gap-[5px]">
              <span className="block h-[1.6px] w-5 bg-current" />
              <span className="block h-[1.6px] w-5 bg-current" />
              <span className="block h-[1.6px] w-5 bg-current" />
            </span>
          </button>

          <div className="hidden desktop:block">
            <LogoLink />
          </div>
          <div className="desktop:hidden">
            <LogoLink />
          </div>

          <nav className="hidden items-center gap-1 desktop:flex" aria-label="Menu utama">
            {mainMenu.map((item) => (
              <div
                key={item.href}
                onMouseEnter={() => setOpenMega(Boolean(item.mega))}
                onMouseLeave={() => setOpenMega(false)}
                className="relative"
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex h-11 items-center rounded-full px-4 text-body-sm font-semibold transition",
                    pathname.startsWith(item.href)
                      ? "bg-cotton-pink/60 text-cocoa"
                      : "text-cocoa hover:bg-cotton-pink/40",
                  )}
                >
                  {item.label}
                </Link>

                {item.mega && openMega && (
                  <div className="absolute left-1/2 top-full w-[720px] -translate-x-1/2 pt-2">
                    <div className="grid grid-cols-[1fr_1fr_240px] gap-6 rounded-md border border-line bg-white p-6 shadow-md">
                      <div>
                        <p className="text-label uppercase tracking-[0.12em] text-sage-deep">
                          Kategori
                        </p>
                        <ul className="mt-3 flex flex-col gap-2">
                          {categories.map((c) => (
                            <li key={c.id}>
                              <Link
                                href={`/produk?kategori=${c.id}`}
                                className="text-body-sm font-semibold text-cocoa hover:text-blossom-deep"
                              >
                                {c.label}
                                <span className="block text-caption font-normal text-cocoa-soft">
                                  {c.items}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-label uppercase tracking-[0.12em] text-sage-deep">
                          Shop by concern
                        </p>
                        <ul className="mt-3 flex flex-col gap-2">
                          {concerns.map((c) => (
                            <li key={c.href}>
                              <Link
                                href={c.href}
                                className="text-body-sm text-cocoa hover:text-blossom-deep"
                              >
                                {c.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link
                        href={`/produk/${featured.slug}`}
                        className="flex flex-col gap-2 rounded-md bg-butter-cream p-4 transition hover:shadow-sm"
                      >
                        <span className="text-label uppercase tracking-[0.12em] text-blossom-deep">
                          Best seller
                        </span>
                        <Image
                          src={featured.image}
                          alt={featured.name}
                          width={180}
                          height={180}
                          className="mx-auto h-28 w-auto object-contain"
                        />
                        <span className="text-body-sm font-semibold text-cocoa">
                          {featured.name}
                        </span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <Link
              href="/produk"
              aria-label="Cari produk"
              className="hidden size-11 items-center justify-center rounded-full text-cocoa transition hover:bg-cotton-pink/40 tablet:flex"
            >
              <SearchIcon />
            </Link>
            <Link
              href="/reseller"
              aria-label="Info reseller"
              className="hidden size-11 items-center justify-center rounded-full text-cocoa transition hover:bg-cotton-pink/40 tablet:flex"
            >
              <UserIcon />
            </Link>
            <a
              href={site.marketplace.shopee}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Belanja di toko resmi"
              className="flex size-11 items-center justify-center rounded-full text-cocoa transition hover:bg-cotton-pink/40"
            >
              <CartIcon />
            </a>
          </div>
        </div>
      </div>

      {openMenu && (
        <div className="border-b border-line bg-ivory desktop:hidden">
          <nav className="container-ag flex flex-col py-4" aria-label="Menu mobile">
            {[...mainMenu, ...docsMenu].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpenMenu(false)}
                className="flex h-12 items-center border-b border-line text-body font-semibold text-cocoa last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex items-center justify-between rounded-md bg-butter-cream px-4 py-3">
              <Logo size="sm" />
              <span className="font-display text-body-sm italic text-blossom-deep">
                {site.tagline}
              </span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
