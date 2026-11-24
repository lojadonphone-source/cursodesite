import { Bot, Briefcase, LayoutTemplate, Lightbulb, ListChecks, Megaphone, Sparkles, Store, UserRound } from "lucide-react";
import { PRICING } from "@/config";
import { BuyButton } from "@/components/ui/Buttons";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";

const AUDIENCE = [
  { icon: UserRound, text: "Nunca criou um site e quer começar do zero." },
  { icon: Bot, text: "Não sabe programar e quer aprender utilizando IA." },
  { icon: Store, text: "É empreendedor e deseja criar o site do próprio negócio." },
  { icon: Briefcase, text: "É autônomo ou prestador de serviços." },
  { icon: Megaphone, text: "Quer divulgar produtos ou serviços na internet." },
  { icon: Sparkles, text: "Quer aprender uma habilidade digital atual." },
  { icon: LayoutTemplate, text: "Quer explorar a criação de sites como um serviço." },
  { icon: ListChecks, text: "Busca aprender de maneira simples, prática e objetiva." },
];

export function ForWhom() {
  return (
    <section id="para-quem" className="relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Texto */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal className="block">
            <Eyebrow>Para quem é o curso</Eyebrow>
          </Reveal>
          <Reveal
            as="h2"
            delay={80}
            className="mt-5 font-display text-[1.75rem] font-extrabold uppercase leading-[1.12] tracking-tight text-mist-100 sm:text-[2.25rem] lg:text-[2.5rem]"
          >
            Esse curso foi feito <span className="grad-text-sky">para você</span> que:
          </Reveal>

          <Reveal delay={200}>
            <div className="relative mt-8 overflow-hidden rounded-3xl border border-electric-500/30 bg-electric-500/[0.08] p-6">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-linear-to-br from-electric-500/30 to-violet-500/30 text-electric-300 ring-1 ring-inset ring-white/10">
                <Lightbulb className="size-5" aria-hidden />
              </span>
              <p className="mt-4 text-lg font-medium leading-relaxed text-mist-100">
                Você não precisa ter experiência. Só precisa estar disposto a aprender e colocar em prática.
              </p>
            </div>
          </Reveal>

          <Reveal delay={280} className="mt-8">
            <BuyButton size="lg" className="w-full">
              Quero começar agora
            </BuyButton>
            <p className="mt-4 text-sm text-mist-500">
              {PRICING.installments}x de {PRICING.installment} • Garantia de 7 dias
            </p>
          </Reveal>
        </div>

        {/* Lista */}
        <ul className="grid gap-4 sm:grid-cols-2">
          {AUDIENCE.map(({ icon: Icon, text }, index) => (
            <Reveal as="li" key={text} delay={(index % 2) * 80} className="h-full">
              <div className="flex h-full items-start gap-4 rounded-3xl border border-white/10 bg-ink-800/70 p-5 shadow-card transition duration-300 ease-out hover:-translate-y-1 hover:border-electric-500/40">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-electric-500/25 to-violet-500/25 text-electric-300 ring-1 ring-inset ring-white/10">
                  <Icon className="size-5" aria-hidden />
                </span>
                <p className="pt-2 text-[15px] leading-snug text-mist-100">{text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
