/* Ícones minimalistas em linha (stroke) + marca Yieldwalker */

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

/* Marca: Y invertido → corpo + pernas + braço articulado */
export function Mark({ className }) {
  return (
    <svg className={className ? `mark ${className}` : 'mark'} viewBox="0 0 120 100" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="9.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="38,92 38,58 78,58 78,92" />
        <polyline points="40,46 12,18 60,34" />
        <polyline points="51,48 51,34 67,34 67,48" />
      </g>
    </svg>
  )
}

export function WhatsAppIcon() {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <g {...stroke}>
        <path d="M12 3.5a8.5 8.5 0 0 1 0 17 8.4 8.4 0 0 1-4.2-1.1L4 20.5l1.1-3.7A8.5 8.5 0 0 1 12 3.5Z" />
        <path d="M9.3 8.9c.5 2.8 2.9 5.2 5.8 5.8l.9-1.3 2 .9c-.2 1.4-1.5 2.3-2.9 2-3.9-.9-7-4-7.9-7.9-.3-1.4.6-2.7 2-2.9l.9 2-1 1.4Z" />
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

/* Fases do piloto */
export function SimIcon() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <g {...stroke} strokeWidth={1.8}>
        <rect x="7" y="9" width="26" height="17" rx="1.5" />
        <line x1="14" y1="32" x2="26" y2="32" />
        <line x1="20" y1="26" x2="20" y2="32" />
        <path d="M12 21c3-6 6 2 9-4s5 1 7-3" />
      </g>
    </svg>
  )
}

export function TeleopIcon() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <g {...stroke} strokeWidth={1.8}>
        <path d="M12 14h16a5 5 0 0 1 5 5l-1.4 8a3 3 0 0 1-5.2 1.4L23 25h-6l-3.4 3.4A3 3 0 0 1 8.4 27L7 19a5 5 0 0 1 5-5Z" />
        <line x1="14" y1="18" x2="14" y2="22" />
        <line x1="12" y1="20" x2="16" y2="20" />
        <circle cx="27" cy="20" r="1.3" />
      </g>
    </svg>
  )
}

export function HybridIcon() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <g {...stroke} strokeWidth={1.8}>
        <path d="M7 13h8l10 14h8" />
        <path d="M7 27h8" />
        <path d="M21 13h4" />
        <polyline points="29,9 33,13 29,17" />
        <polyline points="29,23 33,27 29,31" />
      </g>
    </svg>
  )
}

export function AutoIcon() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <g {...stroke} strokeWidth={1.8}>
        <circle cx="20" cy="20" r="12" />
        <circle cx="20" cy="20" r="4" />
        <line x1="20" y1="4" x2="20" y2="10" />
        <line x1="20" y1="30" x2="20" y2="36" />
        <line x1="4" y1="20" x2="10" y2="20" />
        <line x1="30" y1="20" x2="36" y2="20" />
      </g>
    </svg>
  )
}

/* Por que importa */
export function LaborIcon() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <g {...stroke} strokeWidth={1.8}>
        <circle cx="15" cy="13" r="4.5" />
        <path d="M7 31c0-5 3.5-8 8-8s8 3 8 8" />
        <circle cx="28" cy="14" r="3.5" strokeDasharray="2.5 3" />
        <path d="M26 30c.5-4 2.6-6.4 6-7" strokeDasharray="2.5 3" />
      </g>
    </svg>
  )
}

export function HazardIcon() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <g {...stroke} strokeWidth={1.8}>
        <path d="M20 7 35 32H5L20 7Z" />
        <line x1="20" y1="16" x2="20" y2="24" />
        <circle cx="20" cy="28" r="0.4" />
      </g>
    </svg>
  )
}

export function RiskIcon() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <g {...stroke} strokeWidth={1.8}>
        <path d="M20 5l12 4v9c0 8-5 13-12 17-7-4-12-9-12-17V9l12-4Z" />
        <path d="M15 20l4 4 7-8" />
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
