import React from 'react';
import { useTranslation } from 'react-i18next';
import { MOCK_ARTICLES } from '../services/mockData';
import ArticleCard from '../components/article/ArticleCard';
import { motion } from 'motion/react';

import { useLanguageStore } from '../store/useLanguageStore';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const { currentLang } = useLanguageStore();
  const heroArticle = MOCK_ARTICLES.find(a => a.isBreaking) || MOCK_ARTICLES[0];
  const latestArticles = MOCK_ARTICLES.filter(a => a.id !== heroArticle.id);

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ArticleCard article={heroArticle} variant="hero" className="py-12 border-b border-gray-100" />
        </div>
      </section>

      {/* Latest News Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between mb-12 border-b border-gray-900 pb-4">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-900">
            {t('common.latest')}
          </h2>
          <div className="flex space-x-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 cursor-pointer hover:text-brand-red transition-colors">
              {t('common.popular')}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {latestArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* Category Spotlight: Politics */}
      <section className="bg-gray-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between mb-12 border-b border-white/20 pb-4">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-white">
              {t('nav.politics')}
            </h2>
            <button className="text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors">
              {t('common.readMore')} →
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <ArticleCard
                article={MOCK_ARTICLES.find(a => a.category === 'politics') || MOCK_ARTICLES[0]}
                className="text-white"
              />
            </div>
            <div className="lg:col-span-5 space-y-8">
              {MOCK_ARTICLES.slice(0, 3).map((article) => (
                <div key={article.id} className="group flex items-start space-x-4 border-b border-white/10 pb-6 last:border-0">
                   <div className="flex-1 space-y-2">
                    <h4 className="text-lg font-serif font-bold leading-snug group-hover:text-brand-red transition-colors">
                      {(article.content[currentLang] || article.content.ao || article.content.en).title}
                    </h4>
                    <span className="block text-[9px] text-white/40 uppercase tracking-widest">
                      {new Date(article.publishedAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Load More */}
      <div className="flex justify-center">
        <button className="px-12 py-4 border-2 border-gray-900 text-xs font-black uppercase tracking-[0.3em] hover:bg-gray-900 hover:text-white transition-all">
          {t('common.loadMore')}
        </button>
      </div>
    </div>
  );
};

export default Home;
