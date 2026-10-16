/**
 * Marcas atendidas.
 * A Martinelli faz chaves para todas as marcas (confirmado em 16/10/2026). A grade
 * "Trabalhamos com Chaves de Todas as Marcas" mostra, nesta ordem, as marcas que têm logotipo:
 * primeiro as premium na ordem de preferência do cliente, depois as mais comuns na região.
 * Logotipos: public/images/brands/*.svg (vetores monocromáticos — scripts/generate-brand-logos.mjs).
 * Marcas com logo null aparecem no formulário de orçamento e entram na grade quando o SVG oficial chegar.
 */
export interface Brand {
  name: string;
  logo: string | null;
  /** Fotos/vídeos de trabalhos com a marca no site (referência interna) */
  evidence?: string;
}

export const BRANDS: Brand[] = [
  // Premium — ordem de preferência do cliente
  { name: 'BMW', logo: '/images/brands/bmw.svg', evidence: '6 fotos + vídeo de chave presencial' },
  { name: 'MINI', logo: '/images/brands/mini.svg' },
  { name: 'Mercedes-Benz', logo: '/images/brands/mercedes-benz.svg' },
  { name: 'Land Rover', logo: null },
  { name: 'Jaguar', logo: null },
  { name: 'Porsche', logo: '/images/brands/porsche.svg' },
  { name: 'Volvo', logo: '/images/brands/volvo.svg' },
  { name: 'Audi', logo: '/images/brands/audi.svg' },
  { name: 'Lexus', logo: null },
  { name: 'RAM', logo: '/images/brands/ram.svg', evidence: 'foto de chaves presenciais' },
  { name: 'Jeep', logo: '/images/brands/jeep.svg', evidence: '2 fotos' },

  // Demais marcas
  { name: 'Volkswagen', logo: '/images/brands/volkswagen.svg', evidence: 'Jetta GLI, Polo, Nivus, Tera' },
  { name: 'Chevrolet', logo: '/images/brands/chevrolet.svg', evidence: 'Onix e outros' },
  { name: 'Fiat', logo: '/images/brands/fiat.svg', evidence: '2 fotos' },
  { name: 'Ford', logo: '/images/brands/ford.svg' },
  { name: 'Toyota', logo: '/images/brands/toyota.svg', evidence: 'Hilux SRX e Corolla' },
  { name: 'Honda', logo: '/images/brands/honda.svg' },
  { name: 'Hyundai', logo: '/images/brands/hyundai.svg', evidence: 'foto de chaves' },
  { name: 'Nissan', logo: '/images/brands/nissan.svg', evidence: 'chaves presenciais' },
  { name: 'Renault', logo: '/images/brands/renault.svg' },
  { name: 'Peugeot', logo: '/images/brands/peugeot.svg' },
  { name: 'Citroën', logo: '/images/brands/citroen.svg' },
  { name: 'Mitsubishi', logo: '/images/brands/mitsubishi.svg' },
  { name: 'Kia', logo: '/images/brands/kia.svg' },
  { name: 'Suzuki', logo: '/images/brands/suzuki.svg' },
  { name: 'Subaru', logo: '/images/brands/subaru.svg' },
  { name: 'Ferrari', logo: '/images/brands/ferrari.svg' },
  { name: 'BYD', logo: null },
  { name: 'GWM', logo: null },
  { name: 'Caoa Chery', logo: null },
  { name: 'Alfa Romeo', logo: null },
  { name: 'Dodge', logo: null },
  // Chrysler: o logotipo (asas finas) fica ilegível no tamanho da grade
  { name: 'Chrysler', logo: null },
];

/** Grade de logotipos: todas as marcas que já têm SVG, na ordem acima. */
export const GRID_BRANDS = BRANDS.filter((b): b is Brand & { logo: string } => Boolean(b.logo));
/** Marcas ainda sem logotipo (listadas em docs/PENDENCIAS.md). */
export const BRANDS_WITHOUT_LOGO = BRANDS.filter((b) => !b.logo);
