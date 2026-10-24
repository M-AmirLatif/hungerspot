"use client";

import React from "react";
import { HungerSpotLogoBadge, StarMotif, InstagramIcon } from "@/components/brand/BrandMotifs";
import { BUSINESS_INFO } from "@/data/menuData";
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Bike,
  Heart,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-neutral-800 pt-12 sm:pt-16 pb-6 sm:pb-10 text-zinc-300 overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-8 sm:pb-12 border-b border-neutral-800">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-5 space-y-4">
            <HungerSpotLogoBadge size="default" />
            
            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed pt-2">
              Kasur&apos;s 5.0★ destination for juicy Zingrato burgers, royal Crown Crust pizzas, 10/10 Crunchy Pasta, shawarma wraps, and unbeatable deals at Satluj Shell Kasur Bypass.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-bold text-amber-300 hover:border-amber-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>{BUSINESS_INFO.phoneFormatted}</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-900/40 border border-emerald-600/40 text-xs font-bold text-emerald-300 hover:bg-emerald-900/60 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp Order</span>
              </a>

              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-bold text-pink-400 hover:border-pink-500 transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-pink-500" />
                <span>@hungerspot.kasur</span>
              </a>
            </div>
          </div>

          {/* Quick Menu Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-extrabold text-sm sm:text-base text-white uppercase tracking-wider flex items-center gap-2">
              <StarMotif className="w-3.5 h-3.5 text-amber-400" />
              <span>Menu Highlights</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400 font-medium">
              <li>
                <a href="#menu" className="hover:text-amber-300 transition-colors">
                  Zingrato Burger (Rs 450)
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-300 transition-colors">
                  Crown Crust Special Pizza
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-300 transition-colors">
                  Behari Kabab & Stuff Crust Pizza
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-300 transition-colors">
                  Crunchy Pasta 10/10 Rated
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-300 transition-colors">
                  Chicken Shawarma & Arabic Roll
                </a>
              </li>
              <li>
                <a href="#deals" className="text-amber-400 font-bold hover:underline">
                  Sooper Big Deal (Rs 4,999)
                </a>
              </li>
            </ul>
          </div>

          {/* Timings & Kasur Location */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display font-extrabold text-sm sm:text-base text-white uppercase tracking-wider flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Kasur Bypass Location</span>
            </h4>

            <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2 text-xs text-zinc-300">
              <div className="flex justify-between font-bold">
                <span>Every Day of the Week:</span>
                <span className="text-amber-300">1:00 PM – 2:00 AM</span>
              </div>
              <p className="text-[11px] text-zinc-400">
                Air-conditioned family seating & ample parking available.
              </p>
              <div className="pt-2 border-t border-neutral-800 flex items-center gap-2 text-emerald-400 text-[11px] font-semibold">
                <Bike className="w-3.5 h-3.5 text-amber-400" />
                <span>Fast Home Delivery across Kasur City</span>
              </div>
            </div>

            <div className="flex items-start gap-2 text-xs text-zinc-400 pt-1">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{BUSINESS_INFO.address}</span>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-5 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 text-center sm:text-left text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <span>© 2026 Hunger Spot. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-orange-500 fill-current inline" />
            <span>for Satluj Shell Kasur Bypass, Kasur, Pakistan.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
