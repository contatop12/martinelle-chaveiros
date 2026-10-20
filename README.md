# Martinelli Chaves — Landing page

Landing page de conversão para a **Martinelli Chaves** (chaveiro automotivo, residencial e comercial em Indaiatuba/SP), feita para campanhas de Google Ads: o objetivo é levar o visitante ao WhatsApp ou à ligação.

- **Stack:** Astro 7 (site estático) + TypeScript + Tailwind CSS 4. JavaScript no cliente: ~4 KB gzip, sem frameworks.
- **Páginas:** home com 18 blocos + 6 páginas de serviço para Google Ads + política de privacidade + 404.

## Rodar localmente

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # gera dist/
npm run preview    # serve dist/
npm run check      # checagem de tipos
```

Requer Node 22+.

## Publicação

**Atual: Cloudflare Workers (assets estáticos)** — Worker `martinelle-chaveiros`, conta Contato P12.
URL provisória: https://martinelle-chaveiros.contato-097.workers.dev

```bash
npm run deploy     # astro build + wrangler deploy (config em wrangler.jsonc)
```

O Wrangler usa a variável de ambiente `CLOUDFLARE_API_TOKEN` (ou `npx wrangler login`). Rollback: `npx wrangler rollback`.
Para usar o domínio oficial: Workers & Pages → martinelle-chaveiros → Settings → Domains & Routes → adicionar `martinellichaves.com.br` (o DNS precisa estar na Cloudflare). Até lá, o canonical aponta para o domínio oficial, evitando conteúdo duplicado da URL provisória.

O build gera arquivos estáticos em `dist/` e também funciona em outras hospedagens com HTTPS:

- **Cloudflare Pages / Netlify:** comando `npm run build`, pasta `dist`. O arquivo `public/_headers` já define cache longo para `/_astro/*` e cabeçalhos de segurança.
- **Vercel:** framework "Astro", saída `dist`.
- **Hospedagem tradicional (cPanel/FTP):** enviar o conteúdo de `dist/`. Ativar HTTPS, compressão (gzip/brotli) e redirecionamento `http → https`.

Antes de publicar:

1. Conferir o domínio em `.env` (`PUBLIC_SITE_URL`) — usado em canonical, sitemap e dados estruturados.
2. Preencher os IDs de mensuração (`docs/MENSURACAO.md`).
3. Revisar `docs/PENDENCIAS.md`.
4. Após publicar: enviar `https://martinellichaves.com.br/sitemap-index.xml` no Google Search Console e testar a home no PageSpeed Insights.

## URLs

Home (âncoras navegáveis):
`/#chaveiro-automotivo`, `/#chaves-codificadas`, `/#carros-importados`, `/#chaveiro-motos`, `/#chaveiro-24-horas`, `/#outros-servicos` (`#eletronica-automotiva`, `#chaveiro-residencial`), `/#servicos-realizados`, `/#quem-somos`, `/#nossa-estrutura`, `/#perguntas-frequentes`, `/#orcamento`, `/#localizacao`.

Páginas finais para anúncios e sitelinks (cada uma com H1, title, description, canonical, CTA e FAQ próprios):

| URL | Mensagem de WhatsApp |
|---|---|
| `/chaveiro-automotivo-indaiatuba/` | automotivo |
| `/chaves-codificadas-indaiatuba/` | chave codificada |
| `/chaveiro-carros-importados/` | importados |
| `/chaveiro-motos-indaiatuba/` | motos |
| `/chaveiro-24-horas-indaiatuba/` | emergência |
| `/chaveiro-residencial-indaiatuba/` | residencial |

## Onde editar

| O quê | Arquivo |
|---|---|
| Telefone, WhatsApp, endereço, horários, links, CNPJ | `src/config/site.ts` |
| Mensagens pré-preenchidas do WhatsApp | `src/lib/contact.ts` |
| IDs de mensuração | `.env` (ver `.env.example`) e `src/config/tracking.ts` |
| Serviços, problemas, tipos de chave | `src/data/services.ts` |
| Marcas atendidas | `src/data/brands.ts` + `public/images/brands/` |
| Fotos e legendas da galeria | `src/data/photos.ts` + `src/assets/images/` |
| Perguntas frequentes | `src/data/faq.ts` |
| Avaliações do Google (reais) | `src/data/reviews.ts` |
| robots.txt (buscadores e robôs de IA liberados) | `src/pages/robots.txt.ts` |
| llms.txt (resumo para IA, gerado dos dados acima) | `src/pages/llms.txt.ts` |
| Dados estruturados (Locksmith, WebSite, Service, FAQ) | `src/lib/schema.ts` |
| Páginas de serviço | `src/data/pages.ts` |
| Cores, tipografia, botões, animações | `src/styles/global.css` |

Nenhum telefone ou link de WhatsApp é digitado nos componentes: tudo sai de `src/config/site.ts`.

## Estrutura

```
src/
  assets/images/      fotos reais (o Astro gera AVIF/WebP responsivos no build)
    brand/ store/ team/ automotive/ luxury-cars/ motorcycles/ services/
  assets/fonts/       Archivo e Manrope (subsets self-hosted)
  components/
    layout/           Header, Footer, WhatsAppButton, MobileContactBar, Analytics, ConsentBanner
    sections/         Hero, ServiceCards, AutomotiveSection, CodedKeysSection, ImportedSection,
                      MotorcycleSection, EmergencySection, ElectronicsSection, ResidentialSection,
                      PortfolioGallery, AboutSection, StoreSection, Testimonials, FAQ, QuoteForm,
                      LocationSection, FinalCta, PageHero, Steps, RelatedServices
    ui/               Icon (sprite), BrandGrid, ProofVideo, KeyTypeArt, BittingLine, CTAs
  config/             site.ts (empresa) e tracking.ts (mensuração)
  data/               serviços, marcas, fotos, FAQ, páginas, avaliações, menu
  lib/                links de contato, ícones, dados estruturados
  pages/              index, [slug] (páginas de serviço), política, 404, robots.txt, llms.txt
  scripts/            JS do cliente: menu, revelações, rastreamento, formulário, galeria, vídeo, mapa
public/
  images/brands/      logotipos SVG das marcas (scripts/generate-brand-logos.mjs)
  video/              vídeo real de teste de chave presencial BMW (carregado sob demanda)
docs/                 PENDENCIAS.md, MENSURACAO.md, CHECKLIST.md
```

As fotos ficam em `src/assets/images/` (e não em `public/images/`, como sugeria o briefing) porque só assim o Astro otimiza, redimensiona e gera AVIF/WebP com dimensões explícitas. As subpastas seguem a organização do briefing.

## Direção de arte

- **Conceito:** "Especialização automotiva, tecnologia e confiança." Grafite profundo com champagne usado com moderação; verde somente nos botões de WhatsApp (texto escuro sobre o verde, para contraste AA).
- **Tipografia:** Archivo em largura expandida nos títulos, lembrando os emblemas de modelo dos carros (P O L O, N I V U S); Manrope no texto.
- **Assinatura visual:** o perfil de corte de uma chave (o "segredo") desenhando-se sob os títulos.
- **Movimento:** um momento orquestrado no carregamento (moldura de "leitura" sobre a foto do hero), ilustrações dos tipos de chave que reagem ao toque (lâmina do canivete abre, chave presencial emite sinal), ignição que gira para ON na seção de motos, radar do 24h. Tudo desliga com `prefers-reduced-motion`.
