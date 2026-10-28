import { useEffect, useState, useRef } from 'react';

export default function DestinationDetailModal({ destination, isOpen, onClose }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const bodyRef = useRef(null);

  // Bulletproof Scroll Lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Escape key listener
  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !destination) return null;

  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(destination.mapQuery || destination.name + ', Sri Lanka')}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  const handleScroll = (e) => {
    setIsScrolled(e.currentTarget.scrollTop > 50);
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-0 sm:p-6 overflow-hidden animate-[fadeIn_0.2s_ease-out]"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="fixed inset-0 bg-slate-950/90 backdrop-blur-xl" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div
        className="relative w-full h-full sm:h-auto sm:max-h-[92vh] sm:max-w-6xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 sm:rounded-3xl shadow-2xl overflow-hidden animate-[slideUp_0.3s_ease-out] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-50 h-11 px-4 rounded-full bg-black/40 hover:bg-gold-500 hover:text-ocean-900 text-white backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 flex items-center gap-2 group"
          title="Back to Category"
        >
          <i className="fas fa-arrow-left text-sm group-hover:-translate-x-1 transition-transform" />
        </button>

        <div 
          className={`relative shrink-0 transition-all duration-500 ease-out overflow-hidden ${
            isScrolled ? 'h-20 sm:h-24' : 'h-64 sm:h-[400px]'
          }`}
        >
          <img 
            src={destination.image} 
            alt={destination.name} 
            className={`w-full h-full object-cover transition-all duration-500 ${
              isScrolled ? 'opacity-40 scale-105' : 'opacity-100 scale-100'
            }`} 
          />
          <div className={`absolute inset-0 transition-all duration-500 ${
            isScrolled ? 'bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/60' : 'bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent'
          }`} />

          <div 
            className={`absolute bottom-0 left-0 right-0 p-6 sm:p-10 transition-all duration-300 ${
              isScrolled ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'
            }`}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500 text-ocean-900 text-[10px] font-bold uppercase tracking-widest mb-3 shadow-md">
              <i className="fas fa-map-marker-alt" /> Sri Lanka
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight drop-shadow-lg">
              {destination.name}
            </h2>
          </div>

          <div 
            className={`absolute inset-0 flex items-center gap-4 px-16 sm:px-24 pr-20 transition-all duration-500 ${
              isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
          >
            <img src={destination.image} alt="" className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover border border-gold-500/40 shadow-md shrink-0 hidden sm:block" />
            <div className="min-w-0 flex-1">
              <span className="text-[10px] uppercase tracking-widest text-gold-400 font-extrabold block mb-0.5">
                Destination Details
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white truncate leading-tight">
                {destination.name}
              </h3>
            </div>
          </div>
        </div>

        <div 
          ref={bodyRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto bg-[#FAF8F5] dark:bg-slate-950"
        >
          <div className="max-w-5xl mx-auto p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="font-serif text-2xl font-bold text-ocean-900 dark:text-slate-100 mb-4 border-b border-gold-500/20 pb-3 flex items-center gap-2">
                  <i className="fas fa-info-circle text-gold-500" /> About {destination.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
                  {destination.description}
                </p>
              </div>

              {destination.gallery && destination.gallery.length > 0 && (
                <div>
                  <h3 className="font-serif text-xl font-bold text-ocean-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                    <i className="fas fa-camera text-gold-500" /> Photo Gallery
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {destination.gallery.map((img, idx) => (
                      <img 
                        key={idx} 
                        src={img} 
                        alt={`${destination.name} view ${idx + 1}`} 
                        className="w-full h-40 sm:h-56 object-cover rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:scale-[1.02] transition-transform duration-300" 
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h4 className="font-bold text-ocean-900 dark:text-slate-100 mb-4 flex items-center gap-2 text-lg">
                  <i className="fas fa-route text-gold-500" /> Location Details
                </h4>
                
                <ul className="space-y-4 text-sm mb-6">
                  <li className="flex justify-between items-center pb-3 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">From Colombo:</span>
                    <span className="font-bold text-right">{destination.distanceFromColombo || 'Varies'}</span>
                  </li>
                  <li className="flex justify-between items-center pb-3 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">From Airport (CMB):</span>
                    <span className="font-bold text-right">{destination.distanceFromAirport || 'Varies'}</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">Best Time:</span>
                    <span className="font-bold text-gold-600 dark:text-gold-400 text-right">{destination.bestTime || 'Year-round'}</span>
                  </li>
                </ul>

                <div className="rounded-2xl overflow-hidden shadow-md border border-slate-300 dark:border-slate-700 h-64">
                  <iframe
                    title={`Map of ${destination.name}`}
                    src={mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
              </div>

              <a
                href="/contact"
                onClick={onClose}
                className="block w-full text-center bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-600 hover:to-amber-700 text-ocean-900 font-bold py-4 rounded-xl shadow-lg transition-all text-sm uppercase tracking-wider"
              >
                Inquire About This Tour
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}