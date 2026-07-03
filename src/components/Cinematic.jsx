import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { useLang } from '../i18n.jsx'

/* Zoom cinematográfico: imagem pequena centrada escala até full-bleed no scroll */
export default function Cinematic() {
  const { t } = useLang()
  const ref = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ref.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.7,
          },
        })
        tl.fromTo(
          '.cinematic-frame',
          { width: '42vw', height: '46vh' },
          { width: '100vw', height: '100svh', ease: 'power1.inOut', duration: 1 },
          0
        )
          .fromTo('.cinematic-frame img', { scale: 1.35 }, { scale: 1, ease: 'power1.inOut', duration: 1 }, 0)
          .fromTo('.cinematic-caption', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.35 }, 0.62)
      })
      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set('.cinematic-frame', { width: '100vw', height: '100svh' })
        gsap.set('.cinematic-caption', { opacity: 1 })
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section className="cinematic" ref={ref} aria-label={t.hero.unit}>
      <div className="cinematic-sticky">
        <div className="cinematic-frame">
          <img src="/img/yw-01.webp" alt="Robô quadrúpede A2-Pro com braço de corte operando em talude de rodovia" loading="lazy" />
          <span className="mono cinematic-tag-tl">{t.hero.unit}</span>
          <span className="mono cinematic-tag-br">{t.hero.config}</span>
        </div>
        <div className="cinematic-caption">
          <span className="eyebrow">YW — 01</span>
          <h3>{t.hero.eyebrow}</h3>
        </div>
      </div>
    </section>
  )
}
