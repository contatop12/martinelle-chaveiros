/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL?: string;
  readonly PUBLIC_GTM_ID?: string;
  readonly PUBLIC_GA4_ID?: string;
  readonly PUBLIC_GOOGLE_ADS_ID?: string;
  readonly PUBLIC_ADS_LABEL_WHATSAPP?: string;
  readonly PUBLIC_ADS_LABEL_PHONE?: string;
  readonly PUBLIC_ADS_LABEL_FORM?: string;
  /** Somente no build (não vai para o navegador) */
  readonly GOOGLE_PLACES_API_KEY?: string;
  readonly GOOGLE_PLACE_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  dataLayer: unknown[];
  gtag?: (...args: unknown[]) => void;
}
