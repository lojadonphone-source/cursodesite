import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/utils/cn";
import { WHATSAPP_URL } from "@/config";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppIcon } from "@/components/ui/Icons";

const FAQ = [
  {
    question: "Preciso saber programar?",
    answer:
      "Não. O curso foi desenvolvido para iniciantes. Você aprenderá a utilizar inteligência artificial e ferramentas de criação de sites sem precisar começar aprendendo programação.",
  },
  {
    question: "Preciso ter experiência com design?",
    answer:
      "Não. Você aprenderá a utilizar prompts e orientações para ajudar a IA a criar estruturas e layouts profissionais.",
  },
  {
    question: "Como são as aulas?",
    answer: "O curso é composto por videoaulas práticas, simples e objetivas, acompanhadas passo a passo.",
  },
  {
    question: "Posso estudar pelo celular?",
    answer:
      "O acesso é online. O conteúdo poderá ser acessado pelos dispositivos compatíveis com a plataforma de disponibilização do curso.",
  },
  {
    question: "O curso possui hospedagem gratuita?",
    answer:
      "Sim. Você aprenderá como utilizar opções de hospedagem gratuita para publicar seu projeto, conforme as ferramentas e métodos apresentados nas aulas.",
  },
  {
    question: "Preciso pagar mensalidade?",
    answer:
      "Não. O curso é uma compra única, sem mensalidade do treinamento. Você pode pagar à vista por R$ 47,90 ou parcelar em até 12x de R$ 4,95 no cartão de crédito. Eventuais custos de serviços externos, ferramentas ou domínio próprio são independentes e poderão variar.",
  },
  {
    question: "Vou aprender a criar sites para empresas?",
    answer:
      "Sim. Você aprenderá a estruturar sites para empresas, negócios, prestadores de serviços e diferentes projetos.",
  },
  {
    question: "Posso oferecer sites para clientes?",
    answer:
      "O conhecimento pode ser aplicado em projetos próprios ou para clientes. O curso ensina fundamentos e processos que poderão ser utilizados para desenvolver seus próprios projetos.",
  },
  {
    question: "Como funciona a garantia?",
    answer:
      "Você possui 7 dias de garantia para avaliar o treinamento e, caso não queira continuar, poderá solicitar o reembolso dentro do prazo de garantia.",
  },
  {
    question: "Como recebo acesso?",
    answer:
      "Após a confirmação do pagamento, o acesso será disponibilizado conforme os procedimentos da plataforma de venda.",
  },
];

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
        "rounded-2xl border transition-colors duration-300",
        open ? "border-electric-500/40 bg-ink-800/80" : "border-white/10 bg-ink-900/70 hover:bg-ink-800/60",
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
          <span className="font-display text-base font-bold leading-snug text-mist-100">{question}</span>
          <span
            className={cn(
              "flex size-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300",
              open ? "border-electric-500/50 text-electric-300" : "border-white/10 text-mist-300",
            )}
          >
            <Plus aria-hidden className={cn("size-4 transition-transform duration-300 ease-out", open && "rotate-45")} />
          </span>
        </button>
      </h3>
      <div id={panelId} role="region" aria-labelledby={buttonId} aria-hidden={!open} className="accordion-panel" data-open={open}>
        <div>
          <p className="px-5 pb-5 text-[15px] leading-relaxed text-mist-300">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative border-t border-white/5 bg-ink-900/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title={
            <>
              Perguntas <span className="grad-text-violet">frequentes</span>
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
            className="surface-glass mx-auto mt-10 flex max-w-3xl items-center justify-between gap-4 rounded-3xl p-5 transition duration-200 hover:-translate-y-0.5 hover:bg-white/10 sm:p-6"
          >
            <span className="flex items-center gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#25D366] text-white">
                <WhatsAppIcon className="size-6" />
              </span>
              <span>
                <span className="block font-display text-base font-bold text-mist-100">Ainda tem dúvidas?</span>
                <span className="mt-1 block text-sm text-mist-300">Fale conosco pelo WhatsApp e tire todas as suas questões.</span>
              </span>
            </span>
            <span className="hidden shrink-0 rounded-2xl border border-white/15 px-4 py-2.5 font-display text-sm font-bold uppercase tracking-wide text-mist-100 sm:block">
              Falar agora
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
