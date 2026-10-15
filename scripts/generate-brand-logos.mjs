/**
 * Gera public/images/brands/<marca>.svg a partir do pacote simple-icons (vetores oficiais monocromáticos).
 * Uso: node scripts/generate-brand-logos.mjs
 * Marcas sem ícone no simple-icons (ex.: Mercedes-Benz, Land Rover) devem ser adicionadas manualmente nesta pasta.
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import * as icons from 'simple-icons';

const BRANDS = {
  bmw: 'siBmw',
  ram: 'siRam',
  toyota: 'siToyota',
  jeep: 'siJeep',
  volkswagen: 'siVolkswagen',
  chevrolet: 'siChevrolet',
  nissan: 'siNissan',
  hyundai: 'siHyundai',
  fiat: 'siFiat',
  honda: 'siHonda',
  audi: 'siAudi',
  porsche: 'siPorsche',
  volvo: 'siVolvo',
  mini: 'siMini',
  ford: 'siFord',
  peugeot: 'siPeugeot',
  citroen: 'siCitroen',
};

const out = new URL('../public/images/brands/', import.meta.url);
mkdirSync(out, { recursive: true });
for (const [slug, key] of Object.entries(BRANDS)) {
  const icon = icons[key];
  if (!icon) {
    console.warn(`sem ícone: ${slug}`);
    continue;
  }
  writeFileSync(new URL(`${slug}.svg`, out), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>${icon.title}</title><path d="${icon.path}"/></svg>\n`);
  console.log(`${slug}.svg`);
}
