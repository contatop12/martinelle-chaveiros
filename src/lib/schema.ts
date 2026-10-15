/**
 * Dados estruturados (schema.org).
 * Sem avaliações, horários ou coordenadas não confirmados — esses campos só entram quando preenchidos em config/site.ts.
 */
import { ADDRESS, CONTACT, HOURS, LINKS, SITE, SERVICE_AREA } from '@/config/site';
import type { FaqItem } from '@/data/faq';

export const BUSINESS_ID = `${SITE.url}/#empresa`;

export function localBusinessSchema() {
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Locksmith',
    '@id': BUSINESS_ID,
    name: SITE.name,
    description: SITE.defaultDescription,
    url: `${SITE.url}/`,
    image: `${SITE.url}${SITE.ogImage}`,
    logo: `${SITE.url}/images/brand/logo-martinelli-chaves.png`,
    telephone: CONTACT.phoneE164,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${ADDRESS.street}, ${ADDRESS.unit} (${ADDRESS.venue})`,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.state,
      postalCode: ADDRESS.postalCode,
      addressCountry: ADDRESS.country,
    },
    areaServed: SERVICE_AREA.cities.map((name) => ({ '@type': 'City', name })),
    sameAs: [LINKS.instagram, LINKS.googleBusiness].filter(Boolean),
    knowsAbout: [
      'Chaveiro automotivo',
      'Chaves codificadas',
      'Programação de chave automotiva',
      'Smart key',
      'Chave presencial',
      'Chave canivete',
      'Chaveiro residencial',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços de chaveiro',
      itemListElement: [
        'Chaveiro automotivo',
        'Chaves codificadas',
        'Chaves para carros importados',
        'Chaveiro para motos',
        'Chaveiro 24 horas',
        'Chaveiro residencial e comercial',
      ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
    },
  };
  if (ADDRESS.geo) {
    data.geo = { '@type': 'GeoCoordinates', latitude: ADDRESS.geo.lat, longitude: ADDRESS.geo.lng };
  }
  // Horário do estabelecimento físico (quiosque). O atendimento emergencial 24h NÃO é declarado como horário de abertura.
  data.openingHoursSpecification = HOURS.kiosk
    .filter((h) => h.spec)
    .map((h) => ({ '@type': 'OpeningHoursSpecification', dayOfWeek: h.spec!.dayOfWeek, opens: h.spec!.opens, closes: h.spec!.closes }));
  // Sem aggregateRating: o Google não aceita estrelas de avaliações da própria empresa em LocalBusiness.
  return data;
}

export function serviceSchema(opts: { name: string; description: string; url: string; serviceType: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: opts.url,
    provider: { '@id': BUSINESS_ID },
    areaServed: { '@type': 'City', name: ADDRESS.city },
  };
}

export function faqSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: it.url })),
  };
}
