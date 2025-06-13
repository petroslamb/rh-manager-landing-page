import React from 'react';
import type { LanguageStrings } from '../../types';
import styles from '../../styles/components/Header.module.css';
import buttonStyles from '../../styles/components/Button.module.css';

interface HeaderProps {
  T: LanguageStrings;
  currentLanguage: string;
  toggleLanguage: () => void;
  onLogoClick: () => void;
  onNavLinkClick: (target: string) => void;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  T,
  currentLanguage,
  toggleLanguage,
  onLogoClick,
  onNavLinkClick,
  isMobileMenuOpen,
  toggleMobileMenu,
}) => (
  <header className={styles.header} role="banner">
    <div className="container">
      <nav className={styles.nav}>
        <a
          onClick={onLogoClick}
          className={styles.logo}
          aria-label="RH Manager v2 Home"
        >
          {T.logo}
        </a>

        <div>
          <ul
            className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}
            id="main-nav-links"
          >
            <li className={styles.navLinkItem}>
              <a
                onClick={() => onNavLinkClick('#features')}
                className={styles.navLink}
              >
                {T.navFeatures}
              </a>
            </li>
            <li className={styles.navLinkItem}>
              <a
                onClick={() => onNavLinkClick('#pricing')}
                className={styles.navLink}
              >
                {T.navPricing}
              </a>
            </li>
            <li className={styles.navLinkItem}>
              <a
                href="#"
                className={`${buttonStyles.btn} ${buttonStyles.outline}`}
                style={{ padding: '8px 18px', fontSize: '0.9rem' }}
              >
                {T.navLogin}
              </a>
            </li>
            <li className={styles.navLinkItem}>
              <a
                href="#"
                className={`${buttonStyles.btn} ${buttonStyles.secondary}`}
                style={{ padding: '8px 18px', fontSize: '0.9rem' }}
              >
                {T.navSignUp}
              </a>
            </li>
            <li className={styles.navLinkItem}>
              <button
                onClick={toggleLanguage}
                className={styles.langButton}
                aria-label={
                  currentLanguage === 'el'
                    ? 'Switch to English'
                    : 'Switch to Greek'
                }
              >
                {T.langSwitch}
              </button>
            </li>
          </ul>

          <button
            className={styles.mobileToggle}
            aria-controls="main-nav-links"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Menu</span>
            <i
              className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}
              style={{ color: 'var(--primary-color)', fontSize: '1.5rem' }}
            ></i>
          </button>
        </div>
      </nav>
    </div>
  </header>
);
