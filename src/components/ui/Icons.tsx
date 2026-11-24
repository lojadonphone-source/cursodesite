import { useId } from "react";

interface IconProps {
  className?: string;
}

/** Símbolo do curso: colchetes de código + faísca de IA. */
export function LogoMark({ className }: IconProps) {
  const id = useId();
  const gradient = `${id}-gradient`;

  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={gradient} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5b9dff" />
          <stop offset="0.55" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="13" fill={`url(#${gradient})`} />
      <path
        d="M17 18 11 24l6 6M25 18l6 6-6 6"
        fill="none"
        stroke="#fff"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M36 7l1.4 3.6L41 12l-3.6 1.4L36 17l-1.4-3.6L31 12l3.6-1.4z" fill="#fff" />
    </svg>
  );
}

/** Ícone oficial do WhatsApp. */
export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

/** Selo circular da garantia de 7 dias. */
export function GuaranteeSeal({ className }: IconProps) {
  const id = useId();
  const gradient = `${id}-gradient`;
  const background = `${id}-background`;
  const arcTop = `${id}-arc-top`;
  const arcBottom = `${id}-arc-bottom`;
  const title = `${id}-title`;
  const heading = "Sora, Inter, sans-serif";

  return (
    <svg viewBox="0 0 260 260" className={className} role="img" aria-labelledby={title} focusable="false">
      <title id={title}>Selo de garantia incondicional de 7 dias</title>
      <defs>
        <linearGradient id={gradient} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8dbcff" />
          <stop offset="0.5" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
        <radialGradient id={background} cx="0.5" cy="0.35" r="0.75">
          <stop offset="0" stopColor="#17255a" />
          <stop offset="1" stopColor="#080c17" />
        </radialGradient>
      </defs>

      <circle cx="130" cy="130" r="116" fill="none" stroke="rgba(139,92,246,0.25)" strokeWidth="1" />
      <circle cx="130" cy="130" r="112" fill={`url(#${background})`} stroke={`url(#${gradient})`} strokeWidth="3" />
      <circle cx="130" cy="130" r="104" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <circle
        cx="130"
        cy="130"
        r="74"
        fill="none"
        stroke="rgba(255,255,255,0.16)"
        strokeWidth="1.5"
        strokeDasharray="2 7"
        strokeLinecap="round"
      />

      <path id={arcTop} d="M 42,130 A 88,88 0 0 1 218,130" fill="none" />
      <path id={arcBottom} d="M 42,130 A 88,88 0 0 0 218,130" fill="none" />

      <text fill="#eef1f8" fontSize="13" fontWeight="700" letterSpacing="2.2" fontFamily={heading}>
        <textPath href={`#${arcTop}`} startOffset="50%" textAnchor="middle">
          GARANTIA INCONDICIONAL
        </textPath>
      </text>
      <text fill="#8dbcff" fontSize="15" fontWeight="800" letterSpacing="2.6" fontFamily={heading}>
        <textPath href={`#${arcBottom}`} startOffset="50%" textAnchor="middle">
          7 DIAS DE GARANTIA
        </textPath>
      </text>

      {/* Escudo central */}
      <path
        d="M130 90 L164 103 V130 C164 151 149 166 130 174 C111 166 96 151 96 130 V103 Z"
        fill={`url(#${gradient})`}
      />
      <path
        d="M130 99 L156 109 V130 C156 146 145 157.5 130 164.5 C115 157.5 104 146 104 130 V109 Z"
        fill="rgba(8,12,23,0.6)"
      />
      <text x="130" y="136" textAnchor="middle" fill="#fff" fontSize="32" fontWeight="800" fontFamily={heading}>
        7
      </text>
      <text
        x="130"
        y="151"
        textAnchor="middle"
        fill="#cfe0ff"
        fontSize="8.5"
        fontWeight="700"
        letterSpacing="2.4"
        fontFamily="Inter, sans-serif"
      >
        DIAS
      </text>
    </svg>
  );
}

/** Marcas de exemplo usadas na ilustração do bônus de logomarca. */
export function LogoSample({ variant, className }: IconProps & { variant: 1 | 2 | 3 }) {
  const id = useId();
  const gradient = `${id}-gradient`;

  if (variant === 1) {
    return (
      <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false">
        <circle cx="27" cy="17" r="9" fill="#ff7fa5" />
        <circle cx="19" cy="12" r="6" fill="#ffb3c9" />
        <path d="M16.5 24 24 44l7.5-20z" fill="#f5c36f" />
        <path d="M19.5 27.5 24 39M28.5 27.5 24 39M20.5 31h7" stroke="#c98a2e" strokeWidth="1" strokeLinecap="round" />
      </svg>
    );
  }

  if (variant === 2) {
    return (
      <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id={gradient} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#5b9dff" />
            <stop offset="1" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <path d="M24 3 42.6 13.5v21L24 45 5.4 34.5v-21z" fill={`url(#${gradient})`} />
        <text
          x="24"
          y="32.5"
          textAnchor="middle"
          fill="#fff"
          fontSize="20"
          fontWeight="800"
          fontFamily="Sora, Inter, sans-serif"
        >
          G
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={gradient} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <circle cx="17" cy="24" r="12" fill={`url(#${gradient})`} opacity="0.9" />
      <circle cx="31" cy="24" r="12" fill="#ff7fa5" opacity="0.75" />
      <circle cx="24" cy="15" r="7" fill="#fff" opacity="0.9" />
    </svg>
  );
}
