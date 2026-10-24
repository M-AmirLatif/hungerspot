"use client";

import React, { useState, useEffect } from "react";
import { HungerSpotLogoBadge, StarMotif } from "@/components/brand/BrandMotifs";
import { useCart } from "@/context/CartContext";
import { BUSINESS_INFO } from "@/data/menuData";
import {
  ShoppingBag,
  Phone,
  Clock,
  Menu as MenuIcon,
  X,
  Star,
} from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalCount, subtotal, setIsOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Menu", href: "#menu" },
    { label: "Value Deals", href: "#deals", badge: "Hot" },
    { label: "Dine-in Lounge", href: "#ambience" },
    { label: "Story", href: "#about" },
    { label: "Location", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md shadow-xl shadow-black/80 border-b border-neutral-800 py-2.5 sm:py-3"
          : "bg-gradient-to-b from-black/90 via-black/50 to-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2.5 sm:gap-4">
          {/* Logo & Brand Identity */}
          <a
            href="#"
            className="flex items-center focus-visible:ring-2 focus-visible:ring-amber-400 rounded-2xl min-w-0 outline-none"
            aria-label="Hunger Spot Homepage"
          >
            <HungerSpotLogoBadge size={isScrolled ? "small" : "default"} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-neutral-900/90 border border-neutral-800 px-3 py-1.5 rounded-full shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap relative px-3 xl:px-4 py-1.5 text-xs xl:text-sm font-semibold text-zinc-300 hover:text-white transition-all rounded-full hover:bg-neutral-800 flex items-center gap-1.5 group shrink-0"
              >
                <span className="whitespace-nowrap">{link.label}</span>
                {link.badge && (
                  <span className="px-1.5 py-0.2 rounded-full bg-orange-600 text-[9px] xl:text-[10px] font-extrabold text-white tracking-wider shrink-0">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Right Action Elements */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* 5.0 Rating Badge */}
            <div className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900 border border-amber-400/30 text-xs font-semibold text-amber-300 whitespace-nowrap">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>5.0 ★ Rated Kasur</span>
            </div>

            {/* Quick Call Button (Desktop) */}
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="hidden md:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-xs font-bold text-amber-300 border border-amber-400/40 transition-all hover:scale-105"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{BUSINESS_INFO.phoneFormatted}</span>
            </a>

            {/* Cart Trigger Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-display font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              aria-label={`View Basket with ${totalCount} items`}
            >
              <ShoppingBag className="w-4 h-4 text-white" />
              <span className="hidden sm:inline">Basket</span>
              {totalCount > 0 && (
                <span className="flex items-center justify-center min-w-[20px] h-5 px-1.5 text-[11px] font-black bg-black text-amber-400 rounded-full shadow-inner animate-bounce">
                  {totalCount}
                </span>
              )}
              {totalCount > 0 && subtotal > 0 && (
                <span className="hidden md:inline font-mono font-semibold text-xs border-l border-white/20 pl-2">
                  Rs {subtotal.toLocaleString()}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-zinc-300 hover:text-white"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-amber-400" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/98 border-b border-neutral-800 backdrop-blur-xl px-4 pt-4 pb-6 mt-2 space-y-3 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between p-3 rounded-2xl bg-neutral-900 border border-neutral-800">
            <div className="flex items-center gap-2 text-xs text-amber-300 font-semibold">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Open Daily: 1 PM – 2 AM</span>
            </div>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="text-xs font-bold text-white bg-amber-500 text-black px-3 py-1 rounded-full"
            >
              Call 0303 8023907
            </a>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-sm font-bold text-zinc-200 border border-neutral-800"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="px-1.5 py-0.5 rounded-full bg-orange-600 text-[10px] font-extrabold text-white">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
