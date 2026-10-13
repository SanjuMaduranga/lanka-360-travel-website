import { useState, useMemo } from 'react';

// Destination options with per-person entrance fee (USD)
const plannerSpots = [
  { id: 'sigiriya', name: 'Sigiriya Rock', price: 36, icon: 'fa-mountain' },
  { id: 'kandy', name: 'Kandy Temple', price: 15, icon: 'fa-place-of-worship' },
  { id: 'ella', name: 'Ella Train Tour', price: 25, icon: 'fa-train' },
  { id: 'yala', name: 'Yala Jeep Safari', price: 65, icon: 'fa-binoculars' },
  { id: 'galle', name: 'Galle Dutch Fort', price: 0, icon: 'fa-landmark' },
  { id: 'mirissa', name: 'Whale Watching', price: 55, icon: 'fa-water' },
];

// Accommodation daily rate per room (USD)
const hotelRates = {
  3: 60,
  4: 110,
  5: 220,
};

// Vehicle daily rate (USD)
const vehicleRates = {
  sedan: 75,
  suv: 110,
  van: 140,
};

// Currency conversion (offline rates)
const currencyRates = {
  USD: { symbol: '$', rate: 1 },
  EUR: { symbol: '€', rate: 0.92 },
  LKR: { symbol: 'Rs ', rate: 305 },
};

export default function Planner() {
  const [selected, setSelected] = useState(['sigiriya', 'kandy', 'ella']);
  const [hotelStar, setHotelStar] = useState(4);
  const [vehicle, setVehicle] = useState('suv');
  const [days, setDays] = useState(7);
  const [guests, setGuests] = useState(2);
  const [currency, setCurrency] = useState('USD');

  const toggleSpot = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  // ─── Live Price Calculation ───
  const totals = useMemo(() => {
    const safeDays = Math.max(1, Math.min(30, Number(days) || 1));
    const safeGuests = Math.max(1, Math.min(20, Number(guests) || 1));

    const rooms = Math.ceil(safeGuests / 2);
    const hotelTotal = hotelRates[hotelStar] * safeDays * rooms;
    const vehicleTotal = vehicleRates[vehicle] * safeDays;

    let entranceTotal = 0;
    selected.forEach((id) => {
      const spot = plannerSpots.find((s) => s.id === id);
      if (spot) entranceTotal += spot.price;
    });
    entranceTotal *= safeGuests;

    const grandTotal = hotelTotal + vehicleTotal + entranceTotal;
    return {
      hotelTotal,
      vehicleTotal,
      entranceTotal,
      grandTotal,
      days: safeDays,
      guests: safeGuests,
      spots: selected.length,
    };
  }, [selected, hotelStar, vehicle, days, guests]);

  // Format price for display in current currency
  const formatPrice = (usd) => {
    const c = currencyRates[currency];
    const converted = Math.round(usd * c.rate);
    return `${c.symbol}${converted.toLocaleString()}`;
  };

  const handleRequestWhatsApp = () => {
    const spotNames = selected
      .map((id) => plannerSpots.find((s) => s.id === id)?.name)
      .filter(Boolean)
      .join(', ');
    const msg = `Hello Lanka 360! I designed a custom itinerary on your website:%0A%0A- Destinations: ${spotNames}%0A- Duration: ${totals.days} days%0A- Travelers: ${totals.guests}%0A- Hotel: ${hotelStar}-star%0A- Vehicle: ${vehicle.toUpperCase()}%0A%0AEstimated total: ${formatPrice(totals.grandTotal)}. Please send me a full quote.`;
    window.open(`https://wa.me/94771234567?text=${msg}`, '_blank');
  };

  return (
    <section
      id="planner"
      className="py-20 bg-slate-900 dark:bg-slate-950 text-white relative overflow-hidden transition-colors"
    >
      {/* Dotted pattern background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-gold-400 uppercase tracking-widest text-xs font-bold">
            <i className="fas fa-magic mr-1" /> Interactive Itinerary Planner
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2 mb-4">
            Design Your Custom Ceylon Journey
          </h2>
          <p className="text-slate-300">
            Select your destinations, preferred stay, and transport style to
            calculate an instant estimate and request your custom quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* ─── LEFT: Selector Panel ─── */}
          <div className="bg-ocean-800/90 dark:bg-slate-900/80 p-6 rounded-2xl border border-slate-700 shadow-xl lg:col-span-2">
            <h3 className="text-xl font-bold text-gold-400 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-gold-500 text-ocean-900 font-bold text-sm flex items-center justify-center mr-3">
                1
              </span>
              Choose Destinations &amp; Highlights
            </h3>

            {/* Destination checkboxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {plannerSpots.map((spot) => {
                const isSelected = selected.includes(spot.id);
                return (
                  <button
                    key={spot.id}
                    type="button"
                    onClick={() => toggleSpot(spot.id)}
                    className={`flex items-center justify-between gap-3 p-3 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'bg-gold-500/15 border-gold-500 text-gold-300'
                        : 'bg-slate-900 border-slate-700/60 text-slate-200 hover:border-gold-500/60'
                    }`}
                  >
                    <span className="flex items-center gap-2.5 text-xs font-medium">
                      <i className={`fas ${spot.icon} text-gold-500 text-sm`} />
                      {spot.name}
                    </span>
                    <span
                      className={`w-5 h-5 rounded-md border flex items-center justify-center text-[10px] transition ${
                        isSelected
                          ? 'bg-gold-500 border-gold-500 text-ocean-900'
                          : 'border-slate-600'
                      }`}
                    >
                      {isSelected && <i className="fas fa-check" />}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Options grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-700">
              {/* Hotel */}
              <div>
                <h4 className="text-sm font-semibold text-slate-300 mb-2">
                  <i className="fas fa-hotel text-gold-400 mr-2" />
                  Accommodation Level
                </h4>
                <select
                  value={hotelStar}
                  onChange={(e) => setHotelStar(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm text-slate-200 outline-none focus:border-gold-500"
                >
                  <option value={3}>3-Star Boutique Comfort ($60/day)</option>
                  <option value={4}>4-Star Luxury Resort ($110/day)</option>
                  <option value={5}>5-Star Heritage / Premium Boutique ($220/day)</option>
                </select>
              </div>

              {/* Vehicle */}
              <div>
                <h4 className="text-sm font-semibold text-slate-300 mb-2">
                  <i className="fas fa-car text-gold-400 mr-2" />
                  Private Vehicle Option
                </h4>
                <select
                  value={vehicle}
                  onChange={(e) => setVehicle(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm text-slate-200 outline-none focus:border-gold-500"
                >
                  <option value="sedan">Luxury Sedan (1–3 Guests) — $75/day</option>
                  <option value="suv">Premium SUV (1–4 Guests) — $110/day</option>
                  <option value="van">Luxury Passenger Van (4–8 Guests) — $140/day</option>
                </select>
              </div>

              {/* Days */}
              <div>
                <h4 className="text-sm font-semibold text-slate-300 mb-2">
                  <i className="fas fa-calendar-day text-gold-400 mr-2" />
                  Total Trip Days
                </h4>
                <input
                  type="number"
                  min={1}
                  max={30}
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm text-slate-200 outline-none focus:border-gold-500"
                />
              </div>

              {/* Guests */}
              <div>
                <h4 className="text-sm font-semibold text-slate-300 mb-2">
                  <i className="fas fa-users text-gold-400 mr-2" />
                  Number of Travelers
                </h4>
                <input
                  type="number"
                  min={1}
                  max={20}
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm text-slate-200 outline-none focus:border-gold-500"
                />
              </div>
            </div>
          </div>

          {/* ─── RIGHT: Live Estimate Card ─── */}
          <div className="bg-gradient-to-br from-ocean-800 to-slate-900 dark:from-slate-900 dark:to-slate-950 p-6 rounded-2xl border-2 border-gold-500/50 shadow-2xl lg:sticky lg:top-24">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center">
              <i className="fas fa-calculator text-gold-400 mr-2" />
              Estimated Summary
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Includes private driver, fuel, hotel stay, breakfast &amp; entrance fees.
            </p>

            {/* Currency mini-selector */}
            <div className="flex items-center justify-end mb-4 -mt-2">
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="bg-slate-800 border border-slate-700 rounded-lg px-2 py-1 text-xs text-slate-200 outline-none focus:border-gold-500"
              >
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="LKR">LKR (Rs)</option>
              </select>
            </div>

            <div className="space-y-3 border-b border-slate-700 pb-4 mb-4 text-sm">
              <div className="flex justify-between text-slate-300">
                <span>Selected Destinations:</span>
                <span className="font-bold text-gold-400">
                  {totals.spots} spot{totals.spots === 1 ? '' : 's'}
                </span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Duration &amp; Travelers:</span>
                <span className="font-bold">
                  {totals.days} Days / {totals.guests}{' '}
                  {totals.guests === 1 ? 'Guest' : 'Guests'}
                </span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Accommodation Est.:</span>
                <span className="font-bold">{formatPrice(totals.hotelTotal)}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Private Vehicle &amp; Chauffeur:</span>
                <span className="font-bold">{formatPrice(totals.vehicleTotal)}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Entrance Fees:</span>
                <span className="font-bold">{formatPrice(totals.entranceTotal)}</span>
              </div>
            </div>

            <div className="mb-6">
              <span className="text-xs uppercase text-slate-400 font-semibold block">
                Total Estimated Cost
              </span>
              <div className="text-4xl font-extrabold text-gold-400 mt-1">
                {formatPrice(totals.grandTotal)}
              </div>
              <span className="text-[11px] text-slate-400 italic block mt-1">
                *Final quote may vary based on seasonal hotel offers
              </span>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleRequestWhatsApp}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition flex items-center justify-center space-x-2"
              >
                <i className="fab fa-whatsapp text-xl" />
                <span>Request via WhatsApp</span>
              </button>
              <a
                href="/contact"
                className="w-full bg-gold-500 hover:bg-gold-600 text-ocean-900 font-bold py-3 px-4 rounded-xl shadow-lg transition flex items-center justify-center space-x-2"
              >
                <i className="fas fa-paper-plane" />
                <span>Send Official Itinerary Request</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}