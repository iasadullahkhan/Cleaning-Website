import { Clock, Star, MapPin, Award } from 'lucide-react';

export function TrustBar() {
  const highlights = [
    {
      icon: Clock,
      title: 'Open 24 Hours',
      description: 'Convenient scheduling day or night',
      subtext: 'Confirm availability before booking',
    },
    {
      icon: Star,
      title: '5.0 Google Rating',
      description: '64 Verified customer reviews',
      subtext: 'Flawless five-star track record',
    },
    {
      icon: MapPin,
      title: 'Serving Texas',
      description: 'Professional cleaning solutions',
      subtext: 'Custom residential care',
    },
    {
      icon: Award,
      title: 'Diverse & Inclusive',
      description: 'Women-Owned & Latino-Owned',
      subtext: 'Warmly LGBTQ+ friendly',
    },
  ];

  return (
    <section className="bg-slate-50 border-y border-slate-200/80 py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200/70 shadow-xs hover:border-teal-300 transition-colors"
              >
                <div className="w-11 h-11 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0 text-teal-700">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <h2 className="text-sm font-bold text-slate-900 tracking-tight">{item.title}</h2>
                  <p className="text-xs text-slate-600 font-medium mt-0.5">{item.description}</p>
                  <span className="text-[11px] text-slate-500 mt-1">{item.subtext}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
