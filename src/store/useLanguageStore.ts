import { create } from 'zustand';
import i18n from '../i18n';
import { LanguageStore } from '../types';

const getInitialLang = (): 'ao' | 'en' => {
  const stored = localStorage.getItem('i18nextLng');
  if (stored?.startsWith('en')) return 'en';
  if (stored?.startsWith('ao')) return 'ao';
  return 'ao';
};

export const useLanguageStore = create<LanguageStore>((set) => ({
  currentLang: getInitialLang(),
  setLanguage: (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('i18nextLng', lang);
    set({ currentLang: lang });
  },
}));
