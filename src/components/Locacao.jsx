import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { useLang, waLink } from '../i18n.jsx'
import { useReveal } from '../useReveal.js'
import { WhatsAppIcon } from './Icons.jsx'

export default function Locacao() {
  const { lang, t } = useLang()
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
      // linhas do datasheet entram em cascata
      gsap.fromTo(
        '.spec-row',
        { opacity: 0, x: 24 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.spec-sheet', start: 'top 80%', once: true },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="locacao" ref={ref}>
      <div className="fullbleed">
        <img src="/img/yw-02.webp" alt="A2-Pro cortando vegetação em talude inclinado à beira de rodovia" loading="lazy" />
        <div className="shade" />
        <div className="fullbleed-caption">
          <div className="wrap">
            <span className="eyebrow">{t.locacao.eyebrow}</span>
            <h3>UNITREE A2-PRO</h3>
            <div className="meta">
              <span className="mono">YW UNIT Nº 01 — FIELD OPS</span>
              <span className="mono yellow">45° MAX / IP56 / 5 M/S</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section-pad">
        <div className="wrap">
          <div className="section-head" data-rv>
            <h2 className="display-lg">{t.locacao.h2}</h2>
            <p className="lede">{t.locacao.lede}</p>
          </div>

          <div className="twocol">
            <div data-rv>
              <ul className="feature-list">
                {t.locacao.feats.map((f) => (
                  <li key={f.b}>
                    <span><b>{f.b}</b>{f.rest}</span>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 28 }}>
                <a className="btn btn-primary" target="_blank" rel="noopener noreferrer" href={waLink(lang, 'locacao2')}>
                  <WhatsAppIcon />
                  {t.locacao.cta}
                </a>
              </div>
            </div>

            <div className="spec-sheet" data-rv>
              <div className="spec-head mono">
                <span>{t.locacao.ssTitle}</span>
                <span className="model">A2-PRO</span>
              </div>
              {t.locacao.specs.map((s) => (
                <div className="spec-row" key={s.k}>
                  <span className="k">{s.k}</span>
                  <span className="v">{s.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
