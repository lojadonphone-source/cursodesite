import type { ReactNode } from "react";
import {
  Check,
  Lock,
  Monitor,
  MousePointerClick,
  Play,
  Smartphone,
  Sparkles,
  Tablet,
} from "lucide-react";
import aprendendoImg from "@/assets/aprendendo.jpg";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppIcon } from "@/components/ui/Icons";

/** Painel padrão das ilustrações de cada etapa. */
function Panel({ children }: { children: ReactNode }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#0a1020] shadow-card">
      {children}
    </div>
  );
}

function WatchVisual() {
  return (
    <Panel>
      <img
        src={aprendendoImg}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-ink-950/95 via-ink-950/25 to-ink-950/10" />
      <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-ink-950/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-mist-100 backdrop-blur-md">
        <span className="size-1.5 rounded-full bg-cta-400" />
        Aula prática
      </span>
      <span className="absolute inset-0 m-auto flex size-12 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30 backdrop-blur-md">
        <Play className="size-5 translate-x-0.5 fill-white text-white" aria-hidden />
      </span>
      <div className="absolute inset-x-3 bottom-3 h-1 overflow-hidden rounded-full bg-white/25">
        <div className="h-full w-[62%] rounded-full bg-electric-400" />
      </div>
    </Panel>
  );
}

function ApplyVisual() {
  return (
    <Panel>
      <div className="flex h-full flex-col justify-center gap-2.5 p-3 text-left">
        <p className="ml-auto w-[82%] rounded-2xl rounded-br-md bg-electric-500 px-3 py-2 text-[12px] leading-snug text-white">
          Crie um site para uma sorveteria…
        </p>
        <div className="flex items-start gap-2">
          <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-violet-500 to-electric-500">
            <Sparkles className="size-3.5" aria-hidden />
          </span>
          <div className="min-w-0 rounded-2xl rounded-tl-md border border-white/10 bg-white/5 px-3 py-2 text-[12px] leading-snug text-mist-100">
            Estrutura criada: Início · Cardápio · Contato
            <span className="mt-1.5 flex flex-wrap gap-1.5">
              {["Hero", "Menu", "WhatsApp"].map((tag) => (
                <span key={tag} className="rounded-md bg-violet-500/20 px-2 py-0.5 text-[11px] font-semibold text-[#c4b5fd]">
                  {tag}
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>
    </Panel>
  );
}

function CreateVisual() {
  return (
    <Panel>
      <div className="flex h-full gap-3 p-4">
        <div className="flex flex-1 flex-col gap-2 rounded-xl bg-white/[0.04] p-2.5">
          <div className="flex items-center justify-between">
            <span className="h-2.5 w-1/3 rounded bg-white/25" />
            <span className="flex gap-1.5">
              <span className="h-2 w-5 rounded bg-white/15" />
              <span className="h-2 w-5 rounded bg-white/15" />
            </span>
          </div>
          <div className="flex flex-[2] items-end rounded-lg bg-linear-to-br from-electric-500/75 to-violet-500/75 p-2.5">
            <div>
              <div className="h-2 w-20 rounded bg-white/85" />
              <div className="mt-1.5 h-2 w-12 rounded bg-white/50" />
            </div>
          </div>
          <div className="grid flex-1 grid-cols-3 gap-2">
            <div className="rounded-md bg-white/10" />
            <div className="rounded-md bg-white/10" />
            <div className="rounded-md bg-white/10" />
          </div>
        </div>
        <div className="flex w-[30%] flex-col gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
          <div>
            <div className="h-1.5 w-3/4 rounded bg-white/20" />
            <div className="mt-2 flex gap-1">
              <span className="size-2.5 rounded-full bg-[#5b9dff]" />
              <span className="size-2.5 rounded-full bg-[#8b5cf6]" />
              <span className="size-2.5 rounded-full bg-[#22d3ee]" />
            </div>
          </div>
          <div className="h-1.5 w-full rounded bg-white/15" />
          <div className="h-1.5 w-2/3 rounded bg-white/15" />
          <div className="h-1.5 w-full rounded bg-white/15" />
          <div className="mt-auto flex h-6 items-center justify-center rounded-md bg-cta-500/80">
            <span className="h-1.5 w-2/3 rounded bg-white/80" />
          </div>
        </div>
      </div>
      <span className="absolute bottom-3 right-3 flex size-8 items-center justify-center rounded-full bg-ink-950/90 text-electric-300 ring-1 ring-electric-500/50">
        <MousePointerClick className="size-4" aria-hidden />
      </span>
    </Panel>
  );
}

function PublishVisual() {
  return (
    <Panel>
      <div className="flex h-full flex-col p-4">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[12px] text-mist-300">
          <Lock className="size-3.5 shrink-0 text-cta-400" aria-hidden />
          <span className="truncate">www.suaempresa.com.br</span>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-2.5 text-center">
          <span className="flex size-12 items-center justify-center rounded-full bg-cta-500/20 text-cta-400 ring-1 ring-cta-400/50">
            <Check className="size-6" strokeWidth={3} aria-hidden />
          </span>
          <p className="font-display text-sm font-bold uppercase tracking-wide text-mist-100">Site no ar</p>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#128c7e] px-3 py-1.5 text-[11px] font-semibold text-white">
            <WhatsAppIcon className="size-3.5" />
            Botão de WhatsApp ativo
          </span>
        </div>
        <div className="flex items-center justify-center gap-4 text-mist-500">
          <Smartphone className="size-4" aria-hidden />
          <Tablet className="size-4" aria-hidden />
          <Monitor className="size-4" aria-hidden />
        </div>
      </div>
    </Panel>
  );
}

const STEPS = [
  {
    title: "Assista",
    text: "Acompanhe as aulas com explicações simples, sem termos técnicos desnecessários.",
    visual: <WatchVisual />,
  },
  {
    title: "Aplique",
    text: "Escreva seus prompts e oriente a IA junto com cada passo da aula.",
    visual: <ApplyVisual />,
  },
  {
    title: "Crie",
    text: "Veja seu site ganhar forma: estrutura, textos, imagens e botões de contato.",
    visual: <CreateVisual />,
  },
  {
    title: "Publique",
    text: "Coloque o projeto no ar com hospedagem gratuita e compartilhe o link.",
    visual: <PublishVisual />,
  },
];

export function Method() {
  return (
    <section id="metodo" className="relative isolate overflow-hidden border-y border-white/5 py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-10%] top-0 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(closest-side,rgb(59_130_246/0.12),transparent)]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Método prático"
          title={
            <>
              Você aprende <span className="grad-text-sky">fazendo</span>
            </>
          }
          text={
            <>
              <p>Nada de ficar horas assistindo conteúdos complicados e cheios de termos técnicos.</p>
              <p>
                O treinamento foi pensado para quem está começando e precisa de explicações simples, objetivas e
                práticas.
              </p>
              <p>Você acompanha o passo a passo e aprende aplicando.</p>
            </>
          }
        />

        <ol className="mt-14 grid gap-10 lg:grid-cols-4 lg:gap-6">
          {STEPS.map((step, index) => (
            <li key={step.title} className="relative lg:flex lg:flex-col lg:items-center">
              {/* Ligação entre as etapas (telas grandes) */}
              {index < STEPS.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-1/2 top-5 hidden h-px w-[calc(100%+1.5rem)] bg-linear-to-r from-electric-500/70 to-violet-500/70 lg:block"
                />
              )}
              {/* Ligação entre as etapas (celular) */}
              {index < STEPS.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-5 top-12 h-[calc(100%-0.5rem)] w-px bg-linear-to-b from-electric-500/60 to-violet-500/60 lg:hidden"
                />
              )}

              <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-electric-500/50 bg-ink-900 font-display text-sm font-bold text-electric-300 lg:static">
                {index + 1}
              </span>

              <Reveal delay={index * 90} className="mt-5 pl-14 lg:mt-6 lg:w-full lg:pl-0">
                {step.visual}
                <h3 className="mt-5 font-display text-lg font-extrabold uppercase tracking-wide text-mist-100">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-mist-300">{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
