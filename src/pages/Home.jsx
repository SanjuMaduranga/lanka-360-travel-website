import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Packages from '../components/Packages';
import Destinations from '../components/Destinations';
import ServicesPreview from '../components/ServicesPreview';
import Reviews from '../components/Reviews';

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
        <ServicesPreview />
        <Reviews />
      </main>
    </>
  );
}