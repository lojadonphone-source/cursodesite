import { Check, Gift } from "lucide-react";
import { LogoMark, LogoSample } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const LOGO_ITEMS = [
  "Como criar prompts para logos",
  "Como gerar ideias de identidade visual",
  "Como escolher a melhor proposta",
  "Como aplicar a logomarca no seu site",
];

const BRIEFING_ITEMS = [
  "Nome e segmento da empresa",
  "Objetivo do site",
  "Páginas e seções",
  "Informações de contato",
  "Referências visuais",
];

const BRIEFING_HELP = [
  "Entender o que perguntar ao cliente",
  "Saber quais informações coletar",
  "Organizar os detalhes do projeto antes de iniciar o site",
];

/** Ícone de confirmação no tom violeta, usado nos bônus. */
function CheckBulletViolet() {
  return (
    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-violet-500/25 text-[#c4b5fd] ring-1 ring-inset ring-violet-400/40">
      <Check className="size-3" strokeWidth={3} aria-hidden />
    </span>
  );
}

/** Ícone de faísca alinhado à primeira linha do texto. */
function SparklesLine() {
  return (
    <svg viewBox="0 0 16 16" className="mt-0.5 size-4 shrink-0 fill-[#c4b5fd]" aria-hidden focusable="false">
      <path d="M8 1l1.7 4.6L14.3 7.3 9.7 9 8 13.6 6.3 9 1.7 7.3l4.6-1.7z" />
    </svg>
  );
}

function BonusRibbon({ number }: { number: number }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-linear-to-r from-violet-500 to-electric-500 px-3.5 py-1.5 font-display text-xs font-bold uppercase tracking-[0.14em] text-white">
      <Gift className="size-4" aria-hidden />
      Bônus {number}
    </span>
  );
}

function IncludedChip() {
  return (
    <p className="inline-flex items-center gap-2 self-start rounded-full border border-cta-500/30 bg-cta-500/10 px-3.5 py-1.5 text-xs font-semibold text-cta-400">
      <Check className="size-3.5" strokeWidth={3} aria-hidden />
      Incluso no curso
    </p>
  );
}

export function Bonus() {
  return (
    <section id="bonus" className="relative isolate py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(139_92_246/0.12),transparent)]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Bônus exclusivos"
          title={
            <>
              Bônus que já estão <span className="grad-text-violet">inclusos no curso</span>
            </>
          }
          text="Além do treinamento completo, você recebe materiais complementares para ir além da criação do site."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Bônus 1 */}
          <Reveal className="h-full">
            <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-violet-400/25 bg-linear-to-b from-violet-500/10 via-ink-800/70 to-ink-900/70 p-6 shadow-card transition duration-300 ease-out hover:-translate-y-1 hover:border-violet-400/50 sm:p-8">
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-violet-400/80 to-transparent"
              />
              <BonusRibbon number={1} />

              <div className="mt-6 rounded-2xl border border-white/10 bg-ink-950/60 p-4">
                <p className="flex items-start gap-2 text-xs leading-relaxed text-mist-300">
                  <SparklesLine />
                  “Logo minimalista para uma sorveteria artesanal, em tons pastel…”
                </p>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((variant) => {
                    const selected = variant === 2;
                    return (
                      <div
                        key={variant}
                        className={
                          selected
                            ? "relative flex aspect-square items-center justify-center rounded-xl border border-cta-400 bg-white/[0.06]"
                            : "flex aspect-square items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-colors duration-200 group-hover:bg-white/[0.07]"
                        }
                      >
                        <LogoSample variant={variant as 1 | 2 | 3} className="size-3/5" />
                        {selected && (
                          <span className="absolute right-1.5 top-1.5 flex size-5 items-center justify-center rounded-full bg-cta-500 text-white">
                            <Check className="size-3" strokeWidth={3} aria-hidden />
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-mist-500">
                  Opções geradas com IA
                </p>
              </div>

              <h3 className="mt-6 font-display text-xl font-extrabold uppercase leading-tight tracking-tight text-mist-100 sm:text-2xl">
                Crie sua logomarca com inteligência artificial
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-mist-300">
                Aprenda a utilizar ChatGPT e Gemini para criar ideias e prompts para uma logomarca profissional.
              </p>
              <p className="mt-4 text-sm font-semibold text-mist-100">Você aprenderá:</p>
              <ul className="mt-3 space-y-2.5">
                {LOGO_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-snug text-mist-300">
                    <CheckBulletViolet />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <IncludedChip />
              </div>
            </article>
          </Reveal>

          {/* Bônus 2 */}
          <Reveal delay={120} className="h-full">
            <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-violet-400/25 bg-linear-to-b from-violet-500/10 via-ink-800/70 to-ink-900/70 p-6 shadow-card transition duration-300 ease-out hover:-translate-y-1 hover:border-violet-400/50 sm:p-8">
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-violet-400/80 to-transparent"
              />
              <BonusRibbon number={2} />

              <div className="mt-6 grid grid-cols-[auto_1fr] items-center gap-5 rounded-2xl border border-white/10 bg-ink-950/60 p-4 sm:p-5">
                <div className="relative aspect-[3/4] w-28 shrink-0 overflow-hidden rounded-r-xl rounded-l-[3px] bg-linear-to-br from-[#1e3a8a] via-[#312e81] to-[#0c1022] shadow-[12px_18px_40px_-12px_rgba(0,0,0,0.95)] sm:w-32">
                  <span
                    aria-hidden
                    className="absolute inset-y-0 left-0 w-[5px] bg-linear-to-r from-white/35 to-transparent"
                  />
                  <div className="flex h-full flex-col p-3 pl-4">
                    <LogoMark className="size-7" />
                    <p className="mt-3 font-display text-[10px] font-bold uppercase tracking-[0.2em] text-electric-300">
                      Ebook
                    </p>
                    <p className="mt-1 font-display text-[11px] font-extrabold uppercase leading-tight text-white sm:text-[13px]">
                      Briefing para vender sites
                    </p>
                    <p className="mt-auto text-[9px] leading-snug text-mist-300">Criação de Sites com IA do Zero</p>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {BRIEFING_ITEMS.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm leading-snug text-mist-100">
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-md bg-violet-500/20 text-[#c4b5fd]">
                        <Check className="size-3" strokeWidth={3} aria-hidden />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <h3 className="mt-6 font-display text-xl font-extrabold uppercase leading-tight tracking-tight text-mist-100 sm:text-2xl">
                Ebook Briefing para vender sites
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-mist-300">
                Aprenda a organizar as informações necessárias para criar sites para empresas e clientes.
              </p>
              <p className="mt-4 text-sm font-semibold text-mist-100">Um material para ajudar você a:</p>
              <ul className="mt-3 space-y-2.5">
                {BRIEFING_HELP.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-snug text-mist-300">
                    <CheckBulletViolet />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <IncludedChip />
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
