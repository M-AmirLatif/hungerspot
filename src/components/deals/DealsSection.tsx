"use client";

import React, { useState } from "react";
import { SafeImage } from "@/components/ui/SafeImage";
import { DEALS, DealItem } from "@/data/menuData";
import { useCart } from "@/context/CartContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarMotif, SunburstBadge } from "@/components/brand/BrandMotifs";
import {
  Sparkles,
  Users,
  Check,
  Plus,
  Flame,
} from "lucide-react";

export function DealsSection() {
  const { addItem } = useCart();
  const [addedDealId, setAddedDealId] = useState<string | null>(null);

  const heroDeal = DEALS.find((d) => d.isHero) || DEALS[DEALS.length - 1];
  const standardDeals = DEALS.filter((d) => !d.isHero);

  const handleAddDeal = (deal: DealItem) => {
    addItem({
      id: deal.id,
      menuItemId: deal.id,
      name: `${deal.title} (${deal.tag || "Combo"})`,
      price: deal.price,
      image: deal.image,
      isDeal: true,
    });

    setAddedDealId(deal.id);
    setTimeout(() => setAddedDealId(null), 1200);
  };

  return (
    <section
      id="deals"
      className="relative py-16 sm:py-24 bg-[#0a0a0a] border-t border-neutral-800 overflow-hidden"
      aria-label="Value Deals"
    >
      {/* Decorative ambient gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Hunger Spot Feast Combos"
          title="Super Saver"
          highlight="Value Deals"
          subtitle="Real money-saving combos from our official flyer. Solo burger meals, pizza & wings feasts, 5-Zingrato squad combos, and mega party platters."
        />

        {/* HERO DEAL: Sooper Big Deal */}
        <div className="mt-12 mb-14 relative rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900/95 to-black border-2 border-amber-400 p-6 sm:p-10 lg:p-12 shadow-2xl shadow-amber-500/15 overflow-hidden group">
          
          {/* Top highlight ribbons */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-2">
              <SunburstBadge className="bg-gradient-to-r from-red-600 via-orange-600 to-amber-500 text-white text-xs sm:text-sm py-2 px-4 shadow-lg">
                ★ SOOPER BIG DEAL • MEGA FEAST
              </SunburstBadge>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/40">
                <Users className="w-3.5 h-3.5" />
                <span>Serves 7–9 Persons</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              {heroDeal.originalPrice && (
                <span className="text-sm line-through text-zinc-500 font-semibold">
                  Rs {heroDeal.originalPrice.toLocaleString()}
                </span>
              )}
              <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-black font-display font-black text-xl sm:text-2xl shadow-lg">
                Rs {heroDeal.price.toLocaleString()}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                {heroDeal.title}
              </h3>
              
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                The grand family celebration feast from Hunger Spot! 2 Large Regular Pizzas of your choice, 10 crispy hot wings, 10 golden chicken nuggets, a jumbo family portion of fries, and a chilled 1.5 Ltr bottle. Feeds a whole crowd with unbeatable value!
              </p>

              {/* Bundle items list with ★ bullet markers */}
              <div className="pt-2">
                <span className="text-xs uppercase font-extrabold tracking-wider text-amber-400 block mb-2.5">
                  Package Includes:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {heroDeal.items.map((itemStr, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-black border border-neutral-800 text-xs sm:text-sm font-semibold text-white"
                    >
                      <StarMotif className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{itemStr}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => handleAddDeal(heroDeal)}
                  className={`py-3.5 px-7 rounded-full font-display font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg ${
                    addedDealId === heroDeal.id
                      ? "bg-emerald-600 text-white"
                      : "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white hover:scale-105 active:scale-95 shadow-amber-500/30"
                  }`}
                >
                  {addedDealId === heroDeal.id ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>Added to Basket!</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-5 h-5" />
                      <span>Add Sooper Big Deal • Rs {heroDeal.price.toLocaleString()}</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Right Media Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-black">
                <SafeImage
                  src={heroDeal.image}
                  alt={heroDeal.title}
                  category="pizza"
                  fallbackTitle={heroDeal.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-300 bg-black/80 px-3 py-1 rounded-full border border-neutral-800">
                    {heroDeal.tag}
                  </span>
                  <span className="text-xs font-bold text-zinc-300">
                    {heroDeal.serves}
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 7 Regular Value Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standardDeals.map((deal) => (
            <div
              key={deal.id}
              className="group relative rounded-3xl bg-neutral-900/90 border border-neutral-800 hover:border-amber-400/50 p-5 sm:p-6 shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Media Container */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-black mb-4 border border-neutral-800">
                  <SafeImage
                    src={deal.image}
                    alt={deal.title}
                    category="deal"
                    fallbackTitle={deal.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                  
                  {/* Deal Number Badge */}
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span className="px-3 py-1 rounded-full bg-amber-500 text-black font-display font-black text-xs shadow-md">
                      {deal.title}
                    </span>
                  </div>

                  {/* Servings Tag */}
                  {deal.serves && (
                    <div className="absolute top-2.5 right-2.5 z-10">
                      <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-[11px] font-bold text-zinc-300 border border-neutral-800">
                        {deal.serves}
                      </span>
                    </div>
                  )}

                  {/* Price Tag */}
                  <div className="absolute bottom-2.5 right-2.5 z-10">
                    <div className="px-3 py-1 rounded-full bg-black/90 border border-amber-400 text-amber-300 font-display font-black text-sm shadow-xl">
                      Rs {deal.price.toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* Deal Header */}
                <div className="mb-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-display font-black text-xl text-white group-hover:text-amber-300 transition-colors">
                      {deal.title}
                    </h4>
                    {deal.originalPrice && (
                      <span className="text-xs line-through text-zinc-500">
                        Rs {deal.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  {deal.tag && (
                    <span className="text-xs font-bold text-amber-400/90 block mt-0.5">
                      {deal.tag}
                    </span>
                  )}
                </div>

                {/* Bundle Items Checklist */}
                <ul className="space-y-1.5 mb-5 text-xs sm:text-sm text-zinc-300">
                  {deal.items.map((itemStr, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <StarMotif className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{itemStr}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Add Deal Button */}
              <button
                type="button"
                onClick={() => handleAddDeal(deal)}
                className={`w-full py-2.5 px-4 rounded-xl font-display font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md ${
                  addedDealId === deal.id
                    ? "bg-emerald-600 text-white"
                    : "bg-neutral-800 hover:bg-amber-500 hover:text-black text-white border border-neutral-700"
                }`}
              >
                {addedDealId === deal.id ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Basket!</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    <span>Add to Basket • Rs {deal.price.toLocaleString()}</span>
                  </>
                )}
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
