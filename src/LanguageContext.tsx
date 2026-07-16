/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Course, Testimonial, FAQItem, Activity } from './types';
import { 
  DICTIONARY, 
  COURSES_EN, COURSES_UR, 
  TESTIMONIALS_EN, TESTIMONIALS_UR,
  FAQS_EN, FAQS_UR,
  ACTIVITIES_EN, ACTIVITIES_UR 
} from './locales';

export type Language = 'en' | 'ur';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof DICTIONARY['en']) => string;
  courses: Course[];
  testimonials: Testimonial[];
  faqs: FAQItem[];
  activities: Activity[];
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('tafheem_academy_lang');
    return (saved === 'ur' || saved === 'en') ? saved : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('tafheem_academy_lang', lang);
  };

  // Dynamically set RTL or LTR document direction
  useEffect(() => {
    if (language === 'ur') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ur';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
    }
  }, [language]);

  const t = (key: keyof typeof DICTIONARY['en']): string => {
    const translationDict = DICTIONARY[language] || DICTIONARY['en'];
    return translationDict[key] || DICTIONARY['en'][key] || key;
  };

  const courses = language === 'ur' ? COURSES_UR : COURSES_EN;
  const testimonials = language === 'ur' ? TESTIMONIALS_UR : TESTIMONIALS_EN;
  const faqs = language === 'ur' ? FAQS_UR : FAQS_EN;
  const activities = language === 'ur' ? ACTIVITIES_UR : ACTIVITIES_EN;

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      t,
      courses,
      testimonials,
      faqs,
      activities
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
