import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import LanguageSelector from './components/LanguageSelector'
import './App.css'

const serviceKeys = [
  { key: 'egovernment', icon: '🏛', path: '/egovernment' },
  { key: 'ecommerce', icon: '🛒', path: '/ecommerce' },
  { key: 'blockchain', icon: '⛓', path: '/blockchain' },
  { key: 'transformation', icon: '🔄', path: '/transformation' },
]

const clients = [
  { name: 'ETHDenver', url: 'https://ethdenver.com' },
  { name: 'Bufficorn Ventures', url: 'https://bufficorn.ventures' },
  { name: 'LWYL', url: 'https://lwylstudio.com' },
  { name: 'Unicorns, Inc.', url: '/unicorns', internal: true },
  { name: 'Wampei', url: 'https://wampei.com' },
]

const RTL_LANGUAGES = ['ar']

function App() {
  const { t, i18n } = useTranslation()
  const dir = RTL_LANGUAGES.includes(i18n.language?.split('-')[0]) ? 'rtl' : 'ltr'

  return (
    <div dir={dir}>
      {/* Nav */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            <img src="/logo-small.png" alt="Worldchain" />
            <span>WORLDCHAIN</span>
          </a>
          <div className="nav-right">
            <ul className="nav-links">
              <li><a href="#services">{t('nav.services')}</a></li>
              <li><a href="#clients">{t('nav.clients')}</a></li>
              <li><a href="#about">{t('nav.about')}</a></li>
              <li><a href="#contact">{t('nav.contact')}</a></li>
            </ul>
            <LanguageSelector />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <img src="/logo.png" alt="Worldchain LLC" className="hero-logo" />
        <h1>
          <span className="gold">World</span>chain
        </h1>
        <p className="tagline">{t('hero.tagline')}</p>
        <a href="#contact" className="hero-cta">{t('hero.cta')}</a>
      </section>

      {/* Services */}
      <section className="section" id="services">
        <hr className="section-divider" />
        <h2 className="section-title">{t('services.title')}</h2>
        <p className="section-subtitle">{t('services.subtitle')}</p>
        <div className="services-grid">
          {serviceKeys.map((s) => (
            <Link to={s.path} className="service-card" key={s.key}>
              <div className="service-icon">{s.icon}</div>
              <h3>{t(`services.${s.key}.title`)}</h3>
              <p>{t(`services.${s.key}.desc`)}</p>
              <span className="service-learn-more">{t('services.learnMore')} &rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section className="clients-section" id="clients">
        <div className="section">
          <hr className="section-divider" />
          <h2 className="section-title">{t('clients.title')}</h2>
          <p className="section-subtitle">{t('clients.subtitle')}</p>
          <div className="clients-grid">
            {clients.map((c) => (
              c.internal
                ? <Link className="client-badge" key={c.name} to={c.url}>{c.name}</Link>
                : <a className="client-badge" key={c.name} href={c.url} target="_blank" rel="noopener noreferrer">{c.name}</a>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section" id="about">
        <hr className="section-divider" />
        <h2 className="section-title">{t('about.title')}</h2>
        <p className="about-text">{t('about.text')}</p>
        <p className="about-text" style={{ marginTop: '1.5rem' }}>{t('about.founder')}</p>
      </section>

      {/* Contact */}
      <section className="section contact-section" id="contact">
        <hr className="section-divider" style={{ margin: '0 auto 1rem' }} />
        <h2 className="section-title">{t('contact.title')}</h2>
        <p className="section-subtitle">{t('contact.subtitle')}</p>
        <a href="mailto:info@worldchain.org" className="contact-email">
          info@worldchain.org
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
        &copy; {new Date().getFullYear()} Worldchain LLC. {t('footer.rights')}
      </footer>
    </div>
  )
}

export default App
