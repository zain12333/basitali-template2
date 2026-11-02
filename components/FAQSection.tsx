'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '@/lib/data';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // First item open by default like Pergomatic image

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column mirroring Pergomatic image_e1e00a15.png */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-semibold tracking-wider uppercase text-amber-600 block">
              Clear Answers
            </span>
            <h2 className="text-[28px] leading-[36px] lg:text-[40px] lg:leading-[48px] font-bold text-slate-900">
              Frequently Asked <span className="font-extrabold text-slate-950">Questions</span>
            </h2>
            <p className="text-base leading-6 text-slate-600 max-w-sm">
              Everything you need to know before choosing your aluminum windows, doors, and glass installations in Lahore.
            </p>
            <div className="pt-4">
              <a
                href="#consultation"
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 hover:text-amber-800"
              >
                <span>Have a custom question? Speak to our fabricator</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>

          {/* Right Column: Accordion List mirroring Pergomatic */}
          <div className="lg:col-span-7 space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 overflow-hidden bg-white transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full p-5 text-left text-sm font-bold text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span className="text-slate-500 shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
