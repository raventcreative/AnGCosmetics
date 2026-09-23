"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { products } from "@/lib/data/products";
import { rupiah } from "@/lib/utils";

/**
 * Ringkasan pesanan di halaman checkout (desktop: kolom kanan sticky).
 * Card white shadow-sm: daftar item ringkas, input voucher, rincian subtotal,
 * ongkir, diskon (success), total (heading-2), metode pembayaran, tombol Bayar.
 */
export function CheckoutSummary() {
  const [voucher, setVoucher] = useState("");
  const [applied, setApplied] = useState(false);

  const lines = [
    { product: products[0], qty: 1 },
    { product: products[1], qty: 2 },
  ];
  const subtotal = lines.reduce((s, l) => s + l.product.price * l.qty, 0);
  const shipping = subtotal >= 150000 ? 0 : 18000;
  const discount = applied ? Math.round(subtotal * 0.05) : 0;
  const total = subtotal + shipping - discount;

  return (
    <div className="border border-hairline bg-paper p-6 shadow-sm">
      <h3 className="font-display text-heading-2">Ringkasan pesanan</h3>

      <ul className="mt-4 divide-y divide-hairline">
        {lines.map((l) => (
          <li key={l.product.slug} className="flex items-start justify-between gap-3 py-3">
            <span className="text-body-sm text-cocoa">
              {l.product.name}
              <span className="block text-caption text-cocoa-soft">
                {l.qty} × {rupiah(l.product.price)}
              </span>
            </span>
            <span className="text-body-sm font-semibold text-cocoa">
              {rupiah(l.product.price * l.qty)}
            </span>
          </li>
        ))}
      </ul>

      <form
        className="mt-4 flex items-end gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          setApplied(voucher.trim().length > 0);
        }}
      >
        <div className="flex-1">
          <Input
            id="voucher"
            label="Kode voucher"
            placeholder="BESTIE5"
            value={voucher}
            onChange={(e) => setVoucher(e.target.value)}
          />
        </div>
        <Button type="submit" variant="secondary">
          Pakai
        </Button>
      </form>

      <dl className="mt-5 flex flex-col gap-2 border-t border-hairline pt-4 text-body-sm">
        <div className="flex justify-between">
          <dt className="text-cocoa-soft">Subtotal</dt>
          <dd className="text-cocoa">{rupiah(subtotal)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-cocoa-soft">Ongkir</dt>
          <dd className="text-cocoa">{shipping === 0 ? "Gratis" : rupiah(shipping)}</dd>
        </div>
        {discount > 0 && (
          <div className="flex justify-between">
            <dt className="text-cocoa-soft">Diskon voucher</dt>
            <dd className="text-success">−{rupiah(discount)}</dd>
          </div>
        )}
      </dl>

      <div className="mt-4 flex items-baseline justify-between border-t border-hairline pt-4">
        <span className="text-body font-semibold text-cocoa">Total</span>
        <span className="text-heading-2 font-semibold text-blossom-deep">{rupiah(total)}</span>
      </div>

      <fieldset className="mt-5 flex flex-col gap-2">
        <legend className="pb-2 text-[13px] font-semibold text-cocoa">Metode pembayaran</legend>
        {["Transfer bank", "QRIS", "COD lewat marketplace"].map((method, i) => (
          <label
            key={method}
            className="flex h-11 cursor-pointer items-center gap-3 rounded-sm border border-hairline px-4 text-body-sm has-checked:border-blossom-deep has-checked:bg-cotton-pink/30"
          >
            <input
              type="radio"
              name="payment"
              defaultChecked={i === 0}
              className="size-4 accent-[#A9436C]"
            />
            {method}
          </label>
        ))}
      </fieldset>

      <Button fullWidth className="mt-5">
        Bayar sekarang
      </Button>
      <p className="mt-3 text-center text-caption text-cocoa-soft">
        Transaksi diproses lewat toko resmi · Data kamu tidak dibagikan
      </p>
    </div>
  );
}
