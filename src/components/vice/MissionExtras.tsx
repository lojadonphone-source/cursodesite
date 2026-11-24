import { useRef } from "react";
import { ArrowDown, ChevronLeft, ChevronRight, Terminal } from "lucide-react";
import {
  ADJUST_PROMPTS,
  COFFEE_SHOP,
  FINISH_CHECKLIST,
  GENERIC_SITE,
  ICE_CREAM_SHOP,
  NICHE_SITES,
  PERSONALIZE_CHECKS,
  PROMPT_FIELDS,
  PROMPT_PARTS,
  PROMPT_TIPS,
  highlightColor,
} from "@/content-extras";
import { prefersReducedMotion } from "@/lib/motion";
import { BrowserFrame, MiniSite } from "@/components/vice/Sites";
import { Card, Flash, IconTile, Sticker } from "@/components/vice/ui";

const LABEL = "text-xs font-extrabold uppercase tracking-[0.14em] text-sunset-300";
const ARROW =
  "flex size-9 items-center justify-center rounded-full border-2 border-white/15 bg-vice-800 text-cream transition duration-200 hover:border-hot-500/60 hover:text-hot-400 active:scale-95";

/** Missão 02: prompt comentado, o que cada parte define e o site que sai dele. */
export function PromptAnatomy() {
  return (
    <div className="mt-5 space-y-5">
      <div className="overflow-hidden rounded-2xl border-2 border-white/12 bg-vice-950/70">
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-2.5">
          <p className={LABEL}>Prompt de exemplo · Sorveteria</p>
          <span className="rounded-full bg-cta-500/15 px-2.5 py-1 text-[11px] font-bold text-cta-400">Comentado</span>
        </div>
        <p className="px-4 py-3 text-[15px] leading-[2] text-cream">
          {PROMPT_PARTS.map((part, index) =>
            part.n ? (
              <span
                key={index}
                className="rounded"
                style={{ boxShadow: `inset 0 -0.45em 0 0 ${highlightColor(part.n)}33` }}
              >
                <sup
                  className="mr-1 inline-flex size-4 translate-y-[-0.5em] items-center justify-center rounded-full text-[9px] font-extrabold text-vice-950"
                  style={{ background: highlightColor(part.n) }}
                >
                  {part.n}
                </sup>
                {part.text}
              </span>
            ) : (
              <span key={index} className="text-sand-300">
                {part.text}
              </span>
            ),
          )}
        </p>
      </div>

      <div>
        <p className={LABEL}>O que você vai definir no prompt</p>
        <ol className="mt-3 grid gap-2 sm:grid-cols-2">
          {PROMPT_FIELDS.map((field) => (
            <li key={field.n} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3">
              <span
                className="flex size-6 shrink-0 items-center justify-center rounded-full text-[11px] font-extrabold text-vice-950"
                style={{ background: highlightColor(field.n) }}
              >
                {field.n}
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-bold text-cream">{field.label}</span>
                <span className="mt-0.5 block text-[13px] leading-snug text-sand-300">{field.example}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <p className={`flex items-center gap-2 text-hot-400 ${LABEL}`}>
          <ArrowDown className="size-4 shrink-0" aria-hidden />
          O site gerado a partir desse prompt
        </p>
        <BrowserFrame url={ICE_CREAM_SHOP.domain} className="mt-3">
          <MiniSite site={ICE_CREAM_SHOP} />
        </BrowserFrame>
      </div>

      <Card className="p-4">
        <p className="text-sm font-bold text-cream">Dicas para o seu prompt</p>
        <ul className="mt-3 space-y-2.5">
          {PROMPT_TIPS.map((tip) => (
            <li key={tip} className="flex items-start gap-2.5 text-sm leading-snug text-sand-300">
              <Flash className="mt-1 size-3 shrink-0 text-sunset-300" />
              {tip}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

/** Missão 03: carrossel com sites de nichos diferentes, todos em português. */
export function NicheGallery() {
  const track = useRef<HTMLUListElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const list = track.current;
    if (!list) return;
    const card = list.querySelector("li");
    const step = (card?.clientWidth ?? 240) + 16;
    list.scrollBy({ left: direction * step, behavior: prefersReducedMotion() ? "auto" : "smooth" });
  };

  return (
    <div className="mt-5">
      <div className="flex items-center justify-between gap-3">
        <p className={LABEL}>Sites que você pode criar com IA</p>
        <div className="flex shrink-0 gap-2">
          <button type="button" onClick={() => scrollByCard(-1)} aria-label="Ver site anterior" className={ARROW}>
            <ChevronLeft className="size-4" aria-hidden />
          </button>
          <button type="button" onClick={() => scrollByCard(1)} aria-label="Ver próximo site" className={ARROW}>
            <ChevronRight className="size-4" aria-hidden />
          </button>
        </div>
      </div>

      <ul
        ref={track}
        tabIndex={0}
        aria-label="Exemplos de sites por nicho"
        className="mt-3 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1 focus-visible:outline-hot-400 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {NICHE_SITES.map((site) => (
          <li key={site.id} className="w-60 shrink-0 snap-start">
            <BrowserFrame url={site.domain}>
              <MiniSite site={site} />
            </BrowserFrame>
            <p className="mt-2 text-xs font-semibold text-sand-300">{site.niche}</p>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-[11px] text-sand-500">Exemplos ilustrativos, criados para mostrar diferentes nichos.</p>
    </div>
  );
}

/** Missão 04: antes e depois, o que ajustar, exemplos de pedidos à IA e checklist. */
export function PersonalizationExtras() {
  return (
    <div className="mt-5 space-y-6">
      <div>
        <p className={LABEL}>Antes e depois da personalização</p>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          <figure>
            <div className="[filter:grayscale(0.7)]">
              <BrowserFrame url={GENERIC_SITE.domain}>
                <MiniSite site={GENERIC_SITE} />
              </BrowserFrame>
            </div>
            <figcaption className="mt-2 flex items-center gap-2 text-xs leading-snug text-sand-300">
              <Sticker tone="cream" className="shrink-0 px-2 py-0.5 text-[10px]">
                Antes
              </Sticker>
              Como a IA entrega a primeira versão
            </figcaption>
          </figure>
          <figure>
            <BrowserFrame url={COFFEE_SHOP.domain}>
              <MiniSite site={COFFEE_SHOP} />
            </BrowserFrame>
            <figcaption className="mt-2 flex items-center gap-2 text-xs leading-snug text-sand-300">
              <Sticker tone="orange" className="shrink-0 px-2 py-0.5 text-[10px]">
                Depois
              </Sticker>
              Com identidade, fotos e informações reais
            </figcaption>
          </figure>
        </div>

        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {PERSONALIZE_CHECKS.map(({ icon, title, text }) => (
            <li key={title} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3">
              <IconTile icon={icon} tone="pink" className="size-10 rounded-xl" />
              <span className="min-w-0">
                <span className="block text-sm font-bold text-cream">{title}</span>
                <span className="mt-0.5 block text-[13px] leading-snug text-sand-300">{text}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="overflow-hidden rounded-2xl border-2 border-white/12 bg-vice-950/70">
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-2.5">
          <p className={LABEL}>Peça ajustes à IA</p>
          <span className="rounded-full bg-hot-500/15 px-2.5 py-1 text-[11px] font-bold text-hot-400">Exemplos</span>
        </div>
        <ul className="divide-y divide-white/10">
          {ADJUST_PROMPTS.map((prompt) => (
            <li key={prompt} className="flex items-start gap-3 px-4 py-3 text-sm leading-snug text-cream">
              <Terminal className="mt-0.5 size-4 shrink-0 text-hot-400" aria-hidden />
              <span>“{prompt}”</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className={LABEL}>Checklist de acabamento</p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {FINISH_CHECKLIST.map((item) => (
            <li key={item} className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-sm leading-snug text-cream">
              <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded border border-hot-500/60 bg-hot-500/20 text-hot-400">
                <svg viewBox="0 0 16 16" className="size-3" aria-hidden fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8.5l3.2 3.2L13 5" />
                </svg>
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
