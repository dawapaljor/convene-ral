import React, { useState, useEffect } from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { Page } from '../App';

interface NotFoundProps {
  onNavigate: (page: Page) => void;
}

const NotFound: React.FC<NotFoundProps> = ({ onNavigate }) => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const redirect = setTimeout(() => {
      onNavigate('home');
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, [onNavigate]);

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-9xl font-extrabold text-brand-600 tracking-tight">404</h1>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 tracking-tight">Page not found</h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Sorry, we couldn't find the page you're looking for. It might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <p className="mt-2 text-md font-medium text-brand-600">
            Redirecting to home in {countdown} seconds...
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:text-brand-600 transition-colors shadow-sm w-full sm:w-auto justify-center"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-brand-600 hover:bg-brand-700 transition-colors shadow-lg shadow-brand-500/20 w-full sm:w-auto justify-center"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
