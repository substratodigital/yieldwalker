import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { useLang, waLink } from '../i18n.jsx'
import { useReveal } from '../useReveal.js'
import { WhatsAppIcon } from './Icons.jsx'

export default function Assistencia() {
  const { lang, t } = useLang()
  const ref = useRef(null)
  useReveal(ref)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-media img',
        { scale: 1.15 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: { trigger: '.service-grid', start: 'top bottom', end: 'bottom top', scrub: 0.6 },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="assistencia" className="section-pad section-line" ref={ref}>
      <div className="wrap">
        <div className="section-head" data-rv>
          <span className="eyebrow">{t.assist.eyebrow}</span>
          <h2 className="display-lg">{t.assist.h2}</h2>
        </div>

        <div className="service-grid" data-rv>
          <div className="service-media">
            <img src="/img/yw-03.webp" alt="Detalhe do braço de corte do A2-Pro em operação" loading="lazy" />
            <span className="mono tag">YW SERVICE — DIAG / REPAIR / CAL</span>
          </div>
          <div className="service-body">
            <p className="lede">{t.assist.lede}</p>
            <ul>
              {t.assist.items.map((li) => (
                <li key={li}>{li}</li>
              ))}
            </ul>
            <div className="service-cta">
              <span className="big">{t.assist.ctaTitle}</span>
              <p>{t.assist.ctaP}</p>
              <a className="btn btn-primary" target="_blank" rel="noopener noreferrer" href={waLink(lang, 'assistencia')}>
                <WhatsAppIcon />
                {t.assist.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
