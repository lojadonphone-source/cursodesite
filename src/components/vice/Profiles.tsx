import { Lightbulb } from "lucide-react";
import { cn } from "@/utils/cn";
import { PRICING } from "@/config";
import { AUDIENCE } from "@/content";
import { Reveal } from "@/components/ui/Reveal";
import { Card, IconTile, Kicker, TITLE, TONES, ViceBuyButton } from "@/components/vice/ui";

/** "Para quem é o curso" apresentado como escolha de perfil. */
export function Profiles() {
  return (
    <section id="para-quem" className="relative isolate border-y-2 border-white/5 bg-vice-900/45 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* Texto */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal className="block">
            <Kicker>Escolha seu perfil</Kicker>
          </Reveal>
          <Reveal as="h2" delay={80} className={cn("mt-5", TITLE)}>
            Esse curso foi feito <span className="grad-sunset">para você</span> que:
          </Reveal>

          <Reveal delay={200}>
            <Card className="mt-8 overflow-hidden p-6">
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-sunset-300 via-hot-500 to-purple-600"
              />
              <IconTile icon={Lightbulb} tone="yellow" />
              <p className="mt-4 text-lg font-medium leading-relaxed text-cream">
                Você não precisa ter experiência. Só precisa estar disposto a aprender e colocar em prática.
              </p>
            </Card>
          </Reveal>

          <Reveal delay={280} className="mt-8">
            <ViceBuyButton className="w-full">Quero começar agora</ViceBuyButton>
            <p className="mt-4 text-sm text-sand-500">
              {PRICING.installments}x de {PRICING.installment} • Garantia de 7 dias
            </p>
          </Reveal>
        </div>

        {/* Perfis */}
        <ul className="grid gap-4 sm:grid-cols-2">
          {AUDIENCE.map((profile, index) => (
            <Reveal as="li" key={profile.text} delay={(index % 2) * 80} className="h-full">
              <Card className="flex h-full items-start gap-4 p-5 transition duration-300 ease-out hover:-translate-y-1 hover:border-hot-500/50">
                <IconTile icon={profile.icon} tone={TONES[index % TONES.length]} />
                <div className="min-w-0">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-hot-400">{profile.title}</p>
                  <p className="mt-1 text-[15px] leading-snug text-cream">{profile.text}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
