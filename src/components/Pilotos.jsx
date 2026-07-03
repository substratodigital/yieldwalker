import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { useLang, waLink } from '../i18n.jsx'
import { useReveal } from '../useReveal.js'
import { WhatsAppIcon, SimIcon, TeleopIcon, HybridIcon, AutoIcon } from './Icons.jsx'

const icons = [SimIcon, TeleopIcon, HybridIcon, AutoIcon]

/* Pipeline de 4 fases com linha amarela desenhada pelo scroll */
export default function Pilotos() {
  const { lang, t } = useLang()
  const ref = useRef(null)
  const pathRef = useRef(null)
  useReveal(ref)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const path = pathRef.current
      if (path) {
        const len = path.getTotalLength()
        gsap.set(path, { strokeDasharray: len, strokeDashoffset: len })
        gsap.to(path, {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: '.pipeline-wrap',
            start: 'top 78%',
            end: 'bottom 55%',
            scrub: 0.7,
          },
        })
      }
      gsap.fromTo(
        '.stage',
        { opacity: 0, y: 44 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.16,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.pipeline', start: 'top 80%', once: true },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="pilotos" className="section-pad section-line" ref={ref}>
      <div className="pilotos-bg" aria-hidden="true" />
      <div className="wrap" style={{ position: 'relative' }}>
        <div className="section-head" data-rv>
          <span className="eyebrow">{t.pilotos.eyebrow}</span>
          <h2 className="display-lg">
            {t.pilotos.h2a} <span className="accent">{t.pilotos.h2b}</span>
          </h2>
          <p className="lede">{t.pilotos.lede}</p>
        </div>

        <div className="pipeline-wrap">
          <svg className="pipeline-svg" viewBox="0 0 1000 400" preserveAspectRatio="none" aria-hidden="true">
            <path
              ref={pathRef}
              d="M -20 30 H 240 V 200 H 495 V 60 H 745 V 260 H 1020"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <div className="pipeline">
            {t.pilotos.stages.map((s, i) => {
              const Icon = icons[i]
              return (
                <article className="stage" key={s.h4}>
                  <span className="num">{s.num}</span>
                  <span className="s-icon"><Icon /></span>
                  <h4>{s.h4}</h4>
                  <p>{s.p}</p>
                  <span className="mode">{s.mode}</span>
                </article>
              )
            })}
          </div>
        </div>

        <div className="pilotos-cta" data-rv>
          <a className="btn btn-primary" target="_blank" rel="noopener noreferrer" href={waLink(lang, 'pilotos')}>
            <WhatsAppIcon />
            {t.pilotos.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
