import { useState } from "react";
import { Plus, ShieldCheck } from "lucide-react";
import cidadeImg from "@/assets/vice/cidade.jpg";
import { cn } from "@/utils/cn";
import { PRICING, WHATSAPP_URL } from "@/config";
import { FAQ, TRUST_MICRO } from "@/content";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { Kicker, Palm, TITLE, ViceBuyButton, ViceMark, ViceSeal } from "@/components/vice/ui";
import { SectionHead } from "@/components/vice/SectionHead";

/** Garantia de 7 dias. */
export function Guarantee() {
  return (
    <section id="garantia" className="relative isolate py-20 sm:py-28">
      <div className="mx-auto grid max-w-5xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <div className="relative flex justify-center">
          <div
            aria-hidden
            className="vice-sun absolute left-1/2 top-1/2 -z-10 aspect-square w-[22rem] max-w-none -translate-x-1/2 -translate-y-1/2 sm:w-[28rem]"
          />
          <Reveal className="relative z-10">
            <ViceSeal className="w-64 sm:w-80" />
          </Reveal>
        </div>

        <div>
          <Reveal className="block">
            <Kicker tone="yellow">Garantia</Kicker>
          </Reveal>
          <Reveal as="h2" delay={80} className={cn("mt-5", TITLE)}>
            Você tem <span className="grad-sunset">7 dias</span> para experimentar
          </Reveal>
          <Reveal as="p" delay={160} className="mt-6 text-lg font-medium leading-relaxed text-cream">
            Sua compra possui garantia incondicional de 7 dias.
          </Reveal>
          <Reveal as="p" delay={220} className="mt-4 text-base leading-relaxed text-sand-300">
            Você pode acessar o curso, conhecer o conteúdo e avaliar se o treinamento atende às suas expectativas.
          </Reveal>
          <Reveal as="p" delay={280} className="mt-4 text-base leading-relaxed text-sand-300">
            Se dentro do prazo de garantia você decidir que o curso não é para você, poderá solicitar o reembolso
            conforme as condições da plataforma de compra.
          </Reveal>

          <Reveal delay={340}>
            <p className="mt-6 flex items-start gap-3 rounded-2xl border-2 border-cta-500/40 bg-cta-500/10 p-4 text-[15px] leading-snug text-cream">
              <ShieldCheck className="mt-0.5 size-5 shrink-0 text-cta-400" aria-hidden />
              Você compra com tranquilidade e tem 7 dias de garantia.
            </p>
          </Reveal>

          <Reveal delay={400} className="mt-8">
            <ViceBuyButton className="w-full sm:w-auto">Quero garantir meu acesso</ViceBuyButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

interface FaqItemProps {
  index: number;
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}

function FaqItem({ index, question, answer, open, onToggle }: FaqItemProps) {
  const buttonId = `faq-${index}-botao`;
  const panelId = `faq-${index}-resposta`;

  return (
    <div
      className={cn(
        "rounded-2xl border-2 transition-colors duration-300",
        open ? "border-hot-500/60 bg-vice-800/90" : "border-white/12 bg-vice-900/90 hover:bg-vice-800/70",
      )}
    >
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 rounded-2xl p-5 text-left"
        >
          <span className="text-base font-bold leading-snug text-cream">{question}</span>
          <span
            className={cn(
              "flex size-8 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-300",
              open ? "border-hot-500/60 text-hot-400" : "border-white/15 text-sand-300",
            )}
          >
            <Plus aria-hidden className={cn("size-4 transition-transform duration-300 ease-out", open && "rotate-45")} />
          </span>
        </button>
      </h3>
      <div id={panelId} role="region" aria-labelledby={buttonId} aria-hidden={!open} className="accordion-panel" data-open={open}>
        <div>
          <p className="px-5 pb-5 text-[15px] leading-relaxed text-sand-300">{answer}</p>
        </div>
      </div>
    </div>
  );
}

/** Perguntas frequentes. */
export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative border-t-2 border-white/5 bg-vice-900/45 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead
          kicker="Dúvidas frequentes"
          tone="violet"
          title={
            <>
              Perguntas <span className="grad-hot">frequentes</span>
            </>
          }
          text="Reunimos as principais dúvidas de quem está começando. Se faltar alguma, é só falar com a gente."
        />

        <ul className="mx-auto mt-12 max-w-3xl space-y-3">
          {FAQ.map((item, index) => (
            <Reveal as="li" key={item.question} delay={Math.min(index, 5) * 40}>
              <FaqItem
                index={index}
                question={item.question}
                answer={item.answer}
                open={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </Reveal>
          ))}
        </ul>

        <Reveal delay={200}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-10 flex max-w-3xl items-center justify-between gap-4 rounded-3xl border-2 border-white/12 bg-vice-900/90 p-5 transition duration-200 hover:-translate-y-0.5 hover:border-[#25D366]/70 sm:p-6"
          >
            <span className="flex items-center gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#25D366] text-white">
                <WhatsAppIcon className="size-6" />
              </span>
              <span>
                <span className="block font-bold text-cream">Ainda tem dúvidas?</span>
                <span className="mt-1 block text-sm text-sand-300">
                  Fale conosco pelo WhatsApp e tire todas as suas questões.
                </span>
              </span>
            </span>
            <span className="hidden shrink-0 rounded-xl border-2 border-white/20 px-4 py-2.5 font-poster text-lg uppercase tracking-wide text-cream sm:block">
              Falar agora
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/** Última chamada para a oferta. */
export function FinalCta() {
  return (
    <section id="cta-final" className="relative isolate overflow-hidden py-28 sm:py-40">
      <img
        src={cidadeImg}
        width={1200}
        height={600}
        alt=""
        aria-hidden
        className="absolute inset-0 -z-20 size-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-vice-950/72" />
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-40 bg-linear-to-b from-vice-950 to-transparent" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-t from-vice-950 to-transparent" />
      <div aria-hidden className="pattern-scanlines absolute inset-0 -z-10" />
      <Palm className="absolute -bottom-10 -left-6 h-72 w-auto -scale-x-100 text-vice-950/90 lg:-left-4 lg:h-96" />
      <Palm className="absolute -bottom-10 -right-6 h-80 w-auto text-vice-950/90 lg:-right-4 lg:h-[26rem]" />

      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal className="flex justify-center">
          <ViceMark className="size-14" />
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-8 font-poster text-[2.75rem] uppercase leading-[1] text-cream sm:text-[4.5rem]"
        >
          Seu primeiro site profissional pode <span className="grad-sunset">começar hoje</span>
        </Reveal>
        <Reveal as="p" delay={160} className="mt-6 text-base leading-relaxed text-sand-300 sm:text-lg">
          Não deixe a falta de conhecimento em programação impedir você de aprender algo novo.
        </Reveal>
        <Reveal as="p" delay={200} className="mt-3 text-base leading-relaxed text-sand-300 sm:text-lg">
          Descubra como utilizar a inteligência artificial para criar sites modernos, desenvolver projetos e explorar
          novas possibilidades.
        </Reveal>

        <Reveal delay={260} className="mt-10">
          <ViceBuyButton size="xl" className="w-full">
            Quero começar agora por {PRICING.installments}x de {PRICING.installment}
          </ViceBuyButton>
          <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-sand-300">
            {TRUST_MICRO.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2">
                <Icon aria-hidden className="size-4 text-sunset-300" />
                {text}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
