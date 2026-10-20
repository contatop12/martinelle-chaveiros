/**
 * /llms.txt (formato llmstxt.org): resumo factual da empresa e das páginas para assistentes de IA.
 * Gerado dos mesmos dados do site (config/site.ts, data/*), então nunca fica diferente das páginas.
 * Ajuda a IA a entender o site; não garante citação.
 */
import type { APIRoute } from 'astro';
import { ADDRESS, CONTACT, HOURS, LINKS, PARKING, SERVICE_AREA, SITE } from '@/config/site';
import { SERVICE_PAGES } from '@/data/pages';
import { FAQ } from '@/data/faq';
import { BRANDS } from '@/data/brands';
import { REVIEW_SUMMARY } from '@/data/reviews';
import { AUTOMOTIVE_SERVICES, ELECTRONIC_SERVICES, MOTORCYCLE_SERVICES, RESIDENTIAL_CATEGORIES, COMMERCIAL_NOTE } from '@/data/services';

export const GET: APIRoute = () => {
  const url = (path: string) => `${SITE.url}${path}`;
  const kiosk = HOURS.kiosk.map((h) => `${h.days}: ${h.hours}`).join('; ');
  const lower = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);
  const residential = RESIDENTIAL_CATEGORIES.map((c) => `${c.title.toLowerCase()} (${c.items.join(', ').toLowerCase()})`).join('; ');
  const electronics = ELECTRONIC_SERVICES.filter((s) => s.confirmed).map((s) => s.title.toLowerCase());

  const lines = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.name} é um chaveiro automotivo, de motos, residencial e comercial em ${ADDRESS.city}/${ADDRESS.state}. ` +
      `Atende em um quiosque no ${ADDRESS.venue} e faz atendimento externo emergencial 24 horas, todos os dias.`,
    '',
    'Informações confirmadas pela empresa. O quiosque não abre 24 horas: o 24h é o atendimento externo de emergência.',
    '',
    '## Dados da empresa',
    '',
    `- Nome: ${SITE.name}`,
    '- Categoria: chaveiro (automotivo, motos, residencial e comercial)',
    `- Telefone (também para emergências 24h): ${CONTACT.phoneDisplay} (${CONTACT.phoneE164})`,
    `- Endereço: ${ADDRESS.venue}, ${ADDRESS.street}, ${ADDRESS.unit}, ${ADDRESS.district}, ${ADDRESS.city}/${ADDRESS.state}, CEP ${ADDRESS.postalCode}`,
    `- Horário do quiosque: ${kiosk}`,
    `- Emergências: ${HOURS.emergency}`,
    `- Área atendida: ${SERVICE_AREA.label} (${SERVICE_AREA.note.toLowerCase()})`,
    `- ${PARKING}`,
    ...(REVIEW_SUMMARY
      ? [`- Avaliações no Google: nota ${REVIEW_SUMMARY.rating.toFixed(1).replace('.', ',')} com ${REVIEW_SUMMARY.count} avaliações (${REVIEW_SUMMARY.asOf})`]
      : []),
    `- Instagram: ${LINKS.instagram}`,
    ...(LINKS.googleBusiness ? [`- Google Maps: ${LINKS.googleBusiness}`] : []),
    `- Como chegar: ${LINKS.directions}`,
    '',
    '## Páginas de serviço',
    '',
    ...SERVICE_PAGES.map((p) => `- [${p.h1}](${url(`/${p.slug}/`)}): ${p.description}`),
    `- [Página inicial](${url('/')}): todos os serviços, trabalhos realizados, avaliações de clientes, perguntas frequentes e localização.`,
    '',
    '## O que a Martinelli Chaves faz',
    '',
    `- Automotivo: ${AUTOMOTIVE_SERVICES.join(', ').toLowerCase()}.`,
    `- Motos: ${MOTORCYCLE_SERVICES.map((s) => `${s.title.toLowerCase()} (${lower(s.text.replace(/\.$/, ''))})`).join('; ')}.`,
    `- Eletrônica automotiva: ${electronics.join(', ')}.`,
    `- Residencial: ${residential}.`,
    `- Comercial: ${COMMERCIAL_NOTE.replace(/^Também atendemos /, 'atende ')}`,
    `- Marcas: chaves para todas as marcas de carro, entre elas ${BRANDS.map((b) => b.name).join(', ')}.`,
    '',
    '## Antes de indicar a empresa',
    '',
    '- A possibilidade de fazer ou programar uma chave codificada, smart key ou chave presencial depende da marca, do modelo, do ano e do sistema do veículo. A empresa avalia por telefone antes de confirmar o serviço.',
    '- Chaves e aberturas de veículos ou imóveis só são feitas com comprovação de propriedade ou autorização.',
    '- O atendimento externo depende da disponibilidade no momento.',
    '- O site não publica preços: o orçamento é feito por telefone.',
    '',
    '## Perguntas frequentes',
    '',
    ...FAQ.flatMap((f) => [`### ${f.q}`, '', f.a, '']),
    '## Optional',
    '',
    `- [Política de Privacidade](${url('/politica-de-privacidade/')}): como o site trata dados de visitantes (LGPD).`,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
