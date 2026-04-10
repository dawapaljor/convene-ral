import React from 'react';
import { Twitter, Github, Globe } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (page: 'home' | 'about' | 'pricing' | 'faq' | 'features' | 'how-it-works' | 'privacy' | 'terms') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2 mb-4 cursor-pointer group"
            >
              <Logo className="h-8 w-8 text-brand-600 group-hover:text-brand-700 transition-colors" />
              <span className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">Convene</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-md mb-6">
              Convene is an open-source product of Rights Action Lab, a non-profit 501(c)3 charitable organization. It serves as a lifeline for human rights defenders, enabling secure documentation and reporting of rights violations.”
            </p>
            <div className="text-xs text-slate-400 space-y-1">
              <p>Development provided by <strong>Guardian Project</strong>.</p>
              <p>User & Community Engagement by <strong>TibCERT</strong> and <strong>OkThanks</strong>.</p>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-brand-600 transition-colors">Start a Room</a></li>
              <li>
                <a
                  href="/how-it-works"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('how-it-works');
                  }}
                  className="hover:text-brand-600 transition-colors"
                >
                  How it Works
                </a>
              </li>
              <li>
                <a
                  href="/features"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('features');
                  }}
                  className="hover:text-brand-600 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('pricing');
                  }}
                  className="hover:text-brand-600 transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('faq');
                  }}
                  className="hover:text-brand-600 transition-colors"
                >
                  FAQ
                </a>
              </li>

              <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-brand-600 transition-colors">Source Code</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-4">Organization</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <a
                  href="/about"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('about');
                  }}
                  className="hover:text-brand-600 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('privacy');
                  }}
                  className="hover:text-brand-600 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('terms');
                  }}
                  className="hover:text-brand-600 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-brand-600 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Rights Action Lab. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" onClick={(e) => e.preventDefault()} className="text-slate-400 hover:text-slate-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="text-slate-400 hover:text-slate-600 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="text-slate-400 hover:text-slate-600 transition-colors">
              <Globe size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;