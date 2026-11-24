import { useEffect, useState, type ReactNode } from "react";
import { X } from "lucide-react";
import { cn } from "@/utils/cn";
import { WHATSAPP_URL } from "@/config";
import { LogoMark, WhatsAppIcon } from "@/components/ui/Icons";

type LegalKind = "privacidade" | "termos";

const LEGAL: Record<LegalKind, { title: string; intro: string; paragraphs: string[] }> = {
  privacidade: {
    title: "Política de Privacidade",
    intro: "Este site tem caráter informativo e apresenta o curso Criação de Sites com IA do Zero.",
    paragraphs: [
      "A compra é processada pela plataforma de pagamento responsável pela venda, que trata os dados de pagamento conforme a sua própria política de privacidade.",
      "O contato pelo WhatsApp ocorre diretamente entre você e a equipe do curso, e as mensagens são utilizadas apenas para o atendimento da sua solicitação.",
      "Para dúvidas sobre o tratamento dos seus dados, fale conosco pelo WhatsApp.",
    ],
  },
  termos: {
    title: "Termos de Uso",
    intro: "Ao adquirir o curso Criação de Sites com IA do Zero, você concorda com os termos abaixo.",
    paragraphs: [
      "O conteúdo do curso é destinado ao uso pessoal de quem o adquiriu, sendo vedada a revenda, o compartilhamento ou a distribuição das aulas e materiais.",
      "O acesso ao curso depende de dispositivos compatíveis com a plataforma de disponibilização do conteúdo.",
      "Serviços externos mencionados nas aulas, como domínio próprio e ferramentas de terceiros, podem possuir custos independentes do curso.",
      "A compra possui garantia de 7 dias, conforme as condições da plataforma de compra.",
      "O curso ensina um processo e não garante resultados específicos, que dependem da prática e da dedicação de cada aluno.",
    ],
  },
};

function LegalModal({ kind, onClose }: { kind: LegalKind; onClose: () => void }) {
  const content = LEGAL[kind];
  const titleId = `legal-${kind}-titulo`;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-ink-950/80 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
        className="animate-pop max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-white/10 bg-ink-900 p-6 sm:rounded-3xl sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id={titleId} className="font-display text-xl font-bold uppercase tracking-tight text-mist-100">
            {content.title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-mist-300 transition-colors duration-200 hover:bg-white/10 hover:text-mist-100"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>
        <p className="mt-5 text-[15px] leading-relaxed text-mist-100">{content.intro}</p>
        <ul className="mt-4 space-y-3">
          {content.paragraphs.map((paragraph) => (
            <li key={paragraph} className="flex items-start gap-3 text-[15px] leading-relaxed text-mist-300">
              <span aria-hidden className="mt-[9px] size-1.5 shrink-0 rounded-full bg-electric-400" />
              {paragraph}
            </li>
          ))}
        </ul>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-[#25D366] px-5 py-3 font-display text-sm font-bold uppercase tracking-wide text-white transition duration-200 hover:-translate-y-0.5 hover:brightness-110"
        >
          <WhatsAppIcon className="size-5" />
          Falar pelo WhatsApp
        </a>
      </div>
    </div>
  );
}

interface FooterLinkProps {
  children: ReactNode;
  onClick: () => void;
}

function FooterLink({ children, onClick }: FooterLinkProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-sm text-mist-300 underline-offset-4 transition-colors duration-200 hover:text-mist-100 hover:underline"
    >
      {children}
    </button>
  );
}

interface FooterProps {
  /** Classes adicionais para o elemento raiz (ex.: cor de fundo de cada variação). */
  className?: string;
  /** Símbolo exibido ao lado do nome do produto. */
  mark?: ReactNode;
}

export function Footer({ className, mark = <LogoMark className="size-10" /> }: FooterProps) {
  const [legal, setLegal] = useState<LegalKind | null>(null);

  return (
    <footer className={cn("border-t border-white/10 bg-ink-950 pb-28 pt-12 sm:pb-10", className)}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <a href="#topo" className="inline-flex items-center gap-3 rounded-lg" aria-label="Voltar ao topo">
              {mark}
              <span className="font-display text-base font-bold uppercase tracking-wide text-mist-100">
                Criação de Sites com IA do Zero
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-mist-300">
              Aprenda a criar sites profissionais utilizando inteligência artificial, mesmo sem saber programar.
            </p>
          </div>

          <nav aria-label="Informações legais" className="flex flex-col gap-3 md:items-end">
            <FooterLink onClick={() => setLegal("privacidade")}>Política de Privacidade</FooterLink>
            <FooterLink onClick={() => setLegal("termos")}>Termos de Uso</FooterLink>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start text-sm text-mist-300 underline-offset-4 transition-colors duration-200 hover:text-mist-100 hover:underline md:self-auto"
            >
              <WhatsAppIcon className="size-4 text-[#25D366]" />
              Fale conosco
            </a>
          </nav>
        </div>

        <p className="mt-10 border-t border-white/5 pt-6 text-xs leading-relaxed text-mist-500">
          © 2026 Criação de Sites com IA do Zero. Todos os direitos reservados.
        </p>
      </div>

      {legal && <LegalModal kind={legal} onClose={() => setLegal(null)} />}
    </footer>
  );
}
