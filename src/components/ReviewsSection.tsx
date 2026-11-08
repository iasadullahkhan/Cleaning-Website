import { useState } from 'react';
import { Star, ExternalLink, MessageSquare, CheckCircle, Info, Edit3 } from 'lucide-react';

export function ReviewsSection() {
  // Configurable Google Business profile review URL
  const [googleReviewsUrl, setGoogleReviewsUrl] = useState('https://search.google.com/local/reviews?placeid=YOUR_GOOGLE_PLACE_ID');
  const [isEditingUrl, setIsEditingUrl] = useState(false);
  const [urlInput, setUrlInput] = useState(googleReviewsUrl);

  const handleSaveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    setGoogleReviewsUrl(urlInput);
    setIsEditingUrl(false);
  };

  const samplePlaceholders = [
    {
      id: 1,
      label: 'Sample Review Placeholder 1',
      serviceType: 'Deep Cleaning Service',
      location: 'Texas Residence',
      rating: 5,
      date: 'Recent Client Review',
      quote:
        '“The team was remarkably thorough. Every corner of our kitchen and master bathroom looked sparkling clean and smelled fresh. Punctual, respectful, and very easy to communicate with.”',
      authorPlaceholder: 'Verified Client (Replace with real Google Review quote)',
    },
    {
      id: 2,
      label: 'Sample Review Placeholder 2',
      serviceType: 'Regular House Cleaning',
      location: 'Texas Residence',
      rating: 5,
      date: 'Recent Client Review',
      quote:
        '“Reliable recurring house cleaning is hard to find, but Texas Maid Cleaning Solutions delivered beyond expectations. Consistent attention to detail every single visit.”',
      authorPlaceholder: 'Verified Client (Replace with real Google Review quote)',
    },
    {
      id: 3,
      label: 'Sample Review Placeholder 3',
      serviceType: 'Move-Out Cleaning',
      location: 'Texas Residence',
      rating: 5,
      date: 'Recent Client Review',
      quote:
        '“Booked a move-out clean on short notice. The baseboards, cabinets, and appliances were spotless, making our final landlord inspection 100% stress-free.”',
      authorPlaceholder: 'Verified Client (Replace with real Google Review quote)',
    },
  ];

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Google Metrics */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full mb-3 border border-teal-100">
              <Star className="w-3.5 h-3.5 fill-teal-600 text-teal-600" />
              <span>Customer Feedback & Trust</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              Customer Reviews & Ratings
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-xl">
              We take pride in every home we clean. See how Texas residents rate our attention to detail, professionalism, and courteous service.
            </p>
          </div>

          {/* Google Score Box */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 shrink-0 shadow-xs">
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-4xl font-extrabold text-slate-900 font-mono tracking-tight">5.0</span>
                <span className="text-slate-400 font-medium text-lg">/ 5.0</span>
              </div>
              <div className="flex items-center text-amber-500 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-800 mt-1">
                64 Verified Google Reviews
              </span>
            </div>

            <div className="h-10 w-px bg-slate-200 hidden sm:block" />

            <div className="flex flex-col gap-2">
              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-full shadow-xs transition-colors whitespace-nowrap"
              >
                <span>View Google Reviews</span>
                <ExternalLink className="w-3.5 h-3.5 text-teal-400" />
              </a>
              <button
                type="button"
                onClick={() => setIsEditingUrl(!isEditingUrl)}
                className="text-[11px] text-teal-700 hover:text-teal-800 text-left inline-flex items-center gap-1 cursor-pointer font-medium"
              >
                <Edit3 className="w-3 h-3" />
                <span>{isEditingUrl ? 'Cancel URL edit' : 'Edit Google review link'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Optional Editable URL Banner */}
        {isEditingUrl && (
          <form
            onSubmit={handleSaveUrl}
            className="mt-6 p-4 bg-teal-50/70 border border-teal-200 rounded-xl flex flex-col sm:flex-row items-center gap-3 text-xs"
          >
            <div className="flex items-center gap-1.5 text-teal-900 font-semibold shrink-0">
              <Info className="w-4 h-4 text-teal-600" />
              <span>Google Business Profile URL:</span>
            </div>
            <input
              type="url"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="https://g.page/r/your-google-place-id/review"
              className="flex-1 w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-teal-600 text-xs"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 shrink-0 cursor-pointer"
            >
              Update Link
            </button>
          </form>
        )}

        {/* Transparency Notice */}
        <div className="mt-8 p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-2.5 text-xs text-slate-600">
          <Info className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
          <p>
            <strong className="text-slate-800 font-semibold">Note for Business Owner:</strong> The cards below represent clearly labeled sample testimonial placeholders formatted for design presentation. You can easily insert quotes from your 64 verified 5-star Google reviews into this section.
          </p>
        </div>

        {/* 3 Labeled Sample Review Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {samplePlaceholders.map((review) => (
            <div
              key={review.id}
              className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs hover:border-teal-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Labeled Sample Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    {review.label}
                  </span>
                  <div className="flex items-center text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                  {review.quote}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-slate-800">{review.serviceType}</span>
                  <span>{review.location}</span>
                </div>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-teal-700 font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-600" />
                  <span>{review.authorPlaceholder}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
