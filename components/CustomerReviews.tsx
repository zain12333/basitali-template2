'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Star, Play, X, CheckCircle, MapPin } from 'lucide-react';
import { CLIENT_REVIEWS, CLIENT_INFO } from '@/lib/data';

export default function CustomerReviews() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Split: Video Spotlight + Section Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left: Video / Case Study Visual with Play Button */}
          <div className="lg:col-span-6">
            <div className="relative aspect-16/10 rounded-2xl overflow-hidden shadow-lg border border-slate-200 group bg-slate-950">
              <Image
                src="/assets/images/hero_aluminum_glass_villa_1793190402071.jpg"
                alt="Client Project in DHA Lahore"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/20 transition-colors" />

              {/* Play Button Trigger */}
              <button
                onClick={() => setVideoModalOpen(true)}
                className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/90 group-hover:bg-white text-slate-900 shadow-xl flex items-center justify-center transition-transform group-hover:scale-110 cursor-pointer"
                aria-label="Watch project video walkthrough"
              >
                <Play className="w-6 h-6 fill-slate-900 ml-1" />
              </button>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white bg-slate-950/70 backdrop-blur-xs px-3.5 py-2 rounded-lg">
                <span className="font-semibold">Featured Villa Installation · DHA Lahore</span>
                <span className="text-amber-400 font-bold">14ft Sliding Doors</span>
              </div>
            </div>
          </div>

          {/* Right: Copy & CTA mirroring Pergomatic */}
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-semibold tracking-wider uppercase text-amber-600 block">
              Proven Excellence
            </span>
            <h2 className="text-[28px] leading-[36px] lg:text-[40px] lg:leading-[48px] font-bold text-slate-900">
              Hear From Our <span className="font-extrabold text-slate-950">Satisfied Customers</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Discover how Basit Ali Aluminum & Glass transforms residences and commercial enterprises across Lahore. From contemporary DHA luxury villas to high-traffic Gulberg retail showrooms, our clients rely on our precision, prompt timelines, and unshakeable warranties.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our master fabricators ensure millimeter-exact laser measurement and spotless installation. Join hundreds of satisfied property owners across Lahore today!
            </p>

            <div className="pt-2">
              <a
                href="#projects"
                className="inline-block px-7 py-3.5 bg-slate-950 hover:bg-slate-800 text-white font-semibold text-xs tracking-wider uppercase rounded-md transition-colors"
              >
                Explore Projects
              </a>
            </div>
          </div>
        </div>

        {/* Bottom: 4 Google Review Cards mirroring Pergomatic */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLIENT_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Header: 5 Stars + Google text */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-400 tracking-wider">
                    Google
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs text-slate-700 leading-relaxed mb-4 line-clamp-4">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-slate-900 truncate">{review.name}</h4>
                  <p className="text-[11px] text-slate-500 truncate flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400 inline shrink-0" />
                    {review.area}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Walkthrough Modal */}
        {videoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
            <div className="bg-slate-900 rounded-2xl max-w-3xl w-full p-6 text-white relative border border-slate-800 shadow-2xl">
              <button
                onClick={() => setVideoModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-lg font-bold mb-2">Project Demonstration · DHA Lahore Residence</h3>
              <p className="text-xs text-slate-400 mb-4">
                Watch our custom 14-foot motorized sliding aluminum doors and frameless glass balustrades in action.
              </p>
              <div className="relative aspect-16/9 rounded-xl overflow-hidden bg-black flex items-center justify-center">
                <Image
                  src="/assets/images/hero_aluminum_glass_villa_1793190402071.jpg"
                  alt="Video walkthrough"
                  fill
                  className="object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="relative z-10 text-center p-6 bg-slate-950/80 rounded-xl max-w-md border border-slate-700">
                  <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto mb-2" />
                  <h4 className="font-bold text-sm">Site Installation Complete</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Heavy-duty roller tracks with silent glide, acoustic laminated double glazing, and precision matte black powder coat.
                  </p>
                  <a
                    href={CLIENT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-md"
                  >
                    Request Similar Installation
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
