import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';

const teamMembers = [
  {
    name: 'Dinesh Perera',
    role: 'Founder & Managing Director',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    bio: 'Born in Kandy, Dinesh has guided Sri Lankan travel for over 18 years. He founded Lanka 360 to share the island\'s hidden gems with the world.',
  },
  {
    name: 'Amaya Fernando',
    role: 'Head of Guest Experience',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
    bio: 'With a hospitality background from Colombo\'s finest hotels, Amaya ensures every Lanka 360 journey is seamless and personal.',
  },
  {
    name: 'Ruwan Silva',
    role: 'Lead Chauffeur Guide',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    bio: 'Our longest-serving guide — Ruwan has driven travelers from over 40 countries and knows every shortcut and photo spot on the island.',
  },
  {
    name: 'Nadeeka Jayawardena',
    role: 'Wildlife & Wellness Specialist',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    bio: 'A licensed naturalist and Ayurveda consultant, Nadeeka designs our signature safari and retreat experiences.',
  },
];

const values = [
  {
    icon: 'fa-heart',
    title: 'Authentic Sri Lanka',
    desc: 'We show you the real island — not just the tourist trail. Family-run tea estates, village lunches, and hidden viewpoints.',
  },
  {
    icon: 'fa-leaf',
    title: 'Sustainable & Responsible',
    desc: 'We partner with eco-certified hotels and support local communities through every tour we operate.',
  },
  {
    icon: 'fa-shield-alt',
    title: 'Safety First',
    desc: 'SLTDA-licensed, fully insured, with 24/7 emergency support throughout your journey.',
  },
  {
    icon: 'fa-star',
    title: 'Detail-Obsessed',
    desc: 'From cold towels after safaris to pre-booked train seats — the little things make the difference.',
  },
];

const milestones = [
  { year: '2008', title: 'The First Journey', desc: 'Founded in Colombo with a single van and a dream to redefine Sri Lankan travel.' },
  { year: '2015', title: 'Wildlife Division', desc: 'Launched dedicated safari programs with certified naturalist guides.' },
  { year: '2020', title: 'Boutique Wellness', desc: 'Introduced curated Ayurveda retreats along the southern coast.' },
  { year: '2026', title: '10,000+ Happy Travelers', desc: 'Now serving clients from over 60 countries worldwide.' },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Lanka 360 | Our Story, Team & Why Travel With Us"
        description="Meet the Lanka 360 team. Founded in 2008, we've guided 10,000+ travelers through Sri Lanka with SLTDA-licensed chauffeurs and bespoke itineraries."
        keywords="about Lanka 360, Sri Lanka travel agency team, best Sri Lanka tour operator, SLTDA licensed travel company"
        url="https://lanka360.com/about"
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About Lanka 360',
            url: 'https://lanka360.com/about',
            mainEntity: {
              '@type': 'TravelAgency',
              name: 'Lanka 360',
              foundingDate: '2008',
              description:
                'Luxury Sri Lanka tour operator offering bespoke private journeys across the island.',
            },
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
                "linear-gradient(rgba(10, 25, 47, 0.6), rgba(10, 25, 47, 0.85)), url('https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1920&q=80')",
            }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-28 text-center z-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/20 backdrop-blur-md border border-gold-400/40 text-gold-400 text-xs font-bold uppercase tracking-widest mb-4">
              <i className="fas fa-heart" /> Our Story
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Travel Sri Lanka{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-amber-200 to-gold-500">
                The Right Way
              </span>
            </h1>
            <p className="text-slate-200 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed mb-8">
              Since 2008, Lanka 360 has designed private, luxury journeys for
              travelers who want more than a checklist - they want the soul of
              the island.
            </p>

            <nav className="flex justify-center items-center gap-3 text-xs text-slate-300 font-medium">
              <a href="/" className="hover:text-gold-400 transition">Home</a>
              <i className="fas fa-chevron-right text-[9px] text-gold-500" />
              <span className="text-gold-400">About</span>
            </nav>
          </div>
        </section>

        {/* ─── STORY ─── */}
        <section className="py-24 bg-[#FAF8F5] dark:bg-slate-950 transition-colors">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold-600 dark:text-gold-400 uppercase tracking-widest text-xs font-bold">
                <i className="fas fa-book-open mr-1" /> The Lanka 360 Story
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ocean-900 dark:text-slate-100 mt-2 mb-6 leading-tight">
                More Than a Tour Operator — <span className="text-gold-500">A Local Friend</span>
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  Lanka 360 was born in 2008 when our founder Dinesh Perera
                  returned to his hometown of Kandy after years of guiding
                  travelers across Asia. He noticed that most tourists only saw
                  the same five landmarks - Sigiriya, Kandy, Ella, Galle, Yala —
                  then flew home, never knowing the island he grew up in.
                </p>
                <p>
                  So Dinesh started Lanka 360 with a single van, a promise, and
                  one belief: <strong className="text-ocean-900 dark:text-slate-200">travel should feel like visiting a
                  friend, not checking off a list.</strong> Today, we're a
                  team of 24 Sri Lankan chauffeurs, naturalists, wellness
                  specialists, and planners who've welcomed over 10,000
                  travelers from 60+ countries.
                </p>
                <p>
                  Every itinerary we craft is hand-built around you — your
                  pace, your interests, your budget. No cookie-cutter tours. No
                  tourist traps. Just Sri Lanka, as it was meant to be seen.
                </p>
              </div>
            </div>

            {/* Stats Card */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '10K+', label: 'Happy Travelers' },
                { num: '18+', label: 'Years Experience' },
                { num: '60+', label: 'Countries Served' },
                { num: '4.9★', label: 'Average Rating' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-[#D4AF37]/30 shadow-md text-center"
                >
                  <div className="font-serif text-3xl sm:text-4xl font-black text-gold-500 mb-1">
                    {s.num}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── TEAM ─── */}
        <section className="py-24 bg-white dark:bg-slate-900 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-gold-600 dark:text-gold-400 uppercase tracking-widest text-xs font-bold">
                <i className="fas fa-users mr-1" /> The People Behind Lanka 360
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ocean-900 dark:text-slate-100 mt-2 mb-4">
                Meet Our Team
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Sri Lankans who love their island — and love showing it to you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((m) => (
                <div
                  key={m.name}
                  className="bg-slate-50 dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 hover:border-gold-500/40 hover:shadow-xl transition-all text-center group"
                >
                  <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-gold-500/30 mb-4 group-hover:border-gold-500 transition-colors">
                    <img
                      src={m.image}
                      alt={m.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-ocean-900 dark:text-slate-100">
                    {m.name}
                  </h3>
                  <p className="text-[11px] text-gold-600 dark:text-gold-400 font-bold uppercase tracking-wider mb-3">
                    {m.role}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {m.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── MILESTONES ─── */}
        <section className="py-24 bg-[#f7f4ed] dark:bg-slate-950 transition-colors">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-gold-600 dark:text-gold-400 uppercase tracking-widest text-xs font-bold">
                <i className="fas fa-flag mr-1" /> Our Journey
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ocean-900 dark:text-slate-100 mt-2">
                Milestones That Shaped Us
              </h2>
            </div>

            <div className="relative border-l-2 border-gold-500/30 pl-8 space-y-10">
              {milestones.map((m) => (
                <div key={m.year} className="relative">
                  <div className="absolute -left-11 w-6 h-6 rounded-full bg-gold-500 border-4 border-white dark:border-slate-950" />
                  <div className="text-gold-600 dark:text-gold-400 font-bold text-sm tracking-widest">
                    {m.year}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-ocean-900 dark:text-slate-100 mt-1 mb-2">
                    {m.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── VALUES ─── */}
        <section className="py-24 bg-white dark:bg-slate-900 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-gold-600 dark:text-gold-400 uppercase tracking-widest text-xs font-bold">
                <i className="fas fa-gem mr-1" /> What We Stand For
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ocean-900 dark:text-slate-100 mt-2">
                Our Values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center hover:border-gold-500/40 transition"
                >
                  <div className="w-14 h-14 mx-auto rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-500 flex items-center justify-center text-xl mb-4">
                    <i className={`fas ${v.icon}`} />
                  </div>
                  <h3 className="font-bold text-ocean-900 dark:text-slate-100 mb-2">
                    {v.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="relative py-20 bg-gradient-to-r from-ocean-900 via-ocean-800 to-slate-900 text-white overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-400 text-xs font-bold uppercase tracking-widest mb-4">
              <i className="fas fa-paper-plane mr-1" /> Ready to Travel?
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold mb-4">
              Let's Plan Something Extraordinary
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
              Tell us what you dream of — we'll make it real.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a
                href="/packages"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-600 hover:to-amber-700 text-ocean-900 font-bold px-8 py-4 rounded-full shadow-xl transition-all hover:-translate-y-0.5"
              >
                <i className="fas fa-suitcase-rolling" />
                <span>Browse Packages</span>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-full shadow-xl transition-all hover:-translate-y-0.5 backdrop-blur-sm"
              >
                <i className="fas fa-envelope" />
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}