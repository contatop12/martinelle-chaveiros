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

## Lighthouse — site publicado (https://martinelle-chaveiros.contato-097.workers.dev)

| Página | Performance | Acessibilidade | Boas práticas | SEO |
|---|---|---|---|---|
| Home — mobile | 97 | 100 | 100 | 100 |
| Home — desktop | 100 | 100 | 100 | 100 |

Home mobile: FCP 1,4 s · LCP 2,0 s · CLS 0 · TBT 20 ms. Suíte funcional executada também no site publicado: 47/47.

Medições locais anteriores (servidor sem HTTPS, com antivírus removendo a compressão): páginas de serviço 92–94 e política 98 no mobile, acessibilidade e SEO 100 em todas.

## Acessibilidade (WCAG 2.2 AA como referência)

- Contraste AA em todo texto (botão do WhatsApp usa texto escuro sobre o verde).
- Navegação por teclado, foco visível, link "Pular para o conteúdo".
- FAQ com `<details>` nativo; lightbox com `<dialog>`; menu mobile com `aria-expanded` e Esc.
- `prefers-reduced-motion`: animações, smooth scroll e autoplay do vídeo desligados.

## Segurança e privacidade

- Links externos com `rel="noopener"`; JSON-LD escapado; mensagem do formulário codificada com `encodeURIComponent`.
- Sem armazenamento de dados de formulário; Consent Mode v2 com padrão negado; mapa do Google só após clique.
- Cabeçalhos de segurança em `public/_headers` (Cloudflare Pages/Netlify).

---

# Atualização de 15/10/2026 — documento "Correções — Martinelli Chaves"

Testes com Chrome headless em 360×800, 375×812, 390×844, 430×932, 768×1024, paisagem 844×390 e desktop 1440×900.
Suítes: critérios do documento **80/80**, regressão **47/47**, menu/histórico/abas **16/16**, links internos **1.056 verificados, 0 quebrados**, `astro check` 0 erros.

| Critério de aceite | Status |
|---|---|
| Menu mobile com botão X funcional (canto superior direito, 48 px) | OK |
| Fechar o menu (X, toque fora, Esc, botão voltar do celular) e voltar à posição anterior | OK |
| Rolagem do fundo bloqueada e restaurada; foco devolvido; menu não fica preso ao girar a tela | OK |
| Horários do quiosque corretos (header, emergência, institucional, localização, rodapé, FAQ, Schema) | OK |
| Atendimento externo 24h claramente diferenciado do quiosque | OK |
| Importados: marcas premium verificadas e organizadas; texto "Selecionadas a partir de…" removido | OK (BMW, RAM, Jeep; demais pendentes de confirmação) |
| Avaliações do Google: seção, resumo e botão para o perfil | OK — cards aguardam avaliações reais (PENDENCIAS.md) |
| Foto e vídeo da Triumph integrados; filtro Motos com trabalhos reais | OK |
| Vídeo da Honda PCX | Pendente — arquivo não recebido |
| Galeria organizada (8 iniciais variados, vídeos no lightbox com controles) | OK |
| CTAs e páginas específicas funcionando | OK |
| Sem rolagem horizontal, sem erros de console, CTAs acima da dobra em todos os tamanhos | OK |
