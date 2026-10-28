import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Destinations', href: '/#destinations' },
    { name: 'Tour Packages', href: '/#packages' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Reviews', href: '/#reviews' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ];

  const closeMobile = () => setMobileOpen(false);

  const openPlanner = () => {
    if (window.openTripPlanner) {
      window.openTripPlanner();
    }
  };

  return (
    <header className="sticky top-0 z-40 glass shadow-lg border-b border-slate-200 dark:border-slate-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center group shrink-0">
            <img
              src="/logo-light.png"
              alt="Lanka 360 Travels and Tours"
              className="h-8 sm:h-10 w-auto object-contain block dark:hidden group-hover:scale-105 transition-transform"
            />
            <img
              src="/logo-dark.png"
              alt="Lanka 360 Travels and Tours"
              className="h-8 sm:h-10 w-auto object-contain hidden dark:block group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center space-x-6 font-medium text-sm">
            {navLinks.map((link) =>
              link.highlight ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="hover:text-gold-500 transition-colors flex items-center whitespace-nowrap"
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
                  className="hover:text-gold-500 transition-colors whitespace-nowrap"
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* Header Actions */}
          <div className="hidden sm:flex items-center space-x-4 shrink-0">
            <button
              onClick={openPlanner}
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-amber-600 text-ocean-900 font-semibold px-5 py-2.5 rounded-full shadow-md hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-sm"
            >
              <i className="fas fa-magic mr-2" />
              Start Planning
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-2 text-slate-700 dark:text-slate-200 hover:text-gold-500 focus:outline-none"
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
        <div className="xl:hidden bg-slate-900 text-white px-6 py-6 border-b border-slate-800 space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto">
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
              openPlanner();
            }}
            className="block w-full mt-4 bg-gold-500 text-ocean-900 font-bold py-3 rounded-lg shadow-lg text-center"
          >
            <i className="fas fa-magic mr-2" />
            Start Planning
          </button>
        </div>
      )}
    </header>
  );
}