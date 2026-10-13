import SEO from '../components/SEO';

const sections = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    body: [
      'By accessing the Lanka 360 website or booking any tour or service with us, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.',
    ],
  },
  {
    id: 'bookings',
    title: '2. Bookings & Confirmation',
    body: [
      'All bookings are subject to availability. A booking is confirmed only upon receipt of our written confirmation email and the required deposit.',
    ],
    list: [
      'A deposit of 30% of the total tour cost is required to confirm your booking.',
      'The remaining balance is due 30 days before your travel start date.',
      'Bookings made within 30 days of travel require full payment at time of booking.',
      'All prices are quoted in USD unless otherwise stated.',
    ],
  },
  {
    id: 'payments',
    title: '3. Payments',
    body: [
      'We accept major credit cards, bank transfers, and select digital wallets. All transactions are processed through secure third-party payment providers.',
    ],
    list: [
      'Currency conversion rates are determined by your bank at time of payment.',
      'Any bank transfer fees or currency conversion charges are borne by the traveler.',
      'We do not store your full credit card information on our servers.',
    ],
  },
  {
    id: 'cancellation',
    title: '4. Cancellation & Refunds',
    body: [
      'Cancellation charges apply based on how close to your travel date you cancel:',
    ],
    list: [
      '60+ days before travel: Full refund minus 10% admin fee',
      '30–59 days before travel: 50% refund of total tour cost',
      '15–29 days before travel: 25% refund of total tour cost',
      'Less than 15 days before travel: No refund',
      'No-show or early departure: No refund',
    ],
    footer:
      'Refunds are processed within 14 business days to your original payment method.',
  },
  {
    id: 'changes',
    title: '5. Changes by the Traveler',
    body: [
      'You may request date or itinerary changes up to 30 days before travel, subject to availability. A change fee of $50 per person per change may apply.',
    ],
  },
  {
    id: 'changes-by-us',
    title: '6. Changes or Cancellation by Lanka 360',
    body: [
      'In rare cases due to weather, safety concerns, or events beyond our control (force majeure), we may need to alter or cancel a tour. If this happens:',
    ],
    list: [
      'We will offer the closest possible alternative itinerary.',
      'If no alternative is acceptable, we will refund 100% of amounts paid.',
      'We are not liable for additional costs such as flight change fees.',
    ],
  },
  {
    id: 'travel-documents',
    title: '7. Travel Documents & Visas',
    body: [
      'Travelers are solely responsible for obtaining valid passports, visas (Sri Lanka ETA), and any required vaccinations. Lanka 360 provides guidance but cannot be held liable for entry refusal by immigration authorities.',
    ],
  },
  {
    id: 'insurance',
    title: '8. Travel Insurance',
    body: [
      'Comprehensive travel insurance is strongly recommended for all travelers. Lanka 360 is not liable for costs arising from medical emergencies, trip cancellations, lost luggage, or personal injury.',
    ],
  },
  {
    id: 'liability',
    title: '9. Limitation of Liability',
    body: [
      'Lanka 360 acts as an agent for hotels, transport providers, and excursion operators. We are not liable for any loss, injury, delay, or damage arising from the acts of these third parties.',
      'Our maximum liability for any claim is limited to the total amount paid to Lanka 360 for the affected portion of the tour.',
    ],
  },
  {
    id: 'conduct',
    title: '10. Traveler Conduct',
    body: [
      'Travelers are expected to respect local customs, wildlife, and other guests. Lanka 360 reserves the right to remove any traveler whose behavior endangers themselves, others, or the environment, without refund.',
    ],
  },
  {
    id: 'ip',
    title: '11. Intellectual Property',
    body: [
      'All content on this website — text, images, logos, itineraries — is the property of Lanka 360 and protected by copyright. You may not reproduce or reuse it without written permission.',
    ],
  },
  {
    id: 'law',
    title: '12. Governing Law',
    body: [
      'These Terms are governed by the laws of Sri Lanka. Any disputes will be subject to the exclusive jurisdiction of the courts of Colombo, Sri Lanka.',
    ],
  },
  {
    id: 'contact',
    title: '13. Contact',
    body: ['For questions about these Terms, contact us at:'],
    contact: {
      email: 'legal@lanka360.com',
      phone: '+94 77 123 4567',
      address: 'No 142, Galle Road, Colombo 03, Sri Lanka',
    },
  },
];

export default function Terms() {
  const lastUpdated = 'January 15, 2026';

  return (
    <>
      <SEO
        title="Terms & Conditions | Lanka 360"
        description="Read Lanka 360's Terms & Conditions covering bookings, payments, cancellations, refunds, and liability for our Sri Lanka tours."
        url="https://lanka360.com/terms"
      />

      <main>
        <section className="bg-ocean-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-400 text-xs font-bold uppercase tracking-widest mb-4">
              <i className="fas fa-file-contract" /> Legal
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
              Terms &amp; Conditions
            </h1>
            <p className="text-slate-300 text-sm">
              Last updated: <strong className="text-gold-400">{lastUpdated}</strong>
            </p>
          </div>
        </section>

        <section className="py-16 bg-slate-50 dark:bg-slate-950 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-4 gap-10">
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md max-h-[80vh] overflow-y-auto">
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

            <article className="lg:col-span-3 bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md">
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8">
                These Terms &amp; Conditions ("Terms") govern your use of{' '}
                <strong className="text-ocean-900 dark:text-slate-200">Lanka 360's</strong> services, including tour
                bookings, transfers, and excursions. Please read them carefully
                before making a booking.
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
                  {s.footer && (
                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 italic">
                      {s.footer}
                    </p>
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
            </article>
          </div>
        </section>
      </main>
    </>
  );
}