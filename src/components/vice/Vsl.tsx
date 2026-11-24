import { useEffect, useRef, useState, type ReactNode } from "react";
import { Check, ExternalLink, Play } from "lucide-react";
import vslPoster from "@/assets/vice/vsl.jpg";
import vslCover from "@/assets/vsl-cover.jpg";
import { VSL_COVER_URL, VSL_VIDEO_URL, VSL_YOUTUBE } from "@/config";
import { VSL_HIGHLIGHTS } from "@/content";
import { cn } from "@/utils/cn";
import { getYouTubeId, youtubeWatchUrl } from "@/lib/video";
import { Reveal } from "@/components/ui/Reveal";
import { ClickToPlayVideo } from "@/components/ui/ClickToPlayVideo";
import { Flash, Kicker, TITLE, ViceBuyButton } from "@/components/vice/ui";

const CHIPS = ["100% online", "Para iniciantes", "Aulas práticas"];
const PLAYER_TITLE = "Vídeo de apresentação do curso Criação de Sites com IA do Zero";

/** Moldura vertical 9:16 com borda em gradiente de pôr do sol. */
function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto max-w-full" style={{ height: "min(74vh, 620px)", aspectRatio: "9 / 16" }}>
      <div
        aria-hidden
        className="absolute -inset-1 rounded-[2rem] bg-linear-to-b from-sunset-300 via-hot-500 to-purple-600"
      />
      <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] border-4 border-vice-950 bg-vice-900">
        {children}
      </div>
    </div>
  );
}

/** Ilustração usada quando não há capa de vídeo. */
function VicePoster() {
  return (
    <img
      src={vslPoster}
      width={640}
      height={1138}
      alt=""
      aria-hidden
      className="absolute inset-0 size-full object-cover"
      loading="lazy"
      decoding="async"
    />
  );
}

/** Botão de play da capa real do vídeo: discreto, para não cobrir a arte. */
function CoverOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div aria-hidden className="absolute inset-0 bg-linear-to-t from-vice-950/35 via-transparent to-vice-950/20" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="relative flex size-20 items-center justify-center rounded-full bg-vice-950/55 backdrop-blur-sm transition-transform duration-200 ease-out group-hover:scale-105 group-active:scale-95">
          <span aria-hidden className="absolute -inset-2 animate-pulse-ring rounded-full border border-cream/60" />
          <Play className="size-8 translate-x-0.5 fill-cream text-cream" aria-hidden />
        </span>
      </div>
    </div>
  );
}

/** Botão de play apenas visual: o clique é capturado pelo player inteiro. */
function PlayVisual() {
  return (
    <span className="relative flex size-24 shrink-0 items-center justify-center rounded-full">
      <span aria-hidden className="absolute inset-0 animate-pulse-ring rounded-full bg-sunset-300/60" />
      <span className="relative flex size-[4.5rem] items-center justify-center rounded-full border-4 border-cream bg-linear-to-br from-sunset-400 to-hot-500 shadow-[0_18px_40px_-12px_rgba(255,46,136,0.9)] transition-transform duration-200 ease-out group-hover:scale-105 group-active:scale-95">
        <Play className="size-8 translate-x-0.5 fill-white text-white" aria-hidden />
      </span>
    </span>
  );
}

/** Elementos do espaço reservado, exibido enquanto nenhum vídeo é configurado. */
function ReservedOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div aria-hidden className="absolute inset-0 bg-linear-to-t from-vice-950/95 via-vice-950/60 to-vice-950/15" />

      <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-2 p-4">
        <span className="flex items-center gap-2 rounded-lg border-2 border-vice-950 bg-sunset-300 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.14em] text-vice-950 shadow-[2px_2px_0_0_#0d0517]">
          <Flash className="size-3" />
          Apresentação
        </span>
        <span className="rounded-lg border border-white/20 bg-vice-950/70 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.14em] text-cream backdrop-blur-md">
          Vídeo
        </span>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-6 pt-8 text-center">
        <PlayVisual />
        <div>
          <p className="font-poster text-2xl uppercase leading-none text-cream sm:text-[1.75rem]">Assista à apresentação</p>
          <p className="mx-auto mt-2 max-w-[15rem] text-sm leading-relaxed text-sand-300">
            Veja como criar seu primeiro site com IA, do zero até a publicação.
          </p>
        </div>
      </div>

      <ul className="absolute inset-x-0 bottom-0 flex flex-wrap items-center justify-center gap-2 p-4">
        {CHIPS.map((chip) => (
          <li
            key={chip}
            className="rounded-full border border-white/20 bg-vice-950/70 px-2.5 py-1 text-[10px] font-semibold text-sand-300 backdrop-blur-md"
          >
            {chip}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Espaço reservado, exibido enquanto nenhum vídeo é configurado. */
function ReservedPlayer() {
  const [notice, setNotice] = useState(false);
  const timer = useRef(0);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const handlePlay = () => {
    setNotice(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setNotice(false), 4200);
  };

  return (
    <>
      <VicePoster />
      <ReservedOverlay />
      <button
        type="button"
        onClick={handlePlay}
        aria-label="Reproduzir o vídeo de apresentação"
        className="absolute inset-0 h-full w-full cursor-pointer"
      />
      {notice && (
        <p
          role="status"
          className="animate-pop absolute inset-x-4 top-16 z-10 rounded-xl border border-white/15 bg-vice-800/95 px-4 py-3 text-center text-sm leading-snug text-cream backdrop-blur-md"
        >
          A apresentação em vídeo será publicada em breve.
        </p>
      )}
    </>
  );
}

/**
 * Player do vídeo de apresentação (VSL), sempre em 9:16.
 * YouTube (Shorts) tem prioridade; depois arquivo hospedado; por último, o espaço reservado.
 */
export function VslPlayer() {
  const youtubeId = getYouTubeId(VSL_YOUTUBE);
  const cover = VSL_COVER_URL.trim() || vslCover;

  if (youtubeId) {
    return (
      <>
        <Shell>
          <ClickToPlayVideo
            videoId={youtubeId}
            title={PLAYER_TITLE}
            cover={cover}
            fallback={<VicePoster />}
            overlayClassName="bg-vice-950/75"
            spinnerClassName="text-sunset-300"
          >
            <CoverOverlay />
          </ClickToPlayVideo>
        </Shell>
        <a
          href={youtubeWatchUrl(youtubeId)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-sand-500 underline-offset-4 transition-colors duration-200 hover:text-cream hover:underline"
        >
          <ExternalLink className="size-3.5" aria-hidden />
          Prefere assistir direto no YouTube?
        </a>
      </>
    );
  }

  if (VSL_VIDEO_URL.trim().length > 0) {
    return (
      <Shell>
        <video
          src={VSL_VIDEO_URL}
          controls
          playsInline
          preload="metadata"
          poster={cover}
          className="h-full w-full bg-black object-cover"
          aria-label={PLAYER_TITLE}
        >
          Seu navegador não consegue reproduzir este vídeo.{" "}
          <a href={VSL_VIDEO_URL} className="underline">
            Clique aqui para assistir
          </a>
          .
        </video>
      </Shell>
    );
  }

  return (
    <Shell>
      <ReservedPlayer />
    </Shell>
  );
}

export function Vsl() {
  return (
    <section id="video" className="relative border-y-2 border-white/5 bg-vice-900/45 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[auto_1fr] lg:gap-16">
        {/* Player */}
        <Reveal delay={120} className="flex flex-col items-center">
          <p className="mb-5 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-sunset-300">
            <Flash className="size-3" />
            Dê o play e veja como funciona
          </p>
          <VslPlayer />
        </Reveal>

        {/* Texto */}
        <div>
          <Reveal className="block">
            <Kicker tone="orange">Apresentação</Kicker>
          </Reveal>
          <Reveal as="h2" delay={80} className={cn("mt-5", TITLE)}>
            Assista e descubra como criar seu <span className="grad-sunset">primeiro site com IA</span>
          </Reveal>
          <Reveal delay={160} className="mt-6 space-y-4 text-base leading-relaxed text-sand-300 sm:text-lg">
            <p>Você não precisa ser programador, designer ou especialista em tecnologia.</p>
            <p>
              Neste treinamento, você vai aprender um processo simples e prático para utilizar a inteligência
              artificial na criação de sites profissionais, desde a ideia inicial até a publicação na internet.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <ul className="mt-6 space-y-3">
              {VSL_HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] leading-snug text-cream">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-cta-500/20 text-cta-400 ring-1 ring-inset ring-cta-400/50">
                    <Check className="size-3" strokeWidth={3} aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={280} className="mt-8">
            <ViceBuyButton size="xl" className="w-full sm:w-auto">
              Quero aprender esse método
            </ViceBuyButton>
            <p className="mt-4 text-sm text-sand-500">Compra segura • Garantia de 7 dias</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
