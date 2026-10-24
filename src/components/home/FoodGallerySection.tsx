"use client";

import React, { useState } from "react";
import { SafeImage } from "@/components/ui/SafeImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarMotif } from "@/components/brand/BrandMotifs";
import { Eye, MapPin, Sparkles, Utensils } from "lucide-react";

const GALLERY_ITEMS = [
  {
    title: "Satluj Shell Station Exterior",
    category: "Restaurant Location",
    image: "/images/hungerspot/mainRestimg.jpg",
    badge: "Official Location",
    tag: "Kasur Bypass • Easy Parking & Drive-By",
  },
  {
    title: "Family Dine-in Lounge",
    category: "Sitting Area",
    image: "/images/hungerspot/sitting1.jpg",
    badge: "Air Conditioned",
    tag: "Clean, Comfortable & Modern Seating",
  },
  {
    title: "Cozy Dining Environment",
    category: "Sitting Area",
    image: "/images/hungerspot/sitting2.jpg",
    badge: "Dine-in Ambience",
    tag: "Family Tables & Relaxing Atmosphere",
  },
  {
    title: "Signature Zingrato Burger",
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&auto=format&fit=crop&q=80",
    badge: "10/10 Rated Juicy",
    tag: "Fresh Golden Zinger Fillet & Spicy Mayo",
  },
  {
    title: "Crown Crust Special Pizza",
    category: "Our Specials",
    image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=900&auto=format&fit=crop&q=80",
    badge: "Crown Crust",
    tag: "Smokey Tikka, Olives & Molten Cheese",
  },
  {
    title: "Crunchy Oven-Baked Pasta",
    category: "Pasta",
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281699?w=900&auto=format&fit=crop&q=80",
    badge: "10/10 Rating",
    tag: "Baked Cheesy Penne with Crunchy Fried Chicken",
  },
];

export function FoodGallerySection() {
  return (
    <section id="ambience" className="relative py-16 sm:py-24 bg-[#0a0a0a] border-t border-neutral-800" aria-label="Restaurant Ambience and Food Showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Real Ambience & Food"
          title="Explore Our Restaurant"
          highlight="& Dining Lounge"
          subtitle="Real snapshots of our modern air-conditioned sitting area at Satluj Shell Kasur Bypass, paired with our sizzling fresh burgers, crown crust pizzas, and crunchy pasta."
        />

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-neutral-900 border border-neutral-800 shadow-xl hover:border-amber-400/60 transition-all duration-300 hover:-translate-y-1"
            >
              <SafeImage
                src={item.image}
                alt={item.title}
                category={item.category}
                fallbackTitle={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Dynamic Gradient Shade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Top Pill */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full bg-orange-600 text-white font-display font-black text-xs shadow-md uppercase tracking-wider">
                  {item.badge}
                </span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-10 transform transition-transform duration-300">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-0.5">
                  {item.category}
                </span>
                <h4 className="font-display font-black text-xl text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-zinc-300 mt-0.5 font-medium">
                  {item.tag}
                </p>
              </div>

              {/* Subtle hover icon */}
              <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4 text-white" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
