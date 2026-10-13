import { Helmet } from 'react-helmet-async';

export default function SEO({
  title = "Lanka 360 - Luxury Sri Lanka Tours & Travel Guides",
  description = "Discover Sri Lanka with Lanka 360. Bespoke luxury tours, cultural heritage, wildlife safaris, and pristine beaches with private chauffeurs.",
  keywords = "Sri Lanka tours, luxury travel Sri Lanka, Lanka 360, Ceylon travel, Sri Lanka travel guide, Sigiriya, Ella, Yala safari",
  image = "https://lanka360.com/og-image.jpg",
  url = "https://lanka360.com",
  type = "website",
}) {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Lanka 360" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Lanka 360" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Geo Tags */}
      <meta name="geo.region" content="LK" />
      <meta name="geo.placename" content="Colombo" />

      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          "name": "Lanka 360",
          "url": "https://lanka360.com",
          "logo": "https://lanka360.com/logo.png",
          "description": "Luxury Sri Lanka tours and travel guides",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Colombo",
            "addressCountry": "LK"
          },
          "telephone": "+94-77-123-4567",
          "priceRange": "$$$",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "250"
          }
        })}
      </script>
    </Helmet>
  );
}