// JSON-LD Structured Data for Local Business SEO
// This helps Google show SJM Infrastructure in local search results for "builder in Kundrathur Chennai"

export default function StructuredData() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness', 'GeneralContractor'],
    name: 'SJM Infrastructure',
    alternateName: ['SJM Infra', 'Sri Lakshmi Foundations', 'SJM Infrastructure Kundrathur'],
    description: 'SJM Infrastructure is a traditional building contractor and civil construction company in Kundrathur, Chennai. We specialize in CMDA & DTCP approvals, building plan, layout, structural design, 3D elevation, estimation, valuation, and housing loan assistance. Also contractors for Highways, PWD, Municipalities, and Greater Chennai Corporation.',
    url: 'https://sjminfrastructure.com',
    telephone: ['+917010196927', '+917010394507'],
    email: 'sjminfras@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No.1093, Metro Grand City',
      addressLocality: 'Kundrathur',
      addressRegion: 'Chennai, Tamil Nadu',
      postalCode: '600069',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '12.9698',
      longitude: '80.0892',
    },
    areaServed: [
      { '@type': 'City', name: 'Chennai' },
      { '@type': 'City', name: 'Kundrathur' },
      { '@type': 'City', name: 'Kanchipuram' },
      { '@type': 'City', name: 'Tambaram' },
      { '@type': 'City', name: 'Pallavaram' },
      { '@type': 'State', name: 'Tamil Nadu' },
    ],
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '09:00', closes: '19:00' },
    ],
    priceRange: 'Rs.Rs.',
    founder: { '@type': 'Person', name: 'S. Jeevanantham' },
    foundingDate: '2010',
    slogan: 'Dream Home of You - We Build',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Building & Construction Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Building Plan', areaServed: 'Kundrathur, Chennai' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CMDA Approval', areaServed: 'Chennai Metropolitan Area' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'DTCP Approval', areaServed: 'Tamil Nadu' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Structural Design', areaServed: 'Kundrathur, Chennai' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '3D Elevation Design', areaServed: 'Chennai' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Building Estimation', areaServed: 'Kundrathur' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Property Valuation', areaServed: 'Chennai' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Housing Loan Assistance', areaServed: 'Chennai' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Highway Construction', areaServed: 'Tamil Nadu' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'PWD Contracts', areaServed: 'Tamil Nadu' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'GCC Works', areaServed: 'Greater Chennai Corporation' } },
      ],
    },
    sameAs: [
      'https://facebook.com/sjminfrastructure',
      'https://instagram.com/sjminfrastructure',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '87',
      bestRating: '5',
    },
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sjminfrastructure.com' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://sjminfrastructure.com/services' },
      { '@type': 'ListItem', position: 3, name: 'Projects', item: 'https://sjminfrastructure.com/projects' },
      { '@type': 'ListItem', position: 4, name: 'Contact', item: 'https://sjminfrastructure.com/contact' },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}

