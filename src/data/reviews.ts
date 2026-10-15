/**
 * Avaliações de clientes — SOMENTE avaliações públicas reais do Google, com autorização.
 * Não inventar nomes, notas, textos ou quantidade de avaliações.
 *
 * Enquanto a lista estiver vazia, a seção "O Que Nossos Clientes Dizem" não é exibida.
 * Para ativar: preencha os itens abaixo e LINKS.googleBusiness em src/config/site.ts.
 */
export interface Review {
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  /** Data da avaliação no Google, ex.: '2026-08' */
  date?: string;
}

export const REVIEWS: Review[] = [];

/** Nota média e total exibidos SOMENTE se copiados do perfil oficial no Google. */
export const REVIEW_SUMMARY: { rating: number; count: number } | null = null;
