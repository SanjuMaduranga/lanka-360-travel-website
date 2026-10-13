import { useState } from 'react';

export default function TopBar() {
//   const [currency, setCurrency] = useState('USD');

//   const handleCurrency = (e) => {
//     setCurrency(e.target.value);
//     if (onCurrencyChange) onCurrencyChange(e.target.value);
//   };

  return (
    <div className="bg-ocean-900 text-slate-300 text-xs py-2 px-4 border-b border-gold-500/20">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
        {/* Left — contact info */}
        <div className="flex items-center space-x-6">
          <a href="tel:+94771234567" className="hover:text-gold-400 transition">
            <i className="fas fa-phone-alt text-gold-500 mr-2" />
            +94 77 123 4567
          </a>
          <a
            href="mailto:info@lanka360.com"
            className="hidden sm:inline-block hover:text-gold-400 transition"
          >
            <i className="fas fa-envelope text-gold-500 mr-2" />
            info@lanka360.com
          </a>
          <span className="hidden md:inline-block">
            <i className="fas fa-map-marker-alt text-gold-500 mr-2" />
            Colombo &amp; Kandy, Sri Lanka
          </span>
        </div>

        {/* Right — controls */}
        <div className="flex items-center space-x-4 ml-auto">
          {/* Currency Selector */}
          {/* <div className="flex items-center space-x-1 bg-ocean-800 px-2 py-1 rounded border border-slate-700">
            <i className="fas fa-coins text-gold-500 text-xs" />
            <select
              id="currencySelect"
              value={currency}
              onChange={handleCurrency}
              className="bg-transparent text-xs text-slate-200 outline-none cursor-pointer"
              aria-label="Select currency"
            >
              <option value="USD" className="bg-ocean-900">USD ($)</option>
              <option value="EUR" className="bg-ocean-900">EUR (€)</option>
              <option value="LKR" className="bg-ocean-900">LKR (Rs)</option>
            </select>
          </div> */}

          {/* Theme Toggle */}
          <DarkModeToggle />

          {/* Social Icons */}
          <div className="hidden sm:flex space-x-3 text-sm">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400" aria-label="Facebook">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400" aria-label="Instagram">
              <i className="fab fa-instagram" />
            </a>
            <a href="https://tripadvisor.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400" aria-label="TripAdvisor">
              <i className="fab fa-tripadvisor" />
            </a>
            <a href="https://wa.me/94771234567" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400" aria-label="WhatsApp">
              <i className="fab fa-whatsapp" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────
   DARK MODE TOGGLE
   - Initial state computed DIRECTLY from <html class="dark">
   - No useEffect → no cascading render warning
   - Persists preference to localStorage on click
   ───────────────────────────────────────────────────────────── */
function DarkModeToggle() {
  // Compute initial state during render (lazy initializer reads the DOM once)
  const [dark, setDark] = useState(
    () =>
      typeof document !== 'undefined' &&
      document.documentElement.classList.contains('dark')
  );

  const toggle = () => {
    const html = document.documentElement;
    const isDark = html.classList.toggle('dark');
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch {
      /* localStorage may be blocked in private mode — ignore */
    }
    setDark(isDark);
  };

  return (
    <button
      onClick={toggle}
      className="p-1 rounded bg-ocean-800 text-gold-400 hover:text-gold-500 transition"
      title="Toggle Theme"
      aria-label="Toggle dark mode"
    >
      <i className={`fas ${dark ? 'fa-sun text-amber-400' : 'fa-moon'} text-xs`} />
    </button>
  );
}