import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Packages from '../components/Packages';
import Destinations from '../components/Destinations';
import Reviews from '../components/Reviews';
import Gallery from '../components/Gallery';
import ContactSection from '../components/ContactSection';
import AboutSection from '../components/AboutSection';

export default function Home() {
  return (
    <>
      <SEO
        title="Lanka 360 - Luxury Sri Lanka Tours & Travel Guides"
        description="Discover Sri Lanka with Lanka 360. Bespoke luxury tours, cultural heritage, wildlife safaris, and pristine beaches with private chauffeurs."
        url="https://www.lanka360travels.com/"
      />
      <main>
        <Hero />
        <Destinations />
        <Packages />
        <Gallery />
        <Reviews />
        <div id="about">
          <AboutSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>
    </>
  );
}