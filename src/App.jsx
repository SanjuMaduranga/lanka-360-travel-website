import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import PackageItineraryModal from './components/PackageItineraryModal';
import PackageBookingModal from './components/PackageBookingModal';
import TripPlannerModal from './components/TripPlannerModal';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Packages from './pages/Packages';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

function ScrollToHash() {
  const { hash, pathname } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);
  return null;
}

export default function App() {
  // General booking modal (header "Book Now")
  const [bookingOpen, setBookingOpen] = useState(false);

  // Itinerary modal (package detail view)
  const [itineraryPkg, setItineraryPkg] = useState(null);

  // Booking modal (with package pre-loaded after Reserve click)
  const [bookingPkg, setBookingPkg] = useState(null);

  const [plannerOpen, setPlannerOpen] = useState(false);

  // Expose global triggers for buttons anywhere in the app
  useEffect(() => {
    window.openBookingModal = () => setBookingOpen(true);

    // Clicking a package → open ITINERARY modal
    window.openItineraryModal = (pkg) => setItineraryPkg(pkg);

    // Clicking the itinerary's "Reserve" button → swap modals
    window.openPackageBookingModal = (pkg) => {
      setItineraryPkg(null);   
      setBookingPkg(pkg);      
    };

    window.openTripPlanner = () => setPlannerOpen(true);

    return () => {
      delete window.openBookingModal;
      delete window.openItineraryModal;
      delete window.openPackageBookingModal;
    };
  }, []);

  return (
    <>
      <ScrollToHash />
      <TopBar />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <WhatsAppButton />

      {/* Itinerary modal */}
      <PackageItineraryModal
        key={itineraryPkg?.id || 'none'}
        isOpen={!!itineraryPkg}
        pkg={itineraryPkg}
        onClose={() => setItineraryPkg(null)}
        onReserve={(pkg) => window.openPackageBookingModal(pkg)}
      />

      {/* Booking form modal */}
      <PackageBookingModal
        key={bookingPkg?.id || 'none'}
        isOpen={!!bookingPkg}
        pkg={bookingPkg}
        onClose={() => setBookingPkg(null)}
      />

      {/* General booking modal (header button) */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />

      <TripPlannerModal 
        isOpen={plannerOpen} 
        onClose={() => setPlannerOpen(false)} 
      />
    </>
  );
}