import { BadgeCheck, CreditCard, Lock, ShieldCheck, Tag, Zap } from "lucide-react";
import { PRICING } from "@/config";
import { BuyButton } from "@/components/ui/Buttons";
import { Reveal } from "@/components/ui/Reveal";
import { CheckBullet, Eyebrow } from "@/components/ui/SectionHeading";

const INCLUDED = [
  "Curso completo de criação de sites com IA",
  "Aulas práticas passo a passo",
  "Criação de sites do zero",
  "Criação de prompts estratégicos",
  "Desenvolvimento de sites profissionais",
  "Personalização de sites",
  "Hospedagem gratuita ensinada no curso",
  "Integração com WhatsApp",
  "Orientações sobre domínio próprio",
  "Bônus de criação de logomarca com IA",
  "Ebook Briefing para criação e venda de sites",
  "Acesso online para estudar no seu ritmo",
];

const CHIPS = [
  { icon: CreditCard, text: "Cartão de crédito", tone: "text-electric-300" },
  { icon: BadgeCheck, text: "Compra única, sem mensalidade", tone: "text-cta-400" },
  { icon: Zap, text: "Acesso online", tone: "text-amber-300" },
];

const TRUST = [
  { icon: Lock, text: "Pagamento seguro" },
  { icon: Zap, text: "Acesso online" },
  { icon: ShieldCheck, text: "Garantia de 7 dias" },
];

function PriceCard() {
  return (
    <div className="flex h-full flex-col">
      {/* Faixa Black Friday */}
      <div className="bg-linear-to-r from-amber-300 via-amber-400 to-amber-300 px-6 py-3 text-ink-950">
        <p className="flex items-center justify-center gap-2 font-display text-sm font-extrabold uppercase tracking-[0.2em]">
          <Tag className="size-4 shrink-0" aria-hidden />
          <span>
            Black Friday<span className="hidden sm:inline"> • Preço promocional</span>
          </span>
        </p>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-10">
        <Reveal delay={100}>
          <p className="text-center text-sm text-mist-500">
            De <s className="tabular-nums">{PRICING.listPrice}</s> por apenas
          </p>
        </Reveal>

        {/* Opção em destaque: 12x */}
        <Reveal delay={160} className="mt-5">
          <div className="relative rounded-3xl border border-amber-300/40 bg-amber-400/[0.08] p-5 pt-6 text-center shadow-[0_0_60px_-20px_rgb(251_191_36/0.35)] sm:p-6 sm:pt-7">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-amber-300 px-3 py-1 font-display text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink-950">
              Pagamento em até 12x
            </span>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-mist-300">
              No cartão de crédito
            </p>
            <p className="mt-3 flex flex-col items-center justify-center gap-1 sm:flex-row sm:items-end sm:gap-2.5">
              <span className="font-display text-2xl font-bold text-mist-100 sm:mb-4 sm:text-4xl">
                {PRICING.installments}x
              </span>
              <span className="text-sm text-mist-500 sm:mb-4">de</span>
              <span className="font-display text-6xl font-extrabold leading-none tracking-tight text-mist-100 sm:text-7xl">
                {PRICING.installment}
              </span>
            </p>
            <p className="mt-3 text-xs text-mist-500">Total de {PRICING.totalOnCard} no cartão de crédito</p>
          </div>
        </Reveal>

        {/* À vista */}
        <Reveal delay={220} className="mt-6">
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.16em] text-mist-500">
            <span className="h-px flex-1 bg-white/10" />
            ou
            <span className="h-px flex-1 bg-white/10" />
          </div>
          <p className="mt-4 text-center text-mist-300">
            <span className="text-sm">à vista por </span>
            <span className="font-display text-2xl font-bold text-mist-100">{PRICING.cash}</span>
          </p>
        </Reveal>

        <Reveal delay={280} className="mt-6">
          <ul className="flex flex-wrap justify-center gap-2 text-xs font-semibold text-mist-100">
            {CHIPS.map(({ icon: Icon, text, tone }) => (
              <li
                key={text}
                className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5"
              >
                <Icon className={cnClass("size-3.5", tone)} aria-hidden />
                {text}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={340} className="mt-7">
          <BuyButton size="xl" className="w-full">
            Quero garantir meu acesso por {PRICING.installments}x de {PRICING.installment}
          </BuyButton>
          <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-mist-300">
            {TRUST.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-1.5">
                <Icon className="size-3.5 text-cta-400" aria-hidden />
                {text}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  );
}

export function Offer() {
  return (
    <section id="oferta" className="relative isolate overflow-hidden py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[46rem] w-[70rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(59_130_246/0.16),transparent)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="relative rounded-[2rem] bg-linear-to-br from-white/25 via-electric-500/45 to-violet-500/45 p-px shadow-[0_50px_140px_-50px_rgb(59_130_246/0.55)]">
          <div className="relative overflow-hidden rounded-[calc(2rem-1px)] bg-ink-900">
            <div
              aria-hidden
              className="pattern-grid absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_60%)]"
            />

            <div className="relative grid lg:grid-cols-[1.05fr_0.95fr]">
              {/* O que está incluso */}
              <div className="p-6 sm:p-10 lg:p-12">
                <Reveal className="block">
                  <Eyebrow>Oferta especial</Eyebrow>
                </Reveal>
                <Reveal
                  as="h2"
                  delay={80}
                  className="mt-5 font-display text-[1.75rem] font-extrabold uppercase leading-[1.12] tracking-tight text-mist-100 sm:text-[2.25rem] lg:text-[2.5rem]"
                >
                  Comece hoje a aprender uma <span className="grad-text-sky">nova habilidade</span>
                </Reveal>
                <Reveal as="p" delay={160} className="mt-5 text-base leading-relaxed text-mist-300 sm:text-lg">
                  Tenha acesso ao treinamento completo, aprenda a criar sites com inteligência artificial e
                  desenvolva seus primeiros projetos, mesmo sem experiência.
                </Reveal>

                <Reveal delay={220} className="mt-8">
                  <h3 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-mist-300">
                    O que está incluso
                  </h3>
                  <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    {INCLUDED.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[15px] leading-snug text-mist-100">
                        <CheckBullet tone="green" className="mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>

              {/* Preço */}
              <div className="border-t border-white/10 bg-ink-950/70 lg:border-l lg:border-t-0">
                <PriceCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Une classes simples sem dependência externa. */
function cnClass(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
