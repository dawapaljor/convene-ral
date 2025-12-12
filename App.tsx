import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ComparisonTable from './components/ComparisonTable';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-100 selection:text-brand-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ComparisonTable />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;