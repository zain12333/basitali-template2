'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COLOR_FINISHES, ColorFinish } from '@/lib/data';

export default function ColorFinishes() {
  // Default selected is swatch #3 (Matte Architectural Black), exactly as in reference Pic 1
  const [selectedFinish, setSelectedFinish] = useState<ColorFinish>(
    COLOR_FINISHES.find((f) => f.code === '#3') || COLOR_FINISHES[2]
  );

  // Pagination for the 24 colors across 4 pages
  const [activePage, setActivePage] = useState(0);

  // 9 visible swatches per page to exactly match the 9 swatches seen in reference Pic 1
  const SWATCHES_PER_PAGE = 9;
  const totalPages = 4;

  const getPageSwatches = (page: number) => {
    // Sliding window of 9 colors across the 24 available finishes
    const step = 5; // gentle overlap so all 24 are accessible across 4 pages
    const start = Math.min(page * step, COLOR_FINISHES.length - SWATCHES_PER_PAGE);
    return COLOR_FINISHES.slice(start, start + SWATCHES_PER_PAGE);
  };

  const visibleSwatches = getPageSwatches(activePage);

  // Check if a color is light to toggle text contrast inside the preview card
  const isLightColor =
    selectedFinish.hex.toLowerCase() === '#f8fafc' ||
    selectedFinish.hex.toLowerCase() === '#cbd5e1' ||
    selectedFinish.hex.toLowerCase() === '#ffffff';

  return (
    <section id="finishes" className="py-20 lg:py-28 bg-white border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* ================= SECTION HEADER (Matching Pic 1 1:1) ================= */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-[28px] leading-[36px] lg:text-[40px] lg:leading-[48px] font-normal text-[#1a202c]">
            Customise Color Option
          </h2>
          <p className="text-sm text-[#718096] mt-3 leading-relaxed">
            Customize your pergola to fit any size and select from a wide variety of colors to effortlessly match your area.
          </p>
        </div>

        {/* ================= 2-COLUMN LAYOUT (Matching Pic 1 1:1) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* ----- Left Column: Selected Color Preview ----- */}
          <div className="lg:col-span-5">
            <h3 className="text-base sm:text-lg font-normal text-[#1a202c] mb-3">
              Selected Color
            </h3>
            
            {/* Large Rounded Rectangular Preview Card */}
            <div
              className="relative w-full aspect-[2/1] sm:h-44 rounded-2xl overflow-hidden p-6 shadow-xs transition-colors duration-300 flex flex-col justify-start"
              style={{ backgroundColor: selectedFinish.hex }}
            >
              {/* Realistic Wood Grain Overlay for Wood Finishes */}
              {selectedFinish.type === 'Wood Grain' && (
                <div
                  className="absolute inset-0 opacity-25 pointer-events-none mix-blend-overlay"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 2px, transparent 2px, transparent 8px), repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 4px)',
                  }}
                />
              )}

              {/* Top-Left Title "Structure" exactly as in Pic 1 */}
              <span
                className={`relative z-10 text-base sm:text-lg font-normal tracking-wide transition-colors duration-200 ${
                  isLightColor ? 'text-[#1a202c]' : 'text-white'
                }`}
              >
                Structure
              </span>
            </div>
          </div>

          {/* ----- Right Column: Colors (24) Swatches ----- */}
          <div className="lg:col-span-7">
            <h3 className="text-base sm:text-lg font-normal text-[#1a202c] mb-3">
              Colors ({COLOR_FINISHES.length})
            </h3>

            {/* Horizontal Swatches Row (9 visible cards matching Pic 1) */}
            <div className="w-full overflow-x-auto pb-2 scrollbar-none">
              <div className="flex items-center gap-2 sm:gap-2.5 min-w-[340px] sm:min-w-0">
                <AnimatePresence mode="wait">
                  {visibleSwatches.map((finish) => {
                    const isSelected = selectedFinish.id === finish.id;
                    const finishIsLight =
                      finish.hex.toLowerCase() === '#f8fafc' ||
                      finish.hex.toLowerCase() === '#cbd5e1';

                    return (
                      <button
                        key={finish.id}
                        onClick={() => setSelectedFinish(finish)}
                        title={`${finish.name} (${finish.code})`}
                        className={`group relative flex-1 min-w-[34px] sm:min-w-[42px] max-w-[48px] h-28 sm:h-32 rounded-xl sm:rounded-2xl transition-all duration-200 cursor-pointer flex flex-col justify-end items-center pb-2.5 shrink-0 ${
                          isSelected
                            ? 'ring-2 ring-[#0070f3] ring-offset-2 ring-offset-white scale-100 z-10 shadow-sm'
                            : 'hover:scale-[1.02] opacity-95 hover:opacity-100'
                        }`}
                        style={{ backgroundColor: finish.hex }}
                        aria-label={`Select color ${finish.name}`}
                      >
                        {/* Wood Grain Texture for wood finish swatches */}
                        {finish.type === 'Wood Grain' && (
                          <div
                            className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-30 pointer-events-none mix-blend-overlay"
                            style={{
                              backgroundImage:
                                'repeating-linear-gradient(90deg, rgba(255,255,255,0.12) 0px, rgba(255,255,255,0.12) 2px, transparent 2px, transparent 6px)',
                            }}
                          />
                        )}

                        {/* Swatch Code Number ONLY on the selected swatch (#3 in Pic 1) */}
                        {isSelected && (
                          <span
                            className={`relative z-10 text-xs sm:text-sm font-semibold tracking-tight transition-opacity duration-200 ${
                              finishIsLight ? 'text-[#1a202c]' : 'text-white'
                            }`}
                          >
                            {finish.code}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>

            {/* Carousel Dots Indicator below swatches: ● ○ ○ ○ (Matching Pic 1 1:1) */}
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-6">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActivePage(index)}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    activePage === index
                      ? 'w-1.5 h-1.5 bg-black'
                      : 'w-1.5 h-1.5 bg-[#d1d5db] hover:bg-[#9ca3af]'
                  }`}
                  aria-label={`Color palette page ${index + 1}`}
                />
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
