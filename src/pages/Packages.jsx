import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';
import { packagesList as allPackages } from '../data/siteData';

const CATEGORIES = [
  'All',
  'Luxury',
  'Culture',
  'Wildlife',
  'Beach',
  'Honeymoon',
  'Wellness',
  'Adventure',
];

const BUDGETS = [
  { value: 'all', label: 'Any Budget' },
  { value: 'standard', label: 'Standard Comfort' },
  { value: 'luxury', label: 'Luxury 4-5 Star' },
  { value: 'premium', label: 'Ultra Premium' },
];

const DURATIONS = [
  { value: 'all', label: 'All Durations' },
  { value: '1-5', label: '1 – 5 Days' },
  { value: '6-9', label: '6 – 9 Days' },
  { value: '10+', label: '10+ Days' },
];

export default function Packages() {
  const [category, setCategory] = useState('All');
  const [budget, setBudget] = useState('all');
  const [duration, setDuration] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const filtered = useMemo(() => {
    let list = [...allPackages];

    if (category !== 'All') list = list.filter((p) => p.category === category);
    if (budget !== 'all') list = list.filter((p) => p.budget === budget);

    if (duration !== 'all') {
      if (duration === '1-5') list = list.filter((p) => p.durationDays <= 5);
      if (duration === '6-9')
        list = list.filter((p) => p.durationDays >= 6 && p.durationDays <= 9);
      if (duration === '10+') list = list.filter((p) => p.durationDays >= 10);
    }

    if (sortBy === 'price-asc') list.sort((a, b) => a.priceUSD - b.priceUSD);
    if (sortBy === 'price-desc') list.sort((a, b) => b.priceUSD - a.priceUSD);
    if (sortBy === 'rating') list.sort((a, b) => b.rating - a.rating);
    if (sortBy === 'duration') list.sort((a, b) => a.durationDays - b.durationDays);

    return list;
  }, [category, budget, duration, sortBy]);

  const resetFilters = () => {
    setCategory('All');
    setBudget('all');
    setDuration('all');
    setSortBy('popular');
  };

  // 👇 Opens STEP 1 — the itinerary modal
  const openItinerary = (pkg) => {
    if (window.openItineraryModal) {
      window.openItineraryModal(pkg);
    }
  };

  return (
    <>
      <SEO
        title="Sri Lanka Tour Packages | Lanka 360 - Luxury Private Tours"
        description="Browse Lanka 360 luxury Sri Lanka tour packages. Cultural heritage, wildlife safari, honeymoon, wellness and beach tours from 4 to 14 days with private chauffeurs."
        keywords="Sri Lanka tour packages, luxury Sri Lanka tours, private tours Sri Lanka, Yala safari package, honeymoon Sri Lanka, cultural triangle tour, Kandy Ella train tour"
        url="https://lanka360.com/packages"
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: allPackages.map((pkg, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              item: {
                '@type': 'Product',
                name: pkg.title,
                description: pkg.tagline,
                image: pkg.image,
                offers: {
                  '@type': 'Offer',
                  price: pkg.priceUSD,
                  priceCurrency: 'USD',
                  url: `https://lanka360.com/packages#${pkg.id}`,
                },
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: pkg.rating,
                  reviewCount: pkg.reviewsCount,
                },
              },
            })),
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
              <i className="fas fa-suitcase-rolling" /> Handcrafted Itineraries
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Sri Lanka Tour{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-amber-200 to-gold-500">
                Packages
              </span>
            </h1>
            <p className="text-slate-200 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed mb-8">
              From 4-day cultural escapes to 14-day grand circuits — every
              itinerary is private, chauffeur-driven, and fully customisable.
            </p>
            <nav className="flex justify-center items-center gap-3 text-xs text-slate-300 font-medium">
              <a href="/" className="hover:text-gold-400 transition">
                Home
              </a>
              <i className="fas fa-chevron-right text-[9px] text-gold-500" />
              <span className="text-gold-400">Tour Packages</span>
            </nav>
          </div>
        </section>

        {/* ─── FILTER BAR ─── */}
        <section className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-20 z-30 shadow-sm transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition ${
                    category === c
                      ? 'bg-gradient-to-r from-gold-500 to-amber-600 text-ocean-900 shadow-md'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-gold-500/20'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-lg px-3 py-2.5 text-sm font-medium focus:ring-2 focus:ring-gold-500 outline-none"
                aria-label="Duration"
              >
                {DURATIONS.map((d) => (
                  <option key={d.value} value={d.value}>
                    {d.label}
                  </option>
                ))}
              </select>

              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-lg px-3 py-2.5 text-sm font-medium focus:ring-2 focus:ring-gold-500 outline-none"
                aria-label="Budget"
              >
                {BUDGETS.map((b) => (
                  <option key={b.value} value={b.value}>
                    {b.label}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-lg px-3 py-2.5 text-sm font-medium focus:ring-2 focus:ring-gold-500 outline-none"
                aria-label="Sort By"
              >
                <option value="popular">Sort: Most Popular</option>
                <option value="price-asc">Price: Low → High</option>
                <option value="price-desc">Price: High → Low</option>
                <option value="rating">Highest Rated</option>
                <option value="duration">Shortest Duration</option>
              </select>

              <button
                onClick={resetFilters}
                className="bg-slate-900 dark:bg-slate-700 hover:bg-ocean-900 dark:hover:bg-slate-600 text-white font-bold rounded-lg px-4 py-2.5 text-xs uppercase tracking-wider transition"
              >
                <i className="fas fa-redo mr-2" /> Reset Filters
              </button>
            </div>
          </div>
        </section>

        {/* ─── PACKAGES GRID ─── */}
        <section className="py-16 bg-[#FAF8F5] dark:bg-slate-950 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8 flex-wrap gap-2">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ocean-900 dark:text-slate-100">
                {filtered.length} {filtered.length === 1 ? 'Package' : 'Packages'} Found
              </h2>
              {category !== 'All' && (
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  Filtered by:{' '}
                  <span className="font-semibold text-gold-600 dark:text-gold-400">
                    {category}
                  </span>
                </span>
              )}
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-[#D4AF37]/30">
                <i className="fas fa-compass text-4xl text-gold-500 mb-4" />
                <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                  No packages match your filters
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                  Try broadening your search or reset the filters.
                </p>
                <button
                  onClick={resetFilters}
                  className="bg-gradient-to-r from-gold-500 to-amber-600 text-ocean-900 font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider shadow-md"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((item) => (
                  <article
                    key={item.id}
                    id={item.id}
                    className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden flex flex-col border border-[#D4AF37]/30 dark:border-[#D4AF37]/20 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 group"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                      <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#8A6305] border border-[#D4AF37]/40 text-[10px] uppercase font-bold px-3 py-1 rounded-full">
                        {item.durationDays} Days / {item.durationDays - 1} Nights
                      </span>

                      <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-slate-800 text-xs font-bold px-2.5 py-1 rounded-lg border border-[#D4AF37]/40 flex items-center gap-1">
                        <i className="fas fa-star text-[#D4AF37] text-[10px]" />
                        {item.rating}
                        <span className="text-slate-500 text-[10px]">
                          ({item.reviewsCount})
                        </span>
                      </span>

                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="text-[10px] uppercase tracking-widest text-[#FCE09B] font-bold block mb-0.5">
                          {item.category} Edition
                        </span>
                        <h3 className="font-serif text-lg font-bold text-white leading-snug group-hover:text-[#FCE09B] transition-colors">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 italic mb-4">
                          "{item.tagline}"
                        </p>
                        <ul className="space-y-2 mb-6">
                          {item.highlights.map((h) => (
                            <li
                              key={h}
                              className="flex items-start text-xs text-slate-700 dark:text-slate-300 font-medium"
                            >
                              <i className="fas fa-gem text-[#B8860B] mr-2.5 mt-0.5 text-[10px]" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-[#D4AF37]/20 mt-auto">
                        <div>
                          <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider block font-semibold">
                            From
                          </span>
                          <span className="font-serif text-xl font-extrabold text-slate-900 dark:text-slate-100">
                            <span className="text-[#B8860B]">$</span>
                            {item.priceUSD.toLocaleString()}
                          </span>
                          <span className="text-[10px] text-slate-500 dark:text-slate-400">
                            {' '}
                            / guest
                          </span>
                        </div>
                        <button
                          onClick={() => openItinerary(item)}
                          className="bg-gradient-to-r from-[#E5B80B] via-[#D4AF37] to-[#B8860B] text-white font-bold px-4 py-2.5 rounded-xl text-[11px] uppercase tracking-wider shadow-md hover:opacity-90 transition"
                        >
                          View Itinerary
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ─── CUSTOM CTA ─── */}
        <section className="relative py-20 bg-gradient-to-r from-ocean-900 via-ocean-800 to-slate-900 text-white overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-400 text-xs font-bold uppercase tracking-widest mb-4">
              <i className="fas fa-magic mr-1" /> Not Found What You Want?
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold mb-4">
              Design Your Own Custom Tour
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
              Tell us your dream itinerary and our local experts will craft a
              personalised Sri Lanka journey just for you.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a
                href="/#planner"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-600 hover:to-amber-700 text-ocean-900 font-bold px-8 py-4 rounded-full shadow-xl transition-all hover:-translate-y-0.5"
              >
                <i className="fas fa-calculator" />
                <span>Try Our Planner</span>
              </a>
              <a
                href="https://wa.me/94771234567?text=Hi%20Lanka%20360,%20I%20want%20a%20custom%20tour%20package."
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