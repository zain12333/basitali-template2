'use client';

import React from 'react';
import { ShieldCheck, CheckCircle2, Clock, DollarSign, Award, ArrowRight } from 'lucide-react';
import { CLIENT_INFO } from '@/lib/data';

export default function WarrantyFinancing() {
  return (
    <section id="warranty" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {/* Transparent Pricing & Guarantee Strip mirroring Pergomatic Finance Your Purchase */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-wider uppercase text-amber-600 block mb-2">
              Value Without Compromise
            </span>
            <h2 className="text-[28px] leading-[36px] lg:text-[40px] lg:leading-[48px] font-bold text-slate-900 mb-3">
              Direct Factory Pricing & <span className="font-extrabold text-slate-950">Guarantees</span>
            </h2>
            <p className="text-base leading-6 text-slate-600">
              We make it straightforward and affordable to upgrade your residential or commercial property in Lahore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center">
              <div className="w-12 h-12 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-1">Affordable Factory Rates</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct workshop fabrication saves you up to 25% compared to commercial showroom intermediaries.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center">
              <div className="w-12 h-12 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-1">Free On-Site Measurement</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero fees for initial site visits, laser dimensioning, and design consultations anywhere in Lahore.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center">
              <div className="w-12 h-12 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-1">On-Time Completion</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Committed delivery schedules with guaranteed completion dates for residential and commercial contracts.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center">
              <div className="w-12 h-12 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-1">24/7 Emergency Repairs</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Round-the-clock emergency replacement for broken shop windows, doors, and cracked shower glass.
              </p>
            </div>
          </div>
        </div>

        {/* 10-15 Year Warranty Feature Card mirroring Pergomatic image_29d901c8.png */}
        <div className="bg-slate-950 text-white rounded-2xl p-8 sm:p-12 border border-slate-800 shadow-xl max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            {/* Warranty Badge Circle mirroring Pergomatic */}
            <div className="w-20 h-20 rounded-full border-2 border-amber-400 flex flex-col items-center justify-center text-amber-400 shrink-0">
              <ShieldCheck className="w-7 h-7 mb-0.5" />
              <span className="text-[10px] font-black uppercase tracking-wider">10-15 YR</span>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Basit Ali Comprehensive Warranty
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed">
                Enjoy complete peace of mind. Our aluminum extrusions, powder-coat finishes, and structural glass installations are backed by an extensive multi-year manufacturer and craftsmanship warranty against chipping, leaking, and structural fatigue.
              </p>
            </div>
          </div>

          <a
            href="#consultation"
            className="px-6 py-3 bg-white text-slate-950 hover:bg-slate-200 text-xs font-bold uppercase tracking-wider rounded-md transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
