import React from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { HomePage } from './pages/HomePage/HomePage';
import { FeatureDetail } from './pages/FeatureDetail/FeatureDetail';
import {
  PrivacyPolicyPage,
  TermsOfServicePage,
  ContactPage,
} from './pages/StaticPages/StaticPages';
import { useLanguage } from './hooks/useLanguage';
import { useNavigation } from './hooks/useNavigation';
import { useMobileMenu } from './hooks/useMobileMenu';
import type { FeatureItem, StaticPageType } from './types';
import './styles/globals.css';

const App: React.FC = () => {
  const { currentLanguage, toggleLanguage, T } = useLanguage();
  const {
    currentView,
    selectedFeatureSlug,
    navigateToHome,
    navigateToFeature,
    navigateToStaticPage,
    scrollToSection,
    handleLogoClick,
  } = useNavigation();
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } =
    useMobileMenu();

  const handleFeatureClick = (feature: FeatureItem) => {
    navigateToFeature(feature.pageSlug);
    closeMobileMenu();
  };

  const handleNavLinkClick = (target: string) => {
    closeMobileMenu();
    scrollToSection(target);
  };

  const handleFooterLinkClick = (page: StaticPageType) => {
    navigateToStaticPage(page);
    closeMobileMenu();
  };

  const handleLanguageToggle = () => {
    toggleLanguage();
    closeMobileMenu();
  };

  const handleLogoClickWithMenu = () => {
    handleLogoClick();
    closeMobileMenu();
  };

  const featureToDisplay = selectedFeatureSlug
    ? T.featureItems.find(f => f.pageSlug === selectedFeatureSlug)
    : null;

  const renderView = () => {
    switch (currentView) {
      case 'featureDetail':
        return featureToDisplay ? (
          <FeatureDetail
            feature={featureToDisplay}
            onBack={navigateToHome}
            T={T}
          />
        ) : null;
      case 'privacy':
        return <PrivacyPolicyPage T={T} />;
      case 'terms':
        return <TermsOfServicePage T={T} />;
      case 'contact':
        return <ContactPage T={T} />;
      case 'home':
      default:
        return (
          <HomePage
            T={T}
            onFeatureClick={handleFeatureClick}
            onNavLinkClick={handleNavLinkClick}
          />
        );
    }
  };

  return (
    <>
      <Header
        T={T}
        currentLanguage={currentLanguage}
        toggleLanguage={handleLanguageToggle}
        onLogoClick={handleLogoClickWithMenu}
        onNavLinkClick={handleNavLinkClick}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />

      {renderView()}

      <Footer T={T} onFooterLinkClick={handleFooterLinkClick} />
    </>
  );
};

export default App;
