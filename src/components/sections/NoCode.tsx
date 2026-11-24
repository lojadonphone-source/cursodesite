import { ArrowRight, Code, ListChecks, MousePointerClick, X } from "lucide-react";
import { CheckBullet } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const BEFORE = [
  "Códigos e linguagens de programação",
  "Design técnico e ferramentas complicadas",
  "Começar tudo do zero, sozinho",
  "Depender de terceiros para pequenas mudanças",
];

const AFTER = [
  "Comandos simples, escritos em português",
  "Estruturas, textos e layouts criados pela IA",
  "Um passo a passo para seguir desde a primeira aula",
  "Autonomia para criar e ajustar seus próprios sites",
];

const CARDS = [
  {
    icon: Code,
    title: "Sem programar",
    text: "Aprenda a criar sites utilizando ferramentas de inteligência artificial, mesmo começando do absoluto zero.",
  },
  {
    icon: ListChecks,
    title: "Passo a passo",
    text: "Acompanhe aulas práticas, objetivas e fáceis de entender, aplicando o conteúdo enquanto aprende.",
  },
  {
    icon: MousePointerClick,
    title: "Na prática",
    text: "Não fique apenas na teoria. Aprenda a desenvolver projetos reais e coloque seus conhecimentos em prática.",
  },
];

export function NoCode() {
  return (
    <section id="sem-programar" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Você não precisa saber programar"
          title={
            <>
              Acha que criar um site é complicado? <span className="grad-text-sky">A IA mudou isso.</span>
            </>
          }
          text={
            <>
              <p>
                Durante muito tempo, criar um site exigia conhecimentos de programação, design, códigos e
                ferramentas complicadas.
              </p>
              <p>
                Hoje, com as ferramentas de inteligência artificial e os comandos certos, você pode acelerar esse
                processo e construir páginas modernas sem precisar começar do zero.
              </p>
            </>
          }
        />

        {/* Antes x Hoje */}
        <Reveal delay={200} className="mt-12">
          <div className="grid items-stretch gap-3 md:grid-cols-[1fr_auto_1fr] md:gap-4">
            <div className="rounded-3xl border border-white/10 bg-ink-900/70 p-6 sm:p-8">
              <h3 className="font-display text-xs font-bold uppercase tracking-[0.16em] text-mist-500">
                Como era antes
              </h3>
              <ul className="mt-5 space-y-3.5">
                {BEFORE.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-snug text-mist-300">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-white/15 text-mist-500">
                      <X className="size-3" strokeWidth={2.5} aria-hidden />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-center">
              <span className="flex size-11 rotate-90 items-center justify-center rounded-full border border-electric-500/40 bg-electric-500/15 text-electric-300 transition-transform duration-300 md:rotate-0">
                <ArrowRight className="size-5" aria-hidden />
              </span>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-electric-500/35 bg-electric-500/[0.08] p-6 sm:p-8">
              <div
                aria-hidden
                className="absolute -right-16 -top-16 size-48 rounded-full bg-[radial-gradient(closest-side,rgb(59_130_246/0.35),transparent)]"
              />
              <h3 className="relative font-display text-xs font-bold uppercase tracking-[0.16em] text-electric-300">
                Hoje, com a IA
              </h3>
              <ul className="relative mt-5 space-y-3.5">
                {AFTER.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-snug text-mist-100">
                    <CheckBullet className="mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-mist-300 sm:text-lg">
          Neste curso, você aprenderá a orientar a inteligência artificial para criar estruturas, textos, seções,
          layouts e sites completos.
        </p>

        {/* Cards */}
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {CARDS.map(({ icon: Icon, title, text }, index) => (
            <Reveal as="li" key={title} delay={index * 80} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-ink-800/70 p-6 shadow-card transition duration-300 ease-out hover:-translate-y-1 hover:border-electric-500/40 sm:p-8">
                <div
                  aria-hidden
                  className="absolute -right-12 -top-12 size-40 rounded-full bg-[radial-gradient(closest-side,rgb(59_130_246/0.3),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <span className="relative flex size-12 items-center justify-center rounded-2xl bg-linear-to-br from-electric-500/25 to-violet-500/25 text-electric-300 ring-1 ring-inset ring-white/10">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h3 className="relative mt-6 font-display text-xl font-bold uppercase tracking-tight text-mist-100">
                  {title}
                </h3>
                <p className="relative mt-3 text-[15px] leading-relaxed text-mist-300">{text}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
