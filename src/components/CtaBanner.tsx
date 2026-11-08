import { Phone, ArrowRight, Sparkles, Clock, CheckCircle } from 'lucide-react';

interface CtaBannerProps {
  onOpenQuote: () => void;
}

export function CtaBanner({ onOpenQuote }: CtaBannerProps) {
  return (
    <section className="py-16 lg:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 -z-0 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 -z-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-950/80 border border-teal-800/80 px-4 py-1.5 rounded-full mb-6">
          <Sparkles className="w-3.5 h-3.5 text-teal-400" />
          <span>Experience Premium Texas Cleaning</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance">
          Ready for a Cleaner, Happier Space?
        </h2>

        <p className="mt-4 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed text-pretty">
          Let us help make cleaning one less thing on your to-do list.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onOpenQuote}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-full shadow-lg transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
          >
            <span>Get a Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="tel:+12108237568"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-teal-400"
          >
            <Phone className="w-4 h-4 text-teal-400" />
            <span>Call +1 210-823-7568</span>
          </a>
        </div>

        {/* Quick Trust Footnotes */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-teal-400" />
            <span>Open 24 Hours</span>
          </span>
          <span className="text-slate-600 hidden sm:inline">·</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-teal-400" />
            <span>No Obligation Free Estimate</span>
          </span>
          <span className="text-slate-600 hidden sm:inline">·</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-teal-400" />
            <span>5.0 Star Rated Quality</span>
          </span>
        </div>
      </div>
    </section>
  );
}
