/**
 * Dados centrais da Martinelli Chaves.
 * Telefone, endereço e links existem SOMENTE aqui — componentes importam deste arquivo.
 *
 * Campos `null` = informação ainda não confirmada pelo cliente.
 * Enquanto forem `null`, não aparecem no site nem nos dados estruturados.
 * Lista completa de pendências: docs/PENDENCIAS.md
 */

export const SITE = {
  name: 'Martinelli Chaves',
  tagline: 'Chaveiro automotivo, residencial e comercial em Indaiatuba',
  url: (import.meta.env.PUBLIC_SITE_URL ?? 'https://martinellichaves.com.br').replace(/\/$/, ''),
  locale: 'pt_BR',
  lang: 'pt-BR',
  ogImage: '/images/og-martinelli-chaves.jpg',
  defaultTitle: 'Chaveiro Automotivo 24h em Indaiatuba | Martinelli Chaves',
  defaultDescription:
    'Chaveiro 24h em Indaiatuba: chaves codificadas e smart keys para carros e motos, abertura de portas, fechaduras e cópias de chaves para casas e empresas.',
} as const;

export const CONTACT = {
  phoneDisplay: '(19) 99918-2277',
  phoneE164: '+5519999182277',
  whatsappNumber: '5519999182277',
  email: null as string | null, // PENDENTE: confirmar e-mail oficial
} as const;

export const ADDRESS = {
  venue: 'Sumerbol Supermercados',
  street: 'Av. Eng. Fábio Roberto Barnabé, 1260',
  unit: 'Piso 2, Quiosque 01',
  district: 'Chácara Areal', // fonte: site atual martinellichaves.com.br
  city: 'Indaiatuba',
  state: 'SP',
  postalCode: '13331-005', // fonte: site atual martinellichaves.com.br
  country: 'BR',
  /** Coordenadas não confirmadas. Preencher a partir do perfil oficial no Google. */
  geo: null as { lat: number; lng: number } | null,
} as const;

/** Informado pelo cliente em 15/10/2026 */
export const PARKING = 'Estacionamento gratuito no Sumerbol';

export const ADDRESS_ONE_LINE = `${ADDRESS.venue}, ${ADDRESS.street}, ${ADDRESS.unit}, ${ADDRESS.city}/${ADDRESS.state}`;

const mapsQuery = encodeURIComponent(
  `${ADDRESS.venue}, ${ADDRESS.street}, ${ADDRESS.city} - ${ADDRESS.state}, ${ADDRESS.postalCode}`,
);

export const LINKS = {
  instagram: 'https://www.instagram.com/martinelli_chaves/',
  instagramHandle: '@martinelli_chaves',
  /** Rota até o Sumerbol (endereço validado no site atual e no briefing). */
  directions: `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`,
  mapEmbed: `https://www.google.com/maps?q=${mapsQuery}&output=embed`,
  /** Perfil no Google Maps (CID extraído do link de avaliações enviado pelo cliente). Validar. */
  googleBusiness: 'https://www.google.com/maps?cid=5043800918293055189' as string | null,
  /** Link de avaliações enviado pelo cliente (abre o painel de avaliações na busca do Google). */
  googleReviews: 'https://www.google.com/search?q=martinelli+chaves#lrd=0x94cf4d1b5045500b:0x45ff2e3644a586d5,1,,,,',
  currentSite: 'https://martinellichaves.com.br/',
} as const;

export interface KioskHours {
  days: string;
  hours: string;
  /** Para o Schema.org (omitido quando fechado) */
  spec: { dayOfWeek: string[]; opens: string; closes: string } | null;
}

export const HOURS = {
  /** Atendimento externo emergencial — NÃO é o horário do quiosque. */
  emergency: 'Atendimento externo emergencial 24 horas, todos os dias, inclusive domingos e feriados',
  emergencyShort: 'Emergências 24h',
  /** Horário presencial do quiosque no Sumerbol (informado pelo cliente em 15/10/2026). */
  kiosk: [
    { days: 'Segunda a sexta', hours: '10h às 19h', spec: { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '10:00', closes: '19:00' } },
    { days: 'Sábado', hours: '10h às 18h', spec: { dayOfWeek: ['Saturday'], opens: '10:00', closes: '18:00' } },
    { days: 'Domingos e feriados', hours: 'Fechado', spec: null },
  ] as KioskHours[],
  kioskShort: 'Quiosque: seg a sex 10h–19h, sáb 10h–18h',
} as const;

export const SERVICE_AREA = {
  label: 'Indaiatuba e região',
  note: 'Atendimento externo conforme disponibilidade',
  /** Cidades atendidas além de Indaiatuba — PENDENTE de confirmação. */
  cities: ['Indaiatuba'] as string[],
} as const;

export const COMPANY = {
  /**
   * PENDENTE: o site antigo cita "mais de 13 anos de experiência". Removido até o proprietário confirmar.
   * Quando confirmado, preencher: 'mais de 13 anos de experiência'
   */
  experience: null as string | null,
  owners: {
    /** PENDENTE: nomes do proprietário e da esposa para a seção "Quem somos". */
    names: null as string | null,
    story: null as string | null,
  },
  legal: {
    /** PENDENTE: razão social e CNPJ confirmados pelo cliente. Não inventar. */
    legalName: null as string | null,
    cnpj: null as string | null,
  },
} as const;
