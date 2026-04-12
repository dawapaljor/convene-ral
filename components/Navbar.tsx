import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { Logo } from './Logo';

interface NavbarProps {
  onNavigate: (page: 'home' | 'about' | 'pricing' | 'faq' | 'features' | 'how-it-works' | 'privacy' | 'terms' | 'security') => void;
  onRequestDemo: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, onRequestDemo }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full z-50 top-0 start-0 bg-white/90 backdrop-blur-md border-b border-gray-100">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div
            onClick={() => onNavigate('home')}
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer group"
          >
            <Logo className="h-10 w-10 text-brand-600 group-hover:text-brand-700 transition-colors duration-300" />
            <span className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-brand-600 transition-colors duration-300">Convene</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    const id = link.label.toLowerCase().replace(/\s+/g, '-');
                    const element = document.getElementById(id === 'how-it-works' ? id : id === 'features' ? 'security-features' : id);
                    
                    if (element) {
                      e.preventDefault();
                      element.scrollIntoView({ behavior: 'smooth' });
                    } else if (link.label === 'Features' || link.label === 'How it Works') {
                      e.preventDefault();
                      onNavigate('home');
                      // Wait for page to change then scroll
                      setTimeout(() => {
                        const targetId = link.label === 'Features' ? 'security-features' : 'how-it-works';
                        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    } else if (link.label === 'Pricing') {
                      e.preventDefault();
                      onNavigate('pricing');
                    } else if (link.label === 'FAQ') {
                      e.preventDefault();
                      onNavigate('faq');
                    } else if (link.href === '#') {
                      e.preventDefault();
                    }
                  }}
                  className="text-slate-600 hover:text-brand-600 hover:bg-brand-50 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={onRequestDemo}
              className="bg-brand-600 hover:bg-brand-700 text-white font-semibold py-2.5 px-6 rounded-full transition-all duration-300 shadow-lg shadow-brand-500/20 hover:shadow-brand-500/30 hover:-translate-y-0.5"
            >
              Request a Demo
            </button>
          </div>


          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-600 hover:text-brand-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={(e) => {
                  const id = link.label.toLowerCase().replace(/\s+/g, '-');
                  const targetId = id === 'how-it-works' ? id : id === 'features' ? 'security-features' : id;
                  const element = document.getElementById(targetId);

                  if (element) {
                    e.preventDefault();
                    element.scrollIntoView({ behavior: 'smooth' });
                  } else if (link.label === 'Features' || link.label === 'How it Works') {
                    e.preventDefault();
                    onNavigate('home');
                    setTimeout(() => {
                      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  } else if (link.label === 'Pricing') {
                    e.preventDefault();
                    onNavigate('pricing');
                  } else if (link.label === 'FAQ') {
                    e.preventDefault();
                    onNavigate('faq');
                  } else if (link.href === '#') {
                    e.preventDefault();
                  }
                  setIsOpen(false);
                }}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 pb-2">
              <button 
                onClick={() => {
                  onRequestDemo();
                  setIsOpen(false);
                }}
                className="w-full bg-brand-600 text-white font-bold py-3 rounded-lg shadow-md"
              >
                Request a Demo
              </button>
            </div>

          </div>
        </div>
      )}
      </nav>
    </>
  );
};

export default Navbar;