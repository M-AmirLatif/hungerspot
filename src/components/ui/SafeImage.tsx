"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

interface SafeImageProps extends Omit<ImageProps, "onError"> {
  category?: string;
  fallbackTitle?: string;
  className?: string;
}

export function SafeImage({
  src,
  alt,
  category = "fastfood",
  fallbackTitle,
  className = "",
  fill,
  width,
  height,
  priority,
  sizes,
  ...rest
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const catKey = (category || "").toLowerCase();

  const renderFallbackSvg = () => {
    // Pizza categories
    if (catKey.includes("pizza") || catKey.includes("pie") || catKey.includes("tikka")) {
      return (
        <div className="w-full h-full min-h-[140px] relative flex flex-col items-center justify-center bg-gradient-to-br from-[#1c1917] via-[#121212] to-[#0a0a0a] p-4 text-center overflow-hidden select-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(245,158,11,0.25)_0%,transparent_70%)]" />
          <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-110">
            <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 28C38 16 62 16 85 28L50 88L15 28Z" fill="#f59e0b" stroke="#d97706" strokeWidth="2.5" />
              <path d="M20 32C40 22 60 22 80 32L50 82L20 32Z" fill="#fbbf24" />
              <circle cx="50" cy="40" r="7" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
              <circle cx="38" cy="54" r="6" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
              <circle cx="60" cy="56" r="6" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
              <rect x="34" y="38" width="5" height="3" rx="1.5" fill="#16a34a" transform="rotate(25 34 38)" />
              <rect x="58" y="42" width="6" height="3" rx="1.5" fill="#16a34a" transform="rotate(-30 58 42)" />
              <path d="M14 28C38 15 62 15 86 28" stroke="#b45309" strokeWidth="5" strokeLinecap="round" />
            </svg>
          </div>
          <div className="relative z-10 mt-2">
            <span className="px-2.5 py-0.5 rounded-full bg-black/80 border border-amber-400/40 text-[10px] font-display font-extrabold text-amber-300 uppercase tracking-wider shadow-sm">
              Fresh Oven Baked Pizza
            </span>
          </div>
        </div>
      );
    }

    // Burger categories
    if (catKey.includes("burger") || catKey.includes("zinger")) {
      return (
        <div className="w-full h-full min-h-[140px] relative flex flex-col items-center justify-center bg-gradient-to-br from-[#1c1917] via-[#121212] to-[#0a0a0a] p-4 text-center overflow-hidden select-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.2)_0%,transparent_65%)]" />
          <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-110">
            <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 44C20 26 33 18 50 18C67 18 80 26 80 44Z" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
              <ellipse cx="40" cy="28" rx="2" ry="1.2" fill="#fef3c7" transform="rotate(-15 40 28)" />
              <ellipse cx="50" cy="24" rx="2" ry="1.2" fill="#fef3c7" />
              <ellipse cx="60" cy="28" rx="2" ry="1.2" fill="#fef3c7" transform="rotate(15 60 28)" />
              <path d="M17 46C22 43 28 47 34 44C40 47 46 43 52 46C58 43 64 47 70 44C76 47 80 44 83 46" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" />
              <rect x="18" y="54" width="64" height="12" rx="6" fill="#b45309" stroke="#92400e" strokeWidth="1.5" />
              <path d="M22 68C22 75 32 80 50 80C68 80 78 75 78 68Z" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
            </svg>
          </div>
          <div className="relative z-10 mt-2">
            <span className="px-2.5 py-0.5 rounded-full bg-black/80 border border-amber-400/40 text-[10px] font-display font-extrabold text-amber-300 uppercase tracking-wider shadow-sm">
              Juicy Zingrato Burger
            </span>
          </div>
        </div>
      );
    }

    // Default fast food fallback
    return (
      <div className="w-full h-full min-h-[140px] relative flex flex-col items-center justify-center bg-gradient-to-br from-[#1c1917] via-[#121212] to-[#0a0a0a] p-4 text-center overflow-hidden select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.2)_0%,transparent_65%)]" />
        <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-110">
          <svg viewBox="0 0 100 100" className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="38" fill="#18181b" stroke="#f59e0b" strokeWidth="2.5" />
            <path d="M28 56C28 38 40 30 50 30C60 30 72 38 72 56Z" fill="#f59e0b" fillOpacity="0.9" />
            <circle cx="50" cy="27" r="4.5" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />
            <rect x="24" y="56" width="52" height="4" rx="2" fill="#fbbf24" />
          </svg>
        </div>
        <div className="relative z-10 mt-2">
          <span className="px-2.5 py-0.5 rounded-full bg-black/80 border border-amber-400/40 text-[10px] font-display font-extrabold text-amber-300 uppercase tracking-wider shadow-sm">
            Hunger Spot Special
          </span>
        </div>
      </div>
    );
  };

  if (hasError || !src) {
    return (
      <div className={`relative overflow-hidden w-full h-full ${className}`}>
        {renderFallbackSvg()}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden w-full h-full ${className}`}>
      <Image
        src={src}
        alt={alt || "Hunger Spot Menu Item"}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        priority={priority}
        sizes={sizes || "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"}
        unoptimized={true}
        onError={() => setHasError(true)}
        onLoad={() => setIsLoaded(true)}
        className={`transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${fill ? "object-cover" : ""}`}
        {...rest}
      />
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-neutral-900/50 animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-amber-400/40 border-t-amber-400 rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}
