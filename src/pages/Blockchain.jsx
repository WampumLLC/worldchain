import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './ServicePage.css'

export default function Blockchain() {
  const { t } = useTranslation()

  return (
    <div className="service-page">
      <header className="service-page-header">
        <Link to="/" className="back-link">&larr; {t('servicePage.backHome')}</Link>
        <div className="service-page-icon">⛓</div>
        <h1>{t('blockchainPage.title')}</h1>
        <p className="service-page-intro">{t('blockchainPage.intro')}</p>
      </header>

      <section className="service-page-section">
        <h2>{t('blockchainPage.capabilities.title')}</h2>
        <ul className="capability-list">
          <li>{t('blockchainPage.capabilities.item1')}</li>
          <li>{t('blockchainPage.capabilities.item2')}</li>
          <li>{t('blockchainPage.capabilities.item3')}</li>
          <li>{t('blockchainPage.capabilities.item4')}</li>
          <li>{t('blockchainPage.capabilities.item5')}</li>
        </ul>
      </section>

      <section className="service-page-section">
        <h2>{t('blockchainPage.experience.title')}</h2>

        <div className="case-study">
          <h3>{t('blockchainPage.experience.ethdenver.title')}</h3>
          <p>{t('blockchainPage.experience.ethdenver.text')}</p>
          <ul className="case-study-stats">
            <li><strong>20,000+</strong> {t('blockchainPage.experience.ethdenver.stat1')}</li>
            <li><strong>115</strong> {t('blockchainPage.experience.ethdenver.stat2')}</li>
          </ul>
        </div>

        <div className="case-study">
          <h3>{t('blockchainPage.experience.bufficorn.title')}</h3>
          <p>{t('blockchainPage.experience.bufficorn.text')}</p>
        </div>

        <div className="case-study">
          <h3>{t('blockchainPage.experience.unicorns.title')}</h3>
          <p>{t('blockchainPage.experience.unicorns.text')}</p>
          <ul className="case-study-stats">
            <li><strong>170+</strong> {t('blockchainPage.experience.unicorns.stat1')}</li>
            <li><strong>30K+</strong> {t('blockchainPage.experience.unicorns.stat2')}</li>
          </ul>
        </div>

        <div className="case-study">
          <h3>{t('blockchainPage.experience.sporkdao.title')}</h3>
          <p>{t('blockchainPage.experience.sporkdao.text')}</p>
        </div>
      </section>

      <section className="service-page-section">
        <h2>{t('blockchainPage.technical.title')}</h2>
        <div className="compliance-badges">
          {['Solidity', 'ERC-721', 'ERC-1155', 'Snapshot', 'Web3', 'DAO Governance'].map((c) => (
            <span className="compliance-badge" key={c}>{c}</span>
          ))}
        </div>
      </section>

      <section className="service-page-cta">
        <p>{t('blockchainPage.cta')}</p>
        <a href="mailto:info@worldchain.org" className="service-page-cta-btn">info@worldchain.org</a>
      </section>
    </div>
  )
}
