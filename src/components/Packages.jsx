import { packagesList } from '../data/siteData';

export default function Packages() {
  // Showing 4 packages just as an example (you can change this back to 3)
  const previewPackages = packagesList.slice(0, 4);

  const openItinerary = (pkg) => {
    if (window.openItineraryModal) {
      window.openItineraryModal(pkg);
    }
  };

  return (
    <section
      id="packages"
      className="py-12 bg-[#FAF8F5] dark:bg-slate-950 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-gold-500 uppercase tracking-widest text-xs font-bold">
            Unforgettable Experiences
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2 mb-4 text-ocean-900 dark:text-slate-100">
            Handcrafted Sri Lanka Tour Packages
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Choose from our top-rated curated private tours or customize every
            aspect with our local experts.
          </p>
        </div>

        {/* 
          Changed from grid to flexbox with justify-center.
          This ensures cards are always centered, even if there is only 1 or 2.
        */}
        <div className="flex flex-wrap justify-center gap-8">
          {previewPackages.map((item) => (
            <article
              key={item.id}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm bg-white dark:bg-slate-900 rounded-3xl overflow-hidden flex flex-col border border-[#D4AF37]/30 dark:border-[#D4AF37]/20 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group"
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
                </span>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-serif text-xl font-bold text-white leading-snug">
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
                        <i className="fa-solid fa-gem text-[#B8860B] mr-2.5 mt-0.5 text-[10px]" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-[#D4AF37]/20">
                  <div>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase block font-semibold">
                      Starting From
                    </span>
                    <span className="font-poppins text-xl font-bold text-slate-800 dark:text-slate-100">
                      <span className="text-[#B8860B]">$</span>
                      {item.priceUSD.toLocaleString()}
                    </span>
                  </div>
                  <button
                    onClick={() => openItinerary(item)}
                    className="bg-gradient-to-r from-[#E5B80B] via-[#D4AF37] to-[#B8860B] text-white font-bold px-4 py-2.5 rounded-xl text-xs uppercase shadow-md hover:opacity-90 transition"
                  >
                    View Itinerary
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <a
            href="/packages"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-600 hover:to-amber-700 text-ocean-900 font-bold px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
            <span>View All Packages</span>
            <i className="fas fa-arrow-right text-xs" />
          </a>
        </div>
      </div>
    </section>
  );
}