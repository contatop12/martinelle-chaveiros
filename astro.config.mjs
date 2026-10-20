// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Domínio de produção. Usado em canonical, Open Graph, sitemap e dados estruturados.
const SITE_URL = process.env.PUBLIC_SITE_URL ?? 'https://martinellichaves.com.br';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  build: {
    format: 'directory',
    // CSS embutido no HTML: elimina requisições bloqueantes na primeira visita (visitante de anúncio)
    inlineStylesheets: 'always',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'monthly',
      // Data do build: o site é publicado (npm run deploy) quando o conteúdo muda
      lastmod: new Date(),
    }),
  ],
  image: {
    // Fotos reais: AVIF/WebP gerados no build a partir de src/assets/images
    responsiveStyles: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
