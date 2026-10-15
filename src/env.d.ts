/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL?: string;
  readonly PUBLIC_GTM_ID?: string;
  readonly PUBLIC_GA4_ID?: string;
  readonly PUBLIC_GOOGLE_ADS_ID?: string;
  readonly PUBLIC_ADS_LABEL_WHATSAPP?: string;
  readonly PUBLIC_ADS_LABEL_PHONE?: string;
  readonly PUBLIC_ADS_LABEL_FORM?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  dataLayer: unknown[];
  gtag?: (...args: unknown[]) => void;
}
