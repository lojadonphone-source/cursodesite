import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Vsl } from "@/components/sections/Vsl";
import { NoCode } from "@/components/sections/NoCode";
import { Learn } from "@/components/sections/Learn";
import { Curriculum } from "@/components/sections/Curriculum";
import { Possibilities } from "@/components/sections/Possibilities";
import { Method } from "@/components/sections/Method";
import { Bonus } from "@/components/sections/Bonus";
import { ForWhom } from "@/components/sections/ForWhom";
import { Offer } from "@/components/sections/Offer";
import { Guarantee } from "@/components/sections/Guarantee";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";

/** Variação 1 — edição dark tech. */
export function OriginalPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-ink-950 text-mist-100">
      <Header />
      <main>
        <Hero />
        <Vsl />
        <NoCode />
        <Learn />
        <Curriculum />
        <Possibilities />
        <Method />
        <Bonus />
        <ForWhom />
        <Offer />
        <Guarantee />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <StickyCta />
    </div>
  );
}
