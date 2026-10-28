import { useEffect, useState, useRef } from 'react';

export default function DestinationsModal({ category, isOpen, onClose, onSelectDestination }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const bodyRef = useRef(null);

  // Bulletproof Scroll Lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Optional: Prevent layout shift by adding padding for scrollbar
      document.body.style.paddingRight = 'var(--scrollbar-width, 0px)';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    
    // Cleanup in case the component unmounts abruptly
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  // Escape key listener
  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !category) return null;

  const handleScroll = (e) => {
    setIsScrolled(e.currentTarget.scrollTop > 40);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-6 overflow-hidden animate-[fadeIn_0.2s_ease-out]"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div
        className="relative w-full h-full sm:h-auto sm:max-h-[92vh] sm:max-w-6xl bg-[#FAF8F5] dark:bg-slate-900 text-slate-800 dark:text-slate-100 sm:rounded-3xl shadow-2xl overflow-hidden animate-[slideUp_0.3s_ease-out] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-50 w-11 h-11 rounded-full bg-white/20 hover:bg-red-500 text-white backdrop-blur-md border border-white/30 shadow-lg transition-all duration-300 flex items-center justify-center hover:rotate-90"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div 
          className={`relative shrink-0 transition-all duration-500 ease-out bg-ocean-900 text-white overflow-hidden ${
            isScrolled ? 'h-20 sm:h-24' : 'h-56 sm:h-64'
          }`}
        >
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-all duration-500 ${isScrolled ? 'opacity-20' : 'opacity-40'}`}
            style={{ backgroundImage: `url(${category.img})` }} 
          />
          <div className={`absolute inset-0 transition-all duration-500 ${
            isScrolled ? 'bg-gradient-to-r from-ocean-900 via-ocean-900/90 to-ocean-900/80' : 'bg-gradient-to-t from-ocean-900 via-ocean-900/80 to-transparent'
          }`} />

          <div className="relative z-10 h-full flex flex-col justify-end px-6 sm:px-12 pb-6 sm:pb-8 pr-16 sm:pr-20">
            <div className={`transition-all duration-300 ${isScrolled ? 'opacity-0 translate-y-4 pointer-events-none absolute' : 'opacity-100 translate-y-0'}`}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3 backdrop-blur-md mt-4 sm:mt-0">
                <i className={`fas ${category.icon}`} /> Explore Sri Lanka
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold leading-tight drop-shadow-md mb-2">
                {category.title}
              </h2>
              <p className="text-slate-200 text-sm max-w-2xl leading-relaxed line-clamp-2">
                {category.description}
              </p>
            </div>

            <div className={`transition-all duration-500 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none absolute'}`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-500 text-ocean-900 flex items-center justify-center shadow-md shrink-0">
                  <i className={`fas ${category.icon}`} />
                </div>
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight truncate">
                    {category.title}
                  </h2>
                  <span className="text-[10px] sm:text-xs text-gold-400 font-bold uppercase tracking-wider">
                    {category.items.length} Destinations
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div 
          ref={bodyRef}
          onScroll={handleScroll}
          className="p-5 sm:p-10 overflow-y-auto flex-1 bg-white dark:bg-slate-950"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {category.items.map((item, idx) => (
              <div 
                key={idx} 
                onClick={() => onSelectDestination(item)}
                className="group relative h-56 sm:h-64 rounded-2xl overflow-hidden cursor-pointer bg-slate-900 shadow-md hover:shadow-2xl transition-all duration-300 sm:hover:-translate-y-1.5 border border-slate-200 dark:border-slate-800"
              >
                <img 
                  src={item.image || category.img} 
                  alt={item.name} 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90" />
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-gold-400 transition-colors leading-tight">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-gold-400">
                    <span>View Details</span>
                    <i className="fas fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="px-6 py-4 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-center shrink-0">
          <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-medium">
            <i className="fas fa-info-circle text-gold-500 mr-1.5" />
            {category.footerText}
          </p>
        </div>
      </div>
    </div>
  );
}