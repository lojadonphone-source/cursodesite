/**
 * Configurações centrais da página.
 * Altere os valores abaixo sem precisar mexer nos componentes.
 */

export type Variation = "original" | "vice";

/**
 * Variação exibida por padrão:
 * - "vice"     → edição com imagens estilo GTA VI (variação 2)
 * - "original" → edição dark tech (variação 1)
 * Para pré-visualizar a outra sem alterar o código, use ?variacao=1 ou ?variacao=2 na URL.
 */
export const ACTIVE_VARIATION: Variation = "vice";

/** Link do checkout (Hotmart). Todos os botões de compra apontam para cá. */
export const CHECKOUT_URL = "https://pay.hotmart.com/Y104308911E?off=8eyi06pt";

/** Link do WhatsApp de atendimento (abre a conversa com mensagem pré-preenchida). */
export const WHATSAPP_URL =
  "https://wa.me/5548992068976?text=Ol%C3%A1%21%20Tenho%20interesse%20no%20curso%20Cria%C3%A7%C3%A3o%20de%20Sites%20com%20IA%20do%20Zero%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";

/**
 * Vídeo de apresentação (VSL), formato vertical 9:16.
 *
 * Preferência 1 — YouTube (Shorts ou vídeo comum):
 *   cole o link completo ou apenas o ID do vídeo.
 *   Ex.: https://youtube.com/shorts/ziIfUMf4PBc  →  "ziIfUMf4PBc"
 *
 * Preferência 2 — arquivo hospedado (.mp4 ou .webm):
 *   cole a URL direta do arquivo em VSL_VIDEO_URL.
 *
 * Deixe ambos vazios para exibir o espaço reservado do player.
 */
export const VSL_YOUTUBE = "https://youtube.com/shorts/ziIfUMf4PBc?feature=share";
export const VSL_VIDEO_URL = "";

/**
 * Capa exibida antes do play (formato 9:16).
 * Por padrão é usada a imagem src/assets/vsl-cover.jpg.
 * Para usar outra, cole aqui o endereço da imagem. Troque a capa sempre que trocar o vídeo.
 */
export const VSL_COVER_URL = "";

export const PRICING = {
  listPrice: "R$ 197,00",
  installments: 12,
  installment: "R$ 4,95",
  totalOnCard: "R$ 59,40",
  cash: "R$ 47,90",
} as const;
