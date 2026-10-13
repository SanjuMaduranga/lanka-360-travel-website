import { useEffect } from 'react';

export default function PackageItineraryModal({
  pkg,
  isOpen,
  onClose,
  onReserve,
}) {
  // Lock scroll + Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !pkg) return null;

  // Use base price — no tiers anymore
  const basePrice = pkg.priceUSD ?? 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-[fadeIn_0.2s_ease-out]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="itineraryModalTitle"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
        aria-hidden="true"
      />

      {/* Card */}
      <div
        className="relative w-full max-w-5xl my-4 sm:my-8 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden animate-[slideUp_0.3s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ─── CLOSE BUTTON ─── */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close itinerary"
          className="absolute top-4 right-4 z-30 w-11 h-11 rounded-full bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-red-500 hover:text-white hover:border-red-500 hover:rotate-90 shadow-lg transition-all duration-300 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
          <span className="sr-only">Close</span>
        </button>

        {/* ─── HERO IMAGE ─── */}
        <div className="relative h-64 sm:h-80 overflow-hidden">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/10" />

          {/* Top badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2 pr-16">
            <span className="bg-gold-500 text-ocean-900 text-[10px] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
              <i className="fas fa-crown mr-1" />
              {pkg.category || 'Signature'}
            </span>
            <span className="bg-white/95 backdrop-blur-md text-slate-800 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/40 shadow-md">
              <i className="fas fa-clock text-gold-600 mr-1" />
              {pkg.durationDays}D / {pkg.durationDays - 1}N
            </span>
            <span className="bg-white/95 backdrop-blur-md text-slate-800 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/40 shadow-md">
              <i className="fas fa-star text-amber-500 mr-1" />
              {pkg.rating} ({pkg.reviewsCount})
            </span>
          </div>

          {/* Title block */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <span className="text-gold-300 text-[10px] sm:text-xs font-bold uppercase tracking-widest block mb-1.5">
              <i className="fas fa-route mr-1.5" />
              Day-by-Day Bespoke Itinerary
            </span>
            <h2
              id="itineraryModalTitle"
              className="font-serif text-2xl sm:text-4xl font-bold text-white leading-tight drop-shadow-md"
            >
              {pkg.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 mt-2 italic drop-shadow">
              {pkg.tagline}
            </p>
          </div>
        </div>

        {/* ─── BODY ─── */}
        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LEFT — Timeline */}
            <div className="lg:col-span-2">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-ocean-900 dark:text-slate-100 border-b border-gold-500/20 pb-3 mb-6 flex items-center">
                <i className="fas fa-route text-gold-500 mr-2.5" />
                Your Journey Blueprint
              </h3>

              <div className="relative border-l-2 border-gold-500/40 ml-2 pl-6 space-y-7">
                {pkg.itinerary?.map((item, idx) => (
                  <div key={idx} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-gold-500 border-4 border-white dark:border-slate-900 shadow-md" />

                    <span className="text-[10px] font-extrabold text-gold-600 dark:text-gold-400 uppercase tracking-widest block mb-1">
                      {item.day}
                    </span>
                    <h4 className="font-serif text-base sm:text-lg font-bold text-ocean-900 dark:text-slate-100 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}

                {(!pkg.itinerary || pkg.itinerary.length === 0) && (
                  <p className="text-sm text-slate-500 dark:text-slate-400 italic">
                    Detailed itinerary available on request.
                  </p>
                )}
              </div>
            </div>

            {/* RIGHT — Booking sidebar */}
            <aside className="lg:sticky lg:top-4 h-fit">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-800/60 border-2 border-gold-500/40 shadow-lg">
                {/* Price */}
                <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest block font-bold">
                  Estimated Investment
                </span>
                <div className="font-serif text-3xl sm:text-4xl font-extrabold text-ocean-900 dark:text-slate-100 mt-1.5">
                  <span className="text-gold-600 dark:text-gold-400">$</span>
                  {basePrice.toLocaleString()}
                </div>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-1.5">
                  Per guest · all-inclusive
                </span>

                {/* Inclusions */}
                <div className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300 pt-4 mt-4 border-t border-gold-500/20">
                  <div className="flex items-start gap-2">
                    <i className="fas fa-check text-emerald-500 mt-0.5 shrink-0" />
                    <span>Private VIP Airport Fast-Track</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <i className="fas fa-check text-emerald-500 mt-0.5 shrink-0" />
                    <span>Luxury SUV &amp; Chauffeur Guide</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <i className="fas fa-check text-emerald-500 mt-0.5 shrink-0" />
                    <span>Handpicked 4–5★ Hotels</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <i className="fas fa-check text-emerald-500 mt-0.5 shrink-0" />
                    <span>Flexible Cancellation Policy</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="pt-4 mt-4 border-t border-gold-500/20">
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest block font-bold mb-2.5">
                    Signature Highlights
                  </span>
                  <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                    {pkg.highlights?.slice(0, 4).map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <i className="fas fa-gem text-gold-500 mt-0.5 text-[9px] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Reserve CTA */}
                <button
                  type="button"
                  onClick={() => onReserve(pkg)}
                  className="w-full mt-6 bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 hover:from-gold-600 hover:via-amber-600 hover:to-gold-700 text-ocean-900 font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-widest"
                >
                  <i className="fas fa-calendar-check" />
                  Reserve This Expedition
                </button>

                <p className="text-[10px] text-slate-500 dark:text-slate-400 text-center mt-3">
                  <i className="fas fa-clock text-gold-500 mr-1" />
                  Reply within 2 hours
                </p>
              </div>
            </aside>
          </div>
        </div>

        {/* ─── FOOTER ─── */}
        <div className="px-6 sm:px-8 py-4 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 flex-wrap">
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            <i className="fas fa-shield-alt text-gold-500 mr-1.5" />
            Lanka 360 · SLTDA Licensed TS/2026/0412
          </p>
          <button
            type="button"
            onClick={onClose}
            className="text-[11px] font-bold text-slate-600 dark:text-slate-300 hover:text-red-500 dark:hover:text-red-400 transition inline-flex items-center gap-1.5 uppercase tracking-wider"
          >
            <i className="fas fa-times" />
            Close
          </button>
        </div>
      </div>
    </div>
  );
}