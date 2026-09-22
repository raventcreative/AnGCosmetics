import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/content/BlogCard";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { articles, getArticle } from "@/lib/data/journal";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Artikel tidak ditemukan" };
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: { title: article.title, description: article.excerpt, images: [article.cover] },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const others = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      <article className="section-y">
        <div className="container-ag flex flex-col gap-8 desktop:max-w-[76ch]">
          <nav aria-label="Breadcrumb" className="text-caption text-cocoa-soft">
            <Link href="/journal" className="hover:text-blossom-deep">
              Bestie Journal
            </Link>
            <span className="mx-2">/</span>
            <span className="text-cocoa">{article.category}</span>
          </nav>

          <header className="flex flex-col gap-4">
            <p className="text-label uppercase tracking-[0.12em] text-sage-deep">
              {article.category}
            </p>
            <h1 className="font-display text-display-l text-cocoa">{article.title}</h1>
            <p className="text-tagline font-display italic text-blossom-deep">{article.excerpt}</p>
            <p className="text-caption text-cocoa-soft">
              {article.date} · {article.readTime}
            </p>
          </header>

          <Image
            src={article.cover}
            alt=""
            width={900}
            height={560}
            priority
            className="w-full rounded-xl border border-line object-cover"
          />

          <div className="flex flex-col gap-8">
            {article.body.map((block, i) => (
              <section key={i} className="flex flex-col gap-3">
                {block.heading && (
                  <h2 className="font-display text-heading-2 text-cocoa">{block.heading}</h2>
                )}
                {block.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)} className="text-body text-cocoa">
                    {p}
                  </p>
                ))}
                {block.list && (
                  <ul className="flex flex-col gap-2 rounded-lg bg-butter-cream p-4">
                    {block.list.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-body-sm text-cocoa">
                        <span
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-sage"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="flex flex-col gap-4 rounded-lg border border-cotton-pink bg-white p-6 shadow-sm">
            <p className="font-display text-heading-2 text-cocoa">
              Siap mulai <em className="accent">rutinitas</em> kamu?
            </p>
            <p className="text-body-sm text-cocoa-soft">
              Semua produk A&amp;G sudah BPOM dan Halal, mulai dari Rp 30.000.
            </p>
            <div className="flex flex-col gap-3 tablet:flex-row">
              <Button href="/produk">Lihat produk</Button>
              <Button href={site.marketplace.shopee} variant="secondary" external>
                Cek keranjang kuning
              </Button>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-butter-cream section-y">
        <div className="container-ag flex flex-col gap-8">
          <SectionHeading eyebrow="Baca juga" title="Artikel lain untuk" accent="bestie" />
          <div className="grid gap-6 tablet:grid-cols-3">
            {others.map((a) => (
              <BlogCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
