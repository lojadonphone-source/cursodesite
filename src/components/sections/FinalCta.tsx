import { CreditCard, Globe, ShieldCheck } from "lucide-react";
import { PRICING } from "@/config";
import { BuyButton } from "@/components/ui/Buttons";
import { Reveal } from "@/components/ui/Reveal";
import { LogoMark } from "@/components/ui/Icons";

const MICRO = [
  { icon: Globe, text: "Acesso online" },
  { icon: CreditCard, text: "Compra única" },
  { icon: ShieldCheck, text: "Garantia de 7 dias" },
];

export function FinalCta() {
  return (
    <section id="cta-final" className="relative isolate overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="pattern-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,black_5%,transparent_75%)]" />
        <div className="absolute left-1/2 top-1/2 h-[34rem] w-[54rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(59_130_246/0.22),transparent)]" />
        <div className="absolute bottom-[-20%] right-[10%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(closest-side,rgb(139_92_246/0.18),transparent)]" />
        <div className="pattern-noise absolute inset-0 opacity-[0.04]" />
      </div>

      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal className="flex justify-center">
          <LogoMark className="size-14" />
        </Reveal>

        <Reveal
          as="h2"
          delay={80}
          className="mt-8 font-display text-[1.9rem] font-extrabold uppercase leading-[1.1] tracking-tight text-mist-100 sm:text-5xl"
        >
          Seu primeiro site profissional pode <span className="grad-text-sky">começar hoje</span>
        </Reveal>

        <Reveal as="p" delay={160} className="mt-6 text-base leading-relaxed text-mist-300 sm:text-lg">
          Não deixe a falta de conhecimento em programação impedir você de aprender algo novo.
        </Reveal>
        <Reveal as="p" delay={200} className="mt-3 text-base leading-relaxed text-mist-300 sm:text-lg">
          Descubra como utilizar a inteligência artificial para criar sites modernos, desenvolver projetos e explorar
          novas possibilidades.
        </Reveal>

        <Reveal delay={260} className="mt-10">
          <BuyButton size="xl" className="w-full">
            Quero começar agora por {PRICING.installments}x de {PRICING.installment}
          </BuyButton>
          <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-mist-300">
            {MICRO.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2">
                <Icon aria-hidden className="size-4 text-electric-300" />
                {text}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
