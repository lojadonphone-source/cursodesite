import { useEffect, useState } from "react";

/** Seções em que a barra fixa não deve aparecer (já existe um botão de compra à vista). */
const BLOCKERS = ["topo", "oferta", "cta-final"];

/**
 * Indica se a barra fixa de compra deve aparecer no celular
 * e sobe o botão do WhatsApp enquanto a barra está visível.
 */
export function useStickyVisibility(): boolean {
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

  return visible;
}
