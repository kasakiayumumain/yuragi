type Props = {
  className?: string;
};

export function WavyLine({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 100 8"
      className={`w-20 h-2 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M 2 4 Q 12 1, 22 4 T 42 4 T 62 4 T 82 4 T 98 4"
        stroke="#c2410c"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
