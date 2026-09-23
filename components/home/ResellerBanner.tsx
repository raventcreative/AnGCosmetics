import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { site, waLink } from "@/lib/site";

/** Ajakan kerja sama reseller: foto di satu sisi, angka yang jelas di sisi lain. */
export function ResellerBanner() {
  return (
    <section className="section-y">
      <div className="container-ag grid items-stretch gap-0 overflow-hidden border border-hairline tablet:grid-cols-2">
        <div className="relative min-h-[280px] tablet:min-h-[420px]">
          <Image
            src="/editorial/ritual-hands.jpg"
            alt="Tangan mengaplikasikan lotion A&G Cosmetics"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-6 p-8 desktop:p-14">
          <p className="text-nav uppercase text-blossom-deep">Peluang usaha</p>
          <h2 className="max-w-[20ch] font-display text-heading-1 text-cocoa desktop:text-display-l">
            Jualan produk yang <em className="accent">legal</em>, margin yang masuk akal
          </h2>
          <dl className="grid grid-cols-3 gap-4 border-y border-hairline py-6">
            {[
              { v: "2×", l: "selisih harga jual" },
              { v: "5%", l: "diskon di atas 3 lusin" },
              { v: "12.500", l: "harga ambil terendah" },
            ].map((item) => (
              <div key={item.l}>
                <dt className="font-display text-heading-2 text-cocoa">{item.v}</dt>
                <dd className="mt-1 text-caption text-cocoa-soft">{item.l}</dd>
              </div>
            ))}
          </dl>
          <p className="max-w-[46ch] text-body-sm text-cocoa-soft">
            Semua produk punya izin edar BPOM dan sertifikasi halal, lengkap dengan materi jualan
            siap pakai. Cocok untuk jualan online maupun toko offline.
          </p>
          <div className="flex flex-col gap-3 tablet:flex-row">
            <Button href="/reseller" variant="ink">
              Lihat daftar harga
            </Button>
            <Button
              href={waLink(
                `Hai ${site.contact.person}, saya mau tanya soal kerja sama reseller A&G Cosmetics.`,
              )}
              variant="secondary"
              external
            >
              Chat {site.contact.person}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
