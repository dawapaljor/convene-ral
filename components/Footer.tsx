import React from 'react';
import { Logo } from './Logo';
import { FOOTER_LINKS } from '../constants';
import { Page, NavLink } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
  onContactUs: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, onContactUs }) => {
  const handleLinkClick = (e: React.MouseEvent, link: NavLink) => {
    if (link.external) return; // let browser handle it normally
    
    e.preventDefault();
    if (link.isAction) {
      onContactUs();
      return;
    }
    
    if (link.page) {
      onNavigate(link.page);
    }
    
    if (link.targetId) {
      setTimeout(() => {
        document.getElementById(link.targetId!)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
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
              An open-source product of <a href="https://rightsactionlab.org" className='hover:text-slate-600' target='_blank'>Rights Action Lab Inc.</a>, a non-profit 501(c)3 organization.
            </p>
            <div className="text-sm text-slate-400 space-y-1">
              <p>Development by <strong><a href="https://guardianproject.info/" target="_blank" className='hover:text-slate-500'>Guardian Project</a></strong>.</p>
              <p>Community Engagement & Support by <strong><a href="https://tibcert.org" target='_blank'>TibCERT</a></strong>.</p>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-4 text-base uppercase tracking-wider">Platform</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              {FOOTER_LINKS.platform.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link)}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="hover:text-brand-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-4 text-base uppercase tracking-wider">Legal & Contact</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              {FOOTER_LINKS.legal.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link)}
                    className="hover:text-brand-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Rights Action Lab Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;