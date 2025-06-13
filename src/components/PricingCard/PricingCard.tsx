import React from 'react';
import type { PricingPlan, LanguageStrings } from '../../types';
import styles from '../../styles/components/PricingCard.module.css';
import buttonStyles from '../../styles/components/Button.module.css';

interface PricingCardProps {
  plan: PricingPlan;
  index: number;
  T: LanguageStrings;
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan, index, T }) => (
  <div
    className={`${styles.pricingCard} ${plan.popular ? styles.popular : ''} fade-in-up`}
    style={{ animationDelay: `${0.1 * index}s` }}
  >
    <div>
      {plan.popular && (
        <div className={styles.popularBadge}>{T.popularBadgeText}</div>
      )}
      <i
        className={plan.icon}
        style={{
          fontSize: '3rem',
          color: 'var(--secondary-color)',
          marginBottom: '15px',
          marginTop: plan.popular ? '20px' : '0',
        }}
        aria-hidden="true"
      ></i>
      <h3 className={styles.name}>{plan.name}</h3>
      <p className={styles.price}>
        {plan.price}
        <span className={styles.period}>{plan.period}</span>
      </p>
      <ul className={styles.features}>
        {plan.features.map((featureText, fIndex) => (
          <li key={fIndex} className={styles.featureItem}>
            <i
              className="fas fa-check-circle"
              style={{
                color: 'var(--accent-color)',
                marginRight: '10px',
                fontSize: '1.1rem',
              }}
              aria-hidden="true"
            ></i>
            {featureText}
          </li>
        ))}
      </ul>
    </div>
    <a
      href="#"
      className={`${buttonStyles.btn} ${plan.popular ? buttonStyles.primary : buttonStyles.outline} ${styles.ctaButton}`}
    >
      {plan.ctaText}
    </a>
  </div>
);
