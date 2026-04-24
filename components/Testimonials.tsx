import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-brand-600 font-bold tracking-wide uppercase mb-2">Impact Stories</h2>
          <p className="text-3xl leading-tight font-extrabold text-slate-900 sm:text-4xl">
            Trusted by those who need it most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:scale-[1.02] cursor-default"
            >
              <Quote className="absolute top-6 left-6 w-8 h-8 text-brand-100" />
              <div className="relative z-10 pt-6">
                <p className="text-slate-600 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{testimonial.author}</h4>
                    {testimonial.role && (
                      <p className="text-slate-500 text-xs">{testimonial.role}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
          
        <div className="mt-16 p-8 bg-gradient-to-br from-slate-900 to-brand-900 rounded-3xl text-center relative overflow-hidden ">
        <div className="absolute top-0 right-0 w-1/3 h-full overflow-hidden opacity-10">
                        <div className="w-[500px] h-[700px] border-[50px] border-white rounded-full"></div>
                    </div>
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          
            </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-brand-100 text-white my-4">A lifeline for human rights defenders and activists.</h3>
                <p className="text-brand-100 max-w-2xl mx-auto mb-8">
                  Over 100,000 users have accessed Convene rooms from censored environments since 2022
                </p>

              </div>
            </div>
      </div>
    </section>
  );
};

export default Testimonials;