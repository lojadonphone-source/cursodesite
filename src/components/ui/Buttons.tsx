import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";
import { CHECKOUT_URL } from "@/config";

type Variant = "buy" | "soft";
type Size = "md" | "lg" | "xl";

interface CtaButtonProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children"> {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  external?: boolean;
}

const SIZES: Record<Size, string> = {
  md: "min-h-11 px-5 py-2.5 text-[13px] sm:text-sm",
  lg: "min-h-14 px-6 py-4 text-[15px] sm:text-base",
  xl: "min-h-16 px-5 py-4 text-[15px] leading-tight sm:min-h-[4.25rem] sm:px-8 sm:text-lg sm:leading-tight",
};

const VARIANTS: Record<Variant, string> = {
  buy: "bg-linear-to-b from-cta-500 via-cta-600 to-cta-700 shadow-cta [text-shadow:0_1px_0_rgb(0_0_0/0.28)] hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_22px_50px_-14px_rgb(34_197_94/0.7)] active:translate-y-0 active:scale-[0.985] active:brightness-95",
  soft: "surface-glass text-mist-100 hover:-translate-y-0.5 hover:bg-white/10 active:translate-y-0 active:scale-[0.985]",
};

interface BuyButtonProps extends Omit<CtaButtonProps, "href"> {
  href?: string;
}

/** Botão verde de compra. Por padrão leva ao checkout configurado em src/config.ts. */
export function BuyButton({ href = CHECKOUT_URL, ...rest }: BuyButtonProps) {
  return <CtaButton href={href} {...rest} />;
}

/** Botão de ação genérico. Por padrão rola até a seção de oferta. */
export function CtaButton({
  children,
  href = "#oferta",
  variant = "buy",
  size = "lg",
  arrow = true,
  external = false,
  className,
  ...rest
}: CtaButtonProps) {
  const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <a
      href={href}
      className={cn(
        "group/btn relative isolate inline-flex select-none items-center justify-center gap-3 overflow-hidden rounded-2xl font-display font-bold uppercase transition duration-200 ease-out",
        VARIANTS[variant],
        SIZES[size],
        className,
      )}
      {...externalProps}
      {...rest}
    >
      <span aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/40" />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full"
      />
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
