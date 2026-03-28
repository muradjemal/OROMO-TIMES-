import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Search, Menu, X, Globe } from 'lucide-react';
import { useLanguageStore } from '../../store/useLanguageStore';
import { useSearchStore } from '../../store/useSearchStore';
import { cn } from '../../lib/utils';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { currentLang, setLanguage } = useLanguageStore();
  const { toggleSearch } = useSearchStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.politics'), path: '/category/politics' },
    { name: t('nav.economy'), path: '/category/economy' },
    { name: t('nav.culture'), path: '/category/culture' },
    { name: t('nav.sports'), path: '/category/sports' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm border-gray-100' : 'bg-white py-5 border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Mobile Menu Trigger */}
        <button
          className="md:hidden p-2 -ml-2 text-gray-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-black tracking-tighter text-gray-900 uppercase">
            Oromo<span className="text-brand-red">Times</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium tracking-wide transition-colors hover:text-brand-red',
                location.pathname === link.path ? 'text-brand-red' : 'text-gray-900'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Utilities */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSearch}
            className="p-2 text-gray-900 hover:text-brand-red transition-colors"
            aria-label={t('common.search')}
          >
            <Search size={20} />
          </button>

          {/* Language Switcher */}
          <div className="flex items-center bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setLanguage('ao')}
              className={cn(
                'px-3 py-1 text-[10px] font-bold rounded-full transition-all',
                currentLang === 'ao' ? 'bg-brand-red text-white shadow-sm' : 'text-gray-500'
              )}
            >
              AO
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={cn(
                'px-3 py-1 text-[10px] font-bold rounded-full transition-all',
                currentLang === 'en' ? 'bg-brand-red text-white shadow-sm' : 'text-gray-500'
              )}
            >
              EN
            </button>
          </div>

          <button className="hidden md:block px-4 py-2 text-xs font-bold uppercase tracking-widest border border-gray-900 hover:bg-gray-900 hover:text-white transition-all">
            Login
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl p-6 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-lg font-bold text-gray-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-gray-100" />
            <button className="w-full py-4 text-center font-bold uppercase tracking-widest bg-gray-900 text-white">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
