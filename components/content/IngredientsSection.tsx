import { LeafIcon } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/layout/SectionHeading";
import type { Ingredient } from "@/lib/data/products";

/**
 * Section edukasi kandungan. Ikon daun di lingkaran sage atau cotton-pink,
 * nama kandungan (title), fungsi singkat (body-sm), persentase bila ada.
 * Hanya klaim yang bisa dibuktikan dari komposisi resmi produk.
 */
export function IngredientsSection({
  ingredients,
  title = "Apa isinya, dan kenapa",
  accent = "penting",
  desc,
}: {
  ingredients: Ingredient[];
  title?: string;
  accent?: string;
  desc?: string;
}) {
  return (
    <section className="section-y bg-butter-cream">
      <div className="container-ag flex flex-col gap-8">
        <SectionHeading eyebrow="Kandungan" title={title} accent={accent} desc={desc} />
        <ul className="grid gap-4 tablet:grid-cols-2 desktop:grid-cols-4">
          {ingredients.map((ing, i) => (
            <li
              key={ing.name}
              className="flex flex-col gap-3 rounded-lg border border-line bg-white p-6"
            >
              <span
                className={`flex size-11 items-center justify-center rounded-full ${
                  i % 2 === 0 ? "bg-sage/40 text-sage-deep" : "bg-cotton-pink text-blossom-deep"
                }`}
              >
                <LeafIcon />
              </span>
              <div>
                <p className="text-title text-cocoa">
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
    </section>
  );
}
