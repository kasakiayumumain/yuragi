import { CategoryLabel } from "@/components/common/CategoryLabel";
import { AuthorBadge } from "@/components/common/AuthorBadge";
import type { Article } from "@/types/article";

type Props = {
  article: Article;
};

export function ArticleHeader({ article }: Props) {
  return (
    <div className="px-7 pt-8 pb-6 border-b border-ink/8">
      <div className="flex items-center justify-between mb-5">
        <CategoryLabel category={article.category} size="sm" />
        <span className="text-[10px] text-ink-muted font-sans tracking-wide">
          {article.date}
        </span>
      </div>
      <h1
        className="text-[22px] text-ink leading-[1.7] tracking-wide mb-5"
        style={{ fontFamily: "var(--font-noto-serif-jp)" }}
      >
        {article.title}
      </h1>
      <AuthorBadge author={article.author} />
    </div>
  );
}
