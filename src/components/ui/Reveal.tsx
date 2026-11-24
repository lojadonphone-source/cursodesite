import { createElement, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/utils/cn";

type Tag =
  | "div"
  | "section"
  | "article"
  | "li"
  | "ul"
  | "span"
  | "figure"
  | "header"
  | "footer"
  | "p"
  | "blockquote"
  | "h1"
  | "h2"
  | "h3"
  | "h4";

type Show = () => void;

const callbacks = new WeakMap<Element, Show>();
let sharedObserver: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        const observer = sharedObserver;
        if (!observer) return;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          callbacks.get(entry.target)?.();
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.05 },
    );
  }
  return sharedObserver;
}

interface RevealProps {
  children?: ReactNode;
  className?: string;
  /** Atraso da animação em milissegundos. */
  delay?: number;
  as?: Tag;
  id?: string;
  style?: CSSProperties;
}

/** Anima a entrada do conteúdo quando ele entra na tela. */
export function Reveal({ children, className, delay = 0, as = "div", id, style }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    callbacks.set(el, () => setVisible(true));
    const observer = getObserver();
    observer.observe(el);
    return () => {
      observer.unobserve(el);
      callbacks.delete(el);
    };
  }, []);

  return createElement(
    as,
    {
      ref,
      id,
      className: cn("reveal", visible && "is-visible", className),
      style: delay ? { transitionDelay: `${delay}ms`, ...style } : style,
    },
    children,
  );
}
