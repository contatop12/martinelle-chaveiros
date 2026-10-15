import { CONTACT } from '@/config/site';

/** Mensagens pré-preenchidas do WhatsApp por serviço. */
export const WA_MESSAGES = {
  geral: 'Olá! Vim pelo site da Martinelli Chaves e gostaria de solicitar um atendimento.',
  automotivo: 'Olá! Vim pelo site e preciso de um serviço de chaveiro automotivo. Meu veículo é [marca/modelo/ano].',
  codificadas: 'Olá! Preciso de ajuda com uma chave codificada. Meu veículo é [marca/modelo/ano].',
  importados: 'Olá! Gostaria de consultar um serviço de chave para meu veículo importado. A marca e o modelo são:',
  emergencia: 'Olá! Preciso de atendimento emergencial de chaveiro. Estou em [localização].',
  motos: 'Olá! Preciso de um serviço de chaveiro para minha moto. A marca, modelo e ano são:',
  residencial: 'Olá! Preciso de um serviço de chaveiro residencial.',
  eletronica: 'Olá! Vim pelo site e gostaria de consultar um serviço de eletrônica automotiva. Meu veículo é [marca/modelo/ano].',
} as const;

export type WaMessageKey = keyof typeof WA_MESSAGES;

export function waLink(message: string = WA_MESSAGES.geral): string {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function waLinkFor(key: WaMessageKey): string {
  return waLink(WA_MESSAGES[key]);
}

export const telLink = `tel:${CONTACT.phoneE164}`;
