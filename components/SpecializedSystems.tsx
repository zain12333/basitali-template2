'use client';

import React from 'react';
import Image from 'next/image';

const ENCLOSURES = [
  {
    title: 'Pergoblind',
    subtitle: 'Motorized side screens',
    image: '/assets/enclosures/pergoblind.jpg',
  },
  {
    title: 'Easyslide',
    subtitle: 'Sliding glass patio doors',
    image: '/assets/enclosures/easyslide.jpg',
  },
  {
    title: 'Guillotine',
    subtitle: 'Motorized vertical glass panels',
    image: '/assets/enclosures/guillotine.jpg',
  },
];

export default function SpecializedSystems() {
  return (
    <section className="py-20 sm:py-28 bg-[#24292e] text-white border-b border-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header exactly mirroring Pic 2 (image_3c6e7bc0.png) */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-[28px] leading-[36px] lg:text-[40px] lg:leading-[48px] font-bold text-white mb-3">
            Side Enclosures
          </h2>
          <p className="text-sm text-[#cbd5e1] leading-relaxed">
            Add glass side attachments or motorized screens, plus heaters and fans, to make your outdoor space comfortable in any season.
          </p>
        </div>

        {/* 3 Column Cards Grid matching image_3c6e7bc0.png */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {ENCLOSURES.map((item, idx) => (
            <div key={idx} className="group flex flex-col text-left">
              {/* Image Container with portrait 3:4 aspect ratio */}
              <div className="relative aspect-3/4 w-full overflow-hidden bg-slate-900 shadow-sm">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Title & Subtitle mirroring Pic 2 */}
              <h3 className="text-xl sm:text-2xl font-semibold text-white mt-4">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#94a3b8] mt-1 font-normal">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Centered LEARN MORE Button mirroring Pic 2 (image_3c6e7bc0.png) */}
        <div className="text-center">
          <a
            href="#consultation"
            className="inline-block px-8 py-3 bg-white hover:bg-slate-100 text-[#24292e] font-extrabold text-xs uppercase tracking-wider rounded-xs transition-colors shadow-sm"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
