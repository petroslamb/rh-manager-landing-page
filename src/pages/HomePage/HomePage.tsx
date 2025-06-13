import React from 'react';
import type { LanguageStrings, FeatureItem } from '../../types';
import { FeatureCard } from '../../components/FeatureCard/FeatureCard';
import { PricingCard } from '../../components/PricingCard/PricingCard';
import styles from '../../styles/components/Layout.module.css';
import featureStyles from '../../styles/components/FeatureCard.module.css';
import pricingStyles from '../../styles/components/PricingCard.module.css';
import buttonStyles from '../../styles/components/Button.module.css';

interface HomePageProps {
  T: LanguageStrings;
  onFeatureClick: (feature: FeatureItem) => void;
  onNavLinkClick: (target: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  T,
  onFeatureClick,
  onNavLinkClick,
}) => (
  <>
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className="container">
        <h1 id="hero-title" className={`${styles.heroTitle} fade-in-up`}>
          {T.heroTitle}
        </h1>
        <p
          className={`${styles.heroSubtitle} fade-in-up`}
          style={{ animationDelay: '0.2s' }}
        >
          {T.heroSubtitle}
        </p>
        <a
          onClick={() => onNavLinkClick('#pricing')}
          className={`${buttonStyles.btn} ${buttonStyles.primary} ${buttonStyles.large} fade-in-up`}
          style={{ animationDelay: '0.4s', cursor: 'pointer' }}
        >
          {T.heroCTA}
        </a>
      </div>
    </section>

    <section
      id="features"
      className={featureStyles.featuresSection}
      aria-labelledby="features-title"
    >
      <div className="container text-center">
        <h2 id="features-title">{T.featuresTitle}</h2>
        <p className="section-subtitle">{T.featuresSubtitle}</p>
        <div className={featureStyles.featuresGrid}>
          {T.featureItems.map((feature, index) => (
            <FeatureCard
              key={feature.pageSlug}
              feature={feature}
              index={index}
              onClick={onFeatureClick}
            />
          ))}
        </div>
      </div>
    </section>

    <section
      id="pricing"
      className={pricingStyles.pricingSection}
      aria-labelledby="pricing-title"
    >
      <div className="container text-center">
        <h2 id="pricing-title">{T.pricingTitle}</h2>
        <p className="section-subtitle">{T.pricingSubtitle}</p>
        <div className={pricingStyles.pricingGrid}>
          {T.pricingPlans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} T={T} />
          ))}
        </div>
      </div>
    </section>

    <section className={styles.ctaSection} aria-labelledby="cta-title">
      <div className="container">
        <h2 id="cta-title" className={styles.ctaTitle}>
          {T.ctaTitle}
        </h2>
        <p className={styles.ctaSubtitle}>{T.ctaSubtitle}</p>
        <a
          href="#"
          className={`${buttonStyles.btn} ${buttonStyles.secondary} ${buttonStyles.large}`}
          style={{
            backgroundColor: 'var(--bg-light)',
            color: 'var(--primary-color)',
          }}
        >
          {T.ctaButton}
        </a>
      </div>
    </section>
  </>
);
