import { Link } from 'react-router-dom';

const destinationsList = [
  {
    id: 1,
    name: 'Sigiriya Rock Citadel',
    tagline: 'Ancient Sky Palace & Water Gardens',
    badge: 'UNESCO Heritage',
    img: 'https://images.unsplash.com/photo-1667153564448-db44a6db53e4?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    location: 'Central Cultural Triangle',
    rating: '4.9',
    tours: '8 Packages',
  },
  {
    id: 2,
    name: 'Ella Mountain Pass',
    tagline: 'Nine Arch Bridge & Misty Tea Hills',
    badge: 'Misty Highlands',
    img: 'https://images.unsplash.com/photo-1656314943432-b00ec3f6dbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    location: 'Badulla District',
    rating: '5.0',
    tours: '12 Packages',
  },
  {
    id: 3,
    name: 'Galle Dutch Fort',
    tagline: 'Historic Ramparts & Oceanside Cobblestones',
    badge: 'Colonial Heritage',
    img: 'https://images.unsplash.com/photo-1592905169881-eff95fe441ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    location: 'Southern Oceanfront',
    rating: '4.8',
    tours: '6 Packages',
  },
  {
    id: 4,
    name: 'Yala National Park',
    tagline: "World's Highest Density Leopard Safari",
    badge: 'Wild Safari',
    img: 'https://images.unsplash.com/photo-1558791985-4241e4011215?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    location: 'South-East Sanctuary',
    rating: '4.9',
    tours: '9 Packages',
  },
];

export default function Destinations() {
  return (
    <section
      id="destinations"
      className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors"
    >
      {/* Ambient Glows (dark-mode friendly) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-gold-500/15 via-amber-500/10 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md shadow-sm">
            <i className="fas fa-crown text-gold-500 dark:text-gold-400" />
            Lanka 360 Signature
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-black text-ocean-900 dark:text-slate-100 tracking-tight leading-none">
            Top Iconic{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-amber-300 to-gold-600">
              Destinations
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-xl text-base font-light leading-relaxed">
            Explore Sri Lanka's most breathtaking UNESCO world heritage sites,
            misty highland tea estates, wild leopard sanctuaries, and pristine
            oceanfronts.
          </p>
        </div>
        <div>
          <Link
            // to="/packages"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 hover:from-gold-600 hover:to-amber-600 text-ocean-900 font-extrabold px-8 py-4 rounded-full shadow-2xl hover:shadow-gold-500/25 transition-all duration-300 transform hover:-translate-y-1 text-sm"
          >
            <span>Explore All Locations</span>
            <i className="fas fa-arrow-right text-xs" />
          </Link>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {destinationsList.map((d) => (
          <Link
            key={d.id}
            // to="/packages"
            className="group relative h-[480px] rounded-[32px] overflow-hidden cursor-pointer bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-2xl transition-all duration-700 ease-out transform hover:-translate-y-2.5 hover:shadow-gold-500/20 block"
          >
            {/* Image */}
            <img
              src={d.img}
              alt={d.name}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out opacity-85 group-hover:opacity-100"
            />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-900 via-ocean-900/40 to-black/20 opacity-90 group-hover:opacity-80 transition-opacity" />

            {/* Top Badges */}
            <div className="absolute top-5 inset-x-5 flex justify-between items-center z-10">
              <span className="px-3.5 py-1.5 rounded-full bg-ocean-900/80 backdrop-blur-md border border-gold-500/40 text-gold-400 text-[10px] font-extrabold uppercase tracking-widest shadow-lg">
                {d.badge}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg">
                <i className="fas fa-star text-gold-400 text-[10px]" />
                {d.rating}
              </span>
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-0 inset-x-0 p-7 z-10 flex flex-col justify-end">
              <span className="text-gold-400 text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 mb-2">
                <i className="fas fa-map-marker-alt text-gold-500" />
                {d.location}
              </span>
              <h3 className="text-2xl font-bold text-white font-serif group-hover:text-gold-400 transition-colors leading-tight">
                {d.name}
              </h3>
              <p className="text-slate-300 text-xs font-light mt-1.5 opacity-80 line-clamp-2 leading-relaxed">
                {d.tagline}
              </p>

              {/* CTA Line */}
              <div className="mt-5 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs font-bold text-slate-200">
                <span className="text-gold-400">
                  <i className="fas fa-compass mr-1.5" />
                  {d.tours}
                </span>
                <span className="inline-flex items-center gap-1.5 text-white group-hover:text-gold-400 group-hover:translate-x-1.5 transition-all">
                  View Tours
                  <i className="fas fa-arrow-right text-[10px]" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}