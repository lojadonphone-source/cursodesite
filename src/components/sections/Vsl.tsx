import { ArrowRight, Check } from "lucide-react";
import { BuyButton } from "@/components/ui/Buttons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VslPlayer } from "@/components/sections/VslPlayer";

const HIGHLIGHTS = [
  "Por que você não precisa ser programador nem designer",
  "Como orientar a IA para criar estruturas, textos e layouts",
  "O caminho da ideia inicial até a publicação na internet",
];

const STEPS = ["Ideia", "Prompt", "Site", "Publicado"];

export function Vsl() {
  return (
    <section id="video" className="relative isolate overflow-hidden border-t border-white/5 py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[28rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(59_130_246/0.14),transparent)]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Apresentação"
          title={
            <>
              Assista e descubra como criar seu <span className="grad-text-sky">primeiro site com IA</span>
            </>
          }
          text={
            <>
              <p>Você não precisa ser programador, designer ou especialista em tecnologia.</p>
              <p>
                Neste treinamento, você vai aprender um processo simples e prático para utilizar a inteligência
                artificial na criação de sites profissionais, desde a ideia inicial até a publicação na internet.
              </p>
            </>
          }
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-10">
          {/* O que você vai ver */}
          <Reveal className="hidden lg:block">
            <div className="surface-glass relative ms-auto max-w-sm rounded-3xl p-6">
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-electric-300">
                O que você vai ver no vídeo
              </h3>
              <ul className="mt-5 space-y-4">
                {HIGHLIGHTS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-snug text-mist-100">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-cta-500/15 text-cta-400 ring-1 ring-inset ring-cta-400/40">
                      <Check className="size-3" strokeWidth={3} aria-hidden />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Player */}
          <Reveal delay={120} className="flex flex-col items-center">
            <p className="mb-5 flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.18em] text-electric-300">
              <span className="flex size-6 items-center justify-center rounded-full bg-electric-500/20">
                <span className="ml-0.5 size-0 border-y-[4px] border-l-[6px] border-y-transparent border-l-electric-300" />
              </span>
              Dê o play e veja como funciona
            </p>
            <VslPlayer />
          </Reveal>

          {/* Frase + percurso */}
          <Reveal delay={200} className="hidden lg:block">
            <figure className="surface-glass relative max-w-sm rounded-3xl p-6">
              <blockquote className="text-lg font-medium leading-relaxed text-mist-100">
                “Você não precisa ser programador, designer ou especialista em tecnologia.”
              </blockquote>
              <figcaption className="mt-6 font-display text-xs font-bold uppercase tracking-[0.14em] text-mist-500">
                O percurso que você vai aprender
              </figcaption>
              <ol className="mt-3 flex flex-wrap items-center gap-2 text-xs font-semibold text-mist-100">
                {STEPS.map((step, index) => (
                  <li key={step} className="flex items-center gap-2">
                    <span className="rounded-full border border-white/10 bg-ink-900/80 px-3 py-1.5">{step}</span>
                    {index < STEPS.length - 1 && (
                      <ArrowRight aria-hidden className="size-3.5 text-electric-400" />
                    )}
                  </li>
                ))}
              </ol>
            </figure>
          </Reveal>
        </div>

        <Reveal delay={160} className="mt-14 flex flex-col items-center px-5 sm:px-0">
          <BuyButton size="xl" className="w-full max-w-xl">
            Quero aprender esse método
          </BuyButton>
          <p className="mt-4 text-sm text-mist-500">Compra segura • Garantia de 7 dias</p>
        </Reveal>
      </div>
    </section>
  );
}
