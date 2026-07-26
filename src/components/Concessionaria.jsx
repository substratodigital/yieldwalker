import { useRef } from 'react'
import { useLang } from '../i18n.jsx'
import { useReveal } from '../useReveal.js'
import { ElectricIcon, ESGIcon, MonitorIcon } from './Icons.jsx'

const LEVEL_PCT = { high: 100, mid: 65, low: 35 }
const benefitIcons = [ElectricIcon, ESGIcon, MonitorIcon]

export default function Concessionaria() {
  const { t } = useLang()
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section id="concessionaria" className="section-pad section-line" ref={ref}>
      <div className="wrap">
        <div className="section-head" data-rv>
          <span className="eyebrow">{t.conc.eyebrow}</span>
          <h2 className="display-lg">
            {t.conc.h2a}<span className="accent">{t.conc.h2b}</span>{t.conc.h2c}<span className="accent">{t.conc.h2d}</span>{t.conc.h2e}<span className="accent">{t.conc.h2f}</span>{t.conc.h2g}<span className="accent">{t.conc.h2h}</span>{t.conc.h2i}
          </h2>
          <p className="lede">{t.conc.lede}</p>
        </div>

        <div className="compare-chart" data-rv>
          <div className="compare-head">
            <span className="compare-label">▼ {t.conc.areaLabel}</span>
            <span className="compare-label right">{t.conc.effortLabel} ▲</span>
          </div>
          {t.conc.rows.map((r) => (
            <div className="compare-row" key={r.method}>
              <div className="compare-bar area" style={{ width: `${LEVEL_PCT[r.area.level]}%` }}>
                <span>{r.area.label}</span>
              </div>
              <span className="compare-method">{r.method}</span>
              <div className="compare-bar effort" data-level={r.effort.level} style={{ width: `${LEVEL_PCT[r.effort.level]}%` }}>
                <span>{r.effort.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="pilotos-benefits" data-rv>
          <h3 className="display-md">{t.conc.benefitsH2}</h3>
          <div className="reason-grid">
            {t.conc.benefits.map((b, i) => {
              const Icon = benefitIcons[i]
              return (
                <article className="reason-card" key={b.h4}>
                  <span className="r-icon"><Icon /></span>
                  <h4>{b.h4}</h4>
                  <p>{b.p}</p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
