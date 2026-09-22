import type { Metadata } from "next";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { Button } from "@/components/ui/Button";
import { faqs } from "@/lib/data/faq";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Pertanyaan yang paling sering ditanyakan soal produk, belanja, dan kerja sama reseller A&G Cosmetics.",
};

const groups = [
  { id: "produk" as const, title: "Produk & kandungan" },
  { id: "belanja" as const, title: "Belanja & keaslian" },
  { id: "reseller" as const, title: "Reseller & kerja sama" },
];

export default function FaqPage() {
  return (
    <div className="section-y">
      <div className="container-ag flex flex-col gap-10">
        <SectionHeading
          eyebrow="Bantuan"
          title="Pertanyaan yang sering"
          accent="masuk"
          desc="Kalau jawabannya belum ada di sini, chat kami langsung, ya bestie."
        />

        {groups.map((group) => (
          <section key={group.id} className="flex flex-col gap-4">
            <h2 className="font-display text-heading-2 text-cocoa">{group.title}</h2>
            <FAQAccordion items={faqs.filter((f) => f.group === group.id)} />
          </section>
        ))}

        <div className="flex flex-col gap-4 rounded-lg border border-cotton-pink bg-white p-6 shadow-sm desktop:flex-row desktop:items-center desktop:justify-between desktop:p-8">
          <div>
            <p className="text-title text-cocoa">Masih ada yang mau ditanya?</p>
            <p className="text-body-sm text-cocoa-soft">
              Tim kami balas di jam kerja, {site.contact.phone} ({site.contact.person}).
            </p>
          </div>
          <Button href={waLink("Hai A&G, aku mau tanya sesuatu soal produk kalian.")} external>
            Chat WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}
