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
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
import { DemoModal } from './components/DemoModal';
import { ContactModal } from './components/ContactModal';

export type Page = 'home' | 'about' | 'pricing' | 'faq' | 'features' | 'how-it-works' | 'privacy' | 'terms' | 'security' | 'signup' | 'not-found';

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
  signup: '/signup',
  'not-found': '/404',
};

const PATH_TO_PAGE: Record<string, Page> = Object.entries(PAGE_TO_PATH).reduce(
  (acc, [page, path]) => ({ ...acc, [path]: page as Page }),
  {}
);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(() => {
    const path = window.location.pathname;
    return PATH_TO_PAGE[path] || 'not-found';
  });
  const [selectedPlan, setSelectedPlan] = useState<string>('free');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Handle back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      setCurrentPage(PATH_TO_PAGE[path] || 'not-found');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavigate = (page: Page, plan?: string) => {
    const path = PAGE_TO_PATH[page];
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path);
    }
    if (plan) setSelectedPlan(plan);
    setCurrentPage(page);
  };

  const handleRequestDemo = () => {
    setIsDemoModalOpen(true);
  };

  const handleContactUs = () => {
    setIsContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-100 selection:text-brand-900">
      <Navbar onNavigate={handleNavigate} onRequestDemo={handleRequestDemo} />
      <main>
        {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
        {currentPage === 'about' && <About />}
        {currentPage === 'pricing' && <Pricing onNavigate={handleNavigate} onContactUs={handleContactUs} />}
        {currentPage === 'faq' && <FAQ onNavigate={handleNavigate} onContactUs={handleContactUs} />}
        {currentPage === 'features' && <FeaturesPage />}
        {currentPage === 'how-it-works' && <HowItWorks />}
        {currentPage === 'privacy' && <PrivacyPolicy />}
        {currentPage === 'terms' && <TermsOfService />}
        {currentPage === 'security' && <Security onContactUs={handleContactUs} />}
        {currentPage === 'signup' && <SignUp onNavigate={handleNavigate} initialPlan={selectedPlan} />}
        {currentPage === 'not-found' && <NotFound onNavigate={handleNavigate} />}
      </main>
      <Footer onNavigate={handleNavigate} onContactUs={handleContactUs} />

      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
};

export default App;