import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/utils/cn";
import { PRICING } from "@/config";
import { MODULES, type Module } from "@/content";
import { Reveal } from "@/components/ui/Reveal";
import { Card, Kicker, TITLE_SM, ViceBuyButton } from "@/components/vice/ui";
import { NicheGallery, PersonalizationExtras, PromptAnatomy } from "@/components/vice/MissionExtras";

const CHIPS = ["8 missões", "Videoaulas práticas", "Do zero à publicação"];

/** Resumo do conteúdo extra de cada missão, mostrado sob o título. */
const HINTS: Record<number, string> = {
  1: "Prompt comentado e exemplo prático",
  2: "8 exemplos de sites por nicho",
  3: "Antes e depois, exemplos e checklist",
};

/** Conteúdo ilustrado de cada missão. */
function MissionVisuals({ index }: { index: number }) {
  if (index === 1) return <PromptAnatomy />;
  if (index === 2) return <NicheGallery />;
  if (index === 3) return <PersonalizationExtras />;
  return null;
}

interface MissionItemProps {
  module: Module;
  index: number;
  open: boolean;
  onToggle: () => void;
}

function MissionItem({ module, index, open, onToggle }: MissionItemProps) {
  const number = String(index + 1).padStart(2, "0");
  const buttonId = `modulo-${index + 1}-botao`;
  const panelId = `modulo-${index + 1}-painel`;
  const hasVisuals = index in HINTS;

  return (
    <Card className={cn("overflow-hidden transition-colors duration-300", open && "border-hot-500/60")}>
      <span
        aria-hidden
        className={cn(
          "absolute inset-y-0 left-0 w-1.5 bg-linear-to-b from-sunset-300 via-hot-500 to-purple-600 transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
      />

      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center gap-4 p-4 text-left transition-colors duration-200 hover:bg-white/[0.04] sm:gap-5 sm:p-5"
        >
          <span
            className={cn(
              "flex size-12 shrink-0 flex-col items-center justify-center rounded-xl border transition-colors duration-300",
              open
                ? "border-hot-500/60 bg-hot-500/20 text-hot-400"
                : "border-white/10 bg-white/[0.04] text-sand-300",
            )}
          >
            <span className="text-[8px] font-extrabold leading-none tracking-[0.16em]">Missão</span>
            <span className="mt-1 font-poster text-lg leading-none">{number}</span>
          </span>
          <span className="flex min-w-0 flex-1 flex-col">
            <span className="font-poster text-xl uppercase leading-[1.05] text-cream sm:text-2xl">{module.title}</span>
            {hasVisuals && (
              <span className="mt-1.5 hidden text-[11px] font-bold tracking-wide text-sunset-300 sm:block">
                + {HINTS[index]}
              </span>
            )}
          </span>
          <span
            className={cn(
              "flex size-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300",
              open ? "border-hot-500/60 text-hot-400" : "border-white/10 text-sand-300",
            )}
          >
            <ChevronDown
              aria-hidden
              className={cn("size-4 transition-transform duration-300 ease-out", open && "rotate-180")}
            />
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!open}
        className="accordion-panel"
        data-open={open}
      >
        <div>
          <div className="pb-5 pl-20 pr-4 sm:pl-[88px] sm:pr-5">
            {module.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-[15px] leading-relaxed text-sand-300 first:mt-0">
                {paragraph}
              </p>
            ))}

            {hasVisuals && module.note && (
              <p className="mt-4 rounded-xl border border-sunset-300/30 bg-sunset-300/10 px-4 py-3 text-sm leading-snug text-sunset-300">
                {module.note}
              </p>
            )}

            {hasVisuals ? (
              <div className="-ml-14 sm:ml-0">
                <MissionVisuals index={index} />
              </div>
            ) : (
              module.items && (
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {module.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-snug text-cream">
                      <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded border border-hot-500/60 bg-hot-500/20 text-hot-400">
                        <Check className="size-3" strokeWidth={3} aria-hidden />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              )
            )}

            {!hasVisuals && module.note && (
              <p className="mt-4 rounded-xl border border-sunset-300/30 bg-sunset-300/10 px-4 py-3 text-sm leading-snug text-sunset-300">
                {module.note}
              </p>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}

/** Conteúdo do curso apresentado como uma sequência de missões. */
export function Missions() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="conteudo" className="relative isolate py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* Apresentação */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal className="block">
            <Kicker tone="yellow">Missões do curso</Kicker>
          </Reveal>
          <Reveal as="h2" delay={80} className={cn("mt-5", TITLE_SM)}>
            Conheça o conteúdo do <span className="grad-hot">curso</span>
          </Reveal>
          <Reveal as="p" delay={160} className="mt-5 text-base leading-relaxed text-sand-300 sm:text-lg">
            Oito módulos em videoaulas práticas, organizados na ordem em que você vai aplicar: do primeiro prompt
            até o site publicado.
          </Reveal>

          <Reveal delay={220} className="mt-6 flex flex-wrap gap-2">
            {CHIPS.map((chip) => (
              <span
                key={chip}
                className="rounded-full border-2 border-white/12 bg-white/[0.04] px-3.5 py-1.5 text-xs font-bold text-cream"
              >
                {chip}
              </span>
            ))}
          </Reveal>

          <Reveal delay={280} className="mt-8">
            <Card className="overflow-hidden p-6">
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-sunset-300 via-hot-500 to-purple-600"
              />
              <p className="text-sm text-sand-300">Tudo isso pelo preço de Black Friday:</p>
              <p className="mt-1 font-poster text-3xl uppercase leading-none text-cream">
                {PRICING.installments}x de {PRICING.installment}
              </p>
              <p className="mt-1.5 text-sm text-sand-500">ou {PRICING.cash} à vista</p>
              <ViceBuyButton size="md" className="mt-5 w-full">
                Quero garantir meu acesso
              </ViceBuyButton>
            </Card>
          </Reveal>
        </div>

        {/* Missões */}
        <ul className="space-y-3">
          {MODULES.map((module, index) => (
            <Reveal as="li" key={module.title} delay={Math.min(index, 4) * 50}>
              <MissionItem
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
