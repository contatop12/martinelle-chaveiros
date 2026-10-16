/**
 * Avaliações de clientes — SOMENTE avaliações públicas reais do Google, com autorização.
 * Não inventar nomes, notas, textos ou quantidade de avaliações.
 *
 * Seleção sugerida: 4 a 6 avaliações nota 5, com comentários detalhados e variados (automotivo, importados,
 * emergência, residencial). Copiar o texto exatamente como publicado — não editar palavras do cliente.
 */
export interface Review {
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  /** Data da avaliação no Google, ex.: 'agosto de 2026' */
  date?: string;
  /** Link para o perfil do autor no Google (preenchido pela Places API) */
  authorUri?: string;
  photoUri?: string;
}

/*
 * Fonte das avaliações, em ordem de prioridade:
 * 1. Places API (oficial) — automática no build quando GOOGLE_PLACES_API_KEY está no .env (src/lib/google-reviews.ts).
 * 2. Lista manual abaixo — avaliações reais copiadas do perfil, exatamente como publicadas.
 *    Exemplo: { author: 'Nome do cliente', rating: 5, text: 'Texto da avaliação…', date: 'setembro de 2026' }
 */

export const REVIEWS: Review[] = [];

/**
 * Resumo informado pelo cliente em 15/10/2026 (5 estrelas, 114 avaliações).
 * Exibido como informação estática, com data — não é recuperado automaticamente do Google.
 * PENDENTE: conferir no Perfil da Empresa antes de apontar o domínio oficial (docs/PENDENCIAS.md).
 * Não é usado em dados estruturados (o Google não aceita estrelas autodeclaradas em LocalBusiness).
 */
export const REVIEW_SUMMARY: { rating: number; count: number; asOf: string } | null = {
  rating: 5,
  count: 114,
  asOf: 'outubro de 2026',
};
