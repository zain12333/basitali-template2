'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Check, X, Shield, Wrench, Ruler } from 'lucide-react';
import { CORE_SERVICES, ServiceItem, CLIENT_INFO } from '@/lib/data';

export default function ServicesGrid() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // First 4 products matching image.png exactly
  const primaryProducts = CORE_SERVICES.slice(0, 4);

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#fafafa] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header mirroring Pergomatic Products Title in image.png */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[28px] leading-[36px] lg:text-[40px] lg:leading-[48px] font-bold text-[#111827]">
            Products
          </h2>
        </div>

        {/* 4-Column Card Grid exactly matching image.png */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 mb-20">
          {primaryProducts.map((service) => (
            <div
              key={service.id}
              className="group cursor-pointer flex flex-col"
              onClick={() => setSelectedService(service)}
            >
              {/* Product Image Container with Portrait Aspect Ratio matching image.png */}
              <div className="relative aspect-4/5 w-full overflow-hidden bg-slate-200 shadow-xs group-hover:shadow-md transition-all duration-300">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />

                {/* Subtle inspect indicator */}
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-slate-800 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Title & Subtitle mirroring image.png */}
              <div className="pt-4 text-left">
                <h3 className="text-lg sm:text-xl font-semibold text-[#111827] group-hover:text-amber-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal leading-snug">
                  {service.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Specification & Booking Modal */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-slate-200 animate-fade-in">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-16/10 w-full rounded-xl overflow-hidden mb-6 border border-slate-200 bg-slate-100">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 mb-1">
                <span>Architectural System Specification</span>
                <span>·</span>
                <span>All Lahore Delivery</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">{selectedService.title}</h3>
              <p className="text-xs font-semibold text-slate-500 mb-4">{selectedService.subtitle}</p>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                {selectedService.description}
              </p>

              {/* Specs Grid */}
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 block font-medium">Standard Glass / Roof Profile</span>
                  <span className="font-semibold text-slate-900 text-xs sm:text-sm">{selectedService.specs.glassType}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Aluminum Alloy & Extrusion</span>
                  <span className="font-semibold text-slate-900 text-xs sm:text-sm">{selectedService.specs.profileThickness}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Motor & Hardware Brand</span>
                  <span className="font-semibold text-slate-900 text-xs sm:text-sm">{selectedService.specs.hardware}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Warranty Coverage</span>
                  <span className="font-semibold text-slate-900 text-xs sm:text-sm">{selectedService.specs.warranty}</span>
                </div>
              </div>

              {/* Engineering Inclusions */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                  Engineering Inclusions
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {selectedService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-200">
                <a
                  href={`https://wa.me/923202740066?text=Hello%20Basit%20Ali%20Aluminum%2C%20I%20am%20interested%20in%20${encodeURIComponent(selectedService.title)}%20for%20my%20property%20in%20Lahore.%20Please%20provide%20estimate.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-1/2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-lg text-center transition-colors"
                >
                  Inquire on WhatsApp
                </a>
                <a
                  href="#consultation"
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-1/2 py-3 px-4 bg-slate-950 hover:bg-slate-800 text-white font-semibold text-xs rounded-lg text-center transition-colors"
                >
                  Schedule Free On-Site Measurement
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
