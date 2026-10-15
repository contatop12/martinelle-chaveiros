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
  defaultTitle: 'Chaveiro Automotivo e Residencial em Indaiatuba 24h | Martinelli Chaves',
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
  /** PENDENTE: link do perfil oficial no Google (Perfil da Empresa). */
  googleBusiness: null as string | null,
  currentSite: 'https://martinellichaves.com.br/',
} as const;

export const HOURS = {
  /** Emergência: confirmado no briefing. */
  emergency: 'Atendimento emergencial 24 horas, todos os dias da semana',
  emergencyShort: 'Emergências 24h',
  /**
   * Horário presencial do quiosque. NÃO confirmado — não inventar.
   * Exemplo quando confirmado: [{ days: 'Segunda a sábado', hours: '9h às 21h' }]
   */
  kiosk: null as { days: string; hours: string }[] | null,
} as const;

export const SERVICE_AREA = {
  label: 'Indaiatuba e região',
  note: 'Atendimento externo conforme disponibilidade',
  /** Cidades atendidas além de Indaiatuba — PENDENTE de confirmação. */
  cities: ['Indaiatuba'] as string[],
} as const;

export const COMPANY = {
  /** Fonte: site atual ("Equipe especializada com mais de 13 anos de experiência"). Reconfirmar. */
  experience: 'mais de 13 anos de experiência',
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
