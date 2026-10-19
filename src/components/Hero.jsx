import { useState, useEffect } from 'react';

const heroSlides = [
  {
    image:
      'https://images.unsplash.com/photo-1519566335946-e6f65f0f4f4df?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    title: 'Discover The Pearl of',
    highlight: 'The Indian Ocean',
  },
  {
    image:
      'https://images.unsplash.com/photo-1708338914870-797de586672d?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    title: 'Misty Hills &',
    highlight: 'Emerald Tea Estates',
  },
  {
    image:
      'https://images.unsplash.com/photo-1628058733047-3b73ee23a164?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    title: 'Wild Safaris &',
    highlight: 'Turquoise Beaches',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const openPlanner = () => {
    // Calls the global function exposed in App.jsx
    if (window.openTripPlanner) {
      window.openTripPlanner();
    }
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

        {/* Minimalist Planner Trigger */}
        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg p-2 sm:p-3 rounded-2xl border border-white/20 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 px-3 py-1 text-left w-full sm:w-auto">
            <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
              <i className="fas fa-magic text-lg" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Plan Your Dream Trip</div>
              <div className="text-[11px] text-slate-300">Estimate budget, duration & style</div>
            </div>
          </div>
          <button
            onClick={openPlanner}
            className="w-full sm:w-auto bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-600 hover:to-amber-700 text-ocean-900 font-bold py-3 px-6 rounded-xl shadow-lg transition-all text-sm whitespace-nowrap"
          >
            Start Planning <i className="fas fa-arrow-right ml-1 text-xs" />
          </button>
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