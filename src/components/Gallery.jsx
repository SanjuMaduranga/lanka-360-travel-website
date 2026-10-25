import { Link } from 'react-router-dom';

// Replace these with your actual image URLs later
const galleryImages = [
  { id: 1, src: '/gallery/photo1.webp', tall: true },
  { id: 2, src: '/gallery/photo2.webp' },
  { id: 3, src: '/gallery/photo3.webp' },
  { id: 4, src: '/gallery/photo4.webp' },
  { id: 5, src: '/gallery/photo5.webp', tall: true },
  { id: 6, src: '/gallery/photo6.webp' },
  { id: 7, src: '/gallery/photo7.webp' },
  { id: 8, src: '/gallery/photo8.webp' },
  { id: 9, src: '/gallery/photo9.webp' },
  { id: 10, src: '/gallery/photo10.webp' },
];

export default function Gallery() {
  return (
    <section 
      id="gallery"
      className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-gold-500 uppercase tracking-widest text-xs font-bold">
              <i className="fas fa-camera mr-1.5" /> Captured Moments
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ocean-900 dark:text-slate-100 mt-2">
              Real Sri Lanka Experiences
            </h2>
          </div>
          <Link
            // to="/gallery"
            className="inline-flex items-center gap-2 text-gold-600 dark:text-gold-400 font-bold hover:text-gold-500 transition-colors"
          >
            <span>View Full Gallery</span>
            <i className="fas fa-arrow-right text-sm" />
          </Link>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((img, index) => (
            <Link
              key={img.id}
            // to="/gallery"
              className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-md ${
                img.tall ? 'row-span-2' : 'row-span-1'
              } ${index === 0 ? 'col-span-2 md:col-span-1' : ''}`}
            >
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-white font-serif font-bold text-lg drop-shadow-md">
                  {img.title}
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}