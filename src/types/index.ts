export type Category = 'politics' | 'economy' | 'culture' | 'sports' | 'breaking';

export interface Author {
  name: string;
  avatar: string;
}

export interface ArticleContent {
  title: string;
  excerpt: string;
  body: string;
}

export interface Article {
  id: string;
  slug: string;
  category: Category;
  author: Author;
  publishedAt: string;
  image: string;
  readingTime: number;
  content: {
    ao: ArticleContent;
    en: ArticleContent;
  };
  isBreaking?: boolean;
}

export interface LanguageStore {
  currentLang: 'ao' | 'en';
  setLanguage: (lang: 'ao' | 'en') => void;
}

export interface SearchStore {
  isOpen: boolean;
  query: string;
  toggleSearch: () => void;
  setQuery: (query: string) => void;
}
