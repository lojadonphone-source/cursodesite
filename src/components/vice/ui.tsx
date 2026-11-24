import { useId, type AnchorHTMLAttributes, type ComponentType, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";
import { CHECKOUT_URL } from "@/config";

/** Classes de título no estilo pôster (Anton). */
export const TITLE = "font-poster text-[2.6rem] uppercase leading-[1] text-cream sm:text-6xl lg:text-[4.25rem]";
export const TITLE_SM = "font-poster text-[2.2rem] uppercase leading-[1] text-cream sm:text-5xl lg:text-[3.5rem]";

type Tone = "pink" | "orange" | "yellow" | "cyan" | "violet";

const TONE_TEXT: Record<Tone, string> = {
  pink: "border-hot-500/45 bg-hot-500/10 text-hot-400",
  orange: "border-sunset-500/45 bg-sunset-500/10 text-sunset-400",
  yellow: "border-sunset-300/45 bg-sunset-300/10 text-sunset-300",
  cyan: "border-neon-400/40 bg-neon-400/10 text-neon-400",
  violet: "border-purple-400/45 bg-purple-500/15 text-purple-300",
};

const TILE: Record<Tone, string> = {
  pink: "from-hot-500/30 to-purple-600/20 text-hot-400",
  orange: "from-sunset-400/30 to-hot-500/20 text-sunset-400",
  yellow: "from-sunset-300/30 to-sunset-500/20 text-sunset-300",
  cyan: "from-neon-400/25 to-electric-500/20 text-neon-400",
  violet: "from-purple-500/30 to-hot-500/20 text-purple-300",
};

const STICKER: Record<"yellow" | "pink" | "orange" | "cream", string> = {
  yellow: "bg-sunset-300 text-vice-950",
  pink: "bg-hot-500 text-white",
  orange: "bg-sunset-500 text-vice-950",
  cream: "bg-cream text-vice-950",
};

export const TONES: Tone[] = ["pink", "orange", "violet", "cyan"];

/** Símbolo da edição Vice: colchetes de código com gradiente de pôr do sol. */
export function ViceMark({ className }: { className?: string }) {
  const id = useId();
  const gradient = `${id}-gradient`;

  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={gradient} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffd166" />
          <stop offset="0.5" stopColor="#ff2e88" />
          <stop offset="1" stopColor="#8b2ff7" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="13" fill={`url(#${gradient})`} />
      <path
        d="M17 18 11 24l6 6M25 18l6 6-6 6"
        fill="none"
        stroke="#fff"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M36 7l1.4 3.6L41 12l-3.6 1.4L36 17l-1.4-3.6L31 12l3.6-1.4z" fill="#fff" />
    </svg>
  );
}

/** Estrela de quatro pontas usada nos rótulos. */
export function Flash({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true" focusable="false" fill="currentColor">
      <path d="M8 0l1.9 6.1L16 8l-6.1 1.9L8 16 6.1 9.9 0 8l6.1-1.9z" />
    </svg>
  );
}

interface KickerProps {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}

/** Rótulo curto exibido acima dos títulos. */
export function Kicker({ children, tone = "pink", className }: KickerProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em]",
        TONE_TEXT[tone],
        className,
      )}
    >
      <Flash className="size-3" />
      {children}
    </span>
  );
}

interface StickerProps {
  children: ReactNode;
  tone?: keyof typeof STICKER;
  className?: string;
}

/** Adesivo com sombra dura, como nas capas de jogos. */
export function Sticker({ children, tone = "yellow", className }: StickerProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-lg border-2 border-vice-950 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.12em] shadow-[3px_3px_0_0_#0d0517]",
        STICKER[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

interface CardProps {
  children: ReactNode;
  className?: string;
}

/** Cartão padrão da edição. */
export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-3xl border-2 border-white/12 bg-vice-900/90 shadow-[0_28px_60px_-32px_rgba(0,0,0,0.95)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

interface IconTileProps {
  icon: ComponentType<{ className?: string }>;
  tone?: Tone;
  className?: string;
}

/** Ícone dentro de um azulejo com gradiente. */
export function IconTile({ icon: Icon, tone = "pink", className }: IconTileProps) {
  return (
    <span
      className={cn(
        "flex size-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-linear-to-br",
        TILE[tone],
        className,
      )}
    >
      <Icon className="size-6" aria-hidden />
    </span>
  );
}

interface ViceBuyButtonProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children"> {
  children: ReactNode;
  href?: string;
  size?: "md" | "lg" | "xl";
  arrow?: boolean;
}

const SIZES = {
  md: "min-h-11 px-5 py-2.5 text-[15px]",
  lg: "min-h-14 px-6 py-4 text-lg",
  xl: "min-h-16 px-5 py-4 text-lg leading-tight sm:min-h-[4.25rem] sm:px-8 sm:text-xl sm:leading-tight",
} as const;

/**
 * Botão verde de compra com relevo.
 * Por padrão leva ao checkout configurado em src/config.ts.
 */
export function ViceBuyButton({ children, href = CHECKOUT_URL, size = "lg", arrow = true, className, ...rest }: ViceBuyButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "group/btn relative isolate inline-flex select-none items-center justify-center gap-3 overflow-hidden rounded-xl border-2 border-white/35 bg-linear-to-b from-cta-500 via-cta-600 to-cta-700 font-poster uppercase tracking-wide text-white shadow-[0_6px_0_0_#0b6b2f,0_24px_50px_-14px_rgb(34_197_94/0.7)] transition duration-200 ease-out hover:-translate-y-1 hover:brightness-110 hover:shadow-[0_9px_0_0_#0b6b2f,0_30px_50px_-14px_rgb(34_197_94/0.75)] active:translate-y-[3px] active:brightness-95 active:shadow-[0_2px_0_0_#0b6b2f,0_10px_24px_-10px_rgb(34_197_94/0.6)]",
        SIZES[size],
        className,
      )}
      {...rest}
    >
      <span aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/45" />
      <span className="relative flex items-center gap-3">
        {children}
        {arrow && (
          <ArrowRight
            aria-hidden
            className="size-5 shrink-0 transition-transform duration-200 ease-out group-hover/btn:translate-x-1"
          />
        )}
      </span>
    </a>
  );
}

/** Palmeira em silhueta usada na cenografia das seções. */
export function Palm({ className }: { className?: string }) {
  const leafId = useId();
  const angles = [-80, -46, -10, 26];

  return (
    <svg viewBox="0 0 260 300" className={className} aria-hidden="true" focusable="false" fill="currentColor">
      <defs>
        <path id={leafId} d="M0 0C14 -30 52 -50 92 -34C100 -30 100 -24 90 -24C56 -22 24 -12 0 0Z" />
      </defs>
      <path d="M138 300C142 236 128 168 122 100L136 98C136 170 152 236 156 300Z" />
      {angles.map((angle) => (
        <g key={angle}>
          <use href={`#${leafId}`} transform={`translate(129 98) rotate(${angle})`} />
          <use href={`#${leafId}`} transform={`translate(129 98) scale(-1 1) rotate(${angle})`} />
        </g>
      ))}
      <circle cx="124" cy="104" r="5" />
      <circle cx="134" cy="106" r="5" />
    </svg>
  );
}

/** Selo circular da garantia de 7 dias. */
export function ViceSeal({ className }: { className?: string }) {
  const id = useId();
  const gradient = `${id}-gradient`;
  const arcTop = `${id}-arc-top`;
  const arcBottom = `${id}-arc-bottom`;
  const title = `${id}-title`;
  const poster = "Anton, Impact, sans-serif";

  const rays = Array.from({ length: 48 }, (_, index) => {
    const radius = index % 2 === 0 ? 86 : 76;
    const angle = (Math.PI * 2 * index) / 48 - Math.PI / 2;
    return `${(130 + radius * Math.cos(angle)).toFixed(1)},${(130 + radius * Math.sin(angle)).toFixed(1)}`;
  }).join(" ");

  return (
    <svg viewBox="0 0 260 260" className={className} role="img" aria-labelledby={title} focusable="false">
      <title id={title}>Selo de garantia incondicional de 7 dias</title>
      <defs>
        <linearGradient id={gradient} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffd166" />
          <stop offset="0.5" stopColor="#ff7a18" />
          <stop offset="1" stopColor="#ff2e88" />
        </linearGradient>
      </defs>

      <circle cx="130" cy="130" r="126" fill="none" stroke="#ff2e88" strokeWidth="2" strokeDasharray="3 8" strokeLinecap="round" />
      <circle cx="130" cy="130" r="116" fill="#fff4e6" stroke="#ff2e88" strokeWidth="4" />
      <circle cx="130" cy="130" r="98" fill="#0d0517" />
      <polygon points={rays} fill={`url(#${gradient})`} />
      <circle cx="130" cy="130" r="66" fill={`url(#${gradient})`} />

      <path id={arcTop} d="M 21,130 A 109,109 0 0 1 239,130" fill="none" />
      <path id={arcBottom} d="M 26,130 A 104,104 0 0 0 234,130" fill="none" />
      <text fill="#0d0517" fontSize="15" letterSpacing="2.4" fontFamily={poster}>
        <textPath href={`#${arcTop}`} startOffset="50%" textAnchor="middle">
          GARANTIA INCONDICIONAL
        </textPath>
      </text>
      <text fill="#0d0517" fontSize="15" letterSpacing="2.4" fontFamily={poster}>
        <textPath href={`#${arcBottom}`} startOffset="50%" textAnchor="middle">
          7 DIAS DE GARANTIA
        </textPath>
      </text>

      <text x="130" y="145" textAnchor="middle" fill="#fff4e6" fontSize="64" fontFamily={poster}>
        7
      </text>
      <text x="130" y="165" textAnchor="middle" fill="#0d0517" fontSize="11" letterSpacing="2.6" fontFamily={poster}>
        DIAS
      </text>
    </svg>
  );
}
