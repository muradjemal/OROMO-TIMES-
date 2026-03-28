import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MOCK_ARTICLES } from '../services/mockData';
import ArticleCard from '../components/article/ArticleCard';
import { Category as CategoryType } from '../types';

const Category: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const categoryArticles = MOCK_ARTICLES.filter((a) => a.category === id);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-12">
      <header className="border-b border-gray-900 pb-8">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 capitalize">
          {t(`nav.${id as CategoryType}`)}
        </h1>
        <p className="text-gray-500 mt-4 max-w-2xl">
          Latest updates and in-depth coverage of {id} in Oromia and beyond.
        </p>
      </header>

      {categoryArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {categoryArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="py-24 text-center">
          <p className="text-gray-400 italic">No articles found in this category yet.</p>
        </div>
      )}
    </div>
  );
};

export default Category;
