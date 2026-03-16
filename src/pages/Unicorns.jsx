import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './ServicePage.css'

const metrics = [
  { value: '20,000+', key: 'users' },
  { value: '90s', key: 'onboarding' },
  { value: '80%', key: 'retention' },
  { value: '10×', key: 'cac' },
  { value: '$120K', key: 'arr' },
  { value: '70%', key: 'recurring' },
]

const networks = [
  'Ethereum', 'Polygon', 'Base', 'Optimism', 'Arbitrum',
]

const caseStudies = ['ethdenver', 'bitbasel', 'protocols', 'undp']

export default function Unicorns() {
  const { t } = useTranslation()

  return (
    <div className="service-page">
      <header className="service-page-header">
        <Link to="/" className="back-link">&larr; {t('servicePage.backHome')}</Link>
        <div className="service-page-icon">🦄</div>
        <h1>{t('unicornsPage.title')}</h1>
        <p className="service-page-tagline">{t('unicornsPage.tagline')}</p>
        <p className="service-page-intro">{t('unicornsPage.intro')}</p>
      </header>

      {/* Key Metrics */}
      <section className="service-page-section">
        <h2>{t('unicornsPage.metrics.title')}</h2>
        <div className="metrics-grid">
          {metrics.map((m) => (
            <div className="metric-card" key={m.key}>
              <span className="metric-value">{m.value}</span>
              <span className="metric-label">{t(`unicornsPage.metrics.${m.key}`)}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="service-page-section">
        <h2>{t('unicornsPage.problem.title')}</h2>
        <div className="two-col">
          <div className="case-study">
            <h3>{t('unicornsPage.problem.friction.title')}</h3>
            <p>{t('unicornsPage.problem.friction.text')}</p>
          </div>
          <div className="case-study">
            <h3>{t('unicornsPage.problem.blindness.title')}</h3>
            <p>{t('unicornsPage.problem.blindness.text')}</p>
          </div>
        </div>
      </section>

      <section className="service-page-section">
        <h2>{t('unicornsPage.solution.title')}</h2>
        <p>{t('unicornsPage.solution.text')}</p>
        <div className="two-col" style={{ marginTop: '1.5rem' }}>
          <div className="case-study">
            <h3>{t('unicornsPage.solution.members.title')}</h3>
            <ul className="feature-list">
              <li>{t('unicornsPage.solution.members.item1')}</li>
              <li>{t('unicornsPage.solution.members.item2')}</li>
              <li>{t('unicornsPage.solution.members.item3')}</li>
              <li>{t('unicornsPage.solution.members.item4')}</li>
            </ul>
          </div>
          <div className="case-study">
            <h3>{t('unicornsPage.solution.brands.title')}</h3>
            <ul className="feature-list">
              <li>{t('unicornsPage.solution.brands.item1')}</li>
              <li>{t('unicornsPage.solution.brands.item2')}</li>
              <li>{t('unicornsPage.solution.brands.item3')}</li>
              <li>{t('unicornsPage.solution.brands.item4')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="service-page-section">
        <h2>{t('unicornsPage.technology.title')}</h2>
        <p>{t('unicornsPage.technology.text')}</p>
        <div className="compliance-badges" style={{ marginTop: '1rem' }}>
          {networks.map((n) => (
            <span className="compliance-badge" key={n}>{n}</span>
          ))}
          <span className="compliance-badge">+ 7 more</span>
        </div>
      </section>

      {/* Case Studies */}
      <section className="service-page-section">
        <h2>{t('unicornsPage.caseStudies.title')}</h2>
        {caseStudies.map((cs) => (
          <div className="case-study" key={cs}>
            <h3>{t(`unicornsPage.caseStudies.${cs}.title`)}</h3>
            <p>{t(`unicornsPage.caseStudies.${cs}.text`)}</p>
            {cs === 'ethdenver' && (
              <ul className="case-study-stats">
                <li><strong>18min → 90s</strong> {t('unicornsPage.caseStudies.ethdenver.stat1')}</li>
                <li><strong>50-90%</strong> {t('unicornsPage.caseStudies.ethdenver.stat2')}</li>
                <li><strong>20,000+</strong> {t('unicornsPage.caseStudies.ethdenver.stat3')}</li>
              </ul>
            )}
          </div>
        ))}
      </section>

      {/* Clients */}
      <section className="service-page-section">
        <h2>{t('unicornsPage.trustedBy.title')}</h2>
        <div className="compliance-badges">
          {['United Nations', 'ETHDenver', 'BitBasel', 'Polygon', 'Arbitrum', 'LWYL', 'Superb Aero'].map((c) => (
            <span className="compliance-badge" key={c}>{c}</span>
          ))}
        </div>
      </section>

      {/* Worldchain Role */}
      <section className="service-page-section">
        <h2>{t('unicornsPage.worldchainRole.title')}</h2>
        <p>{t('unicornsPage.worldchainRole.text')}</p>
      </section>

      <section className="service-page-cta">
        <p>{t('unicornsPage.cta')}</p>
        <a href="https://myunicornaccount.com" target="_blank" rel="noopener noreferrer" className="service-page-cta-btn">
          myunicornaccount.com
        </a>
      </section>
    </div>
  )
}
