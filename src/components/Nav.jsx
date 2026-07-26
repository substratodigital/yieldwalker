import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useLang } from '../i18n.jsx'
import { ContactIcon, FlagBR, FlagUS, FlagES } from './Icons.jsx'

export default function Nav() {
  const { lang, t, setLang } = useLang()
  const [open, setOpen] = useState(false)
  const overlayRef = useRef(null)

  const links = [
    { href: '#locacao', label: t.nav.rocagem },
    { href: '#assistencia', label: t.nav.seguranca },
    { href: '#concessionaria', label: t.nav.concessao },
    { href: '#pilotos', label: t.nav.pilotos },
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
    { code: 'en', label: 'English', Flag: FlagUS },
    { code: 'pt', label: 'Português', Flag: FlagBR },
    { code: 'es', label: 'Español', Flag: FlagES },
  ]

  return (
    <>
      <header className="nav">
        <a href="#top" className="brand" aria-label="Yieldwalker">
          <img className="brand-logo" src="/img/logo.png" alt="Yieldwalker" />
        </a>

        <nav className="nav-links" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="nav-right">
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
          <a className="btn btn-pill" href="/contato/index.html">
            <ContactIcon />
            {t.nav.contato}
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
          <a className="btn btn-primary" href="/contato/index.html">
            <ContactIcon />
            {t.nav.contato}
          </a>
        </div>
      </div>
    </>
  )
}
