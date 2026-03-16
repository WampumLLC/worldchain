import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './ServicePage.css'

export default function Transformation() {
  const { t } = useTranslation()

  return (
    <div className="service-page">
      <header className="service-page-header">
        <Link to="/" className="back-link">&larr; {t('servicePage.backHome')}</Link>
        <div className="service-page-icon">🔄</div>
        <h1>{t('transformationPage.title')}</h1>
        <p className="service-page-intro">{t('transformationPage.intro')}</p>
      </header>

      <section className="service-page-section">
        <h2>{t('transformationPage.approach.title')}</h2>
        <p>{t('transformationPage.approach.text')}</p>
      </section>

      <section className="service-page-section">
        <h2>{t('transformationPage.caseStudies.title')}</h2>

        <div className="case-study">
          <h3>{t('transformationPage.caseStudies.ai.title')}</h3>
          <p>{t('transformationPage.caseStudies.ai.text')}</p>
          <ul className="case-study-stats">
            <li><strong>57</strong> {t('transformationPage.caseStudies.ai.stat1')}</li>
            <li><strong>40%</strong> {t('transformationPage.caseStudies.ai.stat2')}</li>
            <li><strong>4 {t('common.months')}</strong> {t('transformationPage.caseStudies.ai.stat3')}</li>
          </ul>
        </div>

        <div className="case-study">
          <h3>{t('transformationPage.caseStudies.skeptic.title')}</h3>
          <p>{t('transformationPage.caseStudies.skeptic.text')}</p>
        </div>

        <div className="case-study">
          <h3>{t('transformationPage.caseStudies.ethdenver.title')}</h3>
          <p>{t('transformationPage.caseStudies.ethdenver.text')}</p>
          <ul className="case-study-stats">
            <li><strong>$1.3M</strong> {t('transformationPage.caseStudies.ethdenver.stat1')}</li>
            <li><strong>59.6</strong> {t('transformationPage.caseStudies.ethdenver.stat2')}</li>
          </ul>
        </div>

        <div className="case-study">
          <h3>{t('transformationPage.caseStudies.culture.title')}</h3>
          <p>{t('transformationPage.caseStudies.culture.text')}</p>
        </div>
      </section>

      <section className="service-page-section">
        <h2>{t('transformationPage.platforms.title')}</h2>
        <div className="compliance-badges">
          {['AWS', 'Google Cloud', 'Azure', 'Cloudflare', 'Vercel', 'ServiceNow'].map((c) => (
            <span className="compliance-badge" key={c}>{c}</span>
          ))}
        </div>
      </section>

      <section className="service-page-cta">
        <p>{t('transformationPage.cta')}</p>
        <a href="mailto:info@worldchain.org" className="service-page-cta-btn">info@worldchain.org</a>
      </section>
    </div>
  )
}
