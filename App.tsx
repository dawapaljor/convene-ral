import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';
import FeaturesPage from './pages/FeaturesPage';
import HowItWorks from './pages/HowItWorks';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Security from './pages/Security';
import { DemoModal } from './components/DemoModal';

export type Page = 'home' | 'about' | 'pricing' | 'faq' | 'features' | 'how-it-works' | 'privacy' | 'terms' | 'security';

const PAGE_TO_PATH: Record<Page, string> = {
  home: '/',
  about: '/about',
  pricing: '/pricing',
  faq: '/faq',
  features: '/features',
  'how-it-works': '/how-it-works',
  privacy: '/privacy',
  terms: '/terms',
  security: '/security',
};

const PATH_TO_PAGE: Record<string, Page> = Object.entries(PAGE_TO_PATH).reduce(
  (acc, [page, path]) => ({ ...acc, [path]: page as Page }),
  {}
);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(() => {
    const path = window.location.pathname;
    return PATH_TO_PAGE[path] || 'home';
  });
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  // Handle back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      setCurrentPage(PATH_TO_PAGE[path] || 'home');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavigate = (page: Page) => {
    const path = PAGE_TO_PATH[page];
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path);
    }
    setCurrentPage(page);
  };

  const handleRequestDemo = () => {
    setIsDemoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-100 selection:text-brand-900">
      <Navbar onNavigate={handleNavigate} onRequestDemo={handleRequestDemo} />
      <main>
        {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
        {currentPage === 'about' && <About />}
        {currentPage === 'pricing' && <Pricing />}
        {currentPage === 'faq' && <FAQ />}
        {currentPage === 'features' && <FeaturesPage />}
        {currentPage === 'how-it-works' && <HowItWorks />}
        {currentPage === 'privacy' && <PrivacyPolicy />}
        {currentPage === 'terms' && <TermsOfService />}
        {currentPage === 'security' && <Security />}
      </main>
      <Footer onNavigate={handleNavigate} onRequestDemo={handleRequestDemo} />
      
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
};

export default App;