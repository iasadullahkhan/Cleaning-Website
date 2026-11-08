import { useState } from 'react';
import { Phone, Clock, MapPin, Send, CheckCircle2, AlertCircle, Sparkles, Heart } from 'lucide-react';
import { QuoteFormData, FormErrors, ServiceCategory } from '../types.ts';

interface ContactSectionProps {
  preselectedService?: ServiceCategory | 'General Inquiry';
  onClearPreselected?: () => void;
}

export function ContactSection({ preselectedService = 'Residential Cleaning' }: ContactSectionProps) {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    serviceRequired: preselectedService,
    preferredDate: '',
    additionalDetails: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<QuoteFormData | null>(null);

  const servicesList: (ServiceCategory | 'General Inquiry')[] = [
    'Residential Cleaning',
    'Deep Cleaning',
    'Regular House Cleaning',
    'Move-In Cleaning',
    'Move-Out Cleaning',
    'Kitchen Cleaning',
    'Bathroom Cleaning',
    'Apartment Cleaning',
    'General Inquiry',
  ];

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required';
    } else {
      // Basic US phone validation
      const cleaned = formData.phoneNumber.replace(/\D/g, '');
      if (cleaned.length < 10) {
        newErrors.phoneNumber = 'Please enter a valid 10-digit phone number';
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.serviceRequired) {
      newErrors.serviceRequired = 'Please select a cleaning service';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData({ ...formData });
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      serviceRequired: 'Residential Cleaning',
      preferredDate: '',
      additionalDetails: '',
    });
    setErrors({});
    setIsSubmitted(false);
    setSubmittedData(null);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Business Details & Call Prompts */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                Contact & Scheduling
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
                Request Your Free Cleaning Estimate
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed text-pretty">
                Have questions or need to arrange a cleaning service in Texas? Contact our team directly or submit the request form. We respond promptly to discuss your cleaning requirements.
              </p>

              {/* Direct Call High Priority Box */}
              <div className="mt-8 p-6 rounded-2xl bg-slate-900 text-white shadow-md">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-teal-400">
                      Direct Telephone Line
                    </span>
                    <h3 className="text-xl font-extrabold text-white">
                      +1 210-823-7568
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-slate-300 mt-2">
                  Call anytime for fast quotes or immediate scheduling inquiries across Texas.
                </p>
                <a
                  href="tel:+12108237568"
                  className="mt-4 inline-flex items-center justify-center w-full py-2.5 px-4 text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-xl transition-colors"
                >
                  Call +1 210-823-7568 Now
                </a>
              </div>

              {/* Business Info List */}
              <div className="mt-8 space-y-5 border-t border-slate-100 pt-6">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-teal-700 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Business Hours</h4>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium">Open 24 Hours</p>
                    <p className="text-xs text-slate-500">
                      *Please confirm appointment availability prior to booking.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-teal-700 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Service Location</h4>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium">Texas, United States</p>
                    <p className="text-xs text-slate-500">Serving residential homes, apartments, and condos</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700 shrink-0">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Business Community</h4>
                    <p className="text-xs sm:text-sm text-slate-700">
                      Women-Owned · Latino-Owned · Welcoming LGBTQ+ Clients
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Rating Snippet */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-600">
              <Sparkles className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Rated <strong>5.0 Stars</strong> across <strong>64 customer reviews</strong> on Google.</span>
            </div>
          </div>

          {/* Right Column: Contact & Quote Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm">
              {isSubmitted && submittedData ? (
                /* Success Confirmation State */
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-teal-700" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900">
                      Estimate Request Received!
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      Thank you, <strong className="text-slate-900">{submittedData.fullName}</strong>. We have received your inquiry for <strong className="text-slate-900">{submittedData.serviceRequired}</strong>.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm space-y-2 text-slate-700">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500 font-medium">Phone:</span>
                      <span className="font-semibold text-slate-900">{submittedData.phoneNumber}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500 font-medium">Email:</span>
                      <span className="font-semibold text-slate-900">{submittedData.email}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500 font-medium">Requested Service:</span>
                      <span className="font-semibold text-teal-700">{submittedData.serviceRequired}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500 font-medium">Preferred Date:</span>
                      <span className="font-semibold text-slate-900">{submittedData.preferredDate}</span>
                    </div>
                    {submittedData.additionalDetails && (
                      <div className="pt-1">
                        <span className="text-slate-500 font-medium block">Notes:</span>
                        <p className="italic text-slate-800 mt-0.5">{submittedData.additionalDetails}</p>
                      </div>
                    )}
                  </div>

                  {/* Explicit Frontend Demo Connection Notice */}
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Frontend Demonstration Notice:</p>
                      <p className="mt-0.5 text-amber-800">
                        This estimate form is currently operating in frontend demonstration mode with validated client-side processing. To receive live customer inquiries directly to your business email or CRM, connect your preferred form service (such as Formspree, EmailJS, or an API endpoint) in the code.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 bg-white border border-slate-200 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                    <a
                      href="tel:+12108237568"
                      className="text-xs sm:text-sm font-bold text-teal-800 hover:text-teal-900 transition-colors"
                    >
                      Or Call Us Directly &rarr;
                    </a>
                  </div>
                </div>
              ) : (
                /* Main Quote Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-slate-200 pb-4">
                    <h3 className="text-xl font-bold text-slate-900">
                      Cleaning Request Details
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Fill out your home information to receive an accurate, no-obligation quote.
                    </p>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Maria Gonzalez"
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-white transition-colors focus:outline-2 focus:outline-teal-600 ${
                        errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-rose-600 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phoneNumber" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="phoneNumber"
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="(210) 000-0000"
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-white transition-colors focus:outline-2 focus:outline-teal-600 ${
                          errors.phoneNumber ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                        }`}
                      />
                      {errors.phoneNumber && (
                        <p className="text-xs text-rose-600 mt-1">{errors.phoneNumber}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@example.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-white transition-colors focus:outline-2 focus:outline-teal-600 ${
                          errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-600 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Service Required & Date Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="serviceRequired" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                        Cleaning Service Required <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="serviceRequired"
                        value={formData.serviceRequired}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            serviceRequired: e.target.value as ServiceCategory | 'General Inquiry',
                          })
                        }
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-white transition-colors focus:outline-2 focus:outline-teal-600 ${
                          errors.serviceRequired ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                        }`}
                      >
                        {servicesList.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      {errors.serviceRequired && (
                        <p className="text-xs text-rose-600 mt-1">{errors.serviceRequired}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="preferredDate" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                        Preferred Date <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-white transition-colors focus:outline-2 focus:outline-teal-600 ${
                          errors.preferredDate ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                        }`}
                      />
                      {errors.preferredDate && (
                        <p className="text-xs text-rose-600 mt-1">{errors.preferredDate}</p>
                      )}
                    </div>
                  </div>

                  {/* Additional Details */}
                  <div>
                    <label htmlFor="additionalDetails" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      Additional Details / Home Specifications
                    </label>
                    <textarea
                      id="additionalDetails"
                      rows={3}
                      value={formData.additionalDetails}
                      onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
                      placeholder="e.g. 3 bedrooms, 2 bathrooms, focus on kitchen stovetop, pet-friendly products requested..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white focus:outline-2 focus:outline-teal-600 transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 text-sm sm:text-base font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-teal-500"
                    >
                      <Send className="w-4 h-4 text-teal-400" />
                      <span>Submit Free Quote Request</span>
                    </button>
                    <p className="text-[11px] text-slate-500 text-center mt-2.5">
                      Open 24 Hours · Confirm appointment availability before booking · No hidden charges
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
