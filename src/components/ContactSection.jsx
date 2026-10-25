import { useState } from 'react';

const RECEIVING_EMAIL = 'lanka360sachith@gmail.com';
const WHATSAPP_NUMBER = '94725879636';

const contactInfo = [
  {
    icon: 'fa-map-marker-alt',
    title: 'Head Office',
    lines: ['No 123, Main Street, Ratnapura, Sri Lanka'],
    link: null,
  },
  {
    icon: 'fa-phone-alt',
    title: 'Call & Direct WhatsApp',
    lines: ['+94 72 587 9636'],
    link: 'tel:+94725879636',
  },
  {
    icon: 'fa-envelope',
    title: 'Email Inquiry',
    lines: ['lanka360sachith@gmail.com'],
    link: 'mailto:lanka360sachith@gmail.com',
  },
  {
    icon: 'fa-clock',
    title: 'Office Hours',
    lines: ['Mon - Sat: 8:30 AM - 8:00 PM', 'Sunday: 24/7 Emergency WhatsApp'],
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

export default function ContactSection() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState(null);
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
      await fetch(`https://formsubmit.co/ajax/${RECEIVING_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `🌴 Lanka 360 Inquiry - ${form.subject}`,
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
    setForm(emptyForm);
    setSubmitting(false);
    setTimeout(() => setStatus(null), 8000);
  };

  const whatsappMessage = encodeURIComponent(
    "Hello Lanka 360, I'd like to inquire about a Sri Lanka tour."
  );

  return (
    <>
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
                  <p key={i} className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {c.link && i === 0 ? (
                      <a href={c.link} className="hover:text-gold-600 transition font-medium">
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
                  <strong className="text-gold-600 dark:text-gold-400">email inbox</strong>{' '}
                  and open a pre-filled{' '}
                  <strong className="text-emerald-600 dark:text-emerald-400">WhatsApp chat</strong>{' '}
                  - so you get the fastest reply.
                </p>
              </div>

              {status === 'success' && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 flex items-start gap-3">
                  <i className="fas fa-check-circle text-emerald-600 dark:text-emerald-400 text-lg mt-0.5" />
                  <div>
                    <p className="font-bold text-sm">Message sent successfully!</p>
                    <p className="text-xs mt-1">
                      Your inquiry was emailed to our team and a WhatsApp chat was opened. We'll reply within 2 hours.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-widest mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <i className="fas fa-user absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none" />
                      <input required name="name" value={form.name} onChange={handleChange} type="text" placeholder="John Doe" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-9 pr-4 py-3 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-widest mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <i className="fas fa-envelope absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none" />
                      <input required name="email" value={form.email} onChange={handleChange} type="email" placeholder="john@example.com" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-9 pr-4 py-3 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-widest mb-1.5">
                      Phone / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <i className="fas fa-phone absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none" />
                      <input required name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="+1 234 567 890" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-9 pr-4 py-3 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-widest mb-1.5">
                      Country
                    </label>
                    <div className="relative">
                      <i className="fas fa-globe absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none" />
                      <input name="country" value={form.country} onChange={handleChange} type="text" placeholder="United Kingdom" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-9 pr-4 py-3 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-widest mb-1.5">
                      Subject
                    </label>
                    <select name="subject" value={form.subject} onChange={handleChange} className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition">
                      {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-widest mb-1.5">
                      Travelers
                    </label>
                    <input name="travelers" value={form.travelers} onChange={handleChange} type="number" min="1" max="30" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-widest mb-1.5">
                      Travel Date
                    </label>
                    <input name="travelDate" value={form.travelDate} onChange={handleChange} type="date" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-widest mb-1.5">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea required name="message" value={form.message} onChange={handleChange} rows="5" placeholder="Tell us your travel dates, group size, and favourite places..." className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition resize-none" />
                </div>

                <div className="pt-2">
                  <button type="submit" disabled={submitting} className="w-full bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 hover:from-gold-600 hover:via-amber-600 hover:to-gold-700 disabled:opacity-60 disabled:cursor-not-allowed text-ocean-900 font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:shadow-gold-500/20 transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-widest">
                    {submitting ? (
                      <><i className="fas fa-spinner fa-spin" /><span>Sending...</span></>
                    ) : (
                      <><i className="fas fa-paper-plane" /><span>Send Message</span></>
                    )}
                  </button>

                  <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-4 text-[10px] text-slate-500 dark:text-slate-400">
                    <span className="inline-flex items-center gap-1.5"><i className="fas fa-lock text-emerald-500" /> Secure submission</span>
                    <span className="inline-flex items-center gap-1.5"><i className="fab fa-whatsapp text-emerald-500" /> Email + WhatsApp</span>
                    <span className="inline-flex items-center gap-1.5"><i className="fas fa-clock text-gold-500" /> Reply within 2 hours</span>
                  </div>
                </div>
              </form>
            </div>

            {/* ─── SIDEBAR ─── */}
            <aside className="lg:col-span-2 space-y-6">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="block p-6 rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-700 text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl shrink-0">
                    <i className="fab fa-whatsapp" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Chat on WhatsApp</h3>
                    <p className="text-xs text-emerald-50 mt-1 leading-relaxed">Get instant answers from our team - typically within 15 minutes.</p>
                    <span className="inline-flex items-center gap-1 mt-3 text-xs font-bold">Start Chat <i className="fas fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform" /></span>
                  </div>
                </div>
              </a>

              <div className="rounded-3xl overflow-hidden shadow-xl border border-[#D4AF37]/30">
                <iframe title="Lanka 360 Office Location - Ratnapura, Sri Lanka" src="https://maps.google.com/maps?q=6.6858,80.4036&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="260" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
              </div>

              <div className="p-6 rounded-3xl bg-slate-900 dark:bg-slate-950 text-white border border-slate-800">
                <h4 className="font-serif font-bold mb-4 flex items-center gap-2"><i className="fas fa-shield-alt text-gold-400" /> Registered &amp; Trusted</h4>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><i className="fas fa-check-circle text-gold-500" /> SLTDA Licensed Agency (TS/2026/0412)</li>
                  <li className="flex items-center gap-2"><i className="fas fa-check-circle text-gold-500" /> IATA Partner for Flight Bookings</li>
                  <li className="flex items-center gap-2"><i className="fas fa-check-circle text-gold-500" /> 4.9★ Rated on Google &amp; TripAdvisor</li>
                  <li className="flex items-center gap-2"><i className="fas fa-check-circle text-gold-500" /> Secure Payments - Visa, Mastercard, Amex</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-center">
                <i className="fas fa-check-circle text-emerald-500 text-2xl mb-2" />
                <p className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold">Free cancellation up to 14 days before travel</p>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  );
}