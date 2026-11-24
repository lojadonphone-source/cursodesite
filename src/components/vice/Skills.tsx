import { SKILLS } from "@/content";
import { Reveal } from "@/components/ui/Reveal";
import { Card, IconTile, TONES } from "@/components/vice/ui";
import { SectionHead } from "@/components/vice/SectionHead";

/** "O que você vai aprender" apresentado como habilidades. */
export function Skills() {
  return (
    <section id="aprender" className="relative border-y-2 border-white/5 bg-vice-900/45 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead
          kicker="Habilidades que você vai desenvolver"
          title={
            <>
              Do zero até seu site <span className="grad-sunset">publicado na internet</span>
            </>
          }
          text="Um treinamento direto ao ponto para você aprender as principais etapas da criação de um site profissional utilizando inteligência artificial."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((skill, index) => (
            <Reveal as="li" key={skill.title} delay={(index % 3) * 70} className="h-full">
              <Card className="group h-full p-6 transition duration-300 ease-out hover:-translate-y-1 hover:border-hot-500/50">
                <div className="flex items-center justify-between">
                  <IconTile icon={skill.icon} tone={TONES[index % TONES.length]} />
                  <span className="font-poster text-2xl leading-none text-sand-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 font-poster text-[1.4rem] uppercase leading-[1.05] text-cream">{skill.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-sand-300">{skill.text}</p>
              </Card>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
