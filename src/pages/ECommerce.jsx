import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './ServicePage.css'

export default function ECommerce() {
  const { t } = useTranslation()

  return (
    <div className="service-page">
      <header className="service-page-header">
        <Link to="/" className="back-link">&larr; {t('servicePage.backHome')}</Link>
        <div className="service-page-icon">🛒</div>
        <h1>{t('ecommercePage.title')}</h1>
        <p className="service-page-intro">{t('ecommercePage.intro')}</p>
      </header>

      <section className="service-page-section">
        <h2>{t('ecommercePage.approach.title')}</h2>
        <p>{t('ecommercePage.approach.text')}</p>
      </section>

      <section className="service-page-section">
        <h2>{t('ecommercePage.caseStudies.title')}</h2>

        <div className="case-study">
          <h3>{t('ecommercePage.caseStudies.wampei.title')}</h3>
          <p>{t('ecommercePage.caseStudies.wampei.text')}</p>
        </div>

        <div className="case-study">
          <h3>{t('ecommercePage.caseStudies.charity.title')}</h3>
          <p>{t('ecommercePage.caseStudies.charity.text')}</p>
        </div>

        <div className="case-study">
          <h3>{t('ecommercePage.caseStudies.hawaii.title')}</h3>
          <p>{t('ecommercePage.caseStudies.hawaii.text')}</p>
          <ul className="case-study-stats">
            <li><strong>$2B+</strong> {t('ecommercePage.caseStudies.hawaii.stat1')}</li>
            <li><strong>NACHA & SWIFT</strong> {t('ecommercePage.caseStudies.hawaii.stat2')}</li>
          </ul>
        </div>
      </section>

      <section className="service-page-section">
        <h2>{t('ecommercePage.compliance.title')}</h2>
        <div className="compliance-badges">
          {['PCI-DSS', 'NACHA', 'SWIFT', 'ACH', 'ISO 20022', 'SOX'].map((c) => (
            <span className="compliance-badge" key={c}>{c}</span>
          ))}
        </div>
      </section>

      <section className="service-page-cta">
        <p>{t('ecommercePage.cta')}</p>
        <a href="mailto:info@worldchain.org" className="service-page-cta-btn">info@worldchain.org</a>
      </section>
    </div>
  )
}
