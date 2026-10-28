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
    image: 'https://images.unsplash.com/photo-1550679193-d8ec2f2c3a25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    priceUSD: 575, // Total price
    priceType: 'per_person',
    baseGuests: 1,
    prices: {
      boutique: 575,
      ultra: 575,
      villa: 575,
    },
    rating: 4.90,
    reviewsCount: 15,
    highlights: [
      'Comfortable private car (Air condition)',
      'English speaking driver',
      'Highway charges & Parking fees',
      'Driver expenses',
      '1L water bottle per day',
    ],
    itinerary: [
      { day: 'Day 01', title: 'Airport – Sigiriya', desc: 'Arrival at the airport and transfer to Sigiriya. (Night at Sigiriya)' },
      { day: 'Day 02', title: 'Sigiriya – Kandy', desc: 'Travel from Sigiriya to Kandy. (Night at Kandy)' },
      { day: 'Day 03', title: 'Kandy – Ella', desc: 'Travel from Kandy to Ella. (Night at Ella)' },
      { day: 'Day 04', title: 'Ella – Yala', desc: 'Travel from Ella to Yala. (Night at Yala)' },
      { day: 'Day 05', title: 'Yala – Hiriketiya', desc: 'Travel from Yala to Hiriketiya. (Night at Hiriketiya)' },
      { day: 'Day 06', title: 'Hiriketiya', desc: 'Enjoy your stay. (Night at Hiriketiya)' },
      { day: 'Day 07', title: 'Hiriketiya – Weligama', desc: 'Travel from Hiriketiya to Weligama. (Night at Weligama)' },
      { day: 'Day 08', title: 'Weligama', desc: 'Enjoy your stay. (Night at Weligama)' },
      { day: 'Day 09', title: 'Weligama – Unawatuna', desc: 'Travel from Weligama to Unawatuna. (Night at Unawatuna)' },
      { day: 'Day 10', title: 'Unawatuna – Departure', desc: 'Transfer to the airport for your departure.' },
    ],
  },
  {
    id: 'pkg-4-day-sri-lankan-tour',
    title: '4 Days 3 Nights Sri Lankan Tour',
    tagline: 'Kandy, Bentota, and Colombo Express Tour',
    durationDays: 4,
    category: 'Culture', 
    budget: 'standard',
    image: 'https://plus.unsplash.com/premium_photo-1664299145564-2702b4f1649c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    priceUSD: 420, // Total price for 4 people (was 105)
    pricingNote: 'Rate applies for 4 Adults',
    priceType: 'flat_extra',
    baseGuests: 4,
    prices: {
      boutique: 420,
      ultra: 720,
      villa: 1120,
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
      { day: 'Day 01', title: 'Airport → Kandy (Approximately 3 hours)', desc: 'If you arrive early in the morning: Enjoy a Kandy City Tour (UNESCO world heritage site). Visit the Gem Museum to discover world’s finest gemstones. Visit the Temple of the Sacred Tooth Relic. Enjoy a Kandy Cultural Show with traditional dancing and drumming. Overnight in Kandy.' },
      { day: 'Day 02', title: 'Kandy → Bentota (Approximately 5 hours)', desc: 'Enjoy a relaxing Madu River Boat Safari through the mangroves tunnels and waterways, surrounded by beautiful nature. Overnight in Bentota.' },
      { day: 'Day 03', title: 'Bentota → Colombo (Approximately 2 hours)', desc: 'Visit a Spice Garden to discover how famous spices and herbs are grown, harvested, and used. Visit the Turtle Conservation Centre to learn about sea turtles and conservation efforts. Enjoy a Colombo City Tour exploring main attractions and experiencing its mix of history, culture, and modern city life. Overnight in Colombo.' },
      { day: 'Day 04', title: 'Colombo → Airport (Approximately 1 hour)', desc: 'Airport Transfer – Transfer to Bandaranaike International Airport for your departure. We recommend arriving at least 3 hours before your flight, as traffic can be unpredictable. End of the Tour.' },
    ],
  },
  {
    id: 'pkg-6-day-sri-lanka-express',
    title: '6 Days 5 Nights Sri Lanka Tour',
    tagline: 'Culture, Safari & Beach Express',
    durationDays: 6,
    category: 'Adventure',
    budget: 'standard',
    image: 'https://images.unsplash.com/photo-1663403764000-f927ff20fcbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D', 
    priceUSD: 575,
    pricingNote: 'Rate applies for 4 Adults',
    priceType: 'flat_extra', 
    baseGuests: 4,
    prices: {
      boutique: 575,
      ultra: 575,
      villa: 575,
    },
    rating: 5.0,
    reviewsCount: 12,
    highlights: [
      'Comfortable, air-conditioned private van with a flat roof',
      'Professional English-speaking chauffeur-guide',
      'Fuel expenses for the agreed itinerary',
      'Expressway toll charges and parking fees',
      'Driver’s meals and accommodation',
      '1 litre of bottled drinking water per person per day',
      'All applicable taxes, including 18% VAT',
    ],
    itinerary: [
      { day: 'Day 1', title: 'Arrival to Colombo', desc: 'Arrival to Colombo. (1 night in Colombo or Negambo)' },
      { day: 'Day 2', title: 'Colombo to Sigiriya', desc: 'Travel to Sigiriya (3 hours). Minneriya Safari. (1 night in Sigiriya)' },
      { day: 'Day 3', title: 'Sigiriya to Kandy', desc: 'Early morning Sigiriya Rock. Travel to Kandy (2 hours). (1 night in Kandy)' },
      { day: 'Day 4', title: 'Kandy to Bentota', desc: 'Travel to Bentota (14th of Jan). (2 nights in Bentota)' },
      { day: 'Day 5', title: 'Bentota Leisure', desc: 'Relax and enjoy the beach in Bentota.' },
      { day: 'Day 6', title: 'Departure', desc: 'Travel back to Colombo through airport (3 hours). Departure.' },
    ],
  },
];

const IMG = {
  catHeritage: 'https://images.unsplash.com/photo-1586846288010-25744d79a132?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  catNature: 'https://images.unsplash.com/photo-1743014118271-415197f9b0ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  catHiking: 'https://images.unsplash.com/photo-1739121890104-d8472a50a4eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  catBeach: 'https://images.unsplash.com/photo-1682368593766-1f788256c116?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  catRamayana: 'https://visitoursrilanka.com/wp-content/uploads/ramayanaya-bg-1.jpg',

  temple1: 'https://images.unsplash.com/photo-1628058733047-3b73ee23a164?auto=format&fit=crop&w=800&q=80',
  temple2: 'https://images.unsplash.com/photo-1592905169881-eff95fe441ed?auto=format&fit=crop&w=800&q=80',
  beach1: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
  beach2: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=800&q=80',
  surf1: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80',
  safari1: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
  safari2: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=800&q=80',
  hiking1: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80',
  hiking2: 'https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80',
  city1: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
  tea1: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80',
  elephant1: 'https://images.unsplash.com/photo-1581852017103-68ac65514cf7?auto=format&fit=crop&w=800&q=80',
  whale1: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80',
  turtle1: 'https://images.unsplash.com/photo-1518467166778-b88f373ffec7?auto=format&fit=crop&w=800&q=80',
  waterfall1: 'https://images.unsplash.com/photo-1544930612-6034b2b6e6b5?auto=format&fit=crop&w=800&q=80',
};


export const destinationCategories = [
  {
    id: 'heritage',
    title: 'Cultural Heritage & Historical Sites',
    icon: 'fa-landmark',
    img: IMG.catHeritage,
    description:
      'Discover Sri Lanka’s ancient kingdoms, sacred Buddhist temples, UNESCO World Heritage Sites, colonial landmarks, and centuries of cultural traditions.',
    footerText:
      'Explore eight UNESCO World Heritage Sites in Sri Lanka, including ancient cities, sacred landmarks, and remarkable natural heritage.',
    items: [
      {
        name: 'Sigiriya Rock Fortress',
        image: 'https://plus.unsplash.com/premium_photo-1730145749791-28fc538d7203?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
        description:
          'Explore the iconic fifth-century rock fortress, famous for its dramatic granite rock, ancient palace ruins, landscaped water gardens, frescoes, and remarkable historic engineering. Sigiriya is a UNESCO World Heritage Site.',
        distanceFromColombo: 'Approx. 175 km; 4–5 hours by road',
        distanceFromAirport: 'Approx. 145–160 km; 3–4 hours by road',
        bestTime: 'January–April; generally drier conditions',
        mapQuery: 'Sigiriya Rock Fortress, Sri Lanka',
        gallery: [
          'https://plus.unsplash.com/premium_photo-1730145749791-28fc538d7203?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D', 
          'https://images.unsplash.com/photo-1612862862126-865765df2ded?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D', 
          'https://images.unsplash.com/photo-1580794749460-76f97b7180d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
        ],
      },
      {
        name: 'Dambulla Cave Temple',
        image: 'https://images.unsplash.com/photo-1582103517762-613cc237349b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
        description:
          'Visit the Golden Temple of Dambulla, a UNESCO World Heritage Site featuring five principal cave shrines, Buddhist statues, colourful murals, and centuries of religious history.',
        distanceFromColombo: 'Approx. 150 km; 3.5–4.5 hours by road',
        distanceFromAirport: 'Approx. 130–150 km; 3–4 hours by road',
        bestTime: 'January–April; early morning is recommended',
        mapQuery: 'Dambulla Royal Cave Temple, Sri Lanka',
        gallery: [
          'https://images.unsplash.com/photo-1582103517762-613cc237349b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D', 
          'https://images.unsplash.com/photo-1704797390869-a78dee660597?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D', 
          'https://images.unsplash.com/photo-1756670164679-83f5fa92d1e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
        ],
      },
      {
        name: 'Anuradhapura Ancient City',
        image: 'https://images.unsplash.com/photo-1663403766626-f4c961f66d39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
        description:
          'Discover one of Sri Lanka’s ancient capitals, renowned for monumental stupas, Buddhist monasteries, historic reservoirs, and the sacred Sri Maha Bodhi tree. The Sacred City of Anuradhapura is a UNESCO World Heritage Site.',
        distanceFromColombo: 'Approx. 200–210 km; 4–5 hours by road',
        distanceFromAirport: 'Approx. 175–200 km; 3.5–4.5 hours by road',
        bestTime: 'May–September; plan around local weather',
        mapQuery: 'Sacred City of Anuradhapura, Sri Lanka',
        gallery: [
          'https://images.unsplash.com/photo-1663403766626-f4c961f66d39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D', 
          'https://images.unsplash.com/photo-1637557056625-c133d59dc460?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D', 
          'https://images.unsplash.com/photo-1665908439273-2d6998a74937?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
        ],
      },
      {
        name: 'Polonnaruwa Ancient City',
        image: 'https://images.unsplash.com/photo-1709729508706-87741ec2d50a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
        description:
          'Explore the remains of a medieval royal capital, including ancient palaces, Buddhist monuments, historic irrigation works, and the impressive rock-carved Buddha statues at Gal Vihara. Polonnaruwa is a UNESCO World Heritage Site.',
        distanceFromColombo: 'Approx. 215–230 km; 4.5–5.5 hours by road',
        distanceFromAirport: 'Approx. 190–215 km; 4–5 hours by road',
        bestTime: 'May–September; mornings are ideal for sightseeing',
        mapQuery: 'Ancient City of Polonnaruwa, Sri Lanka',
        gallery: [
          'https://images.unsplash.com/photo-1709729508706-87741ec2d50a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D', 
          'https://images.unsplash.com/photo-1654529652598-0c4f1c053711?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D', 
          'https://images.unsplash.com/photo-1660350092679-a6fc18016992?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
        ],
      },
      {
        name: 'Temple of the Sacred Tooth Relic, Kandy',
        image: IMG.temple1,
        description:
          'Visit Sri Dalada Maligawa, one of Buddhism’s most revered pilgrimage destinations, associated with the sacred Tooth Relic of the Buddha and the traditions of the former Kandyan Kingdom.',
        distanceFromColombo: 'Approx. 115 km; 3–4 hours by road',
        distanceFromAirport: 'Approx. 100–120 km; 2.5–3.5 hours by road',
        bestTime: 'January–April; visit throughout the year',
        mapQuery: 'Temple of the Sacred Tooth Relic, Kandy, Sri Lanka',
        gallery: [IMG.temple1, IMG.temple2, IMG.catHeritage],
      },
      {
        name: 'Galle Fort',
        image: IMG.temple2,
        description:
          'Walk along the historic ramparts of Galle Fort, a UNESCO World Heritage Site with Portuguese origins and substantial Dutch-era fortifications. Discover colonial architecture, museums, independent shops, cafés, and ocean views.',
        distanceFromColombo: 'Approx. 125 km; 2–3 hours by road',
        distanceFromAirport: 'Approx. 150–170 km; 2.5–3.5 hours by road',
        bestTime: 'December–April; the fort can be visited year-round',
        mapQuery: 'Galle Fort, Galle, Sri Lanka',
        gallery: [IMG.temple2, IMG.city1, IMG.beach2],
      },
      {
        name: 'Nuwara Eliya Tea Country',
        image: IMG.tea1,
        description:
          'Discover Sri Lanka’s highland tea-growing heritage, historic colonial-era buildings, tea estates, cool mountain weather, and scenic landscapes around Nuwara Eliya.',
        distanceFromColombo: 'Approx. 170–180 km; 4.5–6 hours by road',
        distanceFromAirport: 'Approx. 160–190 km; 4.5–6 hours by road',
        bestTime: 'February–April; conditions vary throughout the year',
        mapQuery: 'Nuwara Eliya, Sri Lanka',
        gallery: [IMG.tea1, IMG.hiking1, IMG.catHeritage],
      },
      {
        name: 'Colombo Historic Landmarks',
        image: IMG.city1,
        description:
          'Explore Sri Lanka’s commercial capital through its colonial buildings, religious landmarks, historic Fort district, Pettah markets, museums, waterfront, and lively urban culture.',
        distanceFromColombo: 'Within Colombo',
        distanceFromAirport: 'Approx. 30–40 km; 45–90 minutes by road',
        bestTime: 'December–March; city tours are available year-round',
        mapQuery: 'Historic landmarks in Colombo, Sri Lanka',
        gallery: [IMG.city1, IMG.temple2, IMG.beach1],
      },
      {
        name: 'Trincomalee Cultural Heritage',
        image: IMG.beach1,
        description:
          'Discover Trincomalee’s coastal heritage, Hindu temples, historic Fort Frederick, and deep natural harbour. Combine cultural sightseeing with nearby beaches and marine experiences.',
        distanceFromColombo: 'Approx. 260–270 km; 5–6 hours by road',
        distanceFromAirport: 'Approx. 240–270 km; 5–6 hours by road',
        bestTime: 'May–September for generally favourable east-coast weather',
        mapQuery: 'Trincomalee, Sri Lanka',
        gallery: [IMG.beach1, IMG.temple2, IMG.catHeritage],
      },
      {
        name: 'Batticaloa Heritage',
        image: IMG.beach2,
        description:
          'Explore the eastern coastal town of Batticaloa, known for its historic Dutch Fort, lagoon, fishing communities, religious landmarks, and distinctive Tamil and Muslim cultural traditions.',
        distanceFromColombo: 'Approx. 300–320 km; 6–7 hours by road',
        distanceFromAirport: 'Approx. 280–310 km; 5.5–7 hours by road',
        bestTime: 'May–September for generally favourable east-coast weather',
        mapQuery: 'Batticaloa, Sri Lanka',
        gallery: [IMG.beach2, IMG.temple2, IMG.city1],
      },
      {
        name: 'Traditional Villages & Local Culture',
        image: IMG.catHeritage,
        description:
          'Experience everyday Sri Lankan life through village visits, traditional cooking, local crafts, farming practices, and conversations with local communities, arranged respectfully with hosts.',
        distanceFromColombo: 'Depends on the selected village',
        distanceFromAirport: 'Depends on the selected village',
        bestTime: 'Year-round, depending on location and local activities',
        mapQuery: 'Traditional village experiences, Sri Lanka',
        gallery: [IMG.catHeritage, IMG.tea1, IMG.temple1],
      },
    ],
  },

  {
    id: 'nature',
    title: 'Nature & Wildlife',
    icon: 'fa-tree',
    img: IMG.catNature,
    description:
      'Experience Sri Lanka’s biodiversity through national parks, tropical rainforests, highland landscapes, birdwatching, elephant habitats, and seasonal marine wildlife excursions.',
    footerText:
      'Discover wild elephants, leopards, endemic birds, rainforest biodiversity, and remarkable coastal wildlife. Sightings depend on natural conditions.',
    items: [
      {
        name: 'Yala National Park',
        image: IMG.safari1,
        description:
          'Join a guided wildlife safari through one of Sri Lanka’s best-known national parks. Look for leopards, elephants, sloth bears, crocodiles, deer, and a variety of bird species in their natural habitats.',
        distanceFromColombo: 'Approx. 270–300 km; 5–6 hours by road',
        distanceFromAirport: 'Approx. 280–320 km; 5–6.5 hours by road',
        bestTime: 'February–July is often favourable for wildlife viewing; check seasonal closures',
        mapQuery: 'Yala National Park, Sri Lanka',
        gallery: [IMG.safari1, IMG.safari2, IMG.elephant1],
      },
      {
        name: 'Udawalawe National Park',
        image: IMG.elephant1,
        description:
          'Explore open grasslands and reservoir landscapes known for wild Asian elephants. Safaris may also reveal water buffalo, crocodiles, deer, and diverse birdlife.',
        distanceFromColombo: 'Approx. 165–190 km; 3.5–4.5 hours by road',
        distanceFromAirport: 'Approx. 160–190 km; 3.5–4.5 hours by road',
        bestTime: 'May–September is often favourable; wildlife can be seen year-round',
        mapQuery: 'Udawalawe National Park, Sri Lanka',
        gallery: [IMG.elephant1, IMG.safari1, IMG.safari2],
      },
      {
        name: 'Minneriya National Park',
        image: IMG.elephant1,
        description:
          'Visit the dry-zone landscapes surrounding the Minneriya reservoir. The park is famous for seasonal gatherings of wild elephants, although their locations and numbers change with rainfall and water availability.',
        distanceFromColombo: 'Approx. 180–200 km; 4–5 hours by road',
        distanceFromAirport: 'Approx. 155–185 km; 3.5–4.5 hours by road',
        bestTime: 'Often June–September for elephant gatherings; timing varies by year',
        mapQuery: 'Minneriya National Park, Sri Lanka',
        gallery: [IMG.elephant1, IMG.safari1, IMG.catNature],
      },
      {
        name: 'Kaudulla National Park',
        image: IMG.safari2,
        description:
          'Explore an important elephant habitat in Sri Lanka’s Cultural Triangle. Seasonal wildlife movements between Kaudulla, Minneriya, and nearby areas can provide rewarding safari experiences.',
        distanceFromColombo: 'Approx. 190–210 km; 4.5–5.5 hours by road',
        distanceFromAirport: 'Approx. 165–195 km; 4–5 hours by road',
        bestTime: 'Season-dependent; commonly considered during the dry season',
        mapQuery: 'Kaudulla National Park, Sri Lanka',
        gallery: [IMG.safari2, IMG.elephant1, IMG.safari1],
      },
      {
        name: 'Horton Plains National Park',
        image: IMG.hiking2,
        description:
          'Discover a high-altitude national park featuring montane grasslands, cloud forests, endemic biodiversity, and the famous World’s End escarpment. Follow designated trails and prepare for changing mountain weather.',
        distanceFromColombo: 'Approx. 160–190 km; 4.5–6 hours by road',
        distanceFromAirport: 'Approx. 150–180 km; 4.5–6 hours by road',
        bestTime: 'January–March often offers clearer mornings; conditions vary',
        mapQuery: 'Horton Plains National Park, Sri Lanka',
        gallery: [IMG.hiking2, IMG.hiking1, IMG.tea1],
      },
      {
        name: 'Sinharaja Forest Reserve',
        image: IMG.hiking1,
        description:
          'Explore a UNESCO World Heritage-listed tropical rainforest known for endemic birds, rare plants, rich biodiversity, and guided nature walks. Follow authorised trails and respect conservation requirements.',
        distanceFromColombo: 'Approx. 150–190 km; 4–5.5 hours by road',
        distanceFromAirport: 'Approx. 170–210 km; 4.5–6 hours by road',
        bestTime: 'January–March is often comparatively drier; rain is possible year-round',
        mapQuery: 'Sinharaja Forest Reserve, Sri Lanka',
        gallery: [IMG.hiking1, IMG.catNature, IMG.waterfall1],
      },
      {
        name: 'Whale & Dolphin Watching',
        image: IMG.whale1,
        description:
          'Join a responsible marine wildlife excursion from locations such as Mirissa or Trincomalee. Depending on the season and sea conditions, visitors may have opportunities to observe whales and dolphins. Sightings are never guaranteed.',
        distanceFromColombo: 'Mirissa: approx. 150 km; 2.5–3.5 hours by road',
        distanceFromAirport: 'Mirissa: approx. 180–200 km; 3–4 hours by road',
        bestTime: 'Mirissa: generally November–April; Trincomalee: generally May–September',
        mapQuery: 'Responsible whale watching, Mirissa, Sri Lanka',
        gallery: [IMG.whale1, IMG.beach2, IMG.catNature],
      },
      {
        name: 'Kosgoda Turtle Conservation',
        image: IMG.turtle1,
        description:
          'Learn about sea turtle conservation and threats to marine habitats through suitable, responsible visitor programmes. Confirm the facility’s current conservation practices and access arrangements before visiting.',
        distanceFromColombo: 'Approx. 75–85 km; 1.5–2.5 hours by road',
        distanceFromAirport: 'Approx. 110–130 km; 2–3 hours by road',
        bestTime: 'Year-round, subject to facility access and local conditions',
        mapQuery: 'Kosgoda sea turtle conservation, Sri Lanka',
        gallery: [IMG.turtle1, IMG.beach2, IMG.catNature],
      },
      {
        name: 'Udawalawe Elephant Transit Home',
        image: IMG.elephant1,
        description:
          'Learn about the rehabilitation of orphaned elephant calves at the Elephant Transit Home near Udawalawe. Check current visitor arrangements and official viewing rules before planning a visit.',
        distanceFromColombo: 'Approx. 165–190 km; 3.5–4.5 hours by road',
        distanceFromAirport: 'Approx. 160–190 km; 3.5–4.5 hours by road',
        bestTime: 'Year-round, subject to current access and visiting arrangements',
        mapQuery: 'Udawalawe Elephant Transit Home, Sri Lanka',
        gallery: [IMG.elephant1, IMG.safari1, IMG.catNature],
      },
      {
        name: 'Madu River Wetlands',
        image: IMG.beach2,
        description:
          'Experience a coastal wetland ecosystem near Balapitiya, with mangroves, small islands, birdlife, and traditional riverside communities. Choose responsible boat operators who minimise disturbance to wildlife.',
        distanceFromColombo: 'Approx. 80–90 km; 1.5–2.5 hours by road',
        distanceFromAirport: 'Approx. 115–135 km; 2–3 hours by road',
        bestTime: 'Year-round; check weather and river conditions',
        mapQuery: 'Madu River, Balapitiya, Sri Lanka',
        gallery: [IMG.beach2, IMG.catNature, IMG.turtle1],
      },
      {
        name: 'Ravana Falls',
        image: IMG.waterfall1,
        description:
          'Visit a well-known waterfall near Ella, surrounded by the dramatic scenery of Sri Lanka’s central highlands. Water flow and roadside conditions vary with rainfall, so follow local safety guidance.',
        distanceFromColombo: 'Approx. 200–230 km; 4.5–6 hours by road',
        distanceFromAirport: 'Approx. 220–250 km; 5–6.5 hours by road',
        bestTime: 'Year-round; waterfall flow varies with rainfall',
        mapQuery: 'Ravana Falls, Ella, Sri Lanka',
        gallery: [IMG.waterfall1, IMG.hiking1, IMG.tea1],
      },
    ],
  },

  {
    id: 'hiking',
    title: 'Trekking & Hiking Adventures',
    icon: 'fa-hiking',
    img: IMG.catHiking,
    description:
      'Discover Sri Lanka’s mountain trails, misty forests, tea plantations, panoramic viewpoints, and rural landscapes through hikes suited to different fitness levels.',
    footerText:
      'From scenic walks around Ella to the long-distance Pekoe Trail and the pilgrimage climb of Sri Pada, find an adventure that suits your pace.',
    items: [
      {
        name: 'The Pekoe Trail',
        image: IMG.tea1,
        description:
          'Explore Sri Lanka’s central highlands along a long-distance walking trail through tea estates, villages, forests, historic railway areas, and spectacular mountain scenery. Select stages according to your fitness and schedule.',
        distanceFromColombo: 'Access points vary; the trail covers multiple highland regions',
        distanceFromAirport: 'Access points vary; plan transport to your selected stage',
        bestTime: 'February–April is often favourable; check trail conditions',
        mapQuery: 'The Pekoe Trail, Sri Lanka',
        gallery: [IMG.tea1, IMG.hiking1, IMG.hiking2],
      },
      {
        name: 'Ella Rock',
        image: IMG.hiking1,
        description:
          'Take a rewarding hike through rural paths, railway-side landscapes, and forested slopes to a viewpoint overlooking Ella and the surrounding highlands. Trail conditions and navigation require attention.',
        distanceFromColombo: 'Approx. 200–230 km to Ella; 4.5–6 hours by road',
        distanceFromAirport: 'Approx. 220–250 km to Ella; 5–6.5 hours by road',
        bestTime: 'January–April is often favourable; start early',
        mapQuery: 'Ella Rock Hiking Trail, Sri Lanka',
        gallery: [IMG.hiking1, IMG.hiking2, IMG.tea1],
      },
      {
        name: 'Adam’s Peak (Sri Pada)',
        image: IMG.hiking2,
        description:
          'Climb the sacred mountain revered by multiple religious communities. The traditional pilgrimage route includes a long staircase, and the ascent requires preparation for darkness, crowds, and changing mountain weather.',
        distanceFromColombo: 'Approx. 135–155 km to common trailheads; 3.5–5 hours by road',
        distanceFromAirport: 'Approx. 150–180 km to common trailheads; 4–5.5 hours by road',
        bestTime: 'Traditional pilgrimage season is generally December–May',
        mapQuery: 'Sri Pada Adam’s Peak, Sri Lanka',
        gallery: [IMG.hiking2, IMG.hiking1, IMG.tea1],
      },
      {
        name: 'Little Adam’s Peak',
        image: IMG.hiking1,
        description:
          'Enjoy a popular, relatively accessible hike near Ella with panoramic views across mountain ridges, tea-covered slopes, and valleys. Wear suitable footwear and take care on exposed sections.',
        distanceFromColombo: 'Approx. 200–230 km to Ella; 4.5–6 hours by road',
        distanceFromAirport: 'Approx. 220–250 km to Ella; 5–6.5 hours by road',
        bestTime: 'January–April is often favourable; early morning is recommended',
        mapQuery: 'Little Adam’s Peak, Ella, Sri Lanka',
        gallery: [IMG.hiking1, IMG.tea1, IMG.hiking2],
      },
      {
        name: 'Knuckles Mountain Range',
        image: IMG.hiking2,
        description:
          'Explore rugged mountains, cloud forests, waterfalls, and traditional villages in this UNESCO-listed conservation landscape. Some routes require an experienced local guide, advance arrangements, or permission.',
        distanceFromColombo: 'Approx. 150–190 km to common access areas; 4–6 hours by road',
        distanceFromAirport: 'Approx. 140–180 km to common access areas; 4–5.5 hours by road',
        bestTime: 'January–March is often comparatively drier; check trail conditions',
        mapQuery: 'Knuckles Mountain Range, Sri Lanka',
        gallery: [IMG.hiking2, IMG.hiking1, IMG.tea1],
      },
      {
        name: 'Hawagala Mountain',
        image: IMG.hiking1,
        description:
          'Discover a hill-country hiking destination near the Belihuloya area, offering a rewarding ascent and expansive views of surrounding mountains and countryside. Conditions vary with weather and trail access.',
        distanceFromColombo: 'Approx. 150–180 km; 3.5–5 hours by road',
        distanceFromAirport: 'Approx. 170–200 km; 4–5.5 hours by road',
        bestTime: 'January–April is often favourable; confirm local trail conditions',
        mapQuery: 'Hawagala Mountain, Belihuloya, Sri Lanka',
        gallery: [IMG.hiking1, IMG.hiking2, IMG.tea1],
      },
    ],
  },

  {
    id: 'beaches',
    title: 'Beautiful Beaches & Coastal Experiences',
    icon: 'fa-umbrella-beach',
    img: IMG.catBeach,
    description:
      'Explore Sri Lanka’s golden beaches, surfing bays, palm-fringed shores, coastal villages, marine activities, and relaxed seaside communities.',
    footerText:
      'Choose the right coast for your travel dates, whether you prefer surfing, swimming, snorkelling, coastal sightseeing, or a peaceful beach escape.',
    items: [
      {
        name: 'Weligama Beach',
        image: IMG.surf1,
        description:
          'Visit a wide sandy bay on Sri Lanka’s southern coast, popular for beginner surfing lessons, surfboard rentals, beach cafés, and a relaxed coastal atmosphere.',
        distanceFromColombo: 'Approx. 145–155 km; 2.5–3.5 hours by road',
        distanceFromAirport: 'Approx. 175–195 km; 3–4 hours by road',
        bestTime: 'November–April is generally favourable for the south coast',
        mapQuery: 'Weligama Beach, Sri Lanka',
        gallery: [IMG.surf1, IMG.beach1, IMG.beach2],
      },
      {
        name: 'Arugam Bay',
        image: IMG.surf1,
        description:
          'Discover a renowned east-coast surfing destination known for its surf breaks, beach cafés, laid-back atmosphere, and nearby coastal and wildlife attractions.',
        distanceFromColombo: 'Approx. 320–350 km; 6–8 hours by road',
        distanceFromAirport: 'Approx. 300–340 km; 6–8 hours by road',
        bestTime: 'Generally April–September for the main surfing season',
        mapQuery: 'Arugam Bay, Sri Lanka',
        gallery: [IMG.surf1, IMG.beach1, IMG.beach2],
      },
      {
        name: 'Nilaveli Beach',
        image: IMG.beach1,
        description:
          'Relax on a beautiful sandy beach north of Trincomalee, known for its coastal scenery and access to Pigeon Island marine excursions when conditions and park regulations permit.',
        distanceFromColombo: 'Approx. 260–280 km; 5–6 hours by road',
        distanceFromAirport: 'Approx. 245–275 km; 5–6 hours by road',
        bestTime: 'Generally May–September for the east coast',
        mapQuery: 'Nilaveli Beach, Trincomalee, Sri Lanka',
        gallery: [IMG.beach1, IMG.beach2, IMG.surf1],
      },
      {
        name: 'Talpe Beach',
        image: IMG.beach2,
        description:
          'Discover a quieter stretch of the southern coastline near Galle, with coastal scenery, nearby cafés, and access to other southern beach destinations. Swimming suitability depends on surf and currents.',
        distanceFromColombo: 'Approx. 125–140 km; 2–3 hours by road',
        distanceFromAirport: 'Approx. 155–175 km; 2.5–3.5 hours by road',
        bestTime: 'November–April is generally favourable for the south coast',
        mapQuery: 'Talpe Beach, Galle, Sri Lanka',
        gallery: [IMG.beach2, IMG.beach1, IMG.surf1],
      },
      {
        name: 'Unawatuna Beach',
        image: IMG.beach1,
        description:
          'Enjoy a popular southern beach with restaurants, cafés, accommodation, coastal scenery, and access to Galle Fort. Sea conditions vary, so check local swimming advice.',
        distanceFromColombo: 'Approx. 125–135 km; 2–3 hours by road',
        distanceFromAirport: 'Approx. 155–175 km; 2.5–3.5 hours by road',
        bestTime: 'November–April is generally favourable for the south coast',
        mapQuery: 'Unawatuna Beach, Sri Lanka',
        gallery: [IMG.beach1, IMG.beach2, IMG.temple2],
      },
      {
        name: 'Mirissa Beach',
        image: IMG.beach2,
        description:
          'Discover a scenic southern beach known for its crescent-shaped bay, cafés, coastal viewpoints, surfing opportunities, and seasonal whale-watching excursions.',
        distanceFromColombo: 'Approx. 150 km; 2.5–3.5 hours by road',
        distanceFromAirport: 'Approx. 180–200 km; 3–4 hours by road',
        bestTime: 'November–April is generally favourable for the south coast',
        mapQuery: 'Mirissa Beach, Sri Lanka',
        gallery: [IMG.beach2, IMG.whale1, IMG.surf1],
      },
      {
        name: 'Hiriketiya Beach',
        image: IMG.beach1,
        description:
          'Explore a picturesque horseshoe-shaped bay near Dikwella, popular for surfing, beach cafés, tropical scenery, and a relaxed atmosphere. Surf conditions and suitability vary by experience level.',
        distanceFromColombo: 'Approx. 175–190 km; 3–4 hours by road',
        distanceFromAirport: 'Approx. 205–230 km; 3.5–4.5 hours by road',
        bestTime: 'November–April is generally favourable for the south coast',
        mapQuery: 'Hiriketiya Beach, Dikwella, Sri Lanka',
        gallery: [IMG.beach1, IMG.surf1, IMG.beach2],
      },
      {
        name: 'Ahangama Beach',
        image: IMG.beach2,
        description:
          'Experience the southern coast’s surfing culture, beachside cafés, coastal villages, and scenic ocean views. Several surf breaks cater to different skill levels depending on sea conditions.',
        distanceFromColombo: 'Approx. 130–145 km; 2.5–3.5 hours by road',
        distanceFromAirport: 'Approx. 160–185 km; 3–4 hours by road',
        bestTime: 'November–April is generally favourable for the south coast',
        mapQuery: 'Ahangama Beach, Sri Lanka',
        gallery: [IMG.beach2, IMG.surf1, IMG.beach1],
      },
      {
        name: 'Surfing Lessons & Coastal Adventures',
        image: IMG.surf1,
        description:
          'Enjoy beginner surfing lessons, guided coastal activities, and board rentals through suitable local operators. Select activities according to your experience and current sea conditions.',
        distanceFromColombo: 'Depends on the selected coastal destination',
        distanceFromAirport: 'Depends on the selected coastal destination',
        bestTime: 'Season-dependent; south and east coasts have different surf seasons',
        mapQuery: 'Surfing lessons in Sri Lanka',
        gallery: [IMG.surf1, IMG.beach1, IMG.beach2],
      },
      {
        name: 'Snorkelling & Diving',
        image: IMG.beach1,
        description:
          'Explore suitable coastal marine environments with qualified operators. Availability and underwater visibility depend on the season, weather, sea conditions, local regulations, and conservation requirements.',
        distanceFromColombo: 'Depends on the selected dive or snorkelling site',
        distanceFromAirport: 'Depends on the selected dive or snorkelling site',
        bestTime: 'Varies by coast and marine location',
        mapQuery: 'Snorkelling and scuba diving in Sri Lanka',
        gallery: [IMG.beach1, IMG.beach2, IMG.whale1],
      },
    ],
  },

  {
    id: 'ramayana',
    title: 'Ramayana Trail in Sri Lanka',
    icon: 'fa-om',
    img: IMG.catRamayana,
    description:
      'Explore Sri Lankan temples, highland landscapes, and sacred places associated by religious traditions and local legends with the Ramayana epic.',
    footerText:
      'Discover the beliefs, stories, and cultural traditions connecting Ramayana-related places across Sri Lanka, while recognising that traditional associations are not all independently verified historical events.',
    items: [
      {
        name: 'Seetha Amman Temple',
        image: IMG.temple1,
        description:
          'Visit an important Hindu temple in Seetha Eliya near Nuwara Eliya, traditionally associated with Sita in the Ramayana narrative. Discover its religious significance and the surrounding highland scenery.',
        distanceFromColombo: 'Approx. 170–185 km; 4.5–6 hours by road',
        distanceFromAirport: 'Approx. 160–190 km; 4.5–6 hours by road',
        bestTime: 'Year-round; check local festival dates and temple arrangements',
        mapQuery: 'Seetha Amman Temple, Seetha Eliya, Sri Lanka',
        gallery: [IMG.temple1, IMG.tea1, IMG.hiking1],
      },
      {
        name: 'Sri Bhakta Hanuman Temple',
        image: IMG.temple2,
        description:
          'Explore a Hindu temple in the Ramboda area, associated with Hanuman and the Ramayana tradition. Enjoy views of the central highlands and learn about local religious beliefs and practices.',
        distanceFromColombo: 'Approx. 150–175 km; 4–5.5 hours by road',
        distanceFromAirport: 'Approx. 150–180 km; 4.5–5.5 hours by road',
        bestTime: 'Year-round; confirm opening hours before visiting',
        mapQuery: 'Sri Bhakta Hanuman Temple, Ramboda, Sri Lanka',
        gallery: [IMG.temple2, IMG.temple1, IMG.tea1],
      },
      {
        name: 'Koneswaram Temple',
        image: IMG.temple2,
        description:
          'Discover the historic Hindu temple at Swami Rock in Trincomalee, overlooking the Indian Ocean. The temple is an important place of worship, celebrated for its religious significance and dramatic coastal setting.',
        distanceFromColombo: 'Approx. 260–270 km; 5–6 hours by road',
        distanceFromAirport: 'Approx. 240–270 km; 5–6 hours by road',
        bestTime: 'May–September for generally favourable east-coast weather',
        mapQuery: 'Koneswaram Temple, Trincomalee, Sri Lanka',
        gallery: [IMG.temple2, IMG.beach1, IMG.catRamayana],
      },
      {
        name: 'Hakgala Botanical Garden & Seetha Eliya',
        image: IMG.hiking1,
        description:
          'Explore the highland scenery around Hakgala and Seetha Eliya, including the botanical garden and places associated by local tradition with the Ramayana story. Enjoy the cool climate and surrounding mountain landscapes.',
        distanceFromColombo: 'Approx. 170–185 km; 4.5–6 hours by road',
        distanceFromAirport: 'Approx. 160–190 km; 4.5–6 hours by road',
        bestTime: 'February–April is often favourable for highland sightseeing',
        mapQuery: 'Hakgala Botanical Garden and Seetha Eliya, Sri Lanka',
        gallery: [IMG.hiking1, IMG.tea1, IMG.temple1],
      },
      {
        name: 'Ashoka Vatika Traditions',
        image: IMG.catRamayana,
        description:
          'Learn about the traditional association between the Ashoka Vatika episode of the Ramayana and locations in Sri Lanka, particularly the Seetha Eliya and Hakgala area. The identification of specific historical locations remains a matter of religious tradition and interpretation.',
        distanceFromColombo: 'Depends on the selected Ramayana-related site',
        distanceFromAirport: 'Depends on the selected Ramayana-related site',
        bestTime: 'Year-round; coordinate visits with the selected sites',
        mapQuery: 'Ramayana-related sites near Seetha Eliya, Sri Lanka',
        gallery: [IMG.catRamayana, IMG.temple1, IMG.hiking1],
      },
      {
        name: 'Unawatuna Coastal Heritage',
        image: IMG.beach1,
        description:
          'Combine a visit to Unawatuna’s southern coastline with a cultural itinerary featuring nearby temples, Galle Fort, and regional legends. Any Ramayana connection should be presented as a traditional or local interpretation rather than established historical fact.',
        distanceFromColombo: 'Approx. 125–135 km; 2–3 hours by road',
        distanceFromAirport: 'Approx. 155–175 km; 2.5–3.5 hours by road',
        bestTime: 'November–April is generally favourable for the south coast',
        mapQuery: 'Unawatuna, Galle, Sri Lanka',
        gallery: [IMG.beach1, IMG.temple2, IMG.catRamayana],
      },
    ],
  },
];