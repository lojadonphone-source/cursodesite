import { Check, Gift } from "lucide-react";
import { LogoSample } from "@/components/ui/Icons";
import { BONUS_BRIEFING_HELP, BONUS_BRIEFING_ITEMS, BONUS_LOGO_ITEMS } from "@/content";
import { cn } from "@/utils/cn";
import { Reveal } from "@/components/ui/Reveal";
import { Card, Flash, Sticker, ViceMark } from "@/components/vice/ui";
import { SectionHead } from "@/components/vice/SectionHead";

function IncludedChip() {
  return (
    <p className="inline-flex items-center gap-2 self-start rounded-full border border-cta-500/45 bg-cta-500/15 px-3.5 py-1.5 text-xs font-bold text-cta-400">
      <Check className="size-3.5" strokeWidth={3} aria-hidden />
      Incluso no curso
    </p>
  );
}

function ItemCheck() {
  return (
    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-purple-500/25 text-purple-300 ring-1 ring-inset ring-purple-400/45">
      <Check className="size-3" strokeWidth={3} aria-hidden />
    </span>
  );
}

/** Bônus exclusivos apresentados como itens extras desbloqueados. */
export function Bonus() {
  return (
    <section id="bonus" className="relative isolate py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-20 -z-10 mx-auto h-[30rem] w-[60rem] max-w-none rounded-full bg-[radial-gradient(closest-side,rgb(139_47_247/0.16),transparent)]"
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead
          kicker="Itens bônus"
          tone="violet"
          title={
            <>
              Bônus que já estão <span className="grad-sunset">inclusos no curso</span>
            </>
          }
          text="Além do treinamento completo, você recebe materiais complementares para ir além da criação do site."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-start">
          {/* Bônus 1 */}
          <Reveal>
            <Card className="flex h-full flex-col overflow-hidden p-6 transition duration-300 ease-out hover:-translate-y-1 hover:border-hot-500/50 sm:p-8">
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-hot-500 to-purple-600"
              />
              <Sticker tone="pink" className="self-start">
                <Gift className="size-4" aria-hidden />
                Bônus 1
              </Sticker>

              <div className="mt-6 rounded-2xl border border-white/12 bg-vice-950/60 p-4">
                <p className="flex items-start gap-2 text-xs leading-relaxed text-sand-300">
                  <Flash className="mt-1 size-3 shrink-0 text-purple-300" />
                  “Logo minimalista para uma sorveteria artesanal, em tons pastel…”
                </p>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((variant) => {
                    const selected = variant === 2;
                    return (
                      <div
                        key={variant}
                        className={cn(
                          "relative flex aspect-square items-center justify-center rounded-xl border-2 transition-colors duration-200",
                          selected
                            ? "border-sunset-300 bg-sunset-300/10"
                            : "border-white/12 bg-white/[0.05] hover:bg-white/[0.09]",
                        )}
                      >
                        <LogoSample variant={variant as 1 | 2 | 3} className="size-3/5" />
                        {selected && (
                          <span className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full border-2 border-vice-950 bg-cta-500 text-white">
                            <Check className="size-3.5" strokeWidth={3} aria-hidden />
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
                <p className="mt-3 text-[11px] font-extrabold uppercase tracking-[0.16em] text-sand-500">
                  Opções geradas com IA
                </p>
              </div>

              <h3 className="mt-6 font-poster text-2xl uppercase leading-[1.05] text-cream sm:text-[1.75rem]">
                Crie sua logomarca com inteligência artificial
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-sand-300">
                Aprenda a utilizar ChatGPT e Gemini para criar ideias e prompts para uma logomarca profissional.
              </p>
              <p className="mt-4 text-sm font-bold text-cream">Você aprenderá:</p>
              <ul className="mt-3 space-y-2.5">
                {BONUS_LOGO_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-snug text-sand-300">
                    <ItemCheck />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <IncludedChip />
              </div>
            </Card>
          </Reveal>

          {/* Bônus 2 */}
          <Reveal delay={120}>
            <Card className="flex flex-col overflow-hidden p-6 transition duration-300 ease-out hover:-translate-y-1 hover:border-hot-500/50 sm:p-8">
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-purple-600 to-hot-500"
              />
              <Sticker tone="pink" className="self-start">
                <Gift className="size-4" aria-hidden />
                Bônus 2
              </Sticker>

              <div className="mt-6 grid grid-cols-[auto_1fr] items-center gap-5 rounded-2xl border border-white/12 bg-vice-950/60 p-4 sm:p-5">
                <div className="relative aspect-[3/4] w-28 shrink-0 overflow-hidden rounded-r-xl rounded-l-[3px] bg-linear-to-br from-sunset-400 via-hot-500 to-purple-700 shadow-[12px_18px_40px_-12px_rgba(0,0,0,0.95)] sm:w-32">
                  <span
                    aria-hidden
                    className="absolute inset-y-0 left-0 w-[5px] bg-linear-to-r from-white/50 to-transparent"
                  />
                  <div className="flex h-full flex-col p-3 pl-4">
                    <ViceMark className="size-7" />
                    <p className="mt-3 text-[10px] font-extrabold uppercase tracking-[0.2em] text-cream/90">Ebook</p>
                    <p className="mt-1 font-poster text-base uppercase leading-[1.05] text-white sm:text-lg">
                      Briefing para vender sites
                    </p>
                    <p className="mt-auto text-[9px] font-semibold leading-snug text-white/85">
                      Criação de Sites com IA do Zero
                    </p>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {BONUS_BRIEFING_ITEMS.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm leading-snug text-cream">
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-md bg-purple-500/25 text-purple-300">
                        <Check className="size-3" strokeWidth={3} aria-hidden />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <h3 className="mt-6 font-poster text-2xl uppercase leading-[1.05] text-cream sm:text-[1.75rem]">
                Ebook Briefing para vender sites
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-sand-300">
                Aprenda a organizar as informações necessárias para criar sites para empresas e clientes.
              </p>
              <p className="mt-4 text-sm font-bold text-cream">Um material para ajudar você a:</p>
              <ul className="mt-3 space-y-2.5">
                {BONUS_BRIEFING_HELP.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-snug text-sand-300">
                    <ItemCheck />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <IncludedChip />
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
