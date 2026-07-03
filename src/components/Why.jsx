import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { useLang } from '../i18n.jsx'
import { useReveal } from '../useReveal.js'
import { LaborIcon, HazardIcon, RiskIcon } from './Icons.jsx'

const icons = [LaborIcon, HazardIcon, RiskIcon]

export default function Why() {
  const { lang, t } = useLang()
  const ref = useRef(null)
  useReveal(ref)

  // reveal palavra a palavra amarrado ao scroll (efeito epílogo do vídeo)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.why-closing .w', {
        opacity: 1,
        ease: 'none',
        stagger: 0.06,
        scrollTrigger: {
          trigger: '.why-closing',
          start: 'top 82%',
          end: 'top 30%',
          scrub: 0.5,
        },
      })
    }, ref)
    return () => ctx.revert()
  }, [lang])

  const words = t.why.closing.split(' ')

  return (
    <section className="why section-pad section-line" ref={ref}>
      <div className="wrap">
        <div className="section-head" data-rv>
          <span className="eyebrow">{t.why.eyebrow}</span>
          <h2 className="display-lg">{t.why.h2}</h2>
        </div>

        <div className="reason-grid">
          {t.why.reasons.map((r, i) => {
            const Icon = icons[i]
            return (
              <article className="reason-card" key={r.h4} data-rv>
                <span className="num">0{i + 1}</span>
                <span className="r-icon"><Icon /></span>
                <h4>{r.h4}</h4>
                <p>{r.p}</p>
              </article>
            )
          })}
        </div>

        <div className="why-closing">
          <p className="statement" key={lang}>
            {words.map((w, i) => (
              <span className="w" key={`${w}-${i}`}>{w}&nbsp;</span>
            ))}
          </p>
        </div>
      </div>
    </section>
  )
}
