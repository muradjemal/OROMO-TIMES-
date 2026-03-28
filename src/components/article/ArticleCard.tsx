import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Article } from '../../types';
import { useLanguageStore } from '../../store/useLanguageStore';
import { cn } from '../../lib/utils';

interface ArticleCardProps {
  article: Article;
  variant?: 'hero' | 'standard' | 'list';
  className?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, variant = 'standard', className }) => {
  const { t } = useTranslation();
  const { currentLang } = useLanguageStore();
  const content = article.content[currentLang] || article.content.ao || article.content.en;

  if (variant === 'hero') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={cn("group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center", className)}
      >
        <Link to={`/article/${article.slug}`} className="lg:col-span-8 overflow-hidden relative aspect-[16/9]">
          <img
            src={article.image}
            alt={content.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          {article.isBreaking && (
            <div className="absolute top-4 left-4 bg-brand-red text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1">
              {t('nav.breaking')}
            </div>
          )}
        </Link>
        <div className="lg:col-span-4 space-y-4">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-red">
            {t(`nav.${article.category}`)}
          </span>
          <Link to={`/article/${article.slug}`}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight text-gray-900 group-hover:text-brand-red transition-colors">
              {content.title}
            </h2>
          </Link>
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
            {content.excerpt}
          </p>
          <div className="flex items-center space-x-3 pt-2">
            <img src={article.author.avatar} alt={article.author.name} className="w-8 h-8 rounded-full" />
            <div className="text-[10px] uppercase tracking-widest">
              <span className="text-gray-900 font-bold">{article.author.name}</span>
              <span className="text-gray-400 mx-2">•</span>
              <span className="text-gray-400">{new Date(article.publishedAt).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  if (variant === 'list') {
    return (
      <Link
        to={`/article/${article.slug}`}
        className={cn("group flex items-start space-x-4 py-4 border-b border-gray-50 last:border-0", className)}
      >
        <div className="flex-1 space-y-2">
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-red">
            {t(`nav.${article.category}`)}
          </span>
          <h4 className="text-sm font-bold leading-snug text-gray-900 group-hover:text-brand-red transition-colors line-clamp-2">
            {content.title}
          </h4>
          <span className="block text-[9px] text-gray-400 uppercase tracking-widest">
            {new Date(article.publishedAt).toLocaleDateString()}
          </span>
        </div>
        <div className="w-20 h-20 flex-shrink-0 overflow-hidden">
          <img
            src={article.image}
            alt={content.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        </div>
      </Link>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("group space-y-4", className)}
    >
      <Link to={`/article/${article.slug}`} className="block overflow-hidden aspect-[4/3] relative">
        <img
          src={article.image}
          alt={content.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
      </Link>
      <div className="space-y-2">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-red">
          {t(`nav.${article.category}`)}
        </span>
        <Link to={`/article/${article.slug}`}>
          <h3 className="text-xl font-serif font-bold leading-tight text-gray-900 group-hover:text-brand-red transition-colors line-clamp-2">
            {content.title}
          </h3>
        </Link>
        <div className="flex items-center justify-between pt-2">
          <span className="text-[10px] text-gray-400 uppercase tracking-widest">
            {new Date(article.publishedAt).toLocaleDateString()}
          </span>
          <span className="text-[10px] text-gray-400 uppercase tracking-widest">
            {article.readingTime} {t('common.readingTime')}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ArticleCard;
