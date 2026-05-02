import Link from "next/link";
import { CATEGORIES_DATA } from "@/lib/categories";

export function CategoryGrid() {
  return (
    <section className="px-7 py-6 bg-ivory border-t border-ink/6 border-b border-ink/6">
      <div className="flex items-baseline gap-3 mb-[14px]">
        <span className="font-sans text-[11px] text-burnt tracking-[3px]">02.</span>
        <h2
          className="text-[17px] text-ink tracking-wide"
          style={{ fontFamily: "var(--font-noto-serif-jp)" }}
        >
          カテゴリ
        </h2>
      </div>
      <div className="grid grid-cols-5 gap-[10px]">
        {CATEGORIES_DATA.map(({ slug, label, en }) => (
          <Link
            key={slug}
            href={`/category/${slug}`}
            className="bg-ivory-light border border-ink/8 rounded-sm py-4 px-1.5 text-center hover:border-burnt/30 transition-colors"
          >
            <p className="text-sm text-ink tracking-[0.5px] mb-1">
              {label}
              <span
                className="text-burnt italic"
                style={{ fontFamily: "var(--font-dm-serif-display)" }}
              >
                Rec
              </span>
            </p>
            <p className="font-sans text-[9px] text-ink-muted tracking-widest">{en}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
