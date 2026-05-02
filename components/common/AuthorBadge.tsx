const AUTHOR_LABEL: Record<string, string> = {
  kuma: "くま",
  atom: "あとむ",
  both: "二人",
};

type Props = {
  author: string;
};

export function AuthorBadge({ author }: Props) {
  const label = AUTHOR_LABEL[author] ?? author;
  return (
    <span className="text-burnt text-[10px] font-sans tracking-wide">
      — {label}
    </span>
  );
}
