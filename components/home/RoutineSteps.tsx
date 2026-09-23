import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { getProduct } from "@/lib/data/products";

const steps = [
  {
    no: "01",
    title: "Bersihkan",
    desc: "Advanced Brightening Shower Gel atau Niajic Brightening Soap. Lembut, no-SLES, aman untuk harian.",
    slug: "advanced-brightening-shower-gel",
  },
  {
    no: "02",
    title: "Rawat",
    desc: "PDRN Booster Body Serum di area yang paling ingin diratakan warnanya. Cukup dua sampai tiga tetes.",
    slug: "pdrn-booster-body-serum",
  },
  {
    no: "03",
    title: "Lindungi",
    desc: "Whitening Booster Body Lotion. Sudah ada UV Filter, jadi rutinitas paginya berhenti di sini.",
    slug: "whitening-booster-body-lotion",
  },
];

/** Tiga langkah rutinitas, disandingkan dengan satu foto detail kulit. */
export function RoutineSteps() {
  return (
    <section className="section-y">
      <div className="container-ag grid gap-10 desktop:grid-cols-[0.85fr_1.15fr] desktop:items-center desktop:gap-20">
        <div className="relative aspect-[3/4] overflow-hidden bg-mist desktop:aspect-[4/5]">
          <Image
            src="/editorial/skin-detail.jpg"
            alt="Detail kulit bahu dan leher dalam cahaya lembut"
            fill
            sizes="(max-width: 1200px) 100vw, 40vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-nav uppercase text-cocoa-soft">Rutinitas</p>
            <h2 className="max-w-[20ch] font-display text-heading-1 text-cocoa desktop:text-display-l">
              Tiga langkah, glow-nya <em className="accent">kelihatan</em>
            </h2>
            <p className="max-w-[46ch] text-body text-cocoa-soft">
              Nggak perlu sepuluh produk. Yang menentukan hasil cuma dua: urutan yang benar dan
              konsistensi.
            </p>
          </div>

          <ol className="flex flex-col">
            {steps.map((step) => {
              const product = getProduct(step.slug);
              return (
                <li
                  key={step.no}
                  className="flex items-start gap-6 border-t border-hairline py-6 last:border-b"
                >
                  <span className="font-display text-heading-2 text-blossom-pink">{step.no}</span>
                  <div className="flex-1">
                    <h3 className="font-sans text-title text-cocoa">{step.title}</h3>
                    <p className="mt-1 text-body-sm text-cocoa-soft">{step.desc}</p>
                  </div>
                  {product && (
                    <Link
                      href={`/produk/${product.slug}`}
                      aria-label={`Lihat ${product.name}`}
                      className="hidden size-16 shrink-0 items-center justify-center bg-mist p-2 transition hover:bg-cotton-pink/40 tablet:flex"
                    >
                      <Image
                        src={product.image}
                        alt=""
                        width={120}
                        height={120}
                        className="h-full w-auto object-contain"
                      />
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>

          <div>
            <Button href="/journal/urutan-body-care-biar-glow-nya-kelihatan" variant="text" className="px-0">
              Baca panduan lengkapnya →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
