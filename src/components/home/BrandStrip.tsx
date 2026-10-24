import React from "react";
import { SafeImage } from "@/components/ui/SafeImage";
import { StarMotif, SunburstBadge } from "@/components/brand/BrandMotifs";
import { BUSINESS_INFO } from "@/data/menuData";
import {
  Clock,
  Bike,
  Sparkles,
  ShieldCheck,
  Award,
  MapPin,
  Star,
  Users,
} from "lucide-react";

export function BrandStrip() {
  const trustPillars = [
    {
      icon: Award,
      title: "5.0 ★ Google Rating",
      desc: "Kasur foodies rave about our 10/10 Crunchy Pasta, juicy Zingrato, and fresh chicken shawarma with 100% 5-star verified ratings.",
      badge: "5.0 Perfect Score",
      color: "border-amber-400/40 text-amber-300",
    },
    {
      icon: MapPin,
      title: "Satluj Shell Kasur Bypass",
      desc: "Prime location at Satluj Filling Station (Shell) on Kasur Bypass with easy access, ample parking, and comfortable family dine-in.",
      badge: "Easy Access & Parking",
      color: "border-orange-500/40 text-orange-400",
    },
    {
      icon: Bike,
      title: "Fast Home Delivery",
      desc: "Piping hot delivery in insulated carriers directly to your doorstep anywhere in Kasur. Quick dispatch on 0303 8023907.",
      badge: "Hot & Fresh",
      color: "border-emerald-400/40 text-emerald-300",
    },
    {
      icon: ShieldCheck,
      title: "100% Fresh Halal Ingredients",
      desc: "Handcrafted dough kneaded daily, 100% Halal chicken, signature spice blends, and generous mozzarella cheese on every order.",
      badge: "Fresh Daily",
      color: "border-amber-400/40 text-amber-300",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-16 sm:py-24 bg-[#0a0a0a] border-y border-neutral-800 overflow-hidden"
      aria-label="About Hunger Spot"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-orange-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Story Hero Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-black border-2 border-neutral-800 p-6 sm:p-10 lg:p-14 shadow-2xl overflow-hidden mb-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-800/80 border border-amber-400/30">
                <StarMotif className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-display font-extrabold text-xs uppercase tracking-wider text-amber-300">
                  Hunger Spot • Kasur Bypass
                </span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
                One Spot. Every Craving. Handcrafted For{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-500">
                  True Food Lovers.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                Situated at <strong className="text-amber-400 font-bold">Satluj Filling Station (Shell) on Kasur Bypass</strong>, Hunger Spot brings together the most irresistible fast food creations in town: super juicy Zingrato burgers, authentic Crown Crust & Behari Kabab Pizzas, rich Crunchy Pasta, shawarma, and monster value deals.
              </p>

              <p className="text-base text-zinc-400 leading-relaxed">
                Whether you&apos;re pulling in off the bypass for a relaxing family dinner in our air-conditioned sitting lounge, grabbing takeaway on your way home, or ordering delivery to your doorstep, our kitchen is committed to fresh food, bold taste, and 5-star service.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-950 border border-neutral-800">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-xs font-semibold text-zinc-300">
                    Satluj Shell Station, Kasur Bypass
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-950 border border-neutral-800">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs font-semibold text-zinc-300">
                    Open Daily: 1:00 PM – 2:00 AM
                  </span>
                </div>
              </div>
            </div>

            {/* Visual Real Restaurant Photo */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-2xl bg-black">
                <SafeImage
                  src="/images/hungerspot/mainRestimg.jpg"
                  alt="Hunger Spot Restaurant at Satluj Filling Station Shell Kasur Bypass"
                  category="fastfood"
                  fallbackTitle="Hunger Spot Kasur Bypass"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase font-bold text-amber-300 block">Real Restaurant Location</span>
                    <p className="text-sm font-display font-black text-white truncate">Hunger Spot • Satluj Shell Bypass</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-amber-500 text-black font-display font-black text-[10px] uppercase shrink-0 shadow-md">
                    VISIT TODAY
                  </span>
                </div>
              </div>

              {/* Verified Google Reviews Trust Card */}
              <div className="w-full mt-4 rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5 px-4 shadow-xl flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  {/* Rating Score Badge */}
                  <div className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 text-black font-display font-black text-base shadow-sm shrink-0">
                    <Star className="w-4 h-4 fill-current text-black" />
                    <span>5.0</span>
                  </div>

                  {/* Stars & Label */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-1 text-amber-400 mb-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-display font-bold text-white block truncate">
                      3 Verified Google Reviews (100% 5-Star)
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-700 text-xs font-bold text-emerald-400 shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Kasur Verified</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Trust Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trustPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative rounded-2xl bg-neutral-900/80 border border-neutral-800 p-6 hover:border-amber-400/50 hover:bg-neutral-800/60 transition-all duration-300 flex flex-col justify-between hover:scale-[1.02]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-black border border-neutral-800 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-black border border-neutral-800 text-[10px] font-bold text-amber-300">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-lg text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
