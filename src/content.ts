import type { ComponentType } from "react";
import {
  AtSign,
  BadgeCheck,
  Bot,
  Briefcase,
  CreditCard,
  Globe,
  ImageIcon,
  Layers,
  LayoutTemplate,
  ListChecks,
  Lock,
  Megaphone,
  MessageSquareText,
  Server,
  ShieldCheck,
  Smartphone,
  Store,
  TrendingUp,
  UserRound,
  Zap,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/Icons";

export type IconType = ComponentType<{ className?: string }>;

export interface IconItem {
  icon: IconType;
  title: string;
  text: string;
}

/** Benefícios exibidos no topo da página. */
export const HERO_BENEFITS = [
  "Crie sites do zero sem programar",
  "Utilize IA para criar estruturas, textos e layouts",
  "Aprenda a criar sites para empresas e profissionais",
  "Publique seu site com hospedagem gratuita",
  "Adicione botão de WhatsApp para captar clientes",
  "Aprenda no seu ritmo, com videoaulas práticas",
];

export const TRUST_MICRO = [
  { icon: Globe, text: "Acesso online" },
  { icon: CreditCard, text: "Compra única" },
  { icon: ShieldCheck, text: "Garantia de 7 dias" },
];

export const OFFER_TRUST = [
  { icon: Lock, text: "Pagamento seguro" },
  { icon: Zap, text: "Acesso online" },
  { icon: ShieldCheck, text: "Garantia de 7 dias" },
];

export const PAYMENT_CHIPS = [
  { icon: CreditCard, text: "Cartão de crédito" },
  { icon: BadgeCheck, text: "Compra única, sem mensalidade" },
  { icon: Zap, text: "Acesso online" },
];

/** Seção "Você não precisa saber programar". */
export const NOCODE_PARAGRAPHS = [
  "Durante muito tempo, criar um site exigia conhecimentos de programação, design, códigos e ferramentas complicadas.",
  "Hoje, com as ferramentas de inteligência artificial e os comandos certos, você pode acelerar esse processo e construir páginas modernas sem precisar começar do zero.",
];

export const NOCODE_CARDS: IconItem[] = [
  {
    icon: LayoutTemplate,
    title: "Sem programar",
    text: "Aprenda a criar sites utilizando ferramentas de inteligência artificial, mesmo começando do absoluto zero.",
  },
  {
    icon: ListChecks,
    title: "Passo a passo",
    text: "Acompanhe aulas práticas, objetivas e fáceis de entender, aplicando o conteúdo enquanto aprende.",
  },
  {
    icon: Bot,
    title: "Na prática",
    text: "Não fique apenas na teoria. Aprenda a desenvolver projetos reais e coloque seus conhecimentos em prática.",
  },
];

/** O que você vai aprender. */
export const SKILLS: IconItem[] = [
  {
    icon: LayoutTemplate,
    title: "Criação de sites do zero",
    text: "Aprenda a criar sites mesmo sem experiência anterior e sem precisar dominar HTML ou programação.",
  },
  {
    icon: Bot,
    title: "Inteligência artificial na prática",
    text: "Descubra como utilizar ferramentas como ChatGPT para auxiliar na criação de sites, textos, ideias, estruturas e layouts.",
  },
  {
    icon: MessageSquareText,
    title: "Prompts estratégicos",
    text: "Aprenda a criar comandos detalhados para orientar a IA e obter resultados muito melhores na criação de sites.",
  },
  {
    icon: Layers,
    title: "Estrutura profissional",
    text: "Aprenda a organizar as páginas, seções, menus, banners, informações e elementos de um site para transmitir credibilidade.",
  },
  {
    icon: ImageIcon,
    title: "Textos e imagens",
    text: "Descubra como utilizar textos estratégicos, imagens e elementos visuais para deixar seu site bonito e atrativo.",
  },
  {
    icon: WhatsAppIcon,
    title: "Botão de WhatsApp",
    text: "Aprenda a integrar um botão de WhatsApp para facilitar o contato entre empresas e clientes.",
  },
  {
    icon: Server,
    title: "Hospedagem gratuita",
    text: "Aprenda como colocar seu projeto online utilizando opções de hospedagem gratuita ensinadas no treinamento.",
  },
  {
    icon: Smartphone,
    title: "Site responsivo",
    text: "Entenda como estruturar seu site para que ele tenha uma boa aparência tanto em celulares quanto em computadores.",
  },
  {
    icon: AtSign,
    title: "Domínio próprio",
    text: "Conheça a possibilidade de utilizar um domínio próprio, como www.suaempresa.com.br, para deixar o projeto ainda mais profissional.",
  },
];

export interface Module {
  title: string;
  paragraphs: string[];
  items?: string[];
  note?: string;
}

export const MODULES: Module[] = [
  {
    title: "Introdução ao curso",
    paragraphs: [
      "Bem-vindo ao universo da criação de sites com Inteligência Artificial.",
      "Conheça a proposta do curso e entenda como será o processo de aprendizado, desde os primeiros passos até a criação e publicação de um site.",
    ],
  },
  {
    title: "Criando o prompt do seu primeiro site",
    paragraphs: [
      "Aprenda o passo mais importante para criar sites com IA: escrever um comando estratégico e detalhado.",
      "Você aprenderá a definir:",
    ],
    items: [
      "Objetivo do site",
      "Nome da empresa",
      "Identidade visual",
      "Cores",
      "Estilo de design",
      "Estrutura das páginas",
      "Textos",
      "Imagens",
      "Funcionalidades",
      "Botões de contato",
    ],
    note: "Acompanhe um exemplo prático criando um prompt completo para uma sorveteria.",
  },
  {
    title: "Criando um site profissional com IA",
    paragraphs: [
      "Aprenda a transformar seu prompt em um site real utilizando uma plataforma de criação de sites com inteligência artificial.",
      "Acompanhe o processo de criação, geração da estrutura, organização das seções e desenvolvimento visual.",
    ],
  },
  {
    title: "Personalizando seu site",
    paragraphs: [
      "Aprenda a melhorar o resultado gerado pela IA, ajustar o visual, organizar informações e deixar o site com aparência mais profissional.",
    ],
  },
  {
    title: "Como utilizar e trocar imagens",
    paragraphs: ["Aprenda a utilizar imagens no site e substituir imagens utilizando o IMGBB.", "Você aprenderá:"],
    items: [
      "Como fazer upload de imagens",
      "Como gerar links para imagens",
      "Como substituir imagens dentro do site",
      "Como organizar imagens dos projetos",
      "Como utilizar imagens reais de empresas para aumentar a credibilidade",
    ],
  },
  {
    title: "Como comprar um domínio",
    paragraphs: [
      "Aprenda o processo de pesquisa e compra de um domínio próprio.",
      "Conheça dicas para escolher um domínio curto, fácil de lembrar e adequado para uma empresa ou projeto.",
    ],
  },
  {
    title: "Publicando seu site",
    paragraphs: [
      "Entenda como colocar seu site online e disponibilizá-lo para outras pessoas acessarem.",
      "Aprenda os conceitos de hospedagem gratuita, publicação e os próximos passos para colocar seu projeto na internet.",
    ],
  },
  {
    title: "Criando uma logomarca com IA",
    paragraphs: [
      "Aprenda a utilizar inteligência artificial para criar uma logomarca para seu negócio ou projeto.",
      "Conheça o processo de criação de prompts, geração de opções, escolha da identidade visual e aplicação da logo no site.",
    ],
  },
];

/** O que você poderá fazer após aprender. */
export const POSSIBILITIES: IconItem[] = [
  {
    icon: UserRound,
    title: "Criar seu próprio site",
    text: "Desenvolva uma presença online para seu negócio, projeto, marca pessoal ou serviço.",
  },
  {
    icon: Megaphone,
    title: "Divulgar empresas",
    text: "Crie páginas para apresentar empresas, serviços, produtos, contatos e informações importantes.",
  },
  {
    icon: Briefcase,
    title: "Criar sites para clientes",
    text: "Utilize o conhecimento adquirido para desenvolver projetos de sites para empreendedores e empresas locais.",
  },
  {
    icon: TrendingUp,
    title: "Ampliar suas habilidades digitais",
    text: "Aprenda uma habilidade atual e explore novas possibilidades no mercado digital.",
  },
];

/** Bônus inclusos. */
export const BONUS_LOGO_ITEMS = [
  "Como criar prompts para logos",
  "Como gerar ideias de identidade visual",
  "Como escolher a melhor proposta",
  "Como aplicar a logomarca no seu site",
];

export const BONUS_BRIEFING_ITEMS = [
  "Nome e segmento da empresa",
  "Objetivo do site",
  "Páginas e seções",
  "Informações de contato",
  "Referências visuais",
];

export const BONUS_BRIEFING_HELP = [
  "Entender o que perguntar ao cliente",
  "Saber quais informações coletar",
  "Organizar os detalhes do projeto antes de iniciar o site",
];

/** Para quem é o curso. */
export const AUDIENCE: IconItem[] = [
  { icon: UserRound, title: "Iniciante", text: "Nunca criou um site e quer começar do zero." },
  { icon: Bot, title: "Entusiasta de IA", text: "Não sabe programar e quer aprender utilizando IA." },
  { icon: Store, title: "Empreendedor", text: "É empreendedor e deseja criar o site do próprio negócio." },
  { icon: Briefcase, title: "Autônomo", text: "É autônomo ou prestador de serviços." },
  { icon: Megaphone, title: "Divulgador", text: "Quer divulgar produtos ou serviços na internet." },
  { icon: Zap, title: "Em evolução", text: "Quer aprender uma habilidade digital atual." },
  { icon: LayoutTemplate, title: "Prestador de serviço", text: "Quer explorar a criação de sites como um serviço." },
  { icon: ListChecks, title: "Prático", text: "Busca aprender de maneira simples, prática e objetiva." },
];

/** O que está incluso na oferta. */
export const INCLUDED = [
  "Curso completo de criação de sites com IA",
  "Aulas práticas passo a passo",
  "Criação de sites do zero",
  "Criação de prompts estratégicos",
  "Desenvolvimento de sites profissionais",
  "Personalização de sites",
  "Hospedagem gratuita ensinada no curso",
  "Integração com WhatsApp",
  "Orientações sobre domínio próprio",
  "Bônus de criação de logomarca com IA",
  "Ebook Briefing para criação e venda de sites",
  "Acesso online para estudar no seu ritmo",
];

export const FAQ = [
  {
    question: "Preciso saber programar?",
    answer:
      "Não. O curso foi desenvolvido para iniciantes. Você aprenderá a utilizar inteligência artificial e ferramentas de criação de sites sem precisar começar aprendendo programação.",
  },
  {
    question: "Preciso ter experiência com design?",
    answer:
      "Não. Você aprenderá a utilizar prompts e orientações para ajudar a IA a criar estruturas e layouts profissionais.",
  },
  {
    question: "Como são as aulas?",
    answer: "O curso é composto por videoaulas práticas, simples e objetivas, acompanhadas passo a passo.",
  },
  {
    question: "Posso estudar pelo celular?",
    answer:
      "O acesso é online. O conteúdo poderá ser acessado pelos dispositivos compatíveis com a plataforma de disponibilização do curso.",
  },
  {
    question: "O curso possui hospedagem gratuita?",
    answer:
      "Sim. Você aprenderá como utilizar opções de hospedagem gratuita para publicar seu projeto, conforme as ferramentas e métodos apresentados nas aulas.",
  },
  {
    question: "Preciso pagar mensalidade?",
    answer:
      "Não. O curso é uma compra única, sem mensalidade do treinamento. Você pode pagar à vista por R$ 47,90 ou parcelar em até 12x de R$ 4,95 no cartão de crédito. Eventuais custos de serviços externos, ferramentas ou domínio próprio são independentes e poderão variar.",
  },
  {
    question: "Vou aprender a criar sites para empresas?",
    answer:
      "Sim. Você aprenderá a estruturar sites para empresas, negócios, prestadores de serviços e diferentes projetos.",
  },
  {
    question: "Posso oferecer sites para clientes?",
    answer:
      "O conhecimento pode ser aplicado em projetos próprios ou para clientes. O curso ensina fundamentos e processos que poderão ser utilizados para desenvolver seus próprios projetos.",
  },
  {
    question: "Como funciona a garantia?",
    answer:
      "Você possui 7 dias de garantia para avaliar o treinamento e, caso não queira continuar, poderá solicitar o reembolso dentro do prazo de garantia.",
  },
  {
    question: "Como recebo acesso?",
    answer:
      "Após a confirmação do pagamento, o acesso será disponibilizado conforme os procedimentos da plataforma de venda.",
  },
];

export const VSL_HIGHLIGHTS = [
  "Por que você não precisa ser programador nem designer",
  "Como orientar a IA para criar estruturas, textos e layouts",
  "O caminho da ideia inicial até a publicação na internet",
];
