import { useState, useEffect } from 'react';

const RECEIVING_EMAIL = 'lanka360sachith@gmail.com';
const WHATSAPP_NUMBER = '94725879636';

const emptyForm = {
  name: '',
  email: '',
  country: '',
  phone: '',
  startDate: '',
  endDate: '',
  adults: '2',
  children: '0',
  budget: '',
  notes: '',
};

const ACTIVITIES = [
  { id: 'unesco', label: 'UNESCO Temples' },
  { id: 'elephants', label: 'Wildlife Safari (Elephants)' },
  { id: 'leopard', label: 'Leopard Safari (Yala)' },
  { id: 'birds', label: 'Bird Watching' },
  { id: 'whales', label: 'Whale & Dolphin Watching' },
  { id: 'tea', label: 'Tea Plantations' },
  { id: 'train', label: 'Scenic Train' },
  { id: 'hiking', label: 'Hiking / Viewpoints' },
  { id: 'ayurveda', label: 'Ayurveda / Wellness' },
  { id: 'beach', label: 'Beaches & Relax' },
  { id: 'snorkel', label: 'Snorkeling / Coral' },
  { id: 'surf', label: 'Surfing' },
  { id: 'waterfall', label: 'Waterfalls' },
  { id: 'cooking', label: 'Cooking Class' },
  { id: 'village', label: 'Local Village' },
  { id: 'photo', label: 'Photography' },
  { id: 'boutique', label: 'Luxury Boutique' },
  { id: 'adventure', label: 'Adventure Sports' },
  { id: 'diving', label: 'Diving' },
  { id: 'turtles', label: 'Turtle Conservation' },
  { id: 'balloon', label: 'Hot Air Balloon' },
  { id: 'casino', label: 'Casino' },
  { id: 'shopping', label: 'Shopping' },
];

// Each destination exposes only activities that are relevant to that area.
const DESTINATIONS = [
  { id: 'sigiriya', label: 'Sigiriya & Dambulla', region: 'Cultural Triangle', description: 'Ancient landmarks, rock fortress and cave temples', activities: ['unesco', 'elephants', 'balloon', 'hiking', 'village', 'photo'] },
  { id: 'kandy', label: 'Kandy', region: 'Hill Country', description: 'Sacred temples, culture and local cuisine', activities: ['unesco', 'cooking', 'village', 'shopping', 'photo'] },
  { id: 'ella', label: 'Ella', region: 'Hill Country', description: 'Mountain views, tea estates and scenic train rides', activities: ['tea', 'train', 'hiking', 'waterfall', 'photo', 'adventure'] },
  { id: 'nuwara-eliya', label: 'Nuwara Eliya', region: 'Hill Country', description: 'Cool climate, tea plantations and waterfalls', activities: ['tea', 'train', 'hiking', 'waterfall', 'photo'] },
  { id: 'yala', label: 'Yala National Park', region: 'Southern Sri Lanka', description: 'Wildlife safaris and opportunities to spot leopards', activities: ['elephants', 'leopard', 'birds', 'photo', 'adventure'] },
  { id: 'galle', label: 'Galle & South Coast', region: 'Southern Coast', description: 'Historic Galle Fort, beaches and coastal towns', activities: ['beach', 'surf', 'snorkel', 'diving', 'turtles', 'whales', 'shopping', 'photo', 'boutique'] },
  { id: 'mirissa', label: 'Mirissa', region: 'Southern Coast', description: 'Beach time, ocean excursions and whale watching', activities: ['whales', 'beach', 'snorkel', 'surf', 'diving', 'photo'] },
  { id: 'bentota', label: 'Bentota', region: 'Western Coast', description: 'Relaxing beaches and water-based activities', activities: ['beach', 'snorkel', 'diving', 'turtles', 'ayurveda', 'adventure'] },
  { id: 'trincomalee', label: 'Trincomalee', region: 'Eastern Coast', description: 'Clear-water beaches, marine life and diving', activities: ['beach', 'snorkel', 'diving', 'whales', 'birds', 'photo'] },
  { id: 'colombo', label: 'Colombo', region: 'Western Sri Lanka', description: 'City experiences, restaurants and shopping', activities: ['shopping', 'cooking', 'photo', 'boutique', 'casino', 'ayurveda'] },
  { id: 'anuradhapura', label: 'Anuradhapura', region: 'Cultural Triangle', description: 'Ancient cities, stupas and sacred heritage sites', activities: ['unesco', 'village', 'photo', 'shopping'] },
  { id: 'udawalawe', label: 'Udawalawe', region: 'Southern Sri Lanka', description: 'Wildlife experiences and elephant spotting', activities: ['elephants', 'birds', 'photo', 'village'] },
];

export default function TripPlannerModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(emptyForm);
  const [selectedDestinations, setSelectedDestinations] = useState([]);
  const [activities, setActivities] = useState([]);
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  // Lock body scroll + Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleDestination = (id) => {
    const next = selectedDestinations.includes(id)
      ? selectedDestinations.filter((destinationId) => destinationId !== id)
      : [...selectedDestinations, id];
    setSelectedDestinations(next);
    const allowedActivityIds = new Set(
      DESTINATIONS.filter((destination) => next.includes(destination.id)).flatMap((destination) => destination.activities)
    );
    // Remove activities that no longer match any selected destination.
    setActivities((current) => current.filter((activityId) => allowedActivityIds.has(activityId)));
  };

  const toggleActivity = (id) => {
    setActivities((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleNextToActivities = () => {
    if (selectedDestinations.length === 0) return;
    setStep(3);
  };

  const visibleActivities = ACTIVITIES.filter((activity) =>
    DESTINATIONS.some((destination) => selectedDestinations.includes(destination.id) && destination.activities.includes(activity.id))
  );

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    const selectedActivities = ACTIVITIES
      .filter((a) => activities.includes(a.id))
      .map((a) => a.label)
      .join(', ');
    const selectedDestinationLabels = DESTINATIONS
      .filter((destination) => selectedDestinations.includes(destination.id))
      .map((destination) => destination.label)
      .join(', ');

    const whatsappText = [
      '*🏝️ Lanka 360 — Custom Tour Request*',
      '',
      '*── Traveler Details ──*',
      `*Name:* ${form.name}`,
      `*Email:* ${form.email}`,
      `*Phone:* ${form.phone}`,
      `*Country:* ${form.country}`,
      `*Dates:* ${form.startDate} to ${form.endDate}`,
      `*Adults:* ${form.adults} | *Children:* ${form.children}`,
      `*Budget (USD):* ${form.budget || 'Not specified'}`,
      '',
      '*── Destinations ──*',
      selectedDestinationLabels || 'None selected',
      '',
      '*── Activities & Focus ──*',
      selectedActivities || 'None selected',
      '',
      '*── Notes ──*',
      form.notes || 'None',
    ].join('\n');

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    try {
      await fetch(`https://formsubmit.co/ajax/${RECEIVING_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `🎫 Custom Tour Request — ${form.name}`,
          _template: 'table',
          _captcha: 'false',
          Name: form.name,
          Email: form.email,
          Phone: form.phone,
          Country: form.country,
          'Start Date': form.startDate,
          'End Date': form.endDate,
          Adults: form.adults,
          Children: form.children,
          'Approx Budget (USD)': form.budget || 'Not specified',
          Destinations: selectedDestinationLabels || 'None selected',
          Activities: selectedActivities || 'None selected',
          Notes: form.notes || 'None',
        }),
      }).catch(() => {});
    } catch (err) {
      console.error('Email send failed:', err);
    }

    if (isMobile) {
      window.location.assign(whatsappURL);
    } else {
      window.open(whatsappURL, '_blank', 'noopener,noreferrer');
    }

    setStatus('success');
    setSubmitting(false);

    setTimeout(() => {
      setStatus(null);
      setForm(emptyForm);
      setSelectedDestinations([]);
      setActivities([]);
      setStep(1);
      onClose();
    }, 3500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 overflow-hidden"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* 
        MODAL CARD 
        - Mobile: 100% width, 100% height (h-full w-full), rounded top only
        - Desktop: Centered, max-w-3xl, max-h-[92vh], fully rounded
        - Flex column ensures header/footer pin to edges, form fills space
      */}
      <div
        className="relative w-full max-w-3xl h-full sm:h-auto sm:max-h-[92vh] bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-none sm:rounded-3xl shadow-2xl border-0 sm:border border-slate-200 dark:border-slate-700 flex flex-col animate-[slideUp_0.3s_ease-out] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header (Fixed) */}
        <div className="px-5 sm:px-8 pt-6 sm:pt-8 pb-4 shrink-0 border-b border-slate-100 dark:border-slate-800">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-red-500 hover:text-white transition-all flex items-center justify-center shadow-sm"
          >
            <i className="fas fa-times" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 text-gold-600 dark:text-gold-400 text-[10px] font-bold uppercase tracking-widest mb-2">
            <i className="fas fa-magic" /> Custom Tour Request
          </div>
          <h2 className="font-serif text-2xl font-bold text-ocean-900 dark:text-slate-100">
            Design Your Dream Journey
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 hidden sm:block">
            Get a tailor-made itinerary & quote in 24 hours.
          </p>
          
          {/* Progress Bar */}
          <div className="flex items-center gap-2 mt-4">
            <div className={`h-1.5 flex-1 rounded-full transition-colors ${step >= 1 ? 'bg-gold-500' : 'bg-slate-200 dark:bg-slate-700'}`} />
            <div className={`h-1.5 flex-1 rounded-full transition-colors ${step >= 2 ? 'bg-gold-500' : 'bg-slate-200 dark:bg-slate-700'}`} />
            <div className={`h-1.5 flex-1 rounded-full transition-colors ${step >= 3 ? 'bg-gold-500' : 'bg-slate-200 dark:bg-slate-700'}`} />
          </div>
        </div>

        {/* Body (Scrollable - flex-1 fills remaining space) */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-10">
              <div className="w-20 h-20 rounded-full bg-emerald-500 text-white flex items-center justify-center text-4xl mb-5 shadow-lg shadow-emerald-500/30">
                <i className="fas fa-check" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-emerald-800 dark:text-emerald-300 mb-2">
                Request Received!
              </h3>
              <p className="text-sm text-emerald-700 dark:text-emerald-400 max-w-sm mx-auto">
                Your custom itinerary request was sent. We'll reply via WhatsApp and Email within 24 hours.
              </p>
            </div>
          ) : step === 1 ? (
            /* ─── STEP 1 ─── */
            <form id="planner-step-1" onSubmit={handleNextStep} className="space-y-5 pb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-ocean-900 text-white flex items-center justify-center text-xs font-bold">1</span>
                <span className="text-sm font-bold text-ocean-900 dark:text-slate-100 uppercase tracking-wider">Traveller & Trip Basics</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase font-semibold text-slate-500 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                  <input required name="name" value={form.name} onChange={handleChange} type="text" placeholder="John Doe" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-3 text-sm outline-none focus:border-gold-500 transition" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-semibold text-slate-500 mb-1.5">Email <span className="text-red-500">*</span></label>
                  <input required name="email" value={form.email} onChange={handleChange} type="email" placeholder="john@example.com" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-3 text-sm outline-none focus:border-gold-500 transition" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase font-semibold text-slate-500 mb-1.5">Country <span className="text-red-500">*</span></label>
                  <input required name="country" value={form.country} onChange={handleChange} type="text" placeholder="United Kingdom" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-3 text-sm outline-none focus:border-gold-500 transition" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-semibold text-slate-500 mb-1.5">Mobile / WhatsApp <span className="text-red-500">*</span></label>
                  <input required name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="+44 7700 900000" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-3 text-sm outline-none focus:border-gold-500 transition" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase font-semibold text-slate-500 mb-1.5">Start Date <span className="text-red-500">*</span></label>
                  <input required name="startDate" value={form.startDate} onChange={handleChange} type="date" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-3 text-sm outline-none focus:border-gold-500 transition" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-semibold text-slate-500 mb-1.5">End Date <span className="text-red-500">*</span></label>
                  <input required name="endDate" value={form.endDate} onChange={handleChange} type="date" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-3 text-sm outline-none focus:border-gold-500 transition" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase font-semibold text-slate-500 mb-1.5">Adults (12+)</label>
                  <input name="adults" value={form.adults} onChange={handleChange} type="number" min="1" max="20" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-3 text-sm outline-none focus:border-gold-500 transition" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-semibold text-slate-500 mb-1.5">Kids (&lt;12)</label>
                  <input name="children" value={form.children} onChange={handleChange} type="number" min="0" max="20" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-3 text-sm outline-none focus:border-gold-500 transition" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase font-semibold text-slate-500 mb-1.5">Approx Budget (USD) <span className="text-slate-400 font-normal">(Optional)</span></label>
                  <input name="budget" value={form.budget} onChange={handleChange} type="number" placeholder="e.g. 5000" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-3 text-sm outline-none focus:border-gold-500 transition" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-semibold text-slate-500 mb-1.5">Special Notes <span className="text-slate-400 font-normal">(Optional)</span></label>
                  <input name="notes" value={form.notes} onChange={handleChange} type="text" placeholder="Dietary needs..." className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-3 text-sm outline-none focus:border-gold-500 transition" />
                </div>
              </div>
            </form>
          ) : step === 2 ? (
            /* ─── STEP 2: DESTINATIONS ─── */
            <div className="space-y-4 pb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-ocean-900 text-white flex items-center justify-center text-xs font-bold">2</span>
                <span className="text-sm font-bold text-ocean-900 dark:text-slate-100 uppercase tracking-wider">Select Destinations</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Choose one or more places you would like to visit. Your activity options will adapt to your selections.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DESTINATIONS.map((destination) => {
                  const isActive = selectedDestinations.includes(destination.id);
                  return (
                    <button
                      key={destination.id}
                      type="button"
                      onClick={() => toggleDestination(destination.id)}
                      aria-pressed={isActive}
                      className={`flex items-start gap-3 p-4 rounded-xl border text-left transition-all ${isActive
                        ? 'bg-gold-500/10 border-gold-500 shadow-sm'
                        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-gold-300'
                      }`}
                    >
                      <span className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center shrink-0 border ${isActive ? 'bg-gold-500 border-gold-500 text-white' : 'border-slate-300 dark:border-slate-600'}`}>
                        {isActive && <i className="fas fa-check text-[10px]" />}
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-slate-800 dark:text-slate-100">{destination.label}</span>
                        <span className="block text-[10px] uppercase tracking-wider text-gold-700 dark:text-gold-400 mt-0.5">{destination.region}</span>
                        <span className="block text-xs leading-relaxed text-slate-500 dark:text-slate-400 mt-1">{destination.description}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
              {selectedDestinations.length > 0 && (
                <p className="text-xs text-slate-500 dark:text-slate-400">{selectedDestinations.length} destination{selectedDestinations.length === 1 ? '' : 's'} selected</p>
              )}
            </div>
          ) : (
            /* ─── STEP 3: DESTINATION-BASED ACTIVITIES ─── */
            <div className="space-y-4 pb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-ocean-900 text-white flex items-center justify-center text-xs font-bold">3</span>
                <span className="text-sm font-bold text-ocean-900 dark:text-slate-100 uppercase tracking-wider">Activities & Focus</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                These activities match your selected destinations. Select all the experiences you are interested in.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {DESTINATIONS.filter((destination) => selectedDestinations.includes(destination.id)).map((destination) => (
                  <span key={destination.id} className="px-2.5 py-1 rounded-full text-[11px] bg-gold-500/10 text-gold-700 dark:text-gold-400 border border-gold-500/20">{destination.label}</span>
                ))}
              </div>
              {visibleActivities.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {visibleActivities.map((act) => {
                    const isActive = activities.includes(act.id);
                    return (
                      <button
                        key={act.id}
                        type="button"
                        onClick={() => toggleActivity(act.id)}
                        aria-pressed={isActive}
                        className={`flex items-center gap-2.5 p-3 rounded-xl border text-left transition-all ${
                          isActive
                            ? 'bg-gold-500/10 border-gold-500 text-gold-700 dark:text-gold-400 font-semibold shadow-sm'
                            : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-gold-300'
                        }`}
                      >
                        <span className={`w-5 h-5 rounded flex items-center justify-center shrink-0 border transition-colors ${isActive ? 'bg-gold-500 border-gold-500 text-white' : 'border-slate-300 dark:border-slate-600'}`}>
                          {isActive && <i className="fas fa-check text-[10px]" />}
                        </span>
                        <span className="text-xs leading-tight">{act.label}</span>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <p className="text-sm text-slate-500">No activities are configured for these destinations yet.</p>
              )}
            </div>
          )}
        </div>

        {/* Footer Actions (Fixed) */}
        {status !== 'success' && (
          <div className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-5 sm:p-6 shrink-0 mt-auto">
            {step === 1 ? (
              <button
                type="submit"
                form="planner-step-1"
                className="w-full bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-600 hover:to-amber-700 text-ocean-900 font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-widest"
              >
                <span>Continue to Destinations</span>
                <i className="fas fa-arrow-right" />
              </button>
            ) : step === 2 ? (
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-5 sm:px-6 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-xl transition-all"
                  aria-label="Go back"
                >
                  <i className="fas fa-arrow-left" />
                </button>
                <button
                  type="button"
                  onClick={handleNextToActivities}
                  disabled={selectedDestinations.length === 0}
                  className="flex-1 bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-600 hover:to-amber-700 text-ocean-900 font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue to Activities <i className="fas fa-arrow-right" />
                </button>
              </div>
            ) : (
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-5 sm:px-6 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-xl transition-all"
                  aria-label="Back to destinations"
                >
                  <i className="fas fa-arrow-left" />
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="flex-1 bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-600 hover:to-amber-700 text-ocean-900 font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-widest disabled:opacity-70"
                >
                  {submitting ? (
                    <><i className="fas fa-spinner fa-spin" /> Sending...</>
                  ) : (
                    <>Submit Request <i className="fas fa-paper-plane" /></>
                  )}
                </button>
              </div>
            )}
            <p className="text-[10px] text-center text-slate-400 mt-3 hidden sm:block">
              No Obligations. We'll send your itinerary within 24 hours.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}