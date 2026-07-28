import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { useLang } from '../i18n.jsx'
import { useReveal } from '../useReveal.js'
import { ContactIcon, DrainageIcon, RoadFurnitureIcon, SmallAreaIcon, GuardrailIcon } from './Icons.jsx'

const icons = [DrainageIcon, RoadFurnitureIcon, SmallAreaIcon, GuardrailIcon]
const images = ['/img/locacao-drenagem.webp', '/img/locacao-viario.webp', '/img/locacao-pequena.webp', '/img/locacao-guardrail.webp']

export default function Locacao() {
  const { t } = useLang()
  const ref = useRef(null)
  useReveal(ref)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // parallax da imagem full-bleed
      gsap.fromTo(
        '.fullbleed img',
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: 'none',
          scrollTrigger: { trigger: '.fullbleed', start: 'top bottom', end: 'bottom top', scrub: 0.6 },
        }
      )
      gsap.fromTo(
        '.fullbleed-caption h3',
        { yPercent: 60, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: { trigger: '.fullbleed', start: 'top 55%', once: true },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref}>
      <div className="fullbleed">
        <img src="/img/yw-02.webp" alt="QPD 2DoF BCN 1 cortando vegetação em talude inclinado à beira de rodovia" loading="lazy" />
        <div className="shade" />
        <div className="fullbleed-caption">
          <div className="wrap">
            <h3>QPD 2DoF BCN 1</h3>
            <div className="meta">
              <span className="mono">YW UNIT Nº 01 / FIELD OPS</span>
              <span className="mono yellow">30° MAX / IP56 / 5 M/S</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section-pad" id="locacao">
        <div className="wrap">
          <div className="section-head" data-rv>
            <span className="eyebrow">{t.locacao.eyebrow}</span>
            <h2 className="display-lg">
              {t.locacao.h2a}<span className="accent">{t.locacao.h2b}</span>
            </h2>
            <p className="lede">{t.locacao.lede}</p>
          </div>

          <div className="reason-grid cols-4" data-rv>
            {t.locacao.challenges.map((c, i) => {
              const Icon = icons[i]
              return (
                <article className="reason-card" key={c.title}>
                  <span className="r-icon"><Icon /></span>
                  <h4>{c.title}</h4>
                  <p>{c.p}</p>
                  <div className="card-img">
                    <img src={images[i]} alt={c.title} loading="lazy" />
                  </div>
                </article>
              )
            })}
          </div>

          <div className="locacao-cta" data-rv>
            <a className="btn btn-primary" href="/contato/index.html">
              <ContactIcon />
              {t.locacao.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
