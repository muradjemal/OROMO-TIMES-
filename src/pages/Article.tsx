import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { 
  Facebook, 
  Twitter, 
  Send, 
  Clock, 
  Calendar, 
  Type, 
  Plus, 
  Minus, 
  RotateCcw,
  Settings2
} from 'lucide-react';
import { MOCK_ARTICLES } from '../services/mockData';
import { useLanguageStore } from '../store/useLanguageStore';
import ArticleCard from '../components/article/ArticleCard';

const Article: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const { currentLang } = useLanguageStore();

  const [fontSize, setFontSize] = useState(18); // Default 18px
  const [lineHeight, setLineHeight] = useState(1.8); // Default 1.8
  const [showSettings, setShowSettings] = useState(false);

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
  
  // Get related articles (same category first, then others)
  const categoryArticles = MOCK_ARTICLES.filter((a) => a.category === article.category);
  const currentIndex = categoryArticles.findIndex((a) => a.id === article.id);
  const prevArticle = currentIndex > 0 ? categoryArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < categoryArticles.length - 1 ? categoryArticles[currentIndex + 1] : null;

  const sameCategory = MOCK_ARTICLES.filter((a) => a.id !== article.id && a.category === article.category);
  const otherCategories = MOCK_ARTICLES.filter((a) => a.id !== article.id && a.category !== article.category);
  const relatedArticles = [...sameCategory, ...otherCategories].slice(0, 4);

  const adjustFontSize = (delta: number) => {
    setFontSize(prev => Math.min(Math.max(prev + delta, 14), 32));
  };

  const adjustLineHeight = (delta: number) => {
    setLineHeight(prev => Math.min(Math.max(prev + delta, 1.2), 2.5));
  };

  const resetSettings = () => {
    setFontSize(18);
    setLineHeight(1.8);
  };

  return (
    <article className="pb-24 relative">
      {/* Readability Settings Trigger (Desktop) */}
      <div className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-40">
        <div className="flex flex-col items-start space-y-4">
          <button 
            onClick={() => setShowSettings(!showSettings)}
            className={`group flex items-center space-x-3 p-3 rounded-full shadow-lg transition-all ${showSettings ? 'bg-brand-red text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
            title="Readability Settings"
          >
            <Settings2 size={20} />
            <span className={`text-[10px] font-black uppercase tracking-widest overflow-hidden transition-all duration-300 ${showSettings ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'}`}>
              {t('common.readability')}
            </span>
          </button>
          
          <AnimatePresence>
            {showSettings && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 w-64 space-y-6"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{t('common.fontSize')}</span>
                    <span className="text-xs font-bold text-gray-900">{fontSize}px</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => adjustFontSize(-2)} className="p-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"><Minus size={14} /></button>
                    <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-red transition-all" style={{ width: `${((fontSize - 14) / (32 - 14)) * 100}%` }} />
                    </div>
                    <button onClick={() => adjustFontSize(2)} className="p-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"><Plus size={14} /></button>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{t('common.lineHeight')}</span>
                    <span className="text-xs font-bold text-gray-900">{lineHeight.toFixed(1)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => adjustLineHeight(-0.1)} className="p-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"><Minus size={14} /></button>
                    <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-red transition-all" style={{ width: `${((lineHeight - 1.2) / (2.5 - 1.2)) * 100}%` }} />
                    </div>
                    <button onClick={() => adjustLineHeight(0.1)} className="p-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"><Plus size={14} /></button>
                  </div>
                </div>

                <button 
                  onClick={resetSettings}
                  className="w-full py-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-brand-red flex items-center justify-center space-x-2 transition-colors border-t border-gray-50 pt-4"
                >
                  <RotateCcw size={12} />
                  <span>{t('common.reset')}</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

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
        {/* Mobile Settings Trigger */}
        <div className="lg:hidden flex items-center justify-center mb-8">
          <button 
            onClick={() => setShowSettings(!showSettings)}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-500 hover:bg-gray-100 transition-colors"
          >
            <Type size={14} />
            <span>{t('common.readability')}</span>
          </button>
        </div>

        <AnimatePresence>
          {showSettings && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden mb-8 bg-gray-50 rounded-2xl p-6 space-y-6"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{t('common.fontSize')}</span>
                  <span className="text-xs font-bold text-gray-900">{fontSize}px</span>
                </div>
                <div className="flex items-center space-x-4">
                  <button onClick={() => adjustFontSize(-2)} className="p-3 bg-white rounded-xl shadow-sm"><Minus size={16} /></button>
                  <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-red" style={{ width: `${((fontSize - 14) / (32 - 14)) * 100}%` }} />
                  </div>
                  <button onClick={() => adjustFontSize(2)} className="p-3 bg-white rounded-xl shadow-sm"><Plus size={16} /></button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{t('common.lineHeight')}</span>
                  <span className="text-xs font-bold text-gray-900">{lineHeight.toFixed(1)}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <button onClick={() => adjustLineHeight(-0.1)} className="p-3 bg-white rounded-xl shadow-sm"><Minus size={16} /></button>
                  <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-red" style={{ width: `${((lineHeight - 1.2) / (2.5 - 1.2)) * 100}%` }} />
                  </div>
                  <button onClick={() => adjustLineHeight(0.1)} className="p-3 bg-white rounded-xl shadow-sm"><Plus size={16} /></button>
                </div>
              </div>

              <button 
                onClick={resetSettings}
                className="w-full py-3 text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center justify-center space-x-2"
              >
                <RotateCcw size={14} />
                <span>{t('common.reset')}</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <div 
          className="markdown-body font-serif text-gray-800 space-y-8"
          style={{ fontSize: `${fontSize}px`, lineHeight: lineHeight }}
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content.body}
          </ReactMarkdown>
        </div>

        {/* Tags / Footer */}
        <div className="mt-16 pt-12 border-t border-gray-100 flex flex-wrap gap-2">
          {['Oromia', 'News', article.category].map((tag) => (
            <span key={tag} className="px-4 py-2 bg-gray-50 text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:bg-gray-100 transition-colors cursor-pointer">
              #{tag}
            </span>
          ))}
        </div>

        {/* Prev/Next Navigation */}
        <div className="mt-16 py-12 border-y border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-8">
          {prevArticle ? (
            <Link 
              to={`/article/${prevArticle.slug}`}
              className="group flex flex-col items-start space-y-2 text-left"
            >
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-brand-red transition-colors">
                ← {t('common.previous')}
              </span>
              <span className="text-lg font-serif font-bold text-gray-900 group-hover:text-brand-red transition-colors line-clamp-2">
                {prevArticle.content[currentLang]?.title || prevArticle.content.ao.title || prevArticle.content.en.title}
              </span>
            </Link>
          ) : <div />}

          {nextArticle ? (
            <Link 
              to={`/article/${nextArticle.slug}`}
              className="group flex flex-col items-end space-y-2 text-right"
            >
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-brand-red transition-colors">
                {t('common.next')} →
              </span>
              <span className="text-lg font-serif font-bold text-gray-900 group-hover:text-brand-red transition-colors line-clamp-2">
                {nextArticle.content[currentLang]?.title || nextArticle.content.ao.title || nextArticle.content.en.title}
              </span>
            </Link>
          ) : <div />}
        </div>
      </div>

      {/* Related Articles */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mt-24 pt-24 border-t border-gray-100">
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-900">
            {t('common.relatedStories') || 'Related Stories'}
          </h3>
          <Link to={`/category/${article.category}`} className="text-[10px] font-black uppercase tracking-widest text-brand-red hover:underline">
            {t('common.viewAll') || 'View All'}
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </article>
  );
};

export default Article;
