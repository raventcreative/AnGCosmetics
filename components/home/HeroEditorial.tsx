import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

/**
 * Hero full-bleed bergaya editorial: satu foto besar, satu pesan, dua tombol.
 * Teks duduk di sepertiga kiri (ruang kosong yang memang disiapkan di foto),
 * dengan scrim gradien tipis supaya kontras teks tetap aman di atas foto.
 */
export function HeroEditorial() {
  return (
    <section className="relative isolate">
      <div className="relative min-h-[560px] w-full overflow-hidden tablet:min-h-[620px] desktop:min-h-[720px]">
        <Image
          src="/editorial/hero-wide.jpg"
          alt="Rangkaian produk A&G Cosmetics di atas podium dengan latar pink lembut"
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-[70%_center] tablet:block"
        />
        <Image
          src="/editorial/hero-portrait.jpg"
          alt="Rangkaian produk A&G Cosmetics di atas podium dengan latar pink lembut"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_center] tablet:hidden"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-paper/92 via-paper/70 to-paper/10 tablet:from-paper/85 tablet:via-paper/45 tablet:to-transparent" />

        <div className="container-ag relative flex min-h-[560px] items-center py-16 tablet:min-h-[620px] desktop:min-h-[720px]">
          <div className="flex max-w-[520px] flex-col gap-6 desktop:max-w-[620px]">
            <p className="text-nav uppercase text-blossom-deep">Seri unggulan</p>
            <h1 className="font-display text-display-l text-cocoa desktop:text-display-2xl">
              Glow yang <em className="accent">tenang</em>, bukan yang instan
            </h1>
            <p className="max-w-[44ch] text-body text-cocoa-soft">
              Rangkaian perawatan tubuh dan makeup buatan Indonesia dengan standar Korea.
              Terdaftar BPOM, bersertifikat halal, di harga Rp 30rb sampai Rp 80rb.
            </p>
            <div className="flex flex-col gap-3 tablet:flex-row">
              <Button href="/produk" variant="ink">
                Lihat koleksi
              </Button>
              <Button href={site.marketplace.shopee} variant="secondary" external>
                Belanja di toko resmi
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
