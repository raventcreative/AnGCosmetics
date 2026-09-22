import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/data/journal";

/**
 * Kartu artikel edukasi (Bestie Journal). Gambar 16:10 radius-lg, label kategori
 * sage-deep, judul maks 2 baris, ringkasan 2 baris, waktu baca.
 */
export function BlogCard({ article }: { article: Article }) {
  return (
    <article className="group flex flex-col gap-3">
      <Link
        href={`/journal/${article.slug}`}
        className="overflow-hidden rounded-lg border border-line bg-white"
      >
        <Image
          src={article.cover}
          alt=""
          width={640}
          height={400}
          className="aspect-[16/10] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
        />
      </Link>
      <p className="text-label uppercase tracking-[0.12em] text-sage-deep">{article.category}</p>
      <h3 className="line-clamp-2 text-title font-sans text-cocoa">
        <Link href={`/journal/${article.slug}`} className="hover:text-blossom-deep">
          {article.title}
        </Link>
      </h3>
      <p className="line-clamp-2 text-body-sm text-cocoa-soft">{article.excerpt}</p>
      <p className="text-caption text-cocoa-soft">
        {article.date} · {article.readTime}
      </p>
    </article>
  );
}
