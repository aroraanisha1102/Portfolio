import type { SVGProps } from "react";

export function Star(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 2c.6 3.2 1.4 6.4 4 8.2-2.8.8-5 2.8-6 5.8-1-3-3.2-5-6-5.8 2.6-1.8 3.4-5 4-8.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Squiggle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 20" fill="none" {...props}>
      <path
        d="M2 12c8-10 18-10 26 0s18 10 26 0 18-10 26 0 18 10 26 0"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Underline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 16" fill="none" preserveAspectRatio="none" {...props}>
      <path
        d="M4 9c40-6 92-8 152-4 14 1 28 2 40 5"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ArrowDoodle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 60 80" fill="none" {...props}>
      <path
        d="M30 6c-6 22-6 44 0 62"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M16 52c5 6 10 12 14 16 4-4 9-10 14-16"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Flag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <path d="M16 60V8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M16 10h34v24H16z" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M16 10h8.5v6H33v6h8.5v6H33v-6h-8.5v-6H16zM33 10h8.5v6H50v6h-8.5v-6H33zM24.5 22H33v6h-8.5z"
        fill="currentColor"
        opacity="0.85"
      />
    </svg>
  );
}

export function Pin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z"
        fill="currentColor"
      />
      <circle cx="12" cy="10" r="2.6" fill="#fffdf6" />
    </svg>
  );
}

export function Sparkle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 3v6M12 15v6M3 12h6M15 12h6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
