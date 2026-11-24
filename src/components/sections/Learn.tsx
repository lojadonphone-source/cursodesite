import type { ComponentType } from "react";
import {
  AtSign,
  Bot,
  ImageIcon,
  Layers,
  LayoutTemplate,
  MessageSquareText,
  Server,
  Smartphone,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Topic {
  icon: ComponentType<{ className?: string }>;
  title: string;
  text: string;
}

const TOPICS: Topic[] = [
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

export function Learn() {
  return (
    <section id="aprender" className="relative isolate py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-10%] top-1/3 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(closest-side,rgb(139_92_246/0.1),transparent)]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="O que você vai aprender"
          title={
            <>
              Do zero até seu site <span className="grad-text-violet">publicado na internet</span>
            </>
          }
          text="Um treinamento direto ao ponto para você aprender as principais etapas da criação de um site profissional utilizando inteligência artificial."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TOPICS.map(({ icon: Icon, title, text }, index) => (
            <Reveal as="li" key={title} delay={(index % 3) * 70} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-800/70 p-6 shadow-card transition duration-300 ease-out hover:-translate-y-1 hover:border-electric-500/40">
                <div
                  aria-hidden
                  className="absolute -right-12 -top-12 size-40 rounded-full bg-[radial-gradient(closest-side,rgb(59_130_246/0.3),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className="relative flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-linear-to-br from-electric-500/25 to-violet-500/25 text-electric-300 ring-1 ring-inset ring-white/10">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <span className="font-display text-sm font-bold tabular-nums text-mist-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="relative mt-5 font-display text-lg font-bold uppercase leading-snug tracking-tight text-mist-100">
                  {title}
                </h3>
                <p className="relative mt-3 text-[15px] leading-relaxed text-mist-300">{text}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
