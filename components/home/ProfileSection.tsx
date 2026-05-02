import Link from "next/link";

export function ProfileSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[96px_1fr] gap-5 items-start max-w-2xl">
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-burnt rounded-full flex items-center justify-center shrink-0">
          <span
            className="text-ivory-light text-2xl italic"
            style={{ fontFamily: "var(--font-dm-serif-display)" }}
          >
            k&amp;a
          </span>
        </div>
        <div>
          <p
            className="text-[14px] text-ink mb-1.5 tracking-[0.5px]"
            style={{ fontFamily: "var(--font-noto-serif-jp)" }}
          >
            くま &amp; あとむ
          </p>
          <p className="text-[11px] text-ink-mid leading-[1.8] font-sans">
            会社員をしながら、その先を考え始めた二人。読んだ本、行った場所、考えたこと、迷ったこと。揺らいでいる今だからこそ書ける言葉を、ここに残しています。
          </p>
          <Link
            href="/about"
            className="mt-2.5 inline-flex items-center px-3 py-[5px] border border-burnt text-burnt text-[10px] tracking-[1.5px] font-sans hover:bg-burnt hover:text-ivory-light transition-colors"
          >
            MORE ABOUT US →
          </Link>
        </div>
      </div>
    </section>
  );
}
