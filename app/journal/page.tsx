import type { Metadata } from "next";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { BlogCard } from "@/components/content/BlogCard";
import { articles } from "@/lib/data/journal";

export const metadata: Metadata = {
  title: "Bestie Journal",
  description:
    "Artikel edukasi A&G Cosmetics: urutan body care, cara baca nomor BPOM, kandungan skincare, dan tips makeup harian.",
};

export default function JournalPage() {
  return (
    <div className="section-y">
      <div className="container-ag flex flex-col gap-8">
        <SectionHeading
          eyebrow="Bestie Journal"
          title="Belajar dulu, belanja"
          accent="kemudian"
          desc="Tulisan pendek soal perawatan kulit yang bisa kamu praktikkan hari ini. Tanpa klaim berlebihan."
        />
        <div className="grid gap-6 tablet:grid-cols-2 desktop:grid-cols-3">
          {articles.map((article) => (
            <BlogCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
