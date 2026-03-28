import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  ao: {
    translation: {
      nav: {
        home: 'Mana',
        politics: 'Siyaasa',
        economy: 'Diinagdee',
        culture: 'Aadaa',
        sports: 'Ispoortii',
        breaking: 'Oduu Hatattamaa',
      },
      common: {
        readMore: 'Dubbisi',
        loadMore: 'Dabalata',
        search: 'Barbaadi',
        latest: 'Oduu Haarawa',
        popular: 'Beekamaa',
        readingTime: 'daqiiqaa dubbisaa',
        by: 'Kan qopheesse',
        share: 'Qoodi',
        trending: 'Kan Ammaa',
        results: 'Bu’aa',
        noResults: 'Bu’aan hin argamne',
      },
      footer: {
        about: 'Waa’ee Keenya',
        sections: 'Kutaalee',
        legal: 'Seera',
        mission: 'Oromo Times tajaajila oduu qulqulluu fi bilinguallii Oromiyaa keessatti dhiyeessuudhaaf kan qophaaye dha.',
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        politics: 'Politics',
        economy: 'Economy',
        culture: 'Culture',
        sports: 'Sports',
        breaking: 'Breaking News',
      },
      common: {
        readMore: 'Read More',
        loadMore: 'Load More',
        search: 'Search',
        latest: 'Latest News',
        popular: 'Popular',
        readingTime: 'min read',
        by: 'By',
        share: 'Share',
        trending: 'Trending',
        results: 'Results',
        noResults: 'No results found',
      },
      footer: {
        about: 'About Us',
        sections: 'Sections',
        legal: 'Legal',
        mission: 'Oromo Times is dedicated to providing high-quality, bilingual news services in Oromia.',
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ao',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
