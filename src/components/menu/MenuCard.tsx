"use client";

import React, { useState } from "react";
import { SafeImage } from "@/components/ui/SafeImage";
import { MenuItem } from "@/data/menuData";
import { useCart } from "@/context/CartContext";
import { StarMotif } from "@/components/brand/BrandMotifs";
import { Plus, Flame, Check } from "lucide-react";

interface MenuCardProps {
  item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
  const { addItem } = useCart();
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [justAdded, setJustAdded] = useState(false);

  const hasSizes = Boolean(item.sizes && item.sizes.length > 0);
  const currentSize = hasSizes ? item.sizes![selectedSizeIndex] : null;
  const currentPrice = hasSizes ? currentSize!.price : item.price || 0;

  const handleAddToCart = () => {
    const cartItemId = hasSizes
      ? `${item.id}-${currentSize!.label}`
      : item.id;

    addItem({
      id: cartItemId,
      menuItemId: item.id,
      name: item.name,
      sizeLabel: currentSize?.label,
      sizeName: currentSize?.name,
      price: currentPrice,
      image: item.image,
    });

    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <div className="group relative rounded-3xl bg-neutral-900/90 text-white border border-neutral-800 hover:border-amber-400/60 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1 menu-card-contain">
      
      {/* Top Media Container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-black">
        <SafeImage
          src={item.image}
          alt={item.name}
          category={item.category}
          fallbackTitle={item.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-108"
        />

        {/* Gradient shadow overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none z-10">
          {item.badge ? (
            <span className="px-2.5 py-1 rounded-full bg-orange-600 text-white font-display font-black text-[11px] shadow-md tracking-wide uppercase">
              {item.badge}
            </span>
          ) : item.isPopular ? (
            <span className="px-2.5 py-1 rounded-full bg-amber-500 text-black font-display font-black text-[11px] shadow-md tracking-wide uppercase flex items-center gap-1">
              <StarMotif className="w-3 h-3 text-black" />
              Popular
            </span>
          ) : <div />}

          <div className="flex items-center gap-1">
            {item.isSpicy && (
              <span className="p-1 rounded-full bg-red-600 text-white shadow-md" title="Spicy">
                <Flame className="w-3.5 h-3.5" />
              </span>
            )}
            {item.isVegetarian && (
              <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold shadow-md">
                Pure Veg
              </span>
            )}
          </div>
        </div>

        {/* Price tag on the image corner */}
        <div className="absolute bottom-2.5 right-2.5 z-10">
          <div className="px-3 py-1 rounded-full bg-black/90 backdrop-blur-md border border-amber-400/80 text-white shadow-lg flex items-center gap-1">
            <span className="text-[10px] font-bold text-amber-400">Rs</span>
            <span className="font-display font-black text-sm sm:text-base tracking-tight text-white transition-all">
              {currentPrice.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Card Content & Options */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Dish Title */}
          <h3 className="font-display font-black text-lg sm:text-xl text-white group-hover:text-amber-300 transition-colors leading-tight">
            {item.name}
          </h3>

          {/* Description */}
          <p className="mt-1.5 text-xs text-zinc-400 leading-snug line-clamp-2">
            {item.description}
          </p>
        </div>

        {/* Size Selection & Action Row */}
        <div className="mt-4 pt-3 border-t border-neutral-800">
          {hasSizes ? (
            <div className="space-y-2 mb-3">
              <div className="flex items-center justify-between text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                <span>Select Size:</span>
                <span className="text-amber-400 font-extrabold">
                  {currentSize?.name} — Rs {currentSize?.price}
                </span>
              </div>
              
              {/* Segmented Pill Size Selector */}
              <div
                className="grid gap-1.5 bg-black p-1 rounded-full border border-neutral-800"
                style={{
                  gridTemplateColumns: `repeat(${item.sizes!.length}, minmax(0, 1fr))`,
                }}
              >
                {item.sizes!.map((size, index) => {
                  const isSelected = selectedSizeIndex === index;
                  return (
                    <button
                      key={size.label}
                      type="button"
                      onClick={() => setSelectedSizeIndex(index)}
                      className={`py-1 rounded-full text-xs font-black transition-all cursor-pointer ${
                        isSelected
                          ? "bg-amber-500 text-black shadow-sm font-black"
                          : "text-zinc-400 hover:text-white hover:bg-neutral-800"
                      }`}
                      aria-label={`Select ${size.name} size for Rs ${size.price}`}
                    >
                      {size.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between text-xs text-zinc-400 font-semibold mb-3">
              <span>Standard Portion</span>
              <span className="font-bold text-amber-400">Fresh to Order</span>
            </div>
          )}

          {/* Add to Basket Button */}
          <button
            type="button"
            onClick={handleAddToCart}
            className={`w-full py-2.5 px-4 rounded-full font-display font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-sm ${
              justAdded
                ? "bg-emerald-600 text-white"
                : "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 active:scale-95 text-white font-extrabold shadow-amber-500/20"
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-4 h-4 animate-scale" />
                <span>Added to Basket!</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span>
                  Add to Basket • Rs {currentPrice.toLocaleString()}
                </span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
