import { useState } from 'react';
import { SERVICES_DATA } from '../data/servicesData.ts';
import { ServiceCategory } from '../types.ts';
import { ArrowRight, CheckCircle2, Info, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceCategory) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'whole-home' | 'rooms' | 'moving'>('all');

  const filteredServices = SERVICES_DATA.filter((service) => {
    if (activeTab === 'all') return true;
    return service.category === activeTab;
  });

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3.5 py-1.5 rounded-full mb-3 border border-teal-100">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Comprehensive Cleaning Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Specialized Cleaning Services Tailored to Your Home
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-pretty">
            Explore our suggested cleaning categories below. Each service package is customized to your space, requirements, and schedule.
          </p>

          {/* Verification Disclaimer Callout */}
          <div className="mt-5 p-3.5 bg-slate-50 border border-slate-200/90 rounded-xl inline-flex items-start gap-2.5 text-left max-w-2xl text-xs text-slate-600">
            <Info className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
            <p>
              <strong className="text-slate-800 font-semibold">Service Notice:</strong> The services below represent suggested cleaning categories and are subject to final confirmation and custom scheduling by Texas Maid Cleaning Solutions.
            </p>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all', label: 'All Services (8)' },
            { id: 'whole-home', label: 'Whole Home' },
            { id: 'rooms', label: 'Kitchen & Bath' },
            { id: 'moving', label: 'Move In & Move Out' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid (8 Cards) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="flex flex-col bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-lg hover:border-teal-300 transition-all group"
            >
              {/* Image Frame */}
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src={service.imageSrc}
                  alt={service.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-2.5 left-3 text-[11px] font-medium text-white/95 bg-slate-900/60 backdrop-blur-xs px-2.5 py-1 rounded-md">
                  To be confirmed by business
                </span>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-3">
                    {service.keyFeatures.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTA */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => onSelectService(service.title)}
                    className="w-full py-2.5 px-4 text-xs sm:text-sm font-semibold text-slate-900 bg-slate-50 hover:bg-slate-900 hover:text-white rounded-xl border border-slate-200/80 transition-all flex items-center justify-center gap-1.5 cursor-pointer group-hover:border-slate-900"
                  >
                    <span>Request a Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-teal-50/70 border border-teal-200/70 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-slate-900">
              Need a custom cleaning arrangement or multiple rooms?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              We accommodate specialized schedules, residential turnover, and recurring cleaning plans.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+12108237568"
              className="px-5 py-2.5 text-xs sm:text-sm font-bold text-teal-950 bg-white border border-teal-200 rounded-full hover:bg-teal-100/50 transition-colors"
            >
              Call +1 210-823-7568
            </a>
            <button
              type="button"
              onClick={() => onSelectService('Residential Cleaning')}
              className="px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-full transition-colors"
            >
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
