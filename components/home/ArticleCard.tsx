import Link from "next/link";
import { CategoryLabel } from "@/components/common/CategoryLabel";
import { AuthorBadge } from "@/components/common/AuthorBadge";
import type { Article } from "@/types/article";

const THUMBNAIL_BG: Record<string, string> = {
  books: "bg-cat-books",
  learn: "bg-cat-learn",
  trip:  "bg-cat-trip",
  build: "bg-cat-build",
  think: "bg-cat-think",
};

type Props = {
  article: Article;
  index: number;
};

export function ArticleCard({ article, index }: Props) {
  const bg = THUMBNAIL_BG[article.category] ?? "bg-ink-muted";
  const num = String(index + 1).padStart(2, "0");

  return (
    <Link
      href={`/posts/${article.category}/${article.slug}`}
      className="group block"
    >
      <div className="bg-white rounded-sm overflow-hidden border border-ink/8 group-hover:border-ink/20 transition-colors">
        <div className={`h-[100px] ${bg} relative`}>
          <div className="absolute top-2 left-2 bg-ivory-light px-2 py-[3px]">
            <CategoryLabel category={article.category} size="sm" />
          </div>
          <span
            className="absolute bottom-1.5 right-2 text-[18px] text-ivory-light italic opacity-40 font-sans"
          >
            {num}
          </span>
        </div>
        <div className="p-3">
          <p
            className="text-[12px] text-ink leading-[1.6] mb-2 tracking-[0.3px]"
            style={{ fontFamily: "var(--font-noto-serif-jp)" }}
          >
            {article.title}
          </p>
          <div className="flex justify-between items-center pt-1.5 border-t border-ink/6">
            <span className="text-[10px] text-ink-muted font-sans">
              {article.date}
            </span>
            <AuthorBadge author={article.author} />
          </div>
        </div>
      </div>
    </Link>
  );
}
