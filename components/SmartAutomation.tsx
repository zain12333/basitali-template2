'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Settings, Wifi } from 'lucide-react';

export default function SmartAutomation() {
  const [isOpen, setIsOpen] = useState(true);
  const [louverAngle, setLouverAngle] = useState(85); // 0 to 90 degrees

  const toggleOpen = () => {
    if (isOpen) {
      setIsOpen(false);
      setLouverAngle(0);
    } else {
      setIsOpen(true);
      setLouverAngle(85);
    }
  };

  return (
    <section id="smart-automation" className="py-20 sm:py-28 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ========================================================
              Left Column: Exact copy & branding from Pic 2 (image_72cf9382.png)
             ======================================================== */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-6 sm:space-y-7">
            <h2 className="text-[28px] leading-[36px] lg:text-[40px] lg:leading-[48px] font-bold text-slate-900">
              Control your Outdoor Roof with your<br className="hidden sm:inline" /> smartphone
            </h2>

            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-lg">
              Operate your Outdoor Roof with your smartphone, managing lights and side screens, seamlessly integrating with smart home systems such as Alexa and Google Home.
            </p>

            <div className="pt-2">
              <a
                href="#consultation"
                className="inline-block bg-[#242830] hover:bg-black text-white font-extrabold text-xs tracking-wider uppercase px-7 py-3.5 rounded-xs transition-colors shadow-xs"
              >
                GET A QUOTE
              </a>
            </div>

            {/* Smart Home Integrations matching Pic 2 exactly */}
            <div className="pt-6 sm:pt-10">
              <div className="relative inline-block">
                <Image
                  src="/assets/products/smart-home-logos.png"
                  alt="Compatible with Google Home, Apple HomeKit, Amazon Alexa"
                  width={240}
                  height={65}
                  className="h-14 sm:h-16 w-auto object-contain"
                  priority
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* ========================================================
              Right Column: Smartphone Mockup matching Pic 2 (image_72cf9382.png)
             ======================================================== */}
          <div className="lg:col-span-5 xl:col-span-6 flex justify-center lg:justify-end">
            <div className="w-[300px] sm:w-[325px] bg-[#1a1d24] p-3 rounded-[52px] shadow-2xl border border-slate-700/60 ring-1 ring-black/20">
              
              {/* Phone Inner Bezel & Screen */}
              <div className="bg-white rounded-[44px] overflow-hidden border border-slate-200/80 flex flex-col justify-between min-h-[540px]">
                
                {/* 1. Status Bar & Dynamic Island */}
                <div className="pt-3 px-6 flex items-center justify-between text-slate-900 relative">
                  <span className="text-[12px] font-semibold tracking-tight">9:41</span>
                  
                  {/* Dynamic Island Pill */}
                  <div className="w-20 h-4 bg-black rounded-full absolute left-1/2 -translate-x-1/2 top-2.5 flex items-center justify-end pr-2">
                    <span className="w-2 h-2 rounded-full bg-[#151515]" />
                  </div>

                  {/* Right Status Icons */}
                  <div className="flex items-center gap-1.5 text-slate-800">
                    {/* Cellular signal bars */}
                    <div className="flex items-end gap-0.5 h-2.5">
                      <span className="w-0.5 h-1 bg-slate-800 rounded-xs" />
                      <span className="w-0.5 h-1.5 bg-slate-800 rounded-xs" />
                      <span className="w-0.5 h-2 bg-slate-800 rounded-xs" />
                      <span className="w-0.5 h-2.5 bg-slate-800 rounded-xs" />
                    </div>
                    {/* Wi-Fi Icon */}
                    <Wifi className="w-3 h-3 text-slate-800" />
                    {/* Battery Icon */}
                    <div className="w-4 h-2 border border-slate-800 rounded-[2px] p-0.5 flex items-center">
                      <div className="w-full h-full bg-slate-800 rounded-[1px]" />
                    </div>
                  </div>
                </div>

                {/* 2. In-App Header matching yellow circle in image_171b5285.png */}
                <div className="px-5 pt-3 pb-3 flex items-center justify-between border-b border-slate-100">
                  <div className="w-5" /> {/* Balance spacer */}
                  
                  {/* Pergomatic Official Brand Logo */}
                  <div className="flex items-center justify-center">
                    <Image
                      src="/assets/aistudio/ChatGPT_Image_Sep_30__2026__03_47_25_PM_f9e8138f.png"
                      alt="Pergomatic Logo"
                      width={120}
                      height={100}
                      className="h-5 w-auto object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Settings Gear Icon */}
                  <button
                    type="button"
                    aria-label="App settings"
                    className="text-slate-600 hover:text-slate-900 transition-colors p-1"
                  >
                    <Settings className="w-4 h-4" />
                  </button>
                </div>

                {/* 3. In-App Louvera Pergola Showcase */}
                <div className="px-4 py-3 flex-1 flex flex-col items-center justify-center">
                  <div className="relative w-full max-w-[210px] aspect-14/9 flex items-center justify-center py-1">
                    <Image
                      src="/assets/products/louvera-model.png"
                      alt="Louvera Motorized Pergola"
                      width={210}
                      height={110}
                      className={`w-full h-auto object-contain transition-opacity duration-300 ${
                        isOpen ? 'opacity-100' : 'opacity-85'
                      }`}
                      priority
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  <span className="text-xs font-semibold text-slate-600 tracking-wide mt-1">
                    Louvera
                  </span>
                </div>

                {/* 4. Controls: Open / Close Pill Button & Vertical Louver Slider */}
                <div className="px-6 pb-8 pt-2 flex flex-col items-center">
                  {/* Open / Close Pill Button */}
                  <button
                    type="button"
                    onClick={toggleOpen}
                    className="w-32 py-2.5 bg-[#edf0f2] hover:bg-[#e2e6ea] text-slate-800 font-semibold text-xs tracking-wide rounded-full transition-all cursor-pointer shadow-xs active:scale-95 text-center"
                  >
                    {isOpen ? 'Open' : 'Close'}
                  </button>

                  {/* Vertical Amber Louver Angle Slider / Indicator */}
                  <div className="mt-4 flex flex-col items-center group cursor-pointer" onClick={() => setLouverAngle((prev) => (prev >= 90 ? 0 : prev + 30))}>
                    <div className="w-1 h-12 bg-slate-200 rounded-full relative overflow-hidden flex flex-col justify-end">
                      <div
                        className="w-full bg-[#f4b400] transition-all duration-300 rounded-full"
                        style={{ height: `${Math.max(15, (louverAngle / 90) * 100)}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium mt-1 group-hover:text-slate-700 transition-colors">
                      {isOpen ? `${louverAngle}°` : 'Closed'}
                    </span>
                  </div>
                </div>

                {/* Phone Bottom Home Indicator Bar */}
                <div className="pb-2 flex justify-center">
                  <div className="w-28 h-1 bg-slate-300 rounded-full" />
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
