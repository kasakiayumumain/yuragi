import "./article-body.css";

type Props = {
  children?: React.ReactNode;
};

export function ArticleBody({ children }: Props) {
  return (
    <div className="px-7 py-8 min-h-48">
      {children ? (
        <div className="article-body">{children}</div>
      ) : (
        <p className="text-ink-muted text-center py-12 text-[13px] tracking-wide font-sans">
          記事コンテンツがありません。
        </p>
      )}
    </div>
  );
}
