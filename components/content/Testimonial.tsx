import { Rating } from "@/components/ui/Rating";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { FlowerBadge } from "@/components/layout/FlowerBadge";
import { testimonials } from "@/lib/data/testimonials";

/**
 * Section testimoni / UGC. Kartu white, kutipan Fraunces italic 18px, nama + kota,
 * rating, produk yang dipakai. Background section cotton-pink dengan badge bunga.
 *
 * CATATAN: teks di bawah adalah contoh layout, bukan testimoni asli.
 */
export function Testimonial() {
  return (
    <section className="relative overflow-hidden bg-cotton-pink/60 section-y">
      <FlowerBadge
        color="cotton"
        className="pointer-events-none absolute -right-16 -top-16 size-56 opacity-70"
      />
      <div className="container-ag relative flex flex-col gap-8">
        <SectionHeading
          eyebrow="Kata bestie"
          title="Yang mereka rasain setelah"
          accent="rutin"
          desc="Contoh layout testimoni. Akan diganti dengan ulasan asli pelanggan beserta izinnya."
        />
        <ul className="grid gap-4 tablet:grid-cols-3 tablet:gap-6">
          {testimonials.map((t) => (
            <li key={t.name} className="flex flex-col gap-4 rounded-lg border border-line bg-white p-6">
              <p className="font-display text-[18px] italic leading-7 text-cocoa">
                &ldquo;{t.quote}&rdquo;
              </p>
              <Rating value={t.rating} count={1} />
              <div className="mt-auto">
                <p className="text-body-sm font-semibold text-cocoa">
                  {t.name} · {t.city}
                </p>
                <p className="text-caption text-cocoa-soft">Pakai {t.product}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
