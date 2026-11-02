'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, MessageCircle, Mail, MapPin, ShieldAlert } from 'lucide-react';
import { CLIENT_INFO } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-slate-900">
          {/* Brand & Contact Column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-slate-800 bg-white p-1">
                <Image
                  src={CLIENT_INFO.logoPath}
                  alt="Basit Ali Aluminium & Glass"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-lg font-bold text-white block">
                  Basit Ali Aluminium & Glass
                </span>
                <span className="text-xs text-amber-400 font-medium">
                  Professional Aluminum & Glass Services · Lahore
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Providing premier architectural aluminum windows, frameless glass partitions, luxury shower cubicles, shopfronts, and 24/7 emergency glass repair across all of Lahore.
            </p>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${CLIENT_INFO.phoneRaw}`} className="hover:text-white font-semibold">
                  {CLIENT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={CLIENT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 font-semibold"
                >
                  WhatsApp: {CLIENT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a
                  href={`mailto:${CLIENT_INFO.email}`}
                  className="hover:text-white truncate"
                >
                  {CLIENT_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Service Area: All Over Lahore (DHA, Gulberg, Bahria & Cantt)</span>
              </div>
            </div>
          </div>

          {/* Column 1: Resources mirroring Pergomatic */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Resources
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Residential Portfolio</a>
              </li>
              <li>
                <a href="#commercial" className="hover:text-white transition-colors">Commercial Glazing</a>
              </li>
              <li>
                <a href="#configurator" className="hover:text-white transition-colors">3D Interactive Configurator</a>
              </li>
              <li>
                <a href="#warranty" className="hover:text-white transition-colors">10-Year Warranty</a>
              </li>
              <li>
                <a href="#consultation" className="hover:text-white transition-colors">Free Laser Measurement</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Frequently Asked Questions</a>
              </li>
            </ul>
          </div>

          {/* Column 2: Products mirroring Pergomatic */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Services & Products
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">Aluminum Windows & Doors</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Glass Doors & Partitions</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Bespoke Shower Cabins</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Shop Fronts & Facades</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Curtain Wall Glazing</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Vertical Blinds & Shading</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Mirrors & 24/7 Glass Repair</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Lahore Coverage & Emergency */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Coverage & Emergency
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>DHA Lahore (Phases 1-9)</li>
              <li>Gulberg I, II & III</li>
              <li>Bahria Town Lahore</li>
              <li>Lahore Cantt & Askari</li>
              <li>Johar Town & Faisal Town</li>
              <li>Model Town & Garden Town</li>
            </ul>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-bold bg-amber-950/60 border border-amber-800/60 px-3 py-1.5 rounded">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>24/7 Emergency Dispatch</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar mirroring Pergomatic */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Basit Ali Aluminum & Glass Work. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Quality Work</span>
            <span>·</span>
            <span className="hover:text-slate-400 cursor-pointer">Affordable Factory Rates</span>
            <span>·</span>
            <span className="hover:text-slate-400 cursor-pointer">On-Time Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
