"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarMotif } from "@/components/brand/BrandMotifs";
import { Star, Quote, CheckCircle2, ThumbsUp } from "lucide-react";

const REVIEWS = [
  {
    name: "kz",
    location: "Kasur",
    badge: "Verified Delivery Customer",
    orderType: "Delivery",
    rating: 5,
    text: "I m impressed with there taste, minimal flavors but on perfect point. Crunchy pasta 10/10 , zingerato 10/10 very juicy , chicken shawarma 9/10, fries 9/10. I must say give it a try totally recommended",
    date: "2 months ago",
    breakdown: "Food: 5 • Service: 5",
    highlight: "Crunchy Pasta & Zingrato 10/10",
  },
  {
    name: "Shahbaz Ali",
    location: "Kasur Bypass",
    badge: "Verified Dine-in Customer",
    orderType: "Dine-in",
    rating: 5,
    text: "Good taste. Excellent fresh burgers and pizzas with very fast, attentive service.",
    date: "2 months ago",
    breakdown: "Food: 5 • Service: 5 • Atmosphere: 5",
    highlight: "Atmosphere & Service 5/5",
  },
  {
    name: "Ch Saim",
    location: "Kasur",
    badge: "Family Dine-in Experience",
    orderType: "Dine-in Family",
    rating: 5,
    text: "Price per person Rs 3,000–4,000. Wonderful dining experience with family. Authentic taste and wonderful atmosphere.",
    date: "2 months ago",
    breakdown: "Food: 5 • Service: 4 • Atmosphere: 4",
    highlight: "Great Family Gathering",
  },
];

export function ReviewsSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-[#0a0a0a] border-t border-neutral-800" aria-label="Customer Reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Verified Google Reviews"
          title="What Kasur Foodies"
          highlight="Say About Us"
          subtitle="Real, unfiltered 5.0★ Google reviews from local customers who ordered delivery and visited our dining lounge at Satluj Shell Kasur Bypass."
        />

        {/* Rating Overview Box */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-neutral-900/90 border border-neutral-800 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl text-center sm:text-left">
          <div className="flex items-center gap-5">
            <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 text-black flex flex-col items-center justify-center font-display font-black text-3xl shadow-xl shadow-amber-500/20 shrink-0">
              <span>5.0</span>
              <span className="text-[10px] font-extrabold uppercase tracking-tight -mt-1">OUT OF 5</span>
            </div>
            <div>
              <div className="flex text-amber-400 mb-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
                ))}
              </div>
              <p className="text-sm font-bold text-white">100% 5-Star Google Rating</p>
              <p className="text-xs text-zinc-400">Fast Food Restaurant • Kasur, Pakistan</p>
            </div>
          </div>

          <div className="flex flex-col sm:items-end gap-2">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-600/90 text-white font-display font-bold text-xs shadow-md">
              100% Halal Verified
            </span>
            <span className="text-xs text-amber-300 font-semibold">
              Dine-in • Takeout • Fast Home Delivery
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl bg-neutral-900/80 border border-neutral-800 shadow-xl flex flex-col justify-between space-y-4 hover:border-amber-400/50 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-zinc-500 font-medium">
                    {rev.date}
                  </span>
                </div>

                <Quote className="w-6 h-6 text-amber-400/30 mb-2" />

                <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </p>

                {rev.highlight && (
                  <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-300 text-[11px] font-bold border border-amber-500/30">
                    <ThumbsUp className="w-3 h-3" />
                    <span>{rev.highlight}</span>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-neutral-800 flex items-center justify-between">
                <div>
                  <h5 className="font-display font-bold text-sm text-white flex items-center gap-1.5">
                    {rev.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  </h5>
                  <span className="text-[11px] text-zinc-400 block">{rev.badge}</span>
                </div>
                <span className="text-[10px] font-bold text-amber-400 bg-black px-2.5 py-1 rounded-md border border-neutral-800 shrink-0">
                  {rev.breakdown}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
