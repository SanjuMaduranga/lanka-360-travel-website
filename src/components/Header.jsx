import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Tour Packages', href: '/#packages' },
    { name: 'Tailor-Made Trip', href: '/#planner', highlight: true },
    { name: 'Destinations', href: '/#destinations' },
    { name: 'Services', href: '/#services' },
    { name: 'Reviews', href: '/#reviews' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-40 glass shadow-lg border-b border-slate-200 dark:border-slate-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-gold-600 to-amber-300 flex items-center justify-center text-ocean-900 font-bold text-2xl shadow-lg group-hover:scale-105 transition-transform">
              <i className="fas fa-palmtree" />
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-ocean-900 dark:text-slate-100 group-hover:text-gold-500 transition-colors">
                LANKA<span className="text-gold-500">360</span>
              </span>
              <p className="text-[10px] tracking-widest uppercase text-slate-500 dark:text-slate-400 -mt-1 font-semibold">
                Luxury Sri Lanka Tours
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8 font-medium text-sm">
            {navLinks.map((link) =>
              link.highlight ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="hover:text-gold-500 transition-colors flex items-center"
                >
                  <span className="relative flex h-2 w-2 mr-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500" />
                  </span>
                  {link.name}
                </Link>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="hover:text-gold-500 transition-colors"
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* Header Actions */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={() => window.openBookingModal && window.openBookingModal()}
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-amber-600 text-ocean-900 font-semibold px-5 py-2.5 rounded-full shadow-md hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-sm"
            >
              <i className="fas fa-calendar-alt mr-2" />
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-slate-700 dark:text-slate-200 hover:text-gold-500 focus:outline-none"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            <i
              className={`fas ${
                mobileOpen ? 'fa-times' : 'fa-bars'
              } text-2xl`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-slate-900 text-white px-6 py-6 border-b border-slate-800 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={closeMobile}
              className={`block text-lg font-medium hover:text-gold-400 ${
                link.highlight ? 'text-gold-400' : ''
              }`}
            >
              {link.name === 'Tailor-Made Trip' ? 'Tailor-Made Planner' : link.name}
            </Link>
          ))}
          <button
            onClick={() => {
              closeMobile();
              window.openBookingModal && window.openBookingModal();
            }}
           className="block w-full mt-4 bg-gold-500 text-ocean-900 font-bold py-3 rounded-lg shadow-lg text-center"
          >
            Book Your Tour Now
          </button>
        </div>
      )}
    </header>
  );
}