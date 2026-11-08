import { PhoneCall, FileText, Sparkles, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onOpenQuote: () => void;
}

export function HowItWorks({ onOpenQuote }: HowItWorksProps) {
  const steps = [
    {
      number: '01',
      icon: PhoneCall,
      title: 'Contact Us',
      subtitle: 'Call or submit your cleaning request',
      description:
        'Reach out 24 hours a day via phone at +1 210-823-7568 or submit our quick online quote form with your home details and preferred schedule.',
    },
    {
      number: '02',
      icon: FileText,
      title: 'Get Your Quote',
      subtitle: 'Discuss your cleaning requirements and receive a quote',
      description:
        'We review your specific rooms, square footage, and cleaning priorities to provide a clear, customized estimate before scheduling your visit.',
    },
    {
      number: '03',
      icon: Sparkles,
      title: 'Enjoy Your Clean Space',
      subtitle: 'Arrange your appointment and enjoy a fresh, clean environment',
      description:
        'Our dedicated cleaners arrive promptly, follow thorough cleaning protocols, and leave your residence immaculately spotless and refreshed.',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
            Simple 3-Step Process
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            How It Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-pretty">
            Booking professional cleaning shouldn’t be complicated. We make scheduling seamless from the first inquiry to your sparkling clean home.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs hover:border-teal-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black text-teal-700/60 font-mono">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-teal-700 mt-1">
                    {step.subtitle}
                  </p>

                  <p className="mt-3.5 text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">Step {idx + 1} of 3</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Center CTA */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm sm:text-base font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <span>Start Step 1: Request Your Quote</span>
            <ArrowRight className="w-4 h-4 text-teal-400" />
          </button>
        </div>
      </div>
    </section>
  );
}
