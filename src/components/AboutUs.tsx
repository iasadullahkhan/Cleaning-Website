import { Heart, Sparkles, Shield, Check } from 'lucide-react';

export function AboutUs() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image with Subtle Accent Frame */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl bg-slate-100 aspect-4/3">
                <img
                  src="/src/assets/images/about_clean_living_1794121753403.jpg"
                  alt="Fresh, clean and serene Texas home living room"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating values card */}
              <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 shadow-xs flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-teal-100/70 text-teal-800 flex items-center justify-center shrink-0">
                    <Heart className="w-5 h-5 fill-teal-700/20 text-teal-700" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Proudly Diverse & Welcoming</p>
                    <p className="text-[11px] text-slate-500">Women-Owned · Latino-Owned · LGBTQ+ Friendly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              About Texas Maid Cleaning Solutions
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight text-balance">
              Making Every Space Feel Fresh, Clean, and Comfortable
            </h2>

            <div className="mt-6 space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed text-pretty">
              <p>
                At <strong>Texas Maid Cleaning Solutions</strong>, we understand that a clean living environment is fundamental to your well-being, clarity, and daily peace of mind. Your home is where you unwind, share meals with loved ones, and recharge after demanding days.
              </p>
              <p>
                Our mission is simple: provide dependable, meticulous cleaning solutions that relieve you of household chores so you can focus on what matters most. Whether you need an ongoing maintenance routine, a deep restoration scrub, or a smooth move-in turnover, we treat every residence with genuine respect, care, and thorough attention to detail.
              </p>
              <p>
                We are proud to operate as a <strong>women-owned</strong> and <strong>Latino-owned</strong> business, committed to cultivating a warm, respectful environment that warmly welcomes all customers, including our valued <strong>LGBTQ+ community</strong> across Texas.
              </p>
            </div>

            {/* Core Values Checklist */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <Check className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Healthier, dust-free home environments</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <Check className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Respectful, courteous residential care</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <Check className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Convenient 24-hour availability</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <Check className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Transparent quotes without surprise fees</span>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-colors shadow-xs"
              >
                <Sparkles className="w-4 h-4 text-teal-400" />
                <span>Request Your Free Quote</span>
              </a>
              <a
                href="tel:+12108237568"
                className="text-sm font-bold text-teal-800 hover:text-teal-900 transition-colors"
              >
                Call +1 210-823-7568
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
