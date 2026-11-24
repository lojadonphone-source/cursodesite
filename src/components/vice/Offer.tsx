import carroImg from "@/assets/vice/carro.jpg";
import { PRICING } from "@/config";
import { INCLUDED, OFFER_TRUST, PAYMENT_CHIPS } from "@/content";
import { cn } from "@/utils/cn";
import { Reveal } from "@/components/ui/Reveal";
import { Kicker, Sticker, TITLE, ViceBuyButton } from "@/components/vice/ui";

/** Cartão de preço: destaque para a opção em 12x. */
function PriceCard() {
  return (
    <div className="flex h-full flex-col">
      {/* Cabeçalho promocional */}
      <div className="relative h-44 overflow-hidden sm:h-52">
        <img
          src={carroImg}
          width={900}
          height={506}
          alt=""
          aria-hidden
          className="absolute inset-0 size-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div aria-hidden className="absolute inset-0 bg-linear-to-t from-vice-950 via-vice-950/50 to-vice-950/10" />
        <div className="absolute inset-x-5 bottom-4 flex items-end justify-between gap-3 sm:inset-x-8">
          <Sticker className="-rotate-3">Black Friday</Sticker>
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-cream">Preço promocional</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-10">
        <Reveal delay={100}>
          <p className="text-center text-sm text-sand-500">
            De <s className="tabular-nums">{PRICING.listPrice}</s> por apenas
          </p>
        </Reveal>

        {/* Opção em destaque: 12x */}
        <Reveal delay={160} className="mt-5">
          <div className="relative rounded-3xl border-2 border-sunset-300/55 bg-sunset-300/10 p-5 pt-8 text-center shadow-[0_0_60px_-20px_rgb(255_209_102/0.4)] sm:p-6 sm:pt-8">
            <Sticker className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">Pagamento em até 12x</Sticker>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sand-300">No cartão de crédito</p>
            <p className="mt-3 flex flex-col items-center justify-center gap-1.5 sm:flex-row sm:items-end sm:gap-3">
              <span className="font-poster text-3xl leading-none text-cream sm:mb-5 sm:text-5xl">
                {PRICING.installments}x
              </span>
              <span className="text-sm text-sand-500 sm:mb-5">de</span>
              <span className="grad-sunset font-poster text-7xl leading-none sm:text-[6rem]">{PRICING.installment}</span>
            </p>
            <p className="mt-3 text-xs text-sand-500">Total de {PRICING.totalOnCard} no cartão de crédito</p>
          </div>
        </Reveal>

        {/* À vista */}
        <Reveal delay={220} className="mt-6">
          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.16em] text-sand-500">
            <span className="h-0.5 flex-1 rounded-full bg-white/12" />
            ou
            <span className="h-0.5 flex-1 rounded-full bg-white/12" />
          </div>
          <p className="mt-4 text-center text-sand-300">
            <span className="text-sm">à vista por </span>
            <span className="font-poster text-3xl leading-none text-cream">{PRICING.cash}</span>
          </p>
        </Reveal>

        <Reveal delay={280} className="mt-6">
          <ul className="flex flex-wrap justify-center gap-2 text-xs font-semibold text-cream">
            {PAYMENT_CHIPS.map(({ icon: Icon, text }) => (
              <li
                key={text}
                className="flex items-center gap-1.5 rounded-full border-2 border-white/12 bg-white/[0.05] px-3 py-1.5"
              >
                <Icon className="size-3.5 text-sunset-300" aria-hidden />
                {text}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={340} className="mt-7">
          <ViceBuyButton size="xl" className="w-full">
            Quero garantir meu acesso por {PRICING.installments}x de {PRICING.installment}
          </ViceBuyButton>
          <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-sand-300">
            {OFFER_TRUST.map(({ icon: Icon, text }) => (
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

/** Oferta especial de Black Friday. */
export function Offer() {
  return (
    <section id="oferta" className="relative isolate overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[46rem] w-[70rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(255_46_136/0.18),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-linear-to-r from-transparent via-sunset-300/60 to-transparent"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="relative rounded-[2rem] bg-linear-to-br from-sunset-300 via-hot-500 to-purple-600 p-px shadow-[0_50px_140px_-50px_rgb(255_46_136/0.6)]">
          <div className="relative overflow-hidden rounded-[calc(2rem-1px)] bg-vice-900">
            <div
              aria-hidden
              className="pattern-scanlines absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_50%)]"
            />

            <div className="relative grid lg:grid-cols-[1.05fr_0.95fr]">
              {/* O que está incluso */}
              <div className="p-6 sm:p-10 lg:p-12">
                <Reveal className="block">
                  <Kicker tone="yellow">Oferta especial</Kicker>
                </Reveal>
                <Reveal as="h2" delay={80} className={cn("mt-5", TITLE)}>
                  Comece hoje a aprender uma <span className="grad-sunset">nova habilidade</span>
                </Reveal>
                <Reveal as="p" delay={160} className="mt-6 text-base leading-relaxed text-sand-300 sm:text-lg">
                  Tenha acesso ao treinamento completo, aprenda a criar sites com inteligência artificial e
                  desenvolva seus primeiros projetos, mesmo sem experiência.
                </Reveal>

                <Reveal delay={220} className="mt-8">
                  <h3 className="font-poster text-xl uppercase leading-none text-cream">O que está incluso</h3>
                  <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    {INCLUDED.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[15px] leading-snug text-cream">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-cta-500/20 text-cta-400 ring-1 ring-inset ring-cta-400/50">
                          <svg viewBox="0 0 16 16" className="size-3" aria-hidden fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 8.5l3.2 3.2L13 5" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>

              {/* Preço */}
              <div className="border-t-2 border-white/10 bg-vice-950/70 lg:border-l lg:border-t-0">
                <PriceCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
