import { useEffect, useRef, useState, type ReactNode } from "react";
import { ExternalLink, Play } from "lucide-react";
import vslCover from "@/assets/vsl-cover.jpg";
import { VSL_COVER_URL, VSL_VIDEO_URL, VSL_YOUTUBE } from "@/config";
import { getYouTubeId, youtubeWatchUrl } from "@/lib/video";
import { ClickToPlayVideo } from "@/components/ui/ClickToPlayVideo";
import { LogoMark } from "@/components/ui/Icons";

const CHIPS = ["100% online", "Para iniciantes", "Aulas práticas"];
const PLAYER_TITLE = "Vídeo de apresentação do curso Criação de Sites com IA do Zero";

/** Moldura vertical 9:16, com borda em gradiente. */
function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto max-w-full" style={{ height: "min(74vh, 620px)", aspectRatio: "9 / 16" }}>
      <div
        aria-hidden
        className="absolute -inset-px rounded-[2rem] bg-linear-to-b from-white/25 via-electric-500/45 to-violet-500/45"
      />
      <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-ink-950 bg-ink-900">
        {children}
      </div>
    </div>
  );
}

/** Fundo usado quando não há capa de vídeo. */
function Backdrop() {
  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_0%,#172a5c_0%,#080c17_62%)]"
      />
      <div
        aria-hidden
        className="pattern-grid absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]"
      />
      <div
        aria-hidden
        className="absolute -left-1/2 bottom-[6%] h-1/2 w-[200%] rounded-full bg-[radial-gradient(closest-side,rgb(139_92_246/0.3),transparent)]"
      />
      <div
        aria-hidden
        className="absolute -right-1/2 top-[18%] h-1/3 w-[200%] rounded-full bg-[radial-gradient(closest-side,rgb(34_211_238/0.14),transparent)]"
      />
    </>
  );
}

/** Botão de play da capa real do vídeo: discreto, para não cobrir a arte. */
function CoverOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div aria-hidden className="absolute inset-0 bg-linear-to-t from-ink-950/35 via-transparent to-ink-950/20" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="relative flex size-20 items-center justify-center rounded-full bg-ink-950/55 backdrop-blur-sm transition-transform duration-200 ease-out group-hover:scale-105 group-active:scale-95">
          <span aria-hidden className="absolute -inset-2 animate-pulse-ring rounded-full border border-white/60" />
          <Play className="size-8 translate-x-0.5 fill-white text-white" aria-hidden />
        </span>
      </div>
    </div>
  );
}

/** Botão de play apenas visual: o clique é capturado pelo player inteiro. */
function PlayVisual() {
  return (
    <span className="relative flex size-24 shrink-0 items-center justify-center rounded-full">
      <span aria-hidden className="absolute inset-0 animate-pulse-ring rounded-full bg-electric-400/50" />
      <span className="relative flex size-[4.5rem] items-center justify-center rounded-full bg-linear-to-br from-electric-400 to-violet-600 shadow-[0_18px_40px_-12px_rgba(59,130,246,0.75)] transition-transform duration-200 ease-out group-hover:scale-105 group-active:scale-95">
        <Play className="size-8 translate-x-0.5 fill-white text-white" aria-hidden />
      </span>
    </span>
  );
}

/** Elementos do espaço reservado, exibido enquanto nenhum vídeo é configurado. */
function ReservedOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div aria-hidden className="absolute inset-x-0 top-0 flex items-center justify-between gap-2 p-4">
        <span className="flex items-center gap-2 rounded-full border border-white/10 bg-ink-950/70 py-1 pl-1 pr-3 backdrop-blur-md">
          <LogoMark className="size-6" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-mist-300">Apresentação</span>
        </span>
        <span className="rounded-full border border-white/10 bg-ink-950/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-mist-300 backdrop-blur-md">
          Vídeo
        </span>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 pt-10 text-center">
        <PlayVisual />
        <div>
          <p className="font-display text-lg font-bold uppercase tracking-wide text-mist-100 sm:text-xl">
            Assista à apresentação
          </p>
          <p className="mx-auto mt-2 max-w-[15rem] text-sm leading-relaxed text-mist-300">
            Veja como criar seu primeiro site com IA, do zero até a publicação.
          </p>
        </div>
      </div>

      <ul className="absolute inset-x-0 bottom-0 flex flex-wrap items-center justify-center gap-2 p-4">
        {CHIPS.map((chip) => (
          <li
            key={chip}
            className="rounded-full border border-white/10 bg-ink-950/70 px-2.5 py-1 text-[10px] font-semibold text-mist-300 backdrop-blur-md"
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
      <Backdrop />
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
          className="animate-pop absolute inset-x-4 top-16 z-10 rounded-xl border border-white/15 bg-ink-800/95 px-4 py-3 text-center text-sm leading-snug text-mist-100 backdrop-blur-md"
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
            fallback={<Backdrop />}
            overlayClassName="bg-ink-950/75"
            spinnerClassName="text-electric-300"
          >
            <CoverOverlay />
          </ClickToPlayVideo>
        </Shell>
        <a
          href={youtubeWatchUrl(youtubeId)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-mist-500 underline-offset-4 transition-colors duration-200 hover:text-mist-100 hover:underline"
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
