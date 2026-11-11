import { useLang } from '../i18n.jsx'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <img className="brand-logo" src="/img/logo.png" alt="Yieldwalker" />
            <p>{t.foot.tagline}</p>
          </div>
          <div className="foot-col">
            <h5>{t.foot.servicesTitle}</h5>
            {t.foot.services.map((s) => (
              <a key={s} href="/contato/index.html">{s}</a>
            ))}
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Yieldwalker Tecnologia Robótica Ltda.</span>
          <span>{t.hero.tag}</span>
        </div>
      </div>
    </footer>
  )
}
