import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Send, Clock, User, Calendar } from 'lucide-react';
import { MOCK_ARTICLES } from '../services/mockData';
import { useLanguageStore } from '../store/useLanguageStore';
import ArticleCard from '../components/article/ArticleCard';

const Article: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const { currentLang } = useLanguageStore();

  const article = MOCK_ARTICLES.find((a) => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <h2 className="text-2xl font-serif font-bold text-gray-900">Article Not Found</h2>
      </div>
    );
  }

  const content = article.content[currentLang] || article.content.ao || article.content.en;
  const relatedArticles = MOCK_ARTICLES.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <article className="pb-24">
      {/* Header */}
      <header className="max-w-4xl mx-auto px-4 md:px-8 pt-12 md:pt-24 space-y-8">
        <div className="space-y-4 text-center">
          <span className="inline-block px-3 py-1 bg-gray-100 text-[10px] font-black uppercase tracking-[0.2em] text-brand-red">
            {t(`nav.${article.category}`)}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight text-gray-900">
            {content.title}
          </h1>
          <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
            {content.excerpt}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between py-8 border-y border-gray-100 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <img src={article.author.avatar} alt={article.author.name} className="w-12 h-12 rounded-full" />
            <div className="text-left">
              <span className="block text-xs font-black uppercase tracking-widest text-gray-900">{article.author.name}</span>
              <div className="flex items-center space-x-3 text-[10px] text-gray-400 uppercase tracking-widest mt-1">
                <span className="flex items-center"><Calendar size={12} className="mr-1" /> {new Date(article.publishedAt).toLocaleDateString()}</span>
                <span className="flex items-center"><Clock size={12} className="mr-1" /> {article.readingTime} {t('common.readingTime')}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mr-2">{t('common.share')}</span>
            <button className="p-2 text-gray-400 hover:text-brand-red transition-colors"><Facebook size={18} /></button>
            <button className="p-2 text-gray-400 hover:text-brand-red transition-colors"><Twitter size={18} /></button>
            <button className="p-2 text-gray-400 hover:text-brand-red transition-colors"><Send size={18} /></button>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 my-12">
        <div className="aspect-[21/9] overflow-hidden">
          <img src={article.image} alt={content.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-4 text-center">
          Image Credit: Oromo Times Archive / {article.author.name}
        </p>
      </div>

      {/* Content Body */}
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div
          className="prose prose-lg max-w-none font-serif text-gray-800 leading-[1.8] space-y-8"
          dangerouslySetInnerHTML={{ __html: content.body }}
        />

        {/* Tags / Footer */}
        <div className="mt-16 pt-12 border-t border-gray-100 flex flex-wrap gap-2">
          {['Oromia', 'News', article.category].map((tag) => (
            <span key={tag} className="px-4 py-2 bg-gray-50 text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:bg-gray-100 transition-colors cursor-pointer">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Related Articles */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mt-24 pt-24 border-t border-gray-100">
        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-900 mb-12">Related Stories</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </article>
  );
};

export default Article;
