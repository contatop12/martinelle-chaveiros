/**
 * Marcas atendidas.
 * - premium: grade "Marcas Atendidas" da seção de importados, na ordem de preferência do cliente.
 * - verified: true SOMENTE com evidência (foto/vídeo de trabalho) ou confirmação do proprietário.
 *   A ordem/lista enviada pelo cliente é preferência de apresentação, não comprovação de atendimento.
 * Logotipos: public/images/brands/*.svg (vetores oficiais monocromáticos — scripts/generate-brand-logos.mjs).
 * Mercedes-Benz, Land Rover, Jaguar e Lexus não têm vetor no simple-icons: adicionar SVG oficial na pasta.
 */
export interface Brand {
  name: string;
  logo: string | null;
  verified: boolean;
  premium: boolean;
  evidence: string;
}

export const BRANDS: Brand[] = [
  // Grade premium — ordem de preferência do cliente
  { name: 'BMW', logo: '/images/brands/bmw.svg', verified: true, premium: true, evidence: '6 fotos + vídeo de chave presencial' },
  { name: 'MINI', logo: '/images/brands/mini.svg', verified: false, premium: true, evidence: '' },
  { name: 'Mercedes-Benz', logo: null, verified: false, premium: true, evidence: '' },
  { name: 'Land Rover', logo: null, verified: false, premium: true, evidence: '' },
  { name: 'Jaguar', logo: null, verified: false, premium: true, evidence: '' },
  { name: 'Porsche', logo: '/images/brands/porsche.svg', verified: false, premium: true, evidence: '' },
  { name: 'Volvo', logo: '/images/brands/volvo.svg', verified: false, premium: true, evidence: '' },
  { name: 'Audi', logo: '/images/brands/audi.svg', verified: false, premium: true, evidence: 'logo no site antigo, sem foto' },
  { name: 'Lexus', logo: null, verified: false, premium: true, evidence: '' },
  { name: 'RAM', logo: '/images/brands/ram.svg', verified: true, premium: true, evidence: 'foto de chaves presenciais' },
  { name: 'Jeep', logo: '/images/brands/jeep.svg', verified: true, premium: true, evidence: '2 fotos' },

  // Demais marcas — atendidas (fotos), mas fora da grade premium
  { name: 'Toyota', logo: '/images/brands/toyota.svg', verified: true, premium: false, evidence: 'Hilux SRX e Corolla' },
  { name: 'Volkswagen', logo: '/images/brands/volkswagen.svg', verified: true, premium: false, evidence: 'Jetta GLI, Polo, Nivus, Tera' },
  { name: 'Chevrolet', logo: '/images/brands/chevrolet.svg', verified: true, premium: false, evidence: 'Onix e outros' },
  { name: 'Nissan', logo: '/images/brands/nissan.svg', verified: true, premium: false, evidence: 'chaves presenciais' },
  { name: 'Hyundai', logo: '/images/brands/hyundai.svg', verified: true, premium: false, evidence: 'foto de chaves' },
  { name: 'Fiat', logo: '/images/brands/fiat.svg', verified: true, premium: false, evidence: '2 fotos' },
  { name: 'Triumph', logo: null, verified: true, premium: false, evidence: 'foto e vídeo de chave de moto' },
  { name: 'Honda', logo: '/images/brands/honda.svg', verified: false, premium: false, evidence: 'chave estilo Honda, sem logo visível' },
  { name: 'Ford', logo: '/images/brands/ford.svg', verified: false, premium: false, evidence: 'logo no site antigo, sem foto' },
  { name: 'Peugeot', logo: '/images/brands/peugeot.svg', verified: false, premium: false, evidence: 'logo no site antigo, sem foto' },
  { name: 'Citroën', logo: '/images/brands/citroen.svg', verified: false, premium: false, evidence: 'logo no site antigo, sem foto' },
  { name: 'Alfa Romeo', logo: null, verified: false, premium: false, evidence: 'logo no site antigo, sem foto' },
];

/** Grade "Marcas Atendidas": premium + verificada + com logotipo. */
export const PREMIUM_BRANDS = BRANDS.filter((b) => b.premium && b.verified && b.logo);
/** Marcas premium aguardando confirmação do proprietário (listadas em docs/PENDENCIAS.md). */
export const PENDING_PREMIUM_BRANDS = BRANDS.filter((b) => b.premium && !b.verified);
