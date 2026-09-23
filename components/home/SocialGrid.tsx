import Image from "next/image";
import { site } from "@/lib/site";

const tiles = [
  { src: "/editorial/ugc-3.jpg", alt: "", span: "" },
  { src: "/products/pdrn-booster-body-serum.png", alt: "", span: "", contain: true },
  { src: "/editorial/texture-serum.jpg", alt: "", span: "" },
  { src: "/editorial/ugc-1.jpg", alt: "", span: "" },
  { src: "/products/golden-brezze-extrait-de-parfum.png", alt: "", span: "", contain: true },
  { src: "/editorial/ingredient-botanical.jpg", alt: "", span: "" },
];

/** Grid sosial media di kaki halaman — mengundang orang mengikuti, bukan menjual. */
export function SocialGrid() {
  return (
    <section className="section-y">
      <div className="container-ag flex flex-col gap-8">
        <div className="flex flex-col gap-3 text-center">
          <p className="text-nav uppercase text-cocoa-soft">@ag.cosmetics</p>
          <h2 className="font-display text-heading-1 text-cocoa">
            Ikuti keseharian <em className="accent">bestie</em> kami
          </h2>
        </div>
        <ul className="grid grid-cols-3 gap-2 tablet:grid-cols-6 tablet:gap-3">
          {tiles.map((tile, i) => (
            <li key={i} className="group relative aspect-square overflow-hidden bg-mist">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Buka Instagram A&G Cosmetics"
                className="block size-full"
              >
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  fill
                  sizes="(max-width: 768px) 33vw, 16vw"
                  className={
                    tile.contain
                      ? "scale-[0.72] object-contain transition duration-700 group-hover:scale-[0.78]"
                      : "object-cover transition duration-700 group-hover:scale-105"
                  }
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
