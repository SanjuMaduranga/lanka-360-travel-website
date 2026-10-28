import { useState } from 'react';
import DestinationsModal from './DestinationsModal';
import DestinationDetailModal from './DestinationDetailModal';
import { destinationCategories } from '../data/siteData'; 

export default function Destinations() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeDestination, setActiveDestination] = useState(null);

  return (
    <>
      <section
        id="destinations"
        className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-gold-500/15 via-amber-500/10 to-transparent blur-[140px] pointer-events-none -z-10" />
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md shadow-sm">
            <i className="fas fa-crown text-gold-500 dark:text-gold-400" />
            Lanka 360 Signature
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-ocean-900 dark:text-slate-100 tracking-tight leading-none mb-4">
            Top Iconic{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-amber-300 to-gold-600">
              Destinations
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base font-light leading-relaxed">
            Explore Sri Lanka's most breathtaking sites. Click a category to discover the specific locations we cover.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinationCategories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setActiveCategory(cat)}
              className="group relative h-[320px] rounded-[32px] overflow-hidden cursor-pointer bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-gold-500/20"
            >
              <img src={cat.img} alt={cat.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-900 via-ocean-900/50 to-black/10 opacity-90" />

              <div className="absolute top-5 left-5">
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-lg group-hover:bg-gold-500 group-hover:text-ocean-900 transition-colors">
                  <i className={`fas ${cat.icon}`} />
                </div>
              </div>

              <div className="absolute bottom-0 inset-x-0 p-6 z-10">
                <h3 className="text-2xl font-bold text-white font-serif group-hover:text-gold-400 transition-colors leading-tight mb-2">
                  {cat.title}
                </h3>
                <p className="text-slate-300 text-xs font-light line-clamp-2 leading-relaxed mb-4">
                  {cat.description}
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-gold-400 group-hover:text-gold-300 transition-colors">
                  <span>Explore {cat.items.length} Spots</span>
                  <i className="fas fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="group relative h-[320px] rounded-[32px] overflow-hidden bg-ocean-900 border-2 border-gold-500/40 shadow-xl flex flex-col items-center justify-center text-center p-8">
            <div className="w-16 h-16 rounded-full bg-gold-500/10 text-gold-400 flex items-center justify-center text-2xl mb-4 border border-gold-500/30">
              <i className="fas fa-magic" />
            </div>
            <h3 className="text-2xl font-bold text-white font-serif leading-tight mb-2">Want Something Unique?</h3>
            <p className="text-slate-400 text-xs font-light mb-6">We can customize a tour around any location in Sri Lanka.</p>
            <a href="/#planner" className="bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-600 hover:to-amber-700 text-ocean-900 font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider shadow-lg transition-all">
              Try Our Planner
            </a>
          </div>
        </div>
      </section>

      {/* Level 1 Modal: Show Destinations in Category */}
      <DestinationsModal
        category={activeCategory}
        isOpen={!!activeCategory}
        onClose={() => setActiveCategory(null)}
        onSelectDestination={(dest) => setActiveDestination(dest)}
      />

      {/* Level 2 Modal: Show Destination Details */}
      <DestinationDetailModal
        destination={activeDestination}
        isOpen={!!activeDestination}
        onClose={() => setActiveDestination(null)}
      />
    </>
  );
}