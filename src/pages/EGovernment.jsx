import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './ServicePage.css'

const serviceCategories = [
  { key: 'licensing', icon: '📋' },
  { key: 'payments', icon: '💳' },
  { key: 'records', icon: '📄' },
  { key: 'permits', icon: '🏗' },
  { key: 'elections', icon: '🗳' },
  { key: 'safety', icon: '🛡' },
]

const awards = [
  { year: '2021', key: 'nascio_2021' },
  { year: '2021', key: 'aamva_2021' },
  { year: '2017', key: 'w3_2017' },
  { year: '2016', key: 'dgaa_2016' },
  { year: '2016', key: 'nacm_2016' },
  { year: '2015', key: 'mobile_2015' },
  { year: '2014', key: 'bestWeb_2014' },
  { year: '2014', key: 'bestGov_2014' },
  { year: '2013', key: 'dgaa_marriage_2013' },
  { year: '2013', key: 'pinnacle_2013' },
  { year: '2012', key: 'nascio_2012' },
  { year: '2010', key: 'ebench_2010' },
]

export default function EGovernment() {
  const { t } = useTranslation()

  return (
    <div className="service-page">
      <header className="service-page-header">
        <Link to="/" className="back-link">&larr; {t('servicePage.backHome')}</Link>
        <div className="service-page-icon">🏛</div>
        <h1>{t('egovernmentPage.title')}</h1>
        <p className="service-page-intro">{t('egovernmentPage.intro')}</p>
      </header>

      <section className="service-page-section">
        <h2>{t('egovernmentPage.approach.title')}</h2>
        <p>{t('egovernmentPage.approach.text')}</p>
      </section>

      <section className="service-page-section">
        <h2>{t('egovernmentPage.caseStudies.title')}</h2>

        <div className="case-study">
          <h3>{t('egovernmentPage.caseStudies.myColorado.title')}</h3>
          <p>{t('egovernmentPage.caseStudies.myColorado.text')}</p>
          <ul className="case-study-stats">
            <li><strong>1.8M+</strong> {t('egovernmentPage.caseStudies.myColorado.stat1')}</li>
            <li><strong>25K → 250K</strong> {t('egovernmentPage.caseStudies.myColorado.stat2')}</li>
            <li><strong>19</strong> {t('egovernmentPage.caseStudies.myColorado.stat3')}</li>
          </ul>
        </div>

        <div className="case-study">
          <h3>{t('egovernmentPage.caseStudies.hawaii.title')}</h3>
          <p>{t('egovernmentPage.caseStudies.hawaii.text')}</p>
          <ul className="case-study-stats">
            <li><strong>43rd → 1st</strong> {t('egovernmentPage.caseStudies.hawaii.stat1')}</li>
            <li><strong>132+</strong> {t('egovernmentPage.caseStudies.hawaii.stat2')}</li>
            <li><strong>$2B+</strong> {t('egovernmentPage.caseStudies.hawaii.stat3')}</li>
            <li><strong>42</strong> {t('egovernmentPage.caseStudies.hawaii.stat4')}</li>
          </ul>
        </div>

        <div className="case-study">
          <h3>{t('egovernmentPage.caseStudies.ebench.title')}</h3>
          <p>{t('egovernmentPage.caseStudies.ebench.text')}</p>
        </div>
      </section>

      <section className="service-page-section">
        <h2>{t('egovernmentPage.serviceCatalog.title')}</h2>
        <p>{t('egovernmentPage.serviceCatalog.subtitle')}</p>
        <div className="services-grid" style={{ marginTop: '1.5rem' }}>
          {serviceCategories.map((cat) => (
            <div className="service-card-mini" key={cat.key}>
              <div className="service-icon">{cat.icon}</div>
              <h3>{t(`egovernmentPage.serviceCatalog.categories.${cat.key}.title`)}</h3>
              <p>{t(`egovernmentPage.serviceCatalog.categories.${cat.key}.desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="service-page-section">
        <h2>{t('egovernmentPage.awards.title')}</h2>
        <p>{t('egovernmentPage.awards.subtitle')}</p>
        <div className="awards-list">
          {awards.map((a) => (
            <div className="award-item" key={a.key}>
              <span className="award-year">{a.year}</span>
              <div>
                <strong>{t(`egovernmentPage.awards.items.${a.key}.name`)}</strong>
                <p>{t(`egovernmentPage.awards.items.${a.key}.desc`)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="service-page-section">
        <h2>{t('egovernmentPage.compliance.title')}</h2>
        <div className="compliance-badges">
          {['HIPAA', 'CJIS', 'SOC2', 'SOX', 'FERPA', 'DPPA'].map((c) => (
            <span className="compliance-badge" key={c}>{c}</span>
          ))}
        </div>
      </section>

      <section className="service-page-cta">
        <p>{t('egovernmentPage.cta')}</p>
        <a href="mailto:info@worldchain.org" className="service-page-cta-btn">info@worldchain.org</a>
      </section>
    </div>
  )
}
