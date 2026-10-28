import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#FAF8F5] dark:bg-slate-950 transition-colors relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative">
            {/* Decorative offset box */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-gold-500/20 to-transparent rounded-[40px] transform -rotate-3" />
            
            <img
              src="https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1000&q=80"
              alt="Discover Sri Lanka with Lanka 360"
              className="relative rounded-[32px] shadow-2xl w-full h-[500px] object-cover border border-white/20 dark:border-slate-700"
            />
            
            {/* Floating Trust Badge */}
            <div className="absolute -bottom-8 -right-8 bg-ocean-900/95 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-gold-500/30 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-500 text-ocean-900 flex items-center justify-center text-xl">
                  <i className="fas fa-leaf" />
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-gold-400">100%</div>
                  <div className="text-[10px] text-slate-300 uppercase tracking-widest font-bold">Tailor-Made Journeys</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:pl-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-widest mb-6">
              <i className="fas fa-globe-asia" /> Welcome to Lanka 360
            </span>
            
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ocean-900 dark:text-slate-100 leading-tight mb-6">
              Discover the <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-600">Real Sri Lanka</span>
            </h2>
            
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
              Your journey. Your experience. Your Sri Lanka. We are your local travel partner for discovering the beauty, culture, history, wildlife, and unforgettable experiences of the island.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8">
              From ancient kingdoms and sacred temples to misty mountains, tropical beaches, and wildlife safaris, we help you explore beyond the usual tourist routes through personalised tours and comfortable transportation.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-10 border-y border-slate-200 dark:border-slate-800 py-6">
              <div>
                <h4 className="font-bold text-ocean-900 dark:text-slate-100 mb-1">Local Expertise</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Born and raised in Sri Lanka.</p>
              </div>
              <div>
                <h4 className="font-bold text-ocean-900 dark:text-slate-100 mb-1">Safe & Reliable</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Licensed drivers & vetted vehicles.</p>
              </div>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-600 hover:to-amber-700 text-ocean-900 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 group"
            >
              <span>Read Our Full Story</span>
              <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}