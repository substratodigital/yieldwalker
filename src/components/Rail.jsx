import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/* Linha amarela vertical que guia o usuário — progresso de leitura da página */
export default function Rail() {
  const railRef = useRef(null)

  useLayoutEffect(() => {
    const rail = railRef.current
    if (!rail) return
    const ctx = gsap.context(() => {
      const progress = rail.querySelector('.rail-progress')
      const dot = rail.querySelector('.rail-dot')

      gsap.to(progress, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: { trigger: document.body, start: 'top top', end: 'max', scrub: 0.6 },
      })
      gsap.to(dot, {
        y: () => progress.offsetHeight - 7,
        ease: 'none',
        scrollTrigger: { trigger: document.body, start: 'top top', end: 'max', scrub: 0.6, invalidateOnRefresh: true },
      })
    }, rail)
    return () => ctx.revert()
  }, [])

  return (
    <div className="rail" ref={railRef} aria-hidden="true">
      <div className="rail-progress" />
      <div className="rail-dot" />
      <span className="rail-coords">23.55°S / 46.63°W — YW.FIELD.OPS</span>
    </div>
  )
}
