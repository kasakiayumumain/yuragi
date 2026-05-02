type Props = {
  className?: string;
};

export function ScrollMark({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 60 60"
      className={`w-13 h-13 opacity-50 ${className}`}
      aria-hidden="true"
    >
      <circle cx="30" cy="30" r="24" stroke="#c2410c" strokeWidth="0.8" fill="none" />
      <text
        x="30"
        y="28"
        textAnchor="middle"
        fontSize="6"
        fill="#c2410c"
        fontFamily="var(--font-dm-serif-display)"
        letterSpacing="1.2"
      >
        SCROLL
      </text>
      <path
        d="M 26 36 L 30 40 L 34 36"
        stroke="#c2410c"
        strokeWidth="0.8"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
