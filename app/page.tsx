import React from 'react';
import TopAnnouncementBar from '@/components/TopAnnouncementBar';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import PortfolioCarousel from '@/components/PortfolioCarousel';
import SeasonWeatherInteractive from '@/components/SeasonWeatherInteractive';
import FeaturePillars from '@/components/FeaturePillars';
import CustomerReviews from '@/components/CustomerReviews';
import SpecializedSystems from '@/components/SpecializedSystems';
import ColorFinishes from '@/components/ColorFinishes';
import ProjectsGallery from '@/components/ProjectsGallery';
import SmartAutomation from '@/components/SmartAutomation';
import WarrantyFinancing from '@/components/WarrantyFinancing';
import ConsultationForm from '@/components/ConsultationForm';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-slate-900 overflow-x-hidden">
      {/* 1. Header with Centered Logo (Pic 1) & Sticky Floating Navbar on Scroll (Pic 2) */}
      <Navbar />

      {/* 3. Hero Section with Pergomatic Signature Bottom Dock */}
      <Hero />

      {/* 4. Products & Core Services Grid */}
      <ServicesGrid />

      {/* 5. Our Portfolio - Interactive Project Carousel matching image_70bc40a7.png */}
      <PortfolioCarousel />

      {/* 6. Made for Every Season Interactive Weather Switcher */}
      <SeasonWeatherInteractive />

      {/* 6. Market-Leading Quality Pillars */}
      <FeaturePillars />

      {/* 7. Hear From Our Satisfied Customers & Video Spotlight */}
      <CustomerReviews />

      {/* 8. Side Enclosures & Advanced Glazing Systems */}
      <SpecializedSystems />

      {/* 9. Customise Color Option & Finishes */}
      <ColorFinishes />

      {/* 11. Recent Residential & Commercial Projects */}
      <ProjectsGallery />

      {/* 12. Smart Automation & Smartphone Control */}
      <SmartAutomation />

      {/* 13. Transparent Direct Pricing & Comprehensive Warranty */}
      <WarrantyFinancing />

      {/* 14. Free On-Site Consultation Booking Form */}
      <ConsultationForm />

      {/* 15. Frequently Asked Questions (FAQ) Accordion */}
      <FAQSection />

      {/* 16. Comprehensive Footer */}
      <Footer />

      {/* 19. Floating WhatsApp & Direct Dial Conversion Widget */}
      <FloatingWhatsApp />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  );
}
