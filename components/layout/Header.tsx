import Link from "next/link";
import { Logo } from "@/components/common/Logo";
import { CategoryLabel } from "@/components/common/CategoryLabel";
import { CATEGORIES_DATA } from "@/lib/categories";

export function Header() {
  return (
    <header className="bg-ivory-light border-b border-ink/8 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-[18px] flex justify-between items-center">
        <Link href="/" className="hover:opacity-75 transition-opacity">
          <Logo />
        </Link>
        <nav className="flex items-center gap-4 sm:gap-[18px]">
          {CATEGORIES_DATA.map(({ slug }) => (
            <Link
              key={slug}
              href={`/category/${slug}`}
              className="hidden sm:block hover:text-burnt transition-colors"
            >
              <CategoryLabel category={slug} size="sm" />
            </Link>
          ))}
          <span className="hidden sm:block text-ink/30 text-[11px] select-none">|</span>
          <Link
            href="/about"
            className="text-[11px] text-ink-mid tracking-[0.5px] hover:text-ink transition-colors"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
