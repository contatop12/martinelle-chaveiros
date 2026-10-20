/**
 * Páginas específicas por serviço (URLs finais distintas para Google Ads).
 * Cada uma tem H1, title, description, conteúdo e CTA próprios — não são cópias da home.
 */
import type { WaMessageKey } from '@/lib/contact';
import type { FaqItem } from '@/data/faq';
import type { GalleryCategory, Photo } from '@/data/photos';
import { FEATURE_PHOTOS, STORE_PHOTOS, MOTO_PHOTOS } from '@/data/photos';

export type PageBody = 'automotivo' | 'codificadas' | 'importados' | 'motos' | '24h' | 'residencial';

export interface ServicePage {
  slug: string;
  body: PageBody;
  title: string;
  description: string;
  h1: string;
  lead: string;
  highlights: string[];
  waKey: WaMessageKey;
  waLabel: string;
  service: string;
  photo: Photo;
  faqTag: FaqItem['tags'][number];
  gallery: GalleryCategory | null;
  /** Etapas reais do atendimento (sequência) */
  steps: { title: string; text: string }[];
  related: string[];
}

const STEPS_VEHICLE = [
  { title: 'Envie os dados do veículo', text: 'Marca, modelo, ano e o que aconteceu com a chave, pelo WhatsApp ou telefone.' },
  { title: 'Avaliação de compatibilidade', text: 'Confirmamos se o serviço é possível para o sistema do seu veículo antes de combinar o atendimento.' },
  { title: 'Atendimento no quiosque ou no local', text: 'Você vem ao Sumerbol ou combinamos o atendimento externo, conforme disponibilidade.' },
  { title: 'Verificação e teste', text: 'Conferimos a documentação de propriedade e testamos a chave no veículo.' },
];

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: 'chaveiro-automotivo-indaiatuba',
    body: 'automotivo',
    title: 'Chaveiro Automotivo em Indaiatuba | Cópia e Programação',
    description:
      'Chaveiro automotivo em Indaiatuba: cópia de chave de carro, chaves codificadas, canivete e presenciais, abertura de veículos e programação. Quiosque Sumerbol.',
    h1: 'Chaveiro Automotivo em Indaiatuba',
    lead: 'Cópia de chave de carro, chave nova quando a original foi perdida, programação de chaves e controles e abertura técnica de veículos nacionais e importados. Quiosque no Sumerbol e atendimento externo em Indaiatuba e região.',
    highlights: ['Cópia de chave de carro', 'Chaves codificadas e canivete', 'Abertura técnica de veículos', 'Reparo de chaves e controles'],
    waKey: 'automotivo',
    waLabel: 'Solicitar Chaveiro Automotivo',
    service: 'chaveiro_automotivo',
    photo: FEATURE_PHOTOS.automotivo2,
    faqTag: 'automotivo',
    gallery: 'nacionais',
    steps: STEPS_VEHICLE,
    related: ['chaves-codificadas-indaiatuba', 'chaveiro-carros-importados', 'chaveiro-24-horas-indaiatuba'],
  },
  {
    slug: 'chaves-codificadas-indaiatuba',
    body: 'codificadas',
    title: 'Chaves Codificadas em Indaiatuba | Smart Key e Presencial',
    description:
      'Chaves codificadas em Indaiatuba: transponder, canivete, smart key, chave presencial e reparo de chave eletrônica. Consulte a compatibilidade do seu veículo.',
    h1: 'Chaves Codificadas em Indaiatuba',
    lead: 'Programação de chave automotiva para transponder, chave canivete, smart key e chave presencial. A possibilidade de programar depende da marca, do modelo, do ano e do sistema do veículo — por isso avaliamos antes de confirmar o serviço.',
    highlights: ['Transponder e chave canivete', 'Smart Key e chave presencial', 'Chave reserva programada', 'Reparação de chave eletrônica'],
    waKey: 'codificadas',
    waLabel: 'Consultar Chave para Meu Veículo',
    service: 'chaves_codificadas',
    photo: FEATURE_PHOTOS.codificadas,
    faqTag: 'codificadas',
    gallery: 'chaves',
    steps: STEPS_VEHICLE,
    related: ['chaveiro-automotivo-indaiatuba', 'chaveiro-carros-importados', 'chaveiro-motos-indaiatuba'],
  },
  {
    slug: 'chaveiro-carros-importados',
    body: 'importados',
    title: 'Chaveiro para Carros Importados em Indaiatuba | BMW e Premium',
    description:
      'Chaves para carros importados e de luxo em Indaiatuba: chaves presenciais BMW, RAM, Toyota Hilux, Jetta GLI e outros. Veja trabalhos reais da Martinelli Chaves.',
    h1: 'Chaveiro para Carros Importados em Indaiatuba',
    lead: 'Atendimento especializado para sistemas de chaves e controles de carros importados e de luxo. Trabalhamos com chaves presenciais e smart keys de marcas como BMW e RAM — veja abaixo trabalhos reais.',
    highlights: ['Chaves presenciais BMW', 'Smart keys de picapes e SUVs', 'Avaliação por marca, modelo e ano', 'Trabalhos reais documentados'],
    waKey: 'importados',
    waLabel: 'Consultar Chave para Meu Importado',
    service: 'carros_importados',
    photo: FEATURE_PHOTOS.hero,
    faqTag: 'importados',
    gallery: 'importados',
    steps: STEPS_VEHICLE,
    related: ['chaves-codificadas-indaiatuba', 'chaveiro-automotivo-indaiatuba', 'chaveiro-24-horas-indaiatuba'],
  },
  {
    slug: 'chaveiro-motos-indaiatuba',
    body: 'motos',
    title: 'Chaveiro para Motos em Indaiatuba | Cópia e Chave Nova',
    description:
      'Chaveiro de motos em Indaiatuba: cópia, confecção, programação e reparação de chaves de motocicletas, conforme compatibilidade. Quiosque no Sumerbol.',
    h1: 'Chaveiro para Motos em Indaiatuba',
    lead: 'Cópia de chave reserva, chave nova quando a original foi perdida, programação de chaves com chip e reparação. Cada moto tem um sistema diferente, então confirmamos a compatibilidade pelo modelo e ano antes do serviço.',
    highlights: ['Cópia de chave de moto', 'Chave nova sem a original', 'Programação de chave com chip', 'Reparação de chaves'],
    waKey: 'motos',
    waLabel: 'Consultar Serviço para Minha Moto',
    service: 'chaveiro_motos',
    photo: MOTO_PHOTOS.pcx,
    faqTag: 'motos',
    gallery: 'motos',
    steps: [
      { title: 'Envie os dados da moto', text: 'Marca, modelo, ano e se você ainda tem uma chave original.' },
      { title: 'Confirmação de compatibilidade', text: 'Verificamos se o serviço é possível para o sistema da sua moto.' },
      { title: 'Atendimento', text: 'No quiosque do Sumerbol ou no local, conforme disponibilidade.' },
      { title: 'Verificação e teste', text: 'Conferimos a documentação de propriedade e testamos a chave na moto.' },
    ],
    related: ['chaves-codificadas-indaiatuba', 'chaveiro-24-horas-indaiatuba', 'chaveiro-automotivo-indaiatuba'],
  },
  {
    slug: 'chaveiro-24-horas-indaiatuba',
    body: '24h',
    title: 'Chaveiro 24 Horas em Indaiatuba | Atendimento Emergencial',
    description:
      'Chaveiro 24 horas em Indaiatuba: chave perdida, chave trancada no carro e atendimento emergencial todos os dias. WhatsApp e telefone (19) 99918-2277.',
    h1: 'Chaveiro 24 Horas em Indaiatuba',
    lead: 'Perdeu a chave, trancou a chave dentro do carro ou precisa de atendimento urgente? A Martinelli Chaves atende emergências 24 horas por dia, todos os dias da semana, em Indaiatuba e região.',
    highlights: ['Emergência a qualquer hora', 'Atendimento externo', 'Orientação inicial pelo WhatsApp', 'Indaiatuba e região'],
    waKey: 'emergencia',
    waLabel: 'Chamar Chaveiro 24h',
    service: 'emergencia_24h',
    photo: FEATURE_PHOTOS.automotivo,
    faqTag: '24h',
    gallery: null,
    steps: [
      { title: 'Envie sua localização', text: 'Pelo WhatsApp, compartilhe onde você está. Se preferir, ligue.' },
      { title: 'Conte o que aconteceu', text: 'Chave perdida, trancada no carro, quebrada ou porta que não abre. Para veículos, informe marca, modelo e ano.' },
      { title: 'Combine o atendimento', text: 'Você recebe a orientação inicial e combinamos o deslocamento, conforme disponibilidade.' },
      { title: 'Tenha os documentos à mão', text: 'Para abrir ou fazer chave, verificamos a propriedade do veículo ou do imóvel.' },
    ],
    related: ['chaveiro-automotivo-indaiatuba', 'chaveiro-residencial-indaiatuba', 'chaves-codificadas-indaiatuba'],
  },
  {
    slug: 'chaveiro-residencial-indaiatuba',
    body: 'residencial',
    title: 'Chaveiro Residencial em Indaiatuba | Martinelli Chaves',
    description:
      'Chaveiro residencial em Indaiatuba: cópia de chaves, chave tetra, abertura de portas, troca de segredo, fechaduras eletrônicas e controles de portão.',
    h1: 'Chaveiro Residencial e Comercial em Indaiatuba',
    lead: 'Cópias de chaves e chave tetra no quiosque do Sumerbol, abertura de portas, instalação e reparo de fechaduras, troca de segredo, fechaduras eletrônicas e controles de portão para casas, apartamentos e comércios.',
    highlights: ['Cópias de chaves e tetra', 'Abertura de portas', 'Fechaduras e troca de segredo', 'Controles de portão'],
    waKey: 'residencial',
    waLabel: 'Solicitar Serviço de Chaveiro',
    service: 'chaveiro_residencial',
    photo: STORE_PHOTOS.quiosque,
    faqTag: 'residencial',
    gallery: null,
    steps: [
      { title: 'Conte o que precisa', text: 'Cópia, abertura, fechadura ou controle de portão — pelo WhatsApp ou telefone.' },
      { title: 'Cópias no quiosque', text: 'Cópias de chaves e controles compatíveis são feitas no quiosque do Sumerbol.' },
      { title: 'Serviços no local', text: 'Abertura de portas e instalação de fechaduras são combinadas para o endereço, conforme disponibilidade.' },
      { title: 'Verificação', text: 'Para abertura de portas, confirmamos que você é morador ou responsável pelo imóvel.' },
    ],
    related: ['chaveiro-24-horas-indaiatuba', 'chaveiro-automotivo-indaiatuba', 'chaveiro-motos-indaiatuba'],
  },
];

export const pageBySlug = (slug: string) => SERVICE_PAGES.find((p) => p.slug === slug);
