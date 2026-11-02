'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, MessageCircle, MapPin, CheckCircle2 } from 'lucide-react';
import { CLIENT_INFO } from '@/lib/data';

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  description: string;
  features: string[];
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'item-1',
    title: 'Corporate Atrium Glass Canopy & Balustrades',
    category: 'Commercial Glazing',
    location: 'Gulberg III, Lahore',
    image: '/assets/projects/commercial-1.jpg',
    description: 'Engineered structural overhead canopy with laminated safety glass panels, internal drainage gutters, and stainless steel anchor spiders.',
    features: ['12mm Heat-strengthened laminated glass', 'Custom heavy structural steel and aluminum framework', 'Weatherproof silicone structural seals'],
  },
  {
    id: 'item-2',
    title: 'Frameless Office Glass Partitions',
    category: 'Interior Glazing',
    location: 'Mall Road & Cantt, Lahore',
    image: '/assets/images/office_glass_partition_1793190403211.jpg',
    description: 'Acoustic-treated 10mm tempered frameless glass partition walls with matte black anodized hardware, pivot doors, and privacy manifestations.',
    features: ['Acoustic sound containment rating', 'Ultra-slim concealed floor springs', 'Custom frosted safety manifestation band'],
  },
  {
    id: 'item-3',
    title: 'Designer Luxury Shower Cabin',
    category: 'Shower Cubicles',
    location: 'Bahria Town, Lahore',
    image: '/assets/images/luxury_shower_cabin_1793190403779.jpg',
    description: 'Bespoke 10mm tempered clear glass shower enclosure with stainless steel 304 waterproof anti-corrosion rollers and magnetic water seals.',
    features: ['Anti-limescale glass nano-coating', 'Heavy-duty grade 304 stainless steel hardware', 'Zero-leak magnetic perimeter compression seals'],
  },
  {
    id: 'item-4',
    title: 'Executive Glass Railing Staircase',
    category: 'Architectural Railings',
    location: 'DHA Phase 6, Lahore',
    image: '/assets/portfolio/portfolio-staircase.jpg',
    description: '12mm clear tempered laminated safety glass balustrades with bespoke polished brass handrails and heavy-duty structural bottom spigots.',
    features: ['12mm tempered safety glass compliant with building code', 'Polished architectural brass luxury handrail', 'Concealed base clamp spigot mounting system'],
  },
  {
    id: 'item-5',
    title: 'Luxury Tinted Mirror Wardrobe & Dressing',
    category: 'Custom Mirrors',
    location: 'Gulberg III, Lahore',
    image: '/assets/portfolio/portfolio-mirrors.jpg',
    description: 'Floor-to-ceiling bronze tinted float mirrors with ultra-slim aluminum concealed border frames and integrated warm ambient backlighting.',
    features: ['High-definition copper-free bronze tinted glass', 'Concealed ultra-slim aluminum structural profiles', 'Anti-shatter safety film laminated backing'],
  },
  {
    id: 'item-6',
    title: 'Commercial Curtain Wall & ACP Facade',
    category: 'Exterior Facades',
    location: 'Main Boulevard Gulberg, Lahore',
    image: '/assets/portfolio/portfolio-facade.jpg',
    description: 'High-performance double-glazed solar reflective blue glass curtain wall system paired with precision CNC aluminum composite panel (ACP) cladding.',
    features: ['Double-glazed solar reflective argon-filled units', 'Structural aluminum mullions engineered for wind load', 'Precision fabricated aluminum cladding panels'],
  },
  {
    id: 'item-7',
    title: 'Commercial Storefront & Entrance Facade',
    category: 'Storefronts',
    location: 'MM Alam Road, Lahore',
    image: '/assets/images/commercial_shopfront_facade_1793190403888.jpg',
    description: 'Heavy-duty commercial shopfront system featuring 12mm clear safety glass and automated sensor sliding aluminum door system.',
    features: ['High-traffic commercial aluminum profiles', '12mm impact-resistant clear tempered glass', 'Smooth whisper-quiet automatic door motor drive'],
  },
  {
    id: 'item-8',
    title: 'Modern Villa Architectural Windows',
    category: 'Aluminum Windows',
    location: 'Lake City, Lahore',
    image: '/assets/images/hero_aluminum_glass_villa_1793190402071.jpg',
    description: 'Thermally broken aluminum sliding window suites with double-glazed low-E argon gas units for superior energy efficiency and noise reduction.',
    features: ['Heavy extruded 6063-T5 aluminum alloy', 'Multipoint locking security hardware', 'Multi-track smooth whisper-glide rollers'],
  },
  {
    id: 'item-9',
    title: 'Double-Height Atrium Spider Glazing',
    category: 'Structural Glazing',
    location: 'Gulberg Greens, Lahore',
    image: '/assets/projects/commercial-2.jpg',
    description: 'Full architectural glass envelope featuring structural aluminum mullions, four-way stainless steel spider fittings, and panoramic views.',
    features: ['Four-way stainless steel 316 spider brackets', '15mm toughened safety float glass', 'Engineered seismic & thermal expansion silicone joints'],
  },
];

export default function PortfolioCarousel() {
  // Total 9 items matching the 9 pagination dots in image_70bc40a7.png
  // Initial active index is 4 (the 5th dot, exactly mirroring image_70bc40a7.png where the 5th dot is active and items 3, 4, 5 are visible)
  const [activeIndex, setActiveIndex] = useState(4);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const total = PORTFOLIO_ITEMS.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  // Optional subtle auto-rotation that pauses when user hovers or opens a project
  useEffect(() => {
    if (isPaused || selectedItem) return;
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 2500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, selectedItem, total]);

  // Compute the 3 visible items with activeIndex in the center on desktop
  const leftIndex = (activeIndex - 1 + total) % total;
  const centerIndex = activeIndex;
  const rightIndex = (activeIndex + 1) % total;

  const visibleCards = [
    { item: PORTFOLIO_ITEMS[leftIndex], position: 'left', originalIndex: leftIndex },
    { item: PORTFOLIO_ITEMS[centerIndex], position: 'center', originalIndex: centerIndex },
    { item: PORTFOLIO_ITEMS[rightIndex], position: 'right', originalIndex: rightIndex },
  ];

  return (
    <section
      id="portfolio"
      className="py-20 sm:py-28 bg-white border-b border-slate-100 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* ========================================================
            Section Header exactly matching image_70bc40a7.png
           ======================================================== */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[28px] leading-[36px] lg:text-[40px] lg:leading-[48px] font-bold text-[#111827]">
            Our Portfolio<span className="text-amber-500">.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#4a5568] mt-3 max-w-xl mx-auto font-normal">
            Explore our diversified Portfolio of Glass &amp; Aluminium Work.
          </p>
        </div>

        {/* ========================================================
            3-Card Carousel exactly matching image_70bc40a7.png
           ======================================================== */}
        <div className="relative">
          {/* Cards Grid / Slider */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-center">
            {visibleCards.map(({ item, position, originalIndex }) => (
              <motion.div
                key={`${item.id}-${originalIndex}-${position}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                onClick={() => setSelectedItem(item)}
                className={`group cursor-pointer relative aspect-square w-full rounded-3xl overflow-hidden bg-slate-100 shadow-xs hover:shadow-xl transition-all duration-300 ${
                  position !== 'center' ? 'hidden md:block' : 'block'
                }`}
              >
                {/* Clean Project Image matching image_70bc40a7.png */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-104 transition-transform duration-500 rounded-3xl"
                  priority={position === 'center'}
                  referrerPolicy="no-referrer"
                />

                {/* Subtle Hover Gradient & Info Bar */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white rounded-3xl">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                    {item.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold leading-tight mt-0.5">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{item.location}</span>
                  </div>
                  <span className="text-xs text-white/90 font-semibold underline mt-2">
                    Click to view details &rarr;
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ========================================================
              9 Pagination Dots exactly matching image_70bc40a7.png
              • • • • ● • • • •
             ======================================================== */}
          <div className="flex items-center justify-center gap-2.5 mt-8 sm:mt-10">
            {PORTFOLIO_ITEMS.map((_, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`transition-all duration-300 rounded-full cursor-pointer focus:outline-hidden ${
                    isActive
                      ? 'w-2.5 h-2.5 bg-slate-900 scale-125'
                      : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                  aria-current={isActive ? 'true' : 'false'}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* ========================================================
          Interactive Modal Lightbox for Project Inspection
         ======================================================== */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-slate-200"
            >
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden mb-5 bg-slate-100 border border-slate-200">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-1">
                <span>{selectedItem.category}</span>
                <span>·</span>
                <span className="flex items-center gap-1 text-slate-500">
                  <MapPin className="w-3.5 h-3.5" />
                  {selectedItem.location}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                {selectedItem.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                {selectedItem.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5">
                  Fabrication Specifications
                </h4>
                <div className="grid grid-cols-1 gap-2 text-xs text-slate-700">
                  {selectedItem.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-200">
                <a
                  href={`https://wa.me/923202740066?text=Hi%20Basit%20Ali%20Aluminum%2C%20I%20saw%20your%20portfolio%20project%20'${encodeURIComponent(
                    selectedItem.title
                  )}'%20and%20would%20like%20a%20similar%20quotation%20in%20Lahore.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-1/2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-sm text-center flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire on WhatsApp</span>
                </a>
                <a
                  href={`tel:${CLIENT_INFO.phoneRaw}`}
                  className="w-full sm:w-1/2 py-3 px-4 bg-slate-900 hover:bg-black text-white font-bold text-xs rounded-sm text-center flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call {CLIENT_INFO.phone}</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
