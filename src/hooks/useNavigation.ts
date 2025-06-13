import { useState } from 'react';
import type { ViewType, StaticPageType } from '../types';

export const useNavigation = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedFeatureSlug, setSelectedFeatureSlug] = useState<string | null>(
    null
  );

  const navigateToHome = () => {
    setCurrentView('home');
    setSelectedFeatureSlug(null);
    window.scrollTo(0, 0);
  };

  const navigateToFeature = (slug: string) => {
    setSelectedFeatureSlug(slug);
    setCurrentView('featureDetail');
    window.scrollTo(0, 0);
  };

  const navigateToStaticPage = (page: StaticPageType) => {
    setCurrentView(page);
    setSelectedFeatureSlug(null);
    window.scrollTo(0, 0);
  };

  const scrollToSection = (target: string) => {
    if (currentView === 'home') {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigateToHome();
      setTimeout(() => {
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  };

  const handleLogoClick = () => {
    if (currentView !== 'home') {
      navigateToHome();
    } else if (window.scrollY === 0) {
      // Do nothing if already at top of home page
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return {
    currentView,
    selectedFeatureSlug,
    navigateToHome,
    navigateToFeature,
    navigateToStaticPage,
    scrollToSection,
    handleLogoClick,
  };
};
