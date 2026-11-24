import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { BuyButton } from "@/components/ui/Buttons";
import { LogoMark } from "@/components/ui/Icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color] duration-300",
        scrolled ? "border-white/10 bg-ink-950/85 backdrop-blur-xl" : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:h-[4.5rem] sm:px-8">
        <a href="#topo" className="flex items-center gap-3 rounded-lg" aria-label="Criação de Sites com IA do Zero — voltar ao topo">
          <LogoMark className="size-9 shrink-0" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-[13px] font-bold uppercase tracking-wide text-mist-100">
              Criação de Sites
            </span>
            <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-electric-300">
              com IA do Zero
            </span>
          </span>
        </a>

        <BuyButton size="md" arrow={false} className="hidden sm:inline-flex">
          Garantir meu acesso
        </BuyButton>
        <BuyButton size="md" arrow={false} className="sm:hidden">
          Quero agora
        </BuyButton>
      </div>
    </header>
  );
}
