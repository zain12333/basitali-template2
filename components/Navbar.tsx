'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { CLIENT_INFO } from '@/lib/data';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById('hero');
      if (heroEl) {
        const heroBottom = heroEl.offsetTop + heroEl.offsetHeight;
        setIsScrolled(window.scrollY >= heroBottom);
      } else {
        setIsScrolled(window.scrollY > 120);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ========================================================
          STATE 1: Top Bar with Centered Logo (Pic 1 - image_e68e9262.png)
          Visible when user is at the top of page
         ======================================================== */}
      <div className="w-full bg-white border-b border-slate-100 py-3.5 px-6 relative z-30 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between sm:justify-center relative">
          {/* Centered Brand & Logo mirroring Pergomatic Pic 1 */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-hidden"
            aria-label="Basit Ali Aluminium & Glass Home"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 overflow-hidden flex items-center justify-center">
              <Image
                src={CLIENT_INFO.logoPath}
                alt="Basit Ali Aluminium & Glass"
                width={48}
                height={48}
                className="w-full h-full object-contain"
                priority
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-left sm:text-center">
              <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 uppercase block leading-none">
                Basit Ali
              </span>
              <span className="text-[10px] sm:text-xs font-bold tracking-widest text-slate-600 uppercase block mt-0.5">
                Aluminium & Glass Work
              </span>
            </div>
          </a>

          {/* Quick Phone Call Pill on top right for convenience */}
          <div className="hidden md:flex items-center gap-3 absolute right-0 top-1/2 -translate-y-1/2 text-xs">
            <a
              href={`tel:${CLIENT_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 font-bold text-slate-800 hover:text-amber-600 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>0320-2740066</span>
            </a>
          </div>

          {/* Mobile hamburger on top right when not scrolled */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-800 hover:text-black focus:outline-hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ========================================================
          STATE 2: Floating Sticky Navbar on Scroll (Pic 2 - image_c396806a.png)
          Slides in as a floating white card centered at top of viewport
         ======================================================== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'opacity-100 translate-y-0 sm:pt-3'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="max-w-6xl mx-auto px-3 sm:px-6">
          <div className="bg-white/98 backdrop-blur-md shadow-xl border border-slate-200/90 rounded-none sm:rounded-md px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-4">
            {/* Left: Brand Logo & Wordmark */}
            <a href="#hero" className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group">
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 overflow-hidden flex items-center justify-center shrink-0">
                <Image
                  src={CLIENT_INFO.logoPath}
                  alt="Basit Ali Aluminium & Glass"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xs sm:text-sm font-black tracking-tight text-slate-900 uppercase">
                  Basit Ali
                </span>
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                  Aluminium & Glass
                </span>
              </div>
            </a>

            {/* Middle: Links mirroring Pergomatic Pic 2 */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-xs font-medium uppercase tracking-wider text-slate-700">
              <a href="#hero" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
                Home
              </a>
              <a href="#about" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
                About Us
              </a>
              <a href="#portfolio" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
                Portfolio
              </a>
              <a href="#commercial" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
                Commercial
              </a>
              <a href="#warranty" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
                Warranty
              </a>

              {/* PRODUCTS link with Pergomatic-style thin rectangle outline box */}
              <a
                href="#services"
                className="border border-slate-700/80 hover:border-slate-950 px-3.5 py-1.5 rounded-xs text-slate-900 transition-colors whitespace-nowrap shrink-0"
              >
                Products
              </a>
            </nav>

            {/* Right: GET A QUOTE button mirroring Pergomatic Pic 2 */}
            <div className="flex items-center gap-2.5 shrink-0">
              <a
                href={CLIENT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-3 py-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 text-xs font-bold rounded-xs transition-colors"
                title="WhatsApp Direct"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span className="hidden md:inline">WhatsApp</span>
              </a>

              <a
                href="#consultation"
                className="px-4 sm:px-5 py-2 bg-[#24292e] hover:bg-black text-white font-extrabold text-xs uppercase tracking-wider rounded-xs transition-colors whitespace-nowrap shrink-0 shadow-xs"
              >
                Get a Quote
              </a>

              {/* Mobile Menu trigger inside floating bar */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-1.5 text-slate-700 hover:text-black focus:outline-hidden ml-1"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ========================================================
          Mobile Drawer Menu (Accessible in both states)
         ======================================================== */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 z-[59] bg-black/30 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-x-0 top-0 z-[60] bg-white border-b border-slate-200 shadow-2xl lg:hidden">
            {/* Close button row */}
            <div className="flex items-center justify-between px-6 py-3.5 border-b border-slate-100">
              <a href="#hero" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                <div className="relative w-11 h-11 overflow-hidden flex items-center justify-center">
                  <Image
                    src={CLIENT_INFO.logoPath}
                    alt="Basit Ali Aluminium & Glass"
                    width={44}
                    height={44}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-left">
                  <span className="text-base font-black tracking-tight text-slate-900 uppercase block leading-none">Basit Ali</span>
                  <span className="text-[10px] font-bold tracking-widest text-slate-600 uppercase block mt-0.5">Aluminium & Glass Work</span>
                </div>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-slate-800 hover:text-black focus:outline-hidden"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-4 max-h-[calc(100vh-72px)] overflow-y-auto">
          <nav className="flex flex-col space-y-3 text-xs font-bold uppercase tracking-wider text-slate-800">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-amber-600 border-b border-slate-100"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-amber-600 border-b border-slate-100"
            >
              Products & Services
            </a>
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-amber-600 border-b border-slate-100"
            >
              Our Portfolio
            </a>
            <a
              href="#commercial"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-amber-600 border-b border-slate-100"
            >
              Commercial Projects
            </a>
            <a
              href="#warranty"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-amber-600 border-b border-slate-100"
            >
              Warranty & Guarantees
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-amber-600 border-b border-slate-100"
            >
              About Us & Quality
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-amber-600"
            >
              FAQ
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href={`tel:${CLIENT_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold rounded-sm border border-slate-300 text-slate-800"
            >
              <Phone className="w-4 h-4 text-amber-500" />
              <span>Call: {CLIENT_INFO.phone}</span>
            </a>
            <a
              href={CLIENT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold rounded-sm bg-emerald-600 text-white"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </a>
            <a
              href="#consultation"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center py-2.5 px-4 text-xs font-bold rounded-sm bg-slate-950 text-white"
            >
              Get Free Measurement & Quote
            </a>
          </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
