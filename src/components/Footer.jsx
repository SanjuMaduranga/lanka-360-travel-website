import { Link } from 'react-router-dom';
import TripAdvisorIcon from './TripAdvisorIcon';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Tour Packages', href: '/#packages' },
  { name: 'Our Services', href: '/#services' },
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
            <Link to="/" className="items-center mb-4 group inline-block">
              {/* 
                Since the footer is always dark (bg-ocean-900), we use the dark (white) logo.
                If you ever change the footer to light mode, swap the classes to the light/dark logic.
              */}
              <img
                src="/logo-dark.png"
                alt="Lanka 360 Travels and Tours"
                className="h-8 sm:h-10 w-auto object-contain group-hover:scale-105 transition-transform"
              />
            </Link>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 max-w-sm">
              Explore Sri Lanka with unforgettable tour packages, affordable travel services, 
              and experienced local tour guides. From beautiful beaches and ancient cultural 
              sites to wildlife safaris, scenic hill country journeys, and authentic local experiences, 
              we help you discover the best of Sri Lanka with comfortable transport, personalized tours, 
              and memorable holidays.
            </p>
            <div className="flex items-center space-x-3 text-sm">
              <a
                href="https://web.facebook.com/DaysOfSachith"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-slate-800/80 border border-slate-700 hover:border-gold-500 hover:text-gold-400 text-slate-300 flex items-center justify-center transition"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-slate-800/80 border border-slate-700 hover:border-gold-500 hover:text-gold-400 text-slate-300 flex items-center justify-center transition"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                href="https://www.tripadvisor.com/Attraction_Review-g1407334-d34754084-Reviews-Private_Sri_Lanka_Round_Tour_with_English_Speaking_Driver_Lanka_360_Travel_Tour.html"
                aria-label="TripAdvisor"
                className="w-9 h-9 rounded-full bg-slate-800/80 border border-slate-700 hover:border-gold-500 hover:text-gold-400 text-slate-300 flex items-center justify-center transition"
              >
                <TripAdvisorIcon className="w-5 h-5 text-emerald-500" />
              </a>
              <a
                href="https://wa.me/94725879636"
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
                    // to="/services"
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
                <span>No 123, Main Street, Ratnapura, Sri Lanka</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <i className="fas fa-phone-alt text-gold-500" />
                <a href="tel:+94725879636" className="hover:text-gold-400 transition">
                  +94 72 587 9636
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <i className="fas fa-envelope text-gold-500" />
                <a
                  href="mailto:lanka360sachith@gmail.com"
                  className="hover:text-gold-400 transition break-all"
                >
                  lanka360sachith@gmail.com
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
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Lanka 360 Travels & Tours. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-slate-400">
            <Link 
              // to="/privacy" 
              className="hover:text-gold-400 transition">
              Privacy Policy
            </Link>
            <Link 
              // to="/terms" 
              className="hover:text-gold-400 transition">
              Terms & Conditions
            </Link>
            <Link 
              to="/sitemap" 
              className="hover:text-gold-400 transition">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}