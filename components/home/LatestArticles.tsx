import Link from "next/link";
import { ArticleCard } from "./ArticleCard";
import type { Article } from "@/types/article";

type Props = {
  articles: Article[];
};

export function LatestArticles({ articles }: Props) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
      <div className="flex items-baseline justify-between mb-5">
        <div className="flex items-baseline gap-3">
          <span className="font-sans text-[11px] text-burnt tracking-[3px]">01.</span>
          <h2
            className="text-[17px] text-ink tracking-wide"
            style={{ fontFamily: "var(--font-noto-serif-jp)" }}
          >
            最新の記事
          </h2>
        </div>
        <Link
          href="/posts"
          className="text-[11px] text-ink-muted font-sans tracking-wide hover:text-ink-mid transition-colors"
        >
          View all →
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article, i) => (
          <ArticleCard key={article.slug} article={article} index={i} />
        ))}
      </div>
    </section>
  );
}
