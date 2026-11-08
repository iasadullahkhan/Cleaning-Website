import { Phone, Sparkles } from 'lucide-react';

interface MobileActionBarProps {
  onOpenQuote: () => void;
}

export function MobileActionBar({ onOpenQuote }: MobileActionBarProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 shadow-lg">
      <div className="flex items-center gap-2.5 max-w-md mx-auto">
        <a
          href="tel:+12108237568"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs transition-colors shrink-0"
          aria-label="Call Texas Maid Cleaning Solutions"
        >
          <Phone className="w-4 h-4 text-teal-600" />
          <span>Call Now</span>
        </a>

        <button
          type="button"
          onClick={onOpenQuote}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-xs transition-colors shrink-0"
        >
          <Sparkles className="w-4 h-4 text-teal-400" />
          <span>Free Quote</span>
        </button>
      </div>
    </div>
  );
}
