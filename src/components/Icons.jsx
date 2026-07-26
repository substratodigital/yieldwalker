/* Ícones minimalistas em linha (stroke) + marca Yieldwalker */

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function ContactIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <g {...stroke}>
        <path d="M3 11 21 3l-8 18-3-7-7-3Z" />
      </g>
    </svg>
  )
}

export function ArrowRight() {
  return (
    <svg className="icon" viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
      <g {...stroke}>
        <line x1="3" y1="12" x2="20" y2="12" />
        <polyline points="14,6 20,12 14,18" />
      </g>
    </svg>
  )
}

export function ArrowDown() {
  return (
    <svg className="icon" viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
      <g {...stroke}>
        <line x1="12" y1="3" x2="12" y2="20" />
        <polyline points="6,14 12,20 18,14" />
      </g>
    </svg>
  )
}

/* Pilares */
export function RentIcon() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <g {...stroke} strokeWidth={1.8}>
        <rect x="8" y="12" width="24" height="10" rx="1.5" />
        <line x1="12" y1="22" x2="10" y2="32" />
        <line x1="28" y1="22" x2="30" y2="32" />
        <line x1="17" y1="22" x2="16" y2="30" />
        <line x1="23" y1="22" x2="24" y2="30" />
        <circle cx="27" cy="17" r="1.6" />
      </g>
    </svg>
  )
}

export function ServiceIcon() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <g {...stroke} strokeWidth={1.8}>
        <path d="M25 9a6 6 0 0 0-7.8 7.5L8 25.7a3 3 0 0 0 4.2 4.2l9.3-9.2A6 6 0 0 0 29 13l-3.6 3.5-2.8-2.8L25 9Z" />
      </g>
    </svg>
  )
}

export function PilotIcon() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <g {...stroke} strokeWidth={1.8}>
        <path d="M7 32c6-2 6-10 12-12s7-8 12-10" />
        <circle cx="7" cy="32" r="2.4" />
        <circle cx="31" cy="10" r="2.4" />
        <line x1="20" y1="26" x2="20" y2="30" strokeDasharray="1 4" />
      </g>
    </svg>
  )
}


/* Onde a roçagem mais sofre */
export function DrainageIcon() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <g {...stroke} strokeWidth={1.8}>
        <path d="M4 12h10l6 16 6-16h10" />
        <path d="M15.5 22c1.5-1.4 3-1.4 4.5 0s3 1.4 4.5 0" />
      </g>
    </svg>
  )
}

export function RoadFurnitureIcon() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <g {...stroke} strokeWidth={1.8}>
        <circle cx="20" cy="20" r="9" />
        <line x1="20" y1="2" x2="20" y2="9" />
        <line x1="20" y1="31" x2="20" y2="38" />
        <line x1="2" y1="20" x2="9" y2="20" />
        <line x1="31" y1="20" x2="38" y2="20" />
      </g>
    </svg>
  )
}

export function SmallAreaIcon() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <g {...stroke} strokeWidth={1.8}>
        <rect x="6" y="7" width="11" height="9" rx="1.4" strokeDasharray="2 2" />
        <rect x="23" y="10" width="10" height="8" rx="1.4" strokeDasharray="2 2" />
        <rect x="12" y="23" width="12" height="10" rx="1.4" strokeDasharray="2 2" />
      </g>
    </svg>
  )
}

export function GuardrailIcon() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <g {...stroke} strokeWidth={1.8}>
        <path d="M4 16c3-3 5-3 8 0s5 3 8 0 5-3 8 0 5-3 8 0" />
        <line x1="10" y1="18" x2="10" y2="30" />
        <line x1="22" y1="18" x2="22" y2="30" />
        <line x1="34" y1="18" x2="34" y2="30" />
      </g>
    </svg>
  )
}

/* Benefícios intangíveis do piloto pago */
export function ElectricIcon() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <g {...stroke} strokeWidth={1.8}>
        <path d="M21 4 9 23h9l-3 13 15-20h-9l3-12Z" />
      </g>
    </svg>
  )
}

export function ESGIcon() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <g {...stroke} strokeWidth={1.8}>
        <path d="M10 30c-2-10 2-19 20-22 2 15-6 22-20 22Z" />
        <path d="M10 30c4-8 10-13 18-16" />
      </g>
    </svg>
  )
}

export function MonitorIcon() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <g {...stroke} strokeWidth={1.8}>
        <circle cx="20" cy="20" r="14" strokeDasharray="2.5 3" />
        <path d="M8 20h6l3-7 4 14 3-7h6" />
      </g>
    </svg>
  )
}

/* Bandeiras */
export function FlagBR() {
  return (
    <svg viewBox="0 0 30 22" aria-hidden="true">
      <rect width="30" height="22" fill="#0b3a1e" />
      <polygon points="15,3 27,11 15,19 3,11" fill="#f5b400" />
      <circle cx="15" cy="11" r="4.6" fill="#1a3a6e" />
    </svg>
  )
}

export function FlagUS() {
  return (
    <svg viewBox="0 0 30 22" aria-hidden="true">
      <rect width="30" height="22" fill="#b22234" />
      {[1.7, 5.1, 8.5, 11.9, 15.3, 18.7].map((y) => (
        <rect key={y} y={y} width="30" height="1.7" fill="#fff" />
      ))}
      <rect width="13" height="12" fill="#3c3b6e" />
    </svg>
  )
}

export function FlagES() {
  return (
    <svg viewBox="0 0 30 22" aria-hidden="true">
      <rect width="30" height="22" fill="#aa151b" />
      <rect y="5.5" width="30" height="11" fill="#f1bf00" />
    </svg>
  )
}
