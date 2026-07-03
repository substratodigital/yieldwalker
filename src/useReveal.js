import { useLayoutEffect } from 'react'
import gsap from 'gsap'

/* Revela elementos [data-rv] do container ao entrarem na viewport */
export function useReveal(ref, deps = []) {
  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-rv]').forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            delay: (i % 4) * 0.08,
            scrollTrigger: { trigger: item, start: 'top 88%', once: true },
          }
        )
      })
    }, el)
    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
