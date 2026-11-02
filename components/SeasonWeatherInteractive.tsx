'use client';

import React, { useState } from 'react';
import { CloudRain, Moon } from 'lucide-react';

type SeasonMode = 'day' | 'night' | 'rain';

export default function SeasonWeatherInteractive() {
  const [activeMode, setActiveMode] = useState<SeasonMode>('rain'); // Pic 1 shows rain active

  const modeVideos: Record<SeasonMode, string> = {
    day: '/assets/videos/day-2026.mp4',
    night: '/assets/videos/night-2026.mp4',
    rain: '/assets/videos/rain-2026.mp4',
  };

  return (
    <section className="py-12 sm:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text & Mode Switchers */}
          <div className="space-y-6">
            <div>
              <h2 className="text-[28px] leading-[36px] lg:text-[38px] lg:leading-[46px] font-normal text-[#1a202c]">
                Made for <span className="font-bold">Every Season</span>
              </h2>
              <p className="text-[15px] leading-relaxed text-[#4a5568] mt-3 max-w-sm">
                With motorized operation and accessories, your pergola becomes a comfortable outdoor space in every season and any weather.
              </p>
            </div>

            {/* 3 Circular Mode Switchers */}
            <div className="flex items-center gap-6">
              {/* Day Button */}
              <button
                type="button"
                onClick={() => setActiveMode('day')}
                className="flex flex-col items-center gap-2 cursor-pointer group focus:outline-hidden"
                aria-label="Day Mode"
              >
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-200 ${
                    activeMode === 'day'
                      ? 'bg-[#22272e] text-white border-2 border-[#22272e] shadow-sm'
                      : 'bg-white text-slate-800 border border-slate-300 hover:border-slate-500'
                  }`}
                >
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      activeMode === 'day' ? 'bg-white' : 'bg-[#1a202c]'
                    }`}
                  />
                </div>
                <span
                  className={`text-xs font-medium transition-colors ${
                    activeMode === 'day' ? 'text-[#1a202c] font-bold' : 'text-[#718096]'
                  }`}
                >
                  Day
                </span>
              </button>

              {/* Night Button */}
              <button
                type="button"
                onClick={() => setActiveMode('night')}
                className="flex flex-col items-center gap-2 cursor-pointer group focus:outline-hidden"
                aria-label="Night Mode"
              >
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-200 ${
                    activeMode === 'night'
                      ? 'bg-[#22272e] text-white border-2 border-[#22272e] shadow-sm'
                      : 'bg-white text-slate-800 border border-slate-300 hover:border-slate-500'
                  }`}
                >
                  <Moon className="w-4 h-4 fill-current" />
                </div>
                <span
                  className={`text-xs font-medium transition-colors ${
                    activeMode === 'night' ? 'text-[#1a202c] font-bold' : 'text-[#718096]'
                  }`}
                >
                  Night
                </span>
              </button>

              {/* Rain Button */}
              <button
                type="button"
                onClick={() => setActiveMode('rain')}
                className="flex flex-col items-center gap-2 cursor-pointer group focus:outline-hidden"
                aria-label="Rain Mode"
              >
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-200 ${
                    activeMode === 'rain'
                      ? 'bg-[#22272e] text-white border-2 border-[#22272e] shadow-sm'
                      : 'bg-white text-slate-800 border border-slate-300 hover:border-slate-500'
                  }`}
                >
                  <CloudRain className="w-4 h-4" />
                </div>
                <span
                  className={`text-xs font-medium transition-colors ${
                    activeMode === 'rain' ? 'text-[#1a202c] font-bold' : 'text-[#718096]'
                  }`}
                >
                  Rain
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Video extends toward right edge like reference */}
          <div className="flex justify-end items-center lg:-mr-6">
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <video
                key={activeMode}
                src={modeVideos[activeMode]}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
