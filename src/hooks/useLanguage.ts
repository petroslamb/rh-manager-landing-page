import { useState } from 'react';
import type { Language } from '../types';
import { translations } from '../data/translations';

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('el');

  const toggleLanguage = () => {
    setCurrentLanguage(prevLang => (prevLang === 'el' ? 'en' : 'el'));
  };

  const T = translations[currentLanguage];

  return {
    currentLanguage,
    toggleLanguage,
    T,
  };
};
