# Pendências — Martinelli Chaves

Informações que **não foram inventadas** e precisam de confirmação ou material do cliente.
Atualizado em 15/10/2026, após o documento "Correções — Martinelli Chaves".

## Antes de apontar o domínio oficial

| Item | Situação | Onde ajustar |
|---|---|---|
| Nota 5,0 e 114 avaliações no Google | Informado pelo cliente, exibido como dado estático datado ("outubro de 2026"). **Conferir no Perfil da Empresa.** | `src/data/reviews.ts` → `REVIEW_SUMMARY` |
| Cards de avaliações | **Integração oficial pronta** (Places API do Google, `src/lib/google-reviews.ts`): basta colocar `GOOGLE_PLACES_API_KEY` no `.env` e publicar (`npm run deploy`) — até 5 avaliações reais nota 5 aparecem com nome, link do autor e atribuição ao Google, e a nota/total passam a vir do Google. Alternativa sem chave: colar 3–6 avaliações reais (texto exato, autor, data) em `REVIEWS`. | `.env` ou `src/data/reviews.ts` |
| Link de avaliações | Usando o link enviado pelo cliente (`#lrd=0x94cf4d1b5045500b:0x45ff2e3644a586d5`). Validar que abre o perfil correto. | `LINKS.googleReviews` em `src/config/site.ts` |
| Perfil no Google Maps (`sameAs` do Schema) | Derivado do mesmo link (CID 5043800918293055189). Validar. | `LINKS.googleBusiness` |
| "Mais de 13 anos de experiência" | **Removido do site** até o proprietário confirmar. | `COMPANY.experience` |
| Razão social e CNPJ | Pendente. Um diretório público lista "MARTINELLI CHAVES LTDA — 49.117.987/0001-18"; não publicado sem confirmação. | `COMPANY.legal` |
| Nomes do proprietário e da esposa | Pendente (a foto recebida é de atendimento, sem nome confirmado). | `COMPANY.owners.names` |
| IDs do GTM, GA4 e Google Ads | Nenhum ID foi inventado. Ver `docs/MENSURACAO.md`. | `.env` |
| Política de Privacidade | Revisar com o cliente/assessoria e completar razão social e CNPJ. | `src/pages/politica-de-privacidade.astro` |

Confirmado e já aplicado: estacionamento gratuito no Sumerbol, horário do quiosque (seg a sex 10h–19h, sáb 10h–18h, domingos e feriados fechado) e atendimento externo emergencial 24h, todos os dias.

## Marcas

Confirmado em 16/10/2026: a Martinelli faz chaves para **todas as marcas**. A grade "Trabalhamos com Chaves de Todas as Marcas" (seção de importados) mostra 24 logotipos: premium na ordem do cliente (BMW, MINI, Mercedes-Benz, Porsche, Volvo, Audi, RAM, Jeep) e depois VW, Chevrolet, Fiat, Ford, Toyota, Honda, Hyundai, Nissan, Renault, Peugeot, Citroën, Mitsubishi, Kia, Suzuki, Subaru e Ferrari. Ao lado do título, o link "Não encontrou a sua? Consulte pelo WhatsApp".

Ainda **sem logotipo** (aparecem só no formulário de orçamento): Land Rover, Jaguar, Lexus, BYD, GWM, Caoa Chery, Alfa Romeo, Dodge e Chrysler (o logo da Chrysler, de asas finas, fica ilegível no tamanho da grade).

Para incluir: salvar o SVG oficial monocromático em `public/images/brands/<marca>.svg` e preencher `logo` em `src/data/brands.ts`. A grade usa 3, 4, 6 ou 8 colunas conforme a tela; manter o total em múltiplo de 24 (ou de 12) deixa todas as linhas completas.

A imagem de referência com os logotipos citada no documento de correções **não foi recebida**.

## Fotos e vídeos

- Recebido e publicado: vídeo da **confecção de chave da Honda PCX 2023** (45 s). Versão curta de 27 s, sem áudio, na seção de motos; versão completa com narração na galeria. O original de 40 MB foi otimizado para 3,1 MB e 5,1 MB.
- Triumph: o vídeo `17.11.20` segue na seção de motos e na galeria. A foto da Triumph foi retirada a pedido (era a mesma cena do vídeo). O vídeo `17.11.21` (outra tomada) não foi usado.
- Ainda sem material: foto do proprietário e da esposa (`team/`), Mercedes-Benz, Porsche e Audi (`luxury-cars/`), equipamentos de programação e bastidores do quiosque.

Como adicionar uma foto: colocar o arquivo na pasta de `src/assets/images/`, importar em `src/data/photos.ts` e incluir em `GALLERY` com legenda real e objetiva. Vídeos: `public/video/` + item com `video` em `GALLERY`.

## Serviços a validar

Eletrônica automotiva — publicados somente os confirmados (reparação de chaves e controles, sistemas de travamento, programação de controles). Aguardando: diagnóstico de imobilizador, reparação e programação de módulos, diagnóstico eletrônico, fechaduras elétricas, módulos de injeção e carroceria.

Também confirmar: programação de chaves de moto com chip, fechaduras eletrônicas residenciais e controles de portão (estão no briefing, não no site antigo).
