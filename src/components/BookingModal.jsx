import { useState, useEffect } from 'react';
import { packagesList } from '../data/siteData';

const RECEIVING_EMAIL = 'sanju990421@gmail.com';
const WHATSAPP_NUMBER = '94762125884';

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  country: '',
  packageId: '',
  travelDate: '',
  adults: '2',
  children: '0',
  message: '',
};

export default function BookingModal({ isOpen, onClose }) {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState(null); // 'success' | null
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

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Find the selected package (if any)
  const selectedPkg = packagesList.find((p) => p.id === form.packageId) || null;

  // Derived values
  const adults = Math.max(1, Number(form.adults) || 1);
  const children = Math.max(0, Number(form.children) || 0);
  const guests = adults + children;
  const rooms = Math.ceil(adults / 2);
  const estimatedTotal = selectedPkg
    ? selectedPkg.priceUSD * Math.max(1, rooms)
    : 0;

  const buildWhatsAppMessage = () => {
    const lines = [
      '*🏝️ Lanka 360 — General Booking Request*',
      '',
      `*Package:* ${selectedPkg ? selectedPkg.title : 'Not selected yet'}`,
    ];

    if (selectedPkg) {
      lines.push(
        `*Duration:* ${selectedPkg.durationDays} Days / ${selectedPkg.durationDays - 1} Nights`,
        `*Category:* ${selectedPkg.category}`,
        `*Price (per room):* $${selectedPkg.priceUSD.toLocaleString()}`
      );
    }

    lines.push(
      '',
      '*── Traveler Details ──*',
      `*Name:* ${form.name || '-'}`,
      `*Email:* ${form.email || '-'}`,
      `*Phone:* ${form.phone || '-'}`,
      `*Country:* ${form.country || '-'}`,
      `*Travel Date:* ${form.travelDate || 'Not specified'}`,
      `*Adults:* ${adults}`,
      `*Children:* ${children}`,
      `*Total Guests:* ${guests}`
    );

    if (estimatedTotal > 0) {
      lines.push(
        '',
        '*── Estimated Total ──*',
        `$${estimatedTotal.toLocaleString()} USD (${rooms} room${rooms > 1 ? 's' : ''})`
      );
    }

    lines.push('', '*Message:*', form.message || '-');

    return lines.join('\n');
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
      await fetch(`https://formsubmit.co/ajax/${RECEIVING_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `🎫 Lanka 360 — General Booking Request`,
          _template: 'table',
          _captcha: 'false',
          Package: selectedPkg ? selectedPkg.title : 'Not selected',
          Duration: selectedPkg
            ? `${selectedPkg.durationDays} Days / ${selectedPkg.durationDays - 1} Nights`
            : 'N/A',
          Category: selectedPkg ? selectedPkg.category : 'N/A',
          Name: form.name,
          Email: form.email,
          Phone: form.phone,
          Country: form.country,
          'Travel Date': form.travelDate || 'Not specified',
          Adults: adults,
          Children: children,
          'Total Guests': guests,
          'Estimated Total': estimatedTotal
            ? `$${estimatedTotal.toLocaleString()} (${rooms} room${rooms > 1 ? 's' : ''})`
            : 'N/A',
          Message: form.message,
        }),
      }).catch(() => {});
    } catch (err) {
      console.error('Email send failed:', err);
    }

    if (isMobile) {
      window.location.assign(whatsappURL);
    } else {
      window.open(whatsappURL, '_blank', 'noopener,noreferrer');
    }

    setStatus('success');
    setSubmitting(false);

    setTimeout(() => {
      setStatus(null);
      setForm(emptyForm);
      onClose();
    }, 3500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-3 sm:p-6 overflow-y-auto animate-[fadeIn_0.2s_ease-out]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="bookingModalTitle"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div
        className="relative w-full max-w-2xl my-4 sm:my-8 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden animate-[slideUp_0.3s_ease-out] sm:max-h-[90vh] sm:flex sm:flex-col"
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

        {/* ─── HEADER ─── */}
        <div className="relative rounded-t-3xl overflow-hidden bg-gradient-to-br from-ocean-900 via-ocean-800 to-slate-900 text-white px-6 sm:px-8 py-7 pr-20 shrink-0">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold-500/20 rounded-full blur-3xl pointer-events-none" />

          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-400 text-[10px] font-bold uppercase tracking-widest mb-3 backdrop-blur-sm">
            <i className="fas fa-calendar-check" />
            Instant Booking Request
          </span>

          <h2
            id="bookingModalTitle"
            className="font-serif text-2xl sm:text-3xl font-bold leading-tight"
          >
            Book Your Lanka 360 Tour
          </h2>
          <p className="text-xs text-slate-300 mt-1.5">
            Fill in the details — we'll reply within 2 hours via email &amp; WhatsApp.
          </p>
        </div>

        {/* ─── BODY ─── */}
        <div className="p-6 sm:p-8 sm:overflow-y-auto sm:flex-1">
          {/* Package summary strip */}
          {selectedPkg && (
            <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-800/60 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-4">
              <img
                src={selectedPkg.image}
                alt={selectedPkg.title}
                className="w-16 h-16 rounded-xl object-cover shrink-0 border border-slate-200 dark:border-slate-700"
              />
              <div className="flex-1 min-w-0">
                <div className="text-[10px] uppercase font-bold tracking-widest text-gold-600 dark:text-gold-400">
                  Selected Package
                </div>
                <div className="font-serif font-bold text-ocean-900 dark:text-slate-100 text-sm truncate">
                  {selectedPkg.title}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {selectedPkg.durationDays}D / {selectedPkg.durationDays - 1}N ·{' '}
                  {selectedPkg.category} · ${selectedPkg.priceUSD.toLocaleString()}/room
                </div>
              </div>
              {estimatedTotal > 0 && (
                <div className="text-right shrink-0">
                  <div className="text-[10px] uppercase font-bold tracking-widest text-slate-500 dark:text-slate-400">
                    Est. Total
                  </div>
                  <div className="font-serif text-lg font-extrabold text-emerald-600 dark:text-emerald-400">
                    ${estimatedTotal.toLocaleString()}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Success state */}
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
              {/* Row 1: Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="bookingName"
                    className="block text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-widest mb-1.5"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <i className="fas fa-user absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none" />
                    <input
                      id="bookingName"
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
                    htmlFor="bookingEmail"
                    className="block text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-widest mb-1.5"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <i className="fas fa-envelope absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none" />
                    <input
                      id="bookingEmail"
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

              {/* Row 2: Phone + Country */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="bookingPhone"
                    className="block text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-widest mb-1.5"
                  >
                    WhatsApp / Phone <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <i className="fas fa-phone absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none" />
                    <input
                      id="bookingPhone"
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
                    htmlFor="bookingCountry"
                    className="block text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-widest mb-1.5"
                  >
                    Country
                  </label>
                  <div className="relative">
                    <i className="fas fa-globe absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none" />
                    <input
                      id="bookingCountry"
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

              {/* Package select */}
              <div>
                <label
                  htmlFor="bookingPackage"
                  className="block text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-widest mb-1.5"
                >
                  Interested Package
                </label>
                <select
                  id="bookingPackage"
                  name="packageId"
                  value={form.packageId}
                  onChange={handleChange}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-3 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition"
                >
                  <option value="">Not sure yet — help me choose</option>
                  {packagesList.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.title} ({p.durationDays}D · ${p.priceUSD.toLocaleString()})
                    </option>
                  ))}
                </select>
              </div>

              {/* Row 3: Date + Adults + Children */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="bookingDate"
                    className="block text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-widest mb-1.5"
                  >
                    Travel Date
                  </label>
                  <input
                    id="bookingDate"
                    name="travelDate"
                    type="date"
                    value={form.travelDate}
                    onChange={handleChange}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-3 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="bookingAdults"
                    className="block text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-widest mb-1.5"
                  >
                    Adults (12+)
                  </label>
                  <input
                    id="bookingAdults"
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
                    htmlFor="bookingChildren"
                    className="block text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-widest mb-1.5"
                  >
                    Children (2–11)
                  </label>
                  <input
                    id="bookingChildren"
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

              {/* Message */}
              <div>
                <label
                  htmlFor="bookingMessage"
                  className="block text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-widest mb-1.5"
                >
                  Special Requests / Questions
                </label>
                <textarea
                  id="bookingMessage"
                  name="message"
                  rows="3"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hotel preferences, dietary needs, or flight details..."
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-3 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition resize-none"
                />
              </div>

              {/* Submit */}
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
                      <i className="fas fa-check-circle" />
                      <span>Confirm &amp; Reserve</span>
                    </>
                  )}
                </button>

                {/* Trust line */}
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-4 text-[10px] text-slate-500 dark:text-slate-400">
                  <span className="inline-flex items-center gap-1.5">
                    <i className="fas fa-lock text-emerald-500" />
                    Secure submission
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <i className="fab fa-whatsapp text-emerald-500" />
                    Email + WhatsApp
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <i className="fas fa-clock text-gold-500" />
                    Reply within 2 hours
                  </span>
                </div>
              </div>
            </form>
          )}
        </div>

        {/* ─── FOOTER ─── */}
        <div className="px-6 sm:px-8 py-4 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 flex-wrap rounded-b-3xl shrink-0">
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            <i className="fas fa-shield-alt text-gold-500 mr-1.5" />
            Lanka 360 · SLTDA Licensed TS/2026/0412
          </p>
        </div>
      </div>
    </div>
  );
}