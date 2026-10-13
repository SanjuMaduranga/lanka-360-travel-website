import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';

const quickLinks = [
  { to: '/', label: 'Home', icon: 'fa-home', desc: 'Back to the main page' },
  { to: '/packages', label: 'Tour Packages', icon: 'fa-suitcase-rolling', desc: 'Browse all itineraries' },
  { to: '/services', label: 'Services', icon: 'fa-concierge-bell', desc: 'Chauffeurs, transfers & more' },
  { to: '/contact', label: 'Contact Us', icon: 'fa-envelope', desc: 'Get in touch with our team' },
];

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 — Page Not Found | Lanka 360"
        description="The page you're looking for doesn't exist. Explore Lanka 360's luxury Sri Lanka tours, destinations, and travel guides."
        url="https://lanka360.com/404"
      />

      {/* Prevent Google from indexing the 404 page */}
      <Helmet>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <main>
        <section className="relative min-h-[85vh] bg-gradient-to-br from-ocean-900 via-ocean-800 to-slate-950 text-white flex items-center justify-center overflow-hidden">
          {/* Ambient glows */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center z-10">
            {/* Big 404 */}
            <div className="font-serif text-[7rem] sm:text-[10rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-amber-300 to-gold-500 mb-4">
              404
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold mb-4">
              This Journey Took a Wrong Turn
            </h1>

            <p className="text-slate-300 max-w-xl mx-auto mb-10 text-sm sm:text-base leading-relaxed">
              The page you're looking for has wandered off the map. Let's get
              you back to exploring Sri Lanka's finest experiences.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-14">
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-600 hover:to-amber-700 text-ocean-900 font-bold px-8 py-4 rounded-full shadow-xl transition-all hover:-translate-y-0.5"
              >
                <i className="fas fa-home" />
                <span>Back to Home</span>
              </Link>
              <Link
                to="/packages"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-full shadow-xl transition-all hover:-translate-y-0.5 backdrop-blur-sm"
              >
                <i className="fas fa-compass" />
                <span>Explore Packages</span>
              </Link>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {quickLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="group p-5 rounded-2xl bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-gold-500/50 transition-all text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold-500/20 border border-gold-500/40 text-gold-400 flex items-center justify-center mb-3 group-hover:bg-gold-500 group-hover:text-ocean-900 transition-colors">
                    <i className={`fas ${link.icon}`} />
                  </div>
                  <div className="font-bold text-sm mb-1">{link.label}</div>
                  <div className="text-[11px] text-slate-400">{link.desc}</div>
                </Link>
              ))}
            </div>

            {/* Help text */}
            <p className="text-xs text-slate-400 mt-12">
              Still lost?{' '}
              <Link to="/contact" className="text-gold-400 hover:underline font-semibold">
                Contact our team
              </Link>{' '}
              and we'll point you in the right direction.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}