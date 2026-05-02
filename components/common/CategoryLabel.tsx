import { CATEGORY_MAP } from "@/lib/categories";

type Props = {
  category: string;
  size?: "sm" | "md";
};

export function CategoryLabel({ category, size = "md" }: Props) {
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
    </span>
  );
}
