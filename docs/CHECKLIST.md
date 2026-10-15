# Checklist de entrega — critérios de aceite do briefing

Testes automatizados com Chrome headless (puppeteer) e Lighthouse 12, em 15/10/2026, sobre o build de produção.

| # | Critério | Status | Evidência |
|---|---|---|---|
| 1 | Landing page totalmente responsiva | OK | Revisada em 390 px e 1440 px; sem rolagem horizontal; alvos de toque ≥ 44 px |
| 2 | Visual premium, profissional e consistente | OK | Sistema único de tokens (`global.css`), fotos reais, tipografia Archivo/Manrope |
| 3 | Todos os botões de WhatsApp funcionam | OK | 24 links na home, todos `wa.me/5519999182277` com 15 mensagens contextuais |
| 4 | Todos os botões de ligação funcionam | OK | 11 links `tel:+5519999182277` |
| 5 | Menu navega pelas seções | OK | Teste: clique leva à seção, abaixo do menu fixo (offset 60 px); scroll-spy ativo |
| 6 | URLs das âncoras atualizadas | OK | Links HTML reais (`#chaveiro-24-horas` etc.); smooth scroll só sem movimento reduzido |
| 7 | Arquitetura com páginas específicas para Google Ads | OK | 6 páginas reais com H1, title, description, canonical, FAQ e CTA próprios |
| 8 | Imagens reais do quiosque e do supermercado integradas | OK | Seções "Nossa Estrutura", "Quem somos" e "Localização" |
| 9 | Galeria preparada para fotos reais | OK | 33 fotos reais (todo o material recebido), filtros, "mostrar mais", lightbox acessível (`<dialog>`, teclado, gesto) |
| 10 | Otimizado para carregamento rápido | OK* | JS ~4 KB gzip; CSS embutido; fontes subset (Archivo 34 KB); AVIF/WebP responsivos; vídeo e mapa sob demanda; CLS 0; TBT 0 ms |
| 11 | Eventos de conversão preparados e testados | OK | `whatsapp_click`, `phone_click`, `quote_form_submit`, `service_select`, `directions_click`, `instagram_click` com dedupe, UTM e GCLID |
| 12 | Metadados de SEO | OK | Title/description únicos, canonical, Open Graph, sitemap, robots, JSON-LD `Locksmith`, `Service`, `FAQPage`, `BreadcrumbList` |
| 13 | Formulário de orçamento funciona | OK | Monta mensagem organizada e abre o WhatsApp; campos de veículo só quando fazem sentido; ano validado |
| 14 | Nenhum conteúdo fictício como verdadeiro | OK | Sem avaliações, horários, CNPJ, nomes ou marcas sem evidência (ver PENDENCIAS.md) |
| 15 | Projeto compila sem erros | OK | `astro build` e `astro check`: 0 erros, 0 avisos |
| 16 | Sem links quebrados nem erros de console | OK | 982 links internos verificados em 9 páginas: 0 quebrados; 0 erros de JavaScript |
| 17 | Experiência mobile validada | OK | CTA do WhatsApp acima da dobra; barra inferior fixa sem cobrir conteúdo; some ao digitar |
| 18 | Informações pendentes documentadas | OK | `docs/PENDENCIAS.md` |

Suíte funcional: **47/47 testes aprovados.**

## Lighthouse (servidor local com brotli)

| Página | Performance | Acessibilidade | Boas práticas | SEO |
|---|---|---|---|---|
| Home — desktop | 100 | 100 | 81† | 100 |
| Home — mobile | 86* | 100 | 82† | 100 |
| Páginas de serviço — mobile | 92 a 94 | 100 | 82† | 100 |
| Política de privacidade — mobile | 98 | 100 | 82† | 100 |

\* O antivírus Kaspersky da máquina de testes intercepta o tráfego HTTP do Chrome e remove a compressão: o Lighthouse recebeu a home com 297 KB em vez de 36 KB (brotli). Em produção esse efeito não existe. **Confirmar no PageSpeed Insights após publicar.**

† O único item reprovado em Boas Práticas é "não usa HTTPS" (servidor local). Em produção com HTTPS, o item passa.

## Acessibilidade (WCAG 2.2 AA como referência)

- Contraste AA em todo texto (botão do WhatsApp usa texto escuro sobre o verde).
- Navegação por teclado, foco visível, link "Pular para o conteúdo".
- FAQ com `<details>` nativo; lightbox com `<dialog>`; menu mobile com `aria-expanded` e Esc.
- `prefers-reduced-motion`: animações, smooth scroll e autoplay do vídeo desligados.

## Segurança e privacidade

- Links externos com `rel="noopener"`; JSON-LD escapado; mensagem do formulário codificada com `encodeURIComponent`.
- Sem armazenamento de dados de formulário; Consent Mode v2 com padrão negado; mapa do Google só após clique.
- Cabeçalhos de segurança em `public/_headers` (Cloudflare Pages/Netlify).
