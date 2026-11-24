import type { ReactNode } from "react";
import { Check, Lock, Monitor, MousePointerClick, Play, Smartphone, Sparkles, Tablet } from "lucide-react";
import aulaImg from "@/assets/vice/aula.jpg";
import { Reveal } from "@/components/ui/Reveal";
import { Sticker } from "@/components/vice/ui";
import { SectionHead } from "@/components/vice/SectionHead";
import { WhatsAppIcon } from "@/components/ui/Icons";

/** Painel padrão das ilustrações de cada etapa. */
function Panel({ children }: { children: ReactNode }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-white/12 bg-vice-800 shadow-[0_24px_50px_-24px_rgba(0,0,0,0.9)]">
      {children}
    </div>
  );
}

function WatchVisual() {
  return (
    <Panel>
      <img src={aulaImg} width={800} height={600} alt="" className="absolute inset-0 size-full object-cover" loading="lazy" decoding="async" />
      <div className="absolute inset-0 bg-linear-to-t from-vice-950/90 via-transparent to-vice-950/10" />
      <Sticker tone="orange" className="absolute left-3 top-3 -rotate-3">
        <Play className="size-3 fill-current" aria-hidden />
        Aula prática
      </Sticker>
      <div className="absolute inset-x-3 bottom-3 h-1 overflow-hidden rounded-full bg-white/30">
        <div className="h-full w-[62%] rounded-full bg-sunset-300" />
      </div>
    </Panel>
  );
}

function ApplyVisual() {
  return (
    <Panel>
      <div className="flex h-full flex-col justify-center gap-2.5 p-3 text-left">
        <p className="ml-auto w-[82%] rounded-2xl rounded-br-md bg-hot-500 px-3 py-2 text-[12px] font-medium leading-snug text-white">
          Crie um site para uma sorveteria…
        </p>
        <div className="flex items-start gap-2">
          <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-purple-500 to-hot-500">
            <Sparkles className="size-3.5" aria-hidden />
          </span>
          <div className="min-w-0 rounded-2xl rounded-tl-md border border-white/12 bg-white/[0.07] px-3 py-2 text-[12px] leading-snug text-cream">
            Estrutura criada: Início · Cardápio · Contato
            <span className="mt-1.5 flex flex-wrap gap-1.5">
              {["Hero", "Menu", "WhatsApp"].map((tag) => (
                <span key={tag} className="rounded-md bg-purple-500/30 px-2 py-0.5 text-[11px] font-semibold text-purple-200">
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
      <div className="flex h-full gap-3 p-3">
        <div className="flex flex-1 flex-col gap-2 rounded-xl bg-white/[0.06] p-2.5">
          <div className="flex items-center justify-between">
            <span className="h-2.5 w-1/3 rounded bg-white/30" />
            <span className="flex gap-1.5">
              <span className="h-2 w-5 rounded bg-white/20" />
              <span className="h-2 w-5 rounded bg-white/20" />
            </span>
          </div>
          <div className="flex flex-[2] items-end rounded-lg bg-linear-to-br from-sunset-400 to-hot-500 p-2.5">
            <div>
              <div className="h-2 w-20 rounded bg-white/90" />
              <div className="mt-1.5 h-2 w-12 rounded bg-white/60" />
            </div>
          </div>
          <div className="grid flex-1 grid-cols-3 gap-2">
            <div className="rounded-md bg-white/12" />
            <div className="rounded-md bg-white/12" />
            <div className="rounded-md bg-white/12" />
          </div>
        </div>
        <div className="flex w-[30%] flex-col gap-2.5 rounded-xl border border-white/12 bg-white/[0.06] p-2.5">
          <div>
            <div className="h-1.5 w-3/4 rounded bg-white/25" />
            <div className="mt-2 flex gap-1">
              <span className="size-2.5 rounded-full bg-sunset-300" />
              <span className="size-2.5 rounded-full bg-hot-500" />
              <span className="size-2.5 rounded-full bg-neon-400" />
            </div>
          </div>
          <div className="h-1.5 w-full rounded bg-white/15" />
          <div className="h-1.5 w-2/3 rounded bg-white/15" />
          <div className="h-1.5 w-full rounded bg-white/15" />
          <div className="mt-auto flex h-6 items-center justify-center rounded-md bg-cta-500/85">
            <span className="h-1.5 w-2/3 rounded bg-white/85" />
          </div>
        </div>
      </div>
      <span className="absolute bottom-3 right-3 flex size-8 items-center justify-center rounded-full border-2 border-vice-950 bg-sunset-300 text-vice-950 shadow-[2px_2px_0_0_#0d0517]">
        <MousePointerClick className="size-4" aria-hidden />
      </span>
    </Panel>
  );
}

function PublishVisual() {
  return (
    <Panel>
      <div className="flex h-full flex-col p-3">
        <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3 py-1.5 text-[12px] text-sand-300">
          <Lock className="size-3.5 shrink-0 text-cta-400" aria-hidden />
          <span className="truncate">www.suaempresa.com.br</span>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-2 text-center">
          <span className="flex size-11 items-center justify-center rounded-full bg-cta-500/25 text-cta-400 ring-1 ring-cta-400/60">
            <Check className="size-5" strokeWidth={3} aria-hidden />
          </span>
          <p className="font-poster text-xl uppercase leading-none text-cream">Site no ar</p>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#128c7e] px-3 py-1.5 text-[11px] font-semibold text-white">
            <WhatsAppIcon className="size-3.5" />
            Botão de WhatsApp ativo
          </span>
        </div>
        <div className="flex items-center justify-center gap-4 text-sand-500">
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

/** "Você aprende fazendo" — a sequência do treinamento. */
export function Method() {
  return (
    <section id="metodo" className="relative isolate overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[20%] top-0 -z-10 size-[36rem] rounded-full bg-[radial-gradient(closest-side,rgb(40_224_255/0.1),transparent)]"
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead
          kicker="Sequência do treinamento"
          tone="cyan"
          title={
            <>
              Você aprende <span className="grad-hot">fazendo</span>
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
            <Reveal as="li" key={step.title} delay={index * 90} className="relative">
              <div className="flex items-center gap-3">
                <span className="grad-sunset font-poster text-5xl leading-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {index < STEPS.length - 1 && (
                  <span
                    aria-hidden
                    className="h-0.5 flex-1 rounded-full bg-linear-to-r from-hot-500/70 to-transparent"
                  />
                )}
              </div>
              <div className="mt-4">{step.visual}</div>
              <h3 className="mt-4 font-poster text-2xl uppercase leading-none text-cream">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-sand-300">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
