import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArticleCard } from "@/components/home/ArticleCard";
import { CATEGORIES_DATA } from "@/lib/categories";
import { getPostsByCategory } from "@/lib/posts";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return CATEGORIES_DATA.map(({ slug }) => ({ slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const category = CATEGORIES_DATA.find((c) => c.slug === slug);
  if (!category) notFound();

  const articles = getPostsByCategory(slug);

  return (
    <div className="min-h-screen bg-ivory py-6 px-4">
      <div className="max-w-2xl mx-auto bg-ivory-light border border-ink/10 rounded-sm overflow-hidden">
        <Header />
        <main>
          <div className="px-7 py-10 bg-ivory border-b border-ink/8">
            <p className="font-sans text-[11px] text-ink-muted tracking-[4px] mb-2">
              {category.en}
            </p>
            <h1
              className="text-[28px] text-ink tracking-wide"
              style={{ fontFamily: "var(--font-noto-serif-jp)" }}
            >
              {category.label}
              <span
                className="text-burnt italic"
                style={{ fontFamily: "var(--font-dm-serif-display)" }}
              >
                Rec
              </span>
            </h1>
            <p className="mt-2 text-[11px] text-ink-muted font-sans">
              {articles.length} 件
            </p>
          </div>
          <div className="px-7 py-7">
            {articles.length > 0 ? (
              <div className="grid grid-cols-3 gap-4">
                {articles.map((article, i) => (
                  <ArticleCard key={article.slug} article={article} index={i} />
                ))}
              </div>
            ) : (
              <p className="text-[13px] text-ink-muted font-sans text-center py-12 tracking-wide">
                まだ記事がありません。
              </p>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
