import React from 'react';
import type { FeatureItem, LanguageStrings } from '../../types';
import buttonStyles from '../../styles/components/Button.module.css';

interface FeatureDetailProps {
  feature: FeatureItem;
  onBack: () => void;
  T: LanguageStrings;
}

const styles = {
  section: {
    padding: '60px 0',
    backgroundColor: 'var(--bg-light)',
    minHeight: 'calc(100vh - 70px - 130px)',
  },
  backButton: {
    marginBottom: '30px',
    fontSize: '1rem',
    display: 'inline-flex',
    alignItems: 'center',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '30px',
    borderBottom: '1px solid #e5e7eb',
    paddingBottom: '20px',
  },
  icon: {
    fontSize: '2.5rem',
    color: 'var(--primary-color)',
    marginRight: '20px',
  },
  title: {
    fontSize: '2.5rem',
    color: 'var(--text-dark)',
    fontWeight: 700,
  },
  description: {
    fontSize: '1.1rem',
    color: 'var(--text-medium)',
    lineHeight: 1.8,
    marginBottom: '40px',
    whiteSpace: 'pre-line' as const,
  },
  screenshotsTitle: {
    fontSize: '1.8rem',
    color: 'var(--text-dark)',
    marginBottom: '20px',
    borderTop: '1px solid #e5e7eb',
    paddingTop: '30px',
  },
  screenshotsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  screenshotImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    border: '1px solid #ddd',
  },
};

export const FeatureDetail: React.FC<FeatureDetailProps> = ({
  feature,
  onBack,
  T,
}) => (
  <section
    style={styles.section}
    aria-labelledby={`feature-title-${feature.pageSlug}`}
  >
    <div className="container">
      <button
        onClick={onBack}
        style={styles.backButton}
        className={`${buttonStyles.btn} ${buttonStyles.outline}`}
      >
        &larr; {T.featureDetailBackButton}
      </button>
      <div style={styles.header}>
        <i className={feature.icon} style={styles.icon} aria-hidden="true"></i>
        <h1 id={`feature-title-${feature.pageSlug}`} style={styles.title}>
          {feature.title}
        </h1>
      </div>
      <p style={styles.description}>{feature.longDescription}</p>

      <h2 style={styles.screenshotsTitle}>{T.screenshotsTitle}</h2>
      {feature.screenshots && feature.screenshots.length > 0 ? (
        <div style={styles.screenshotsGrid}>
          {feature.screenshots.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`${feature.title} screenshot ${idx + 1}`}
              style={styles.screenshotImage}
              loading="lazy"
            />
          ))}
        </div>
      ) : (
        <p>{T.screenshotsComingSoon}</p>
      )}
    </div>
  </section>
);
