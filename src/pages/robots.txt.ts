import type { APIRoute } from 'astro';

/**
 * robots.txt: buscadores e assistentes de IA podem ler todo o site (decisão: visibilidade máxima em busca e IA).
 * Os robôs de IA são listados nominalmente para deixar a permissão explícita.
 * Content-Signal (contentsignals.org) declara o mesmo: busca, uso em respostas de IA e treino liberados.
 */
const AI_BOTS = [
  // OpenAI
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  // Anthropic
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  // Perplexity
  'PerplexityBot',
  'Perplexity-User',
  // Google (Gemini) e Apple (Apple Intelligence)
  'Google-Extended',
  'Applebot-Extended',
  // Outros assistentes
  'meta-externalagent',
  'Amazonbot',
  'DuckAssistBot',
  'MistralAI-User',
  'CCBot',
];

export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL('sitemap-index.xml', site).toString();
  const body = [
    '# Martinelli Chaves — chaveiro em Indaiatuba/SP',
    `# Resumo para assistentes de IA: ${new URL('llms.txt', site).toString()}`,
    '',
    'User-agent: *',
    'Content-Signal: search=yes, ai-input=yes, ai-train=yes',
    'Allow: /',
    '',
    '# Assistentes e buscadores de IA',
    ...AI_BOTS.map((bot) => `User-agent: ${bot}`),
    'Allow: /',
    '',
    `Sitemap: ${sitemap}`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
