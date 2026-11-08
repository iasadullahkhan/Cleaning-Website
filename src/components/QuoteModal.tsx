import { useState, useEffect } from 'react';
import { X, Sparkles, Send, CheckCircle2, AlertCircle, Phone } from 'lucide-react';
import { ServiceCategory, QuoteFormData, FormErrors } from '../types.ts';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: ServiceCategory | 'General Inquiry';
}

export function QuoteModal({ isOpen, onClose, defaultService = 'Residential Cleaning' }: QuoteModalProps) {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    serviceRequired: defaultService,
    preferredDate: '',
    additionalDetails: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, serviceRequired: defaultService }));
    }
  }, [defaultService]);

  if (!isOpen) return null;

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
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required';
    } else {
      const cleaned = formData.phoneNumber.replace(/\D/g, '');
      if (cleaned.length < 10) newErrors.phoneNumber = 'Valid 10-digit phone required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Valid email address required';
    }
    if (!formData.preferredDate) newErrors.preferredDate = 'Select a preferred date';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-4 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-teal-100 text-teal-800 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-teal-700" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">
              Request Received!
            </h3>
            <p className="text-sm text-slate-600">
              Thank you, <strong>{formData.fullName}</strong>. We will get in touch regarding your <strong>{formData.serviceRequired}</strong> request.
            </p>
            <div className="p-3.5 bg-amber-50 border border-amber-200 text-xs text-amber-900 rounded-xl text-left">
              <div className="flex gap-2">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>
                  <strong>Frontend Demo Notice:</strong> Connect your backend API or form service in code to send live emails to the business owner.
                </span>
              </div>
            </div>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+12108237568"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-teal-600 text-white font-bold text-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call +1 210-823-7568</span>
              </a>
              <button
                type="button"
                onClick={handleClose}
                className="px-5 py-2.5 rounded-full bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-teal-700 text-xs font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Texas Maid Cleaning Solutions</span>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">
              Request a Free Cleaning Quote
            </h3>
            <p className="text-xs text-slate-500 mt-1 mb-5">
              Open 24 Hours · Confirm appointment availability before booking.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Your full name"
                  className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-white ${
                    errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                  }`}
                />
                {errors.fullName && <p className="text-[11px] text-rose-600 mt-0.5">{errors.fullName}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    placeholder="(210) 823-7568"
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-white ${
                      errors.phoneNumber ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                    }`}
                  />
                  {errors.phoneNumber && (
                    <p className="text-[11px] text-rose-600 mt-0.5">{errors.phoneNumber}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@email.com"
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-white ${
                      errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-rose-600 mt-0.5">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Service Required *
                  </label>
                  <select
                    value={formData.serviceRequired}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        serviceRequired: e.target.value as ServiceCategory | 'General Inquiry',
                      })
                    }
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 bg-white"
                  >
                    {servicesList.map((svc) => (
                      <option key={svc} value={svc}>
                        {svc}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-white ${
                      errors.preferredDate ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                    }`}
                  />
                  {errors.preferredDate && (
                    <p className="text-[11px] text-rose-600 mt-0.5">{errors.preferredDate}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Home Notes / Square Footage
                </label>
                <textarea
                  rows={2}
                  value={formData.additionalDetails}
                  onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
                  placeholder="e.g. 2 bedrooms, deep clean oven, key instructions..."
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4 text-teal-400" />
                <span>Submit Quote Request</span>
              </button>

              <div className="text-center pt-1">
                <a
                  href="tel:+12108237568"
                  className="text-xs font-bold text-teal-800 hover:text-teal-900 inline-flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Prefer to call? +1 210-823-7568 (Open 24 Hours)</span>
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
