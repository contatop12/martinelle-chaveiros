/**
 * Configuração de mensuração (Google Tag Manager, GA4, Google Ads).
 * Os IDs vêm de variáveis de ambiente (.env) — nenhum ID é inventado.
 * Exceção: o contêiner GTM da Martinelli Chaves é o padrão (ID público). PUBLIC_GTM_ID o substitui;
 * PUBLIC_GTM_ID vazio desativa o GTM.
 * Sem IDs, os eventos continuam sendo enviados ao dataLayer, mas nenhuma tag externa é carregada.
 */

const clean = (v: string | undefined) => (v && v.trim() ? v.trim() : null);

const DEFAULT_GTM_ID = 'GTM-T43MD2XP';

export const TRACKING = {
  gtmId: clean(import.meta.env.PUBLIC_GTM_ID ?? DEFAULT_GTM_ID),
  ga4Id: clean(import.meta.env.PUBLIC_GA4_ID),
  adsId: clean(import.meta.env.PUBLIC_GOOGLE_ADS_ID),
  adsLabels: {
    whatsapp_click: clean(import.meta.env.PUBLIC_ADS_LABEL_WHATSAPP),
    phone_click: clean(import.meta.env.PUBLIC_ADS_LABEL_PHONE),
    quote_form_submit: clean(import.meta.env.PUBLIC_ADS_LABEL_FORM),
  },
  /**
   * Anexa um código curto de referência (ex.: "Ref. MC-7K2Q") à mensagem do WhatsApp,
   * permitindo cruzar a conversa com a origem da campanha num CRM futuro.
   * Desligado por padrão para não poluir a mensagem do cliente.
   */
  appendLeadRef: false,
} as const;

export const TRACKING_ENABLED = Boolean(TRACKING.gtmId || TRACKING.ga4Id || TRACKING.adsId);

/**
 * Eventos. Atenção: whatsapp_click = clique no botão.
 * Não equivale a conversa iniciada nem a lead qualificado.
 */
export const EVENTS = {
  whatsapp: 'whatsapp_click',
  phone: 'phone_click',
  quote: 'quote_form_submit',
  service: 'service_select',
  directions: 'directions_click',
  instagram: 'instagram_click',
} as const;

export type TrackEvent = (typeof EVENTS)[keyof typeof EVENTS];
