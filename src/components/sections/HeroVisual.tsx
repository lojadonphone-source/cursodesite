import { useEffect, useRef, useState, type ReactNode } from "react";
import { Globe, Lock, Sparkles } from "lucide-react";
import { cn } from "@/utils/cn";
import { prefersReducedMotion } from "@/lib/motion";
import { WhatsAppIcon } from "@/components/ui/Icons";

const PROMPT_HEAD = "Crie um site para a sorveteria Gelato & Cia,";
const PROMPT_TAIL = " com cardápio, nossa história e botão de WhatsApp.";

const FLAVORS = [
  { name: "Morango", color: "#ff7fa5" },
  { name: "Pistache", color: "#9ee6c4" },
  { name: "Chocolate", color: "#b08968" },
];

/** Escreve o prompt letra a letra, em loop, somente enquanto o mockup está na tela. */
function useTypewriter() {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(() => (prefersReducedMotion() ? Number.MAX_SAFE_INTEGER : 0));

  useEffect(() => {
    if (prefersReducedMotion()) {
      setCount(Number.MAX_SAFE_INTEGER);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const total = PROMPT_HEAD.length + PROMPT_TAIL.length;
    let index = 0;
    let timer = 0;
    let running = true;

    const step = () => {
      if (!running) return;
      index += 1;
      setCount(index);
      if (index >= total) {
        timer = window.setTimeout(() => {
          index = 0;
          setCount(0);
          timer = window.setTimeout(step, 300);
        }, 4800);
        return;
      }
      timer = window.setTimeout(step, 26 + Math.random() * 38);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        const next = entry.isIntersecting;
        if (next && !running) {
          running = true;
          timer = window.setTimeout(step, 400);
        }
        if (!next) {
          running = false;
          window.clearTimeout(timer);
        }
      },
      { threshold: 0 },
    );
    io.observe(el);
    timer = window.setTimeout(step, 900);

    return () => {
      running = false;
      window.clearTimeout(timer);
      io.disconnect();
    };
  }, []);

  const visible = Math.min(count, PROMPT_HEAD.length + PROMPT_TAIL.length);
  return {
    ref,
    head: PROMPT_HEAD.slice(0, Math.min(visible, PROMPT_HEAD.length)),
    tail: PROMPT_TAIL.slice(0, Math.max(0, visible - PROMPT_HEAD.length)),
  };
}

/** Site de exemplo exibido na tela do notebook. As medidas em "cqw" escalam com a tela. */
function LaptopSite() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[1cqw] bg-white text-left">
      <div className="flex h-[9cqw] shrink-0 items-center justify-between bg-white px-[2.2cqw]">
        <span className="flex items-center gap-[0.9cqw] font-display text-[length:max(8px,2.2cqw)] font-bold text-[#2b1b3d]">
          <span className="size-[2.8cqw] rounded-full bg-[#ff7fa5]" />
          Gelato &amp; Cia
        </span>
        <span className="hidden items-center gap-[1.8cqw] text-[length:max(6px,1.6cqw)] text-[#6f6885] sm:flex">
          <span>Cardápio</span>
          <span>Horários</span>
          <span>Contato</span>
        </span>
      </div>

      <div className="mx-[1.6cqw] rounded-[1cqw] bg-[linear-gradient(135deg,#ffe1ea_0%,#e0e7ff_55%,#c7f9ec_100%)] px-[2.6cqw] py-[2.8cqw]">
        <p className="max-w-[70%] font-display text-[length:max(10px,3.3cqw)] font-extrabold leading-[1.12] text-[#2b1b3d]">
          Sorvetes artesanais, feitos todos os dias
        </p>
        <p className="mt-[0.9cqw] text-[length:max(7px,1.7cqw)] text-[#4d4763]">
          Sabores naturais, do campo para a sua casa.
        </p>
        <span className="mt-[1.8cqw] inline-flex items-center gap-[0.8cqw] rounded-full bg-[#128c7e] px-[2cqw] py-[1cqw] text-[length:max(7px,1.7cqw)] font-semibold text-white">
          <WhatsAppIcon className="size-[max(8px,1.9cqw)]" />
          Pedir pelo WhatsApp
        </span>
      </div>

      <div className="mt-[1.6cqw] grid min-h-0 flex-1 grid-cols-3 gap-[1.6cqw] px-[1.6cqw] pb-[1.6cqw]">
        {FLAVORS.map((flavor) => (
          <div
            key={flavor.name}
            className="flex min-h-0 flex-col rounded-[0.9cqw] bg-[#fff5f8] p-[1.4cqw]"
          >
            <span className="size-[3.6cqw] shrink-0 rounded-full" style={{ background: flavor.color }} />
            <span className="mt-[1cqw] font-display text-[length:max(6px,1.7cqw)] font-bold text-[#2b1b3d]">
              {flavor.name}
            </span>
            <span className="mt-[0.5cqw] h-[0.6cqw] w-[70%] rounded-full bg-[#2b1b3d]/15" />
          </div>
        ))}
      </div>
    </div>
  );
}

/** Versão responsiva do mesmo site, exibida no celular. */
function PhoneSite() {
  return (
    <div className="flex h-full flex-col bg-white pt-[11cqw] text-left">
      <div className="flex items-center justify-between px-[5cqw]">
        <span className="flex items-center gap-[2cqw] font-display text-[length:max(6px,3.6cqw)] font-bold text-[#2b1b3d]">
          <span className="size-[4.2cqw] rounded-full bg-[#ff7fa5]" />
          Gelato
        </span>
        <span className="flex flex-col gap-[1.3cqw]">
          <span className="h-[0.8cqw] w-[5cqw] rounded-full bg-[#2b1b3d]/70" />
          <span className="h-[0.8cqw] w-[5cqw] rounded-full bg-[#2b1b3d]/70" />
        </span>
      </div>

      <div className="mx-[3cqw] mt-[4cqw] rounded-[3cqw] bg-[linear-gradient(150deg,#ffe1ea,#e0e7ff_60%,#c7f9ec)] px-[4.5cqw] py-[6cqw]">
        <p className="font-display text-[length:max(6px,4.4cqw)] font-extrabold leading-[1.15] text-[#2b1b3d]">
          Sorvetes artesanais
        </p>
        <span className="mt-[3.5cqw] inline-flex items-center gap-[1.5cqw] rounded-full bg-[#128c7e] px-[3.5cqw] py-[2cqw] text-[length:max(6px,3.2cqw)] font-semibold text-white">
          <WhatsAppIcon className="size-[max(6px,3.6cqw)]" />
          WhatsApp
        </span>
      </div>

      <div className="mt-[3cqw] space-y-[3cqw] px-[3cqw]">
        {FLAVORS.slice(0, 2).map((flavor) => (
          <div key={flavor.name} className="flex items-center gap-[3cqw] rounded-[3cqw] bg-[#fff5f8] p-[3cqw]">
            <span className="size-[7cqw] shrink-0 rounded-full" style={{ background: flavor.color }} />
            <span className="flex flex-col gap-[1.4cqw]">
              <span className="h-[1.1cqw] w-[16cqw] rounded-full bg-[#2b1b3d]/60" />
              <span className="h-[1.1cqw] w-[11cqw] rounded-full bg-[#2b1b3d]/20" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PromptPanel() {
  const { ref, head, tail } = useTypewriter();

  return (
    <div
      ref={ref}
      className="flex w-[38%] shrink-0 flex-col border-r border-white/10 bg-[#0a1020] p-[2.2cqw] text-left"
    >
      <div className="flex items-center justify-between gap-[1cqw]">
        <span className="text-[length:max(7px,1.7cqw)] font-semibold uppercase tracking-[0.14em] text-electric-300">
          Prompt
        </span>
        <span className="flex shrink-0 items-center gap-[0.7cqw] rounded-full bg-white/[0.06] px-[1.2cqw] py-[0.6cqw] text-[length:max(6px,1.5cqw)] text-mist-300">
          <Sparkles className="size-[max(7px,1.6cqw)]" aria-hidden />
          IA
        </span>
      </div>

      <div className="mt-[2cqw] min-h-0 flex-1 overflow-hidden rounded-[1.1cqw] border border-white/10 bg-[#060a14] p-[2cqw] text-[length:max(9px,1.95cqw)] leading-[1.55] text-mist-100">
        {head}
        {tail && <span className="@max-[360px]:hidden">{tail}</span>}
        <span
          aria-hidden
          className="ml-[0.3cqw] inline-block h-[2.3cqw] w-[0.5cqw] translate-y-[0.3cqw] animate-caret bg-electric-400"
        />
      </div>

      <div className="mt-[2cqw] flex items-center gap-[1cqw] rounded-[1cqw] bg-electric-500/15 px-[1.6cqw] py-[1.3cqw] text-[length:max(6px,1.6cqw)] text-electric-300">
        <Sparkles className="size-[max(7px,1.7cqw)] shrink-0" aria-hidden />
        <span className="truncate">Gerando estrutura, textos e layout…</span>
      </div>

      <div className="mt-[1.4cqw] hidden h-[5.2cqw] items-center justify-center rounded-[1cqw] bg-linear-to-r from-cta-500 to-cta-700 font-display text-[length:max(7px,1.7cqw)] font-bold uppercase tracking-wide text-white sm:flex">
        Gerar site
      </div>
    </div>
  );
}

function LaptopScreen() {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-[1.2cqw] bg-[#070b16]">
      {/* Barra do navegador */}
      <div className="flex h-[8.5cqw] items-center gap-[1.1cqw] border-b border-white/10 bg-[#0d1424] px-[2.2cqw]">
        <span className="size-[1.3cqw] rounded-full bg-[#ff5f57]" />
        <span className="size-[1.3cqw] rounded-full bg-[#febc2e]" />
        <span className="size-[1.3cqw] rounded-full bg-[#28c840]" />
        <div className="mx-auto flex h-[4.6cqw] w-[52%] items-center justify-center gap-[0.8cqw] rounded-[0.8cqw] bg-white/[0.06] text-[length:max(7px,1.6cqw)] text-mist-300">
          <Lock className="size-[max(8px,1.5cqw)] text-cta-400" aria-hidden />
          suaempresa.com.br
        </div>
        <Sparkles className="size-[1.9cqw] text-electric-300" aria-hidden />
      </div>

      <div className="flex h-[54cqw]">
        <PromptPanel />
        <div className="min-w-0 flex-1 p-[1.6cqw]">
          <LaptopSite />
        </div>
      </div>
    </div>
  );
}

interface FloatCardProps {
  icon: ReactNode;
  title: string;
  text: string;
  tone?: "blue" | "green";
  className?: string;
}

function FloatCard({ icon, title, text, tone = "blue", className }: FloatCardProps) {
  return (
    <div
      className={cn(
        "absolute z-30 flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-800/90 p-2.5 shadow-card backdrop-blur-xl sm:p-3 sm:pr-4",
        className,
      )}
    >
      <span
        className={cn(
          "flex size-9 shrink-0 items-center justify-center rounded-xl text-white sm:size-10",
          tone === "green"
            ? "bg-linear-to-br from-cta-400 to-cta-600"
            : "bg-linear-to-br from-electric-400 to-violet-600",
        )}
      >
        {icon}
      </span>
      <span className="flex flex-col">
        <span className="text-[13px] font-semibold leading-tight text-mist-100 sm:text-sm">{title}</span>
        <span className="mt-0.5 hidden text-xs text-mist-300 sm:block">{text}</span>
      </span>
    </div>
  );
}

/** Composição tecnológica: notebook com o site sendo gerado e celular com a versão responsiva. */
export function HeroVisual() {
  return (
    <div aria-hidden className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
      <div className="absolute inset-x-10 -top-4 bottom-0 -z-10 rounded-full bg-[radial-gradient(closest-side,rgb(59_130_246/0.28),transparent)]" />

      <div className="relative rounded-[2rem] border border-white/10 bg-linear-to-b from-ink-800/90 to-ink-900/80 shadow-card">
        <div
          className="pattern-grid absolute inset-0 overflow-hidden rounded-[inherit] opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
        />

        {/* Barra da janela */}
        <div className="relative flex h-11 items-center gap-1.5 border-b border-white/10 px-4">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
          <span className="mx-auto rounded-full border border-white/10 bg-ink-950/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-mist-300">
            Do prompt ao site publicado
          </span>
        </div>

        <div className="relative px-5 pb-14 pt-8 sm:px-8 sm:pb-16 sm:pt-10">
          <div className="relative mr-auto w-[90%]">
            {/* Notebook */}
            <div className="@container relative rounded-b-[5px] rounded-t-[14px] border border-white/15 bg-[#161d31] p-[5px] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.95)]">
              <LaptopScreen />
            </div>
            <div className="relative -mx-[5%] h-[11px] rounded-b-[12px] border-x border-b border-white/15 bg-linear-to-b from-[#2b3757] to-[#141c31]">
              <span className="absolute left-1/2 top-0 h-[5px] w-[13%] -translate-x-1/2 rounded-b-[5px] bg-[#0b1020]" />
            </div>

            {/* Celular */}
            <div
              className="absolute -bottom-[3.25rem] right-[-5%] z-20 w-[24%] animate-float-slow drop-shadow-[0_24px_36px_rgba(0,0,0,0.65)]"
              style={{ containerType: "inline-size" }}
            >
              <div className="relative aspect-[9/18.6] overflow-hidden rounded-[15cqw] border-[3.4cqw] border-[#161d31] bg-[#070b16] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.16)]">
                <PhoneSite />
                <span className="absolute left-1/2 top-[1.6cqw] h-[3.2cqw] w-[26cqw] -translate-x-1/2 rounded-full bg-[#04060c]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cartões flutuantes */}
      <FloatCard
        icon={<Sparkles className="size-5" aria-hidden />}
        title="Prompt enviado"
        text="A IA cria estrutura, textos e layout"
        className="-left-1 top-12 animate-float sm:-left-4 sm:top-[60px]"
      />
      <FloatCard
        icon={<Globe className="size-5" aria-hidden />}
        title="Publicado"
        text="Hospedagem gratuita"
        tone="green"
        className="-left-2 bottom-3 animate-float [animation-delay:-3s] sm:-left-5"
      />
    </div>
  );
}
