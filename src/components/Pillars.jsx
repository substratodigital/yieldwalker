import { useRef } from 'react'
import { useLang } from '../i18n.jsx'
import { useReveal } from '../useReveal.js'
import { RentIcon, ServiceIcon, PilotIcon } from './Icons.jsx'

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
          <h2 className="display-lg">
            {t.pillars.h2a}<span className="accent">{t.pillars.h2b}</span>{t.pillars.h2c}<span className="accent">{t.pillars.h2d}</span>{t.pillars.h2e}
          </h2>
        </div>
        <div className="pillars">
          {t.pillars.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <article className={`pillar${i === 2 ? ' green' : ''}`} key={item.h3} data-rv>
                <span className="p-icon"><Icon /></span>
                <h3>{item.h3}</h3>
                <ul className="pillar-list">
                  {item.items.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
