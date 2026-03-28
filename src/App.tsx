import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SearchBar from './components/ui/SearchBar';
import Home from './pages/Home';
import Article from './pages/Article';
import Category from './pages/Category';
import './i18n';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-brand-red selection:text-white">
        <Navbar />
        <SearchBar />
        
        <main className="pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article/:slug" element={<Article />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/search" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
