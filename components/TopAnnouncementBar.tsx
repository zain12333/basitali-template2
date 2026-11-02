'use client';

import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { CLIENT_INFO } from '@/lib/data';

export default function TopAnnouncementBar() {
  return (
    <div className="bg-slate-950 text-slate-300 text-xs border-b border-slate-800 hidden md:block">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between gap-4">
        {/* Left: Location & Emergency */}
        <div className="flex items-center gap-4 text-xs font-medium">
          <span className="flex items-center gap-1.5 text-amber-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>24/7 Emergency Glass Repair in Lahore</span>
          </span>
          <span className="text-slate-600">·</span>
          <span className="flex items-center gap-1.5 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span>Serving All Lahore (DHA, Gulberg, Bahria Town & all areas)</span>
          </span>
        </div>

        {/* Right: Working Hours, Phone, WhatsApp */}
        <div className="flex items-center gap-6 text-xs">
          <span className="flex items-center gap-1.5 text-slate-400">
            <Clock className="w-3.5 h-3.5" />
            <span>Mon–Sun 8am–9pm</span>
          </span>
          <span className="text-slate-600">·</span>
          <a
            href={`tel:${CLIENT_INFO.phoneRaw}`}
            className="flex items-center gap-1.5 font-semibold text-white hover:text-amber-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>Call: {CLIENT_INFO.phone}</span>
          </a>
          <span className="text-slate-600">·</span>
          <a
            href={CLIENT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </div>
  );
}
