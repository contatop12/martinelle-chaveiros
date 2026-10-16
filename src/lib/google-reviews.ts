/**
 * Avaliações do Google pela Places API (New) — integração oficial, executada no build.
 *
 * Ativar: GOOGLE_PLACES_API_KEY no .env (chave do Google Cloud com a "Places API (New)" habilitada).
 * Opcional: GOOGLE_PLACE_ID (se ausente, o lugar é localizado pela busca "Martinelli Chaves" + endereço).
 *
 * Sem chave, ou se a API falhar, o site usa as avaliações cadastradas manualmente em src/data/reviews.ts
 * — o build nunca quebra por causa desta integração.
 * Exibição: texto original, nome do autor com link para o perfil e atribuição ao Google.
 * A API devolve no máximo 5 avaliações (as "mais relevantes" segundo o Google).
 */
import type { Review } from '@/data/reviews';

export interface GoogleReviewData {
  rating: number;
  count: number;
  mapsUri: string | null;
  reviews: Review[];
}

interface ApiReview {
  rating?: number;
  text?: { text?: string };
  originalText?: { text?: string };
  publishTime?: string;
  authorAttribution?: { displayName?: string; uri?: string; photoUri?: string };
}

const API = 'https://places.googleapis.com/v1';
const SEARCH = 'Martinelli Chaves, Av. Eng. Fábio Roberto Barnabé, 1260, Indaiatuba - SP';
let cache: Promise<GoogleReviewData | null> | null = null;

async function resolvePlaceId(key: string): Promise<string | null> {
  const fixed = import.meta.env.GOOGLE_PLACE_ID;
  if (fixed) return fixed;
  const res = await fetch(`${API}/places:searchText`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Goog-Api-Key': key, 'X-Goog-FieldMask': 'places.id,places.displayName' },
    body: JSON.stringify({ textQuery: SEARCH, languageCode: 'pt-BR' }),
  });
  if (!res.ok) throw new Error(`busca do lugar: HTTP ${res.status}`);
  const data = (await res.json()) as { places?: { id: string; displayName?: { text?: string } }[] };
  return data.places?.find((p) => /martinelli/i.test(p.displayName?.text ?? ''))?.id ?? null;
}

async function load(): Promise<GoogleReviewData | null> {
  const key = import.meta.env.GOOGLE_PLACES_API_KEY;
  if (!key) return null;
  try {
    const id = await resolvePlaceId(key);
    if (!id) {
      console.warn('[avaliações] lugar "Martinelli Chaves" não encontrado na Places API');
      return null;
    }
    const res = await fetch(`${API}/places/${id}?languageCode=pt-BR`, {
      headers: { 'X-Goog-Api-Key': key, 'X-Goog-FieldMask': 'rating,userRatingCount,reviews,googleMapsUri' },
    });
    if (!res.ok) throw new Error(`detalhes do lugar: HTTP ${res.status}`);
    const d = (await res.json()) as { rating?: number; userRatingCount?: number; googleMapsUri?: string; reviews?: ApiReview[] };

    const reviews: Review[] = (d.reviews ?? [])
      .map((r) => ({ r, text: (r.originalText?.text ?? r.text?.text ?? '').trim() }))
      // nota 5 e comentário com conteúdo (evita "Muito bom", "Recomendo")
      .filter(({ r, text }) => r.rating === 5 && text.length >= 40)
      .sort((a, b) => b.text.length - a.text.length)
      .slice(0, 6)
      .map(({ r, text }) => ({
        author: r.authorAttribution?.displayName ?? 'Cliente no Google',
        authorUri: r.authorAttribution?.uri,
        photoUri: r.authorAttribution?.photoUri,
        rating: 5 as const,
        text,
        date: r.publishTime ? new Date(r.publishTime).toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' }) : undefined,
      }));

    if (!d.rating || !d.userRatingCount) return null;
    console.info(`[avaliações] Google: nota ${d.rating}, ${d.userRatingCount} avaliações, ${reviews.length} exibidas`);
    return { rating: d.rating, count: d.userRatingCount, mapsUri: d.googleMapsUri ?? null, reviews };
  } catch (e) {
    console.warn('[avaliações] Places API indisponível, usando avaliações manuais:', (e as Error).message);
    return null;
  }
}

/** Uma única consulta por build, compartilhada entre os componentes. */
export function loadGoogleReviews(): Promise<GoogleReviewData | null> {
  return (cache ??= load());
}
