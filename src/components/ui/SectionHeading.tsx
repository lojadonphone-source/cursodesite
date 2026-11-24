import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { cn } from "@/utils/cn";
import { Reveal } from "@/components/ui/Reveal";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

/** Etiqueta pequena exibida acima dos títulos. */
export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-electric-500/30 bg-electric-500/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-electric-300 sm:text-xs",
        className,
      )}
    >
      <span aria-hidden className="size-1.5 rounded-full bg-electric-300" />
      {children}
    </span>
  );
}

interface CheckBulletProps {
  className?: string;
  tone?: "electric" | "green";
}

/** Ícone de confirmação usado em listas de benefícios. */
export function CheckBullet({ className, tone = "electric" }: CheckBulletProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "flex size-5 shrink-0 items-center justify-center rounded-full",
        tone === "green"
          ? "bg-cta-500/15 text-cta-400 ring-1 ring-inset ring-cta-400/40"
          : "bg-linear-to-br from-electric-500 to-violet-500 text-white",
        className,
      )}
    >
      <Check className="size-3" strokeWidth={3} />
    </span>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  align?: "center" | "left";
  className?: string;
}

/** Cabeçalho de seção: etiqueta, título e texto de apoio. */
export function SectionHeading({ eyebrow, title, text, align = "center", className }: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center", className)}>
      {eyebrow && (
        <Reveal className={cn("block", centered && "flex justify-center")}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal
        as="h2"
        delay={80}
        className="mt-5 font-display text-[1.75rem] font-extrabold uppercase leading-[1.12] tracking-tight text-mist-100 sm:text-[2.25rem] lg:text-[2.75rem]"
      >
        {title}
      </Reveal>
      {text && (
        <Reveal
          delay={160}
          className={cn("mt-5 space-y-4 text-base leading-relaxed text-mist-300 sm:text-lg", centered && "mx-auto max-w-2xl")}
        >
          {typeof text === "string" ? <p>{text}</p> : text}
        </Reveal>
      )}
    </div>
  );
}
