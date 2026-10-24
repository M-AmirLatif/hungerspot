"use client";

import React from "react";
import { BUSINESS_INFO } from "@/data/menuData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarMotif, InstagramIcon } from "@/components/brand/BrandMotifs";
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Bike,
  Utensils,
  ShoppingBag,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

export function OrderAndContactSection() {
  const serviceBadges = [
    { icon: Bike, label: "Home Delivery", desc: "Fast service across Kasur" },
    { icon: ShoppingBag, label: "Quick Takeaway", desc: "Fresh & hot in 15 mins" },
    { icon: Utensils, label: "Air-Conditioned Dine-in", desc: "Family lounge & parking" },
  ];

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-24 bg-[#0a0a0a] border-t border-neutral-800"
      aria-label="Contact and Delivery Information"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Direct Ordering & Visit"
          title="Visit Us At Kasur Bypass"
          highlight="Or Order Delivery"
          subtitle="Located at Satluj Filling Station (Shell) Kasur Bypass. Enjoy our air-conditioned family sitting lounge or get your favorite meals delivered fresh across Kasur."
        />

        {/* 3 Service Methods Banner */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {serviceBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.label}
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-md"
              >
                <div className="p-3 rounded-xl bg-black text-amber-400 border border-neutral-800">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-sm sm:text-base text-white">
                    {badge.label}
                  </h4>
                  <p className="text-xs text-zinc-400">{badge.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Grid: Details Card & Map Card */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Details Card */}
          <div className="lg:col-span-6 rounded-3xl bg-neutral-900/90 border border-neutral-800 p-6 sm:p-8 flex flex-col justify-between shadow-2xl space-y-6">
            
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5">
                <div>
                  <h3 className="font-display font-black text-2xl text-white tracking-tight">
                    Quick Contacts & Socials
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Fast food delivery & table reservation inquiries
                  </p>
                </div>
                <span className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold shrink-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Open Daily • 1 PM – 2 AM
                </span>
              </div>

              {/* Direct Call & WhatsApp Action Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
                {/* Primary WhatsApp */}
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                    "Assalam o Alaikum Hunger Spot! I want to place an order from your website."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 py-3 px-3.5 rounded-xl sm:rounded-2xl bg-emerald-700 hover:bg-emerald-600 text-white font-display font-black text-xs sm:text-sm shadow-md shadow-emerald-900/30 hover:scale-[1.02] active:scale-[0.98] transition-all min-w-0"
                >
                  <MessageSquare className="w-4 h-4 shrink-0 text-white" />
                  <div className="text-left min-w-0">
                    <span className="text-[9px] uppercase font-extrabold block text-emerald-200 leading-none">WhatsApp Order</span>
                    <span className="text-[11px] sm:text-xs font-black block leading-tight mt-0.5 whitespace-nowrap">{BUSINESS_INFO.phoneFormatted}</span>
                  </div>
                </a>

                {/* Direct Call */}
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center justify-center gap-2.5 py-3 px-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black font-display font-black text-xs sm:text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all min-w-0"
                >
                  <Phone className="w-4 h-4 text-black shrink-0" />
                  <div className="text-left min-w-0">
                    <span className="text-[9px] uppercase font-extrabold block text-black/70 leading-none">Direct Phone</span>
                    <span className="text-[11px] sm:text-xs font-black block leading-tight mt-0.5 whitespace-nowrap">{BUSINESS_INFO.phoneFormatted}</span>
                  </div>
                </a>
              </div>

              {/* Social Channels Row */}
              <div className="p-3.5 rounded-2xl bg-black border border-neutral-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <InstagramIcon className="w-4 h-4 text-pink-500" />
                  <span className="text-xs font-bold text-white">Instagram:</span>
                  <a
                    href={BUSINESS_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-amber-400 hover:underline font-semibold"
                  >
                    @hungerspot.kasur
                  </a>
                </div>
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-full bg-neutral-800 hover:bg-neutral-700 text-xs text-zinc-300 font-bold transition-colors"
                >
                  Follow
                </a>
              </div>

              {/* Delivery Conditions */}
              <div className="p-4 rounded-2xl bg-black border border-neutral-800 space-y-2">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-xs uppercase tracking-wider">
                  <Bike className="w-4 h-4 text-amber-400" />
                  <span>Home Delivery Information</span>
                </div>
                <ul className="text-xs sm:text-sm text-zinc-300 space-y-1.5">
                  <li className="flex items-center gap-2">
                    <StarMotif className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span><strong>Home Delivery Service:</strong> Call or WhatsApp <strong>0303 8023907</strong>.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <StarMotif className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Average Delivery Time: <strong>25–40 minutes</strong> piping hot in insulated bags.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <StarMotif className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Food prepared fresh on every order with 100% Halal ingredients.</span>
                  </li>
                </ul>
              </div>

              {/* Address & Hours details */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-display font-bold text-sm text-white">Restaurant Location</h5>
                    <p className="text-xs sm:text-sm text-zinc-300">
                      {BUSINESS_INFO.address}
                    </p>
                    <p className="text-[11px] text-amber-400 font-mono mt-0.5">
                      Plus Code: {BUSINESS_INFO.plusCode}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-display font-bold text-sm text-white">Opening Hours</h5>
                    <p className="text-xs sm:text-sm text-zinc-300">
                      Open Every Day: 1:00 PM – 2:00 AM (Dine-in, Takeaway & Delivery)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Guarantee Banner */}
            <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-zinc-400 font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                Air-conditioned Family Sitting Lounge & Parking
              </span>
              <span>Prices: Rs 70 – 4,999</span>
            </div>

          </div>

          {/* Right Stylized Interactive Map Card */}
          <div className="lg:col-span-6 rounded-3xl bg-neutral-900/90 border border-neutral-800 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="font-display font-black text-lg sm:text-xl text-white">
                    Kasur Bypass Location Map
                  </h4>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Satluj Filling Station (Shell), Kasur Bypass
                  </p>
                </div>
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-bold border border-amber-400/40 transition-colors whitespace-nowrap self-start sm:self-auto shrink-0 shadow-sm"
                >
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              </div>

              {/* Embedded Visual Map Card */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-neutral-800 shadow-inner bg-black flex items-center justify-center group">
                
                {/* Visual grid */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                  }}
                />

                {/* Kasur Bypass highway line */}
                <div className="absolute w-full h-4 bg-amber-500/25 top-1/2 -translate-y-1/2 rotate-[-8deg]" />
                <div className="absolute h-full w-3 bg-neutral-700 left-1/2 -translate-x-1/2 rotate-[25deg]" />

                {/* Central Location Pin */}
                <div className="relative z-10 flex flex-col items-center animate-bounce">
                  <div className="p-3 rounded-full bg-amber-500 text-black shadow-2xl shadow-amber-500/50 border-2 border-white">
                    <MapPin className="w-6 h-6 fill-current text-black" />
                  </div>
                  <div className="mt-2 px-3.5 py-1 rounded-full bg-black/95 border border-amber-400 text-white text-xs font-display font-black shadow-xl">
                    Hunger Spot (Shell Bypass)
                  </div>
                </div>

                {/* Distance Tags */}
                <div className="absolute bottom-3 left-3 z-10 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[11px] font-bold text-amber-300 border border-neutral-800">
                  📍 Satluj Shell Station, Kasur Bypass
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-black border border-neutral-800 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-white block">Heading over for Takeaway or Dine-in?</span>
                  <span className="text-[11px] text-zinc-400">Call ahead to have your Zingrato, Pizzas, or Pasta hot and ready when you arrive!</span>
                </div>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="px-4 py-2 rounded-full bg-amber-500 hover:bg-amber-400 text-black text-xs font-black shrink-0 transition-colors ml-3"
                >
                  Call Now
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
