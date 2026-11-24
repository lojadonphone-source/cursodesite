import type { ReactNode } from "react";
import { Lock } from "lucide-react";
import { cn } from "@/utils/cn";
import type { NicheSite } from "@/content-extras";

interface MiniSiteProps {
  site: NicheSite;
  className?: string;
}

/**
 * Miniatura de um site em português brasileiro.
 * As medidas em "cqw" escalam junto com a largura da moldura; em molduras muito pequenas
 * (abaixo de 150px) os textos secundários viram barras, como numa tela vista de longe.
 */
export function MiniSite({ site, className }: MiniSiteProps) {
  const { theme } = site;
  const Icon = site.icon;

  return (
    <div
      className={cn("@container flex h-full w-full flex-col overflow-hidden text-left", className)}
      style={{ background: theme.hero, color: theme.heroText }}
    >
      {/* Topo do site */}
      <div
        className="flex h-[max(11px,13cqw)] shrink-0 items-center justify-between gap-[2cqw] px-[max(4px,4.5cqw)]"
        style={{ background: theme.header, color: theme.headerText }}
      >
        <span className="flex min-w-0 items-center gap-[max(2px,1.8cqw)] whitespace-nowrap font-display text-[length:max(6px,3.7cqw)] font-bold">
          <span
            className="flex size-[max(8px,4.6cqw)] shrink-0 items-center justify-center"
            style={{ color: theme.accent }}
          >
            <Icon className="size-full" aria-hidden />
          </span>
          <span className="truncate">{site.name}</span>
        </span>
        <span className="hidden shrink-0 gap-[3.4cqw] text-[length:max(5px,2.6cqw)] opacity-80 @min-[190px]:flex">
          {site.nav.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </span>
      </div>

      {/* Destaque */}
      <div className="relative flex min-h-0 flex-[1.75] items-center overflow-hidden" style={{ background: theme.hero }}>
        <span
          aria-hidden
          className="absolute -right-[6cqw] top-1/2 size-[34cqw] -translate-y-1/2 rounded-full"
          style={{ background: theme.accent }}
        />
        <span
          aria-hidden
          className="absolute right-[11cqw] top-1/2 flex size-[14cqw] -translate-y-1/2 items-center justify-center"
          style={{ color: theme.accentText }}
        >
          <Icon className="size-full" />
        </span>
        <div className="relative max-w-[64%] px-[max(4px,4.5cqw)]">
          <p className="font-display text-[length:max(6px,5.1cqw)] font-extrabold leading-[1.12]">{site.tagline}</p>
          <p
            className="mt-[max(1px,1.6cqw)] text-[length:max(5px,2.7cqw)] leading-snug @max-[150px]:hidden"
            style={{ color: theme.muted }}
          >
            {site.sub}
          </p>
          <span
            className="mt-[max(2px,2.6cqw)] inline-flex items-center whitespace-nowrap rounded-full px-[max(3px,3.4cqw)] py-[max(2px,1.8cqw)] text-[length:max(5px,2.8cqw)] font-bold leading-none"
            style={{ background: theme.accent, color: theme.accentText }}
          >
            {site.cta}
          </span>
        </div>
      </div>

      {/* Serviços */}
      <div className="grid min-h-0 flex-1 grid-cols-3 gap-[max(2px,2.4cqw)] p-[max(3px,3cqw)]">
        {site.cards.map((card) => (
          <div
            key={card.title}
            className="flex min-w-0 flex-col justify-center gap-[0.8cqw] rounded-[max(2px,1.8cqw)] px-[max(3px,2.8cqw)] py-[max(2px,1.6cqw)]"
            style={{ background: theme.card, color: theme.cardText }}
          >
            <span className="truncate font-bold text-[length:max(5px,2.9cqw)] @max-[150px]:hidden">{card.title}</span>
            {card.value && (
              <span
                className="truncate text-[length:max(5px,2.7cqw)] font-semibold @max-[150px]:hidden"
                style={{ color: theme.cardValue }}
              >
                {card.value}
              </span>
            )}
            <span
              aria-hidden
              className="hidden h-[3px] w-[70%] rounded-full @max-[150px]:block"
              style={{ background: theme.cardValue }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

interface BrowserFrameProps {
  url: string;
  children: ReactNode;
  className?: string;
}

/** Moldura de navegador com barra de endereço, usada para exibir os sites de exemplo. */
export function BrowserFrame({ url, children, className }: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border-2 border-white/15 bg-vice-950 shadow-[0_20px_40px_-22px_rgba(0,0,0,0.95)]",
        className,
      )}
    >
      <div className="flex h-7 items-center gap-1.5 border-b border-white/10 bg-vice-900 px-3">
        <span className="size-2 rounded-full bg-[#ff5f57]" />
        <span className="size-2 rounded-full bg-[#febc2e]" />
        <span className="size-2 rounded-full bg-[#28c840]" />
        <span className="ml-1.5 flex h-4.5 min-w-0 flex-1 items-center gap-1.5 rounded-full bg-white/10 px-2.5 text-[10px] text-sand-300">
          <Lock className="size-2.5 shrink-0 text-cta-400" aria-hidden />
          <span className="truncate">{url}</span>
        </span>
      </div>
      <div className="relative aspect-[4/3]">{children}</div>
    </div>
  );
}
