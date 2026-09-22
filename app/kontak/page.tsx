import type { Metadata } from "next";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description:
    "Hubungi A&G Cosmetics untuk pertanyaan produk, kerja sama reseller, distribusi, dan kolaborasi konten.",
};

const channels = [
  {
    title: "WhatsApp",
    value: `${site.contact.phone} (${site.contact.person})`,
    desc: "Paling cepat dibalas, untuk pertanyaan produk maupun kerja sama.",
    href: waLink("Hai A&G Cosmetics, saya mau bertanya."),
  },
  {
    title: "Toko resmi",
    value: "Shopee & TikTok Shop",
    desc: "Semua transaksi retail diproses lewat toko resmi kami.",
    href: site.marketplace.shopee,
  },
  {
    title: "Instagram",
    value: "@ag.cosmetics",
    desc: "Update produk baru, konten edukasi, dan review bestie.",
    href: site.social.instagram,
  },
];

export default function KontakPage() {
  return (
    <div className="section-y">
      <div className="container-ag grid gap-10 desktop:grid-cols-[0.95fr_1.05fr]">
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Kontak"
            title="Ngobrol dulu sama"
            accent="kami"
            desc="Mau tanya produk, jadi reseller, atau kerja sama distribusi? Pilih jalur yang paling nyaman buat kamu."
          />
          <ul className="flex flex-col gap-4">
            {channels.map((c) => (
              <li key={c.title} className="rounded-lg border border-line bg-white p-6">
                <p className="text-label uppercase tracking-[0.12em] text-sage-deep">{c.title}</p>
                <p className="mt-1 text-title text-cocoa">{c.value}</p>
                <p className="mt-1 text-body-sm text-cocoa-soft">{c.desc}</p>
                <Button href={c.href} variant="text" external className="mt-2 px-0">
                  Buka {c.title} →
                </Button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-5 rounded-lg border border-line bg-white p-6 shadow-sm desktop:p-8">
          <div>
            <h2 className="font-display text-heading-2 text-cocoa">Kirim pesan</h2>
            <p className="mt-1 text-body-sm text-cocoa-soft">
              Formulir ini menyiapkan pesanmu lalu membukanya di WhatsApp — jadi riwayat chat tetap
              ada di HP kamu.
            </p>
          </div>

          <form
            className="flex flex-col gap-4"
            action={waLink("Hai A&G Cosmetics, saya mau bertanya.")}
            method="get"
            target="_blank"
          >
            <Input id="nama" label="Nama" placeholder="Nama kamu" required />
            <Input id="kota" label="Kota" placeholder="Domisili kamu" />
            <Input
              id="topik"
              label="Topik"
              placeholder="Tanya produk / reseller / distribusi"
            />
            <Textarea id="pesan" label="Pesan" placeholder="Tulis pertanyaanmu di sini…" />
            <Button type="submit" fullWidth>
              <WhatsAppIcon />
              Lanjut ke WhatsApp
            </Button>
            <p className="text-caption text-cocoa-soft">
              Dengan mengirim pesan, kamu setuju kami menghubungi kamu kembali lewat WhatsApp.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
