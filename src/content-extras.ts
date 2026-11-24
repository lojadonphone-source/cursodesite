import { ImageIcon, MapPin, Palette, PenLine, LayoutList } from "lucide-react";
import { Coffee, Dumbbell, IceCreamCone, PawPrint, Pizza, Scale, Scissors, Stethoscope } from "lucide-react";
import type { IconType } from "@/content";

/* ------------------------------------------------------------------ */
/* Sites de exemplo em português brasileiro                            */
/* ------------------------------------------------------------------ */

export interface SiteTheme {
  header: string;
  headerText: string;
  hero: string;
  heroText: string;
  muted: string;
  accent: string;
  accentText: string;
  card: string;
  cardText: string;
  cardValue: string;
}

export interface NicheSite {
  id: string;
  niche: string;
  icon: IconType;
  name: string;
  domain: string;
  nav: string[];
  tagline: string;
  sub: string;
  cta: string;
  cards: { title: string; value?: string }[];
  theme: SiteTheme;
}

export const BARBERSHOP: NicheSite = {
  id: "barbearia",
  niche: "Barbearia",
  icon: Scissors,
  name: "Barbearia Almeida",
  domain: "barbeariaalmeida.com.br",
  nav: ["Serviços", "Horários", "Contato"],
  tagline: "O corte que você merece, sem fila",
  sub: "Corte, barba e cuidado com hora marcada.",
  cta: "Agendar horário",
  cards: [
    { title: "Corte", value: "R$ 50" },
    { title: "Barba", value: "R$ 40" },
    { title: "Combo", value: "R$ 80" },
  ],
  theme: {
    header: "#171513",
    headerText: "#f6f1e7",
    hero: "#211e1a",
    heroText: "#f6f1e7",
    muted: "#cfc6b5",
    accent: "#c9a227",
    accentText: "#171513",
    card: "#f6f1e7",
    cardText: "#1c1a17",
    cardValue: "#8a6d12",
  },
};

export const ICE_CREAM_SHOP: NicheSite = {
  id: "sorveteria",
  niche: "Sorveteria",
  icon: IceCreamCone,
  name: "Gelato & Cia",
  domain: "gelatoecia.com.br",
  nav: ["Cardápio", "Sabores", "Contato"],
  tagline: "Sorvetes artesanais, feitos todos os dias",
  sub: "Sabores naturais, do campo para a sua casa.",
  cta: "Pedir pelo WhatsApp",
  cards: [
    { title: "Casquinha", value: "R$ 8" },
    { title: "Pote 500 ml", value: "R$ 28" },
    { title: "Milkshake", value: "R$ 18" },
  ],
  theme: {
    header: "#fff5f8",
    headerText: "#2b1b3d",
    hero: "#ffdfe9",
    heroText: "#2b1b3d",
    muted: "#6f6885",
    accent: "#128c7e",
    accentText: "#ffffff",
    card: "#fff5f8",
    cardText: "#2b1b3d",
    cardValue: "#c2185b",
  },
};

const PIZZERIA: NicheSite = {
  id: "pizzaria",
  niche: "Pizzaria",
  icon: Pizza,
  name: "Forno de Ouro",
  domain: "fornodeouro.com.br",
  nav: ["Cardápio", "Promoções", "Pedido"],
  tagline: "Pizza napolitana, direto do forno a lenha",
  sub: "Massa leve, ingredientes frescos e entrega rápida.",
  cta: "Pedir agora",
  cards: [
    { title: "Margherita", value: "R$ 49" },
    { title: "Calabresa", value: "R$ 52" },
    { title: "Portuguesa", value: "R$ 56" },
  ],
  theme: {
    header: "#b3261e",
    headerText: "#ffffff",
    hero: "#fff7ed",
    heroText: "#2a1a12",
    muted: "#7a5a48",
    accent: "#b3261e",
    accentText: "#ffffff",
    card: "#ffffff",
    cardText: "#2a1a12",
    cardValue: "#b3261e",
  },
};

const DENTAL_CLINIC: NicheSite = {
  id: "odontologia",
  niche: "Clínica odontológica",
  icon: Stethoscope,
  name: "Odonto Sorriso",
  domain: "odontosorriso.com.br",
  nav: ["Tratamentos", "Equipe", "Agendar"],
  tagline: "Cuide do seu sorriso com quem é especialista",
  sub: "Atendimento humanizado do primeiro contato ao acompanhamento.",
  cta: "Agendar avaliação",
  cards: [{ title: "Clareamento" }, { title: "Implantes" }, { title: "Ortodontia" }],
  theme: {
    header: "#0e7490",
    headerText: "#ffffff",
    hero: "#ecfeff",
    heroText: "#0f2a33",
    muted: "#4b6b75",
    accent: "#0e7490",
    accentText: "#ffffff",
    card: "#ffffff",
    cardText: "#0f2a33",
    cardValue: "#0e7490",
  },
};

const GYM: NicheSite = {
  id: "academia",
  niche: "Academia",
  icon: Dumbbell,
  name: "Academia Pulso",
  domain: "academiapulso.com.br",
  nav: ["Modalidades", "Planos", "Aula experimental"],
  tagline: "Treine no seu ritmo, com acompanhamento",
  sub: "Aulas em grupo e treino individual.",
  cta: "Agendar aula experimental",
  cards: [{ title: "Musculação" }, { title: "Funcional" }, { title: "Personal" }],
  theme: {
    header: "#111827",
    headerText: "#ffffff",
    hero: "#111827",
    heroText: "#ffffff",
    muted: "#9ca3af",
    accent: "#a3e635",
    accentText: "#111827",
    card: "#1f2937",
    cardText: "#ffffff",
    cardValue: "#a3e635",
  },
};

const PET_SHOP: NicheSite = {
  id: "petshop",
  niche: "Pet shop",
  icon: PawPrint,
  name: "Pet Amigo",
  domain: "petamigo.com.br",
  nav: ["Serviços", "Banho e tosa", "Contato"],
  tagline: "Cuidado completo para o seu melhor amigo",
  sub: "Banho, tosa, veterinário e produtos.",
  cta: "Agendar banho e tosa",
  cards: [{ title: "Banho e tosa" }, { title: "Veterinário" }, { title: "Pet food" }],
  theme: {
    header: "#7c2d12",
    headerText: "#fff7ed",
    hero: "#fff7ed",
    heroText: "#431407",
    muted: "#8a5a44",
    accent: "#ea580c",
    accentText: "#ffffff",
    card: "#ffffff",
    cardText: "#431407",
    cardValue: "#c2410c",
  },
};

const LAW_FIRM: NicheSite = {
  id: "advocacia",
  niche: "Advocacia",
  icon: Scale,
  name: "Rocha & Lima Advogados",
  domain: "rochaelima.adv.br",
  nav: ["Áreas", "Equipe", "Contato"],
  tagline: "Atendimento jurídico claro e próximo",
  sub: "Análise do seu caso sem juridiquês.",
  cta: "Falar com um advogado",
  cards: [{ title: "Trabalhista" }, { title: "Família" }, { title: "Empresarial" }],
  theme: {
    header: "#0b1f3a",
    headerText: "#f1e9d2",
    hero: "#0b1f3a",
    heroText: "#f1e9d2",
    muted: "#9fb0c8",
    accent: "#c9a227",
    accentText: "#0b1f3a",
    card: "#f1e9d2",
    cardText: "#0b1f3a",
    cardValue: "#8a6d12",
  },
};

export const COFFEE_SHOP: NicheSite = {
  id: "cafe",
  niche: "Cafeteria",
  icon: Coffee,
  name: "Café do Centro",
  domain: "cafedocentro.com.br",
  nav: ["Cardápio", "Sobre", "Contato"],
  tagline: "Café fresco, torrado na casa",
  sub: "Grãos especiais, drinks e bolos caseiros.",
  cta: "Ver o cardápio",
  cards: [
    { title: "Espresso", value: "R$ 7" },
    { title: "Latte", value: "R$ 13" },
    { title: "Bolo do dia", value: "R$ 14" },
  ],
  theme: {
    header: "#3b2314",
    headerText: "#fdf6ec",
    hero: "#fdf6ec",
    heroText: "#3b2314",
    muted: "#7c5a44",
    accent: "#9a3412",
    accentText: "#ffffff",
    card: "#ffffff",
    cardText: "#3b2314",
    cardValue: "#9a3412",
  },
};

/** Primeira versão genérica, como costuma sair da IA antes da personalização. */
export const GENERIC_SITE: NicheSite = {
  id: "generico",
  niche: "Versão inicial",
  icon: ImageIcon,
  name: "Minha Empresa",
  domain: "minhaempresa.com.br",
  nav: ["Início", "Página 1", "Página 2"],
  tagline: "Bem-vindo ao nosso site",
  sub: "Aqui vai o texto sobre a sua empresa.",
  cta: "Saiba mais",
  cards: [{ title: "Serviço 1" }, { title: "Serviço 2" }, { title: "Serviço 3" }],
  theme: {
    header: "#e5e7eb",
    headerText: "#374151",
    hero: "#f3f4f6",
    heroText: "#374151",
    muted: "#6b7280",
    accent: "#3b82f6",
    accentText: "#ffffff",
    card: "#ffffff",
    cardText: "#374151",
    cardValue: "#3b82f6",
  },
};

export const NICHE_SITES: NicheSite[] = [
  BARBERSHOP,
  ICE_CREAM_SHOP,
  PIZZERIA,
  DENTAL_CLINIC,
  GYM,
  PET_SHOP,
  LAW_FIRM,
  COFFEE_SHOP,
];

/* ------------------------------------------------------------------ */
/* Missão 02 — anatomia do prompt                                      */
/* ------------------------------------------------------------------ */

const HIGHLIGHT = ["#ffd166", "#ff6cb0", "#d8b4fe", "#7af0ff", "#ff9a4d"];

/** Cor que liga uma parte do prompt ao item correspondente da lista. */
export function highlightColor(n: number): string {
  return HIGHLIGHT[(n - 1) % HIGHLIGHT.length];
}

export const PROMPT_PARTS: { n?: number; text: string }[] = [
  { text: "Crie um site para uma sorveteria com as características abaixo. " },
  { n: 1, text: "Objetivo: apresentar os sorvetes e receber pedidos pelo WhatsApp. " },
  { n: 2, text: "Nome da empresa: Gelato & Cia. " },
  { n: 3, text: "Identidade visual: artesanal, leve e acolhedora. " },
  { n: 4, text: "Cores: rosa, verde-pistache e creme. " },
  { n: 5, text: "Estilo de design: moderno, com fotos grandes. " },
  { n: 6, text: "Estrutura das páginas: Início, Cardápio, Nossa história e Contato. " },
  { n: 7, text: "Textos: tom amigável e próximo. " },
  { n: 8, text: "Imagens: fotos dos sorvetes e da loja. " },
  { n: 9, text: "Funcionalidades: cardápio com preços e botão de pedido. " },
  { n: 10, text: "Botões de contato: WhatsApp fixo em todas as páginas." },
];

export const PROMPT_FIELDS = [
  { n: 1, label: "Objetivo do site", example: "Apresentar os sorvetes e receber pedidos" },
  { n: 2, label: "Nome da empresa", example: "Gelato & Cia" },
  { n: 3, label: "Identidade visual", example: "Artesanal, leve e acolhedora" },
  { n: 4, label: "Cores", example: "Rosa, verde-pistache e creme" },
  { n: 5, label: "Estilo de design", example: "Moderno, com fotos grandes" },
  { n: 6, label: "Estrutura das páginas", example: "Início, Cardápio, Nossa história e Contato" },
  { n: 7, label: "Textos", example: "Tom amigável e próximo" },
  { n: 8, label: "Imagens", example: "Fotos dos sorvetes e da loja" },
  { n: 9, label: "Funcionalidades", example: "Cardápio com preços e botão de pedido" },
  { n: 10, label: "Botões de contato", example: "WhatsApp fixo em todas as páginas" },
];

export const PROMPT_TIPS = [
  "Escreva como se explicasse para uma pessoa: objetivo, público e o que o visitante deve fazer no site.",
  "Cite referências de sites que você gosta para orientar o estilo.",
  "Detalhe cores, tom dos textos e tipos de imagem. Quanto mais claro o comando, menos ajustes depois.",
];

/* ------------------------------------------------------------------ */
/* Missão 04 — personalização                                          */
/* ------------------------------------------------------------------ */

export const PERSONALIZE_CHECKS = [
  {
    icon: Palette,
    title: "Cores e fontes",
    text: "Aplicar as cores da marca em títulos, botões e links.",
  },
  {
    icon: PenLine,
    title: "Textos",
    text: "Trocar textos genéricos por informações reais do negócio.",
  },
  {
    icon: ImageIcon,
    title: "Imagens e logo",
    text: "Substituir ilustrações padrão por fotos do espaço e pela logo.",
  },
  {
    icon: MapPin,
    title: "Informações",
    text: "Incluir endereço, horários e formas de contato.",
  },
  {
    icon: LayoutList,
    title: "Ordem das seções",
    text: "Colocar primeiro o que o cliente procura: serviço, preço e contato.",
  },
];

export const ADJUST_PROMPTS = [
  "Use o marrom e o creme da marca em todo o site.",
  "Encurte os textos da página inicial e vá direto ao ponto.",
  "Troque as ilustrações por fotos do espaço e dos produtos.",
  "Adicione horário de funcionamento e endereço no rodapé.",
  "Deixe o botão de WhatsApp visível em todas as páginas.",
];

export const FINISH_CHECKLIST = [
  "Todas as informações são reais e estão atualizadas?",
  "As cores seguem a identidade visual da marca?",
  "Os textos foram revisados, sem erros de português?",
  "O botão de contato está instalado e funciona?",
  "O site tem boa aparência no celular?",
];
