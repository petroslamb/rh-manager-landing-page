import React from 'react';
import type { LanguageStrings, StaticPageType } from '../../types';
import styles from '../../styles/components/Layout.module.css';

interface FooterProps {
  T: LanguageStrings;
  onFooterLinkClick: (page: StaticPageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ T, onFooterLinkClick }) => (
  <footer className={styles.footer} role="contentinfo">
    <div className="container">
      <p>{T.footerCopyright}</p>
      <ul className={styles.footerLinks}>
        <li>
          <a
            onClick={() => onFooterLinkClick('privacy')}
            className={styles.footerLink}
          >
            {T.footerPrivacy}
          </a>
        </li>
        <li>
          <a
            onClick={() => onFooterLinkClick('terms')}
            className={styles.footerLink}
          >
            {T.footerTerms}
          </a>
        </li>
        <li>
          <a
            onClick={() => onFooterLinkClick('contact')}
            className={styles.footerLink}
          >
            {T.footerContact}
          </a>
        </li>
      </ul>
    </div>
  </footer>
);
