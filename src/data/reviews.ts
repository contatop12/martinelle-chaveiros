/**
 * Avaliações de clientes — SOMENTE avaliações públicas reais do Perfil da Empresa no Google.
 * Não inventar nomes, notas, textos ou quantidade de avaliações.
 *
 * Textos enviados pela agência em 16/10/2026 (arquivo "Avaliações Google — Martinelli Chaves.md"),
 * copiados exatamente como publicados, sem as respostas do proprietário. Nomes abreviados por privacidade
 * (primeiro nome + inicial do sobrenome). Ficaram de fora 6 perfis que não são nomes de pessoas.
 */
export type ReviewTopic = 'automotivo' | 'residencial' | 'codificadas' | 'emergencia';

export interface Review {
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  /** Serviços citados no texto — escolhe as avaliações de cada página de serviço */
  topics?: ReviewTopic[];
  /** Em destaque no início da página (na ordem da lista) */
  featured?: boolean;
  /** Data da avaliação no Google, ex.: 'agosto de 2026' */
  date?: string;
  /** Link para o perfil do autor no Google (preenchido pela Places API) */
  authorUri?: string;
  photoUri?: string;
}

/** Em destaque primeiro; depois as demais, da mais recente para a mais antiga. */
export const REVIEWS: Review[] = [
  { author: 'Danilo P.', rating: 5, text: 'O Felipe me atendeu a primeira vez quando perdi a chave do meu carro. De lá pra cá, já fiz mais uma chave reserva e todas as chaves de casa e do escritório. Tanto ele como a sua esposa sempre foram muito prestativos!', topics: ['automotivo', 'residencial'], featured: true },
  { author: 'Melissa M.', rating: 5, text: 'Ótima experiência. Foram muitos rápidos em me atender em casa trocando a fechadura. Felipe é muito atencioso. Também responde super rápido no WhatsApp. Recomendo!', topics: ['residencial'], featured: true },
  { author: 'Laerte L.', rating: 5, text: 'Precisei de socorro devido chave presa na ignição do carro, o profissional Felipe veio até o local do veículo e fez os reparos. Atendimento rápido, de qualidade e preço justo. Recomendo!', topics: ['automotivo', 'emergencia'], featured: true },
  { author: 'Nayara R.', rating: 5, text: 'Atendimento rápido e eficaz! Deixei a chave do carro dentro do carro e fui atendida em 15 minutos. Fantástico!', topics: ['automotivo', 'emergencia'], featured: true },
  { author: 'Fabrício D.', rating: 5, text: 'Excelente atendimento. Sempre prestativo, ágil e comprometido. Tem nos auxiliado na obra com eficiência na confecção de novas chaves e abertura de portas em casos de extravio, cumprindo os serviços com qualidade e dentro do prazo.', topics: ['residencial'], featured: true },
  { author: 'Thomaz I.', rating: 5, text: 'Ótimo atendimento! Realizei a codificação da chave de um Tiggo 8. O serviço foi realizado de maneira rápida e eficiente! Recomendo!', topics: ['codificadas', 'automotivo'], featured: true },
  { author: 'Tamires B.', rating: 5, text: 'Solicitei os serviços deles duas vezes e, em ambas, o atendimento foi excelente! Super rápidos, tanto na resposta quanto no deslocamento até minha residência. Profissionais eficientes e muito atenciosos. Recomendo demais! 👍😃', topics: ['residencial'], featured: true },
  { author: 'Luiz C.', rating: 5, text: 'Super rápido, profissional e eficiente. Ficou tudo ótimo Já recomendei aqui no meu Condomínio e recomendo para todos. Felipe muito atencioso e correto.', topics: ['residencial'], featured: true },
  { author: 'Adriano B.', rating: 5, text: 'Felipe é muito profissional e resolve tanto fechadura residencial quanto automotiva Já me salvou umas 3x Top', topics: ['residencial', 'automotivo'], featured: true },
  { author: 'Suzana W.', rating: 5, text: 'Recomendo o serviço, veio super rápido me salvou ! Preço justo', topics: ['emergencia'] },
  { author: 'Mariana F.', rating: 5, text: 'Muito boa, foram muito rápidos.' },
  { author: 'Marcos V.', rating: 5, text: 'Excelente serviço. Ágil e eficiente, recomendo!' },
  { author: 'Fabio L.', rating: 5, text: 'Atendimento excelente, não me deixou na mão, me buscou em casa pois estava sem o carro. Serviço de qualidade e respeito ao cliente.', topics: ['emergencia'] },
  { author: 'Cida L.', rating: 5, text: 'Serviço de excelência atendimento rápido e eficiente Por mais atendimento assim' },
  { author: 'Eliton A.', rating: 5, text: 'Atendimento muito rápido. Cópia de chave do meu veículo com chip (code) ficou ótimo. Recomendo a todos.', topics: ['codificadas', 'automotivo'] },
  { author: 'Erick F.', rating: 5, text: 'Atendimento excelente, recomendo muito bom o trabalho deles' },
  { author: 'Eduardo O.', rating: 5, text: 'Me atenderam prontamente,serviço de qualidade.' },
  { author: 'Francisco L.', rating: 5, text: 'Resolveu o problema' },
  { author: 'Marcelo M.', rating: 5, text: 'Excelente atendimento, tanto na loja como fora dela!!! Preço justo' },
  { author: 'Alexsandra G.', rating: 5, text: 'Muito boa ! Recomendo!' },
  { author: 'Melina P.', rating: 5, text: 'Foi muito atencioso e prestativo, resolveu rápido e preço justo' },
  { author: 'Carol P.', rating: 5, text: 'Cordialidade, segurança e agilidade.' },
  { author: 'Diogo R.', rating: 5, text: 'Parabéns pelo serviço prestado. Cumpriu o prazo e chegou na hora combinada. Preço justo' },
  { author: 'Tiago C.', rating: 5, text: 'Prestador muito atencioso, ágil e prestativo. A agilidade e atenção foi um dos pontos que me chamou atenção, pois em nenhum momento Ele criou dificuldades para ir até o meu local...parabéns pelo atendimento.', topics: ['emergencia'] },
  { author: 'Homero B.', rating: 5, text: 'Atendimento rapido e profissional com otimo preco' },
  { author: 'Priscila S.', rating: 5, text: 'Agilidade e rapidez serviço de qualidade 👏' },
  { author: 'Sandra T.', rating: 5, text: 'Excelente , atendimento rápido , pontual e de confiança !' },
  { author: 'Ana F.', rating: 5, text: 'Eles me responderam rapidamente no WhatsApp, e conseguiram vir no momento que eu precisava fazer a troca de um miolo! Atenciosos e prestativos!', topics: ['residencial'] },
  { author: 'Rony A.', rating: 5, text: 'Ótimo atendimento e com rapidez' },
  { author: 'Leonardo L.', rating: 5, text: 'Atendimento rápido, com qualidade e ótimo custo-benefício.' },
  { author: 'Josiany M.', rating: 5, text: 'Atendimento rápido e eficiente. Super recomendo. Fiz minha chave reserva com confiança e rapidez . Vou indicar para amigos e vizinhos com certeza 🙌🏻' },
  { author: 'Beatriz K.', rating: 5, text: 'Ótimo atendimento, respondeu super rápido no wpp e o serviço também, super rápido! Recomendo' },
  { author: 'Gabriela M.', rating: 5, text: 'Excelente atendimento. Recomendo.' },
  { author: 'Daniel D.', rating: 5, text: 'Serviço excelente, rapidez e totalmente eficaz além de ser muito solícito' },
  { author: 'Jessica M.', rating: 5, text: 'Felipe muito educado. Me atendeu prontamente e o serviço bem rápido.' },
  { author: 'Audrey O.', rating: 5, text: 'Respondeu muito rápido e veio mais rápido ainda, limpou oque sujou, super agradeço, muito bom atendimento', topics: ['emergencia'] },
  { author: 'Luciana B.', rating: 5, text: 'Atendimento rápido e eficaz, indico o serviço!!!' },
  { author: 'Thais H.', rating: 5, text: 'Atendimento super rápido mesmo num domingo, eficaz e o Felipe é super educado.', topics: ['emergencia'] },
  { author: 'Sandra S.', rating: 5, text: 'Rápido atendimento e serviço bem feito.' },
  { author: 'Luiz M.', rating: 5, text: 'Salvou o dia, atendimento super rápido e muito bom! Muito obrigado!!', topics: ['emergencia'] },
  { author: 'Iago F.', rating: 5, text: 'Excelente profissional , muito bom atendimento e serviço prestado' },
  { author: 'Natália R.', rating: 5, text: 'Chegou no local rápido educado resolveu meu problema no carro rápido parabéns', topics: ['automotivo', 'emergencia'] },
  { author: 'Rodolfo G.', rating: 5, text: 'Excelentes profissionais, preço justo e atendimento rápido.' },
  { author: 'Fabio S.', rating: 5, text: 'Rápido e confiável, muito bom... excelente.' },
  { author: 'Leo G.', rating: 5, text: 'Atendimento rápido, no local e com preço justo. Recomendo', topics: ['emergencia'] },
  { author: 'Natalia M.', rating: 5, text: 'Atendimento rápido e muito bom' },
  { author: 'Andre M.', rating: 5, text: 'Excelente trabalho! Rápido e confiável!' },
  { author: 'Thiago N.', rating: 5, text: 'Ótimo profissional. Rápido e prestativo' },
  { author: 'Bruno K.', rating: 5, text: 'Ótimo profissional Muito satisfeito' },
  { author: 'Cesar V.', rating: 5, text: 'Ótimo profissional. Ótimo custo x benefício. Recomendo.' },
  { author: 'Deise C.', rating: 5, text: 'Atendimento maravilhoso super educado' },
  { author: 'Regina V.', rating: 5, text: 'Excelente profissional.Pontual e correto.' },
  { author: 'Zuleide A.', rating: 5, text: 'Muito boa um excelente profissional' },
  { author: 'Danilo B.', rating: 5, text: 'Excelente, muito bom 👏🏽👏🏽👏🏽' },
  { author: 'Vinícius R.', rating: 5, text: 'Ótimo serviço!' },
  { author: 'Anthony J.', rating: 5, text: 'Qualidade e agilidade 👏🏾' },
  { author: 'Daiana M.', rating: 5, text: 'Agilidade e peço bom 🙌🏻🙌🏻👏🏻👏🏻👏🏻' },
  { author: 'Monique G.', rating: 5, text: 'Rapido, barato' },
  { author: 'Erica A.', rating: 5, text: 'Show! Rápido e compreensivo!' },
  { author: 'Jovino N.', rating: 5, text: 'Resolvido o processo' },
  { author: 'Cristiane F.', rating: 5, text: 'Excelente profissional' },
  { author: 'Leila B.', rating: 5, text: 'Muito prestativos e esforçados para resolverem nosso problema o mais rápido possível! Recomendo!' },
  { author: 'Aline C.', rating: 5, text: 'Foi muito boa parabéns pelo serviço e pelo atendimento foi muito rápido....' },
  { author: 'Helder L.', rating: 5, text: 'Rápido, tem clareza ao explicar o serviço e sabe o que faz! Indico!' },
  { author: 'Luis C.', rating: 5, text: 'Atendimento nota 10' },
  { author: 'Rogerio U.', rating: 5, text: 'Excelente atendimento, serviço de qualidade garantida e responsabilidade ótimo profissional.' },
  { author: 'Danilo S.', rating: 5, text: 'Muito proficional, atendimento super rápido. Indaiatuba precisava de de alguém assim, Super recomendo!' },
  { author: 'Inaque D.', rating: 5, text: 'Atendimento excelente, preço justo e agilidade 👏👏' },
  { author: 'Vinicius H.', rating: 5, text: 'Excelente atendimento e trabalho muito rápido' },
  { author: 'Mayara R.', rating: 5, text: 'Ótimo profissional, com muita experiência, preço justo e atendimento de qualidade!!! Super recomendo!!!' },
  { author: 'Daiane H.', rating: 5, text: 'Super recomendo! Excelente profissional, rápido e o com o valor justo !' },
  { author: 'Lucas U.', rating: 5, text: 'Excelência no que faz , atencioso, preço justo , otima qualidade em seu serviço.' },
  { author: 'Almir Z.', rating: 5, text: 'Atendimento rápido e com horário marcado. Localizou o problema é resolveu de imediato.' },
  { author: 'Catia L.', rating: 5, text: 'Profissional, muito competente e rápido. Serviço de qualidade.' },
  { author: 'Joao S.', rating: 5, text: 'Atendimento muito bom, preço ótimo' },
  { author: 'Carlos M.', rating: 5, text: 'Excelente! Profissional e correto! Recomendo!' },
  { author: 'Miriam U.', rating: 5, text: 'Chaveiro atencioso ,trabalho exelente preço justo..' },
  { author: 'Gui M.', rating: 5, text: 'Excelente profissional.' },
  { author: 'Pedro R.', rating: 5, text: 'Melhor chaveiro de Indaiatuba' },
];

/**
 * Resumo conferido no Perfil da Empresa no Google em 16/10/2026: nota 5,0 com 116 avaliações
 * (115 de 5 estrelas e 1 de 1 estrela). Exibido como informação estática, com data.
 * Não é usado em dados estruturados (o Google não aceita estrelas autodeclaradas em LocalBusiness).
 */
export const REVIEW_SUMMARY: { rating: number; count: number; asOf: string } | null = {
  rating: 5,
  count: 116,
  asOf: 'outubro de 2026',
};


/** Etiqueta exibida no card (só serviços explícitos no texto). */
export const TOPIC_LABEL: Partial<Record<ReviewTopic, string>> = {
  residencial: 'Residencial',
  automotivo: 'Automotivo',
  codificadas: 'Chave codificada',
};

/** Avaliações para uma página de serviço: primeiro as que citam o serviço, completando com as em destaque. */
export function reviewsFor(topic: ReviewTopic | null, count = 3): Review[] {
  const pick = topic ? REVIEWS.filter((r) => r.topics?.includes(topic)) : [];
  const fill = REVIEWS.filter((r) => r.featured && !pick.includes(r));
  return [...pick, ...fill].slice(0, count);
}
