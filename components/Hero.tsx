import React from 'react';
import ChatInterface from './ChatInterface';
import { ShieldCheck, Users, Globe, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-slate-50 pt-24 pb-12 lg:pt-0 lg:pb-0">

      {/* Abstract Colorful Blobs Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Giant Blue Blob (Left) */}
        <div className="absolute -left-[30%] sm:-left-[15%] top-[-10%] w-[90vw] h-[90vw] lg:w-[70vw] lg:h-[80vw] max-w-[1200px] max-h-[1200px] bg-brand-600 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-[spin_40s_linear_infinite]"></div>

        {/* Vibrant Yellow Blob (Right Bottom) */}
        <div className="absolute -right-[20%] sm:-right-[10%] bottom-[-20%] w-[80vw] h-[80vw] lg:w-[60vw] lg:h-[60vw] max-w-[900px] max-h-[900px] bg-amber-400 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] animate-[spin_50s_linear_infinite_reverse]"></div>

        {/* Vibrant Teal/Green Blob (Left Bottom) */}
        <div className="absolute left-[-10%] sm:left-[10%] bottom-[-10%] w-[50vw] h-[50vw] lg:w-[35vw] lg:h-[35vw] max-w-[600px] max-h-[600px] bg-teal-400 rounded-[50%_50%_30%_70%/50%_50%_70%_30%] animate-[spin_35s_linear_infinite]"></div>

        {/* Pink Accent Circle (Right Top) */}
        <div className="absolute right-[5%] sm:right-[15%] top-[10%] lg:top-[15%] w-[20vw] h-[20vw] lg:w-[10vw] lg:h-[10vw] max-w-[180px] max-h-[180px] bg-pink-500 rounded-full animate-bounce" style={{ animationDuration: '4s' }}></div>

        {/* Purple Accent Circle (Middle Top) */}
        <div className="absolute left-[40%] top-[5%] w-[15vw] h-[15vw] max-w-[120px] max-h-[120px] bg-indigo-500 rounded-full opacity-80 animate-pulse"></div>

        {/* --- The Glassmorphism Blur Layer --- */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[40px] sm:backdrop-blur-[80px] lg:backdrop-blur-[100px] z-10 border-b border-white/50"></div>

        {/* Subtle noise texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.25] mix-blend-overlay z-20"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Content */}
          <div className="lg:col-span-6 xl:col-span- flex flex-col justify-center animate-fade-in-up text-center lg:text-left">


            <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-black tracking-tight text-slate-900 leading-[1.05] mb-6 drop-shadow-sm">
              Private<br className="hidden sm:block" />
              conversations<br className="hidden sm:block" />
              <span className="text-blue-600">instantly.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0 drop-shadow-sm">
              Browser-based, ephemeral, and encrypted communication with Signal-grade security. Used by human rights defenders to share information safely in censored environments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mx-auto lg:mx-0">
              <button className="inline-flex items-center justify-center px-8 py-3.5 text-sm sm:text-base font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 w-full sm:w-auto active:scale-95">
                Start a Secure Room <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-3.5 text-sm sm:text-base font-bold text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all shadow-sm w-full sm:w-auto active:scale-95">
                How it Works
              </button>
            </div>

            <div className="mt-10 border-t border-slate-200 pt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 text-slate-500 text-sm font-medium text-slate-900">
              <div className="flex items-center gap-2 ">
                <ShieldCheck className="w-6 h-6 text-green-500" />
                Signal-grade Security
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-6 h-6 text-blue-500" />
                Censorship Resistant
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-6  h-6 text-purple-500" />
                No Account Needed
              </div>
            </div>


          </div>

          {/* Right: Phone Interface Demo */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center lg:justify-end animate-fade-in-up mt-12 lg:mt-0" style={{ animationDelay: '0.2s' }}>

            {/* The Phone mockup / Chat Interface */}
            <div className="relative transform rotate-[-4deg] hover:rotate-0 transition-transform duration-500 z-30">
              <ChatInterface />

              {/* Floating Glassy element - Left (Participants) */}
              <div className="absolute -left-8 sm:-left-16 bottom-[25%] sm:bottom-[30%] bg-white/95 backdrop-blur-xl p-3 sm:p-4 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white/80 flex items-center gap-3 animate-float z-40">
                <div className="bg-orange-100 p-2 sm:p-2.5 rounded-full border border-orange-200/50 flex-shrink-0">
                  <Users className="w-5 h-5 text-orange-600" />
                </div>
                <div className="pr-2">
                  <p className="text-[11px] text-slate-500 font-semibold mb-0.5 leading-none">Participants</p>
                  <p className="text-sm sm:text-base font-bold text-slate-900 leading-none">Anonymous</p>
                </div>
              </div>

              {/* Floating Glassy element - Right (Security) */}
              <div className="absolute -right-8 sm:-right-16 top-[15%] sm:top-[20%] bg-white/95 backdrop-blur-xl p-3 sm:p-4 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white/80 flex items-center gap-3 animate-float z-40" style={{ animationDelay: '1s' }}>
                <div className="bg-emerald-100 p-2 sm:p-2.5 rounded-full border border-emerald-200/50 flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="pr-2">
                  <p className="text-[11px] text-slate-500 font-semibold mb-0.5 whitespace-nowrap leading-none">Security Status</p>
                  <p className="text-sm sm:text-base font-bold text-slate-900 leading-none">Encrypted</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;