import { useRef } from 'react'
import { useLang, waLink } from '../i18n.jsx'
import { useReveal } from '../useReveal.js'
import { WhatsAppIcon } from './Icons.jsx'

export default function CtaBand() {
  const { lang, t } = useLang()
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section className="cta-band" ref={ref}>
      <span className="crosshair" style={{ top: '18%', left: '14%' }} aria-hidden="true">+</span>
      <span className="crosshair" style={{ bottom: '20%', right: '16%' }} aria-hidden="true">+</span>
      <div className="wrap" data-rv>
        <span className="eyebrow">{t.cta.eyebrow}</span>
        <h2>
          {t.cta.h2a} <span className="accent">{t.cta.h2b}</span>
        </h2>
        <div className="cta-ctas">
          <a className="btn btn-primary" target="_blank" rel="noopener noreferrer" href={waLink(lang, 'generic')}>
            <WhatsAppIcon />
            {t.cta.btn}
          </a>
        </div>
      </div>
    </section>
  )
}
