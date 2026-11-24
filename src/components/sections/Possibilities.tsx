import { Briefcase, Megaphone, TrendingUp, UserRound } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ITEMS = [
  {
    icon: UserRound,
    title: "Criar seu próprio site",
    text: "Desenvolva uma presença online para seu negócio, projeto, marca pessoal ou serviço.",
  },
  {
    icon: Megaphone,
    title: "Divulgar empresas",
    text: "Crie páginas para apresentar empresas, serviços, produtos, contatos e informações importantes.",
  },
  {
    icon: Briefcase,
    title: "Criar sites para clientes",
    text: "Utilize o conhecimento adquirido para desenvolver projetos de sites para empreendedores e empresas locais.",
  },
  {
    icon: TrendingUp,
    title: "Ampliar suas habilidades digitais",
    text: "Aprenda uma habilidade atual e explore novas possibilidades no mercado digital.",
  },
];

export function Possibilities() {
  return (
    <section id="possibilidades" className="relative isolate py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-12%] top-1/4 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(closest-side,rgb(34_211_238/0.1),transparent)]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="O que você poderá fazer"
          title={
            <>
              Uma habilidade que pode abrir <span className="grad-text-violet">novas possibilidades</span>
            </>
          }
          text="Após aprender o processo de criação de sites com IA, você poderá aplicar esse conhecimento em diferentes projetos."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, title, text }, index) => (
            <Reveal as="li" key={title} delay={index * 70} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-800/70 p-6 shadow-card transition duration-300 ease-out hover:-translate-y-1 hover:border-violet-400/40">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-2 -top-4 font-display text-[5rem] font-extrabold leading-none text-white/[0.04] transition-colors duration-300 group-hover:text-white/[0.07]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="relative flex size-12 items-center justify-center rounded-2xl bg-linear-to-br from-violet-500/25 to-electric-500/25 text-[#c4b5fd] ring-1 ring-inset ring-white/10">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h3 className="relative mt-6 font-display text-lg font-bold uppercase leading-snug tracking-tight text-mist-100">
                  {title}
                </h3>
                <p className="relative mt-3 text-[15px] leading-relaxed text-mist-300">{text}</p>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={200}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-mist-500">
            Os resultados dependem da prática, da dedicação e do contexto de cada aluno. O curso não promete ganhos
            ou resultados garantidos.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
