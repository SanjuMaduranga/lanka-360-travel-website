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

  {
    id: 'pkg-10-day-private-tour',
    title: '10 Days Private Sri Lankan Tour',
    tagline: 'Comfortable private car with an English speaking driver',
    durationDays: 10,
    category: 'Culture', 
    budget: 'standard',
    image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1000&q=80',
    priceUSD: 575,
    prices: {
      boutique: 575,
      ultra: 575,
      villa: 575,
    },
    rating: 4.90, // Estimated as not in image
    reviewsCount: 15, // Estimated as not in image
    highlights: [
      'Comfortable private car (Air condition)',
      'English speaking driver',
      'Highway charges & Parking fees',
      'Driver expenses',
      '1L water bottle per day',
    ],
    itinerary: [
      {
        day: 'Day 01',
        title: 'Airport – Sigiriya',
        desc: 'Arrival at the airport and transfer to Sigiriya. (Night at Sigiriya)',
      },
      {
        day: 'Day 02',
        title: 'Sigiriya – Kandy',
        desc: 'Travel from Sigiriya to Kandy. (Night at Kandy)',
      },
      {
        day: 'Day 03',
        title: 'Kandy – Ella',
        desc: 'Travel from Kandy to Ella. (Night at Ella)',
      },
      {
        day: 'Day 04',
        title: 'Ella – Yala',
        desc: 'Travel from Ella to Yala. (Night at Yala)',
      },
      {
        day: 'Day 05',
        title: 'Yala – Hiriketiya',
        desc: 'Travel from Yala to Hiriketiya. (Night at Hiriketiya)',
      },
      {
        day: 'Day 06',
        title: 'Hiriketiya',
        desc: 'Enjoy your stay. (Night at Hiriketiya)',
      },
      {
        day: 'Day 07',
        title: 'Hiriketiya – Weligama',
        desc: 'Travel from Hiriketiya to Weligama. (Night at Weligama)',
      },
      {
        day: 'Day 08',
        title: 'Weligama',
        desc: 'Enjoy your stay. (Night at Weligama)',
      },
      {
        day: 'Day 09',
        title: 'Weligama – Unawatuna',
        desc: 'Travel from Weligama to Unawatuna. (Night at Unawatuna)',
      },
      {
        day: 'Day 10',
        title: 'Unawatuna – Departure',
        desc: 'Transfer to the airport for your departure.',
      },
    ],
  },

  {
    id: 'pkg-4-day-sri-lankan-tour',
    title: '4 Days 3 Nights Sri Lankan Tour',
    tagline: 'Kandy, Bentota, and Colombo Express Tour',
    durationDays: 4,
    category: 'Culture', 
    budget: 'standard',
    image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1000&q=80',
    priceUSD: 105, // $420 total for 4 people = $105 per person
    prices: {
      boutique: 105, // Base rate per person
      ultra: 180,    // Estimated upgrade tier per person
      villa: 280,    // Estimated luxury tier per person
    },
    rating: 4.90, 
    reviewsCount: 10, 
    highlights: [
      'Kandy City Tour & UNESCO Heritage Site',
      'Gem Museum & Temple of the Sacred Tooth Relic',
      'Madu River Boat Safari',
      'Spice Garden & Turtle Conservation Centre',
    ],
    itinerary: [
      {
        day: 'Day 01',
        title: 'Airport → Kandy (Approximately 3 hours)',
        desc: 'If you arrive early in the morning: Enjoy a Kandy City Tour (UNESCO world heritage site). Visit the Gem Museum to discover world’s finest gemstones. Visit the Temple of the Sacred Tooth Relic. Enjoy a Kandy Cultural Show with traditional dancing and drumming. Overnight in Kandy.',
      },
      {
        day: 'Day 02',
        title: 'Kandy → Bentota (Approximately 5 hours)',
        desc: 'Enjoy a relaxing Madu River Boat Safari through the mangroves tunnels and waterways, surrounded by beautiful nature. Overnight in Bentota.',
      },
      {
        day: 'Day 03',
        title: 'Bentota → Colombo (Approximately 2 hours)',
        desc: 'Visit a Spice Garden to discover how famous spices and herbs are grown, harvested, and used. Visit the Turtle Conservation Centre to learn about sea turtles and conservation efforts. Enjoy a Colombo City Tour exploring main attractions and experiencing its mix of history, culture, and modern city life. Overnight in Colombo.',
      },
      {
        day: 'Day 04',
        title: 'Colombo → Airport (Approximately 1 hour)',
        desc: 'Airport Transfer – Transfer to Bandaranaike International Airport for your departure. We recommend arriving at least 3 hours before your flight, as traffic can be unpredictable. End of the Tour.',
      },
    ],
  },
];