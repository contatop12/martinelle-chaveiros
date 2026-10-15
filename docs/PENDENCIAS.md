# Pendências — Martinelli Chaves

Informações que **não foram inventadas** e precisam de confirmação do cliente. Enquanto estiverem pendentes, ficam ocultas no site (ou aparecem de forma neutra).

## Dados da empresa (`src/config/site.ts`)

| Item | Situação | Onde preencher |
|---|---|---|
| Horário presencial do quiosque | **Pendente.** O site diz "Horário próprio de funcionamento. Confirme pelo WhatsApp antes de vir." | `HOURS.kiosk` |
| Nomes do proprietário e da esposa | **Pendente.** O nome do arquivo da foto recebida sugere "Felipe Martinelli", mas não foi usado sem confirmação. | `COMPANY.owners.names` |
| História da empresa | Pendente (opcional) | `COMPANY.owners.story` |
| "Mais de 13 anos de experiência" | Retirado do site atual. **Reconfirmar** se continua correto. | `COMPANY.experience` |
| Razão social e CNPJ | **Pendente.** Um diretório público lista "MARTINELLI CHAVES LTDA — 49.117.987/0001-18"; não foi publicado sem confirmação. | `COMPANY.legal` |
| E-mail oficial | Pendente. Diretório público indica martinellichaves@outlook.com — confirmar antes de usar. | `CONTACT.email` |
| Coordenadas (latitude/longitude) | Pendente — copiar do perfil oficial no Google | `ADDRESS.geo` |
| Cidades atendidas além de Indaiatuba | Pendente (hoje: "Indaiatuba e região") | `SERVICE_AREA.cities` |
| Link do Perfil da Empresa no Google | **Pendente.** Não foi identificado com segurança na pesquisa. | `LINKS.googleBusiness` |

## Avaliações (`src/data/reviews.ts`)

- Nenhuma avaliação real do Google foi localizada com segurança. A seção **"O Que Nossos Clientes Dizem" não aparece** enquanto a lista estiver vazia.
- Para ativar: copiar avaliações públicas reais (autor, nota, texto, data) com autorização, e a nota média/total do perfil oficial. O schema `AggregateRating` só é gerado com esses dados.
- O depoimento "Renata Almeida" do site atual **não foi reutilizado** (não é avaliação verificável do Google).

## Fotografias (`src/assets/images/`)

**Material recebido do cliente (completo, confirmado em 15/10/2026):** 34 imagens de WhatsApp (32 trabalhos, quiosque e mais uma do BMW), fachada do Sumerbol, foto de atendimento (Felipe), vídeo de teste de chave presencial BMW e logotipo transparente. **Todas estão em uso** (33 na galeria; uma captura de Reels foi recortada para remover a interface do Instagram).

Não recebidas — solicitar ao cliente ou agendar uma sessão de fotos (o Instagram não foi acessado, pois exige login):

- [ ] **Motos atendidas** (`motorcycles/`) — a seção de motos usa uma ilustração; o filtro "Motos" da galeria mostra mensagem honesta de "fotos em organização".
- [ ] **Proprietário e esposa** (`team/`) — hoje há apenas a foto de atendimento recebida (335×597 px, baixa resolução; ideal ≥ 1000 px).
- [ ] Mercedes-Benz, Porsche, Audi e outros premium (`luxury-cars/`).
- [ ] Equipamentos de programação (`services/`).
- [ ] Bastidores / estrutura interna do quiosque (`store/`).
- [ ] Reparação eletrônica (`services/`).

Como adicionar: colocar o arquivo na pasta, importar em `src/data/photos.ts` e incluir em `GALLERY` com legenda **objetiva e real** (marca/modelo visível e tipo de chave).

**Legendas atuais:** descrevem só o que a foto mostra. Apenas "Chevrolet Onix — confecção e programação de chave" usa a legenda escrita pela própria Martinelli na imagem. Revisar com o cliente se deseja detalhar o serviço de cada foto.

## Marcas (`src/data/brands.ts`)

Exibidas (evidência em foto): BMW, RAM, Toyota, Jeep, Volkswagen, Chevrolet, Nissan, Hyundai, Fiat.

Aguardando foto ou confirmação do proprietário: Mercedes-Benz, Audi, Porsche, Land Rover, Jaguar, Volvo, MINI, Lexus, Honda (foto com chave em estilo Honda, sem logo visível), Ford, Peugeot, Citroën, Alfa Romeo. Para exibir, mudar `verified` para `true`. Mercedes-Benz, Land Rover, Jaguar, Lexus e Alfa Romeo precisam de um SVG em `public/images/brands/`.

## Serviços a validar (`src/data/services.ts`)

Eletrônica automotiva — exibidos apenas os confirmados:

- Confirmados: reparação de chaves e controles, sistemas de travamento (site atual: "Reparo de centrais"), programação de controles.
- **Aguardando confirmação** (ocultos): diagnóstico de imobilizador, reparação de módulos, programação de módulos, diagnóstico eletrônico, reparação de fechaduras elétricas, módulos de injeção e carroceria.

Também confirmar: controles de portão, chaves comerciais, chaves tetra e programação de chaves de moto (listados no briefing; não aparecem no site atual).

## Mensuração (`.env`)

- [ ] IDs reais do Google Tag Manager, GA4 e Google Ads (nenhum ID foi inventado). Ver `docs/MENSURACAO.md`.

## Jurídico

- [ ] Revisar a Política de Privacidade (`src/pages/politica-de-privacidade.astro`) com o cliente/assessoria e completar razão social e CNPJ.
