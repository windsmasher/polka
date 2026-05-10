import Home from '@/components/Home'

const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  '@id': 'https://www.salonpolka.pl/#salon',
  name: 'Polka – Salon fryzjersko-trychologiczny',
  alternateName: 'Polka Fryzjer Gliwice',
  description:
    'Kameralny salon fryzjersko-trychologiczny w Gliwicach. Strzyżenie, koloryzacja, pielęgnacja włosów i skóry głowy. 20+ lat doświadczenia.',
  url: 'https://www.salonpolka.pl',
  image: 'https://www.salonpolka.pl/salon.jpeg',
  logo: 'https://www.salonpolka.pl/polka-logo-transparent.png',
  telephone: '+48575509531',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ul. Daszyńskiego 226B',
    addressLocality: 'Gliwice',
    addressRegion: 'śląskie',
    postalCode: '44-151',
    addressCountry: 'PL',
  },
  areaServed: {
    '@type': 'City',
    name: 'Gliwice',
  },
  sameAs: [
    'https://www.instagram.com/justyna_paczka',
    'https://www.facebook.com/profile.php?id=100057305956163',
    'https://booksy.com/pl-pl/dl/show-business/298223',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Usługi fryzjerskie i trychologiczne',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Strzyżenie damskie i męskie' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Koloryzacja włosów' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Konsultacja trychologiczna' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Pielęgnacja włosów i skóry głowy' },
      },
    ],
  },
}

export default function HomePage() {
  return (
    <main className="main main--home">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <Home />
    </main>
  )
}
