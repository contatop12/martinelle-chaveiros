/**
 * Marcas atendidas.
 * `verified: true` somente com evidência (foto de trabalho realizado) ou confirmação do proprietário.
 * Logotipos: public/images/brands/*.svg (vetores oficiais monocromáticos do simple-icons — ver scripts/generate-brand-logos.mjs),
 * exibidos sem sugerir parceria ou credenciamento.
 */

export interface Brand {
  name: string;
  /** Arquivo em public/images/brands/ (null = sem vetor disponível ainda) */
  logo: string | null;
  verified: boolean;
  premium?: boolean;
  evidence: string;
}

export const BRANDS: Brand[] = [
  { name: 'BMW', logo: '/images/brands/bmw.svg', verified: true, premium: true, evidence: '6 fotos + vídeo de chave presencial' },
  { name: 'RAM', logo: '/images/brands/ram.svg', verified: true, premium: true, evidence: 'foto de chaves presenciais' },
  { name: 'Toyota', logo: '/images/brands/toyota.svg', verified: true, evidence: 'Hilux SRX e Corolla' },
  { name: 'Jeep', logo: '/images/brands/jeep.svg', verified: true, evidence: '2 fotos' },
  { name: 'Volkswagen', logo: '/images/brands/volkswagen.svg', verified: true, evidence: 'Jetta GLI, Polo, Nivus, Tera e outros' },
  { name: 'Chevrolet', logo: '/images/brands/chevrolet.svg', verified: true, evidence: 'Onix e outros' },
  { name: 'Nissan', logo: '/images/brands/nissan.svg', verified: true, evidence: 'chaves presenciais' },
  { name: 'Hyundai', logo: '/images/brands/hyundai.svg', verified: true, evidence: 'foto de chaves' },
  { name: 'Fiat', logo: '/images/brands/fiat.svg', verified: true, evidence: '2 fotos' },

  // Candidatas sem evidência — aguardam foto ou confirmação do proprietário (docs/PENDENCIAS.md)
  { name: 'Mercedes-Benz', logo: null, verified: false, premium: true, evidence: '' },
  { name: 'Audi', logo: '/images/brands/audi.svg', verified: false, premium: true, evidence: 'logo no site atual, sem foto' },
  { name: 'Porsche', logo: '/images/brands/porsche.svg', verified: false, premium: true, evidence: '' },
  { name: 'Land Rover', logo: null, verified: false, premium: true, evidence: '' },
  { name: 'Jaguar', logo: null, verified: false, premium: true, evidence: '' },
  { name: 'Volvo', logo: '/images/brands/volvo.svg', verified: false, premium: true, evidence: '' },
  { name: 'MINI', logo: '/images/brands/mini.svg', verified: false, premium: true, evidence: '' },
  { name: 'Lexus', logo: null, verified: false, premium: true, evidence: '' },
  { name: 'Honda', logo: '/images/brands/honda.svg', verified: false, evidence: 'foto com chave no estilo Honda, sem logo visível' },
  { name: 'Ford', logo: '/images/brands/ford.svg', verified: false, evidence: 'logo no site atual, sem foto' },
  { name: 'Peugeot', logo: '/images/brands/peugeot.svg', verified: false, evidence: 'logo no site atual, sem foto' },
  { name: 'Citroën', logo: '/images/brands/citroen.svg', verified: false, evidence: 'logo no site atual, sem foto' },
  { name: 'Alfa Romeo', logo: null, verified: false, evidence: 'logo no site atual, sem foto' },
];

export const VERIFIED_BRANDS = BRANDS.filter((b) => b.verified && b.logo);
