import { ArrowRight, CreditCard, Globe, ShieldCheck } from "lucide-react";
import { PRICING } from "@/config";
import { CtaButton } from "@/components/ui/Buttons";
import { CheckBullet, Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { HeroVisual } from "@/components/sections/HeroVisual";

const BENEFITS = [
  "Crie sites do zero sem programar",
  "Utilize IA para criar estruturas, textos e layouts",
  "Aprenda a criar sites para empresas e profissionais",
  "Publique seu site com hospedagem gratuita",
  "Adicione botão de WhatsApp para captar clientes",
  "Aprenda no seu ritmo, com videoaulas práticas",
];

const MICRO = [
  { icon: Globe, text: "Acesso online" },
  { icon: CreditCard, text: "Compra única" },
  { icon: ShieldCheck, text: "Garantia de 7 dias" },
];

export function Hero() {
  return (
    <section id="topo" className="relative isolate overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-36">
      {/* Fundo */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="pattern-grid absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_5%,transparent_72%)]" />
        <div className="absolute -left-[10%] -top-48 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(closest-side,rgb(59_130_246/0.26),transparent)]" />
        <div className="absolute -right-[12%] top-[22%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(closest-side,rgb(139_92_246/0.2),transparent)]" />
        <div className="absolute -bottom-24 left-[30%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(closest-side,rgb(34_211_238/0.1),transparent)]" />
        <div className="pattern-noise absolute inset-0 opacity-[0.04]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-b from-transparent to-ink-950" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-8">
          {/* Texto */}
          <div>
            <Reveal className="block">
              <Eyebrow>
                <span className="sm:hidden">Curso prático • 100% online</span>
                <span className="hidden sm:inline">Curso prático • 100% online • Para iniciantes</span>
              </Eyebrow>
            </Reveal>

            <Reveal
              as="h1"
              delay={80}
              className="mt-6 font-display text-[2rem] font-extrabold uppercase leading-[1.08] tracking-tight text-mist-100 sm:text-[2.75rem] lg:text-[3rem] xl:text-[3.25rem]"
            >
              Crie <span className="grad-text-sky">sites profissionais</span> com{" "}
              <span className="grad-text-violet">inteligência artificial</span>, mesmo{" "}
              <span className="underline decoration-electric-400/70 decoration-[3px] underline-offset-[7px]">
                sem saber programar
              </span>
            </Reveal>

            <Reveal as="p" delay={160} className="mt-6 max-w-xl text-base leading-relaxed text-mist-300 sm:text-lg">
              Aprenda do zero, utilizando ferramentas de IA para criar sites modernos, completos e profissionais para
              seu negócio, seus projetos ou até mesmo para oferecer como serviço.
            </Reveal>

            <Reveal delay={240} className="mt-8">
              <CtaButton href="#oferta" size="xl" className="w-full max-w-xl">
                Quero aprender a criar sites com IA
              </CtaButton>
              <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-mist-300 lg:justify-start">
                {MICRO.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-2">
                    <Icon aria-hidden className="size-4 text-electric-300" />
                    {text}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Preço de Black Friday */}
            <Reveal delay={300} className="mt-6">
              <a
                href="#oferta"
                className="group flex items-center gap-3 rounded-2xl border border-amber-300/25 bg-amber-400/[0.06] p-3 transition-colors duration-200 hover:border-amber-300/50 hover:bg-amber-400/10"
              >
                <span className="shrink-0 rounded-lg bg-linear-to-b from-amber-300 to-amber-500 px-2.5 py-1.5 font-display text-xs font-extrabold uppercase tracking-wider text-ink-950">
                  Black Friday
                </span>
                <span className="min-w-0 flex-1 text-sm leading-relaxed">
                  <span className="whitespace-nowrap font-display font-bold text-mist-100">
                    {PRICING.installments}x de {PRICING.installment}
                  </span>{" "}
                  <span className="whitespace-nowrap text-mist-300">ou {PRICING.cash} à vista</span>
                </span>
                <ArrowRight
                  aria-hidden
                  className="size-5 shrink-0 text-amber-300 transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </Reveal>
          </div>

          {/* Visual */}
          <Reveal delay={200} className="relative">
            <HeroVisual />
          </Reveal>
        </div>

        {/* Benefícios */}
        <ul className="mt-20 grid gap-x-8 gap-y-4 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {BENEFITS.map((benefit, index) => (
            <Reveal as="li" key={benefit} delay={index * 50} className="flex items-start gap-3">
              <CheckBullet className="mt-0.5" />
              <span className="text-[15px] leading-snug text-mist-100">{benefit}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
