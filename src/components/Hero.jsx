import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const heroSlides = [
  {
    image:
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1920&q=80',
    title: 'Discover The Pearl of',
    highlight: 'The Indian Ocean',
  },
  {
    image:
      'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1920&q=80',
    title: 'Misty Hills &',
    highlight: 'Emerald Tea Estates',
  },
  {
    image:
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1920&q=80',
    title: 'Wild Safaris &',
    highlight: 'Turquoise Beaches',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleFilter = (e) => {
    e.preventDefault();
    // Navigate to /packages with filter query params
    const duration = e.target.duration.value;
    const category = e.target.category.value;
    const budget = e.target.budget.value;
    const params = new URLSearchParams();
    if (duration !== 'all') params.set('duration', duration);
    if (category !== 'all') params.set('category', category);
    if (budget !== 'all') params.set('budget', budget);
    navigate(`/packages?${params.toString()}`);
  };

  return (
    <section
      id="home"
      className="relative min-h-[88vh] flex items-center justify-center bg-ocean-900 text-white overflow-hidden"
    >
      {/* Slideshow Backgrounds */}
      {heroSlides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            idx === current ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.45), rgba(10, 25, 47, 0.75)), url('${slide.image}')`,
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center z-10 w-full">
        {/* Badge */}
        <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/20 backdrop-blur-md border border-gold-400/40 text-gold-400 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-4">
          <i className="fas fa-crown mr-2" />
          Sri Lanka's Premier Travel Agency
        </span>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight transition-all duration-700">
          {heroSlides[current].title}{' '}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-amber-200 to-gold-500">
            {heroSlides[current].highlight}
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-slate-200 text-base sm:text-xl max-w-3xl mx-auto mb-10 font-light leading-relaxed">
          Experience bespoke journeys through ancient UNESCO heritage, wild safari
          sanctuaries, misty emerald tea hills, and pristine turquoise beaches with
          luxury private chauffeurs.
        </p>

        {/* Filter Bar */}
        <div className="max-w-5xl mx-auto bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-4 sm:p-6 rounded-2xl shadow-2xl text-slate-800 dark:text-slate-100 border border-gold-500/30">
          <form
            onSubmit={handleFilter}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {/* Duration */}
            <div className="text-left">
              <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                <i className="fas fa-clock text-gold-500 mr-1" />
                Duration
              </label>
              <select
                name="duration"
                className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-sm font-medium focus:ring-2 focus:ring-gold-500 outline-none"
              >
                <option value="all">All Durations</option>
                <option value="1-5">1 – 5 Days</option>
                <option value="6-9">6 – 9 Days</option>
                <option value="10+">10+ Days</option>
              </select>
            </div>

            {/* Category */}
            <div className="text-left">
              <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                <i className="fas fa-compass text-gold-500 mr-1" />
                Category
              </label>
              <select
                name="category"
                className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-sm font-medium focus:ring-2 focus:ring-gold-500 outline-none"
              >
                <option value="all">All Categories</option>
                <option value="Culture">Cultural Heritage</option>
                <option value="Wildlife">Wildlife & Safari</option>
                <option value="Beach">Beach & Coastal</option>
                <option value="Honeymoon">Luxury Honeymoon</option>
                <option value="Adventure">Hill Country Adventure</option>
                <option value="Luxury">Luxury Premium</option>
                <option value="Wellness">Ayurveda & Wellness</option>
              </select>
            </div>

            {/* Budget */}
            <div className="text-left">
              <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                <i className="fas fa-wallet text-gold-500 mr-1" />
                Budget Level
              </label>
              <select
                name="budget"
                className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-sm font-medium focus:ring-2 focus:ring-gold-500 outline-none"
              >
                <option value="all">Any Budget</option>
                <option value="standard">Standard Comfort</option>
                <option value="luxury">Luxury 4-5 Star</option>
                <option value="premium">Ultra Premium</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-600 hover:to-amber-700 text-ocean-900 font-bold py-2.5 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
              >
                <i className="fas fa-search" />
                <span>Find Packages</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 flex space-x-3 z-10">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === current
                ? 'bg-gold-500 scale-125'
                : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
}