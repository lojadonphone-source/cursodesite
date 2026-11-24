import { useState } from "react";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { OriginalPage } from "@/components/OriginalPage";
import { VicePage } from "@/components/vice/VicePage";
import { ACTIVE_VARIATION, type Variation } from "@/config";

/** A variação padrão vem de src/config.ts; a URL permite pré-visualizar a outra (?variacao=1 ou ?variacao=2). */
function resolveVariation(): Variation {
  if (typeof window === "undefined") return ACTIVE_VARIATION;
  const value = new URLSearchParams(window.location.search).get("variacao");
  if (value === "1" || value === "original") return "original";
  if (value === "2" || value === "vice") return "vice";
  return ACTIVE_VARIATION;
}

export default function App() {
  const [variation] = useState(resolveVariation);

  return <ErrorBoundary>{variation === "vice" ? <VicePage /> : <OriginalPage />}</ErrorBoundary>;
}
