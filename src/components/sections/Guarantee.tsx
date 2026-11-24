import { ShieldCheck } from "lucide-react";
import { BuyButton } from "@/components/ui/Buttons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GuaranteeSeal } from "@/components/ui/Icons";

export function Guarantee() {
  return (
    <section id="garantia" className="relative isolate py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-[10%] top-1/4 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(closest-side,rgb(59_130_246/0.12),transparent)]" />
      </div>

      <div className="mx-auto grid max-w-5xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <Reveal className="relative flex justify-center">
          <div
            aria-hidden
            className="absolute inset-0 m-auto size-64 rounded-full bg-[radial-gradient(closest-side,rgb(59_130_246/0.25),transparent)] sm:size-80"
          />
          <GuaranteeSeal className="relative w-60 sm:w-72" />
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Garantia"
            title={
              <>
                Você tem <span className="grad-text-sky">7 dias</span> para experimentar
              </>
            }
          />
          <Reveal as="p" delay={160} className="mt-6 text-lg font-medium leading-relaxed text-mist-100">
            Sua compra possui garantia incondicional de 7 dias.
          </Reveal>
          <Reveal as="p" delay={220} className="mt-4 text-base leading-relaxed text-mist-300">
            Você pode acessar o curso, conhecer o conteúdo e avaliar se o treinamento atende às suas expectativas.
          </Reveal>
          <Reveal as="p" delay={280} className="mt-4 text-base leading-relaxed text-mist-300">
            Se dentro do prazo de garantia você decidir que o curso não é para você, poderá solicitar o reembolso
            conforme as condições da plataforma de compra.
          </Reveal>

          <Reveal delay={340}>
            <p className="mt-6 flex items-start gap-3 rounded-2xl border border-cta-500/30 bg-cta-500/10 p-4 text-[15px] leading-snug text-mist-100">
              <ShieldCheck className="mt-0.5 size-5 shrink-0 text-cta-400" aria-hidden />
              Você compra com tranquilidade e tem 7 dias de garantia.
            </p>
          </Reveal>

          <Reveal delay={400} className="mt-8">
            <BuyButton size="lg" className="w-full sm:w-auto">
              Quero garantir meu acesso
            </BuyButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
