import { Footer } from "@/components/Footer";
import { ViceFloatingWhatsApp, ViceHeader, ViceStickyCta } from "@/components/vice/Chrome";
import { ViceMark } from "@/components/vice/ui";
import { Hero } from "@/components/vice/Hero";
import { Vsl } from "@/components/vice/Vsl";
import { Tutorial } from "@/components/vice/Tutorial";
import { Skills } from "@/components/vice/Skills";
import { Missions } from "@/components/vice/Missions";
import { Possibilities } from "@/components/vice/Possibilities";
import { Method } from "@/components/vice/Method";
import { Bonus } from "@/components/vice/Bonus";
import { Profiles } from "@/components/vice/Profiles";
import { Offer } from "@/components/vice/Offer";
import { Faq, FinalCta, Guarantee } from "@/components/vice/Closing";

/** Variação 2 — edição "Vice", com ilustrações no estilo de arte de jogos de mundo aberto. */
export function VicePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-vice-950 text-cream">
      <ViceHeader />
      <main>
        <Hero />
        <Vsl />
        <Tutorial />
        <Skills />
        <Missions />
        <Possibilities />
        <Method />
        <Bonus />
        <Profiles />
        <Offer />
        <Guarantee />
        <Faq />
        <FinalCta />
      </main>
      <Footer className="border-white/12 bg-vice-950" mark={<ViceMark className="size-10" />} />
      <ViceFloatingWhatsApp />
      <ViceStickyCta />
    </div>
  );
}
