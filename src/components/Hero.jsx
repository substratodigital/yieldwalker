import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { useLang, waLink } from '../i18n.jsx'
import { Mark, WhatsAppIcon, ArrowDown } from './Icons.jsx'

export default function Hero() {
  const { lang, t } = useLang()
  const ref = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
      tl.fromTo('.hero-grid-bg', { opacity: 0 }, { opacity: 0.35, duration: 1.6, ease: 'power2.out' }, 0)
        .fromTo('.hero .eyebrow', { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.8 }, 0.2)
        .fromTo(
          '.hero .line-mask > span',
          { yPercent: 115 },
          { yPercent: 0, duration: 1.2, stagger: 0.14 },
          0.35
        )
        .fromTo(
          ['.hero .lede', '.hero-ctas', '.hero-scroll'],
          { opacity: 0, y: 26 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.1 },
          0.9
        )
        .fromTo(
          '.hero-stats > div',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 },
          1.1
        )

      // parallax sutil ao sair do hero
      gsap.to('.hero h1', {
        yPercent: -12,
        opacity: 0.35,
        ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'bottom 90%', end: 'bottom 20%', scrub: 0.8 },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="hero-grid-bg" aria-hidden="true" />
      <span className="crosshair" style={{ top: '22%', right: '12%' }} aria-hidden="true">+</span>
      <span className="crosshair" style={{ bottom: '34%', left: '38%' }} aria-hidden="true">+</span>

      <div className="wrap">
        <div className="hero-eyebrow-row">
          <span className="eyebrow">{t.hero.eyebrow}</span>
          <span className="mono">FIELD GUIDE — UNITREE A2-PRO</span>
        </div>

        <h1 className="display-xl">
          <span className="line-mask"><span>{t.hero.h1a}</span></span>
          <span className="line-mask">
            <span>
              <span className="accent">{t.hero.h1b}</span>
              <Mark className="hero-mark-glyph" />
            </span>
          </span>
        </h1>

        <div className="hero-bottom">
          <div>
            <p className="lede">{t.hero.lede}</p>
            <div className="hero-ctas">
              <a className="btn btn-primary" target="_blank" rel="noopener noreferrer" href={waLink(lang, 'locacao')}>
                <WhatsAppIcon />
                {t.hero.cta1}
              </a>
              <a className="btn btn-ghost" href="#pilotos">
                {t.hero.cta2}
              </a>
            </div>
          </div>
          <div className="hero-scroll mono">
            <ArrowDown />
            <span>{t.hero.scroll}</span>
            <span className="tick" />
            <span>23.55°S / 46.63°W</span>
          </div>
        </div>

        <div className="hero-stats">
          {t.hero.stats.map((s) => (
            <div key={s.lbl}>
              <span className="num">{s.num}</span>
              <span className="lbl">{s.lbl}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
