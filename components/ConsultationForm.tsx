'use client';

import React, { useState } from 'react';
import { UploadCloud, CheckCircle2, MessageCircle, AlertCircle, PhoneCall } from 'lucide-react';
import { CLIENT_INFO, LAHORE_AREAS } from '@/lib/data';

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    type: 'Aluminum Windows & Doors',
    address: '',
    message: '',
    fileName: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.address.trim()) {
      setError('Please fill in your Name, Phone Number, and Lahore Address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleFileSimulate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setIsUploading(true);
      const file = e.target.files[0];
      setTimeout(() => {
        setFormData((prev) => ({ ...prev, fileName: file.name }));
        setIsUploading(false);
      }, 500);
    }
  };

  const whatsappInquiryUrl = `https://wa.me/923202740066?text=Hi%20Basit%20Ali%20Aluminum%2C%0A%0AMy%20name%20is%20${encodeURIComponent(
    formData.name || 'Client'
  )}.%0APhone%3A%20${encodeURIComponent(
    formData.phone || 'N/A'
  )}%0AService%20Needed%3A%20${encodeURIComponent(
    formData.type
  )}%0AAddress%20in%20Lahore%3A%20${encodeURIComponent(
    formData.address || 'Lahore'
  )}%0AMessage%3A%20${encodeURIComponent(
    formData.message || 'I would like to arrange a free on-site measurement.'
  )}`;

  return (
    <section id="consultation" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header mirroring Pergomatic image_dac9adc3.png */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-[28px] leading-[36px] lg:text-[40px] lg:leading-[48px] font-bold text-slate-900 mb-3">
            Interested in a <span className="font-extrabold text-slate-950">Free On-site Consultation?</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Discover how our custom aluminum and glass solutions can elevate your residential or commercial project.
          </p>
        </div>

        {/* Form Card mirroring Pergomatic */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-10">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Consultation Request Received!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Our technician will call you at{' '}
                <strong>{formData.phone}</strong> shortly to schedule your free on-site laser measurement in Lahore.
              </p>

              <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Directly to WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      type: 'Aluminum Windows & Doors',
                      address: '',
                      message: '',
                      fileName: '',
                    });
                  }}
                  className="w-full sm:w-auto px-6 py-3 border border-slate-300 text-slate-800 hover:bg-slate-50 font-semibold text-xs rounded-lg transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* 2-Column Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-medium text-slate-700 block mb-1.5">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-sm bg-white border border-slate-300 rounded-lg p-3 text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-700 block mb-1.5">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0320-2740066"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-sm bg-white border border-slate-300 rounded-lg p-3 text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
                  />
                </div>
              </div>

              {/* 2-Column Row 2: Email & Service Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-medium text-slate-700 block mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-sm bg-white border border-slate-300 rounded-lg p-3 text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-700 block mb-1.5">
                    Service Type
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full text-sm bg-white border border-slate-300 rounded-lg p-3 text-slate-900 focus:outline-hidden focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
                  >
                    <option value="Aluminum Windows & Doors">Aluminum Windows & Doors</option>
                    <option value="Glass Doors & Partitions">Glass Doors & Partitions</option>
                    <option value="Shower Cabins">Shower Cabins</option>
                    <option value="Shop Fronts & Curtain Walls">Shop Fronts & Curtain Walls</option>
                    <option value="Office Glass Work">Office Glass Work</option>
                    <option value="Tempered Glass Installation">Tempered Glass Installation</option>
                    <option value="Vertical Blinds">Vertical Blinds</option>
                    <option value="Emergency Glass Repair">24/7 Emergency Glass Repair</option>
                    <option value="Custom Aluminum Fabrication">Custom Aluminum Fabrication</option>
                  </select>
                </div>
              </div>

              {/* Address / Location in Lahore */}
              <div>
                <label className="text-xs font-medium text-slate-700 block mb-1.5">
                  Address in Lahore <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. House #, Street, Phase 5 DHA / Gulberg III, Lahore"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full text-sm bg-white border border-slate-300 rounded-lg p-3 text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-xs font-medium text-slate-700 block mb-1.5">
                  Project Message & Dimensions
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your project, rough dimensions, preferred aluminum color, or any specific requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full text-sm bg-white border border-slate-300 rounded-lg p-3 text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900 focus:ring-1 focus:ring-slate-900 resize-y"
                />
              </div>

              {/* File Upload Box mirroring Pergomatic */}
              <div className="relative border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:border-slate-400 transition-colors">
                <input
                  type="file"
                  id="file-upload"
                  className="sr-only"
                  onChange={handleFileSimulate}
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center justify-center gap-2"
                >
                  <UploadCloud className="w-8 h-8 text-slate-400" />
                  <span className="text-xs text-slate-600 font-medium">
                    {formData.fileName ? (
                      <span className="text-emerald-700 font-bold">Attached: {formData.fileName}</span>
                    ) : isUploading ? (
                      <span>Uploading architectural drawing / photo...</span>
                    ) : (
                      <span>Drop your blueprints or site photos here · Maximum allowed size 20 MB</span>
                    )}
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-md cursor-pointer"
              >
                Submit Consultation Request
              </button>

              <div className="text-center">
                <span className="text-[11px] text-slate-500">
                  Or call directly at{' '}
                  <a
                    href={`tel:${CLIENT_INFO.phoneRaw}`}
                    className="font-bold text-slate-900 hover:underline"
                  >
                    0320-2740066
                  </a>{' '}
                  for immediate same-day site visits.
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
