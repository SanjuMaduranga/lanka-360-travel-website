import { useState, useEffect } from 'react';
import SEO from '../components/SEO';

// Replace these with your real photos (URLs or local /images/folder)
const ALL_IMAGES = [
  { id: 1, category: 'Nature', src: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80', title: 'Misty Tea Hills' },
  { id: 2, category: 'Culture', src: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80', title: 'Sigiriya Rock' },
  { id: 3, category: 'Wildlife', src: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80', title: 'Yala Leopard Safari' },
  { id: 4, category: 'Culture', src: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&q=80', title: 'Galle Dutch Fort' },
  { id: 5, category: 'Beaches', src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80', title: 'Mirissa Beach' },
  { id: 6, category: 'Hotels', src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80', title: 'Luxury Resort' },
  { id: 7, category: 'Wildlife', src: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80', title: 'Elephant Gathering' },
  { id: 8, category: 'Beaches', src: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80', title: 'Southern Coast' },
];

const CATEGORIES = ['All', 'Nature', 'Wildlife', 'Beaches', 'Culture', 'Hotels'];

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');
  const [lightboxImg, setLightboxImg] = useState(null);

  // Lock scroll when lightbox is open
  useEffect(() => {
    if (lightboxImg) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [lightboxImg]);

  const filteredImages = filter === 'All' 
    ? ALL_IMAGES 
    : ALL_IMAGES.filter(img => img.category === filter);

  return (
    <>
      <SEO
        title="Photo Gallery | Lanka 360 Travels & Tours"
        description="Explore our photo gallery showcasing the beauty of Sri Lanka - from misty tea hills and wild safaris to pristine beaches and luxury hotels."
        url="https://lanka360.com/gallery"
      />

      <main className="min-h-screen bg-[#FAF8F5] dark:bg-slate-950 pt-24 pb-20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-gold-500 uppercase tracking-widest text-xs font-bold">
              Our Visual Journey
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ocean-900 dark:text-slate-100 mt-2 mb-4">
              Traveler's Gallery
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              A glimpse into the unforgettable moments created by Lanka 360.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  filter === cat
                    ? 'bg-gold-500 text-ocean-900 shadow-md'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-gold-500/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredImages.map(img => (
              <div
                key={img.id}
                onClick={() => setLightboxImg(img)}
                className="break-inside-avoid relative rounded-2xl overflow-hidden cursor-pointer group shadow-lg"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <i className="fas fa-search-plus text-xl" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900/90 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform">
                  <span className="text-white font-bold text-sm block">{img.title}</span>
                  <span className="text-[10px] text-gold-400 uppercase tracking-widest font-bold">{img.category}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-10 bg-slate-950/95 backdrop-blur-md animate-[fadeIn_0.2s_ease-out]"
          onClick={() => setLightboxImg(null)}
        >
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-red-500 text-white flex items-center justify-center transition-colors z-50"
          >
            <i className="fas fa-times text-xl" />
          </button>
          <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            <img
              src={lightboxImg.src}
              alt={lightboxImg.title}
              className="w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
              <h3 className="text-white font-serif text-2xl font-bold">{lightboxImg.title}</h3>
              <p className="text-gold-400 text-xs uppercase tracking-widest font-bold mt-1">{lightboxImg.category}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}