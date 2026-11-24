const YOUTUBE_ID = /^[A-Za-z0-9_-]{11}$/;

const YOUTUBE_LINK =
  /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:shorts\/|embed\/|live\/)?|\/shorts\/|\/embed\/|[?&]v=)([A-Za-z0-9_-]{11})/;

/** Aceita um link do YouTube (comum ou Shorts) ou apenas o ID do vídeo e devolve o ID. */
export function getYouTubeId(input: string): string {
  const value = input.trim();
  if (!value) return "";
  const match = value.match(YOUTUBE_LINK);
  if (match) return match[1];
  return YOUTUBE_ID.test(value) ? value : "";
}

/** Página do vídeo no YouTube, usada no link "assistir direto". */
export function youtubeWatchUrl(videoId: string): string {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

/** Endereço de incorporação. O vídeo começa a tocar porque o visitante já clicou em play. */
export function youtubeEmbedUrl(videoId: string): string {
  const params = new URLSearchParams({
    autoplay: "1",
    playsinline: "1",
    rel: "0",
  });
  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
}
