import { notFound } from "next/navigation";
import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import { ArticleHeader } from "@/components/article/ArticleHeader";
import { ArticleBody } from "@/components/article/ArticleBody";
import { CategoryLabel } from "@/components/common/CategoryLabel";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

type Params = { category: string; slug: string };

export function generateStaticParams(): Params[] {
  return getAllPosts().map(({ category, slug }) => ({ category, slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category, slug } = await params;
  const post = getPostBySlug(category, slug);
  if (!post) notFound();

  const { content } = await compileMDX({ source: post.content });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-2xl mx-auto">
        <ArticleHeader article={post.frontmatter} />
        <ArticleBody>{content}</ArticleBody>
        <div className="py-5 border-t border-ink/8">
          <Link
            href={`/category/${category}`}
            className="inline-flex items-center gap-1.5 text-[11px] text-ink-muted font-sans tracking-wide hover:text-ink-mid transition-colors"
          >
            ← <CategoryLabel category={category} size="sm" />に戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
