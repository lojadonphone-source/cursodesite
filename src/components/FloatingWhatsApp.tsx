import { WHATSAPP_URL } from "@/config";
import { WhatsAppIcon } from "@/components/ui/Icons";

/**
 * Botão flutuante de WhatsApp: fixo no canto inferior direito de todas as seções.
 * No computador, expande e mostra o texto "Dúvidas? Fale conosco" ao passar o mouse ou focar.
 */
export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Dúvidas? Fale conosco pelo WhatsApp"
      className="wa-fab group fixed bottom-4 right-4 z-50 flex items-center gap-0 rounded-full bg-[#25D366] p-3.5 text-white shadow-[0_14px_36px_-10px_rgba(37,211,102,0.7)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#2ee57a] active:scale-95 sm:bottom-6 sm:right-6 md:group-hover:gap-3 md:group-focus-visible:gap-3"
    >
      <span aria-hidden className="absolute inset-0 -z-10 animate-pulse-ring rounded-full bg-[#25D366]" />
      <WhatsAppIcon className="size-7 shrink-0" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 ease-out md:block md:group-hover:max-w-[200px] md:group-hover:pr-2 md:group-hover:opacity-100 md:group-focus-visible:max-w-[200px] md:group-focus-visible:pr-2 md:group-focus-visible:opacity-100">
        Dúvidas? Fale conosco
      </span>
    </a>
  );
}
