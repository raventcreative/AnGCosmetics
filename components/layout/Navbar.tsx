"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo, LogoLink } from "./Logo";
import { CartIcon, SearchIcon, UserIcon } from "@/components/ui/Icons";
import { concerns, ingredientFilters, productTypes } from "@/lib/data/products";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const mainMenu = [
  { label: "Best Sellers", href: "/produk?koleksi=best-seller" },
  { label: "Produk", href: "/produk", mega: true },
  { label: "Brand", href: "/tentang" },
  { label: "Offer", href: "/reseller" },
];

/** Tautan sekunder — hidup di footer dan di menu mobile, bukan di bar utama. */
const secondaryMenu = [
  { label: "Bestie Journal", href: "/journal" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontak", href: "/kontak" },
  { label: "Brand Guideline", href: "/brand-guideline" },
  { label: "Design System", href: "/design-system" },
];

/**
 * Header sticky minimal. Menu "Produk" membuka panel tiga kolom — masalah kulit,
 * tipe produk, dan kandungan — yang seluruh tautannya memfilter katalog lewat
 * query string, bukan sekadar hiasan.
 */
export function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const [openMega, setOpenMega] = useState(false);

  useEffect(() => {
    setOpenMenu(false);
    setOpenMega(false);
  }, [pathname]);

  const columns = [
    {
      title: "Masalah kulit",
      items: concerns.map((c) => ({ label: c.label, href: `/produk?concern=${c.id}` })),
    },
    {
      title: "Kategori",
      items: productTypes().map((t) => ({
        label: t,
        href: `/produk?tipe=${encodeURIComponent(t)}`,
      })),
    },
    {
      title: "Kandungan",
      items: ingredientFilters.map((i) => ({
        label: i.label,
        href: `/produk?kandungan=${i.id}`,
      })),
    },
  ];

  return (
    <header className="sticky top-0 z-40 bg-paper" onMouseLeave={() => setOpenMega(false)}>
      <div className="bg-cocoa py-2.5 text-center">
        <p className="container-ag text-[10px] font-semibold uppercase tracking-[0.18em] text-ivory/85">
          BPOM &amp; Halal · Dikirim dari Indonesia · Belanja di toko resmi
        </p>
      </div>

      <div className="border-b border-hairline">
        <div className="container-ag flex h-16 items-center justify-between gap-4 desktop:h-[76px]">
          <div className="flex flex-1 items-center gap-1">
            <button
              onClick={() => setOpenMenu((v) => !v)}
              aria-expanded={openMenu}
              aria-label="Buka menu"
              className="-ml-2 flex size-11 items-center justify-center rounded-full text-cocoa transition hover:bg-mist desktop:hidden"
            >
              <span className="flex flex-col gap-[5px]">
                <span className="block h-px w-5 bg-current" />
                <span className="block h-px w-5 bg-current" />
                <span className="block h-px w-5 bg-current" />
              </span>
            </button>

            <nav className="hidden items-center gap-8 desktop:flex" aria-label="Menu utama">
              {mainMenu.map((item) => {
                const active =
                  item.href === "/produk"
                    ? pathname.startsWith("/produk")
                    : pathname.startsWith(item.href.split("?")[0]);
                return (
                  <div
                    key={item.label}
                    onMouseEnter={() => setOpenMega(Boolean(item.mega))}
                    className="flex h-[76px] items-center"
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "text-nav uppercase transition",
                        active ? "text-blossom-deep" : "text-cocoa hover:text-blossom-deep",
                      )}
                    >
                      {item.label}
                    </Link>
                  </div>
                );
              })}
            </nav>
          </div>

          <div className="flex shrink-0 justify-center">
            <LogoLink />
          </div>

          <div className="flex flex-1 items-center justify-end gap-1">
            <Link
              href="/produk"
              aria-label="Cari produk"
              className="hidden size-11 items-center justify-center rounded-full text-cocoa transition hover:bg-mist tablet:flex"
            >
              <SearchIcon />
            </Link>
            <Link
              href="/reseller"
              aria-label="Info reseller"
              className="hidden size-11 items-center justify-center rounded-full text-cocoa transition hover:bg-mist tablet:flex"
            >
              <UserIcon />
            </Link>
            <a
              href={site.marketplace.shopee}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Belanja di toko resmi"
              className="-mr-2 flex size-11 items-center justify-center rounded-full text-cocoa transition hover:bg-mist"
            >
              <CartIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Panel tiga kolom di bawah bar, selebar halaman */}
      {openMega && (
        <div
          className="absolute inset-x-0 top-full hidden border-b border-hairline bg-paper shadow-sm desktop:block"
          onMouseEnter={() => setOpenMega(true)}
        >
          <div className="container-ag grid grid-cols-3 gap-10 py-10">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-nav uppercase text-cocoa-soft">{col.title}</p>
                <ul className="mt-5 flex flex-col gap-3">
                  {col.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-body text-cocoa transition hover:text-blossom-deep"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {openMenu && (
        <div className="border-b border-hairline bg-paper desktop:hidden">
          <nav className="container-ag flex flex-col py-2" aria-label="Menu mobile">
            {mainMenu.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex h-14 items-center border-b border-hairline font-display text-heading-2 text-cocoa"
              >
                {item.label}
              </Link>
            ))}

            <div className="flex flex-col gap-6 py-6">
              {columns.map((col) => (
                <div key={col.title}>
                  <p className="text-nav uppercase text-cocoa-soft">{col.title}</p>
                  <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                    {col.items.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className="text-body-sm text-cocoa">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 border-t border-hairline py-5">
              {secondaryMenu.map((item) => (
                <Link key={item.href} href={item.href} className="text-nav uppercase text-cocoa-soft">
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-hairline py-5">
              <Logo size="sm" />
              <span className="font-display text-body italic text-blossom-deep">{site.tagline}</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
