import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { PRICING, WHATSAPP_URL } from "@/config";
import { useStickyVisibility } from "@/hooks/useStickyVisibility";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { ViceBuyButton, ViceMark } from "@/components/vice/ui";

export function ViceHeader() {
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
        "fixed inset-x-0 top-0 z-40 border-b-2 transition-[background-color,border-color] duration-300",
        scrolled ? "border-hot-500/40 bg-vice-950/85 backdrop-blur-xl" : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:h-[4.5rem] sm:px-8">
        <a
          href="#topo"
          className="flex items-center gap-3 rounded-lg"
          aria-label="Criação de Sites com IA do Zero — voltar ao topo"
        >
          <ViceMark className="size-9 shrink-0" />
          <span className="flex flex-col leading-none">
            <span className="font-poster text-[17px] uppercase tracking-wide text-cream">Criação de Sites</span>
            <span className="mt-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-hot-400">com IA do Zero</span>
          </span>
        </a>

        <ViceBuyButton size="md" arrow={false} className="hidden sm:inline-flex">
          Garantir meu acesso
        </ViceBuyButton>
        <ViceBuyButton size="md" arrow={false} className="sm:hidden">
          Quero agora
        </ViceBuyButton>
      </div>
    </header>
  );
}

/** Botão flutuante de WhatsApp no estilo da edição Vice. */
export function ViceFloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Dúvidas? Fale conosco pelo WhatsApp"
      className={cn(
        "wa-fab group fixed bottom-4 right-4 z-50 flex items-center gap-0 rounded-full bg-[#25D366] p-3.5 text-white shadow-[0_14px_36px_-10px_rgba(255,46,136,0.85)] ring-2 ring-cream/85 transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#2ee57a] active:scale-95 sm:bottom-6 sm:right-6 md:group-hover:gap-3 md:group-focus-visible:gap-3",
      )}
    >
      <span aria-hidden className="absolute inset-0 -z-10 animate-pulse-ring rounded-full bg-hot-500/60" />
      <WhatsAppIcon className="size-7 shrink-0" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 ease-out md:block md:group-hover:max-w-[200px] md:group-hover:pr-2 md:group-hover:opacity-100 md:group-focus-visible:max-w-[200px] md:group-focus-visible:pr-2 md:group-focus-visible:opacity-100">
        Dúvidas? Fale conosco
      </span>
    </a>
  );
}

/** Barra fixa de compra, exibida somente em celulares durante a leitura da página. */
export function ViceStickyCta() {
  const visible = useStickyVisibility();

  return (
    <div
      className="cta-bar fixed inset-x-0 bottom-0 z-40 border-t-2 border-hot-500/60 bg-vice-950/95 backdrop-blur-xl sm:hidden"
      data-visible={visible}
      aria-hidden={!visible}
    >
      <div className="px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3">
        <div className="flex items-center gap-3">
          <div className="min-w-0 flex-1 leading-tight">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-sunset-300">Black Friday</p>
            <p className="mt-0.5 font-poster text-xl uppercase leading-none text-cream">
              {PRICING.installments}x de {PRICING.installment}
            </p>
          </div>
          <ViceBuyButton size="md" arrow={false} tabIndex={visible ? 0 : -1} className="shrink-0">
            Quero agora
          </ViceBuyButton>
        </div>
      </div>
    </div>
  );
}
