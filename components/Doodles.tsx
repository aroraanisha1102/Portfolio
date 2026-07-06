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

export function Plant(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 32" fill="none" {...props}>
      <path d="M12 30V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 18c-1-5-5-6-9-6 0 5 4 7 9 7Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M12 15c1-5 5-7 9-7 0 5-4 8-9 8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export function Lightbulb(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 28" fill="none" {...props}>
      <path
        d="M12 2a8 8 0 0 0-5 14c1 1 1.5 2 1.5 3h7c0-1 .5-2 1.5-3A8 8 0 0 0 12 2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M9 23h6M10 26h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function Plane(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M3 18l26-9-9 22-4-9-9-4z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M16 18l4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

// ---- City line-art doodles (viewBox 0 0 140 80) ----

export function CityBengaluru(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 140 80" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 70h128" />
      {/* central Vidhana Soudha */}
      <path d="M52 70V44h36v26" />
      <path d="M52 44q18-18 36 0" />
      <path d="M70 30v-8" />
      <circle cx="70" cy="19" r="2.2" fill="currentColor" />
      <path d="M60 70V50M70 70V48M80 70V50" />
      {/* side towers */}
      <path d="M20 70V40h16v30" />
      <path d="M104 70V40h16v30" />
      <path d="M25 46h6M25 54h6M25 62h6M109 46h6M109 54h6M109 62h6" />
    </svg>
  );
}

export function CityMumbai(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 140 80" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {/* Gateway of India */}
      <path d="M48 64V36h44v28" />
      <path d="M62 64V50q8-10 16 0v14" />
      <path d="M48 36q22-16 44 0" />
      <path d="M70 22v-6" />
      <path d="M36 64V44h10v20M94 64V44h10v20" />
      <path d="M38 44q4-6 8 0M96 44q4-6 8 0" />
      {/* water */}
      <path d="M10 70q6-4 12 0t12 0 12 0 12 0 12 0 12 0 12 0 12 0" />
    </svg>
  );
}

export function CityNYC(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 140 80" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 70h128" />
      {/* Washington Square Arch */}
      <path d="M40 70V30h56v40" />
      <path d="M40 30h56" />
      <path d="M52 70V46q16-16 32 0v24" />
      <path d="M44 26h48" />
      {/* tree */}
      <circle cx="116" cy="48" r="10" />
      <path d="M116 58v12" />
    </svg>
  );
}

export function CityLiberty(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 140 80" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 70h128" />
      {/* skyline */}
      <path d="M14 70V50h14v20M28 70V38h16v32M60 70V44h16v26M76 70V54h14v16" />
      {/* spire tower */}
      <path d="M46 70V30h12v40M52 30V18" />
      {/* liberty torch on the right */}
      <path d="M112 70V40" />
      <path d="M112 40l-5-9q5-3 10 0z" />
      <circle cx="112" cy="34" r="0.5" />
      <path d="M118 70V52h10v18" />
    </svg>
  );
}

export function CityAtlanta(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 140 80" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 70h128" />
      {/* buildings */}
      <path d="M14 70V48h14v22M28 70V40h14v30" />
      {/* Westin round tower */}
      <path d="M48 70V34M58 70V34" />
      <circle cx="53" cy="30" r="7" />
      {/* peachtree tower with spire */}
      <path d="M66 70V40h14v30M73 40V26" />
      {/* Georgia peach */}
      <circle cx="112" cy="54" r="11" />
      <path d="M112 43v-2q4-4 8-3-1 5-6 5" />
      <path d="M112 45v14" />
    </svg>
  );
}

export function Rocket(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 30" fill="none" {...props}>
      <path
        d="M12 2c3.5 3 5 7 5 12l-3 3h-4l-3-3c0-5 1.5-9 5-12Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 20c-1.5 2-1.5 5-1.5 6M15 20c1.5 2 1.5 5 1.5 6M12 20v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
