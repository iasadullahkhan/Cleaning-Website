import {
  Users,
  Briefcase,
  Clock,
  Search,
  ThumbsUp,
  Smile,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Users,
      title: 'Customer-Focused Cleaning Solutions',
      description:
        'Every home is distinct. We tailor our cleaning approach to your household priorities, living patterns, and individual preferences.',
    },
    {
      icon: Briefcase,
      title: 'Professional Presentation',
      description:
        'Punctual, respectful, and organized. We bring high standards of cleanliness, etiquette, and dependable care to your private space.',
    },
    {
      icon: Clock,
      title: 'Convenient 24-Hour Availability',
      description:
        'Flexible around-the-clock options designed to fit active Texas schedules. Please confirm specific appointment availability prior to booking.',
    },
    {
      icon: Search,
      title: 'Meticulous Attention to Detail',
      description:
        'From high-touch handles to hard-to-reach corners and baseboards, we focus on the small details that make a huge difference in freshness.',
    },
    {
      icon: ThumbsUp,
      title: 'Commitment to Customer Satisfaction',
      description:
        'Our 5.0 Google rating across 64 customer reviews reflects our dedication to exceeding expectations and building long-term client trust.',
    },
    {
      icon: Smile,
      title: 'Friendly and Welcoming Service',
      description:
        'A warm, courteous, and inclusive team that respects your home, your family, and your peace of mind with every visit.',
    },
  ];

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
            Why Texas Maid Cleaning Solutions
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Setting the Standard for Reliable, Thoughtful Home Care
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We believe a pristine home should bring peace of mind, not stress. Here is why Texas residents trust our cleaning solutions for their homes and rental properties.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:border-teal-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-teal-800">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-600" />
                  <span>Verified standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Adjacency Trust Quote */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-base sm:text-lg text-white">
                Backed by 64 Flawless 5-Star Reviews
              </p>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Every appointment is handled with strict consistency, respectful care, and thorough quality checks.
              </p>
            </div>
          </div>
          <a
            href="tel:+12108237568"
            className="px-6 py-3 rounded-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition-colors whitespace-nowrap shrink-0 shadow-xs"
          >
            Speak With Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
