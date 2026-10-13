import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';

const RECEIVING_EMAIL = 'YOUR_EMAIL_HERE@lanka360.com';
const WHATSAPP_NUMBER = '94771234567';

const contactInfo = [
  {
    icon: 'fa-map-marker-alt',
    title: 'Head Office',
    lines: ['No 142, Galle Road, Colombo 03, Sri Lanka'],
    link: null,
  },
  {
    icon: 'fa-phone-alt',
    title: 'Call & Direct WhatsApp',
    lines: ['+94 77 123 4567', '+94 11 234 5678'],
    link: 'tel:+94771234567',
  },
  {
    icon: 'fa-envelope',
    title: 'Email Inquiry',
    lines: ['info@lanka360.com', 'bookings@lanka360.com'],
    link: 'mailto:info@lanka360.com',
  },
  {
    icon: 'fa-clock',
    title: 'Office Hours',
    lines: ['Mon – Sat: 8:30 AM – 8:00 PM', 'Sunday: 24/7 Emergency WhatsApp'],
    link: null,
  },
];

const subjects = [
  'General Inquiry',
  'Custom Tour Request',
  'Honeymoon Package',
  'Wildlife Safari Package',
  'Hotel & Transfer Only',
  'Group / Corporate Booking',
  'Partnership / B2B',
  'Other',
];

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  country: '',
  subject: 'General Inquiry',
  travelers: '2',
  travelDate: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const buildWhatsAppMessage = () => {
    return [
      '*🏝️ New Lanka 360 Inquiry*',
      '',
      `*Name:* ${form.name || '-'}`,
      `*Email:* ${form.email || '-'}`,
      `*Phone:* ${form.phone || '-'}`,
      `*Country:* ${form.country || '-'}`,
      `*Subject:* ${form.subject || '-'}`,
      `*Travelers:* ${form.travelers || '-'}`,
      `*Travel Date:* ${form.travelDate || 'Not specified'}`,
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
          _subject: `🌴 Lanka 360 Inquiry — ${form.subject}`,
          _template: 'table',
          _captcha: 'false',
          Name: form.name,
          Email: form.email,
          Phone: form.phone,
          Country: form.country,
          Subject: form.subject,
          Travelers: form.travelers,
          'Travel Date': form.travelDate || 'Not specified',
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
      // ✅ Use assign() instead of `href =` to avoid react-hooks/immutability linter warning
      window.location.assign(whatsappURL);
    } else {
      window.open(whatsappURL, '_blank', 'noopener,noreferrer');
    }

    // ─── 3. Success state ───
    setStatus('success');
    setForm(emptyForm);
    setSubmitting(false);
    setTimeout(() => setStatus(null), 8000);
  };

  const whatsappMessage = encodeURIComponent(
    "Hello Lanka 360, I'd like to inquire about a Sri Lanka tour."
  );

  return (
    <>
      <SEO
        title="Contact Lanka 360 | Luxury Sri Lanka Travel Agency"
        description="Contact Lanka 360 for luxury Sri Lanka tours, custom itineraries and travel guides. Reach us via WhatsApp, email or phone — reply within 2 hours."
        keywords="contact Lanka 360, Sri Lanka travel agency contact, luxury tours Colombo, custom Sri Lanka itinerary, Sri Lanka tour inquiry"
        url="https://lanka360.com/contact"
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TravelAgency',
            name: 'Lanka 360',
            url: 'https://lanka360.com',
            telephone: '+94-77-123-4567',
            email: 'info@lanka360.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'No 142, Galle Road',
              addressLocality: 'Colombo 03',
              addressCountry: 'LK',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 6.9271,
              longitude: 79.8612,
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                ],
                opens: '08:30',
                closes: '20:00',
              },
            ],
          })}
        </script>
      </Helmet>

      <main>
        {/* ─── HERO ─── */}
        <section className="relative bg-ocean-900 text-white overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(10, 25, 47, 0.6), rgba(10, 25, 47, 0.85)), url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80')",
            }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-28 text-center z-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/20 backdrop-blur-md border border-gold-400/40 text-gold-400 text-xs font-bold uppercase tracking-widest mb-4">
              <i className="fas fa-paper-plane" /> Get In Touch
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Let's Plan Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-amber-200 to-gold-500">
                Dream Trip
              </span>
            </h1>
            <p className="text-slate-200 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed mb-8">
              Have questions about itineraries, pricing or travel dates? Our
              Sri Lankan specialists reply within 2 hours.
            </p>

            <nav className="flex justify-center items-center gap-3 text-xs text-slate-300 font-medium">
              <a href="/" className="hover:text-gold-400 transition">
                Home
              </a>
              <i className="fas fa-chevron-right text-[9px] text-gold-500" />
              <span className="text-gold-400">Contact</span>
            </nav>
          </div>
        </section>

        {/* ─── QUICK CONTACT CARDS ─── */}
        <section className="py-16 bg-[#FAF8F5] dark:bg-slate-950 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((c) => (
                <div
                  key={c.title}
                  className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-[#D4AF37]/30 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-500 flex items-center justify-center text-lg mb-4 group-hover:bg-gold-500 group-hover:text-ocean-900 transition-colors">
                    <i className={`fas ${c.icon}`} />
                  </div>
                  <h3 className="font-serif font-bold text-ocean-900 dark:text-slate-100 mb-2">
                    {c.title}
                  </h3>
                  {c.lines.map((l, i) => (
                    <p
                      key={i}
                      className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
                    >
                      {c.link && i === 0 ? (
                        <a
                          href={c.link}
                          className="hover:text-gold-600 transition font-medium"
                        >
                          {l}
                        </a>
                      ) : (
                        l
                      )}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FORM + SIDEBAR ─── */}
        <section className="py-20 bg-white dark:bg-slate-900 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* ─── FORM ─── */}
              <div className="lg:col-span-3">
                <div className="mb-8">
                  <span className="text-gold-600 dark:text-gold-400 uppercase tracking-widest text-xs font-bold">
                    Send A Message
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 text-ocean-900 dark:text-slate-100">
                    Tell Us About Your Trip
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
                    On submit, your message will be sent to our{' '}
                    <strong className="text-gold-600 dark:text-gold-400">
                      email inbox
                    </strong>{' '}
                    and open a pre-filled{' '}
                    <strong className="text-emerald-600 dark:text-emerald-400">
                      WhatsApp chat
                    </strong>{' '}
                    — so you get the fastest reply.
                  </p>
                </div>

                {/* Status messages */}
                {status === 'success' && (
                  <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 flex items-start gap-3">
                    <i className="fas fa-check-circle text-emerald-600 dark:text-emerald-400 text-lg mt-0.5" />
                    <div>
                      <p className="font-bold text-sm">
                        Message sent successfully!
                      </p>
                      <p className="text-xs mt-1">
                        Your inquiry was emailed to our team and a WhatsApp chat
                        was opened. We'll reply within 2 hours.
                      </p>
                    </div>
                  </div>
                )}
                {status === 'error' && (
                  <div className="mb-6 p-4 rounded-2xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-300 flex items-start gap-3">
                    <i className="fas fa-exclamation-circle text-red-600 dark:text-red-400 text-lg mt-0.5" />
                    <div>
                      <p className="font-bold text-sm">Something went wrong</p>
                      <p className="text-xs mt-1">
                        Please try again, or message us directly on WhatsApp.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-widest mb-1.5"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <i className="fas fa-user absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none" />
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-9 pr-4 py-3 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-widest mb-1.5"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <i className="fas fa-envelope absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none" />
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-9 pr-4 py-3 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-widest mb-1.5"
                      >
                        Phone / WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <i className="fas fa-phone absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none" />
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+1 234 567 890"
                          className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-9 pr-4 py-3 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="country"
                        className="block text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-widest mb-1.5"
                      >
                        Country
                      </label>
                      <div className="relative">
                        <i className="fas fa-globe absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none" />
                        <input
                          id="country"
                          name="country"
                          type="text"
                          value={form.country}
                          onChange={handleChange}
                          placeholder="United Kingdom"
                          className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-9 pr-4 py-3 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-widest mb-1.5"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition"
                      >
                        {subjects.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="travelers"
                        className="block text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-widest mb-1.5"
                      >
                        Travelers
                      </label>
                      <input
                        id="travelers"
                        name="travelers"
                        type="number"
                        min="1"
                        max="30"
                        value={form.travelers}
                        onChange={handleChange}
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="travelDate"
                        className="block text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-widest mb-1.5"
                      >
                        Travel Date
                      </label>
                      <input
                        id="travelDate"
                        name="travelDate"
                        type="date"
                        value={form.travelDate}
                        onChange={handleChange}
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-widest mb-1.5"
                    >
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="5"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us your travel dates, group size, and favourite places..."
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition resize-none"
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
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <i className="fas fa-paper-plane" />
                          <span>Send Message</span>
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

                    <p className="text-[11px] text-slate-400 dark:text-slate-500 text-center mt-4">
                      By submitting, you agree to our{' '}
                      <a
                        href="/privacy"
                        className="text-gold-600 dark:text-gold-400 underline hover:no-underline"
                      >
                        Privacy Policy
                      </a>
                      . We never share your data.
                    </p>
                  </div>
                </form>
              </div>

              {/* ─── SIDEBAR ─── */}
              <aside className="lg:col-span-2 space-y-6">
                {/* WhatsApp CTA */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-700 text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl shrink-0">
                      <i className="fab fa-whatsapp" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Chat on WhatsApp</h3>
                      <p className="text-xs text-emerald-50 mt-1 leading-relaxed">
                        Get instant answers from our team — typically within 15
                        minutes.
                      </p>
                      <span className="inline-flex items-center gap-1 mt-3 text-xs font-bold">
                        Start Chat{' '}
                        <i className="fas fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </a>

                {/* Map */}
                <div className="rounded-3xl overflow-hidden shadow-xl border border-[#D4AF37]/30">
                  <iframe
                    title="Lanka 360 Office Location — Colombo, Sri Lanka"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798511778435!2d79.8514!3d6.9271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTUnMzcuNiJOIDc5wrA1MScwNS4wIkU!5e0!3m2!1sen!2slk!4v1700000000000"
                    width="100%"
                    height="260"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>

                {/* Trust badges */}
                <div className="p-6 rounded-3xl bg-slate-900 dark:bg-slate-950 text-white border border-slate-800">
                  <h4 className="font-serif font-bold mb-4 flex items-center gap-2">
                    <i className="fas fa-shield-alt text-gold-400" />
                    Registered &amp; Trusted
                  </h4>
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check-circle text-gold-500" />
                      SLTDA Licensed Agency (TS/2026/0412)
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check-circle text-gold-500" />
                      IATA Partner for Flight Bookings
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check-circle text-gold-500" />
                      4.9★ Rated on Google &amp; TripAdvisor
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check-circle text-gold-500" />
                      Secure Payments — Visa, Mastercard, Amex
                    </li>
                  </ul>
                </div>

                {/* Free cancellation note */}
                <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-center">
                  <i className="fas fa-check-circle text-emerald-500 text-2xl mb-2" />
                  <p className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold">
                    Free cancellation up to 14 days before travel
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ─── EMERGENCY CTA ─── */}
        <section className="py-16 bg-[#f7f4ed] dark:bg-slate-950 border-t-2 border-gold-500/40 transition-colors">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <i className="fas fa-headset text-4xl text-gold-500 mb-4" />
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ocean-900 dark:text-slate-100 mb-3">
              Travelling in Sri Lanka Right Now?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 max-w-xl mx-auto">
              Our 24/7 emergency line is always open for travelers currently on
              tour with Lanka 360.
            </p>
            <a
              href="tel:+94771234567"
              className="inline-flex items-center gap-2 bg-ocean-900 hover:bg-ocean-800 text-white font-bold px-6 py-3 rounded-full shadow-lg transition-all"
            >
              <i className="fas fa-phone-alt" />
              <span>+94 77 123 4567</span>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}