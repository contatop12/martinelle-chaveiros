# Pendências — Martinelli Chaves

Informações que **não foram inventadas** e precisam de confirmação ou material do cliente.
Atualizado em 15/10/2026, após o documento "Correções — Martinelli Chaves".

## Antes de apontar o domínio oficial

| Item | Situação | Onde ajustar |
|---|---|---|
| Nota 5,0 e 114 avaliações no Google | Informado pelo cliente, exibido como dado estático datado ("outubro de 2026"). **Conferir no Perfil da Empresa.** | `src/data/reviews.ts` → `REVIEW_SUMMARY` |
| Cards de avaliações | **Pendente.** Não há API autorizada configurada e não fazemos scraping. Copiar 4–6 avaliações reais nota 5, com texto detalhado, exatamente como publicadas (autor, texto, data). | `src/data/reviews.ts` → `REVIEWS` |
| Link de avaliações | Usando o link enviado pelo cliente (`#lrd=0x94cf4d1b5045500b:0x45ff2e3644a586d5`). Validar que abre o perfil correto. | `LINKS.googleReviews` em `src/config/site.ts` |
| Perfil no Google Maps (`sameAs` do Schema) | Derivado do mesmo link (CID 5043800918293055189). Validar. | `LINKS.googleBusiness` |
| "Mais de 13 anos de experiência" | **Removido do site** até o proprietário confirmar. | `COMPANY.experience` |
| Razão social e CNPJ | Pendente. Um diretório público lista "MARTINELLI CHAVES LTDA — 49.117.987/0001-18"; não publicado sem confirmação. | `COMPANY.legal` |
| Nomes do proprietário e da esposa | Pendente (a foto recebida é de atendimento, sem nome confirmado). | `COMPANY.owners.names` |
| IDs do GTM, GA4 e Google Ads | Nenhum ID foi inventado. Ver `docs/MENSURACAO.md`. | `.env` |
| Política de Privacidade | Revisar com o cliente/assessoria e completar razão social e CNPJ. | `src/pages/politica-de-privacidade.astro` |

Confirmado e já aplicado: horário do quiosque (seg a sex 10h–19h, sáb 10h–18h, domingos e feriados fechado) e atendimento externo emergencial 24h, todos os dias.

## Marcas premium aguardando confirmação

A grade "Marcas Atendidas" mostra apenas marcas com trabalho comprovado em foto/vídeo: **BMW, RAM e Jeep** (na ordem de preferência do cliente).

Aguardando confirmação do proprietário (a lista enviada é preferência de apresentação, não comprovação):

| Marca | Logotipo |
|---|---|
| MINI | pronto (`public/images/brands/mini.svg`) |
| Mercedes-Benz | **falta SVG oficial** |
| Land Rover | **falta SVG oficial** |
| Jaguar | **falta SVG oficial** |
| Porsche | pronto |
| Volvo | pronto |
| Audi | pronto |
| Lexus | **falta SVG oficial** |

Para exibir: em `src/data/brands.ts`, mudar `verified` para `true` (e preencher `logo` quando faltar o SVG). A grade se ajusta sozinha a 3 ou 4 colunas.

A imagem de referência com os logotipos citada no documento de correções **não foi recebida**.

## Fotos e vídeos

- [ ] **Vídeo da Honda PCX 2023 (~45 s)** citado no documento de correções **não foi recebido**. A seção de motos e a galeria estão prontas para ele: basta enviar o arquivo.
- Triumph: foto e o vídeo `17.11.20` (melhor qualidade) estão em uso. O vídeo `17.11.21` é **outra tomada** (close da chave com foco variando), não uma cópia; ficou de fora para não repetir conteúdo e pode ser incluído se desejarem.
- Ainda sem material: foto do proprietário e da esposa (`team/`), Mercedes-Benz, Porsche e Audi (`luxury-cars/`), equipamentos de programação e bastidores do quiosque.

Como adicionar uma foto: colocar o arquivo na pasta de `src/assets/images/`, importar em `src/data/photos.ts` e incluir em `GALLERY` com legenda real e objetiva. Vídeos: `public/video/` + item com `video` em `GALLERY`.

## Serviços a validar

Eletrônica automotiva — publicados somente os confirmados (reparação de chaves e controles, sistemas de travamento, programação de controles). Aguardando: diagnóstico de imobilizador, reparação e programação de módulos, diagnóstico eletrônico, fechaduras elétricas, módulos de injeção e carroceria.

Também confirmar: programação de chaves de moto com chip, fechaduras eletrônicas residenciais e controles de portão (estão no briefing, não no site antigo).
