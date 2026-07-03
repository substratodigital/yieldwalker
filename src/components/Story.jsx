import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { useLang } from '../i18n.jsx'
import { useReveal } from '../useReveal.js'
import { Mark } from './Icons.jsx'

export default function Story() {
  const { t } = useLang()
  const ref = useRef(null)
  useReveal(ref)

  // desenho progressivo dos traços da marca
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const shapes = ref.current.querySelectorAll('.evo-box polyline')
      shapes.forEach((s) => {
        const len = s.getTotalLength()
        gsap.set(s, { strokeDasharray: len, strokeDashoffset: len })
      })
      gsap.to(shapes, {
        strokeDashoffset: 0,
        duration: 1.1,
        stagger: 0.18,
        ease: 'power2.inOut',
        scrollTrigger: { trigger: '.evolution', start: 'top 75%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="sobre" className="section-pad section-line" ref={ref}>
      <div className="wrap">
        <div className="story-grid">
          <div data-rv>
            <span className="eyebrow">{t.story.eyebrow}</span>
            <h2 className="display-md" style={{ marginTop: 16 }}>{t.story.h2}</h2>
            <p className="lede" style={{ marginTop: 18 }}>{t.story.lede}</p>
          </div>

          <div className="evolution" data-rv>
            <div className="evo-step">
              <div className="evo-box">
                <svg viewBox="0 0 40 60">
                  <polyline points="20,4 20,26" strokeWidth="6" />
                  <polyline points="6,4 20,26 34,4" strokeWidth="6" />
                </svg>
              </div>
              <span className="evo-cap">{t.story.evo[0]}</span>
            </div>
            <span className="evo-arrow">→</span>
            <div className="evo-step">
              <div className="evo-box">
                <svg viewBox="0 0 40 60">
                  <polyline points="20,56 20,34" strokeWidth="6" />
                  <polyline points="6,56 20,34 34,56" strokeWidth="6" />
                </svg>
              </div>
              <span className="evo-cap">{t.story.evo[1]}</span>
            </div>
            <span className="evo-arrow">→</span>
            <div className="evo-step">
              <div className="evo-box">
                <svg viewBox="0 0 40 60">
                  <polyline points="10,56 10,30 30,30 30,56" strokeWidth="6" />
                </svg>
              </div>
              <span className="evo-cap">{t.story.evo[2]}</span>
            </div>
            <span className="evo-arrow">→</span>
            <div className="evo-step">
              <div className="evo-box">
                <svg viewBox="0 0 120 100">
                  <polyline points="38,92 38,58 78,58 78,92" strokeWidth="9.5" />
                  <polyline points="40,46 12,18 60,34" strokeWidth="9.5" />
                  <polyline points="51,48 51,34 67,34 67,48" strokeWidth="9.5" />
                </svg>
              </div>
              <span className="evo-cap">{t.story.evo[3]}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
