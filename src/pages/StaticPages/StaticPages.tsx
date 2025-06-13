import React from 'react';
import type { LanguageStrings } from '../../types';

interface StaticPageProps {
  T: LanguageStrings;
}

const styles = {
  section: {
    padding: '60px 0',
    backgroundColor: 'var(--bg-light)',
    minHeight: 'calc(100vh - 70px - 130px)',
  },
  title: {
    fontSize: '2.5rem',
    color: 'var(--text-dark)',
    fontWeight: 700,
    marginBottom: '30px',
    borderBottom: '1px solid #e5e7eb',
    paddingBottom: '20px',
  },
  content: {
    fontSize: '1rem',
    color: 'var(--text-medium)',
    lineHeight: 1.8,
  },
};

export const PrivacyPolicyPage: React.FC<StaticPageProps> = ({ T }) => (
  <section style={styles.section} aria-labelledby="privacy-policy-title">
    <div className="container">
      <h1 id="privacy-policy-title" style={styles.title}>
        {T.privacyPolicyTitle}
      </h1>
      <div
        style={styles.content}
        dangerouslySetInnerHTML={{ __html: T.privacyPolicyContent }}
      />
    </div>
  </section>
);

export const TermsOfServicePage: React.FC<StaticPageProps> = ({ T }) => (
  <section style={styles.section} aria-labelledby="terms-of-service-title">
    <div className="container">
      <h1 id="terms-of-service-title" style={styles.title}>
        {T.termsOfServiceTitle}
      </h1>
      <div
        style={styles.content}
        dangerouslySetInnerHTML={{ __html: T.termsOfServiceContent }}
      />
    </div>
  </section>
);

export const ContactPage: React.FC<StaticPageProps> = ({ T }) => (
  <section style={styles.section} aria-labelledby="contact-us-title">
    <div className="container">
      <h1 id="contact-us-title" style={styles.title}>
        {T.contactUsTitle}
      </h1>
      <div
        style={styles.content}
        dangerouslySetInnerHTML={{ __html: T.contactUsContent }}
      />
      <div style={{ ...styles.content, marginTop: '30px' }}>
        <h3>{T.contactFormComingSoon}</h3>
      </div>
    </div>
  </section>
);
