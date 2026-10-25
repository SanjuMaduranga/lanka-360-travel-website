import { useState } from 'react';
import TripAdvisorIcon from './TripAdvisorIcon';

const reviewsList = [
  {
    id: 1,
    name: 'Sarah & Mark Johnson',
    country: 'United Kingdom',
    platform: 'google',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    date: '2 weeks ago',
    tour: '10 Days Highlights & Safari',
    comment:
      'Lanka 360 organized an unbelievable 10-day tour! Our driver guide Nalin was super friendly, punctual, and safe. High quality luxury vehicles and best hotel selections.',
    rating: 5,
  },
  {
    id: 2,
    name: 'David Miller',
    country: 'Australia',
    platform: 'tripadvisor',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    date: '1 month ago',
    tour: 'Scenic Train & Tea Plantation Tour',
    comment:
      'Best travel agency in Sri Lanka! Booking first-class train tickets from Kandy to Ella and Yala VIP jeep safari was totally seamless. Highly recommend!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Elena & Viktor Rostova',
    country: 'Germany',
    platform: 'google',
    avatar:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    date: '3 weeks ago',
    tour: 'Luxury Honeymoon Special',
    comment:
      'Luxury service from start to finish! Private SUV was pristine and response time on WhatsApp was super fast. Unforgettable Sri Lanka trip!',
    rating: 5,
  },
];

const TABS = [
  { id: 'all', label: 'All Reviews', icon: null },
  { id: 'google', label: 'Google Reviews', iconType: 'google' },
  { id: 'tripadvisor', label: 'TripAdvisor', iconType: 'tripadvisor' },
];

export default function Reviews() {
  const [activeTab, setActiveTab] = useState('all');

  const filtered =
    activeTab === 'all'
      ? reviewsList
      : reviewsList.filter((r) => r.platform === activeTab);

  return (
    <section
      id="reviews"
      className="py-24 bg-gradient-to-b from-slate-100 via-white to-slate-100 dark:from-slate-950 dark:via-ocean-900 dark:to-slate-950 relative overflow-hidden transition-colors"
    >
      {/* Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-widest mb-3 shadow-sm">
            <i className="fas fa-award mr-1" />
            Guest Experiences & Ratings
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-black text-ocean-900 dark:text-slate-100 tracking-tight">
            Loved By{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-amber-400 to-gold-600">
              Global Travelers
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm sm:text-base font-light">
            Read authentic feedback verified from our official Google and
            TripAdvisor profiles.
          </p>

          {/* Overall Rating Badges */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 mt-8 p-4 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-md max-w-2xl mx-auto">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow border border-slate-200 dark:border-slate-700">
                <i className="fab fa-google text-blue-500 text-xl" />
              </div>
              <div className="text-left">
                <div className="flex items-center space-x-1 text-amber-400 text-xs">
                  <span className="font-bold text-slate-800 dark:text-slate-100 mr-1">
                    4.9
                  </span>
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star" />
                  ))}
                </div>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
                  250+ Google Reviews
                </span>
              </div>
            </div>

            <div className="hidden sm:block h-8 w-px bg-slate-300 dark:bg-slate-700" />

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center shadow border border-emerald-200 dark:border-emerald-800">
              <TripAdvisorIcon className="w-6 h-6 text-emerald-500" />
              </div>
              <div className="text-left">
                <div className="flex items-center space-x-1 text-emerald-500 text-xs">
                  <span className="font-bold text-slate-800 dark:text-slate-100 mr-1">
                    5.0
                  </span>
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-circle text-[6px]" />
                  ))}
                </div>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
                  Top Rated Agency
                </span>
              </div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center items-center gap-3 mt-8">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition flex items-center gap-2 ${
                 activeTab === tab.id
                    ? 'bg-gold-500 text-ocean-900 font-bold shadow'
                    : 'bg-slate-200 dark:bg-slate-800 hover:bg-gold-500/20 text-slate-700 dark:text-slate-300'
                }`}
              >
                {tab.iconType === 'google' && <i className="fab fa-google text-blue-500 text-sm" />}
                {tab.iconType === 'tripadvisor' && <TripAdvisorIcon className="w-4 h-4 text-emerald-500" />}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((r) => {
            const isGoogle = r.platform === 'google';
            const badgeClass = isGoogle
              ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20'
              : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';

            return (
              <div
                key={r.id}
                className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-7 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xl hover:shadow-2xl transition duration-500 flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div>
                  {/* Badge & Stars */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`inline-flex items-center text-[10px] font-extrabold uppercase px-3 py-1 rounded-full border ${badgeClass}`}
                    >
                      {isGoogle ? (
                        <>
                          <i className="fab fa-google text-blue-500 mr-1.5" />{' '}
                          Google Review
                        </>
                      ) : (
                        <>
                          <TripAdvisorIcon className="w-3 h-3 text-emerald-500 mr-1.5" />{' '}
                          TripAdvisor
                        </>
                      )}
                    </span>
                    <div className="flex text-amber-400 text-xs">
                      {[...Array(r.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star" />
                      ))}
                    </div>
                  </div>

                  {/* Comment */}
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm italic leading-relaxed mb-6">
                    "{r.comment}"
                  </p>
                </div>

                {/* Footer */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center space-x-3">
                  <img
                    src={r.avatar}
                    alt={r.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-gold-500/40"
                  />
                  <div>
                    <h4 className="font-bold text-sm text-ocean-900 dark:text-slate-100 leading-tight">
                      {r.name}
                    </h4>
                    <div className="flex items-center space-x-2 text-[11px] text-slate-400 mt-0.5">
                      <span>{r.country}</span>
                      <span>•</span>
                      <span className="text-gold-500 font-medium">{r.tour}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── REVIEW LINKS ─── */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
          
          {/* Google Review Button */}
          <a
            href="https://search.google.com/local/writereview?placeid=YOUR_GOOGLE_PLACE_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-blue-500 text-slate-700 dark:text-slate-200 px-6 py-3 rounded-full text-sm font-semibold shadow-md transition"
          >
            <i className="fab fa-google text-blue-500 text-lg" />
            <span>Write a Review on Google</span>
          </a>

          {/* Custom TripAdvisor Button */}
          <a
            href="https://www.tripadvisor.com/UserReviewEdit-d34754084"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-emerald-500 text-slate-700 dark:text-slate-200 px-6 py-3 rounded-full text-sm font-semibold shadow-md transition"
          >
            <TripAdvisorIcon className="w-3 h-3 text-emerald-500 mr-1.5" />
            <span>Write a Review on TripAdvisor</span>
          </a>

        </div>
      </div>
    </section>
  );
}