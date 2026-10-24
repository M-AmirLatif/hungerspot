import React from "react";

// Five-Point Star Motif
export function StarMotif({
  className = "w-4 h-4 text-amber-400",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

// Celebratory Sunburst Badge for Discounts & Hero Deals
export function SunburstBadge({
  children,
  className = "bg-brand-red text-white",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center font-display font-extrabold uppercase tracking-wider text-xs px-3 py-1.5 shadow-lg ${className}`}
      style={{
        clipPath:
          "polygon(50% 0%, 65% 10%, 82% 4%, 88% 22%, 100% 30%, 96% 48%, 100% 67%, 86% 75%, 82% 93%, 64% 90%, 50% 100%, 36% 90%, 18% 93%, 14% 75%, 0% 67%, 4% 48%, 0% 30%, 12% 22%, 18% 4%, 35% 10%)",
      }}
    >
      {children}
    </div>
  );
}

// Halal Certified Badge
export function HalalBadge({
  className = "w-7 h-7 sm:w-8 sm:h-8",
}: {
  className?: string;
}) {
  return (
    <div className={`relative rounded-full bg-emerald-700 border border-emerald-400 p-0.5 flex items-center justify-center text-white shadow-md shrink-0 ${className}`}>
      <span className="font-display font-black text-[9px] sm:text-[10px] tracking-tight leading-none text-center">
        حلال<br /><span className="text-[7px] tracking-normal font-bold">HALAL</span>
      </span>
    </div>
  );
}

// Official Hunger Spot Logo Badge (Circle Emblem with HS, Pizza, Burger & Typography)
export function HungerSpotLogoBadge({
  size = "default",
  showWordmark = true,
}: {
  size?: "small" | "default" | "large";
  showWordmark?: boolean;
}) {
  const iconSize = {
    small: "w-9 h-9 sm:w-10 sm:h-10",
    default: "w-11 h-11 sm:w-12 sm:h-12",
    large: "w-16 h-16 sm:w-20 sm:h-20",
  }[size];

  return (
    <div className="flex items-center gap-2.5 sm:gap-3 group select-none">
      {/* Official Circular HS Emblem */}
      <div className={`relative ${iconSize} shrink-0`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_4px_12px_rgba(245,158,11,0.35)] transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Gold Rings */}
          <circle cx="50" cy="50" r="48" fill="#000000" stroke="#f59e0b" strokeWidth="2.5" />
          <circle cx="50" cy="50" r="44" fill="#0a0a0a" stroke="#fbbf24" strokeWidth="1" strokeDasharray="3 2" />
          
          {/* Top 5 Stars */}
          <g fill="#f59e0b" transform="translate(0, -1)">
            <polygon points="50,10 51.5,13.5 55,14 52.5,16.5 53,20 50,18 47,20 47.5,16.5 45,14 48.5,13.5" transform="scale(0.85) translate(8.8, 1)" />
            <polygon points="38,13 39.2,15.8 42,16.2 40,18.2 40.4,21 38,19.4 35.6,21 36,18.2 34,16.2 36.8,15.8" transform="scale(0.7) translate(16, 4)" />
            <polygon points="62,13 63.2,15.8 66,16.2 64,18.2 64.4,21 62,19.4 59.6,21 60,18.2 58,16.2 60.8,15.8" transform="scale(0.7) translate(25, 4)" />
          </g>

          {/* Speed streaks on left */}
          <line x1="16" y1="36" x2="28" y2="36" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
          <line x1="12" y1="42" x2="26" y2="42" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
          <line x1="16" y1="48" x2="25" y2="48" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />

          {/* HS Stylized Typography */}
          {/* 'H' */}
          <path
            d="M30 30 L36 30 L36 40 L45 40 L45 30 L51 30 L51 56 L45 56 L45 45 L36 45 L36 56 L30 56 Z"
            fill="#f59e0b"
          />

          {/* 'S' with Pizza & Burger Elements */}
          <path
            d="M54 35 C54 31 58 29 65 29 C72 29 76 32 77 36 L71 38 C70 36 68 34 65 34 C61 34 59 35 59 38 C59 41 62 42 67 44 C74 46 78 49 78 54 C78 60 72 63 65 63 C57 63 52 59 51 54 L57 52 C58 55 61 58 65 58 C69 58 72 56 72 53 C72 50 69 49 64 47 C57 45 54 42 54 35 Z"
            fill="#fbbf24"
          />

          {/* Mini Pizza Slice cutout at S top */}
          <path d="M72 27 L78 24 L77 31 Z" fill="#ea580c" stroke="#f59e0b" strokeWidth="0.8" />

          {/* Mini Burger inside S bottom loop */}
          <path d="M60 52 C60 50 66 50 66 52 Z" fill="#f59e0b" />
          <rect x="60" y="53" width="6" height="1.5" rx="0.75" fill="#16a34a" />
          <path d="M60 55 C60 56.5 66 56.5 66 55 Z" fill="#f59e0b" />

          {/* Divider Plate Bar */}
          <rect x="22" y="65" width="56" height="1.5" rx="0.75" fill="#f59e0b" />

          {/* Text: HUNGER */}
          <text
            x="50"
            y="74"
            fill="#ffffff"
            fontSize="8"
            fontWeight="900"
            fontFamily="Arial, sans-serif"
            textAnchor="middle"
            letterSpacing="1.5"
          >
            HUNGER
          </text>

          {/* Text: SPOT */}
          <text
            x="50"
            y="82"
            fill="#f59e0b"
            fontSize="8"
            fontWeight="900"
            fontFamily="Arial, sans-serif"
            textAnchor="middle"
            letterSpacing="2"
          >
            SPOT
          </text>

          {/* Micro Tagline */}
          <text
            x="50"
            y="88"
            fill="#a1a1aa"
            fontSize="3.2"
            fontWeight="700"
            fontFamily="Arial, sans-serif"
            textAnchor="middle"
            letterSpacing="0.4"
          >
            ONE SPOT. EVERY CRAVING.
          </text>
        </svg>
      </div>

      {/* Main Text Wordmark */}
      {showWordmark && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-display font-black text-xl sm:text-2xl text-white tracking-tight leading-none">
              HUNGER
            </span>
            <span className="font-display font-black text-xl sm:text-2xl text-amber-400 tracking-tight leading-none flex items-center">
              SP<span className="inline-block relative">O<span className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-amber-400" /></span>T
            </span>
          </div>
          <span className="text-[10px] sm:text-[11px] font-bold text-amber-300 tracking-wider uppercase leading-tight mt-0.5">
            Kasur Bypass • 5.0 ★
          </span>
        </div>
      )}
    </div>
  );
}

// Tomato Doodle Vector
export function TomatoDoodle({
  className = "w-6 h-6 text-brand-red",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="27" r="16" fill="currentColor" fillOpacity="0.18" />
      <path d="M24 11V5M24 11c-3-2-7-1-10 1M24 11c3-2 7-1 10 1M24 11c-1 3-2 7 0 9M24 11c1 3 2 7 0 9" />
      <circle cx="20" cy="24" r="1.5" fill="currentColor" />
      <circle cx="29" cy="28" r="1.5" fill="currentColor" />
    </svg>
  );
}

// Chili Pepper Doodle Vector
export function ChiliDoodle({
  className = "w-6 h-6 text-amber-400",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M36 8c-2 2-6 3-10 2s-8-4-12-1c-5 4-5 13-3 19 3 7 9 12 16 12 7 0 12-5 12-12 0-8-5-16-3-20z"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <path d="M36 8c2-3 4-5 7-5" strokeWidth="3" />
      <path d="M30 18c-3 5-4 11-1 15" />
    </svg>
  );
}

// Green Leaf Accent Vector
export function LeafAccent({
  className = "w-5 h-5 text-emerald-400",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M28 4C14 4 4 14 4 28c14 0 24-10 24-24zM6.5 25.5C7.8 17.2 14.5 10 23 7.5c-4 7-9 14.5-16.5 18z" />
    </svg>
  );
}

// Instagram Icon
export function InstagramIcon({
  className = "w-4 h-4 text-pink-500",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
