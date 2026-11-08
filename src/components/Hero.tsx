import { useState } from 'react';
import { Star, Phone, ArrowRight, ShieldCheck, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
}

export function Hero({ onOpenQuote }: HeroProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="home" className="relative pt-6 pb-16 lg:pt-12 lg:pb-24 bg-white overflow-hidden">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-teal-50/70 rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-slate-50/80 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Conversion Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Trust Indicator Pill / Kicker (Text unboxed with subtle separator) */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 mb-6 bg-slate-50 border border-slate-200/80 rounded-full px-4 py-1.5 w-fit shadow-xs">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-slate-900">5.0 Google Rating</span>
              <span className="text-slate-300" aria-hidden="true">|</span>
              <span className="text-slate-600">64 Customer Reviews</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] text-balance">
              Enjoy a Spotless Home <span className="text-teal-700">Without the Stress</span>
            </h1>

            {/* Supporting Text */}
            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl text-pretty">
              Professional cleaning solutions designed to make your home cleaner, fresher, and more comfortable.
              Let <strong className="font-semibold text-slate-900">Texas Maid Cleaning Solutions</strong> take care of the mess while you enjoy more of what matters.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-full shadow-md hover:shadow-lg transition-all focus-visible:outline-2 focus-visible:outline-teal-500 focus-visible:outline-offset-2"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 text-teal-400" />
              </button>

              <a
                href="tel:+12108237568"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-bold text-slate-800 bg-teal-50/80 hover:bg-teal-100/90 text-teal-900 border border-teal-200/80 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-teal-500 focus-visible:outline-offset-2"
              >
                <Phone className="w-4 h-4 text-teal-700" />
                <span>Call Us Today</span>
                <span className="text-xs font-semibold text-teal-800 bg-white/80 px-2 py-0.5 rounded-full ml-1">
                  (210) 823-7568
                </span>
              </a>
            </div>

            {/* Business Characteristics & Values Strip */}
            <div className="mt-10 pt-8 border-t border-slate-200/80">
              <p className="text-xs font-bold tracking-wider uppercase text-slate-600 mb-3">
                Proudly Serving Texas Homes
              </p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-slate-700">
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Women-Owned</span>
                </span>
                <span className="text-slate-300" aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <Heart className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Latino-Owned</span>
                </span>
                <span className="text-slate-300" aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>LGBTQ+ Friendly</span>
                </span>
                <span className="text-slate-300" aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1.5 font-medium text-teal-800">
                  <Sparkles className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Open 24 Hours</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Backing decorative frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-teal-500/20 to-slate-200/50 rounded-3xl transform rotate-1 filter blur-xs -z-10" />

              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-xl bg-slate-100 aspect-16/10 lg:aspect-4/3">
                {/* Fallback container until image loads or in case of offline */}
                {!imageLoaded && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 text-slate-400 p-6">
                    <Sparkles className="w-10 h-10 text-teal-500 animate-pulse mb-2" />
                    <span className="text-xs font-medium text-slate-500">Texas Maid Cleaning Solutions</span>
                  </div>
                )}
                <img
                  src="/src/assets/images/hero_cleaner_home_1794121751177.jpg"
                  alt="Professional cleaner working in a bright modern home in Texas"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  onLoad={() => setImageLoaded(true)}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Bottom glass testimonial snippet */}
                <div className="absolute bottom-3 left-3 right-3 p-3.5 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/80 shadow-md">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-xs">
                        5★
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900 leading-tight">64 Verified Reviews</p>
                        <p className="text-[11px] text-slate-500">Perfect 5.0 Google Score</p>
                      </div>
                    </div>
                    <a
                      href="#reviews"
                      className="text-xs font-semibold text-teal-700 hover:text-teal-800 transition-colors"
                    >
                      Read reviews &rarr;
                    </a>
                  </div>
                </div>
              </div>

              {/* Floating trust badge */}
              <div className="absolute -top-4 -left-4 hidden sm:flex items-center gap-2.5 bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-lg border border-slate-800">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
                </span>
                <span className="text-xs font-semibold tracking-wide">Available 24/7 in Texas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
