"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { ProductGrid } from "@/components/commerce/ProductCard";
import { Pagination } from "@/components/ui/Pagination";
import { Input } from "@/components/ui/Input";
import {
  categories,
  concerns,
  ingredientFilters,
  products,
  type ConcernId,
  type ProductCategory,
} from "@/lib/data/products";
import { cn } from "@/lib/utils";

const PER_PAGE = 8;

const sorts = [
  { id: "populer", label: "Paling populer" },
  { id: "termurah", label: "Harga termurah" },
  { id: "termahal", label: "Harga tertinggi" },
] as const;

/**
 * Katalog dikendalikan oleh URL: kategori, tipe, concern, kandungan, dan koleksi
 * dibaca dari query string, sehingga tautan dari mega menu benar-benar memfilter
 * dan bisa dibagikan. Pencarian dan urutan tetap state lokal.
 */
export function ProductCatalog() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const category = (params.get("kategori") as ProductCategory | null) ?? "semua";
  const tipe = params.get("tipe");
  const concern = params.get("concern") as ConcernId | null;
  const kandungan = params.get("kandungan");
  const koleksi = params.get("koleksi");

  const [sort, setSort] = useState<(typeof sorts)[number]["id"]>("populer");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  function setParam(key: string, value: string | null) {
    const next = new URLSearchParams(params.toString());
    if (!value || value === "semua") next.delete(key);
    else next.set(key, value);
    const qs = next.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    setPage(1);
  }

  const activeFilters = [
    tipe && { key: "tipe", label: tipe },
    concern && {
      key: "concern",
      label: concerns.find((c) => c.id === concern)?.label ?? concern,
    },
    kandungan && {
      key: "kandungan",
      label: ingredientFilters.find((i) => i.id === kandungan)?.label ?? kandungan,
    },
    koleksi === "best-seller" && { key: "koleksi", label: "Best seller" },
  ].filter(Boolean) as { key: string; label: string }[];

  const filtered = useMemo(() => {
    let list = products.filter((p) => (category === "semua" ? true : p.category === category));

    if (tipe) list = list.filter((p) => p.type === tipe);
    if (concern) list = list.filter((p) => p.concerns.includes(concern));
    if (koleksi === "best-seller") list = list.filter((p) => p.bestSeller);
    if (kandungan) {
      const needle = ingredientFilters.find((i) => i.id === kandungan)?.match;
      if (needle) {
        list = list.filter((p) =>
          p.ingredients.some((ing) => ing.name.toLowerCase().includes(needle)),
        );
      }
    }
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
    if (sort === "termahal") list = [...list].sort((a, b) => (b.price ?? -1) - (a.price ?? -1));
    if (sort === "populer") list = [...list].sort((a, b) => b.reviewCount - a.reviewCount);
    return list;
  }, [category, tipe, concern, kandungan, koleksi, query, sort]);

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
                  onClick={() => setParam("kategori", chip.id)}
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

        {activeFilters.length > 0 && (
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-nav uppercase text-cocoa-soft">Filter aktif</span>
            {activeFilters.map((f) => (
              <button
                key={f.key}
                onClick={() => setParam(f.key, null)}
                className="flex items-center gap-2 rounded-full bg-cotton-pink/50 px-4 py-1.5 text-body-sm text-cocoa transition hover:bg-cotton-pink"
              >
                {f.label}
                <span aria-hidden="true">×</span>
                <span className="sr-only">Hapus filter</span>
              </button>
            ))}
          </div>
        )}

        <p className="text-body-sm text-cocoa-soft">
          Menampilkan {visible.length} dari {filtered.length} produk
        </p>

        {visible.length > 0 ? (
          <ProductGrid products={visible} />
        ) : (
          <div className="border border-hairline bg-paper p-8 text-center">
            <p className="text-title text-cocoa">Belum ada produk yang cocok</p>
            <p className="mt-2 text-body-sm text-cocoa-soft">
              Coba kata kunci lain, atau hapus salah satu filternya, bestie.
            </p>
          </div>
        )}

        {totalPages > 1 && <Pagination page={current} totalPages={totalPages} onChange={setPage} />}
      </div>
    </div>
  );
}
