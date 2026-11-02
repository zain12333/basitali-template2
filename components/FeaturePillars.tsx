'use client';

import React from 'react';
import { Crown, Sun, CloudRain, Snowflake, Droplet, Lightbulb } from 'lucide-react';

export default function FeaturePillars() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header mirroring image_cc26767c.png */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[28px] leading-[36px] lg:text-[40px] lg:leading-[48px] font-normal text-[#1a202c]">
            Market-leading <span className="font-bold">Motorized Pergolas</span>
          </h2>
          <p className="text-base leading-6 text-[#718096] mt-3">
            Enjoy shade, airflow and rain protection controlled with one tap.
          </p>
        </div>

        {/* 2x2 Grid exactly mirroring image_cc26767c.png */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1: Premium Quality */}
          <div className="bg-white p-7 sm:p-9 rounded-sm border border-[#e2e8f0] flex items-center gap-6 shadow-xs">
            <div className="w-16 h-16 rounded-full border border-[#cbd5e0] flex items-center justify-center shrink-0 text-[#2d3748]">
              <Crown className="w-7 h-7 stroke-[1.4]" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#1a202c] mb-1.5">
                Premium Quality
              </h3>
              <p className="text-xs sm:text-sm text-[#718096] leading-relaxed">
                High-grade aluminum, powder-coated, guaranteed against rust, dents, breakage, 15-year warranty.
              </p>
            </div>
          </div>

          {/* Card 2: Four Season Use */}
          <div className="bg-white p-7 sm:p-9 rounded-sm border border-[#e2e8f0] flex items-center gap-6 shadow-xs">
            <div className="w-16 h-16 rounded-full border border-[#cbd5e0] flex items-center justify-center shrink-0 text-[#2d3748]">
              <div className="grid grid-cols-2 gap-1 p-2">
                <Sun className="w-3.5 h-3.5 stroke-[1.4]" />
                <CloudRain className="w-3.5 h-3.5 stroke-[1.4]" />
                <Snowflake className="w-3.5 h-3.5 stroke-[1.4]" />
                <span className="text-[10px] font-bold leading-none text-center block">❄</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#1a202c] mb-1.5">
                Four Season Use
              </h3>
              <p className="text-xs sm:text-sm text-[#718096] leading-relaxed">
                Enjoy your pergola year-round, adaptable for every season, from summer warmth to winter chill.
              </p>
            </div>
          </div>

          {/* Card 3: Waterproof */}
          <div className="bg-white p-7 sm:p-9 rounded-sm border border-[#e2e8f0] flex items-center gap-6 shadow-xs">
            <div className="w-16 h-16 rounded-full border border-[#cbd5e0] flex items-center justify-center shrink-0 text-[#2d3748]">
              <Droplet className="w-7 h-7 stroke-[1.4]" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#1a202c] mb-1.5">
                Waterproof
              </h3>
              <p className="text-xs sm:text-sm text-[#718096] leading-relaxed">
                Equipped with sealing gaskets and an integrated gutter system for waterproof all-weather enjoyment.
              </p>
            </div>
          </div>

          {/* Card 4: Led Lights */}
          <div className="bg-white p-7 sm:p-9 rounded-sm border border-[#e2e8f0] flex items-center gap-6 shadow-xs">
            <div className="w-16 h-16 rounded-full border border-[#cbd5e0] flex items-center justify-center shrink-0 text-[#2d3748]">
              <Lightbulb className="w-7 h-7 stroke-[1.4]" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#1a202c] mb-1.5">
                Led Lights
              </h3>
              <p className="text-xs sm:text-sm text-[#718096] leading-relaxed">
                Dimmable LED lighting brightens evenings and outdoor gatherings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
