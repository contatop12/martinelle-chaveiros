import { ADDRESS, CONTACT } from '@/config/site';

const KIOSK = 'segunda a sexta, das 10h às 19h, e sábado, das 10h às 18h (fechado aos domingos e feriados)';

export interface FaqItem {
  id: string;
  q: string;
  a: string;
  /** Páginas de serviço em que a pergunta também aparece */
  tags: ('automotivo' | 'codificadas' | 'importados' | 'motos' | '24h' | 'residencial' | 'geral')[];
}

export const FAQ: FaqItem[] = [
  {
    id: 'atende-24h',
    q: 'A Martinelli Chaves atende 24 horas?',
    a: `Sim, para emergências. O atendimento externo emergencial funciona 24 horas por dia, todos os dias, inclusive domingos e feriados, pelo WhatsApp e pelo telefone ${CONTACT.phoneDisplay}. O quiosque no Sumerbol não fica aberto 24 horas: o atendimento presencial é de ${KIOSK}.`,
    tags: ['24h', 'geral'],
  },
  {
    id: 'chaves-codificadas',
    q: 'Vocês fazem chaves codificadas?',
    a: 'Sim. Fazemos cópia, confecção e programação de chaves codificadas, chaves canivete, smart keys e chaves presenciais. A viabilidade depende da marca, do modelo, do ano e do sistema do veículo. Envie esses dados pelo WhatsApp para uma avaliação.',
    tags: ['codificadas', 'automotivo'],
  },
  {
    id: 'perdi-todas',
    q: 'Perdi todas as chaves do carro. O que fazer?',
    a: 'Deixe o veículo em local seguro e fale com a gente informando marca, modelo, ano e onde o carro está. Em muitos casos é possível fazer uma chave nova sem a original, mas isso depende do sistema do veículo. O serviço é feito somente com comprovação de propriedade, como o documento do veículo e um documento pessoal.',
    tags: ['automotivo', 'codificadas', '24h'],
  },
  {
    id: 'bmw-mercedes',
    q: 'Vocês fazem chave para BMW e Mercedes-Benz?',
    a: 'Atendemos BMW: você pode ver chaves presenciais de BMW entre os nossos trabalhos realizados. Para Mercedes-Benz e outras marcas premium, a possibilidade depende do modelo, do ano e do sistema de chave. Envie os dados do veículo pelo WhatsApp para confirmarmos antes do atendimento.',
    tags: ['importados'],
  },
  {
    id: 'chave-reserva',
    q: 'É possível fazer uma chave reserva?',
    a: 'Sim. Fazer a chave reserva enquanto você ainda tem a original costuma ser mais simples e evita transtornos se uma chave for perdida. Em veículos com chave codificada, a chave nova é programada para funcionar no carro.',
    tags: ['automotivo', 'codificadas'],
  },
  {
    id: 'presenciais',
    q: 'Vocês fazem chaves presenciais?',
    a: 'Sim, para veículos com sistema de chave presencial, em que o carro abre e dá partida com a chave no bolso. A compatibilidade é confirmada a partir da marca, do modelo e do ano.',
    tags: ['codificadas', 'importados'],
  },
  {
    id: 'parou-de-funcionar',
    q: 'Minha chave parou de funcionar. Vocês consertam?',
    a: 'Em muitos casos, sim. Bateria, botões gastos, carcaça quebrada ou falha no controle podem ter reparo. Avaliamos a chave e dizemos se compensa reparar ou se é melhor fazer uma nova.',
    tags: ['codificadas', 'automotivo'],
  },
  {
    id: 'atende-no-local',
    q: 'Vocês atendem no local onde o carro está?',
    a: 'Sim. Fazemos atendimento externo em Indaiatuba e região, conforme disponibilidade. Informe pelo WhatsApp onde o veículo está para combinarmos o atendimento.',
    tags: ['24h', 'automotivo'],
  },
  {
    id: 'motos',
    q: 'Vocês fazem chave para motos?',
    a: 'Sim. Fazemos cópia, confecção, programação e reparação de chaves de motos, conforme a compatibilidade de cada modelo. Envie marca, modelo e ano da moto pelo WhatsApp.',
    tags: ['motos'],
  },
  {
    id: 'residencial',
    q: 'Vocês fazem serviços de chaveiro residencial?',
    a: 'Sim. Atendemos casas, apartamentos e comércios: abertura de portas, cópias de chaves e chaves tetra, instalação e reparo de fechaduras, troca de segredo, fechaduras eletrônicas e controles de portão. Para abertura de portas, confirmamos que você é morador ou responsável pelo imóvel.',
    tags: ['residencial', '24h', 'geral'],
  },
  {
    id: 'controle-portao',
    q: 'Vocês fazem controle de portão?',
    a: 'Sim. Fazemos cópia e programação de controles de portão compatíveis. Traga o controle atual ao quiosque ou envie uma foto dele pelo WhatsApp para verificarmos.',
    tags: ['residencial'],
  },
  {
    id: 'onde-fica',
    q: 'Onde fica a Martinelli Chaves e qual o horário do quiosque?',
    a: `No ${ADDRESS.venue}: ${ADDRESS.street}, ${ADDRESS.unit}, ${ADDRESS.district}, ${ADDRESS.city}/${ADDRESS.state}. O quiosque atende ${KIOSK}. Emergências são atendidas 24 horas, com atendimento externo em Indaiatuba e região.`,
    tags: ['geral', 'residencial', 'motos'],
  },
  {
    id: 'orcamento',
    q: 'Como solicitar orçamento?',
    a: `Pelo WhatsApp ou pelo telefone ${CONTACT.phoneDisplay}, ou pelo formulário de orçamento rápido desta página. Para serviços automotivos, informe marca, modelo e ano do veículo e descreva o problema.`,
    tags: ['geral', 'automotivo', 'residencial', 'motos', 'importados'],
  },
];

export const faqFor = (tag: FaqItem['tags'][number]) => FAQ.filter((f) => f.tags.includes(tag));
