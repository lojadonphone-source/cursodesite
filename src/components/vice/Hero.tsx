import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/vice/hero.jpg";
import { PRICING } from "@/config";
import { HERO_BENEFITS, TRUST_MICRO } from "@/content";
import { Reveal } from "@/components/ui/Reveal";
import { Flash, Palm, Sticker, ViceBuyButton } from "@/components/vice/ui";

/** Moldura de foto com o sol retro ao fundo. */
function HeroArt() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div
        aria-hidden
        className="vice-sun absolute -top-32 left-1/2 -z-10 h-[40rem] w-[40rem] -translate-x-1/2"
      />
      <div className="rotate-2 rounded-[1.25rem] border-[6px] border-cream bg-cream p-2 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.9)]">
        <img
          src={heroImg}
          width={1100}
          height={733}
          alt="Aluna criando um site com inteligência artificial em uma cidade à beira-mar ao pôr do sol"
          className="aspect-[3/2] w-full rounded-[0.75rem] object-cover"
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <Sticker tone="pink" className="absolute -left-3 top-10 -rotate-6 sm:-left-6">
        Sem programar
      </Sticker>
      <div className="absolute -bottom-7 -right-2 flex -rotate-3 items-center gap-3 rounded-xl border-2 border-vice-950 bg-cream px-4 py-3 text-vice-950 shadow-[4px_4px_0_0_#0d0517] sm:-right-6">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-hot-500 text-white">
          <Flash className="size-4" />
        </span>
        <span className="leading-tight">
          <span className="block text-xs font-extrabold uppercase tracking-[0.12em]">Site gerado</span>
          <span className="block text-sm font-semibold">com ajuda da IA</span>
        </span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="topo" className="relative isolate overflow-hidden pb-24 pt-28 sm:pt-32">
      {/* Cenografia */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-48 right-[-12%] h-[46rem] w-[46rem] rounded-full bg-[radial-gradient(closest-side,rgb(255_46_136/0.3),transparent)]" />
        <div className="absolute -left-[18%] top-[14%] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(closest-side,rgb(255_122_24/0.18),transparent)]" />
        <div className="pattern-halftone absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_65%)]" />
        <div className="absolute -bottom-56 -right-32 size-[34rem] rounded-full bg-[radial-gradient(closest-side,rgb(255_122_24/0.55),rgb(255_46_136/0.2)_55%,transparent)]" />
        <div className="absolute -bottom-64 -left-40 size-[34rem] rounded-full bg-[radial-gradient(closest-side,rgb(139_47_247/0.5),transparent)]" />
        <Palm className="absolute -bottom-6 -right-10 h-32 w-auto text-vice-950 sm:-bottom-8 sm:-right-24 sm:h-64" />
        <Palm className="absolute -bottom-6 -left-10 h-32 w-auto -scale-x-100 text-vice-950 sm:-bottom-8 sm:-left-24 sm:h-60" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-10">
          {/* Texto */}
          <div>
            <Reveal className="flex flex-wrap gap-2">
              <Sticker>Curso prático</Sticker>
              <Sticker tone="pink">100% online</Sticker>
              <Sticker tone="cream">Para iniciantes</Sticker>
            </Reveal>

            <Reveal
              as="h1"
              delay={80}
              className="mt-6 font-poster text-[2.75rem] uppercase leading-[1] text-cream sm:text-[4rem] lg:text-[3.5rem] xl:text-[3.75rem]"
            >
              Crie <span className="grad-sunset">sites profissionais</span> com{" "}
              <span className="grad-hot">inteligência artificial</span>{" "}
              <span className="mt-4 block origin-left -rotate-1">
                <span className="inline-block rounded-lg bg-sunset-300 px-3 py-1.5 text-[0.55em] uppercase leading-none text-vice-950 shadow-[4px_4px_0_0_#0d0517]">
                  mesmo sem saber programar
                </span>
              </span>
            </Reveal>

            <Reveal as="p" delay={160} className="mt-6 max-w-xl text-base leading-relaxed text-sand-300 sm:text-lg">
              Aprenda do zero, utilizando ferramentas de IA para criar sites modernos, completos e profissionais para
              seu negócio, seus projetos ou até mesmo para oferecer como serviço.
            </Reveal>

            <Reveal delay={240} className="mt-8">
              <ViceBuyButton href="#oferta" size="xl" className="w-full max-w-xl">
                Quero aprender a criar sites com IA
              </ViceBuyButton>
              <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-sand-300 lg:justify-start">
                {TRUST_MICRO.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-2">
                    <Icon aria-hidden className="size-4 text-sunset-300" />
                    {text}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Preço de Black Friday */}
            <Reveal delay={300} className="mt-6">
              <a
                href="#oferta"
                className="group flex items-center gap-4 rounded-2xl border-2 border-sunset-300/40 bg-vice-900/85 p-3 pr-4 transition-colors duration-200 hover:border-sunset-300 hover:bg-vice-800/85"
              >
                <span className="shrink-0 -rotate-3">
                  <Sticker>Black Friday</Sticker>
                </span>
                <span className="min-w-0 flex-1 leading-tight">
                  <span className="block font-poster text-2xl uppercase leading-none text-cream">
                    {PRICING.installments}x de {PRICING.installment}
                  </span>
                  <span className="mt-1 block text-sm text-sand-300">ou {PRICING.cash} à vista</span>
                </span>
                <ArrowRight
                  aria-hidden
                  className="size-5 shrink-0 text-sunset-300 transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </Reveal>
          </div>

          {/* Imagem */}
          <Reveal delay={200} className="relative">
            <HeroArt />
          </Reveal>
        </div>

        {/* Benefícios */}
        <ul className="mt-16 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {HERO_BENEFITS.map((benefit, index) => (
            <Reveal as="li" key={benefit} delay={index * 50} className="flex items-start gap-3">
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-sunset-300 text-vice-950">
                <Flash className="size-3" />
              </span>
              <span className="text-[15px] leading-snug text-cream">{benefit}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
