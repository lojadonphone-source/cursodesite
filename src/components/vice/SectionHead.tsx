import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { Reveal } from "@/components/ui/Reveal";
import { Kicker, TITLE } from "@/components/vice/ui";

type Tone = "pink" | "orange" | "yellow" | "cyan" | "violet";

interface SectionHeadProps {
  kicker: string;
  tone?: Tone;
  title: ReactNode;
  text?: ReactNode;
  align?: "center" | "left";
  className?: string;
}

/** Cabeçalho de seção da edição Vice: rótulo, título em pôster e texto de apoio. */
export function SectionHead({ kicker, tone = "pink", title, text, align = "center", className }: SectionHeadProps) {
  const centered = align === "center";

  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center", className)}>
      <Reveal className={cn("block", centered && "flex justify-center")}>
        <Kicker tone={tone}>{kicker}</Kicker>
      </Reveal>
      <Reveal as="h2" delay={80} className={cn("mt-5", TITLE)}>
        {title}
      </Reveal>
      {text && (
        <Reveal
          delay={160}
          className={cn("mt-6 space-y-4 text-base leading-relaxed text-sand-300 sm:text-lg", centered && "mx-auto max-w-2xl")}
        >
          {typeof text === "string" ? <p>{text}</p> : text}
        </Reveal>
      )}
    </div>
  );
}
