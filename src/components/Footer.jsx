import { Link } from 'react-router-dom';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Tour Packages', href: '/packages' },
  { name: 'Our Services', href: '/services' },
  { name: 'Tailor-Made Trip', href: '/#planner' },
  { name: 'Top Destinations', href: '/#destinations' },
];

const serviceLinks = [
  'Private Chauffeurs',
  'Airport Transfers',
  'Scenic Train Booking',
  'Jeep Safari Booking',
  'Luxury Helicopter Tours',
];

export default function Footer() {
  return (
    <footer className="bg-ocean-900 text-slate-300 pt-16 pb-8 border-t border-gold-500/20 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gold-600 to-amber-300 flex items-center justify-center text-ocean-900 font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
                <i className="fas fa-palmtree" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white group-hover:text-gold-500 transition-colors">
                  LANKA<span className="text-gold-500">360</span>
                </span>
                <p className="text-[10px] tracking-widest uppercase text-slate-400 -mt-1 font-semibold">
                  Luxury Sri Lanka Tours
                </p>
              </div>
            </Link>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 max-w-sm">
              Experience bespoke journeys across Sri Lanka with luxury private
              chauffeurs, 5-star heritage stays, safari excursions, and scenic
              hill country trains.
            </p>
            <div className="flex items-center space-x-3 text-sm">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-slate-800/80 border border-slate-700 hover:border-gold-500 hover:text-gold-400 text-slate-300 flex items-center justify-center transition"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-slate-800/80 border border-slate-700 hover:border-gold-500 hover:text-gold-400 text-slate-300 flex items-center justify-center transition"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                href="#"
                aria-label="TripAdvisor"
                className="w-9 h-9 rounded-full bg-slate-800/80 border border-slate-700 hover:border-gold-500 hover:text-gold-400 text-slate-300 flex items-center justify-center transition"
              >
                <i className="fab fa-tripadvisor" />
              </a>
              <a
                href="https://wa.me/94771234567"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-slate-800/80 border border-slate-700 hover:border-emerald-500 hover:text-emerald-400 text-slate-300 flex items-center justify-center transition"
              >
                <i className="fab fa-whatsapp" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif font-bold text-base mb-4 border-b border-gold-500/30 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="hover:text-gold-400 transition flex items-center"
                  >
                    <i className="fas fa-chevron-right text-[9px] text-gold-500 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-serif font-bold text-base mb-4 border-b border-gold-500/30 pb-2 inline-block">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="hover:text-gold-400 transition flex items-center"
                  >
                    <i className="fas fa-check text-[9px] text-gold-500 mr-2" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif font-bold text-base mb-4 border-b border-gold-500/30 pb-2 inline-block">
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start space-x-2.5">
                <i className="fas fa-map-marker-alt text-gold-500 mt-1" />
                <span>No 142, Galle Road, Colombo 03, Sri Lanka</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <i className="fas fa-phone-alt text-gold-500" />
                <a href="tel:+94771234567" className="hover:text-gold-400 transition">
                  +94 77 123 4567
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <i className="fas fa-envelope text-gold-500" />
                <a
                  href="mailto:info@lanka360.com"
                  className="hover:text-gold-400 transition"
                >
                  info@lanka360.com
                </a>
              </li>
            </ul>
            <div className="mt-4 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-[11px] text-slate-400">
              <i className="fas fa-shield-alt text-gold-400 mr-1" />
              <span>
                SLTDA Registered Agency: <strong>TS/2026/0412</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>&copy; {new Date().getFullYear()} Lanka 360 Luxury Travels. All Rights Reserved.</p>
          <div className="flex space-x-6 text-slate-400">
            <Link to="/privacy" className="hover:text-gold-400 transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-gold-400 transition">
              Terms & Conditions
            </Link>
            <Link to="/sitemap" className="hover:text-gold-400 transition">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}