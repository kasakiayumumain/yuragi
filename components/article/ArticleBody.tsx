type Props = {
  children?: React.ReactNode;
};

export function ArticleBody({ children }: Props) {
  return (
    <div className="px-7 py-8 min-h-48">
      <div
        className="text-[14px] text-ink-mid leading-[2] font-sans"
      >
        {children ?? (
          <p className="text-ink-muted text-center py-12 text-[13px] tracking-wide">
            記事コンテンツはフェーズ5（MDX実装）で表示されます。
          </p>
        )}
      </div>
    </div>
  );
}
