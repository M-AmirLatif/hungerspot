"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { BUSINESS_INFO } from "@/data/menuData";
import { Phone, MessageSquare, ShoppingBag } from "lucide-react";

export function StickyMobileActionBar() {
  const { totalCount, setIsOpen } = useCart();

  return (
    <div className="md:hidden fixed bottom-3 inset-x-3 max-w-md mx-auto z-40 pb-[env(safe-area-inset-bottom)]">
      <div className="rounded-full bg-black/95 border border-neutral-800 shadow-2xl shadow-black/90 backdrop-blur-xl p-1.5 flex items-center justify-between gap-1.5">
        
        {/* Call Button */}
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-amber-300 font-display font-bold text-xs border border-amber-400/30 transition-transform active:scale-95"
          aria-label="Direct Phone Call to Hunger Spot"
        >
          <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="truncate">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
            "Assalam o Alaikum! I want to order from Hunger Spot."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-2 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-display font-bold text-xs border border-emerald-500/50 shadow-md transition-transform active:scale-95"
          aria-label="Order on WhatsApp"
        >
          <MessageSquare className="w-3.5 h-3.5 text-emerald-200 shrink-0" />
          <span className="truncate">WhatsApp</span>
        </a>

        {/* Floating Cart Button */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-display font-black text-xs shadow-lg shadow-amber-500/30 cursor-pointer transition-transform active:scale-95"
          aria-label="Open Basket"
        >
          <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Basket</span>
          {totalCount > 0 && (
            <span className="w-4 h-4 rounded-full bg-black text-amber-400 text-[10px] font-black flex items-center justify-center shrink-0">
              {totalCount}
            </span>
          )}
        </button>

      </div>
    </div>
  );
}
