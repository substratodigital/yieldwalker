import { useLang } from '../i18n.jsx'
import { Mark } from './Icons.jsx'

export default function Footer() {
  const { t } = useLang()
  const anchors = ['#locacao', '#assistencia', '#pilotos']

  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Mark />
            <span className="wordmark">Yieldwalker</span>
            <p>{t.foot.tagline}</p>
          </div>
          <div className="foot-col">
            <h5>{t.foot.servicesTitle}</h5>
            {t.foot.services.map((s, i) => (
              <a key={s} href={anchors[i]}>{s}</a>
            ))}
          </div>
          <div className="foot-col">
            <h5>{t.foot.contactTitle}</h5>
            <a target="_blank" rel="noopener noreferrer" href="https://wa.me/5511982023271">
              WhatsApp: +55 11 98202-3271
            </a>
            <a href="mailto:contato@yieldwalker.com.br">contato@yieldwalker.com.br</a>
            <a href="#top">{t.foot.location}</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Yieldwalker Tecnologia Robótica Ltda.</span>
          <span>{t.foot.rights}</span>
        </div>
      </div>
    </footer>
  )
}
