import { useState, useEffect } from 'react';

const RECEIVING_EMAIL = 'YOUR_EMAIL_HERE@lanka360.com';
const WHATSAPP_NUMBER = '94771234567';

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  country: '',
  travelDate: '',
  adults: '2',
  children: '0',
  message: '',
};

export default function PackageBookingModal({ isOpen, onClose, pkg }) {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [submitting, setSubmitting] = useState(false);

  // Lock body scroll + Escape key. No setState in effect → no warnings.
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ─── Derived values ───
  const nights = pkg.durationDays - 1;
  const adults = Math.max(1, Number(form.adults) || 1);
  const children = Math.max(0, Number(form.children) || 0);
  const rooms = Math.ceil(adults / 2);

  // Base price per room
  const unitPrice = pkg.priceUSD ?? 0;
  const estimatedTotal = unitPrice * Math.max(1, rooms);

  const buildWhatsAppMessage = () => {
    return [
      '*🏝️ Lanka 360 — Package Booking Request*',
      '',
      `*Package:* ${pkg.title}`,
      `*Duration:* ${pkg.durationDays} Days / ${nights} Nights`,
      `*Category:* ${pkg.category || 'Signature'}`,
      `*Price (per room):* $${unitPrice.toLocaleString()}`,
      '',
      '*── Traveler Details ──*',
      `*Name:* ${form.name || '-'}`,
      `*Email:* ${form.email || '-'}`,
      `*Phone:* ${form.phone || '-'}`,
      `*Country:* ${form.country || '-'}`,
      `*Travel Date:* ${form.travelDate || 'Not specified'}`,
      `*Adults:* ${adults}`,
      `*Children:* ${children}`,
      '',
      '*── Estimated Total ──*',
      `$${estimatedTotal.toLocaleString()} USD (${rooms} room${rooms > 1 ? 's' : ''})`,
      '',
      '*Message:*',
      form.message || '-',
    ].join('\n');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      buildWhatsAppMessage()
    )}`;
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    try {
      // ─── 1. Email via FormSubmit.co ───
      await fetch(`https://formsubmit.co/ajax/${RECEIVING_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `🎫 Package Booking — ${pkg.title}`,
          _template: 'table',
          _captcha: 'false',
          Package: pkg.title,
          Duration: `${pkg.durationDays} Days / ${nights} Nights`,
          Category: pkg.category || 'Signature',
          'Price (per room)': `$${unitPrice.toLocaleString()}`,
          Name: form.name,
          Email: form.email,
          Phone: form.phone,
          Country: form.country,
          'Travel Date': form.travelDate || 'Not specified',
          Adults: adults,
          Children: children,
          'Estimated Total': `$${estimatedTotal.toLocaleString()} (${rooms} room${
            rooms > 1 ? 's' : ''
          })`,
          Message: form.message,
        }),
      }).catch(() => {
        // Non-fatal — WhatsApp fallback still works
      });
    } catch (err) {
      console.error('Email send failed:', err);
    }

    // ─── 2. WhatsApp — same tab on mobile, new tab on desktop ───
    if (isMobile) {
      window.location.assign(whatsappURL);
    } else {
      window.open(whatsappURL, '_blank', 'noopener,noreferrer');
    }

    // ─── 3. Success state + auto-close ───
    setStatus('success');
    setSubmitting(false);

    setTimeout(() => {
      setStatus(null);
      onClose();
    }, 3500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-[fadeIn_0.2s_ease-out]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="packageBookingTitle"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        aria-hidden="true"
      />

      {/* Modal card */}
      <div
        className="relative w-full max-w-3xl my-4 sm:my-8 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden animate-[slideUp_0.3s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ─── CLOSE BUTTON ─── */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close booking window"
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

        {/* ─── HERO ─── */}
        <div className="relative h-56 sm:h-72 overflow-hidden rounded-t-3xl">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/10" />

          <div className="absolute top-4 left-4 flex flex-wrap gap-2 pr-16">
            <span className="bg-gold-500 text-ocean-900 text-[10px] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
              <i className="fas fa-crown mr-1" />
              {pkg.category || 'Signature'}
            </span>
            <span className="bg-white/95 backdrop-blur-md text-slate-800 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/40 shadow-md">
              <i className="fas fa-clock text-gold-600 mr-1" />
              {pkg.durationDays}D / {nights}N
            </span>
            <span className="bg-white/95 backdrop-blur-md text-slate-800 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/40 shadow-md">
              <i className="fas fa-star text-amber-500 mr-1" />
              {pkg.rating}
            </span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
            <h2
              id="packageBookingTitle"
              className="font-serif text-2xl sm:text-4xl font-bold text-white leading-tight drop-shadow-md"
            >
              {pkg.title}
            </h2>
            <p className="text-slate-200 text-xs sm:text-sm mt-1.5 italic drop-shadow">
              {pkg.tagline}
            </p>
          </div>
        </div>

        {/* ─── BODY ─── */}
        <div className="p-6 sm:p-8">
          {/* Summary strip */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-800/60 border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="text-center px-1">
              <div className="text-[9px] sm:text-[10px] uppercase text-slate-500 dark:text-slate-400 font-bold tracking-wider mb-1">
                Price / Room
              </div>
              <div className="font-serif text-base sm:text-xl font-extrabold text-gold-600 dark:text-gold-400">
                ${unitPrice.toLocaleString()}
              </div>
            </div>
            <div className="text-center border-x border-slate-200 dark:border-slate-700 px-1">
              <div className="text-[9px] sm:text-[10px] uppercase text-slate-500 dark:text-slate-400 font-bold tracking-wider mb-1">
                {rooms} Room{rooms > 1 ? 's' : ''}
              </div>
              <div className="font-serif text-base sm:text-xl font-extrabold text-ocean-900 dark:text-slate-100">
                {adults + children} Guest{adults + children > 1 ? 's' : ''}
              </div>
            </div>
            <div className="text-center px-1">
              <div className="text-[9px] sm:text-[10px] uppercase text-slate-500 dark:text-slate-400 font-bold tracking-wider mb-1">
                Est. Total
              </div>
              <div className="font-serif text-base sm:text-xl font-extrabold text-emerald-600 dark:text-emerald-400">
                ${estimatedTotal.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent mb-6" />

          {/* Success / Form */}
          {status === 'success' ? (
            <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-950/40 dark:to-slate-900 border-2 border-emerald-300 dark:border-emerald-700 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500 text-white flex items-center justify-center text-3xl mb-4 shadow-lg shadow-emerald-500/30">
                <i className="fas fa-check" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-emerald-800 dark:text-emerald-300 mb-2">
                Booking Request Sent!
              </h3>
              <p className="text-sm text-emerald-700 dark:text-emerald-400 max-w-md mx-auto">
                Your inquiry was emailed to our team and a WhatsApp chat was
                opened. We'll reply within 2 hours.
              </p>
              <p className="text-[11px] text-emerald-600 dark:text-emerald-500 mt-4 italic">
                This window will close automatically...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="text-sm uppercase font-bold text-slate-600 dark:text-slate-300 tracking-widest flex items-center">
                <i className="fas fa-user-edit text-gold-500 mr-2" />
                Traveler Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="pb-name"
                    className="block text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-widest mb-1.5"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <i className="fas fa-user absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none" />
                    <input
                      id="pb-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-9 pr-3 py-3 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="pb-email"
                    className="block text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-widest mb-1.5"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <i className="fas fa-envelope absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none" />
                    <input
                      id="pb-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-9 pr-3 py-3 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="pb-phone"
                    className="block text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-widest mb-1.5"
                  >
                    Phone / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <i className="fas fa-phone absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none" />
                    <input
                      id="pb-phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 890"
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-9 pr-3 py-3 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="pb-country"
                    className="block text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-widest mb-1.5"
                  >
                    Country
                  </label>
                  <div className="relative">
                    <i className="fas fa-globe absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none" />
                    <input
                      id="pb-country"
                      name="country"
                      type="text"
                      value={form.country}
                      onChange={handleChange}
                      placeholder="United Kingdom"
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-9 pr-3 py-3 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="pb-travelDate"
                    className="block text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-widest mb-1.5"
                  >
                    Travel Date
                  </label>
                  <input
                    id="pb-travelDate"
                    name="travelDate"
                    type="date"
                    value={form.travelDate}
                    onChange={handleChange}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-3 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="pb-adults"
                    className="block text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-widest mb-1.5"
                  >
                    Adults (12+)
                  </label>
                  <input
                    id="pb-adults"
                    name="adults"
                    type="number"
                    min="1"
                    max="20"
                    value={form.adults}
                    onChange={handleChange}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-3 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="pb-children"
                    className="block text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-widest mb-1.5"
                  >
                    Children (2–11)
                  </label>
                  <input
                    id="pb-children"
                    name="children"
                    type="number"
                    min="0"
                    max="20"
                    value={form.children}
                    onChange={handleChange}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-3 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="pb-message"
                  className="block text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-widest mb-1.5"
                >
                  Special Requests
                </label>
                <textarea
                  id="pb-message"
                  name="message"
                  rows="3"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Dietary needs, hotel preferences, celebration details..."
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-3 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 hover:from-gold-600 hover:via-amber-600 hover:to-gold-700 disabled:opacity-60 disabled:cursor-not-allowed text-ocean-900 font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:shadow-gold-500/20 transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-widest"
                >
                  {submitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin" />
                      <span>Sending Request...</span>
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane" />
                      <span>Confirm Booking Request</span>
                    </>
                  )}
                </button>

                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-4 text-[10px] text-slate-500 dark:text-slate-400">
                  <span className="inline-flex items-center gap-1.5">
                    <i className="fas fa-lock text-emerald-500" />
                    Secure submission
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <i className="fab fa-whatsapp text-emerald-500" />
                    Email + WhatsApp delivery
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <i className="fas fa-clock text-gold-500" />
                    Reply within 2 hours
                  </span>
                </div>

                <div className="mt-4 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-center">
                  <p className="text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold">
                    <i className="fas fa-check-circle mr-1.5" />
                    Free cancellation up to 14 days before travel
                  </p>
                </div>
              </div>
            </form>
          )}
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
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}