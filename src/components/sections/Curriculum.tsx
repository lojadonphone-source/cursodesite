import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils/cn";
import { PRICING } from "@/config";
import { BuyButton } from "@/components/ui/Buttons";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";

interface Module {
  title: string;
  paragraphs: string[];
  items?: string[];
  note?: string;
}

const MODULES: Module[] = [
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

const CHIPS = ["8 módulos", "Videoaulas práticas", "Do zero à publicação"];

interface AccordionItemProps {
  module: Module;
  index: number;
  open: boolean;
  onToggle: () => void;
}

function AccordionItem({ module, index, open, onToggle }: AccordionItemProps) {
  const number = String(index + 1).padStart(2, "0");
  const buttonId = `modulo-${index + 1}-botao`;
  const panelId = `modulo-${index + 1}-painel`;

  return (
    <div className={cn("rounded-2xl transition-colors duration-300", open && "bg-white/[0.04]")}>
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center gap-4 rounded-2xl p-4 text-left transition-colors duration-200 hover:bg-white/[0.04] sm:gap-5 sm:p-5"
        >
          <span
            className={cn(
              "flex size-11 shrink-0 items-center justify-center rounded-xl border font-display text-sm font-bold tabular-nums transition-colors duration-300",
              open
                ? "border-electric-500/50 bg-electric-500/20 text-electric-300"
                : "border-white/10 bg-white/[0.04] text-mist-300",
            )}
          >
            {number}
          </span>
          <span className="flex-1 font-display text-base font-bold uppercase leading-snug tracking-tight text-mist-100 sm:text-[17px]">
            {module.title}
          </span>
          <span
            className={cn(
              "flex size-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300",
              open ? "border-electric-500/50 text-electric-300" : "border-white/10 text-mist-300",
            )}
          >
            <ChevronDown
              aria-hidden
              className={cn("size-4 transition-transform duration-300 ease-out", open && "rotate-180")}
            />
          </span>
        </button>
      </h3>

      <div id={panelId} role="region" aria-labelledby={buttonId} aria-hidden={!open} className="accordion-panel" data-open={open}>
        <div>
          <div className="pb-5 pl-[76px] pr-4 sm:pl-[84px] sm:pr-5">
            {module.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-[15px] leading-relaxed text-mist-300 first:mt-0">
                {paragraph}
              </p>
            ))}
            {module.items && (
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {module.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-snug text-mist-100">
                    <span aria-hidden className="mt-[7px] size-1.5 shrink-0 rounded-full bg-electric-400" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {module.note && (
              <p className="mt-4 rounded-xl border border-electric-500/25 bg-electric-500/10 px-4 py-3 text-sm leading-snug text-electric-300">
                {module.note}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Curriculum() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="conteudo" className="relative border-y border-white/5 bg-ink-900/50 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* Coluna de apresentação */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal className="block">
            <Eyebrow>Conteúdo do curso</Eyebrow>
          </Reveal>
          <Reveal
            as="h2"
            delay={80}
            className="mt-5 font-display text-[1.75rem] font-extrabold uppercase leading-[1.12] tracking-tight text-mist-100 sm:text-[2.25rem] lg:text-[2.5rem]"
          >
            Conheça o conteúdo do <span className="grad-text-sky">curso</span>
          </Reveal>
          <Reveal as="p" delay={160} className="mt-5 text-base leading-relaxed text-mist-300 sm:text-lg">
            Oito módulos em videoaulas práticas, organizados na ordem em que você vai aplicar: do primeiro prompt
            até o site publicado.
          </Reveal>

          <Reveal delay={220} className="mt-6 flex flex-wrap gap-2">
            {CHIPS.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-mist-100"
              >
                {chip}
              </span>
            ))}
          </Reveal>

          <Reveal delay={280} className="mt-8">
            <div className="rounded-3xl border border-white/10 bg-ink-800/80 p-6 shadow-card">
              <p className="text-sm text-mist-300">Tudo isso pelo preço de Black Friday:</p>
              <p className="mt-1 font-display text-2xl font-extrabold tabular-nums text-mist-100">
                {PRICING.installments}x de {PRICING.installment}
                <span className="block whitespace-nowrap text-sm font-semibold text-mist-500 sm:ms-2 sm:inline">
                  ou {PRICING.cash} à vista
                </span>
              </p>
              <BuyButton className="mt-5 w-full" size="md">
                Quero garantir meu acesso
              </BuyButton>
            </div>
          </Reveal>
        </div>

        {/* Módulos */}
        <ul className="rounded-3xl border border-white/10 bg-ink-900/80 p-2 shadow-card sm:p-3">
          {MODULES.map((module, index) => (
            <Reveal as="li" key={module.title} delay={Math.min(index, 4) * 50}>
              <AccordionItem
                module={module}
                index={index}
                open={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
