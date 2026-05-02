const CATEGORY_MAP: Record<string, { label: string; en: string }> = {
  books: { label: "読書", en: "BOOKS" },
  learn: { label: "学び", en: "LEARN" },
  trip:  { label: "旅",   en: "TRIP" },
  build: { label: "挑戦", en: "BUILD" },
  think: { label: "思考", en: "THINK" },
};

type Props = {
  category: string;
  showEn?: boolean;
  size?: "sm" | "md";
};

export function CategoryLabel({ category, showEn = false, size = "md" }: Props) {
  const entry = CATEGORY_MAP[category];
  if (!entry) return null;

  const textSize = size === "sm" ? "text-[10px]" : "text-sm";

  return (
    <span className={`${textSize} text-ink tracking-wide`}>
      {entry.label}
      <span
        className="text-burnt italic"
        style={{ fontFamily: "var(--font-dm-serif-display)" }}
      >
        Rec
      </span>
      {showEn && (
        <span className="ml-1 text-ink-muted text-[9px] tracking-widest font-sans not-italic">
          {entry.en}
        </span>
      )}
    </span>
  );
}
