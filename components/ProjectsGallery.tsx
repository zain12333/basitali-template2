'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, X, ArrowRight, CheckCircle2, PhoneCall } from 'lucide-react';
import { RESIDENTIAL_PROJECTS, COMMERCIAL_PROJECTS, ProjectItem, CLIENT_INFO } from '@/lib/data';

export default function ProjectsGallery() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [showAllModal, setShowAllModal] = useState<'residential' | 'commercial' | null>(null);
  const [residentialPage, setResidentialPage] = useState(0);
  const [commercialPage, setCommercialPage] = useState(0);

  // 4 pages mapping to slice of 3 projects (with rollover)
  const getVisibleProjects = (projects: ProjectItem[], pageIndex: number) => {
    const total = projects.length;
    const startIndex = (pageIndex * 2) % total;
    const result: ProjectItem[] = [];
    for (let i = 0; i < 3; i++) {
      result.push(projects[(startIndex + i) % total]);
    }
    return result;
  };

  const visibleResidential = getVisibleProjects(RESIDENTIAL_PROJECTS, residentialPage);
  const visibleCommercial = getVisibleProjects(COMMERCIAL_PROJECTS, commercialPage);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#f6f5f3] border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-24">
        
        {/* ================= RESIDENTIAL PROJECTS (Matching image_4b65b2fd.png 1:1) ================= */}
        <div>
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <h2 className="text-[28px] leading-[36px] lg:text-[40px] lg:leading-[48px] font-normal text-[#1a202c]">
                Our Recent <span className="font-bold">Residential Projects</span>
              </h2>
              <p className="text-base leading-6 text-[#718096] mt-2 max-w-xl">
                Explore our gallery to see the beautiful pergolas we&apos;ve brought to life in home patios and gardens.
              </p>
            </div>
            <button
              onClick={() => setShowAllModal('residential')}
              className="bg-[#24292e] hover:bg-[#11161a] text-white font-bold text-xs uppercase tracking-wider px-6 py-3 transition-colors shrink-0 self-start sm:self-auto cursor-pointer"
            >
              SEE ALL PROJECTS
            </button>
          </div>

          {/* 3 Large Clean Portrait Cards (No badges, no bottom cards - exactly as pic 1) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            <AnimatePresence mode="wait">
              {visibleResidential.map((project, idx) => (
                <motion.div
                  key={`${residentialPage}-${project.id}-${idx}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  onClick={() => setSelectedProject(project)}
                  className="group relative cursor-pointer overflow-hidden bg-neutral-200 aspect-[3/4] shadow-xs"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-600 ease-out"
                    referrerPolicy="no-referrer"
                    priority={idx === 0}
                  />
                  {/* Subtle clean hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
                  
                  {/* Subtle hover icon prompt */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="bg-[#24292e]/90 text-white text-xs font-semibold px-3 py-1.5 backdrop-blur-xs tracking-wider uppercase">
                      View Project
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* 4 Centered Carousel Dots (Matching pic 1: ● ○ ○ ○) */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {[0, 1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => setResidentialPage(page)}
                className={`transition-all duration-300 cursor-pointer rounded-full ${
                  residentialPage === page
                    ? 'w-2 h-2 bg-[#24292e]'
                    : 'w-2 h-2 bg-[#d1d5db] hover:bg-[#9ca3af]'
                }`}
                aria-label={`Residential slide ${page + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ================= COMMERCIAL PROJECTS (Matching image_4b65b2fd.png 1:1) ================= */}
        <div id="commercial" className="pt-4">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <h2 className="text-[28px] leading-[36px] lg:text-[40px] lg:leading-[48px] font-normal text-[#1a202c]">
                Our Recent <span className="font-bold">Commercial Projects</span>
              </h2>
              <p className="text-base leading-6 text-[#718096] mt-2 max-w-xl">
                Explore our gallery to see commercial curtain walls, spider glazed retail fronts, and corporate glass partitions engineered for Lahore business hubs.
              </p>
            </div>
            <button
              onClick={() => setShowAllModal('commercial')}
              className="bg-[#24292e] hover:bg-[#11161a] text-white font-bold text-xs uppercase tracking-wider px-6 py-3 transition-colors shrink-0 self-start sm:self-auto cursor-pointer"
            >
              SEE ALL PROJECTS
            </button>
          </div>

          {/* 3 Large Clean Portrait Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            <AnimatePresence mode="wait">
              {visibleCommercial.map((project, idx) => (
                <motion.div
                  key={`${commercialPage}-${project.id}-${idx}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  onClick={() => setSelectedProject(project)}
                  className="group relative cursor-pointer overflow-hidden bg-neutral-200 aspect-[3/4] shadow-xs"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-600 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle clean hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />

                  {/* Subtle hover icon prompt */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="bg-[#24292e]/90 text-white text-xs font-semibold px-3 py-1.5 backdrop-blur-xs tracking-wider uppercase">
                      View Project
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* 4 Centered Carousel Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {[0, 1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => setCommercialPage(page)}
                className={`transition-all duration-300 cursor-pointer rounded-full ${
                  commercialPage === page
                    ? 'w-2 h-2 bg-[#24292e]'
                    : 'w-2 h-2 bg-[#d1d5db] hover:bg-[#9ca3af]'
                }`}
                aria-label={`Commercial slide ${page + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ================= PROJECT DETAIL LIGHTBOX MODAL ================= */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.2 }}
                className="bg-white max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl border border-neutral-200"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-900 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative aspect-[16/10] overflow-hidden mb-6 bg-neutral-100">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex items-center gap-2 text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">
                  <span className="capitalize">{selectedProject.category} Project</span>
                  <span>·</span>
                  <span>Completed {selectedProject.completionYear}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2">
                  {selectedProject.title}
                </h3>

                <p className="text-xs text-neutral-500 mb-4 flex items-center gap-1.5 font-medium">
                  <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{selectedProject.location}</span>
                </p>

                <div className="text-sm text-neutral-700 mb-6 bg-[#f6f5f3] p-4 border border-neutral-200/80 leading-relaxed">
                  <p className="font-semibold text-neutral-900 mb-1">Project Scope &amp; Engineering:</p>
                  <p>{selectedProject.scope}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/923202740066?text=Hi%20Basit%20Ali%20Aluminum%20%26%20Glass%2C%20I%20saw%20your%20project%20in%20${encodeURIComponent(
                      selectedProject.location
                    )}%20(${encodeURIComponent(selectedProject.title)}).%20I%20would%20like%20a%20free%20measurement%20and%20quotation.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Inquire on WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 border border-neutral-300 hover:bg-neutral-100 text-neutral-800 font-semibold text-xs uppercase tracking-wider transition-colors"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* ================= SEE ALL PROJECTS MODAL ================= */}
        <AnimatePresence>
          {showAllModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xs">
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 12 }}
                transition={{ duration: 0.2 }}
                className="bg-white max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl"
              >
                <div className="flex items-center justify-between border-b border-neutral-200 pb-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#1a202c]">
                      All {showAllModal === 'residential' ? 'Residential' : 'Commercial'} Projects
                    </h3>
                    <p className="text-xs text-[#718096] mt-1">
                      Basit Ali Aluminum &amp; Glass Work · Service across all Lahore areas
                    </p>
                  </div>
                  <button
                    onClick={() => setShowAllModal(null)}
                    className="p-2 text-neutral-400 hover:text-neutral-900 transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(showAllModal === 'residential' ? RESIDENTIAL_PROJECTS : COMMERCIAL_PROJECTS).map((proj) => (
                    <div
                      key={proj.id}
                      onClick={() => {
                        setSelectedProject(proj);
                      }}
                      className="group cursor-pointer bg-white border border-neutral-200 overflow-hidden hover:border-neutral-900 transition-colors"
                    >
                      <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
                        <Image
                          src={proj.image}
                          alt={proj.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-1.5 text-xs text-neutral-500 mb-1">
                          <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="font-medium">{proj.location}</span>
                        </div>
                        <h4 className="font-bold text-sm text-[#1a202c] group-hover:text-amber-700 transition-colors">
                          {proj.title}
                        </h4>
                        <p className="text-xs text-neutral-500 mt-1 line-clamp-2 leading-relaxed">
                          {proj.scope}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-neutral-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Free on-site measurement &amp; quote in Lahore: <strong>{CLIENT_INFO.phone}</strong></span>
                  </div>
                  <a
                    href={`https://wa.me/923202740066?text=Hi%20Basit%20Ali%2C%20I%20am%20interested%20in%20discussing%20a%20project%20in%20Lahore.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#24292e] hover:bg-black text-white font-bold text-xs uppercase tracking-wider px-6 py-3 transition-colors"
                  >
                    Contact on WhatsApp
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
