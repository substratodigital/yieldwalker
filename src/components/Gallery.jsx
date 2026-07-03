import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

const items = [
  { src: '/img/yw-01.webp', tag: 'YW.01 — HIGHWAY SLOPE' },
  { src: '/img/yw-02.webp', tag: 'YW.02 — FIELD CUT' },
  { src: '/img/yw-03.webp', tag: 'YW.03 — CUTTING ARM' },
  { src: '/img/yw-04.webp', tag: 'YW.04 — TERRAIN MODEL' },
  { src: '/img/yw-05.webp', tag: 'YW.05 — DIGITAL TWIN' },
]

/* Faixa de imagens em marquee infinito */
export default function Gallery() {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tween = gsap.to('.marquee', {
        xPercent: -50,
        duration: 38,
        ease: 'none',
        repeat: -1,
      })
      const el = ref.current
      const slow = () => gsap.to(tween, { timeScale: 0.25, duration: 0.5 })
      const fast = () => gsap.to(tween, { timeScale: 1, duration: 0.5 })
      el.addEventListener('mouseenter', slow)
      el.addEventListener('mouseleave', fast)
      return () => {
        el.removeEventListener('mouseenter', slow)
        el.removeEventListener('mouseleave', fast)
      }
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section className="gallery" ref={ref} aria-label="Yieldwalker em campo">
      <div className="marquee">
        {[...items, ...items].map((item, i) => (
          <figure className="marquee-item" key={i} style={{ margin: 0 }}>
            <img src={item.src} alt={item.tag} loading="lazy" />
            <span className="mono tag">{item.tag}</span>
          </figure>
        ))}
      </div>
    </section>
  )
}
