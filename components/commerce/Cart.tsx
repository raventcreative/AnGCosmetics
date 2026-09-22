"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { products } from "@/lib/data/products";
import { rupiah } from "@/lib/utils";

const FREE_SHIPPING = 150000;

type Line = { slug: string; qty: number };

/**
 * Cart drawer dari kanan (mobile: full screen).
 * Header jumlah item, progress bar gratis ongkir, daftar item, footer subtotal +
 * tombol Checkout, dan satu cross-sell.
 *
 * Catatan: website A&G mengarahkan transaksi ke toko resmi marketplace, jadi
 * komponen ini dipakai sebagai referensi design system dan demo interaktif.
 */
export function Cart({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [lines, setLines] = useState<Line[]>([
    { slug: "advanced-brightening-shower-gel", qty: 1 },
    { slug: "whitening-booster-body-lotion", qty: 2 },
  ]);

  const items = lines
    .map((l) => ({ ...l, product: products.find((p) => p.slug === l.slug)! }))
    .filter((l) => l.product);
  const subtotal = items.reduce((sum, l) => sum + l.product.price * l.qty, 0);
  const progress = Math.min(100, Math.round((subtotal / FREE_SHIPPING) * 100));
  const crossSell = products.find((p) => !lines.some((l) => l.slug === p.slug))!;

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Keranjang">
      <div className="absolute inset-0 bg-cocoa/45" onClick={onClose} aria-hidden="true" />
      <aside className="absolute inset-y-0 right-0 flex w-full flex-col bg-white shadow-lg tablet:max-w-[420px]">
        <header className="flex items-center justify-between border-b border-line p-4">
          <h2 className="font-display text-heading-2">
            Keranjang <span className="text-body-sm text-cocoa-soft">({items.length} item)</span>
          </h2>
          <button
            onClick={onClose}
            aria-label="Tutup keranjang"
            className="flex size-9 items-center justify-center rounded-full text-cocoa-soft hover:bg-cotton-pink/40"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.6" fill="none" />
            </svg>
          </button>
        </header>

        <div className="border-b border-line p-4">
          <p className="text-caption text-cocoa-soft">
            {subtotal >= FREE_SHIPPING
              ? "Yeay, kamu dapat gratis ongkir."
              : `Tambah ${rupiah(FREE_SHIPPING - subtotal)} lagi untuk gratis ongkir.`}
          </p>
          <div className="mt-2 h-1.5 w-full rounded-full bg-line">
            <div
              className="h-full rounded-full bg-sage transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <ul className="flex-1 divide-y divide-line overflow-y-auto">
          {items.map((line) => (
            <li key={line.slug} className="flex gap-3 p-4">
              <Image
                src={line.product.image}
                alt={line.product.name}
                width={128}
                height={128}
                className="size-16 shrink-0 rounded-sm border border-line object-contain"
              />
              <div className="flex flex-1 flex-col gap-1">
                <p className="text-body-sm font-semibold text-cocoa">{line.product.name}</p>
                <p className="text-caption text-cocoa-soft">{line.product.size}</p>
                <div className="mt-1 flex items-center justify-between">
                  <div className="flex h-9 items-center rounded-full border border-line">
                    <button
                      onClick={() =>
                        setLines((prev) =>
                          prev.map((p) =>
                            p.slug === line.slug ? { ...p, qty: Math.max(1, p.qty - 1) } : p,
                          ),
                        )
                      }
                      aria-label={`Kurangi ${line.product.name}`}
                      className="size-9 rounded-full text-cocoa hover:bg-cotton-pink/40"
                    >
                      –
                    </button>
                    <span className="w-7 text-center text-body-sm font-semibold">{line.qty}</span>
                    <button
                      onClick={() =>
                        setLines((prev) =>
                          prev.map((p) => (p.slug === line.slug ? { ...p, qty: p.qty + 1 } : p)),
                        )
                      }
                      aria-label={`Tambah ${line.product.name}`}
                      className="size-9 rounded-full text-cocoa hover:bg-cotton-pink/40"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-price text-blossom-deep">
                    {rupiah(line.product.price * line.qty)}
                  </span>
                </div>
                <button
                  onClick={() => setLines((prev) => prev.filter((p) => p.slug !== line.slug))}
                  className="self-start text-caption text-cocoa-soft underline-offset-2 hover:text-error hover:underline"
                >
                  Hapus
                </button>
              </div>
            </li>
          ))}
          {items.length === 0 && (
            <li className="p-6 text-center text-body-sm text-cocoa-soft">
              Keranjangmu masih kosong, bestie.
            </li>
          )}
        </ul>

        <div className="border-t border-line bg-butter-cream p-4">
          <p className="text-label uppercase tracking-[0.12em] text-cocoa-soft">Sering dibeli bareng</p>
          <div className="mt-2 flex items-center gap-3">
            <Image
              src={crossSell.image}
              alt={crossSell.name}
              width={128}
              height={128}
              className="size-14 rounded-sm bg-white object-contain"
            />
            <div className="flex-1">
              <p className="text-body-sm font-semibold text-cocoa">{crossSell.name}</p>
              <p className="text-caption text-blossom-deep">{rupiah(crossSell.price)}</p>
            </div>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => setLines((prev) => [...prev, { slug: crossSell.slug, qty: 1 }])}
            >
              Tambah
            </Button>
          </div>
        </div>

        <footer className="border-t border-line p-4">
          <div className="flex items-center justify-between pb-3">
            <span className="text-body text-cocoa">Subtotal</span>
            <span className="text-heading-2 font-semibold text-blossom-deep">{rupiah(subtotal)}</span>
          </div>
          <Button fullWidth>Checkout</Button>
        </footer>
      </aside>
    </div>
  );
}
