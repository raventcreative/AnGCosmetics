import type { Metadata } from "next";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { priceList, priceNote } from "@/lib/data/products";
import { faqs } from "@/lib/data/faq";
import { site, waLink } from "@/lib/site";
import { rupiah } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Jadi Reseller",
  description:
    "Daftar harga reseller A&G Cosmetics, skema diskon, dan cara mendaftar. Margin sampai dua kali harga ambil, produk sudah BPOM dan Halal.",
};

const steps = [
  { title: "Chat WhatsApp", desc: `Hubungi ${site.contact.person} di ${site.contact.phone}, sebutkan nama, kota, dan produk yang mau diambil.` },
  { title: "Terima penawaran", desc: "Tim kami kirim daftar harga reseller, skema diskon, dan estimasi pengiriman." },
  { title: "Bayar & kirim", desc: "Pesanan diproses setelah pembayaran, lengkap dengan materi jualan siap pakai." },
  { title: "Mulai jualan", desc: "Jual online maupun offline. Kami bantu dengan foto produk dan template konten." },
];

export default function ResellerPage() {
  return (
    <>
      <section className="section-y">
        <div className="container-ag grid gap-10 desktop:grid-cols-[1.05fr_0.95fr] desktop:items-center">
          <div className="flex flex-col gap-6">
            <Badge tone="promo">Peluang usaha</Badge>
            <h1 className="font-display text-display-l text-cocoa desktop:text-display-xl">
              Jualan produk yang <em className="accent">legal</em>, margin yang masuk akal
            </h1>
            <p className="max-w-[52ch] text-body text-cocoa-soft">
              Semua produk A&amp;G punya izin edar BPOM dan sertifikasi halal, jadi kamu jualan
              tanpa khawatir. Harga reseller mulai Rp 12.500 dengan harga jual standar yang sudah
              kami tetapkan supaya pasarnya tetap sehat.
            </p>
            <ul className="flex flex-col gap-2 text-body text-cocoa">
              {[
                "Selisih harga jual dan harga ambil sampai 2×",
                "Diskon 5% untuk pengambilan di atas 3 lusin",
                "Materi konten, foto produk, dan template siap pakai",
                "Bisa untuk toko offline maupun jualan online",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sage" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 tablet:flex-row">
              <Button
                href={waLink(
                  `Hai ${site.contact.person}, saya mau daftar jadi reseller A&G Cosmetics. Kota saya: `,
                )}
                external
              >
                Daftar lewat WhatsApp
              </Button>
              <Button href="#daftar-harga" variant="secondary">
                Lihat daftar harga
              </Button>
            </div>
          </div>

          <div className="border border-cotton-pink bg-paper p-6 shadow-md desktop:p-8">
            <p className="text-label uppercase tracking-[0.12em] text-blossom-deep">
              Simulasi margin
            </p>
            <h2 className="mt-2 font-display text-heading-2 text-cocoa">
              Ambil 1 lusin lip series
            </h2>
            <dl className="mt-4 flex flex-col gap-3 text-body-sm">
              <div className="flex justify-between border-b border-hairline pb-2">
                <dt className="text-cocoa-soft">Harga ambil (12 × Rp 18.750)</dt>
                <dd className="font-semibold text-cocoa">{rupiah(225000)}</dd>
              </div>
              <div className="flex justify-between border-b border-hairline pb-2">
                <dt className="text-cocoa-soft">Harga jual (12 × Rp 40.000)</dt>
                <dd className="font-semibold text-cocoa">{rupiah(480000)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-semibold text-cocoa">Potensi margin</dt>
                <dd className="text-heading-2 font-semibold text-blossom-deep">{rupiah(255000)}</dd>
              </div>
            </dl>
            <p className="mt-4 text-caption text-cocoa-soft">
              Simulasi berdasarkan daftar harga di bawah, belum termasuk ongkir dan biaya
              pemasaran. Diskon tambahan berlaku untuk pengambilan di atas 3 lusin.
            </p>
          </div>
        </div>
      </section>

      <section id="daftar-harga" className="bg-mist section-y">
        <div className="container-ag flex flex-col gap-8">
          <SectionHeading
            eyebrow="07 · Pricing"
            title="Daftar harga"
            accent="reseller"
            desc="Harga standar jual dan harga reseller sesuai company profile A&G Cosmetics 2026."
          />

          <div className="overflow-hidden border border-hairline bg-paper">
            <table className="w-full text-left">
              <caption className="sr-only">Daftar harga produk A&G Cosmetics</caption>
              <thead>
                <tr className="border-b border-hairline bg-cotton-pink/30">
                  <th scope="col" className="p-4 text-label uppercase tracking-[0.12em] text-cocoa">
                    Nama produk
                  </th>
                  <th scope="col" className="p-4 text-label uppercase tracking-[0.12em] text-cocoa">
                    Standar harga jual
                  </th>
                  <th scope="col" className="p-4 text-label uppercase tracking-[0.12em] text-cocoa">
                    Reseller
                  </th>
                </tr>
              </thead>
              <tbody>
                {priceList.map((row) => (
                  <tr key={row.name} className="border-b border-hairline last:border-0">
                    <th scope="row" className="p-4 text-body-sm font-semibold text-cocoa">
                      {row.name}
                    </th>
                    <td className="p-4 text-body-sm text-cocoa">{rupiah(row.retail)}</td>
                    <td className="p-4 text-price text-blossom-deep">{rupiah(row.reseller)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-body-sm text-cocoa-soft">*{priceNote}</p>
          <p className="text-body-sm text-cocoa-soft">
            Lini perawatan wajah — Centella Hydrating Facial Foam, 71 Centella Niacin Hydrating
            Essence Toner, dan Booster Whitening Barrier Serum — belum masuk daftar harga ini.
            Harga reseller dan jadwal rilisnya menyusul.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-ag flex flex-col gap-8">
          <SectionHeading eyebrow="Alur" title="Empat langkah sampai" accent="jualan" />
          <ol className="grid gap-4 tablet:grid-cols-2 desktop:grid-cols-4 tablet:gap-6">
            {steps.map((step, i) => (
              <li key={step.title} className="border border-hairline bg-paper p-6">
                <span className="flex size-10 items-center justify-center rounded-full bg-cotton-pink font-display text-title text-blossom-deep">
                  {i + 1}
                </span>
                <h3 className="mt-3 text-title font-sans text-cocoa">{step.title}</h3>
                <p className="mt-1 text-body-sm text-cocoa-soft">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-mist section-y">
        <div className="container-ag grid gap-8 desktop:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading eyebrow="FAQ reseller" title="Pertanyaan sebelum" accent="mulai" />
          <FAQAccordion items={faqs.filter((f) => f.group === "reseller")} />
        </div>
      </section>
    </>
  );
}
