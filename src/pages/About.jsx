import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const values = [
  {
    icon: 'fa-shield-alt',
    title: 'Safety & Trust',
    desc: 'Your comfort matters. We provide reliable travel arrangements, clear communication, and personal assistance from start to finish.'
  },
  {
    icon: 'fa-user-shield',
    title: 'Authorised Guiding',
    desc: 'We arrange guiding services appropriate to your itinerary, prioritising suitably qualified guides where official authorisation is required.'
  },
  {
    icon: 'fa-id-card',
    title: 'Licensed Drivers',
    desc: 'We prioritise working with drivers who hold the appropriate driving licences and experience for the services they provide.'
  },
  {
    icon: 'fa-car',
    title: 'Comfortable Transport',
    desc: 'We help arrange transportation that suits your group size, luggage, and itinerary requirements. Details confirmed before touring.'
  },
  {
    icon: 'fa-map-marked-alt',
    title: 'Personalised Plans',
    desc: 'Whether you prefer culture, wildlife, hiking, or beaches, we design an itinerary around your specific interests and budget.'
  },
  {
    icon: 'fa-comments',
    title: 'Clear Communication',
    desc: 'We explain the itinerary, inclusions, and costs clearly before you confirm. We coordinate transport and activities seamlessly.'
  },
  {
    icon: 'fa-globe-asia',
    title: 'Authentic Experiences',
    desc: 'Discover more than landmarks. We help you explore local culture, regional traditions, food, and lesser-known places.'
  },
  {
    icon: 'fa-hands-helping',
    title: 'Friendly Support',
    desc: 'From your first enquiry to the end of your trip, we provide helpful communication so you can travel with confidence.'
  },
  {
    icon: 'fa-hand-holding-heart',
    title: 'Responsible Tourism',
    desc: 'We encourage respect for local communities, religious customs, wildlife, and the environment for future generations.'
  }
];

export default function About() {
  return (
    <>
      <SEO
        title="About Lanka 360 Travels | Discover the Real Sri Lanka"
        description="Learn about Lanka 360 Travels. We provide personalised tours, comfortable transportation, and responsible guiding services in Sri Lanka."
        url="https://lanka360.com/about"
      />

      <main className="bg-[#FAF8F5] dark:bg-slate-950 transition-colors">
        
        {/* ─── HERO ─── */}
        <section className="relative bg-ocean-900 text-white overflow-hidden py-32 lg:py-40">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ocean-900 via-ocean-900/80 to-transparent" />
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/20 backdrop-blur-md border border-gold-400/40 text-gold-400 text-xs font-bold uppercase tracking-widest mb-4">
              <i className="fas fa-compass" /> Our Story
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight mb-6 leading-tight drop-shadow-md">
              Lanka 360 Travels
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 font-light max-w-2xl mx-auto leading-relaxed">
              Your journey. Your experience. Your Sri Lanka.
            </p>
          </div>
        </section>

        {/* ─── STATS BAR ─── */}
        <section className="relative -mt-12 z-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x-0 md:divide-x divide-slate-200 dark:divide-slate-800">
            <div>
              <div className="font-serif text-3xl font-bold text-gold-500 mb-1">100%</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400">Tailor-Made</div>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-gold-500 mb-1">24/7</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400">Local Support</div>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-gold-500 mb-1">Vetted</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400">Drivers</div>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-gold-500 mb-1">Trusted</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400">Service</div>
            </div>
          </div>
        </section>

        {/* ─── INTRODUCTION ─── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ocean-900 dark:text-slate-100 mb-6">
              Welcome to <span className="text-gold-500">Paradise</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed mb-6">
              Welcome to Lanka 360 Travels, your travel partner for discovering the beauty, culture, history, wildlife, and unforgettable experiences of Sri Lanka. From ancient kingdoms and sacred temples to misty mountains, lush tea plantations, tropical beaches, and exciting wildlife safaris, Sri Lanka offers something special for every traveller.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
              At Lanka 360 Travels, we help you explore the island through personalised tours, comfortable transportation, knowledgeable guiding services, and friendly local support. Whether you are travelling alone, as a couple, with family, or in a group, we aim to make your journey comfortable, memorable, and stress-free.
            </p>
          </div>
        </section>

        {/* ─── WHY CHOOSE US (MODERN GRID) ─── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold-500 uppercase tracking-widest text-xs font-bold mb-2 block">
                Our Standards
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ocean-900 dark:text-slate-100">
                Why Choose <span className="text-gold-500">Lanka 360 Travels?</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {values.map((v, i) => (
                <div 
                  key={i} 
                  className="group bg-[#FAF8F5] dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-gold-500/50 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gold-500/10 text-gold-600 dark:text-gold-400 flex items-center justify-center text-xl mb-6 group-hover:bg-gold-500 group-hover:text-ocean-900 transition-colors duration-300">
                    <i className={`fas ${v.icon}`} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-ocean-900 dark:text-slate-100 mb-3">
                    {v.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── OUR PROMISE ─── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-ocean-900 rounded-[40px] overflow-hidden relative shadow-2xl border border-slate-800">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:20px_20px]" />
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl" />
            
            <div className="relative p-10 sm:p-16 text-center z-10">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gold-500/20 border border-gold-500/40 text-gold-400 flex items-center justify-center text-3xl mb-8 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                <i className="fas fa-handshake" />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6">
                Our Promise to You
              </h2>
              <p className="text-slate-300 text-lg sm:text-xl leading-relaxed italic max-w-3xl mx-auto mb-10 font-light">
                "We aim to deliver honest communication, carefully coordinated travel arrangements, and a welcoming service that helps you experience Sri Lanka with confidence."
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/packages"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-600 hover:to-amber-700 text-ocean-900 font-bold px-8 py-4 rounded-full shadow-lg transition-all hover:-translate-y-0.5"
                >
                  <span>Explore Our Tours</span>
                  <i className="fas fa-arrow-right text-xs" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-8 py-4 rounded-full shadow-lg backdrop-blur-md transition-all hover:-translate-y-0.5"
                >
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}