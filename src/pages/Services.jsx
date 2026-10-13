import { useState } from 'react';
import SEO from '../components/SEO';

// ---------------------------------------------------------------
// SERVICES DATA — edit here to update the page
// ---------------------------------------------------------------
const servicesList = [
  {
    id: 'chauffeur',
    icon: 'fa-user-tie',
    title: 'Tourist Chauffeur Guides',
    tagline: 'English-speaking certified drivers',
    desc: 'Travel with SLTDA-certified driver guides in luxury air-conditioned vehicles. Local insights, safe driving, and total flexibility on your route.',
    features: [
      'SLTDA-licensed English-speaking guides',
      'Luxury sedan, SUV or passenger van',
      'Fuel, tolls & parking included',
      'Available 24/7 during your tour',
    ],
    priceFrom: 75,
    unit: 'per day',
  },
  {
    id: 'airport',
    icon: 'fa-plane-arrival',
    title: 'Airport VIP Transfers',
    tagline: 'Meet-and-greet at CMB',
    desc: 'Punctual 24/7 pickup and drop-off at Bandaranaike International Airport with a dedicated meet-and-greet service and luggage assistance.',
    features: [
      'Flight tracking for delays',
      'Name-board meet & greet',
      'Complimentary bottled water & WiFi',
      'Fixed transparent pricing',
    ],
    priceFrom: 35,
    unit: 'per transfer',
  },
  {
    id: 'train',
    icon: 'fa-train',
    title: 'Scenic Train Ticket Booking',
    tagline: 'Kandy → Ella reserved seats',
    desc: 'Skip the sold-out counters. We reserve first and second-class observation seats on Sri Lanka’s legendary hill country railway line.',
    features: [
      'Guaranteed reserved seats',
      'First & second-class observation',
      'E-ticket delivery to your hotel',
      'Dedicated support on travel day',
    ],
    priceFrom: 25,
    unit: 'per ticket',
  },
  {
    id: 'safari',
    icon: 'fa-binoculars',
    title: 'Jeep Safari Experiences',
    tagline: 'Yala, Udawalawe & Minneriya',
    desc: 'Book private 4x4 safari jeeps with experienced trackers at Sri Lanka’s premier national parks — ideal for leopard, elephant and bird watching.',
    features: [
      'Private 4x4 with open roof',
      'Experienced park tracker',
      'Park entrance assistance',
      'Dawn & dusk departures',
    ],
    priceFrom: 65,
    unit: 'per jeep',
  },
  {
    id: 'helicopter',
    icon: 'fa-helicopter',
    title: 'Helicopter & Seaplane Tours',
    tagline: 'Aerial Sri Lanka in style',
    desc: 'Skip the long drives and see Sigiriya, the Cultural Triangle and southern coastline from above with premium helicopter and seaplane charters.',
    features: [
      'Private charters available',
      'Airport-to-resort transfers',
      'Scenic aerial sightseeing',
      'Custom multi-stop itineraries',
    ],
    priceFrom: 1200,
    unit: 'per hour',
  },
  {
    id: 'hotels',
    icon: 'fa-hotel',
    title: 'Luxury Hotel Reservations',
    tagline: '5-star & boutique villas',
    desc: 'Access our preferred partner rates at Sri Lanka’s finest heritage hotels, tea estate bungalows, and beachfront boutique resorts.',
    features: [
      'Preferred partner pricing',
      'Room upgrades on availability',
      'Honeymoon & anniversary perks',
      'Free cancellation options',
    ],
    priceFrom: 0,
    unit: 'commission-free',
  },
  {
    id: 'wellness',
    icon: 'fa-spa',
    title: 'Ayurveda & Wellness Retreats',
    tagline: 'Holistic mind–body healing',
    desc: 'Curated Ayurvedic retreats with doctor consultations, daily yoga, herbal treatments, and organic farm-to-table cuisine on the southern coast.',
    features: [
      'Personalised Ayurvedic doctor',
      'Daily yoga & meditation',
      'Authentic herbal treatments',
      'Detox & wellness cuisine',
    ],
    priceFrom: 180,
    unit: 'per day',
  },
  {
    id: 'honeymoon',
    icon: 'fa-heart',
    title: 'Honeymoon & Romance',
    tagline: 'Private butlers & candlelit dinners',
    desc: 'Intimate escapes for couples — private beach dinners, couples spa rituals, scenic helicopter rides, and a dedicated 24/7 personal butler.',
    features: [
      'Private candlelit beach dinner',
      'Couples spa rituals',
      'Scenic helicopter tour',
      'Personal 24/7 butler',
    ],
    priceFrom: 7800,
    unit: 'per couple',
  },
];

// WHY CHOOSE US
const whyUs = [
  {
    icon: 'fa-shield-alt',
    title: 'SLTDA Registered',
    desc: 'Fully licensed by the Sri Lanka Tourism Development Authority (TS/2026/0412).',
  },
  {
    icon: 'fa-headset',
    title: '24/7 Concierge',
    desc: 'A dedicated tour manager reachable on WhatsApp throughout your entire trip.',
  },
  {
    icon: 'fa-award',
    title: 'Award Winning',
    desc: 'Top-rated travel agency on Google & TripAdvisor with 4.9★ average rating.',
  },
  {
    icon: 'fa-wallet',
    title: 'Transparent Pricing',
    desc: 'No hidden fees. All fuel, tolls, and taxes quoted upfront in your itinerary.',
  },
];

// PROCESS STEPS
const processSteps = [
  {
    num: '01',
    icon: 'fa-comments',
    title: 'Tell Us Your Dream',
    desc: 'Share your travel dates, interests and budget through our planner or WhatsApp.',
  },
  {
    num: '02',
    icon: 'fa-map-signs',
    title: 'Receive Custom Itinerary',
    desc: 'Our local experts craft a tailor-made itinerary with hotels, routes and pricing.',
  },
  {
    num: '03',
    icon: 'fa-check-circle',
    title: 'Confirm & Relax',
    desc: 'Approve your itinerary, pay a small deposit, and we handle every detail.',
  },
  {
    num: '04',
    icon: 'fa-plane-departure',
    title: 'Enjoy Your Journey',
    desc: 'Arrive in Sri Lanka and experience the trip of a lifetime with your chauffeur.',
  },
];

export default function Services() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: 'Do your chauffeur guides speak English?',
      a: 'Yes. Every Lanka 360 chauffeur guide is SLTDA-certified and fluent in English. We also offer German, French, Spanish, and Mandarin speaking guides on request.',
    },
    {
      q: 'Are park entrance fees included?',
      a: 'Park entrance fees are quoted separately in your itinerary so you only pay the official government rate — we never mark them up.',
    },
    {
      q: 'Can I book only a transfer without a full tour?',
      a: 'Absolutely. We offer standalone airport transfers, day trips, and scenic train tickets without requiring a multi-day package.',
    },
    {
      q: 'What is your cancellation policy?',
      a: 'Free cancellation up to 14 days before arrival. Within 14 days, deposits may be transferable to a future date within 12 months.',
    },
  ];

  return (
    <>
      <SEO
        title="Our Services | Lanka 360 - Luxury Sri Lanka Travel Services"
        description="Explore Lanka 360 premium travel services: chauffeur guides, VIP airport transfers, scenic train tickets, jeep safaris, helicopter tours, Ayurveda retreats and luxury hotel bookings."
        keywords="Sri Lanka travel services, chauffeur guide Sri Lanka, airport transfer Colombo, Kandy Ella train ticket, Yala safari jeep, Sri Lanka helicopter tour, luxury hotels Sri Lanka"
        url="https://lanka360.com/services"
      />

      <main>
        {/* ========================================================= */}
        {/* PAGE HERO */}
        {/* ========================================================= */}
        <section className="relative bg-ocean-900 text-white overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(10, 25, 47, 0.6), rgba(10, 25, 47, 0.85)), url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80')",
            }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center z-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/20 backdrop-blur-md border border-gold-400/40 text-gold-400 text-xs font-bold uppercase tracking-widest mb-4">
              <i className="fas fa-concierge-bell" /> Luxury Travel Solutions
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-amber-200 to-gold-500">Travel Services</span>
            </h1>
            <p className="text-slate-200 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed mb-8">
              From SLTDA-certified chauffeur guides to private helicopter charters — every service you need for a seamless, unforgettable Sri Lankan journey.
            </p>

            {/* Breadcrumb */}
            <nav className="flex justify-center items-center gap-3 text-xs text-slate-300 font-medium">
              <a href="/" className="hover:text-gold-400 transition">Home</a>
              <i className="fas fa-chevron-right text-[9px] text-gold-500" />
              <span className="text-gold-400">Services</span>
            </nav>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SERVICES GRID */}
        {/* ========================================================= */}
        <section className="py-24 bg-[#FAF8F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-gold-500 uppercase tracking-widest text-xs font-bold">
                Everything You Need
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2 mb-4 text-ocean-900">
                Our Complete Service Suite
              </h2>
              <p className="text-slate-600">
                Choose a single service or let us bundle everything into one seamless all-inclusive tour.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesList.map((service) => (
                <div
                  key={service.id}
                  className="bg-white p-8 rounded-3xl border border-[#D4AF37]/30 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 group flex flex-col"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gold-500/10 border border-gold-500/20 text-gold-500 flex items-center justify-center text-2xl mb-6 group-hover:bg-gold-500 group-hover:text-ocean-900 transition-colors duration-300">
                    <i className={`fas ${service.icon}`} />
                  </div>

                  {/* Tagline */}
                  <span className="text-[10px] uppercase tracking-widest text-gold-600 font-bold mb-2">
                    {service.tagline}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-ocean-900 group-hover:text-gold-600 transition-colors font-serif">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    {service.desc}
                  </p>

                  {/* Feature list */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start text-xs text-slate-700 font-medium">
                        <i className="fas fa-check-circle text-gold-500 mr-2 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#D4AF37]/20 mt-auto">
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase block font-semibold">
                        {service.priceFrom === 0 ? 'Included' : 'From'}
                      </span>
                      <span className="font-serif text-lg font-extrabold text-slate-900">
                        {service.priceFrom === 0 ? (
                          <span className="text-emerald-600">Free</span>
                        ) : (
                          <>
                            <span className="text-[#B8860B]">$</span>
                            {service.priceFrom.toLocaleString()}
                            <span className="text-[10px] text-slate-500 font-sans font-normal ml-1">
                              {service.unit}
                            </span>
                          </>
                        )}
                      </span>
                    </div>
                    <a
                      href="/contact"
                      className="bg-gradient-to-r from-[#E5B80B] via-[#D4AF37] to-[#B8860B] text-white font-bold px-4 py-2.5 rounded-xl text-[11px] uppercase tracking-wider shadow-md hover:opacity-90 transition"
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* WHY CHOOSE US */}
        {/* ========================================================= */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-gold-400 uppercase tracking-widest text-xs font-bold">
                <i className="fas fa-crown mr-1" /> Why Travel With Us
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2 mb-4">
                The Lanka 360 Difference
              </h2>
              <p className="text-slate-300">
                Trusted by thousands of travelers from around the world for over a decade.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyUs.map((item) => (
                <div
                  key={item.title}
                  className="bg-ocean-800/60 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/80 hover:border-gold-500/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-500/15 border border-gold-500/30 text-gold-400 flex items-center justify-center text-lg mb-4">
                    <i className={`fas ${item.icon}`} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-white">{item.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* HOW IT WORKS */}
        {/* ========================================================= */}
        <section className="py-24 bg-[#f7f4ed]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-gold-600 uppercase tracking-widest text-xs font-bold">
                <i className="fas fa-route mr-1" /> Simple Process
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2 mb-4 text-ocean-900">
                How It Works
              </h2>
              <p className="text-slate-600">
                Booking your dream Sri Lankan escape takes just four easy steps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step) => (
                <div key={step.num} className="relative text-center group">
                  {/* Connecting line */}
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-gold-500/40 via-gold-500/40 to-transparent -z-0" />

                  <div className="relative z-10 w-20 h-20 mx-auto rounded-full bg-white border-2 border-gold-500/40 shadow-lg flex items-center justify-center text-gold-500 text-2xl mb-5 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                    <i className={`fas ${step.icon}`} />
                  </div>
                  <span className="text-[10px] font-extrabold text-gold-600 tracking-widest">
                    STEP {step.num}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-ocean-900 mt-1 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed max-w-xs mx-auto">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* FAQ */}
        {/* ========================================================= */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-gold-600 uppercase tracking-widest text-xs font-bold">
                <i className="fas fa-question-circle mr-1" /> Common Questions
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2 mb-4 text-ocean-900">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/50 hover:border-gold-500/40 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left"
                    aria-expanded={openFaq === idx}
                  >
                    <span className="font-semibold text-ocean-900 text-sm sm:text-base pr-4">
                      {faq.q}
                    </span>
                    <i
                      className={`fas fa-chevron-down text-gold-500 text-xs transition-transform duration-300 ${
                        openFaq === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      openFaq === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* CTA BANNER */}
        {/* ========================================================= */}
        <section className="relative py-20 bg-gradient-to-r from-ocean-900 via-ocean-800 to-slate-900 text-white overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-400 text-xs font-bold uppercase tracking-widest mb-4">
              <i className="fas fa-paper-plane mr-1" /> Ready to Travel?
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold mb-4">
              Let's Build Your Perfect Sri Lanka Trip
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
              Tell us what you need — a single transfer, a full multi-day tour, or a custom luxury package. We'll reply within 2 hours.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-600 hover:to-amber-700 text-ocean-900 font-bold px-8 py-4 rounded-full shadow-xl transition-all hover:-translate-y-0.5"
              >
                <i className="fas fa-envelope" />
                <span>Request a Quote</span>
              </a>
              <a
                href="https://wa.me/94771234567?text=Hello%20Lanka%20360,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-full shadow-xl transition-all hover:-translate-y-0.5"
              >
                <i className="fab fa-whatsapp text-lg" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}