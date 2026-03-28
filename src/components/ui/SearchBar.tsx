import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, TrendingUp } from 'lucide-react';
import { useSearchStore } from '../../store/useSearchStore';
import { MOCK_ARTICLES } from '../../services/mockData';
import { useLanguageStore } from '../../store/useLanguageStore';
import { Link } from 'react-router-dom';

const SearchBar: React.FC = () => {
  const { t } = useTranslation();
  const { isOpen, toggleSearch, query, setQuery } = useSearchStore();
  const { currentLang } = useLanguageStore();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const filteredArticles = MOCK_ARTICLES.filter((article) => {
    const content = article.content[currentLang] || article.content.ao || article.content.en;
    return content.title.toLowerCase().includes(query.toLowerCase());
  }).slice(0, 5);

  const trendingTopics = [
    { name: t('nav.politics'), path: '/category/politics' },
    { name: t('nav.economy'), path: '/category/economy' },
    { name: t('nav.culture'), path: '/category/culture' },
    { name: t('nav.sports'), path: '/category/sports' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-xl flex flex-col items-center pt-24 px-4"
        >
          <button
            onClick={toggleSearch}
            className="absolute top-8 right-8 p-4 text-gray-900 hover:text-brand-red transition-colors"
          >
            <X size={32} />
          </button>

          <div className="w-full max-w-3xl space-y-12">
            <div className="relative group">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-red transition-colors" size={32} />
              <input
                ref={inputRef}
                type="text"
                placeholder={t('common.search')}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent border-b-2 border-gray-100 focus:border-brand-red outline-none py-6 pl-12 text-3xl font-serif font-bold text-gray-900 transition-all placeholder:text-gray-200"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Results */}
              <div className="space-y-6">
                <h4 className="text-xs font-black uppercase tracking-widest text-gray-400">{t('common.results')}</h4>
                {query.length > 0 ? (
                  <div className="space-y-4">
                    {filteredArticles.length > 0 ? (
                      filteredArticles.map((article) => (
                        <Link
                          key={article.id}
                          to={`/article/${article.slug}`}
                          onClick={toggleSearch}
                          className="group flex items-center space-x-4 p-4 hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-16 h-16 flex-shrink-0 overflow-hidden">
                            <img src={article.image} alt="" className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1">
                            <span className="block text-[9px] font-black uppercase tracking-widest text-brand-red mb-1">
                              {t(`nav.${article.category}`)}
                            </span>
                            <h5 className="text-sm font-bold text-gray-900 group-hover:text-brand-red transition-colors line-clamp-1">
                              {(article.content[currentLang] || article.content.ao || article.content.en).title}
                            </h5>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <p className="text-gray-400 text-sm italic">{t('common.noResults')}</p>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-3">
                    {trendingTopics.map((topic) => (
                      <Link
                        key={topic.path}
                        to={topic.path}
                        onClick={toggleSearch}
                        className="px-4 py-2 bg-gray-100 hover:bg-brand-red hover:text-white text-xs font-bold uppercase tracking-widest text-gray-600 transition-all rounded-full"
                      >
                        {topic.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Trending */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <TrendingUp size={16} className="text-brand-red" />
                  <h4 className="text-xs font-black uppercase tracking-widest text-gray-400">{t('common.trending')}</h4>
                </div>
                <div className="space-y-4">
                  {MOCK_ARTICLES.slice(0, 3).map((article, idx) => (
                    <Link
                      key={article.id}
                      to={`/article/${article.slug}`}
                      onClick={toggleSearch}
                      className="group flex items-start space-x-4"
                    >
                      <span className="text-2xl font-black text-gray-100 group-hover:text-brand-red transition-colors">0{idx + 1}</span>
                      <h5 className="text-sm font-bold text-gray-900 group-hover:text-brand-red transition-colors line-clamp-2">
                        {(article.content[currentLang] || article.content.ao || article.content.en).title}
                      </h5>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchBar;
