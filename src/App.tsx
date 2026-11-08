/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { TrustBar } from './components/TrustBar.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { WhyChooseUs } from './components/WhyChooseUs.tsx';
import { AboutUs } from './components/AboutUs.tsx';
import { HowItWorks } from './components/HowItWorks.tsx';
import { ReviewsSection } from './components/ReviewsSection.tsx';
import { CtaBanner } from './components/CtaBanner.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { QuoteModal } from './components/QuoteModal.tsx';
import { MobileActionBar } from './components/MobileActionBar.tsx';
import { ServiceCategory } from './types.ts';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceCategory>('Residential Cleaning');

  const handleOpenQuote = (service?: ServiceCategory) => {
    if (service) {
      setSelectedService(service);
    }
    setIsQuoteModalOpen(true);
  };

  const handleSelectServiceFromSection = (service: ServiceCategory) => {
    setSelectedService(service);
    // Smooth scroll down to contact form or open modal for immediate booking
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsQuoteModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans antialiased selection:bg-teal-100 selection:text-teal-900 pb-16 md:pb-0">
      {/* Sticky Top Navigation */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenQuote={() => handleOpenQuote()} />

        {/* 4-Column Key Highlights Trust Bar */}
        <TrustBar />

        {/* Suggested Services Section */}
        <ServicesSection onSelectService={handleSelectServiceFromSection} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* About Us */}
        <AboutUs />

        {/* How It Works (3-Step Process) */}
        <HowItWorks onOpenQuote={() => handleOpenQuote()} />

        {/* Customer Reviews & Google Rating */}
        <ReviewsSection />

        {/* Conversion CTA Banner */}
        <CtaBanner onOpenQuote={() => handleOpenQuote()} />

        {/* Contact & Free Estimate Form */}
        <ContactSection
          preselectedService={selectedService}
          onClearPreselected={() => setSelectedService('Residential Cleaning')}
        />
      </main>

      {/* Footer */}
      <Footer
        onSelectService={handleSelectServiceFromSection}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Interactive Quick Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        defaultService={selectedService}
      />

      {/* Floating Sticky Mobile Quick Action Bar (<15% viewport height) */}
      <MobileActionBar onOpenQuote={() => handleOpenQuote()} />
    </div>
  );
}
