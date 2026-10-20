# Mensuração — Google Ads, GA4 e GTM

## Como ativar

**GTM ativo:** contêiner `GTM-T43MD2XP`, definido como padrão em `src/config/tracking.ts`. O script fica no topo do `<head>` (logo após o Consent Mode) e o `<noscript>` logo após a abertura do `<body>`, em todas as páginas (`src/layouts/BaseLayout.astro`). Configure GA4 e Google Ads dentro do GTM.

- Trocar o contêiner: `PUBLIC_GTM_ID=GTM-XXXXXXX` no `.env`. Desativar: `PUBLIC_GTM_ID=` (vazio).
- Sem GTM: `PUBLIC_GA4_ID`, `PUBLIC_GOOGLE_ADS_ID` e os rótulos `PUBLIC_ADS_LABEL_*` (gtag.js direto).
- Depois de alterar: `npm run build` e publique.

Sem nenhum ID, nenhuma tag externa é carregada — os eventos continuam indo para `window.dataLayer` (útil para testar).

## Consentimento (LGPD)

- **Desde 20/10/2026: tags ativas desde a entrada.** Decisão da agência para esta landing page temporária: Consent Mode v2 com tudo `granted` por padrão, sem esperar o aviso. O aviso de cookies é só informativo ("Ao continuar navegando, você concorda…" + botão "Entendi", guardado em `localStorage` como `mc_consent`) e não bloqueia nada. A Política de Privacidade usa legítimo interesse (art. 7º, IX) como base legal dos cookies de medição.
- **No site institucional, seguir a regra à risca:** `denied` por padrão, aviso com "Aceitar"/"Recusar" e `gtag('consent','update')` só após o aceite (como estava no commit `0c66186`).
- O aviso de cookies só aparece quando há alguma tag configurada.
- **Enhanced Conversions: NÃO ativado.** O site não coleta e-mail/telefone (o contato acontece no WhatsApp), então não há dado de primeira parte para enviar. Reavaliar apenas com dados e consentimento adequados.

## Eventos enviados ao dataLayer

| Evento | Quando | Parâmetros |
|---|---|---|
| `whatsapp_click` | Qualquer botão/link de WhatsApp | `service_name`, `button_location`, `page_path`, `campaign_source`* |
| `phone_click` | Qualquer link `tel:` | idem |
| `quote_form_submit` | Envio do formulário de orçamento (abre o WhatsApp) | `service_name`, `button_location`, `page_path` |
| `service_select` | Escolha do serviço no formulário | `service_name`, `button_location` |
| `directions_click` | Botões "Como Chegar"/"Rotas" | `button_location`, `page_path` |
| `instagram_click` | Links do Instagram | `button_location`, `page_path` |

\* Também `campaign_medium` e `campaign_name` quando há UTMs. `campaign_source` vale `google_ads` quando só existe GCLID/GBRAID/WBRAID.

- UTMs e GCLID/GBRAID/WBRAID da URL de entrada ficam em `sessionStorage` (`mc_attribution`) durante a visita.
- Cliques repetidos no mesmo botão em menos de 1 s não geram evento duplicado.
- Os eventos são registrados **sem atrasar** a abertura do WhatsApp ou da ligação (nenhum `preventDefault`).
- Nenhum dado pessoal (nome, telefone, texto da mensagem, marca/modelo) é enviado nos eventos.

### `button_location` usados

`header`, `hero`, `menu_mobile`, `barra_mobile`, `botao_flutuante`, `cards_problemas`, `secao_automotivo`, `secao_codificadas`, `secao_importados`, `secao_motos`, `secao_24h`, `secao_eletronica`, `secao_residencial`, `faq`, `formulario_orcamento`, `localizacao`, `localizacao_numero`, `secao_estrutura`, `galeria`, `cta_final`, `footer`, `hero_pagina`, `pagina_404`.

## Configuração sugerida no GTM

1. **Variáveis da camada de dados:** `service_name`, `button_location`, `page_path`, `campaign_source`.
2. **Acionadores** do tipo "Evento personalizado": `whatsapp_click`, `phone_click`, `quote_form_submit`, `directions_click`, `instagram_click`, `service_select`.
3. **Tags GA4 (Evento):** uma por acionador, repassando os parâmetros.
4. **Tags de conversão do Google Ads:** `whatsapp_click`, `phone_click` e `quote_form_submit`.
5. Tag de **Vinculador de conversões** em todas as páginas.

## Atenção na leitura dos dados

**Clique no WhatsApp ≠ conversa iniciada ≠ lead qualificado.** Trate `whatsapp_click` como micro-conversão (sinal de intenção) e, se possível, otimize as campanhas por conversões offline.

## Preparado para CRM

- `TRACKING.appendLeadRef` (em `src/config/tracking.ts`), quando `true`, anexa um código curto ("Ref. MC-7K2Q") à mensagem do WhatsApp e envia o mesmo `lead_ref` no evento. Isso permite cruzar a conversa com a origem da campanha (GCLID guardado na sessão) e importar conversões offline de leads qualificados.
- Desligado por padrão para não poluir a mensagem do cliente.
