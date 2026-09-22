import Image from "next/image";
import { Logo } from "@/components/layout/Logo";

/**
 * Overlay live shopping (TikTok Live / Shopee Live) dan template iklan.
 * Live overlay: bar judul atas, kartu produk pin kiri bawah, badge "LIVE only"
 * dan timer flash sale. Area tengah dibiarkan kosong agar tidak menutupi host.
 */
export function LiveAdsKit() {
  return (
    <div className="grid gap-6 desktop:grid-cols-2">
      <div className="cq relative aspect-9/16 overflow-hidden rounded-xl border border-line bg-cocoa/90">
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-[5cqw]">
          <div className="flex items-center gap-[3cqw] rounded-full bg-ivory/95 px-[4cqw] py-[2cqw]">
            <Logo size="sm" className="scale-[0.6]" />
            <span className="text-[3cqw] font-semibold text-cocoa">Glow Day Sale</span>
          </div>
          <span className="rounded-full bg-error px-[3cqw] py-[1.6cqw] text-[3cqw] font-semibold text-ivory">
            LIVE
          </span>
        </div>

        <div className="absolute inset-x-[5cqw] top-[16cqw] flex items-center justify-between rounded-full bg-blossom-deep/95 px-[4cqw] py-[2cqw]">
          <span className="text-[3cqw] font-semibold text-ivory">Flash sale berakhir</span>
          <span className="text-[3.4cqw] font-semibold text-ivory">04 : 58</span>
        </div>

        <div className="absolute bottom-[6cqw] left-[5cqw] flex w-[58cqw] items-center gap-[3cqw] rounded-[4cqw] bg-ivory/97 p-[3cqw]">
          <Image
            src="/products/whitening-booster-body-lotion.png"
            alt=""
            width={400}
            height={400}
            className="size-[16cqw] shrink-0 object-contain"
          />
          <div>
            <p className="text-[3cqw] font-semibold leading-tight text-cocoa">
              Whitening Booster Body Lotion
            </p>
            <p className="text-[2.6cqw] text-cocoa-soft line-through">Rp 75.000</p>
            <p className="text-[4cqw] font-semibold text-blossom-deep">Rp 49.000</p>
          </div>
          <span className="absolute -top-[2cqw] right-[3cqw] rounded-full bg-blossom-pink px-[2.6cqw] py-[1.2cqw] text-[2.4cqw] font-semibold uppercase tracking-[0.1em] text-cocoa">
            Live only
          </span>
        </div>

        <p className="absolute bottom-[2cqw] right-[5cqw] text-[2.4cqw] text-ivory/70">
          Area tengah dikosongkan untuk host
        </p>
      </div>

      <div className="cq relative aspect-4/5 overflow-hidden rounded-xl border border-line bg-ivory p-[6cqw]">
        <div className="flex size-full flex-col justify-between">
          <p className="font-display text-[7cqw] leading-tight text-cocoa">
            Kulit kusam? Mulai dari <em className="accent">mandi</em>.
          </p>
          <Image
            src="/products/advanced-brightening-shower-gel.png"
            alt=""
            width={700}
            height={700}
            className="mx-auto w-[52cqw] object-contain"
          />
          <ul className="flex flex-col gap-[1.6cqw]">
            {["No-SLES, aman harian", "Licorice + Vitamin E", "BPOM & Halal"].map((point) => (
              <li key={point} className="flex items-center gap-[2cqw] text-[3.4cqw] text-cocoa">
                <span className="size-[2cqw] rounded-full bg-sage" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
          <p className="rounded-full bg-blossom-deep px-[4cqw] py-[2.4cqw] text-center text-[3.6cqw] font-semibold text-ivory">
            Cek keranjang kuning
          </p>
        </div>
      </div>
    </div>
  );
}
