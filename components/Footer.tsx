import React from 'react';
import { Twitter, Github, Globe } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (page: 'home' | 'about' | 'pricing' | 'faq' | 'features' | 'how-it-works' | 'privacy' | 'terms' | 'security') => void;
  onRequestDemo: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, onRequestDemo }) => {
  const handleLinkClick = (e: React.MouseEvent, page: any, targetId?: string) => {
    e.preventDefault();
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        onNavigate('home');
        setTimeout(() => {
          document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      onNavigate(page);
    }
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2 mb-4 cursor-pointer group w-fit"
            >
              <Logo className="h-8 w-8 text-brand-600 group-hover:text-brand-700 transition-colors" />
              <span className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">Convene</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-6">
              An open-source product of Rights Action Lab, a non-profit 501(c)3 organization. Empowering human rights defenders with secure, ephemeral communication.
            </p>
            <div className="text-xs text-slate-400 space-y-1">
              <p>Development by <strong>Guardian Project</strong>.</p>
              <p>Community Engagement by <strong>TibCERT</strong> & <strong>OkThanks</strong>.</p>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-4 text-base uppercase tracking-wider">Platform</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="/pricing" onClick={(e) => handleLinkClick(e, 'pricing')} className="hover:text-brand-600 transition-colors">Get your own Convene</a></li>
              <li><a href="/how-it-works" onClick={(e) => handleLinkClick(e, 'home', 'how-it-works')} className="hover:text-brand-600 transition-colors">How it Works</a></li>
              <li><a href="/features" onClick={(e) => handleLinkClick(e, 'home', 'security-features')} className="hover:text-brand-600 transition-colors">Features</a></li>
              <li><a href="/faq" onClick={(e) => handleLinkClick(e, 'faq')} className="hover:text-brand-600 transition-colors">FAQs</a></li>
              <li><a href="https://gitlab.com/keanuapp/keanuapp-weblite.git" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 transition-colors">Source Code</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-4 text-base uppercase tracking-wider">Legal & Contact</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="/privacy" onClick={(e) => handleLinkClick(e, 'privacy')} className="hover:text-brand-600 transition-colors">Privacy Policy</a></li>
              <li><a href="/security" onClick={(e) => handleLinkClick(e, 'security')} className="hover:text-brand-600 transition-colors">Security</a></li>
              <li><a href="/terms" onClick={(e) => handleLinkClick(e, 'terms')} className="hover:text-brand-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onRequestDemo(); }} className="hover:text-brand-600 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Rights Action Lab. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="https://github.com/rightsactionlab" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-600 transition-colors">
              <Github size={18} />
            </a>
            <a href="https://twitter.com/rightsaction" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-600 transition-colors">
              <Twitter size={18} />
            </a>
            <a href="https://rightsactionlab.org" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-600 transition-colors">
              <Globe size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;