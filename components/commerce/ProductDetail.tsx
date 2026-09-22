"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Badge, CertBadges } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Rating } from "@/components/ui/Rating";
import { Toast } from "@/components/ui/Toast";
import type { Product } from "@/lib/data/products";
import { site, waLink } from "@/lib/site";
import { cn, rupiah } from "@/lib/utils";

/**
 * Layout detail produk. Kiri: galeri (foto utama radius-xl + thumbnail).
 * Kanan: breadcrumb, nama heading-1, rating, harga, chip varian, quantity stepper,
 * tombol primary + secondary, badge BPOM/Halal, poin manfaat.
 * Mobile: galeri di atas, tombol aksi menempel di bawah layar.
 */
export function ProductDetail({ product }: { product: Product }) {
  const images = [product.image, ...product.gallery];
  const [active, setActive] = useState(0);
  const [shade, setShade] = useState(0);
  const [qty, setQty] = useState(1);
  const [toast, setToast] = useState(false);

  return (
    <div className="container-ag grid gap-8 py-8 desktop:grid-cols-2 desktop:gap-16 desktop:py-12">
      <div className="flex flex-col gap-4">
        <div className="overflow-hidden rounded-xl border border-line bg-white">
          <Image
            src={images[active]}
            alt={product.name}
            width={900}
            height={900}
            priority
            className={cn(
              "w-full object-contain",
              active === 0 ? "aspect-square p-6" : "aspect-[4/5] object-cover",
            )}
          />
        </div>
        <div className="flex gap-3">
          {images.map((img, i) => (
            <button
              key={img + i}
              onClick={() => setActive(i)}
              aria-label={`Lihat foto ${i + 1}`}
              className={cn(
                "size-20 overflow-hidden rounded-sm border bg-white p-1 transition",
                active === i ? "border-blossom-deep" : "border-line hover:border-cotton-pink",
              )}
            >
              <Image
                src={img}
                alt=""
                width={160}
                height={160}
                className="size-full object-contain"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <nav aria-label="Breadcrumb" className="text-caption text-cocoa-soft">
          <Link href="/" className="hover:text-blossom-deep">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/produk?kategori=${product.category}`} className="hover:text-blossom-deep">
            {product.categoryLabel}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-cocoa">{product.name}</span>
        </nav>

        <div className="flex flex-col gap-3">
          <p className="text-label uppercase tracking-[0.12em] text-sage-deep">{product.eyebrow}</p>
          <h1 className="font-display text-heading-1 text-cocoa">{product.name}</h1>
          <p className="font-display text-tagline italic text-blossom-deep">{product.tagline}</p>
          <Rating value={product.rating} count={product.reviewCount} size={18} />
        </div>

        <div className="flex items-baseline gap-3">
          <span className="text-heading-2 font-semibold text-blossom-deep">
            {rupiah(product.price)}
          </span>
          <span className="text-caption text-cocoa-soft">
            {product.size} · POM {product.pom}
          </span>
        </div>

        <p className="text-body text-cocoa-soft">{product.description}</p>

        {product.shades && (
          <div className="flex flex-col gap-2">
            <p className="text-[13px] font-semibold text-cocoa">Pilih shade</p>
            <div className="flex flex-wrap gap-2">
              {product.shades.map((s, i) => (
                <button
                  key={s.name}
                  onClick={() => setShade(i)}
                  className={cn(
                    "flex items-center gap-2 rounded-full px-3 py-2 text-body-sm transition",
                    shade === i
                      ? "bg-cotton-pink text-cocoa ring-[1.5px] ring-blossom-deep"
                      : "bg-cotton-pink/50 text-cocoa hover:bg-cotton-pink",
                  )}
                >
                  <span
                    className="size-4 rounded-full border border-white/70"
                    style={{ backgroundColor: s.hex }}
                    aria-hidden="true"
                  />
                  {s.name}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex h-11 items-center rounded-full border border-line bg-white">
            <button
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              aria-label="Kurangi jumlah"
              className="size-11 rounded-full text-title text-cocoa transition hover:bg-cotton-pink/40"
            >
              –
            </button>
            <span aria-live="polite" className="w-8 text-center text-body font-semibold">
              {qty}
            </span>
            <button
              onClick={() => setQty((q) => q + 1)}
              aria-label="Tambah jumlah"
              className="size-11 rounded-full text-title text-cocoa transition hover:bg-cotton-pink/40"
            >
              +
            </button>
          </div>
          <Badge tone="success">Stok tersedia</Badge>
        </div>

        <div className="hidden gap-3 tablet:flex">
          <Button href={site.marketplace.shopee} external fullWidth>
            Beli di Shopee
          </Button>
          <Button href={site.marketplace.tiktok} variant="secondary" external fullWidth>
            Beli di TikTok Shop
          </Button>
        </div>

        <button
          onClick={() => setToast(true)}
          className="text-left text-body-sm font-semibold text-blossom-deep hover:underline"
        >
          Tanya dulu sebelum beli? Chat bestie kami
        </button>

        <CertBadges pom={product.pom} />

        <ul className="grid gap-3 tablet:grid-cols-2">
          {product.benefits.map((b) => (
            <li key={b.title} className="rounded-md border border-line bg-white p-4">
              <p className="text-body-sm font-semibold text-cocoa">{b.title}</p>
              <p className="text-caption text-cocoa-soft">{b.desc}</p>
            </li>
          ))}
        </ul>

        <div className="rounded-lg bg-butter-cream p-4">
          <p className="text-label uppercase tracking-[0.12em] text-cocoa-soft">Cara pakai</p>
          <ol className="mt-2 flex flex-col gap-2">
            {product.howToUse.map((step, i) => (
              <li key={step} className="flex gap-3 text-body-sm text-cocoa">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white text-caption font-semibold text-blossom-deep">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Mobile: tombol aksi menempel di bawah layar */}
      <div className="fixed inset-x-0 bottom-0 z-30 flex gap-3 border-t border-line bg-white/95 p-4 backdrop-blur tablet:hidden">
        <Button href={site.marketplace.shopee} external fullWidth>
          Beli · {rupiah(product.price * qty)}
        </Button>
      </div>

      <Toast
        open={toast}
        status="success"
        message="Chat WhatsApp terbuka di tab baru, ya bestie."
        action={{
          label: "Buka",
          onClick: () => window.open(waLink(`Hai A&G, aku mau tanya soal ${product.name}.`), "_blank"),
        }}
        onClose={() => setToast(false)}
      />
    </div>
  );
}
