import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/utils/cn";
import { youtubeEmbedUrl } from "@/lib/video";

interface ClickToPlayVideoProps {
  videoId: string;
  /** Descrição do vídeo para leitores de tela. */
  title: string;
  /** Imagem de capa exibida antes do play, na proporção 9:16. */
  cover: string;
  /** Fundo estático exibido caso a capa não carregue. */
  fallback?: ReactNode;
  /** Elementos visuais por cima da capa (botão de play, etiquetas). Não devem ser clicáveis. */
  children: ReactNode;
  /** Cor do véu exibido enquanto o player carrega. */
  overlayClassName?: string;
  /** Cor do indicador de carregamento. */
  spinnerClassName?: string;
}

/**
 * Vídeo do YouTube em formato "clique para tocar":
 * mostra a capa e só carrega o player quando o visitante clica,
 * deixando a página mais leve e respeitando a escolha de cada navegador.
 */
export function ClickToPlayVideo({
  videoId,
  title,
  cover,
  fallback,
  children,
  overlayClassName,
  spinnerClassName,
}: ClickToPlayVideoProps) {
  const [active, setActive] = useState(false);
  const [fading, setFading] = useState(false);
  const [ready, setReady] = useState(false);
  const [coverFailed, setCoverFailed] = useState(false);
  const timers = useRef<number[]>([]);

  useEffect(
    () => () => {
      for (const timer of timers.current) window.clearTimeout(timer);
    },
    [],
  );

  /** Inicia o desaparecimento da capa quando o player avisa que carregou. */
  const finish = () => {
    if (fading || ready) return;
    setFading(true);
    timers.current.push(window.setTimeout(() => setReady(true), 450));
  };

  const activate = () => {
    if (active) return;
    setActive(true);
    // Reserva: se o player não conseguir avisar, a capa sai mesmo assim.
    timers.current.push(window.setTimeout(finish, 6000));
  };

  return (
    <div className="group relative h-full w-full overflow-hidden">
      {!ready && fallback}
      {!ready && !coverFailed && (
        <img
          src={cover}
          alt=""
          aria-hidden
          className="absolute inset-0 size-full object-cover"
          decoding="async"
          onError={() => setCoverFailed(true)}
        />
      )}

      {!ready && children}

      {!ready && (
        <button
          type="button"
          onClick={activate}
          aria-label="Reproduzir o vídeo de apresentação"
          tabIndex={active ? -1 : 0}
          className="absolute inset-0 z-10 h-full w-full cursor-pointer"
        />
      )}

      {active && (
        <iframe
          src={youtubeEmbedUrl(videoId)}
          title={title}
          onLoad={finish}
          className="absolute inset-0 z-20 h-full w-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      )}

      {active && !ready && (
        <div
          aria-hidden
          className={cn(
            "absolute inset-0 z-30 flex items-center justify-center backdrop-blur-sm transition-opacity duration-[450ms]",
            overlayClassName,
            fading && "opacity-0",
          )}
        >
          <span
            className={cn("size-10 animate-spin rounded-full border-[3px] border-white/25 border-t-current", spinnerClassName)}
          />
        </div>
      )}
    </div>
  );
}
