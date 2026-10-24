"use client";

import React, { useState, useEffect } from "react";

const LINE1_TEXT = "Fast • Fresh • Delicious";

const PHRASES = [
  "One Spot. Every Craving.",
  "Satluj Shell Kasur Bypass.",
  "5.0 ★ Rated Taste in Kasur.",
  "Juicy Zingrato & Crown Crust.",
];

export function TypewriterHeadline() {
  const [isMounted, setIsMounted] = useState(false);
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTypingLine1, setIsTypingLine1] = useState(true);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    if (isTypingLine1) {
      if (line1.length < LINE1_TEXT.length) {
        const timeout = setTimeout(() => {
          setLine1(LINE1_TEXT.slice(0, line1.length + 1));
        }, 45);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTypingLine1(false);
        }, 200);
        return () => clearTimeout(timeout);
      }
    }

    const currentPhrase = PHRASES[phraseIndex];

    if (!isDeleting) {
      if (line2.length < currentPhrase.length) {
        const timeout = setTimeout(() => {
          setLine2(currentPhrase.slice(0, line2.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 3600);
        return () => clearTimeout(timeout);
      }
    } else {
      if (line2.length > 0) {
        const timeout = setTimeout(() => {
          setLine2(line2.slice(0, -1));
        }, 25);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
      }
    }
  }, [isMounted, line1, line2, isTypingLine1, isDeleting, phraseIndex]);

  if (!isMounted) {
    return (
      <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight text-white leading-[1.08]">
        {LINE1_TEXT} <br />
        <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-500">
          One Spot. Every Craving.
        </span>
      </h1>
    );
  }

  return (
    <h1
      className="font-display font-black text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight text-white leading-[1.08] min-h-[2.2em] sm:min-h-[2.15em]"
      aria-label="Fast Fresh Delicious. One Spot Every Craving."
    >
      {/* Line 1 */}
      <span className="text-white inline-block">
        {line1 || "\u00A0"}
      </span>

      {isTypingLine1 && (
        <span
          className="inline-block w-[3px] sm:w-[4px] h-[0.8em] bg-amber-400 ml-1.5 animate-pulse align-middle shadow-[0_0_10px_rgba(251,191,36,0.9)] rounded-xs"
          aria-hidden="true"
        />
      )}

      <br />

      {/* Line 2: Radiant Gradient Animated Tagline */}
      <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-500 min-h-[1.1em]">
        {line2 || "\u00A0"}
      </span>

      {!isTypingLine1 && (
        <span
          className="inline-block w-[3px] sm:w-[4px] h-[0.8em] bg-orange-500 ml-1.5 animate-pulse align-middle shadow-[0_0_12px_rgba(249,115,22,0.95)] rounded-xs"
          aria-hidden="true"
        />
      )}
    </h1>
  );
}
