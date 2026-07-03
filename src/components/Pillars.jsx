import { useRef } from 'react'
import { useLang } from '../i18n.jsx'
import { useReveal } from '../useReveal.js'
import { RentIcon, ServiceIcon, PilotIcon, ArrowRight } from './Icons.jsx'

const icons = [RentIcon, ServiceIcon, PilotIcon]

export default function Pillars() {
  const { t } = useLang()
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section className="section-pad section-line" ref={ref}>
      <div className="wrap">
        <div className="section-head" data-rv>
          <span className="eyebrow">{t.pillars.eyebrow}</span>
          <h2 className="display-lg">{t.pillars.h2}</h2>
        </div>
        <div className="pillars">
          {t.pillars.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <article className={`pillar${i === 2 ? ' green' : ''}`} key={item.h3} data-rv>
                <span className="idx">{item.idx}</span>
                <span className="p-icon"><Icon /></span>
                <h3>{item.h3}</h3>
                <p>{item.p}</p>
                <span className="chip">{item.chip}</span>
                <a className="link" href={item.href}>
                  {item.link} <ArrowRight />
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
