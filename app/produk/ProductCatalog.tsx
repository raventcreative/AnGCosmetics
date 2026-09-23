"use client";

import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { ProductGrid } from "@/components/commerce/ProductCard";
import { Pagination } from "@/components/ui/Pagination";
import { Input } from "@/components/ui/Input";
import { categories, products, type ProductCategory } from "@/lib/data/products";
import { cn } from "@/lib/utils";

const PER_PAGE = 8;

const sorts = [
  { id: "populer", label: "Paling populer" },
  { id: "termurah", label: "Harga termurah" },
  { id: "termahal", label: "Harga tertinggi" },
] as const;

export function ProductCatalog() {
  const [category, setCategory] = useState<ProductCategory | "semua">("semua");
  const [sort, setSort] = useState<(typeof sorts)[number]["id"]>("populer");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let list = products.filter((p) =>
      category === "semua" ? true : p.category === category,
    );
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.type.toLowerCase().includes(q) ||
          p.summary.toLowerCase().includes(q),
      );
    }
    // Produk tanpa harga selalu di belakang, apa pun arah urutannya
    const price = (v: number | null) => (v === null ? Number.POSITIVE_INFINITY : v);
    if (sort === "termurah") list = [...list].sort((a, b) => price(a.price) - price(b.price));
    if (sort === "termahal")
      list = [...list].sort((a, b) => (b.price ?? -1) - (a.price ?? -1));
    if (sort === "populer") list = [...list].sort((a, b) => b.reviewCount - a.reviewCount);
    return list;
  }, [category, query, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = Math.min(page, totalPages);
  const visible = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  return (
    <div className="section-y">
      <div className="container-ag flex flex-col gap-8">
        <SectionHeading
          eyebrow="Katalog"
          title="Semua produk"
          accent="A&G"
          desc="Setiap produk kami cantumkan nomor POM-nya. Klik detail untuk lihat kandungan dan cara pakai."
        />

        <div className="flex flex-col gap-6 border-y border-hairline py-6 desktop:flex-row desktop:items-end desktop:justify-between">
          <div className="flex flex-wrap gap-2">
            {[{ id: "semua", label: "Semua" }, ...categories.map((c) => ({ id: c.id, label: c.label }))].map(
              (chip) => (
                <button
                  key={chip.id}
                  onClick={() => {
                    setCategory(chip.id as ProductCategory | "semua");
                    setPage(1);
                  }}
                  className={cn(
                    "h-11 border px-5 text-body-sm font-semibold transition",
                    category === chip.id
                      ? "border-cocoa bg-cocoa text-ivory"
                      : "border-hairline text-cocoa hover:border-cocoa",
                  )}
                >
                  {chip.label}
                </button>
              ),
            )}
          </div>

          <div className="flex flex-col gap-3 tablet:flex-row tablet:items-end">
            <div className="w-full tablet:w-56">
              <Input
                id="cari-produk"
                label="Cari produk"
                placeholder="shower gel, lip cream…"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setPage(1);
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="urutkan" className="text-[13px] font-semibold text-cocoa">
                Urutkan
              </label>
              <select
                id="urutkan"
                value={sort}
                onChange={(e) => setSort(e.target.value as typeof sort)}
                className="h-11 border border-hairline bg-paper px-4 text-body text-cocoa focus:border-[1.5px] focus:border-blossom-deep focus:outline-none"
              >
                {sorts.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <p className="text-body-sm text-cocoa-soft">
          Menampilkan {visible.length} dari {filtered.length} produk
        </p>

        {visible.length > 0 ? (
          <ProductGrid products={visible} />
        ) : (
          <div className="border border-hairline bg-paper p-8 text-center">
            <p className="text-title text-cocoa">Belum ada produk yang cocok</p>
            <p className="mt-2 text-body-sm text-cocoa-soft">
              Coba kata kunci lain, atau reset filter kategorinya, bestie.
            </p>
          </div>
        )}

        {totalPages > 1 && (
          <Pagination page={current} totalPages={totalPages} onChange={setPage} />
        )}
      </div>
    </div>
  );
}
