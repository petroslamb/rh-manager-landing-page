export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
  longDescription: string;
  screenshots: string[];
  pageSlug: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  icon: string;
  features: string[];
  ctaText: string;
  popular: boolean;
}

export interface LanguageStrings {
  logo: string;
  navFeatures: string;
  navPricing: string;
  navLogin: string;
  navSignUp: string;
  langSwitch: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCTA: string;
  featuresTitle: string;
  featuresSubtitle: string;
  pricingTitle: string;
  pricingSubtitle: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
  footerCopyright: string;
  footerPrivacy: string;
  footerTerms: string;
  footerContact: string;
  featureItems: FeatureItem[];
  pricingPlans: PricingPlan[];
  featureDetailBackButton: string;
  screenshotsTitle: string;
  screenshotsComingSoon: string;
  popularBadgeText: string;
  privacyPolicyTitle: string;
  privacyPolicyContent: string;
  termsOfServiceTitle: string;
  termsOfServiceContent: string;
  contactUsTitle: string;
  contactUsContent: string;
  contactFormComingSoon: string;
}

export interface Translations {
  el: LanguageStrings;
  en: LanguageStrings;
}

export type Language = 'el' | 'en';
export type ViewType =
  | 'home'
  | 'featureDetail'
  | 'privacy'
  | 'terms'
  | 'contact';
export type StaticPageType = 'privacy' | 'terms' | 'contact';
