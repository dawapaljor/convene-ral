import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-base text-brand-600 font-bold tracking-wide uppercase mb-2">Privacy First</h2>
          <p className="text-3xl leading-tight font-extrabold text-slate-900 sm:text-4xl">
             Security without the complexity.
          </p>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 mx-auto">
            Convene reduces digital fingerprints that can endanger users. No installation, no accounts, no phone number, no trace left behind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-600 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-brand-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;