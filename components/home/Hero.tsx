import { WavyLine } from "@/components/common/decorations/WavyLine";
import { ScrollMark } from "@/components/common/decorations/ScrollMark";

export function Hero() {
  return (
    <section className="bg-ivory-light border-b border-ink/8 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center relative">
        <WavyLine className="absolute top-8 left-1/2 -translate-x-1/2" />
        <p className="text-[10px] text-ink-muted tracking-[4px] mb-[22px] font-sans uppercase">
          A Record of Being In-Between
        </p>
        <h1
          className="text-[26px] sm:text-[32px] lg:text-[36px] text-ink leading-[1.5] mb-[14px] tracking-wide"
          style={{ fontFamily: "var(--font-noto-serif-jp)" }}
        >
          会社員と経営者の、<span className="text-burnt">あいだ</span>で。
        </h1>
        <p className="text-[13px] text-ink-mid leading-[1.9] font-sans">
          迷いながら、進んでいる。
          <br />
          くまとあとむの思考と行動の記録。
        </p>
        <ScrollMark className="absolute bottom-4 right-6 sm:right-10" />
      </div>
    </section>
  );
}
