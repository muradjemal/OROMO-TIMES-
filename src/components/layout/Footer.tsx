import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Facebook, Twitter, Instagram, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const sections = [
    { name: t('nav.politics'), path: '/category/politics' },
    { name: t('nav.economy'), path: '/category/economy' },
    { name: t('nav.culture'), path: '/category/culture' },
    { name: t('nav.sports'), path: '/category/sports' },
  ];

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-black tracking-tighter text-gray-900 uppercase">
                Oromo<span className="text-brand-red">Times</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              {t('footer.mission')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-red transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-red transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-red transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-red transition-colors"><Send size={20} /></a>
            </div>
          </div>

          {/* Sections */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-gray-900 mb-6">{t('footer.sections')}</h4>
            <ul className="space-y-4">
              {sections.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-gray-500 hover:text-brand-red transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-gray-900 mb-6">{t('footer.about')}</h4>
            <ul className="space-y-4">
              <li><Link to="#" className="text-sm text-gray-500 hover:text-brand-red transition-colors">Our Story</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-brand-red transition-colors">Editorial Team</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-brand-red transition-colors">Careers</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-brand-red transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-gray-900 mb-6">{t('footer.legal')}</h4>
            <ul className="space-y-4">
              <li><Link to="#" className="text-sm text-gray-500 hover:text-brand-red transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-brand-red transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-brand-red transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-4 md:mb-0">
            © 2026 Oromo Times. All rights reserved. Built for Oromia.
          </p>
          <div className="flex space-x-6">
            <span className="text-[10px] text-gray-400 uppercase tracking-widest">Afaan Oromo</span>
            <span className="text-[10px] text-gray-400 uppercase tracking-widest">English</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
