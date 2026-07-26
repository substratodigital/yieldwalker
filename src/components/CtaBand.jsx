import { useRef } from 'react'
import { useLang } from '../i18n.jsx'
import { useReveal } from '../useReveal.js'
import { ContactIcon } from './Icons.jsx'

export default function CtaBand() {
  const { t } = useLang()
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section className="cta-band" ref={ref}>
      <span className="crosshair" style={{ top: '18%', left: '14%' }} aria-hidden="true">+</span>
      <span className="crosshair" style={{ bottom: '20%', right: '16%' }} aria-hidden="true">+</span>
      <div className="wrap" data-rv>
        <span className="eyebrow">{t.cta.eyebrow}</span>
        <h2>
          {t.cta.h2a}<span className="accent">{t.cta.h2b}</span>{t.cta.h2c}<span className="accent">{t.cta.h2d}</span>
        </h2>
        <div className="cta-ctas">
          <a className="btn btn-primary" href="/contato/index.html">
            <ContactIcon />
            {t.cta.btn}
          </a>
        </div>
      </div>
    </section>
  )
}
