import Image from "next/image";
import { LeafIcon } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/layout/SectionHeading";
import type { Ingredient } from "@/lib/data/products";

/**
 * Edukasi kandungan: daftar bersih dengan garis pemisah, opsional disandingkan
 * dengan satu foto bahan. Hanya klaim yang bisa dibuktikan dari komposisi resmi.
 */
export function IngredientsSection({
  ingredients,
  title = "Apa isinya, dan kenapa",
  accent = "penting",
  desc,
  image = "/editorial/ingredient-botanical.jpg",
}: {
  ingredients: Ingredient[];
  title?: string;
  accent?: string;
  desc?: string;
  image?: string | null;
}) {
  return (
    <section className="section-y">
      <div className="container-ag grid gap-10 desktop:grid-cols-[0.8fr_1.2fr] desktop:gap-20">
        {image && (
          <div className="relative aspect-[3/4] overflow-hidden bg-mist desktop:aspect-[4/5]">
            <Image
              src={image}
              alt="Bahan aktif A&G Cosmetics"
              fill
              sizes="(max-width: 1200px) 100vw, 38vw"
              className="object-cover"
            />
          </div>
        )}

        <div className="flex flex-col gap-8">
          <SectionHeading eyebrow="Kandungan" title={title} accent={accent} desc={desc} />
          <ul className="flex flex-col">
            {ingredients.map((ing) => (
              <li
                key={ing.name}
                className="flex items-start gap-5 border-t border-hairline py-6 last:border-b"
              >
                <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-mist text-sage-deep">
                  <LeafIcon width={18} height={18} />
                </span>
                <div className="flex-1">
                  <p className="font-sans text-title text-cocoa">
                    {ing.name}
                    {ing.pct && (
                      <span className="ml-2 text-body-sm font-semibold text-blossom-deep">
                        {ing.pct}
                      </span>
                    )}
                  </p>
                  <p className="mt-1 text-body-sm text-cocoa-soft">{ing.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
