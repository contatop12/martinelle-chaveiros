/**
 * Catálogo de serviços.
 * `confirmed: false` = serviço citado no briefing como "a validar". Não é exibido até a confirmação do cliente.
 */
import type { IconName } from '@/lib/icons';

export interface Problem {
  id: string;
  /** veiculo = carro ou moto; imovel = casa, apartamento ou empresa */
  group: 'veiculo' | 'imovel';
  title: string;
  text: string;
  icon: IconName;
  service: string;
  message: string;
}

export const PROBLEMS: Problem[] = [
  {
    id: 'perdi-a-chave',
    group: 'veiculo',
    title: 'Perdi a chave do carro',
    text: 'Fazemos uma chave nova mesmo sem a original, conforme o sistema do veículo e com comprovação de propriedade.',
    icon: 'KeyRound',
    service: 'chave_perdida',
    message: 'Olá! Perdi a chave do meu carro e preciso de uma nova. Meu veículo é [marca/modelo/ano] e está em [localização].',
  },
  {
    id: 'chave-reserva',
    group: 'veiculo',
    title: 'Preciso de uma chave reserva',
    text: 'Cópia de chave codificada, canivete ou presencial, programada para funcionar no seu carro.',
    icon: 'CopyPlus',
    service: 'chave_reserva',
    message: 'Olá! Quero fazer uma chave reserva. Meu veículo é [marca/modelo/ano].',
  },
  {
    id: 'codificada-parou',
    group: 'veiculo',
    title: 'Minha chave codificada parou de funcionar',
    text: 'Verificamos bateria, botões, chip e programação para indicar se vale reparar ou fazer uma nova.',
    icon: 'Microchip',
    service: 'chave_codificada_defeito',
    message: 'Olá! Minha chave codificada parou de funcionar. Meu veículo é [marca/modelo/ano].',
  },
  {
    id: 'programar-smart-key',
    group: 'veiculo',
    title: 'Preciso programar uma Smart Key',
    text: 'Programação de smart keys e chaves presenciais, de acordo com marca, modelo e ano.',
    icon: 'Smartphone',
    service: 'smart_key',
    message: 'Olá! Preciso programar uma Smart Key. Meu veículo é [marca/modelo/ano].',
  },
  {
    id: 'canivete-quebrou',
    group: 'veiculo',
    title: 'A chave canivete quebrou',
    text: 'Reparo da carcaça, dos botões ou da lâmina, ou confecção de uma chave canivete nova.',
    icon: 'Wrench',
    service: 'chave_canivete_quebrada',
    message: 'Olá! Minha chave canivete quebrou. Meu veículo é [marca/modelo/ano].',
  },
  {
    id: 'chave-trancada',
    group: 'veiculo',
    title: 'Tranquei a chave dentro do carro',
    text: 'Abertura técnica do veículo, feita após a verificação de que você é o proprietário ou está autorizado.',
    icon: 'LockKeyhole',
    service: 'abertura_veiculo',
    message: 'Olá! Tranquei a chave dentro do carro. Estou em [localização] e o veículo é [marca/modelo].',
  },
  {
    id: 'chave-moto',
    group: 'veiculo',
    title: 'Preciso de uma chave para moto',
    text: 'Cópia, confecção e programação de chaves de motos, conforme a compatibilidade do modelo.',
    icon: 'Motorbike',
    service: 'chave_moto',
    message: 'Olá! Preciso de um serviço de chaveiro para minha moto. Ela é [marca/modelo/ano].',
  },
  {
    id: 'chaveiro-24h',
    group: 'veiculo',
    title: 'Preciso de um chaveiro 24 horas',
    text: 'Atendimento emergencial a qualquer hora, pelo WhatsApp ou telefone, em Indaiatuba e região.',
    icon: 'Siren',
    service: 'emergencia_24h',
    message: 'Olá! Preciso de atendimento emergencial de chaveiro. Estou em [localização].',
  },
  {
    id: 'trancado-fora-de-casa',
    group: 'imovel',
    title: 'Fiquei trancado do lado de fora',
    text: 'Abertura de portas de casas, apartamentos e comércios, após confirmar que você é morador ou responsável.',
    icon: 'DoorOpen',
    service: 'abertura_porta',
    message: 'Olá! Fiquei trancado do lado de fora e preciso abrir uma porta. Estou em [endereço/bairro].',
  },
  {
    id: 'copia-chave-casa',
    group: 'imovel',
    title: 'Preciso de cópia de chave de casa',
    text: 'Cópias de chaves comuns e chaves tetra no quiosque do Sumerbol.',
    icon: 'KeySquare',
    service: 'copia_chave_residencial',
    message: 'Olá! Preciso de cópia de chave de casa. A chave é [comum/tetra] e preciso de [quantidade] cópias.',
  },
  {
    id: 'trocar-fechadura',
    group: 'imovel',
    title: 'Quero trocar a fechadura ou o segredo',
    text: 'Instalação, reparo e troca de segredo de fechaduras, inclusive fechaduras eletrônicas.',
    icon: 'Lock',
    service: 'fechadura_residencial',
    message: 'Olá! Quero trocar a fechadura ou o segredo da porta. É [casa/apartamento/comércio] em [bairro].',
  },
  {
    id: 'controle-portao',
    group: 'imovel',
    title: 'Preciso de controle de portão',
    text: 'Cópia e programação de controles de portão compatíveis com o seu sistema.',
    icon: 'Radio',
    service: 'controle_portao',
    message: 'Olá! Preciso de um controle de portão. Posso enviar uma foto do controle atual.',
  },
];

/** Bloco 4 — Chaveiro automotivo */
export const AUTOMOTIVE_SERVICES: string[] = [
  'Cópia e confecção de chaves automotivas',
  'Chaves perdidas ou danificadas',
  'Chaves codificadas',
  'Chaves canivete',
  'Smart Keys',
  'Chaves presenciais',
  'Chaves com telecomando',
  'Programação de controles',
  'Abertura técnica de veículos',
  'Reparos em fechaduras automotivas',
  'Troca e unificação de segredo',
  'Reparação de chaves e controles',
];

/** Bloco 5 — Tipos de chave codificada. `art` identifica a ilustração em KeyTypeArt.astro */
export interface KeyType {
  id: string;
  name: string;
  text: string;
  art: 'transponder' | 'canivete' | 'smart' | 'presencial' | 'cartao' | 'fobik' | 'controle' | 'reparo';
}

export const KEY_TYPES: KeyType[] = [
  {
    id: 'transponder',
    name: 'Transponder',
    text: 'Chave com um chip que conversa com o imobilizador. Sem o chip programado, o motor não liga.',
    art: 'transponder',
  },
  {
    id: 'canivete',
    name: 'Chave canivete',
    text: 'Lâmina que recolhe e controle na mesma peça. Fazemos cópia, chave nova e reparo.',
    art: 'canivete',
  },
  {
    id: 'smart-key',
    name: 'Smart Key',
    text: 'Chave eletrônica com botões e chip, comum em carros mais novos. Precisa ser programada no veículo.',
    art: 'smart',
  },
  {
    id: 'presencial',
    name: 'Chave presencial',
    text: 'O carro reconhece a chave por aproximação: abre e dá partida sem tirá-la do bolso.',
    art: 'presencial',
  },
  {
    id: 'cartao',
    name: 'Chave cartão',
    text: 'Chave em formato de cartão, usada em alguns modelos. Funciona por aproximação ou encaixe.',
    art: 'cartao',
  },
  {
    id: 'fobik',
    name: 'Chave Fobik',
    text: 'Chave sem lâmina que encaixa no painel para dar partida, usada em modelos como Dodge, Jeep e RAM.',
    art: 'fobik',
  },
  {
    id: 'controle',
    name: 'Controle remoto automotivo',
    text: 'Controle de abertura e travamento separado da chave. Cópia e programação conforme compatibilidade.',
    art: 'controle',
  },
  {
    id: 'reparo',
    name: 'Reparação de chave eletrônica',
    text: 'Botões gastos, carcaça quebrada ou falha de sinal: avaliamos antes de indicar uma chave nova.',
    art: 'reparo',
  },
];

/** Bloco 7 — Motos */
export const MOTORCYCLE_SERVICES: { title: string; text: string }[] = [
  { title: 'Cópia de chave', text: 'Chave reserva para a sua moto, a partir da chave original.' },
  { title: 'Confecção', text: 'Chave nova quando a original foi perdida, mediante comprovação de propriedade.' },
  { title: 'Programação', text: 'Programação de chaves com chip para motos que usam imobilizador.' },
  { title: 'Reparação', text: 'Avaliação de chaves com defeito para indicar reparo ou substituição.' },
];

/** Bloco 8 — Emergência 24h */
export const EMERGENCY_POINTS: { title: string; text: string; icon: IconName }[] = [
  { title: 'Atendimento de emergência', text: 'Chave perdida, veículo trancado ou porta que não abre.', icon: 'Siren' },
  { title: 'Contato rápido', text: 'Fale direto com a Martinelli pelo WhatsApp ou telefone.', icon: 'PhoneCall' },
  { title: 'Atendimento externo', text: 'Vamos até onde o veículo está, conforme disponibilidade.', icon: 'Route' },
  { title: 'Indaiatuba e região', text: 'Informe sua localização para combinarmos o atendimento.', icon: 'MapPin' },
  { title: 'Orientação inicial', text: 'Antes de sair de casa, você já recebe orientação pelo WhatsApp ou telefone.', icon: 'MessageCircle' },
];

/** Bloco 9 — Eletrônica automotiva */
export interface ElectronicService {
  title: string;
  text: string;
  confirmed: boolean;
  source?: string;
}

export const ELECTRONIC_SERVICES: ElectronicService[] = [
  {
    title: 'Reparação de chaves e controles',
    text: 'Troca de botões, carcaça e componentes de chaves e controles com defeito.',
    confirmed: true,
    source: 'Briefing (bloco 4) e fotos de trabalhos realizados',
  },
  {
    title: 'Sistemas de travamento eletrônico',
    text: 'Reparo de centrais de travamento das portas do veículo.',
    confirmed: true,
    source: 'Site atual: "Reparo de centrais"',
  },
  {
    title: 'Programação de controles',
    text: 'Programação de controles e telecomandos compatíveis com o veículo.',
    confirmed: true,
    source: 'Briefing (bloco 4)',
  },
  { title: 'Diagnóstico de sistemas imobilizadores', text: '', confirmed: false },
  { title: 'Reparação de módulos automotivos', text: '', confirmed: false },
  { title: 'Programação de módulos', text: '', confirmed: false },
  { title: 'Diagnóstico eletrônico', text: '', confirmed: false },
  { title: 'Reparação de fechaduras elétricas', text: '', confirmed: false },
  { title: 'Serviços em módulos de injeção e carroceria', text: '', confirmed: false },
];

/** Bloco 10 — Residencial e comercial, organizado por categoria */
export const RESIDENTIAL_CATEGORIES: { id: string; title: string; icon: IconName; items: string[] }[] = [
  {
    id: 'chaves',
    title: 'Chaves',
    icon: 'KeyRound',
    items: ['Cópias de chaves', 'Chaves tetra', 'Confecção de chaves perdidas'],
  },
  {
    id: 'portas',
    title: 'Portas e fechaduras',
    icon: 'DoorOpen',
    items: [
      'Abertura de portas',
      'Instalação de fechaduras',
      'Troca de segredo',
      'Reparação de fechaduras',
      'Fechaduras eletrônicas',
    ],
  },
  {
    id: 'portao',
    title: 'Portão',
    icon: 'Radio',
    items: ['Controles de portão', 'Cópia e programação de controles compatíveis'],
  },
  {
    id: 'comercial',
    title: 'Comércios',
    icon: 'Store',
    items: ['Fechaduras comerciais', 'Chaves comerciais'],
  },
];
