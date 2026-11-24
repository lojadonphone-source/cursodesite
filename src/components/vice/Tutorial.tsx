import tutorialImg from "@/assets/vice/tutorial.jpg";
import { NOCODE_CARDS, NOCODE_PARAGRAPHS } from "@/content";
import { cn } from "@/utils/cn";
import { Reveal } from "@/components/ui/Reveal";
import { Card, IconTile, Kicker, Sticker, TONES, TITLE } from "@/components/vice/ui";

/** "Você não precisa saber programar" — o tutorial antes das missões. */
export function Tutorial() {
  return (
    <section id="sem-programar" className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[20%] top-1/3 -z-10 size-[36rem] rounded-full bg-[radial-gradient(closest-side,rgb(255_46_136/0.16),transparent)]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        {/* Imagem */}
        <Reveal className="relative order-2 lg:order-1">
          <div aria-hidden className="vice-sun absolute -left-12 -top-12 -z-10 h-64 w-64" />
          <div className="-rotate-2 rounded-[1.25rem] border-[6px] border-cream bg-cream p-2 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.9)]">
            <img
              src={tutorialImg}
              width={800}
              height={600}
              alt="Aluno relaxado com o notebook enquanto uma parede de códigos se dissolve"
              className="aspect-[4/3] w-full rounded-[0.75rem] object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <Sticker tone="orange" className="absolute -right-2 top-6 rotate-3 sm:-right-4">
            Tutorial
          </Sticker>
        </Reveal>

        {/* Texto */}
        <div className="order-1 lg:order-2">
          <Reveal className="block">
            <Kicker>Você não precisa saber programar</Kicker>
          </Reveal>
          <Reveal as="h2" delay={80} className={cn("mt-5", TITLE)}>
            Acha que criar um site é complicado? <span className="grad-hot">A IA mudou isso.</span>
          </Reveal>
          <Reveal delay={160} className="mt-6 space-y-4 text-base leading-relaxed text-sand-300 sm:text-lg">
            {NOCODE_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="text-cream">
              Neste curso, você aprenderá a orientar a inteligência artificial para criar estruturas, textos, seções,
              layouts e sites completos.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Etapas */}
      <ul className="mx-auto mt-14 grid max-w-6xl gap-5 px-5 sm:grid-cols-3 sm:px-8">
        {NOCODE_CARDS.map((card, index) => (
          <Reveal as="li" key={card.title} delay={index * 80} className="h-full">
            <Card className="h-full overflow-hidden p-6 transition duration-300 ease-out hover:-translate-y-1 hover:border-hot-500/50 sm:p-8">
              <span
                aria-hidden
                className="pointer-events-none absolute -right-1 -top-5 font-poster text-[6.5rem] leading-none text-white/[0.05]"
              >
                {index + 1}
              </span>
              <IconTile icon={card.icon} tone={TONES[index]} />
              <h3 className="mt-5 font-poster text-[1.6rem] uppercase leading-none text-cream">{card.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-sand-300">{card.text}</p>
            </Card>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
