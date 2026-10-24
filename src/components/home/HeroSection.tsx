"use client";

import React, { useState, useEffect } from "react";
import { SafeImage } from "@/components/ui/SafeImage";
import { TypewriterHeadline } from "./TypewriterHeadline";
import {
  StarMotif,
  SunburstBadge,
} from "@/components/brand/BrandMotifs";
import { BUSINESS_INFO } from "@/data/menuData";
import {
  Sparkles,
  Flame,
  ArrowRight,
  PhoneCall,
  Star,
  MapPin,
  Utensils,
  Bike,
} from "lucide-react";

const HERO_FEATURED_DISHES = [
  {
    id: "burger-zingrato",
    tabLabel: "Zingrato",
    title: "Juicy Zingrato Burger",
    category: "10/10 Rated Customer Favorite",
    tagline: "Extra crunchy golden chicken zinger fillet, tender and bursting with juices, topped with fresh lettuce and signature spicy sauce.",
    price: "Rs 450",
    badge: "Kasur 10/10 Favorite",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&auto=format&fit=crop&q=80",
    prepTime: "12-15 mins",
  },
  {
    id: "sp-crown-crust",
    tabLabel: "Crown Crust",
    title: "Crown Crust Special Pizza",
    category: "Signature Pizza",
    tagline: "Flavourful blend of special sauce, chicken smokey tikka, bell peppers, onions, capsicum, olives & black olives on appetizing crown edges.",
    price: "From Rs 1,499",
    badge: "House Specialty",
    image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=900&auto=format&fit=crop&q=80",
    prepTime: "20-25 mins",
  },
  {
    id: "pasta-crunchy",
    tabLabel: "Crunchy Pasta",
    title: "Crunchy Oven-Baked Pasta",
    category: "10/10 Review Favorite",
    tagline: "Golden baked pasta loaded with rich cheese sauce and crowned with crispy crunchy fried chicken chunks.",
    price: "From Rs 499",
    badge: "10/10 Review Winner",
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281699?w=900&auto=format&fit=crop&q=80",
    prepTime: "15 mins",
  },
  {
    id: "fries-pizza-loaded",
    tabLabel: "Loaded Fries",
    title: "Pizza Loaded Cheesy Fries",
    category: "Late Night Craving",
    tagline: "Crispy golden fries smothered in pizza sauce, chicken tikka chunks, black olives, jalapenos, and molten baked mozzarella.",
    price: "Rs 749",
    badge: "Overloaded Melt",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=900&auto=format&fit=crop&q=80",
    prepTime: "10-12 mins",
  },
];

export function HeroSection() {
  const [activeDishIndex, setActiveDishIndex] = useState(0);

  // Auto rotate dishes every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveDishIndex((prev) => (prev + 1) % HERO_FEATURED_DISHES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const activeDish = HERO_FEATURED_DISHES[activeDishIndex];

  return (
    <section
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-28 sm:pt-32 pb-16 overflow-hidden bg-[#0a0a0a]"
      aria-label="Hero Introduction"
    >
      {/* Background Ambience & Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-orange-600/10 rounded-full blur-[150px]" />
        <div className="absolute -bottom-20 left-10 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[130px]" />
      </div>

      {/* Main Hero Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Action */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Live Pulser Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900/90 border border-amber-400/40 shadow-lg shadow-black/40 backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-80" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500" />
              </span>
              <span className="font-display font-bold text-xs uppercase tracking-wider text-amber-300">
                Satluj Shell Kasur Bypass • 5.0 ★ Rated
              </span>
              <StarMotif className="w-3.5 h-3.5 text-amber-400 hidden sm:inline" />
            </div>

            {/* Main Headline with Typewriter Animation */}
            <TypewriterHeadline />

            {/* Sub-headline */}
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl font-normal leading-relaxed">
              Kasur&apos;s celebrated fast food destination! Home of the juicy <strong className="text-amber-400 font-bold">Zingrato Burger</strong>, royal Crown Crust & Behari Kabab Pizzas, 10/10 rated Crunchy Pasta, fresh Shawarma & family feast deals.
            </p>

            {/* Primary Action Buttons */}
            <div className="w-full max-w-lg pt-2 space-y-3">
              {/* WhatsApp Quick Order */}
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                  "Assalam o Alaikum Hunger Spot! I want to place an order from your website."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full flex items-center justify-between gap-2.5 sm:gap-3 px-3.5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-orange-600 to-amber-500 hover:from-amber-600 hover:to-orange-700 text-white border border-white/25 shadow-xl shadow-amber-500/25 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <PhoneCall className="w-3.5 h-3.5 text-white fill-current" />
                  </div>
                  <span className="font-display font-extrabold text-white text-xs sm:text-base tracking-wide whitespace-nowrap">
                    Order on WhatsApp
                  </span>
                </div>
                <span className="shrink-0 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-black/80 text-amber-400 font-display font-black text-[11px] sm:text-xs tracking-wider shadow-sm border border-amber-400/40">
                  {BUSINESS_INFO.phoneFormatted}
                </span>
              </a>

              {/* Dual Action Row: Explore Menu & View Sitting Area */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 w-full">
                <a
                  href="#menu"
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-display font-bold text-xs sm:text-sm border border-neutral-700 hover:border-amber-400/60 shadow-lg transition-all"
                >
                  <Utensils className="w-4 h-4 text-amber-400" />
                  <span>Explore Menu</span>
                </a>

                <a
                  href="#ambience"
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-amber-300 font-display font-bold text-xs sm:text-sm border border-neutral-700 hover:border-amber-400/60 shadow-lg transition-all"
                >
                  <MapPin className="w-4 h-4 text-orange-400" />
                  <span>Dine-in Lounge</span>
                </a>
              </div>
            </div>

            {/* Quick Trust Highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <strong className="text-zinc-200">5.0 Star Rating</strong> (3 Google Reviews)
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <Bike className="w-4 h-4 text-emerald-400" />
                <span>Fast Home Delivery across Kasur</span>
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Dish Showcase */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-3xl bg-neutral-900/90 border-2 border-amber-400/30 p-4 sm:p-6 shadow-2xl shadow-black/80 backdrop-blur-md">
              
              {/* Dish Selector Tabs */}
              <div className="grid grid-cols-4 gap-1.5 p-1 rounded-2xl bg-black/60 border border-neutral-800 mb-4">
                {HERO_FEATURED_DISHES.map((dish, idx) => (
                  <button
                    key={dish.id}
                    onClick={() => setActiveDishIndex(idx)}
                    className={`py-1.5 px-1 rounded-xl text-[11px] sm:text-xs font-display font-bold transition-all cursor-pointer truncate ${
                      activeDishIndex === idx
                        ? "bg-amber-500 text-black shadow-md font-extrabold"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {dish.tabLabel}
                  </button>
                ))}
              </div>

              {/* Dish Photo */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black border border-neutral-800 shadow-inner group">
                <SafeImage
                  src={activeDish.image}
                  alt={activeDish.title}
                  category={activeDish.tabLabel}
                  fallbackTitle={activeDish.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20 pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-3 py-1 rounded-full bg-orange-600 text-white font-display font-extrabold text-[11px] uppercase tracking-wider shadow-md">
                    {activeDish.badge}
                  </span>
                </div>

                {/* Price Tag */}
                <div className="absolute bottom-3 right-3 z-10">
                  <div className="px-3.5 py-1.5 rounded-full bg-black/90 border border-amber-400 text-amber-300 font-display font-black text-sm shadow-xl">
                    {activeDish.price}
                  </div>
                </div>
              </div>

              {/* Dish Meta */}
              <div className="mt-4 space-y-1.5">
                <div className="flex items-center justify-between text-xs text-amber-400 font-bold uppercase tracking-wider">
                  <span>{activeDish.category}</span>
                  <span className="text-zinc-400 font-normal">Ready in {activeDish.prepTime}</span>
                </div>
                <h3 className="font-display font-black text-xl text-white">
                  {activeDish.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                  {activeDish.tagline}
                </p>
              </div>

              {/* Order Item Button */}
              <div className="mt-4 pt-3 border-t border-neutral-800">
                <a
                  href="#menu"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-display font-black text-xs sm:text-sm transition-all"
                >
                  <span>Order Now from Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
