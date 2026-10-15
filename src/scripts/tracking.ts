/**
 * Rastreamento de conversões.
 * - Escuta cliques por delegação em [data-track]; nunca chama preventDefault: WhatsApp e ligação abrem sem atraso.
 * - Envia ao dataLayer (GTM). Sem GTM, envia via gtag (GA4/Ads), se configurado.
 * - Guarda UTMs e GCLID/GBRAID/WBRAID da sessão para enriquecer os eventos.
 * - Não envia dados pessoais: apenas serviço, local do botão, página e origem da campanha.
 *
 * Importante: whatsapp_click = clique no botão. Não equivale a conversa iniciada nem a lead qualificado.
 */

type Params = Record<string, string | number | undefined>;

interface TrackingConfig {
  gtmId: string | null;
  ga4Id: string | null;
  adsId: string | null;
  adsLabels: Record<string, string | null>;
  appendLeadRef: boolean;
}

declare global {
  interface Window {
    __MC_TRACKING__?: TrackingConfig;
  }
}

const ATTR_KEY = 'mc_attribution';
const REF_KEY = 'mc_lead_ref';
const CLICK_IDS = ['gclid', 'gbraid', 'wbraid'] as const;
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const;

const cfg = (): TrackingConfig | undefined => window.__MC_TRACKING__;

function safeSession<T>(fn: () => T, fallback: T): T {
  try {
    return fn();
  } catch {
    return fallback;
  }
}

/** Captura UTMs e IDs de clique do Google Ads (última origem da sessão). */
function captureAttribution(): Record<string, string> {
  const params = new URLSearchParams(location.search);
  const found: Record<string, string> = {};
  [...UTM_KEYS, ...CLICK_IDS].forEach((k) => {
    const v = params.get(k);
    if (v) found[k] = v.slice(0, 150);
  });
  if (Object.keys(found).length) {
    found.landing_page = location.pathname;
    safeSession(() => sessionStorage.setItem(ATTR_KEY, JSON.stringify(found)), undefined);
    return found;
  }
  return safeSession(() => JSON.parse(sessionStorage.getItem(ATTR_KEY) ?? '{}'), {});
}

/** Código curto da sessão — preparado para conciliação com CRM. */
export function leadRef(): string {
  return safeSession(() => {
    let ref = sessionStorage.getItem(REF_KEY);
    if (!ref) {
      ref = 'MC-' + Math.random().toString(36).slice(2, 6).toUpperCase();
      sessionStorage.setItem(REF_KEY, ref);
    }
    return ref;
  }, 'MC-0000');
}

let attribution: Record<string, string> = {};

function campaignSource(): string | undefined {
  if (attribution.utm_source) return attribution.utm_source;
  if (CLICK_IDS.some((k) => attribution[k])) return 'google_ads';
  return undefined;
}

let last = { sig: '', t: 0 };

export function track(event: string, params: Params = {}) {
  // Evita disparos duplicados (duplo toque, cliques repetidos)
  const sig = `${event}|${params.service_name ?? ''}|${params.button_location ?? ''}`;
  const now = performance.now();
  if (sig === last.sig && now - last.t < 1000) return;
  last = { sig, t: now };

  const payload: Params = {
    page_path: location.pathname,
    campaign_source: campaignSource(),
    campaign_medium: attribution.utm_medium,
    campaign_name: attribution.utm_campaign,
    lead_ref: cfg()?.appendLeadRef ? leadRef() : undefined,
    ...params,
  };
  Object.keys(payload).forEach((k) => payload[k] === undefined && delete payload[k]);

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });

  const c = cfg();
  if (!c?.gtmId && typeof window.gtag === 'function' && (c?.ga4Id || c?.adsId)) {
    window.gtag('event', event, payload);
    const label = c.adsLabels?.[event];
    if (label) window.gtag('event', 'conversion', { send_to: label });
  }
}

function withLeadRef(href: string): string {
  try {
    const url = new URL(href);
    const text = url.searchParams.get('text') ?? '';
    if (text.includes('Ref. MC-')) return href;
    url.searchParams.set('text', `${text}\n\nRef. ${leadRef()}`);
    return url.toString();
  } catch {
    return href;
  }
}

export function initTracking() {
  attribution = captureAttribution();

  document.addEventListener(
    'click',
    (e) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>('[data-track]');
      if (!el) return;
      const event = el.dataset.track!;
      if (event === 'whatsapp_click' && cfg()?.appendLeadRef && el instanceof HTMLAnchorElement) {
        el.href = withLeadRef(el.href);
      }
      track(event, {
        service_name: el.dataset.service,
        button_location: el.dataset.location,
      });
    },
    { capture: true },
  );

  // Consentimento (banner só existe quando há tags configuradas)
  const banner = document.querySelector<HTMLElement>('.consent');
  if (banner) {
    const saved = safeSession(() => localStorage.getItem('mc_consent'), null);
    if (!saved) banner.hidden = false;
    banner.addEventListener('click', (e) => {
      const btn = (e.target as Element).closest<HTMLButtonElement>('[data-consent]');
      if (!btn) return;
      const state = btn.dataset.consent === 'granted' ? 'granted' : 'denied';
      safeSession(() => localStorage.setItem('mc_consent', state), undefined);
      window.gtag?.('consent', 'update', {
        ad_storage: state,
        ad_user_data: state,
        ad_personalization: state,
        analytics_storage: state,
      });
      banner.hidden = true;
    });
  }
}
