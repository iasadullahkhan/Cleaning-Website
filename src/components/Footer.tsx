import { Sparkles, Phone, Clock, MapPin, Heart, ShieldCheck } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData.ts';
import { ServiceCategory } from '../types.ts';

interface FooterProps {
  onSelectService: (service: ServiceCategory) => void;
  onOpenQuote: () => void;
}

export function Footer({ onSelectService, onOpenQuote }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'About Us', href: '#about' },
    { label: 'Customer Reviews', href: '#reviews' },
    { label: 'Request a Quote', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-xs">
                <Sparkles className="w-5 h-5 text-teal-100" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-none">
                  Texas Maid
                </span>
                <span className="text-[11px] font-semibold text-teal-400 tracking-wider uppercase mt-1">
                  Cleaning Solutions
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Professional cleaning solutions designed to make your home cleaner, fresher, and more comfortable. Dedicated residential and deep cleaning services across Texas.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Heart className="w-3.5 h-3.5 text-teal-400" />
                <span>Women-Owned & Latino-Owned Business</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                <span>LGBTQ+ Friendly & Welcoming</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-teal-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Cleaning Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <button
                    type="button"
                    onClick={() => {
                      onSelectService(service.title);
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-teal-300 transition-colors text-left cursor-pointer"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Business Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Contact & Hours
            </h4>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-400 text-xs">Telephone</p>
                  <a
                    href="tel:+12108237568"
                    className="font-bold text-white hover:text-teal-300 transition-colors"
                  >
                    +1 210-823-7568
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-400 text-xs">Hours of Operation</p>
                  <p className="font-semibold text-white">Open 24 Hours</p>
                  <p className="text-[11px] text-slate-500">*Confirm appointment availability</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-400 text-xs">Service Area</p>
                  <p className="font-semibold text-white">Texas, United States</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenQuote}
                className="w-full py-2.5 px-4 text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-xl transition-colors cursor-pointer"
              >
                Request Free Quote
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} Texas Maid Cleaning Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>5.0 ★ Google Rated (64 Reviews)</span>
            <span aria-hidden="true">·</span>
            <span>Texas, USA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
