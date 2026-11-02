'use client';

import React from 'react';
import { CLIENT_INFO } from '@/lib/data';

export default function Hero() {
  return (
    <section id="hero" className="relative h-[85vh] sm:h-[90vh] lg:h-[92vh] w-full flex flex-col justify-between overflow-hidden bg-slate-950 text-white">
      {/* Background Video directly from Pergomatic (Local fast copy + Remote fallback) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/assets/images/hero_aluminum_glass_villa_1793190402071.jpg"
          className="w-full h-full object-cover object-center scale-102"
        >
          <source src="/assets/videos/hero-2026.mp4" type="video/mp4" />
          <source src="https://pergomatic.com/videos/hero-2026.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Ambient Contrast Scrim mirroring Pergomatic video tone */}
        <div className="absolute inset-0 bg-slate-950/40 sm:bg-slate-950/25 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-slate-950/40" />
      </div>

      {/* Center Title — absolute so it's always centered regardless of other elements */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
        <div className="max-w-5xl text-center">
          <h1 className="text-[36px] leading-[1.1] sm:text-[48px] lg:text-[56px] font-extrabold text-white uppercase tracking-tight" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6), 0 1px 3px rgba(0,0,0,0.4)' }}>
            CUSTOM–MADE<br />
            PREMIUM<br className="sm:hidden" />
            {' '}ALUMINIUM<br className="sm:hidden" />
            {' '}& GLASS WORK
          </h1>
          {/* Mobile: scrolling marquee carousel */}
          <div className="mt-10 sm:mt-5 w-full overflow-hidden sm:hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...Array(2)].map((_, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 text-[11px] text-slate-300 font-medium uppercase tracking-widest drop-shadow-md mx-4"
                >
                  <span>Windows</span>
                  <span className="text-amber-400/80">·</span>
                  <span>Frameless Partitions</span>
                  <span className="text-amber-400/80">·</span>
                  <span>Shower Cabins</span>
                  <span className="text-amber-400/80">·</span>
                  <span>Shopfronts</span>
                  <span className="text-amber-400/80">·</span>
                  <span>Sliding Doors</span>
                  <span className="text-amber-400/80">·</span>
                  <span>Glass Railings</span>
                  <span className="text-amber-400/80">·</span>
                  <span>Lahore</span>
                  <span className="text-amber-400/80">·</span>
                </span>
              ))}
            </div>
          </div>
          {/* Desktop: static text */}
          <p className="mt-5 hidden sm:block text-sm md:text-base text-slate-300 font-medium uppercase tracking-widest drop-shadow-md">
            Windows · Frameless Partitions · Shower Cabins · Shopfronts · Lahore
          </p>
        </div>
      </div>

      {/* Floating Bottom Navigation Bar — hidden on mobile, visible on lg+ */}
      <div className="relative z-10 w-full pb-8 sm:pb-12 px-4 hidden lg:flex justify-center">
        <div className="bg-[#242b32]/85 backdrop-blur-md border border-white/20 rounded-md py-2 px-6 shadow-2xl">
          <div className="flex items-center gap-3 sm:gap-6 text-xs font-bold uppercase tracking-wider text-slate-200 whitespace-nowrap">
            <a
              href="#hero"
              className="hover:text-white transition-colors px-1 py-1"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-white transition-colors px-1 py-1"
            >
              About Us
            </a>
            <a
              href="#portfolio"
              className="hover:text-white transition-colors px-1 py-1"
            >
              Portfolio
            </a>
            <a
              href="#commercial"
              className="hover:text-white transition-colors px-1 py-1"
            >
              Commercial
            </a>
            <a
              href="#warranty"
              className="hover:text-white transition-colors px-1 py-1"
            >
              Warranty
            </a>

            {/* PRODUCTS button with subtle rectangular border box mirroring Pic 1 */}
            <a
              href="#services"
              className="border border-white/70 hover:border-white text-white px-3.5 py-1.5 rounded-xs transition-colors"
            >
              Products
            </a>

            {/* GET A QUOTE button (solid white button with dark text mirroring Pic 1) */}
            <a
              href="#consultation"
              className="bg-white text-slate-900 hover:bg-slate-100 font-extrabold px-4 sm:px-5 py-2 rounded-xs transition-colors shadow-xs"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
