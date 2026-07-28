import { useRef } from 'react'
import { useLang } from '../i18n.jsx'
import { useReveal } from '../useReveal.js'
import { ContactIcon } from './Icons.jsx'

const images = ['/img/pilotos-full-operado.webp', '/img/pilotos-hibrido.webp', '/img/pilotos-full-autonomo.webp']

export default function Pilotos() {
  const { t } = useLang()
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section id="pilotos" className="section-pad section-line" ref={ref}>
      <div className="pilotos-bg" aria-hidden="true" />
      <div className="wrap" style={{ position: 'relative' }}>
        <div className="section-head" data-rv>
          <span className="eyebrow">{t.pilotos.eyebrow}</span>
          <h2 className="display-lg accent">
            {t.pilotos.h2a}{t.pilotos.h2b}
          </h2>
          <p className="lede">{t.pilotos.lede}</p>
        </div>

        <div className="reason-grid" data-rv>
          {t.pilotos.stages.map((s, i) => (
            <article className="reason-card stage-card" key={s.h4}>
              <div className="stage-num-row">
                <span className="stage-num">{s.num}</span>
                <h4>{s.h4}</h4>
              </div>
              <p>{s.p}</p>
              <div className="stage-tags">
                {s.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="card-img">
                <img src={images[i]} alt={s.h4} loading="lazy" />
              </div>
            </article>
          ))}
        </div>

        <div className="pilotos-cta" data-rv>
          <a className="btn btn-primary" href="/contato/index.html">
            <ContactIcon />
            {t.pilotos.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
