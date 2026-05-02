export default function AboutPage() {
  return (
    <>
      <div className="bg-ivory border-b border-ink/8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="font-sans text-[11px] text-ink-muted tracking-[4px] mb-2">
            ABOUT
          </p>
          <h1
            className="text-[28px] text-ink tracking-wide"
            style={{ fontFamily: "var(--font-dm-serif-display)" }}
          >
            Yuragi<span className="text-burnt">,</span>
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 border-b border-ink/8 max-w-2xl">
          <p className="font-sans text-[11px] text-burnt tracking-[3px] mb-3">CONCEPT</p>
          <p
            className="text-[18px] text-ink leading-[1.7] mb-4 tracking-wide"
            style={{ fontFamily: "var(--font-noto-serif-jp)" }}
          >
            会社員と経営者の、<span className="text-burnt">あいだ</span>で。
          </p>
          <p className="text-[13px] text-ink-mid leading-[1.9] font-sans">
            会社員として働きながら、その先の可能性を探している二人がいます。副業、学び、読書、旅。日々の選択と迷いをそのまま言葉にして、ここに残しています。揺らいでいることは、弱さじゃない。そう思って書き続けています。
          </p>
        </div>

        <div className="py-8 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl">
          <div>
            <div className="w-14 h-14 bg-burnt rounded-full flex items-center justify-center mb-4">
              <span
                className="text-ivory-light text-xl italic"
                style={{ fontFamily: "var(--font-dm-serif-display)" }}
              >
                k
              </span>
            </div>
            <p
              className="text-[14px] text-ink mb-2 tracking-wide"
              style={{ fontFamily: "var(--font-noto-serif-jp)" }}
            >
              くま
            </p>
            <p className="text-[11px] text-ink-mid leading-[1.8] font-sans">
              会社員歴7年。読書と旅が好き。本から得た知識を日常に落とし込むことが好きで、このブログでは主に読書記録と思考の記録を書いています。
            </p>
          </div>
          <div>
            <div className="w-14 h-14 bg-ink rounded-full flex items-center justify-center mb-4">
              <span
                className="text-ivory-light text-xl italic"
                style={{ fontFamily: "var(--font-dm-serif-display)" }}
              >
                a
              </span>
            </div>
            <p
              className="text-[14px] text-ink mb-2 tracking-wide"
              style={{ fontFamily: "var(--font-noto-serif-jp)" }}
            >
              あとむ
            </p>
            <p className="text-[11px] text-ink-mid leading-[1.8] font-sans">
              会社員をしながら副業を始めて3年。挑戦と失敗を繰り返しながら、少しずつ前に進んでいます。挑戦の記録と学びを正直に書くのがモットーです。
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
