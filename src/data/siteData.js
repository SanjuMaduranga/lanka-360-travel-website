export const destinationsList = [
  {
    id: 1,
    name: 'Sigiriya Rock Citadel',
    tagline: 'Ancient Sky Palace & Water Gardens',
    badge: 'UNESCO Heritage',
    img: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80',
    location: 'Central Cultural Triangle',
    rating: '4.9',
    tours: '8 Packages',
  },
  {
    id: 2,
    name: 'Ella Mountain Pass',
    tagline: 'Nine Arch Bridge & Misty Tea Hills',
    badge: 'Misty Highlands',
    img: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80',
    location: 'Badulla District',
    rating: '5.0',
    tours: '12 Packages',
  },
  {
    id: 3,
    name: 'Galle Dutch Fort',
    tagline: 'Historic Ramparts & Oceanside Cobblestones',
    badge: 'Colonial Heritage',
    img: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=80',
    location: 'Southern Oceanfront',
    rating: '4.8',
    tours: '6 Packages',
  },
  {
    id: 4,
    name: 'Yala National Park',
    tagline: 'World’s Highest Density Leopard Safari',
    badge: 'Wild Safari',
    img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    location: 'South-East Sanctuary',
    rating: '4.9',
    tours: '9 Packages',
  },
];



export const packagesList = [
  // ─────────────────────────────────────────────────────────
  // 1. The Royal Ceylon Grandeur
  // ─────────────────────────────────────────────────────────
  {
    id: 'pkg-royal-ceylon',
    title: 'The Royal Ceylon Grandeur',
    tagline: 'Private Helicopters, Ancient Palaces & High-Tea Estates',
    durationDays: 10,
    category: 'Luxury',
    budget: 'premium',
    image:
      'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1000&q=80',
    priceUSD: 8500,
    prices: {
      boutique: 8500,
      ultra: 12800,
      villa: 19500,
    },
    rating: 4.98,
    reviewsCount: 42,
    highlights: [
      'Helicopter transfers between cities',
      'Private Sigiriya Fortress dawn entry',
      'Ceylon tea estate private villa',
      'Chauffeur-driven luxury SUV',
    ],
    itinerary: [
      {
        day: 'Day 1–2',
        title: 'Arrival & Private Villa Relaxation in Colombo',
        desc: 'VIP tarmac reception. Private transfer to your coastal suite. Sunset cocktail with private historian.',
      },
      {
        day: 'Day 3–5',
        title: 'Helicopter Flight to Cultural Triangle & Sigiriya',
        desc: 'Private charter helicopter to Sigiriya. Dawn private ascent before public opening. Gourmet breakfast overlooking the rock.',
      },
      {
        day: 'Day 6–8',
        title: 'High Country Tea Estate Sanctuary (Nuwara Eliya)',
        desc: 'Restored 1920s planter estate. Master tea tasting with head blender and candlelit dinners in misty valleys.',
      },
      {
        day: 'Day 9–10',
        title: 'Southern Coast Ocean Villa & Departure',
        desc: 'Private yacht off Galle. Unwind at a cliffside pavilion before helicopter return to Colombo Airport.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 2. Leopards, Whales & Private Wilderness
  // ─────────────────────────────────────────────────────────
  {
    id: 'pkg-wildlife-ocean',
    title: 'Leopards, Whales & Private Wilderness',
    tagline: 'Super-Luxury Safari Tents & Ocean Catamaran Expeditions',
    durationDays: 7,
    category: 'Wildlife',
    budget: 'luxury',
    image:
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80',
    priceUSD: 6900,
    prices: {
      boutique: 6900,
      ultra: 9800,
      villa: 14200,
    },
    rating: 4.96,
    reviewsCount: 38,
    highlights: [
      'Senior naturalist-led safaris',
      'Private ocean charter for whale watching',
      'Plunge pool jungle pavilion',
      'All-inclusive fine dining',
    ],
    itinerary: [
      {
        day: 'Day 1–3',
        title: 'Yala National Park Private Enclave',
        desc: 'Check in to an ultra-exclusive tented lodge with air conditioning and private plunge pool. Early morning bespoke leopard tracking.',
      },
      {
        day: 'Day 4–5',
        title: 'Coastal Sanctuary & Whale Watching',
        desc: 'Board a luxury catamaran at Mirissa. Spot Blue Whales accompanied by marine biologist and private onboard butler service.',
      },
      {
        day: 'Day 6–7',
        title: 'Galle Fort Heritage & VIP Departure',
        desc: 'Explore UNESCO Galle Fort with an architect-led walking tour. Sunset cocktails on the ancient ramparts before airport transfer.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 3. Ayurveda & Soul Retreat Sanctuary
  // ─────────────────────────────────────────────────────────
  {
    id: 'pkg-island-wellness',
    title: 'Ayurveda & Soul Retreat Sanctuary',
    tagline: 'Holistic Mind-Body Healing in Secluded Coastal Estates',
    durationDays: 12,
    category: 'Wellness',
    budget: 'premium',
    image:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
    priceUSD: 9200,
    prices: {
      boutique: 9200,
      ultra: 14500,
      villa: 22000,
    },
    rating: 5.0,
    reviewsCount: 29,
    highlights: [
      'Personalised Ayurvedic doctor consultations',
      'Daily private yoga & meditation',
      'Organic farm-to-table cuisine',
      'Unlimited herbal treatments',
    ],
    itinerary: [
      {
        day: 'Day 1–4',
        title: 'Sanctuary Orientation & Holistic Diagnosis',
        desc: 'Arrival at a tranquil coastal wellness estate. Comprehensive pulse diagnostic by Master Ayurvedic Doctors and tailor-made treatment regimen.',
      },
      {
        day: 'Day 5–8',
        title: 'Deep Detox & Forest Bathing',
        desc: 'Daily customized herbal oil therapies, sound baths, yoga sessions overlooking tropical lagoon sanctuaries, and clean organic dining.',
      },
      {
        day: 'Day 9–12',
        title: 'Rejuvenation & Departure Realignment',
        desc: 'Personalized wellness roadmap for home, sound healing ritual, and helicopter transfer back to airport.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 4. Serendib Romantic Transcendence
  // ─────────────────────────────────────────────────────────
  {
    id: 'pkg-honeymoon-romance',
    title: 'Serendib Romantic Transcendence',
    tagline: 'Exclusive Honeymoon Escape with Helicopters & Private Butler',
    durationDays: 8,
    category: 'Honeymoon',
    budget: 'premium',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
    priceUSD: 7800,
    prices: {
      boutique: 7800,
      ultra: 11500,
      villa: 17800,
    },
    rating: 4.99,
    reviewsCount: 56,
    highlights: [
      'Scenic helicopter tours',
      'Candlelit private beach dinners',
      'Couples spa rituals',
      'Dedicated 24/7 personal butler',
    ],
    itinerary: [
      {
        day: 'Day 1–3',
        title: 'Misty Mountain Romance in Kandy',
        desc: 'Private luxury suite overlooking Victoria Lake. Private blessing ceremony and intimate dinner inside botanical gardens.',
      },
      {
        day: 'Day 4–6',
        title: 'Tropical Beach Hideaway in Tangalle',
        desc: 'Secluded ocean villa with private infinity pool. Sunset champagne sail and romantic seafood barbeque on private cove.',
      },
      {
        day: 'Day 7–8',
        title: 'Colombo VIP Departure',
        desc: 'Luxury shopping tour with personal stylist in Colombo before VIP lounge airport departure.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 5. Cultural Triangle Heritage Trail
  // ─────────────────────────────────────────────────────────
  {
    id: 'pkg-culture-triangle',
    title: 'Cultural Triangle Heritage Trail',
    tagline: 'UNESCO Wonders of Sigiriya, Polonnaruwa & Anuradhapura',
    durationDays: 6,
    category: 'Culture',
    budget: 'standard',
    image:
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1000&q=80',
    priceUSD: 1850,
    prices: {
      boutique: 1850,
      ultra: 2950,
      villa: 4500,
    },
    rating: 4.92,
    reviewsCount: 84,
    highlights: [
      'Ancient rock fortress guided tour',
      'Polonnaruwa cycling tour',
      'Dambulla Cave Temple',
      'Traditional village lunch experience',
    ],
    itinerary: [
      {
        day: 'Day 1–2',
        title: 'Sigiriya Rock Fortress & Dambulla Caves',
        desc: 'Private guided ascent of Sigiriya before dawn. Afternoon visit to the painted cave temples of Dambulla with a cultural historian.',
      },
      {
        day: 'Day 3–4',
        title: 'Polonnaruwa Ancient City & Village Experience',
        desc: 'Cycle through the royal ruins of Polonnaruwa. Traditional Sri Lankan village lunch cooked over clay pots.',
      },
      {
        day: 'Day 5–6',
        title: 'Anuradhapura Sacred City & Departure',
        desc: 'Explore the sacred Bodhi tree and ancient stupas. Scenic drive back to Colombo airport.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 6. Hill Country Tea & Train Journey
  // ─────────────────────────────────────────────────────────
  {
    id: 'pkg-hill-country',
    title: 'Hill Country Tea & Train Journey',
    tagline: 'Kandy, Nuwara Eliya & Ella by Scenic Railway',
    durationDays: 5,
    category: 'Adventure',
    budget: 'standard',
    image:
      'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1000&q=80',
    priceUSD: 1350,
    prices: {
      boutique: 1350,
      ultra: 2150,
      villa: 3400,
    },
    rating: 4.94,
    reviewsCount: 112,
    highlights: [
      'Reserved Kandy → Ella train seats',
      'Tea factory tour & tasting',
      'Little Adam’s Peak hike',
      'Nine Arch Bridge viewpoint',
    ],
    itinerary: [
      {
        day: 'Day 1–2',
        title: 'Kandy Temple of the Tooth & Botanical Gardens',
        desc: 'Evening ceremony at the Temple of the Sacred Tooth Relic. Private tour of the Royal Botanical Gardens.',
      },
      {
        day: 'Day 3',
        title: 'Scenic Train Kandy → Nuwara Eliya',
        desc: 'Reserved first-class observation seats on the legendary hill country railway. Tea factory tour and tasting in the afternoon.',
      },
      {
        day: 'Day 4–5',
        title: 'Ella Village, Nine Arch Bridge & Departure',
        desc: 'Sunrise hike up Little Adam’s Peak, photos at Nine Arch Bridge, and an early morning departure to Colombo.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 7. Southern Coast Beach Escape
  // ─────────────────────────────────────────────────────────
  {
    id: 'pkg-south-beach',
    title: 'Southern Coast Beach Escape',
    tagline: 'Galle, Mirissa, Unawatuna & Bentota',
    durationDays: 6,
    category: 'Beach',
    budget: 'standard',
    image:
      'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1000&q=80',
    priceUSD: 1450,
    prices: {
      boutique: 1450,
      ultra: 2350,
      villa: 3800,
    },
    rating: 4.88,
    reviewsCount: 96,
    highlights: [
      'Galle Dutch Fort walking tour',
      'Whale watching in Mirissa',
      'Stilt fisherman photo stop',
      'Madu River mangrove boat safari',
    ],
    itinerary: [
      {
        day: 'Day 1–2',
        title: 'Colombo → Bentota Beach Respite',
        desc: 'Coastal drive south to your beachfront hotel. Sunset cocktails and a relaxed dinner on the sand.',
      },
      {
        day: 'Day 3–4',
        title: 'Galle Fort & Mirissa Whale Watching',
        desc: 'Private walking tour of Galle Dutch Fort. Early morning whale watching cruise from Mirissa harbor.',
      },
      {
        day: 'Day 5–6',
        title: 'Madu River Safari & Departure',
        desc: 'Boat safari through mangroves, Kothduwa temple visit, and seafood lunch before heading to the airport.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 8. Big Five Safari Expedition
  // ─────────────────────────────────────────────────────────
  {
    id: 'pkg-safari-classic',
    title: 'Big Five Safari Expedition',
    tagline: 'Yala, Udawalawe & Minneriya National Parks',
    durationDays: 7,
    category: 'Wildlife',
    budget: 'luxury',
    image:
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80',
    priceUSD: 3200,
    prices: {
      boutique: 3200,
      ultra: 4900,
      villa: 7400,
    },
    rating: 4.95,
    reviewsCount: 71,
    highlights: [
      'Private 4x4 jeep safaris',
      'Leopard tracking with expert guide',
      'Elephant transit home visit',
      'Luxury tented camp stay',
    ],
    itinerary: [
      {
        day: 'Day 1–3',
        title: 'Yala National Park Luxury Camp',
        desc: 'Exclusive tented camp with en-suite bathrooms. Dawn and dusk game drives tracking leopards, sloth bears, and elephants.',
      },
      {
        day: 'Day 4–5',
        title: 'Udawalawe Elephant Transit Home',
        desc: 'Visit the elephant orphanage and observe rescued calves. Afternoon safari in Udawalawe National Park.',
      },
      {
        day: 'Day 6–7',
        title: 'Minneriya Elephant Gathering & Departure',
        desc: 'Witness hundreds of wild elephants gathering at the reservoir. Final morning drive back to Colombo.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 9. Grand Sri Lanka Circuit
  // ─────────────────────────────────────────────────────────
  {
    id: 'pkg-ultimate-circuit',
    title: 'Grand Sri Lanka Circuit',
    tagline: 'The Complete 14-Day Island Discovery',
    durationDays: 14,
    category: 'Luxury',
    budget: 'luxury',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
    priceUSD: 5600,
    prices: {
      boutique: 5600,
      ultra: 8500,
      villa: 12800,
    },
    rating: 4.97,
    reviewsCount: 63,
    highlights: [
      'All major UNESCO sites',
      'Two national park safaris',
      'Hill country train journey',
      'Beach & wellness days',
    ],
    itinerary: [
      {
        day: 'Day 1–3',
        title: 'Cultural Triangle Immersion',
        desc: 'Sigiriya, Dambulla, and Polonnaruwa with private historian. Luxury heritage hotel base in Habarana.',
      },
      {
        day: 'Day 4–6',
        title: 'Kandy & Hill Country Railway',
        desc: 'Temple of the Tooth, tea plantations, and the iconic train journey to Ella. Boutique tea estate bungalow stay.',
      },
      {
        day: 'Day 7–9',
        title: 'Yala Safari & Southern Beaches',
        desc: 'Two nights luxury tented camp in Yala. Then relax at a beachfront villa in Tangalle or Mirissa.',
      },
      {
        day: 'Day 10–12',
        title: 'Galle Fort & Ayurveda Retreat',
        desc: 'Explore Galle Fort, then check into a coastal wellness sanctuary for two days of Ayurvedic treatments.',
      },
      {
        day: 'Day 13–14',
        title: 'Colombo Luxury Farewell & Departure',
        desc: 'Final shopping and dining in Colombo. VIP airport transfer with fast-track immigration.',
      },
    ],
  },
];