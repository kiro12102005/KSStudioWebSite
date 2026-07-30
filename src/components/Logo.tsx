export function Logo({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="10" fill="var(--foreground)" />
      <path
        d="M12 10.5V29.5"
        stroke="var(--background)"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M12 20 L21 10.5"
        stroke="var(--background)"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M13.5 21 L21.5 29.5"
        stroke="var(--background)"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M25 15.5c0-2 1.8-3.2 4-3.2s4 1.1 4 3c0 4.3-8 2.6-8 7.4 0 1.9 1.8 3 4 3s4.2-1.2 4.2-3.2"
        stroke="var(--background)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="33.5" cy="8.5" r="2.5" fill="var(--accent)" />
    </svg>
  );
}
