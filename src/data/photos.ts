/**
 * Fotografias reais da Martinelli Chaves (enviadas pelo cliente).
 * Ficam em src/assets/images/<categoria>/ para que o Astro gere AVIF/WebP responsivos no build.
 *
 * Legendas: descrevem apenas o que a foto mostra (marca/modelo visível e tipo de chave).
 * Nenhum serviço, modelo ou resultado foi inferido além disso.
 */
import type { ImageMetadata } from 'astro';

// store
import quiosque from '@/assets/images/store/quiosque-martinelli-chaves-sumerbol.jpg';
import fachada from '@/assets/images/store/fachada-sumerbol-supermercados-indaiatuba.jpg';
// team
import atendimento from '@/assets/images/team/martinelli-chaves-atendimento.jpg';
// luxury-cars
import bmw01 from '@/assets/images/luxury-cars/chaves-presenciais-bmw-01.jpg';
import bmw02 from '@/assets/images/luxury-cars/chaves-presenciais-bmw-02.jpg';
import bmw03 from '@/assets/images/luxury-cars/chaves-presenciais-bmw-03.jpg';
import bmw04 from '@/assets/images/luxury-cars/chaves-presenciais-bmw-04.jpg';
import bmw05 from '@/assets/images/luxury-cars/chaves-presenciais-bmw-05.jpg';
import bmw06 from '@/assets/images/luxury-cars/chaves-presenciais-bmw-06.jpg';
import ram from '@/assets/images/luxury-cars/chaves-presenciais-ram.jpg';
import hilux from '@/assets/images/luxury-cars/chaves-presenciais-toyota-hilux-srx.jpg';
import jetta from '@/assets/images/luxury-cars/chaves-canivete-vw-jetta-gli.jpg';
// automotive
import hyundai from '@/assets/images/automotive/chaves-hyundai.jpg';
import vw01 from '@/assets/images/automotive/chaves-canivete-vw-01.jpg';
import jeepPresencial from '@/assets/images/automotive/chaves-presenciais-jeep.jpg';
import presenciais02 from '@/assets/images/automotive/chaves-presenciais-02.jpg';
import vw02 from '@/assets/images/automotive/chaves-canivete-vw-02.jpg';
import canivete01 from '@/assets/images/automotive/chaves-canivete-01.jpg';
import caniveteControle from '@/assets/images/automotive/chave-canivete-e-chave-com-controle.jpg';
import vw03 from '@/assets/images/automotive/chaves-canivete-vw-03.jpg';
import corolla from '@/assets/images/automotive/chaves-presenciais-toyota-corolla.jpg';
import presenciais03 from '@/assets/images/automotive/chaves-presenciais-03.jpg';
import caniveteControle02 from '@/assets/images/automotive/chave-canivete-e-chave-com-controle-02.jpg';
import tera from '@/assets/images/automotive/chaves-canivete-vw-tera.jpg';
import onix from '@/assets/images/automotive/chave-canivete-chevrolet-onix.jpg';
import vw04 from '@/assets/images/automotive/chaves-canivete-vw-04.jpg';
import chevrolet from '@/assets/images/automotive/chave-canivete-chevrolet.jpg';
import polo01 from '@/assets/images/automotive/chaves-canivete-vw-polo-01.jpg';
import jeepCanivete from '@/assets/images/automotive/chaves-canivete-jeep.jpg';
import nissan from '@/assets/images/automotive/chaves-presenciais-nissan.jpg';
import polo02 from '@/assets/images/automotive/chaves-canivete-vw-polo-02.jpg';
import vw05 from '@/assets/images/automotive/chaves-canivete-vw-05.jpg';
import fiat from '@/assets/images/automotive/chaves-fiat.jpg';
import nivus from '@/assets/images/automotive/chaves-canivete-vw-nivus.jpg';
// motorcycles
import pcxThumb from '@/assets/images/motorcycles/video-confeccao-chave-honda-pcx-2023.jpg';
import triumphVideoThumb from '@/assets/images/motorcycles/video-chave-moto-triumph.jpg';
import bmwVideoThumb from '@/assets/images/luxury-cars/video-teste-chave-presencial-bmw.jpg';
// services
import bancada from '@/assets/images/services/bancada-chaves-canivete.jpg';
import fiatReparo from '@/assets/images/services/chaves-canivete-fiat-original-e-nova.jpg';

export interface Photo {
  src: ImageMetadata;
  alt: string;
}

export const STORE_PHOTOS = {
  quiosque: {
    src: quiosque,
    alt: 'Quiosque da Martinelli Chaves no Sumerbol, com vitrines, chaves, controles e acessórios expostos',
  },
  fachada: {
    src: fachada,
    alt: 'Fachada do Sumerbol Supermercados na Av. Eng. Fábio Roberto Barnabé, em Indaiatuba',
  },
} satisfies Record<string, Photo>;

export const TEAM_PHOTOS = {
  atendimento: {
    src: atendimento,
    alt: 'Profissional da Martinelli Chaves em atendimento no estacionamento, com chaves automotivas na mão',
  },
} satisfies Record<string, Photo>;

/** Fotos com função específica nas seções */
export const FEATURE_PHOTOS = {
  hero: {
    src: bmw01,
    alt: 'Par de chaves presenciais BMW seguradas em frente a um BMW branco no estacionamento',
  },
  automotivo: {
    src: vw03,
    alt: 'Duas chaves canivete Volkswagen em frente ao painel digital do veículo',
  },
  automotivo2: {
    src: onix,
    alt: 'Chave canivete e chave original de um Chevrolet Onix em frente ao volante',
  },
  codificadas: {
    src: bmw05,
    alt: 'Duas chaves presenciais BMW em frente ao letreiro da Martinelli Chaves',
  },
  eletronica: {
    src: bancada,
    alt: 'Chave canivete e chave com controle na bancada de trabalho, com estação de solda ao fundo',
  },
  eletronica2: {
    src: fiatReparo,
    alt: 'Duas chaves canivete Fiat: uma original desgastada e uma nova',
  },
} satisfies Record<string, Photo>;

export type GalleryCategory = 'importados' | 'nacionais' | 'motos' | 'chaves';

export const GALLERY_FILTERS: { id: 'todos' | GalleryCategory; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'importados', label: 'Importados' },
  { id: 'nacionais', label: 'Nacionais' },
  { id: 'motos', label: 'Motos' },
  { id: 'chaves', label: 'Chaves e Controles' },
];

export interface VideoSource {
  src: string;
  poster: string;
  width: number;
  height: number;
}

export interface GalleryItem extends Photo {
  id: string;
  title: string;
  caption: string;
  categories: GalleryCategory[];
  /** Itens de vídeo: a imagem (src) é a miniatura; o lightbox mostra o player */
  video?: VideoSource;
}

export const VIDEOS = {
  bmw: { src: '/video/teste-chave-presencial-bmw.mp4', poster: '/video/teste-chave-presencial-bmw.webp', width: 392, height: 848 },
  triumph: { src: '/video/chave-moto-triumph.mp4', poster: '/video/chave-moto-triumph.webp', width: 392, height: 848 },
  /** Versão curta (27 s, sem áudio) para a seção de motos */
  pcx: { src: '/video/confeccao-chave-honda-pcx-2023-curto.mp4', poster: '/video/confeccao-chave-honda-pcx-2023.webp', width: 540, height: 960 },
  /** Vídeo completo (45 s, com narração) — galeria */
  pcxFull: { src: '/video/confeccao-chave-honda-pcx-2023.mp4', poster: '/video/confeccao-chave-honda-pcx-2023.webp', width: 540, height: 960 },
} satisfies Record<string, VideoSource>;

export const MOTO_PHOTOS = {
  pcx: {
    src: pcxThumb,
    alt: 'Honda PCX 2023 ligada após a confecção da chave, com o painel aceso',
  },
} satisfies Record<string, Photo>;

export const GALLERY: GalleryItem[] = [
  { id: 'bmw-01', src: bmw01, title: 'BMW', caption: 'Par de chaves presenciais', categories: ['importados'], alt: FEATURE_PHOTOS.hero.alt },
  { id: 'ram', src: ram, title: 'RAM', caption: 'Par de chaves presenciais', categories: ['importados'], alt: 'Duas chaves presenciais RAM em frente ao volante da picape' },
  { id: 'onix', src: onix, title: 'Chevrolet Onix', caption: 'Confecção e programação de chave', categories: ['nacionais', 'chaves'], alt: FEATURE_PHOTOS.automotivo2.alt },
  { id: 'hilux', src: hilux, title: 'Toyota Hilux SRX', caption: 'Par de chaves presenciais', categories: ['importados'], alt: 'Duas chaves presenciais Toyota em frente à traseira de uma Hilux SRX branca' },
  { id: 'pcx-video', src: pcxThumb, title: 'Honda PCX 2023', caption: 'Vídeo: confecção de chave', categories: ['motos'], alt: 'Vídeo da confecção de chave para Honda PCX 2023: a moto não ligava e passa a funcionar com a chave nova', video: VIDEOS.pcxFull },
  { id: 'bmw-video', src: bmwVideoThumb, title: 'BMW', caption: 'Vídeo: teste de chave presencial', categories: ['importados'], alt: 'Quadro do vídeo: duas chaves presenciais BMW em frente ao carro', video: VIDEOS.bmw },
  { id: 'presenciais-02', src: presenciais02, title: 'Chaves presenciais', caption: 'Par de chaves no quiosque', categories: ['chaves'], alt: 'Duas chaves presenciais em frente ao letreiro da Martinelli Chaves' },
  { id: 'fiat-reparo', src: fiatReparo, title: 'Fiat', caption: 'Chave canivete original desgastada e chave nova', categories: ['chaves'], alt: FEATURE_PHOTOS.eletronica2.alt },
  { id: 'triumph-video', src: triumphVideoThumb, title: 'Triumph', caption: 'Vídeo: chave para motocicleta Triumph', categories: ['motos'], alt: 'Quadro do vídeo: chave de motocicleta Triumph em frente à moto', video: VIDEOS.triumph },
  { id: 'jetta', src: jetta, title: 'Volkswagen Jetta GLI', caption: 'Par de chaves canivete', categories: ['importados'], alt: 'Duas chaves canivete Volkswagen em frente à grade de um Jetta GLI' },
  { id: 'bmw-04', src: bmw04, title: 'BMW', caption: 'Par de chaves presenciais', categories: ['importados'], alt: 'Duas chaves presenciais BMW em frente à grade de um BMW cinza' },
  { id: 'corolla', src: corolla, title: 'Toyota Corolla', caption: 'Par de chaves presenciais', categories: ['nacionais'], alt: 'Duas chaves presenciais Toyota em frente ao emblema Corolla' },
  { id: 'jeep-presencial', src: jeepPresencial, title: 'Jeep', caption: 'Par de chaves presenciais', categories: ['nacionais'], alt: 'Duas chaves presenciais Jeep em frente ao volante' },
  { id: 'bmw-06', src: bmw06, title: 'BMW', caption: 'Par de chaves presenciais', categories: ['importados'], alt: 'Duas chaves presenciais BMW em frente ao volante do veículo' },
  { id: 'tera', src: tera, title: 'Volkswagen Tera', caption: 'Par de chaves canivete', categories: ['nacionais'], alt: 'Duas chaves canivete Volkswagen em frente ao emblema Tera' },
  { id: 'nissan', src: nissan, title: 'Nissan', caption: 'Par de chaves presenciais', categories: ['chaves'], alt: 'Duas chaves presenciais Nissan em frente ao volante' },
  { id: 'nivus', src: nivus, title: 'Volkswagen Nivus', caption: 'Chave canivete e chave com lâmina', categories: ['nacionais'], alt: 'Chave canivete e chave Volkswagen em frente ao letreiro Nivus' },
  { id: 'bmw-03', src: bmw03, title: 'BMW', caption: 'Par de chaves presenciais', categories: ['importados', 'chaves'], alt: 'Duas chaves presenciais BMW lado a lado na mão' },
  { id: 'polo-01', src: polo01, title: 'Volkswagen Polo', caption: 'Par de chaves canivete', categories: ['nacionais'], alt: 'Duas chaves canivete em frente ao emblema Polo' },
  { id: 'canivete-controle', src: caniveteControle, title: 'Chave canivete', caption: 'Ao lado de chave com controle e botão de pânico', categories: ['chaves'], alt: 'Chave canivete e chave com controle e botão de pânico em frente ao letreiro da Martinelli Chaves' },
  { id: 'jeep-canivete', src: jeepCanivete, title: 'Jeep', caption: 'Chave canivete e chave com lâmina', categories: ['nacionais'], alt: 'Chave canivete e chave Jeep em frente à grade do veículo' },
  { id: 'fiat', src: fiat, title: 'Fiat', caption: 'Chave com lâmina e chave canivete', categories: ['nacionais'], alt: 'Chave Fiat com lâmina e chave canivete Fiat em frente ao emblema da marca' },
  { id: 'chevrolet', src: chevrolet, title: 'Chevrolet', caption: 'Chave canivete e chave com lâmina', categories: ['nacionais'], alt: 'Chave com lâmina e chave canivete em frente ao volante Chevrolet' },
  { id: 'hyundai', src: hyundai, title: 'Hyundai', caption: 'Chave com lâmina e chave canivete', categories: ['nacionais'], alt: 'Chave com lâmina e chave canivete em frente ao emblema Hyundai do veículo' },
  { id: 'bmw-05', src: bmw05, title: 'BMW', caption: 'Par de chaves presenciais', categories: ['importados', 'chaves'], alt: FEATURE_PHOTOS.codificadas.alt },
  { id: 'vw-03', src: vw03, title: 'Volkswagen', caption: 'Par de chaves canivete', categories: ['nacionais'], alt: FEATURE_PHOTOS.automotivo.alt },
  { id: 'bancada', src: bancada, title: 'Bancada', caption: 'Chave canivete e chave com controle', categories: ['chaves'], alt: FEATURE_PHOTOS.eletronica.alt },
  { id: 'canivete-01', src: canivete01, title: 'Chaves canivete', caption: 'Par de chaves com quatro botões', categories: ['chaves'], alt: 'Duas chaves canivete com quatro botões na mão' },
  { id: 'polo-02', src: polo02, title: 'Volkswagen Polo', caption: 'Par de chaves canivete', categories: ['nacionais'], alt: 'Duas chaves canivete em frente ao emblema Polo de um carro branco' },
  { id: 'vw-04', src: vw04, title: 'Volkswagen', caption: 'Par de chaves canivete', categories: ['nacionais'], alt: 'Duas chaves canivete em frente ao volante Volkswagen' },
  { id: 'vw-05', src: vw05, title: 'Volkswagen', caption: 'Par de chaves canivete', categories: ['nacionais'], alt: 'Duas chaves canivete em frente ao volante e painel digital Volkswagen' },
  { id: 'vw-01', src: vw01, title: 'Volkswagen', caption: 'Três chaves canivete', categories: ['nacionais'], alt: 'Três chaves canivete e chaveiro da Martinelli Chaves em frente a um carro branco' },
  { id: 'vw-02', src: vw02, title: 'Volkswagen', caption: 'Par de chaves canivete', categories: ['nacionais'], alt: 'Duas chaves canivete em frente a um carro vermelho' },
  { id: 'bmw-02', src: bmw02, title: 'BMW', caption: 'Par de chaves presenciais', categories: ['importados'], alt: 'Duas chaves presenciais BMW seguradas em frente a um BMW branco na vaga 099' },
  { id: 'canivete-controle-02', src: caniveteControle02, title: 'Chave canivete', caption: 'Ao lado de chave com controle', categories: ['chaves'], alt: 'Chave canivete e chave com controle de três botões na mão' },
  { id: 'presenciais-03', src: presenciais03, title: 'Chaves presenciais', caption: 'Par de chaves presenciais', categories: ['chaves'], alt: 'Duas chaves presenciais em frente ao farol de um carro' },
];

/** Quantos itens aparecem antes de "Mostrar Mais Trabalhos" (curadoria variada, sem fotos repetidas) */
export const GALLERY_INITIAL = 8;

export const PREMIUM_STRIP = ['bmw-04', 'ram', 'hilux', 'bmw-06'];
