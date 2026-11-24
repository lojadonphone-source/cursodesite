import { useEffect, useState } from "react";
import { PRICING } from "@/config";
import { BuyButton } from "@/components/ui/Buttons";

/** Seções em que a barra fixa não deve aparecer (já existe um botão de compra à vista). */
const BLOCKERS = ["topo", "oferta", "cta-final"];

/** Barra fixa de compra, exibida somente em celulares durante a leitura da página. */
export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const blocking = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) blocking.add(entry.target.id);
          else blocking.delete(entry.target.id);
        }
        setVisible(blocking.size === 0);
      },
      { threshold: 0 },
    );

    for (const id of BLOCKERS) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("cta-bar-visible", visible);
    return () => document.documentElement.classList.remove("cta-bar-visible");
  }, [visible]);

  return (
    <div
      className="cta-bar fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink-900/95 backdrop-blur-xl sm:hidden"
      data-visible={visible}
      aria-hidden={!visible}
    >
      <div className="px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3">
        <div className="flex items-center gap-3">
          <div className="min-w-0 flex-1 leading-tight">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-amber-300">Black Friday</p>
            <p className="mt-0.5 font-display text-lg font-extrabold tabular-nums text-mist-100">
              {PRICING.installments}x de {PRICING.installment}
            </p>
          </div>
          <BuyButton size="md" arrow={false} tabIndex={visible ? 0 : -1} className="shrink-0">
            Quero agora
          </BuyButton>
        </div>
      </div>
    </div>
  );
}
