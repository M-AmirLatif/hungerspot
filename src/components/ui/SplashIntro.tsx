"use client";

import React, { useState, useEffect } from "react";
import { StarMotif, HungerSpotLogoBadge } from "@/components/brand/BrandMotifs";

export function SplashIntro() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const flavorLines = [
    "One Spot. Every Craving.",
    "Satluj Filling Station (Shell) Kasur Bypass",
    "Kasur's 5.0 ★ Rated Fast Food Destination",
    "Juicy Zingrato Burgers & Crown Crust Pizzas",
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 35);

    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % flavorLines.length);
    }, 600);

    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2200);

    const unmountTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2700);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black cursor-pointer select-none overflow-hidden transition-all duration-500 ease-out ${
        isFadingOut
          ? "opacity-0 scale-105 pointer-events-none"
          : "opacity-100 scale-100"
      }`}
      aria-label="Hunger Spot Loading Screen"
    >
      {/* Ambient Pulsing Atmospheric Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-orange-600/20 rounded-full blur-[130px] animate-pulse" style={{ animationDelay: "600ms" }} />
      </div>

      {/* Skip button top right */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleSkip();
        }}
        className="absolute top-5 right-5 sm:top-7 sm:right-7 z-20 text-[11px] sm:text-xs font-display font-extrabold text-zinc-400 hover:text-white uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
      >
        Skip ➔
      </button>

      {/* Main Animated Showcase Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-lg mx-auto">
        
        {/* Animated Brand Crest Emblem */}
        <div className="relative mb-6">
          <div className="absolute -inset-3 rounded-full border-2 border-dashed border-amber-400/50 animate-[spin_10s_linear_infinite]" />
          <div className="relative w-20 h-20 sm:w-24 sm:h-24">
            <HungerSpotLogoBadge size="large" showWordmark={false} />
          </div>
        </div>

        {/* Wordmark */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
          <h1 className="font-display font-black text-4xl sm:text-6xl tracking-tight text-white drop-shadow-[0_4px_24px_rgba(245,158,11,0.4)]">
            HUNGER <span className="text-amber-400">SPOT</span>
          </h1>
        </div>

        {/* Tagline */}
        <div className="flex items-center justify-center gap-2 mb-6 text-xs sm:text-sm font-display font-extrabold tracking-widest uppercase text-amber-300">
          <StarMotif className="w-3 h-3 text-amber-400" />
          <span>Fast • Fresh • Delicious • Kasur</span>
          <StarMotif className="w-3 h-3 text-amber-400" />
        </div>

        {/* Cycling Text */}
        <div className="h-7 mb-6 flex items-center justify-center">
          <p
            key={textIndex}
            className="text-xs sm:text-sm font-medium text-zinc-300 tracking-wide transition-all duration-300"
          >
            {flavorLines[textIndex]}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-48 sm:w-64 h-1.5 rounded-full bg-neutral-800 border border-neutral-700 p-0.5 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 transition-all duration-75 ease-out shadow-[0_0_10px_rgba(245,158,11,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Percentage Badge */}
        <div className="mt-3 flex items-center gap-2 text-[10px] sm:text-xs font-bold text-zinc-400 uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
          <span>Firing Up Kasur Ovens • {Math.round(progress)}%</span>
        </div>

      </div>
    </div>
  );
}
