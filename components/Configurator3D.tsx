'use client';

import React, { useState, useMemo } from 'react';
import { Sliders, Check, MessageCircle, Send, Sparkles, RefreshCw, Info } from 'lucide-react';
import { CLIENT_INFO } from '@/lib/data';

interface SystemOption {
  id: string;
  name: string;
  baseRatePerSqFt: number; // PKR per sq ft
  defaultWidth: number;
  defaultHeight: number;
  panelsMin: number;
  panelsMax: number;
}

const SYSTEMS: SystemOption[] = [
  {
    id: 'sliding-window',
    name: 'Aluminum Sliding Window',
    baseRatePerSqFt: 1450,
    defaultWidth: 8,
    defaultHeight: 5,
    panelsMin: 2,
    panelsMax: 4,
  },
  {
    id: 'glass-partition',
    name: 'Frameless Glass Partition',
    baseRatePerSqFt: 1850,
    defaultWidth: 12,
    defaultHeight: 9,
    panelsMin: 2,
    panelsMax: 6,
  },
  {
    id: 'shower-cabin',
    name: 'Luxury Shower Enclosure',
    baseRatePerSqFt: 2200,
    defaultWidth: 5,
    defaultHeight: 7,
    panelsMin: 2,
    panelsMax: 3,
  },
  {
    id: 'shopfront-curtain',
    name: 'Commercial Shopfront / Curtain Wall',
    baseRatePerSqFt: 2600,
    defaultWidth: 16,
    defaultHeight: 10,
    panelsMin: 3,
    panelsMax: 8,
  },
];

const FINISHES = [
  { id: 'black', name: 'Matte Black', hex: '#1C1C1E', rateMultiplier: 1.0 },
  { id: 'charcoal', name: 'Charcoal Grey', hex: '#374151', rateMultiplier: 1.0 },
  { id: 'champagne', name: 'Champagne Gold', hex: '#C2A374', rateMultiplier: 1.1 },
  { id: 'wood', name: 'Walnut Wood Grain', hex: '#5c3317', rateMultiplier: 1.2 },
  { id: 'silver', name: 'Silver Anodized', hex: '#94A3B8', rateMultiplier: 0.98 },
];

const GLASS_TYPES = [
  { id: '10mm-clear', name: '10mm Clear Tempered', tint: 'rgba(215, 235, 245, 0.25)', rateAdd: 0 },
  { id: '12mm-ultra', name: '12mm Low-Iron Ultra Clear', tint: 'rgba(235, 248, 255, 0.15)', rateAdd: 350 },
  { id: 'frosted', name: 'Frosted Acid-Etched Privacy', tint: 'rgba(240, 240, 240, 0.75)', rateAdd: 200 },
  { id: 'tinted-charcoal', name: 'Tinted Charcoal Solar Glass', tint: 'rgba(40, 45, 55, 0.55)', rateAdd: 280 },
  { id: 'double-glazed', name: 'Double Glazed Acoustic (6+12+6)', tint: 'rgba(200, 230, 245, 0.4)', rateAdd: 650 },
];

export default function Configurator3D() {
  const [selectedSystemId, setSelectedSystemId] = useState<string>('sliding-window');
  const activeSystem = SYSTEMS.find((s) => s.id === selectedSystemId) || SYSTEMS[0];

  const [width, setWidth] = useState<number>(activeSystem.defaultWidth);
  const [height, setHeight] = useState<number>(activeSystem.defaultHeight);
  const [panels, setPanels] = useState<number>(2);
  const [selectedFinishId, setSelectedFinishId] = useState<string>('black');
  const [selectedGlassId, setSelectedGlassId] = useState<string>('10mm-clear');

  const activeFinish = FINISHES.find((f) => f.id === selectedFinishId) || FINISHES[0];
  const activeGlass = GLASS_TYPES.find((g) => g.id === selectedGlassId) || GLASS_TYPES[0];

  // Price Calculation
  const calculation = useMemo(() => {
    const totalSqFt = width * height;
    const basePrice = totalSqFt * activeSystem.baseRatePerSqFt * activeFinish.rateMultiplier;
    const glassPrice = totalSqFt * activeGlass.rateAdd;
    const estimatedTotal = Math.round(basePrice + glassPrice);

    return {
      totalSqFt,
      estimatedTotal,
    };
  }, [width, height, activeSystem, activeFinish, activeGlass]);

  const handleSystemChange = (id: string) => {
    setSelectedSystemId(id);
    const sys = SYSTEMS.find((s) => s.id === id);
    if (sys) {
      setWidth(sys.defaultWidth);
      setHeight(sys.defaultHeight);
      setPanels(sys.panelsMin);
    }
  };

  const whatsappMessage = `Hello Basit Ali Aluminum, I configured a custom project on your website:
- System: ${activeSystem.name}
- Dimensions: ${width} ft (W) x ${height} ft (H) = ${calculation.totalSqFt} sq.ft
- Panels: ${panels} Panels
- Frame Finish: ${activeFinish.name}
- Glass Type: ${activeGlass.name}
- Estimated Lahore Budget: PKR ${calculation.estimatedTotal.toLocaleString()}
Please confirm free on-site measurement availability.`;

  const encodedWhatsapp = `https://wa.me/923202740066?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="configurator" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header mirroring Pergomatic */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-amber-600 block mb-2">
            Interactive Estimation
          </span>
          <h2 className="text-[28px] leading-[36px] lg:text-[40px] lg:leading-[48px] font-bold text-slate-900 mb-3">
            Design Your System With <span className="font-extrabold text-slate-950">Interactive Configurator</span>
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Customize system dimensions, aluminum profile colors, and tempered glass specifications to see an instant architectural wireframe and Lahore market price estimate.
          </p>
        </div>

        {/* Main Configurator Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Canvas: Live Interactive 2D/3D Wireframe Simulation */}
          <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col justify-between min-h-[500px]">
            {/* Canvas Header / Dimension Badge */}
            <div className="flex items-center justify-between text-xs text-slate-400 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="font-bold text-white uppercase tracking-wider">{activeSystem.name}</span>
              </div>
              <div className="font-mono text-amber-400 font-bold">
                {width}&apos; W × {height}&apos; H · {calculation.totalSqFt} sq.ft
              </div>
            </div>

            {/* Simulated Live CAD / Architectural Frame Rendering */}
            <div className="relative my-8 flex items-center justify-center p-6 bg-slate-900/50 rounded-xl border border-slate-800/80 min-h-[300px] overflow-hidden">
              {/* Architectural Grid Background */}
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)',
                  backgroundSize: '20px 20px',
                }}
              />

              {/* Dynamic Frame & Glass Canvas */}
              <div
                className="relative z-10 transition-all duration-300 flex shadow-2xl rounded-sm"
                style={{
                  width: `${Math.min(480, Math.max(220, (width / 20) * 440))}px`,
                  height: `${Math.min(300, Math.max(180, (height / 12) * 260))}px`,
                  border: `8px solid ${activeFinish.hex}`,
                  backgroundColor: activeFinish.hex,
                }}
              >
                {/* Render Panels */}
                {[...Array(panels)].map((_, i) => (
                  <div
                    key={i}
                    className="relative flex-1 h-full border-r last:border-r-0 transition-colors flex items-center justify-center overflow-hidden"
                    style={{
                      borderColor: activeFinish.hex,
                      backgroundColor: activeGlass.tint,
                      boxShadow: 'inset 0 0 15px rgba(0,0,0,0.15)',
                    }}
                  >
                    {/* Glass Reflection Highlight */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/20 pointer-events-none" />

                    {/* Handle Hardware */}
                    <div
                      className="w-1.5 h-12 rounded-sm shadow-sm transition-all"
                      style={{
                        backgroundColor: activeFinish.hex === '#1C1C1E' ? '#cbd5e1' : '#1C1C1E',
                      }}
                    />

                    {/* Panel Label */}
                    <span className="absolute bottom-2 text-[10px] text-slate-500 font-mono select-none">
                      P{i + 1}
                    </span>
                  </div>
                ))}

                {/* Dimension callouts */}
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[11px] font-mono text-slate-400 font-bold">
                  {width} FT
                </span>
                <span className="absolute -right-10 top-1/2 -translate-y-1/2 text-[11px] font-mono text-slate-400 font-bold rotate-90">
                  {height} FT
                </span>
              </div>
            </div>

            {/* Bottom Specs Ticker */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs pt-4 border-t border-slate-800 text-slate-300">
              <div>
                <span className="text-[10px] uppercase text-slate-500 font-semibold block">Alloy Finish</span>
                <span className="font-bold text-white truncate block">{activeFinish.name}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase text-slate-500 font-semibold block">Glass Spec</span>
                <span className="font-bold text-white truncate block">{activeGlass.name}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase text-slate-500 font-semibold block">Panels</span>
                <span className="font-bold text-white block">{panels} Glass Sections</span>
              </div>
              <div>
                <span className="text-[10px] uppercase text-slate-500 font-semibold block">Installation</span>
                <span className="font-bold text-emerald-400 block">All Lahore Included</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Controls & Instant Quote */}
          <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6">
            {/* System Type Selection */}
            <div>
              <label className="text-xs font-medium uppercase tracking-wider text-slate-900 block mb-2.5">
                1. Select System Type
              </label>
              <div className="grid grid-cols-1 gap-2">
                {SYSTEMS.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleSystemChange(s.id)}
                    className={`p-3 rounded-lg text-left text-xs font-semibold flex items-center justify-between border transition-all cursor-pointer ${
                      selectedSystemId === s.id
                        ? 'bg-slate-950 text-white border-slate-950 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    <span>{s.name}</span>
                    {selectedSystemId === s.id && <Check className="w-4 h-4 text-amber-400" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Dimensions Sliders */}
            <div className="space-y-4 pt-2 border-t border-slate-200">
              <label className="text-xs font-medium uppercase tracking-wider text-slate-900 block">
                2. Set Dimensions & Panels
              </label>

              {/* Width Slider */}
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Width: {width} Feet</span>
                  <span className="font-mono text-slate-500">{(width * 12).toFixed(0)} inches</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="24"
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value))}
                  className="w-full accent-slate-900 cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
              </div>

              {/* Height Slider */}
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Height: {height} Feet</span>
                  <span className="font-mono text-slate-500">{(height * 12).toFixed(0)} inches</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="12"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full accent-slate-900 cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
              </div>

              {/* Panels Selector */}
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                  <span>Configuration Panels</span>
                  <span className="font-mono text-slate-500">{panels} Sashes</span>
                </div>
                <div className="flex gap-2">
                  {[2, 3, 4, 6].map((p) => (
                    <button
                      key={p}
                      onClick={() => setPanels(p)}
                      className={`flex-1 py-1.5 text-xs font-bold rounded-md border cursor-pointer transition-colors ${
                        panels === p
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Frame Finish Swatches */}
            <div className="pt-2 border-t border-slate-200">
              <label className="text-xs font-medium uppercase tracking-wider text-slate-900 block mb-2">
                3. Aluminum Profile Color
              </label>
              <div className="flex flex-wrap gap-2.5">
                {FINISHES.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setSelectedFinishId(f.id)}
                    title={f.name}
                    className={`w-9 h-9 rounded-lg border-2 flex items-center justify-center transition-transform cursor-pointer ${
                      selectedFinishId === f.id
                        ? 'border-amber-500 scale-110 shadow-sm ring-2 ring-amber-500/30'
                        : 'border-slate-300 hover:scale-105'
                    }`}
                    style={{ backgroundColor: f.hex }}
                  >
                    {selectedFinishId === f.id && (
                      <Check
                        className={`w-4 h-4 ${
                          f.hex === '#1C1C1E' || f.hex === '#5c3317' ? 'text-white' : 'text-slate-900'
                        }`}
                      />
                    )}
                  </button>
                ))}
              </div>
              <span className="text-[11px] font-medium text-slate-600 block mt-1.5">
                Selected: <strong className="text-slate-900">{activeFinish.name}</strong>
              </span>
            </div>

            {/* Glass Type Dropdown */}
            <div className="pt-2 border-t border-slate-200">
              <label className="text-xs font-medium uppercase tracking-wider text-slate-900 block mb-2">
                4. Glass Specification
              </label>
              <select
                value={selectedGlassId}
                onChange={(e) => setSelectedGlassId(e.target.value)}
                className="w-full text-xs font-semibold bg-white border border-slate-300 rounded-lg p-2.5 text-slate-800 focus:outline-hidden focus:border-slate-900"
              >
                {GLASS_TYPES.map((g) => (
                  <option key={g.id} value={g.id}>
                    {g.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Estimated Price Box */}
            <div className="p-4 rounded-xl bg-slate-900 text-white space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Estimated Lahore Cost</span>
                <span className="text-[11px] text-amber-400 font-semibold flex items-center gap-1">
                  <Info className="w-3 h-3" />
                  Free On-Site Verification
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
                PKR {calculation.estimatedTotal.toLocaleString()}
              </div>
              <p className="text-[11px] text-slate-300 leading-tight">
                *Includes precision fabrication, certified glass, and on-site expert installation in Lahore. Final quote verified during free site visit.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2.5">
              <a
                href={encodedWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Specifications on WhatsApp</span>
              </a>
              <a
                href="#consultation"
                className="w-full py-3 px-4 bg-slate-950 hover:bg-slate-800 text-white font-semibold text-xs rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Schedule Free Laser Measurement</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
