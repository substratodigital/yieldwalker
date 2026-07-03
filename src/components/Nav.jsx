import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useLang, waLink } from '../i18n.jsx'
import { Mark, WhatsAppIcon, FlagBR, FlagUS, FlagES } from './Icons.jsx'

function useClock() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const fmt = () => {
      const now = new Date()
      const h = String(now.getHours()).padStart(2, '0')
      const m = String(now.getMinutes()).padStart(2, '0')
      const off = -now.getTimezoneOffset() / 60
      setTime(`${h}:${m} UTC${off >= 0 ? '+' : ''}${off}`)
    }
    fmt()
    const id = setInterval(fmt, 30000)
    return () => clearInterval(id)
  }, [])
  return time
}

export default function Nav() {
  const { lang, t, setLang } = useLang()
  const [open, setOpen] = useState(false)
  const overlayRef = useRef(null)
  const time = useClock()

  const links = [
    { href: '#locacao', label: t.nav.locacao },
    { href: '#assistencia', label: t.nav.assistencia },
    { href: '#pilotos', label: t.nav.pilotos },
    { href: '#sobre', label: t.nav.sobre },
  ]

  useEffect(() => {
    const el = overlayRef.current
    if (!el) return
    if (open) {
      document.body.style.overflow = 'hidden'
      gsap.to(el, { clipPath: 'inset(0% 0 0% 0)', duration: 0.6, ease: 'power4.inOut' })
      gsap.fromTo(
        el.querySelectorAll('.menu-link, .menu-cta'),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.07, delay: 0.25, ease: 'power3.out' }
      )
    } else {
      document.body.style.overflow = ''
      gsap.to(el, { clipPath: 'inset(0 0 100% 0)', duration: 0.5, ease: 'power4.inOut' })
    }
  }, [open])

  const flags = [
    { code: 'pt', label: 'Português', Flag: FlagBR },
    { code: 'en', label: 'English', Flag: FlagUS },
    { code: 'es', label: 'Español', Flag: FlagES },
  ]

  return (
    <>
      <header className="nav">
        <a href="#top" className="brand" aria-label="Yieldwalker">
          <Mark />
          <span className="wordmark">Yieldwalker</span>
        </a>

        <nav className="nav-links" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="nav-right">
          <span className="mono nav-clock">BRA — {time}</span>
          <div className="lang-switch" role="group" aria-label="Language / Idioma">
            {flags.map(({ code, label, Flag }) => (
              <button
                key={code}
                className={`lang-btn${lang === code ? ' active' : ''}`}
                onClick={() => setLang(code)}
                aria-label={label}
                title={label}
              >
                <Flag />
              </button>
            ))}
          </div>
          <a className="btn btn-pill" target="_blank" rel="noopener noreferrer" href={waLink(lang, 'generic')}>
            <WhatsAppIcon />
            WhatsApp
          </a>
          <button
            className={`burger${open ? ' open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? t.nav.close : t.nav.menu}
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`menu-overlay${open ? ' open' : ''}`} ref={overlayRef}>
        {links.map((l, i) => (
          <a key={l.href} href={l.href} className="menu-link" onClick={() => setOpen(false)}>
            <span className="idx">0{i + 1}</span>
            {l.label}
          </a>
        ))}
        <div className="menu-cta">
          <a className="btn btn-primary" target="_blank" rel="noopener noreferrer" href={waLink(lang, 'generic')}>
            <WhatsAppIcon />
            WhatsApp
          </a>
        </div>
      </div>
    </>
  )
}
