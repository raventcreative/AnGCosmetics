import Image from "next/image";
import { Button } from "@/components/ui/Button";

/** Satu momen brand berukuran penuh: foto besar, satu kalimat, satu ajakan. */
export function FullBleedStory() {
  return (
    <section className="relative isolate">
      <div className="relative min-h-[420px] w-full overflow-hidden tablet:min-h-[520px] desktop:min-h-[620px]">
        <Image
          src="/editorial/morning-ritual.jpg"
          alt="Rutinitas pagi di kamar mandi dengan cahaya alami"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cocoa/85 via-cocoa/45 to-cocoa/10" />
        <div className="container-ag relative flex min-h-[420px] items-end py-12 tablet:min-h-[520px] desktop:min-h-[620px] desktop:py-16">
          <div className="flex max-w-[560px] flex-col gap-5">
            <p className="text-nav uppercase text-ivory/80">Rutinitas harian</p>
            <p className="font-display text-heading-1 text-ivory desktop:text-display-l">
              Perawatan yang kamu <em className="italic">pakai tiap hari</em>, bukan yang cuma
              dipajang
            </p>
            <div>
              <Button href="/journal/urutan-body-care-biar-glow-nya-kelihatan" variant="paper">
                Baca panduan rutinitas
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
