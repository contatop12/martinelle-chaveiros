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
 * Resumo conferido no Perfil da Empresa no Google em 16/10/2026: nota 5,0 com 116 avaliações
 * (115 de 5 estrelas e 1 de 1 estrela). Exibido como informação estática, com data.
 * Não é usado em dados estruturados (o Google não aceita estrelas autodeclaradas em LocalBusiness).
 */
export const REVIEW_SUMMARY: { rating: number; count: number; asOf: string } | null = {
  rating: 5,
  count: 116,
  asOf: 'outubro de 2026',
};

/**
 * Clientes que avaliaram com 5 estrelas no Google (levantamento de 16/10/2026, na ordem do perfil).
 * Somente primeiro nome + inicial do sobrenome, por privacidade. Ficaram de fora 6 perfis que não são
 * nomes de pessoas (apelidos e empresas) e a avaliação de 1 estrela.
 */
export const FIVE_STAR_REVIEWERS: string[] = [
  'Fabrício D.', 'Cida L.', 'Eliton A.', 'Erick F.', 'Melissa M.', 'Luiz C.', 'Diogo R.', 'Tamires B.', 'Tiago C.',
  'Eduardo O.', 'Laerte L.', 'Homero B.', 'Priscila S.', 'Sandra T.', 'Ana F.', 'Rony A.', 'Leonardo L.',
  'Josiany M.', 'Nayara R.', 'Beatriz K.', 'Thomaz I.', 'Leila B.', 'Rogerio U.', 'Gabriela M.', 'Daniel D.',
  'Jessica M.', 'Audrey O.', 'Luciana B.', 'Thais H.', 'Sandra S.', 'Luiz M.', 'Danilo S.', 'Inaque D.', 'Aline C.',
  'Iago F.', 'Vinicius H.', 'Natália R.', 'Mayara R.', 'Daiane H.', 'Rodolfo G.', 'Lucas U.', 'Fabio S.', 'Almir Z.',
  'Helder L.', 'Catia L.', 'Leo G.', 'Natalia M.', 'Andre M.', 'Thiago N.', 'Bruno K.', 'Joao S.', 'Cesar V.',
  'Deise C.', 'Francisco L.', 'Regina V.', 'Zuleide A.', 'Carol P.', 'Luis C.', 'Carlos M.', 'Danilo B.',
  'Miriam U.', 'Vinícius R.', 'Anthony J.', 'Daiana M.', 'Monique G.', 'Erica A.', 'Jovino N.', 'Gui M.',
  'Cristiane F.', 'Pedro R.', 'Adriano B.', 'Suzana W.', 'Danilo P.', 'Mariana F.', 'Marcos V.', 'Fabio L.',
  'Marcelo M.', 'Alexsandra G.', 'Melina P.', 'Marcelo S.', 'Bruh M.', 'Fernanda P.', 'Eliane C.', 'Charles C.',
  'Gabriela B.', 'Lucimara A.', 'Juliana C.', 'Renata C.', 'Daniel A.', 'Dito P.', 'Celso V.', 'Mauricio P.',
  'Fabiana G.', 'Marta F.', 'Wagner T.', 'Claudinei D.', 'Sandra P.', 'Ronaldo M.', 'Antoniel S.', 'Fabio P.',
  'Thiago C.', 'Juan P.', 'Elaine L.', 'Gabriel P.', 'Gustavo B.', 'Eduarda A.', 'Cristhian S.', 'Alexandre R.',
  'Márcia D.',
];
