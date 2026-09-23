"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
  { label: "Brand", href: "/tentang" },
  { label: "Journal", href: "/journal" },
  { label: "Reseller", href: "/reseller" },
];

const docsMenu = [
  { label: "FAQ", href: "/faq" },
  { label: "Kontak", href: "/kontak" },
  { label: "Brand Guideline", href: "/brand-guideline" },
  { label: "Design System", href: "/design-system" },
];

/**
 * Header sticky minimal: announcement bar cocoa tipis, lalu bar utama putih
 * dengan hairline bawah. Menu uppercase berjarak lebar (text-nav) supaya terasa
 * editorial, bukan toko. Mobile: hamburger kiri, logo tengah, keranjang kanan.
 */
export function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const [openMega, setOpenMega] = useState(false);
  const featured = products[0];

  useEffect(() => {
    setOpenMenu(false);
    setOpenMega(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 bg-paper">
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

            <nav className="hidden items-center gap-7 desktop:flex" aria-label="Menu utama">
              {mainMenu.map((item) => (
                <div
                  key={item.href}
                  onMouseEnter={() => setOpenMega(Boolean(item.mega))}
                  onMouseLeave={() => setOpenMega(false)}
                  className="relative flex h-[76px] items-center"
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "text-nav uppercase transition",
                      pathname.startsWith(item.href)
                        ? "text-blossom-deep"
                        : "text-cocoa hover:text-blossom-deep",
                    )}
                  >
                    {item.label}
                  </Link>

                  {item.mega && openMega && (
                    <div className="absolute left-1/2 top-full z-50 w-[760px] -translate-x-1/2">
                      <div className="grid grid-cols-[1fr_1fr_260px] gap-10 border border-hairline bg-paper p-8 shadow-sm">
                        <div>
                          <p className="text-nav uppercase text-cocoa-soft">Kategori</p>
                          <ul className="mt-4 flex flex-col gap-3">
                            {categories.map((c) => (
                              <li key={c.id}>
                                <Link
                                  href={`/produk?kategori=${c.id}`}
                                  className="group block"
                                >
                                  <span className="text-title font-sans text-cocoa transition group-hover:text-blossom-deep">
                                    {c.label}
                                  </span>
                                  <span className="block text-caption text-cocoa-soft">
                                    {c.items}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-nav uppercase text-cocoa-soft">Shop by concern</p>
                          <ul className="mt-4 flex flex-col gap-3">
                            {concerns.map((c) => (
                              <li key={c.href}>
                                <Link
                                  href={c.href}
                                  className="text-body-sm text-cocoa transition hover:text-blossom-deep"
                                >
                                  {c.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Link href={`/produk/${featured.slug}`} className="group flex flex-col gap-3">
                          <span className="flex aspect-square items-center justify-center bg-mist p-6">
                            <Image
                              src={featured.image}
                              alt={featured.name}
                              width={220}
                              height={220}
                              className="h-full w-auto object-contain transition duration-500 group-hover:scale-105"
                            />
                          </span>
                          <span>
                            <span className="text-nav uppercase text-cocoa-soft">Best seller</span>
                            <span className="mt-1 block text-body-sm font-semibold text-cocoa">
                              {featured.name}
                            </span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
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

      {openMenu && (
        <div className="border-b border-hairline bg-paper desktop:hidden">
          <nav className="container-ag flex flex-col py-2" aria-label="Menu mobile">
            {mainMenu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex h-14 items-center border-b border-hairline font-display text-heading-2 text-cocoa"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-4 py-5">
              {docsMenu.map((item) => (
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
