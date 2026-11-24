import { useRef } from "react";
import empreendedorImg from "@/assets/vice/empreendedor.jpg";
import { BARBERSHOP } from "@/content-extras";
import { POSSIBILITIES } from "@/content";
import { cn } from "@/utils/cn";
import { useQuadTransform, type Point } from "@/hooks/useQuadTransform";
import { Reveal } from "@/components/ui/Reveal";
import { Card, IconTile, Kicker, Sticker, TITLE, TONES } from "@/components/vice/ui";
import { BrowserFrame, MiniSite } from "@/components/vice/Sites";

/** Cantos da tela do tablet na foto, em % da imagem (topo esquerdo, topo direito, base direita, base esquerdo). */
const SCREEN_CORNERS: Point[] = [
  [61.43, 38.94],
  [88.16, 38.94],
  [85.29, 57.18],
  [57.68, 55.8],
];

const SCREEN_BOX = {
  left: Math.min(...SCREEN_CORNERS.map(([x]) => x)),
  top: Math.min(...SCREEN_CORNERS.map(([, y]) => y)),
  width: Math.max(...SCREEN_CORNERS.map(([x]) => x)) - Math.min(...SCREEN_CORNERS.map(([x]) => x)),
  height: Math.max(...SCREEN_CORNERS.map(([, y]) => y)) - Math.min(...SCREEN_CORNERS.map(([, y]) => y)),
};

/** Os mesmos cantos, agora em fração da própria caixa do site (0 a 1). */
const RELATIVE_CORNERS: Point[] = SCREEN_CORNERS.map(
  ([x, y]) => [(x - SCREEN_BOX.left) / SCREEN_BOX.width, (y - SCREEN_BOX.top) / SCREEN_BOX.height] as const,
);

/** Site da barbearia encaixado na tela do tablet, seguindo a perspectiva da foto. */
function TabletSite() {
  const ref = useRef<HTMLDivElement>(null);
  const transform = useQuadTransform(ref, RELATIVE_CORNERS);

  return (
    <div
      ref={ref}
      aria-hidden
      className="absolute"
      style={{
        left: `${SCREEN_BOX.left}%`,
        top: `${SCREEN_BOX.top}%`,
        width: `${SCREEN_BOX.width}%`,
        height: `${SCREEN_BOX.height}%`,
        transformOrigin: "0 0",
        transform: transform || undefined,
      }}
    >
      <MiniSite site={BARBERSHOP} />
      <span className="pointer-events-none absolute inset-0 bg-linear-to-tr from-transparent via-transparent to-white/20" />
    </div>
  );
}

/** O que você poderá fazer após aprender. */
export function Possibilities() {
  return (
    <section id="possibilidades" className="relative isolate border-y-2 border-white/5 bg-vice-900/45 py-20 sm:py-28 lg:pb-36">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* Imagem */}
        <Reveal className="relative order-2 lg:order-1">
          <div aria-hidden className="vice-sun absolute -right-10 -top-10 -z-10 h-60 w-60" />
          <div className="relative">
            <div className="-rotate-2 rounded-[1.25rem] border-[6px] border-cream bg-cream p-2 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.9)]">
              <div className="relative">
                <img
                src={empreendedorImg}
                width={680}
                height={850}
                alt="Dono de uma barbearia mostrando no tablet o site do próprio negócio"
                className="aspect-[4/5] w-full rounded-[0.75rem] object-cover"
                loading="lazy"
                decoding="async"
              />
              <TabletSite />
            </div>
          </div>
            <Sticker tone="cream" className="absolute -left-2 bottom-10 -rotate-6 sm:-left-4">
              Novos caminhos
            </Sticker>
          </div>

          {/* Ampliação do site que aparece no tablet */}
          <div className="relative z-10 mx-auto mt-6 w-full max-w-[15rem] lg:absolute lg:-bottom-12 lg:-right-10 lg:mt-0 lg:w-56 lg:max-w-none lg:rotate-2">
            <BrowserFrame url={BARBERSHOP.domain}>
              <MiniSite site={BARBERSHOP} />
            </BrowserFrame>
            <p className="mt-2 text-center text-xs font-semibold text-cream lg:text-left">
              Site da barbearia <span className="font-normal text-sand-500">· ampliação do tablet</span>
            </p>
          </div>
        </Reveal>

        {/* Texto e cartões */}
        <div className="order-1 lg:order-2">
          <Reveal className="block">
            <Kicker tone="violet">O que você poderá fazer</Kicker>
          </Reveal>
          <Reveal as="h2" delay={80} className={cn("mt-5", TITLE)}>
            Uma habilidade que pode abrir <span className="grad-hot">novas possibilidades</span>
          </Reveal>
          <Reveal as="p" delay={160} className="mt-6 text-base leading-relaxed text-sand-300 sm:text-lg">
            Após aprender o processo de criação de sites com IA, você poderá aplicar esse conhecimento em diferentes
            projetos — como o site dessa barbearia, criado para apresentar os serviços e receber agendamentos.
          </Reveal>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {POSSIBILITIES.map((item, index) => (
              <Reveal as="li" key={item.title} delay={index * 70} className="h-full">
                <Card className="h-full p-5 transition duration-300 ease-out hover:-translate-y-1 hover:border-hot-500/50">
                  <IconTile icon={item.icon} tone={TONES[index % TONES.length]} />
                  <h3 className="mt-4 font-poster text-xl uppercase leading-[1.05] text-cream">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-sand-300">{item.text}</p>
                </Card>
              </Reveal>
            ))}
          </ul>

          <Reveal as="p" delay={240} className="mt-6 text-sm leading-relaxed text-sand-500">
            Os resultados dependem da prática, da dedicação e do contexto de cada aluno. O curso não promete ganhos
            ou resultados garantidos.
          </Reveal>
        </div>
      </div>
    </section>
  );
}
