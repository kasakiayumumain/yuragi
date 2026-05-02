export function Logo() {
  return (
    <div className="flex items-baseline gap-1">
      <span
        className="text-ink italic font-medium tracking-wide"
        style={{ fontFamily: "var(--font-dm-serif-display)" }}
      >
        Yuragi
      </span>
      <span className="text-burnt font-medium text-[1.1em]">,</span>
    </div>
  );
}
