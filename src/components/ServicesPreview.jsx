import { Link } from 'react-router-dom';

const services = [
  {
    icon: 'fa-user-tie',
    title: 'Tourist Chauffeur Guides',
    desc: 'English-speaking certified driver guides with luxury air-conditioned vehicles for ultimate safety, comfort, and local insights.',
  },
  {
    icon: 'fa-plane-arrival',
    title: 'Airport VIP Transfers',
    desc: 'Punctual 24/7 airport pickup and drop-off directly at CMB Bandaranaike Airport with dedicated meet-and-greet services.',
  },
  {
    icon: 'fa-ticket-alt',
    title: 'Train & Excursion Tickets',
    desc: 'Hassle-free advance booking for the Kandy to Ella Scenic Train ride, Yala Safari Jeeps, and Whale Watching excursions.',
  },
];

export default function ServicesPreview() {
  return (
    <section
      id="services"
      className="py-24 bg-slate-100 dark:bg-slate-900/60 relative overflow-hidden transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-widest mb-3">
            <i className="fas fa-concierge-bell" />
            Luxury Travel Solutions
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-ocean-900 dark:text-slate-100 mt-2">
            Our Premium{' '}
            <span className="text-gold-500">Services</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm sm:text-base font-light">
            We take care of every detail to ensure your Sri Lankan journey is
            seamless, comfortable, and memorable.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white dark:bg-slate-800/80 p-8 rounded-3xl shadow-lg border border-slate-200/80 dark:border-slate-700/60 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-gold-500/10 border border-gold-500/20 text-gold-500 flex items-center justify-center text-2xl mb-6 group-hover:bg-gold-500 group-hover:text-ocean-900 transition-colors duration-300">
                  <i className={`fas ${s.icon}`} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-ocean-900 dark:text-slate-100 group-hover:text-gold-500 transition-colors">
                  {s.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {s.desc}
                </p>
              </div>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-xs font-bold text-gold-500 hover:text-gold-400 transition"
              >
                <span>Learn Details</span>
                <i className="fas fa-chevron-right text-[10px]" />
              </Link>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-600 hover:to-amber-700 text-ocean-900 font-bold px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <span>View All Travel Services</span>
            <i className="fas fa-arrow-right text-xs" />
          </Link>
        </div>
      </div>
    </section>
  );
}