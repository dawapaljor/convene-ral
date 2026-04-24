import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div
        className="bg-white w-full max-w-md rounded-2xl shadow-2xl relative animate-in zoom-in-95 duration-300 max-h-[calc(100dvh-2rem)] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Contact Us</h2>
          <p className="text-slate-500 mb-6 text-sm">Have a question or need assistance? Our support team is here to help.</p>

          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onClose(); alert('Message sent!'); }}>
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1">Name</label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all placeholder:text-slate-400"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all placeholder:text-slate-400"
                placeholder="youremail@website.com"
              />
            </div>

            <div>
              <label htmlFor="organization" className="block text-sm font-semibold text-slate-700 mb-1">Organization (Optional)</label>
              <input
                type="text"
                id="organization"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all placeholder:text-slate-400"
                placeholder="Organization"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1">Message</label>
              <textarea
                id="message"
                rows={4}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all placeholder:text-slate-400 resize-none"
                placeholder="How can we help you?"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-brand-500/20 hover:shadow-brand-500/30 hover:-translate-y-0.5 mt-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="absolute inset-0 -z-10" onClick={onClose} />
    </div>
  );
};
