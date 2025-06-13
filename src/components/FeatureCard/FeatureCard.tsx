import React from 'react';
import type { FeatureItem } from '../../types';
import styles from '../../styles/components/FeatureCard.module.css';

interface FeatureCardProps {
  feature: FeatureItem;
  index: number;
  onClick: (feature: FeatureItem) => void;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  feature,
  index,
  onClick,
}) => (
  <div
    className={`${styles.featureCard} fade-in-up`}
    style={{ animationDelay: `${0.1 * index}s` }}
    onClick={() => onClick(feature)}
    role="button"
    tabIndex={0}
    onKeyPress={e => e.key === 'Enter' && onClick(feature)}
    aria-label={`Learn more about ${feature.title}`}
  >
    <div className={styles.iconContainer}>
      <i
        className={feature.icon}
        style={{
          fontSize: '2rem',
          color: 'var(--primary-color)',
          marginRight: '15px',
          width: '40px',
          textAlign: 'center',
        }}
        aria-hidden="true"
      ></i>
      <h3 className={styles.title}>{feature.title}</h3>
    </div>
    <p className={styles.description}>{feature.description}</p>
  </div>
);
