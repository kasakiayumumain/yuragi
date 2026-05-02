import Link from "next/link";
import { Logo } from "@/components/common/Logo";
import { CategoryLabel } from "@/components/common/CategoryLabel";
import { CATEGORIES_DATA } from "@/lib/categories";

export function Header() {
  return (
    <header className="px-7 py-[18px] flex justify-between items-center border-b border-ink/8">
      <Link href="/" className="hover:opacity-75 transition-opacity">
        <Logo />
      </Link>
      <nav className="flex items-center gap-[18px]">
        {CATEGORIES_DATA.map(({ slug }) => (
          <Link
            key={slug}
            href={`/category/${slug}`}
            className="hover:text-burnt transition-colors"
          >
            <CategoryLabel category={slug} size="sm" />
          </Link>
        ))}
        <span className="text-ink/30 text-[11px] select-none">|</span>
        <Link
          href="/about"
          className="text-[11px] text-ink-mid tracking-[0.5px] hover:text-ink transition-colors"
        >
          About
        </Link>
      </nav>
    </header>
  );
}
