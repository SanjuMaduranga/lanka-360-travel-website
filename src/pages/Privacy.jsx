import SEO from '../components/SEO';

const sections = [
  {
    id: 'information-we-collect',
    title: '1. Information We Collect',
    body: [
      'When you submit an inquiry, book a tour, or contact us through our website, we may collect the following information:',
    ],
    list: [
      'Full name, email address, phone/WhatsApp number',
      'Travel dates, group size, destination preferences',
      'Payment information (processed securely by our payment providers — we never store card numbers)',
      'Technical data: IP address, browser type, device information, pages visited',
      'Any additional details you voluntarily provide in inquiry forms',
    ],
  },
  {
    id: 'how-we-use',
    title: '2. How We Use Your Information',
    body: ['We use your data strictly to deliver and improve our services:'],
    list: [
      'Respond to your inquiries and craft your custom itinerary',
      'Process tour bookings and reservations',
      'Send confirmations, updates, and essential travel information',
      'Improve our website, services, and customer experience',
      'Comply with legal and regulatory obligations',
    ],
  },
  {
    id: 'sharing',
    title: '3. Information Sharing',
    body: [
      'We never sell your personal data. We only share necessary information with:',
    ],
    list: [
      'Hotels, chauffeurs, and activity providers directly involved in your tour',
      'Payment processors who handle your booking payments',
      'Legal authorities when required by Sri Lankan law',
      'Analytics providers (Google Analytics) with anonymized data only',
    ],
  },
  {
    id: 'cookies',
    title: '4. Cookies & Tracking',
    body: [
      'Our website uses cookies and similar technologies to remember preferences (such as your chosen currency and dark/light theme) and to understand how visitors use our site.',
      'You can control cookies through your browser settings. Disabling cookies may limit some website functionality.',
    ],
  },
  {
    id: 'security',
    title: '5. Data Security',
    body: [
      'We use industry-standard safeguards — SSL encryption, secure servers, restricted access — to protect your personal information. However, no method of internet transmission is 100% secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    id: 'rights',
    title: '6. Your Rights',
    body: ['You have the right to:'],
    list: [
      'Access the personal data we hold about you',
      'Request corrections to inaccurate information',
      'Request deletion of your data (subject to legal requirements)',
      'Opt out of marketing communications at any time',
      'Lodge a complaint with your local data protection authority',
    ],
  },
  {
    id: 'retention',
    title: '7. Data Retention',
    body: [
      'We retain personal data only as long as necessary to fulfill the purposes outlined in this policy or to comply with legal obligations. Booking records are typically retained for 7 years for accounting purposes.',
    ],
  },
  {
    id: 'third-party',
    title: '8. Third-Party Links',
    body: [
      'Our website may contain links to third-party websites (TripAdvisor, Google Maps, payment portals). We are not responsible for their privacy practices. Please review their policies before providing personal data.',
    ],
  },
  {
    id: 'children',
    title: '9. Children\'s Privacy',
    body: [
      'Our services are not directed to children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with data, please contact us for removal.',
    ],
  },
  {
    id: 'changes',
    title: '10. Changes to This Policy',
    body: [
      'We may update this Privacy Policy occasionally. Changes take effect immediately upon posting. We\'ll notify you of significant changes via email or a prominent website notice.',
    ],
  },
  {
    id: 'contact',
    title: '11. Contact Us',
    body: [
      'For any privacy-related questions or requests, please contact:',
    ],
    contact: {
      email: 'privacy@lanka360.com',
      phone: '+94 77 123 4567',
      address: 'No 142, Galle Road, Colombo 03, Sri Lanka',
    },
  },
];

export default function Privacy() {
  const lastUpdated = 'January 15, 2026';

  return (
    <>
      <SEO
        title="Privacy Policy | Lanka 360"
        description="Read Lanka 360's Privacy Policy to understand how we collect, use, and protect your personal data when you book a Sri Lanka tour."
        url="https://lanka360.com/privacy"
      />

      <main>
        {/* HERO */}
        <section className="bg-ocean-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-400 text-xs font-bold uppercase tracking-widest mb-4">
              <i className="fas fa-shield-alt" /> Legal
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-slate-300 text-sm">
              Last updated: <strong className="text-gold-400">{lastUpdated}</strong>
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-16 bg-slate-50 dark:bg-slate-950 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* TOC Sidebar */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md">
                <h3 className="font-serif font-bold text-ocean-900 dark:text-slate-100 mb-3 text-sm uppercase tracking-wider">
                  <i className="fas fa-list text-gold-500 mr-2" /> Contents
                </h3>
                <ul className="space-y-2 text-xs">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="text-slate-600 dark:text-slate-400 hover:text-gold-500 transition block py-1"
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Body */}
            <article className="lg:col-span-3 bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md">
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8">
                At <strong className="text-ocean-900 dark:text-slate-200">Lanka 360</strong>, we take your privacy seriously.
                This policy explains what information we collect, how we use it,
                and the rights you have over your personal data. By using our
                website or booking a tour with us, you agree to the practices
                described below.
              </p>

              {sections.map((s) => (
                <section key={s.id} id={s.id} className="mb-10 scroll-mt-24">
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-ocean-900 dark:text-slate-100 mb-4 border-b border-gold-500/30 pb-2">
                    {s.title}
                  </h2>
                  {s.body.map((p, i) => (
                    <p key={i} className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                      {p}
                    </p>
                  ))}
                  {s.list && (
                    <ul className="mt-3 space-y-2 pl-1">
                      {s.list.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <i className="fas fa-check-circle text-gold-500 mt-0.5 text-xs" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {s.contact && (
                    <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm space-y-1.5">
                      <p className="text-slate-700 dark:text-slate-300">
                        <i className="fas fa-envelope text-gold-500 w-5" />
                        <a href={`mailto:${s.contact.email}`} className="hover:text-gold-500 transition">
                          {s.contact.email}
                        </a>
                      </p>
                      <p className="text-slate-700 dark:text-slate-300">
                        <i className="fas fa-phone-alt text-gold-500 w-5" />
                        <a href="tel:+94771234567" className="hover:text-gold-500 transition">
                          {s.contact.phone}
                        </a>
                      </p>
                      <p className="text-slate-700 dark:text-slate-300">
                        <i className="fas fa-map-marker-alt text-gold-500 w-5" />
                        {s.contact.address}
                      </p>
                    </div>
                  )}
                </section>
              ))}

              <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
                <p>
                  Questions about this policy? Email{' '}
                  <a href="mailto:privacy@lanka360.com" className="text-gold-600 dark:text-gold-400 hover:underline font-semibold">
                    privacy@lanka360.com
                  </a>
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}