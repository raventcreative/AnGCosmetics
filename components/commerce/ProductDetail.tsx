"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CertBadges } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Rating } from "@/components/ui/Rating";
import { Toast } from "@/components/ui/Toast";
import type { Product } from "@/lib/data/products";
import { site, waLink } from "@/lib/site";
import { cn, rupiah } from "@/lib/utils";

/**
 * Detail produk: galeri di kiri, keputusan beli di kanan.
 * Mobile: galeri di atas, tombol beli menempel di bawah layar.
 */
export function ProductDetail({ product }: { product: Product }) {
  const images = [product.image, ...product.gallery];
  const [active, setActive] = useState(0);
  const [shade, setShade] = useState(0);
  const [qty, setQty] = useState(1);
  const [toast, setToast] = useState(false);

  return (
    <div className="container-ag grid gap-10 py-10 desktop:grid-cols-2 desktop:gap-20 desktop:py-16">
      <div className="flex flex-col gap-4">
        <div className="relative aspect-[4/5] overflow-hidden bg-mist">
          <Image
            src={images[active]}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 50vw"
            className={cn(active === 0 ? "scale-[0.78] object-contain" : "object-cover")}
          />
        </div>
        <div className={cn("flex gap-3", images.length < 2 && "hidden")}>
          {images.map((img, i) => (
            <button
              key={img + i}
              onClick={() => setActive(i)}
              aria-label={`Lihat foto ${i + 1}`}
              className={cn(
                "relative size-20 overflow-hidden border bg-mist transition",
                active === i ? "border-cocoa" : "border-transparent hover:border-hairline",
              )}
            >
              <Image
                src={img}
                alt=""
                fill
                sizes="80px"
                className={cn(i === 0 ? "scale-[0.78] object-contain" : "object-cover")}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <nav aria-label="Breadcrumb" className="text-caption text-cocoa-soft">
          <Link href="/" className="transition hover:text-blossom-deep">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/produk?kategori=${product.category}`}
            className="transition hover:text-blossom-deep"
          >
            {product.categoryLabel}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-cocoa">{product.name}</span>
        </nav>

        <div className="flex flex-col gap-4">
          <p className="text-nav uppercase text-cocoa-soft">{product.eyebrow}</p>
          <h1 className="font-display text-heading-1 text-cocoa desktop:text-display-l">
            {product.name}
          </h1>
          <p className="font-display text-tagline italic text-blossom-deep">{product.tagline}</p>
          {product.reviewCount > 0 && (
            <Rating value={product.rating} count={product.reviewCount} size={18} />
          )}
        </div>

        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-y border-hairline py-5">
          <span className="text-heading-2 font-semibold text-blossom-deep">
            {product.price === null ? "Harga menyusul" : rupiah(product.price)}
          </span>
          <span className="text-caption text-cocoa-soft">
            {[product.size, product.pom && `POM ${product.pom}`].filter(Boolean).join(" · ") ||
              "Detail kemasan menyusul"}
          </span>
        </div>

        <p className="max-w-[54ch] text-body text-cocoa-soft">{product.description}</p>

        {product.shades && (
          <div className="flex flex-col gap-3">
            <p className="text-nav uppercase text-cocoa-soft">Pilih shade</p>
            <div className="flex flex-wrap gap-2">
              {product.shades.map((s, i) => (
                <button
                  key={s.name}
                  onClick={() => setShade(i)}
                  className={cn(
                    "flex items-center gap-2 rounded-full border px-4 py-2 text-body-sm transition",
                    shade === i
                      ? "border-cocoa bg-cotton-pink/40 text-cocoa"
                      : "border-hairline text-cocoa hover:border-cocoa",
                  )}
                >
                  <span
                    className="size-4 rounded-full"
                    style={{ backgroundColor: s.hex }}
                    aria-hidden="true"
                  />
                  {s.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Stepper dan status stok hanya untuk produk yang sudah dijual */}
        {product.price !== null && (
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex h-11 items-center border border-hairline">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                aria-label="Kurangi jumlah"
                className="size-11 text-title text-cocoa transition hover:bg-mist"
              >
                –
              </button>
              <span aria-live="polite" className="w-8 text-center text-body font-semibold">
                {qty}
              </span>
              <button
                onClick={() => setQty((q) => q + 1)}
                aria-label="Tambah jumlah"
                className="size-11 text-title text-cocoa transition hover:bg-mist"
              >
                +
              </button>
            </div>
            <span className="flex items-center gap-2 text-body-sm text-success">
              <span className="size-1.5 rounded-full bg-success" aria-hidden="true" />
              Stok tersedia
            </span>
          </div>
        )}

        <div className="hidden gap-3 tablet:flex">
          {product.price === null ? (
            <Button
              href={waLink(`Hai A&G, aku mau tanya ketersediaan ${product.name}.`)}
              external
              fullWidth
              variant="ink"
            >
              Tanya ketersediaan
            </Button>
          ) : (
            <>
              <Button href={site.marketplace.shopee} external fullWidth variant="ink">
                Beli di Shopee
              </Button>
              <Button href={site.marketplace.tiktok} variant="secondary" external fullWidth>
                Beli di TikTok Shop
              </Button>
            </>
          )}
        </div>

        <button
          onClick={() => setToast(true)}
          className="self-start text-body-sm font-semibold text-blossom-deep underline-offset-4 hover:underline"
        >
          Tanya dulu sebelum beli? Chat bestie kami
        </button>

        {product.pom ? (
          <CertBadges pom={product.pom} />
        ) : (
          <p className="text-caption text-cocoa-soft">
            Nomor izin edar dan sertifikasi ditampilkan di sini setelah terbit.
          </p>
        )}

        <ul className="grid gap-0 tablet:grid-cols-2 tablet:gap-x-8">
          {product.benefits.map((b) => (
            <li key={b.title} className="border-t border-hairline py-4">
              <p className="font-sans text-body-sm font-semibold text-cocoa">{b.title}</p>
              <p className="mt-1 text-caption text-cocoa-soft">{b.desc}</p>
            </li>
          ))}
        </ul>

        <div className="bg-mist p-6">
          <p className="text-nav uppercase text-cocoa-soft">Cara pakai</p>
          <ol className="mt-4 flex flex-col gap-3">
            {product.howToUse.map((step, i) => (
              <li key={step} className="flex gap-4 text-body-sm text-cocoa">
                <span className="font-display text-title text-blossom-pink">0{i + 1}</span>
                <span className="flex-1">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Mobile: tombol beli menempel di bawah layar */}
      <div className="fixed inset-x-0 bottom-0 z-30 flex gap-3 border-t border-hairline bg-paper/95 p-4 backdrop-blur tablet:hidden">
        <Button
          href={
            product.price === null
              ? waLink(`Hai A&G, aku mau tanya ketersediaan ${product.name}.`)
              : site.marketplace.shopee
          }
          external
          fullWidth
          variant="ink"
        >
          {product.price === null ? "Tanya ketersediaan" : `Beli · ${rupiah(product.price * qty)}`}
        </Button>
      </div>

      <Toast
        open={toast}
        status="success"
        message="Chat WhatsApp terbuka di tab baru, ya bestie."
        action={{
          label: "Buka",
          onClick: () =>
            window.open(waLink(`Hai A&G, aku mau tanya soal ${product.name}.`), "_blank"),
        }}
        onClose={() => setToast(false)}
      />
    </div>
  );
}
