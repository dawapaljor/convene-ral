import React from 'react';
import ChatInterface from './ChatInterface';
import { ShieldCheck, Lock } from 'lucide-react';

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Content */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center animate-fade-in-up text-center lg:text-left">
            <div className="inline-flex items-center mx-auto lg:mx-0 gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-white/80 text-slate-800 text-[11px] sm:text-xs font-bold mb-8 w-fit shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)]">
              No App • No Phone • No Logs
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-[4.5rem] font-bold tracking-tight text-slate-900 leading-[1.05] mb-6 drop-shadow-sm">
              Private chat, <br className="hidden sm:block lg:hidden" />
              instantly.
            </h1>

            <p className="text-lg sm:text-xl text-slate-800 mb-10 leading-relaxed font-semibold max-w-2xl mx-auto lg:mx-0 drop-shadow-sm">
              Browser-based, ephemeral, and encrypted communication. Used by human rights defenders globally to share information safely.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mx-auto lg:mx-0">
              <button className="inline-flex items-center justify-center px-10 py-4 text-sm sm:text-base font-bold text-slate-900 bg-white rounded-full hover:bg-slate-50 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 w-full sm:w-auto active:scale-95">
                GET STARTED
              </button>
            </div>
          </div>

          {/* Right: Phone Interface Demo */}
          <div className="lg:col-span-6 xl:col-span-7 relative flex items-center justify-center lg:justify-end animate-fade-in-up mt-12 lg:mt-0" style={{ animationDelay: '0.2s' }}>

            {/* The Phone mockup */}
            <div className="relative w-[300px] sm:w-[360px] h-[600px] sm:h-[680px] bg-slate-900 rounded-[3rem] shadow-2xl border-[8px] border-slate-900 ring-4 ring-white/30 overflow-hidden flex flex-col transform rotate-[-4deg] hover:rotate-0 transition-transform duration-500 shadow-slate-900/30">

              {/* Dynamic Island / Camera Notch */}
              <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-50">
                <div className="w-[45%] h-6 bg-slate-900 rounded-b-[18px]"></div>
              </div>

              {/* Browser/App Header */}
              <div className="pt-10 pb-3 bg-white border-b border-slate-100 flex flex-col items-center px-4 shrink-0 z-40 relative">
                <div className="w-full bg-slate-100/80 rounded-full h-8 flex items-center justify-center gap-2 text-[11px] text-slate-500 font-medium">
                  <Lock className="w-3 h-3 text-emerald-500" /> secure.convene.app
                </div>
              </div>

              {/* Chat Interface Container */}
              <div className="flex-1 overflow-hidden relative bg-slate-50">
                <ChatInterface />
              </div>

              {/* Home indicator bar */}
              <div className="absolute bottom-2 inset-x-0 h-1.5 flex justify-center z-50">
                <div className="w-24 bg-slate-900/10 rounded-full"></div>
              </div>
            </div>

            {/* Floating Glassy element */}
            <div className="absolute -left-4 sm:left-4 lg:-left-6 bottom-[10%] bg-white/80 backdrop-blur-xl p-3 sm:p-4 rounded-2xl shadow-xl shadow-black/5 border border-white/60 flex items-center gap-3 animate-float z-40">
              <div className="bg-emerald-100 p-2 sm:p-2.5 rounded-full border border-emerald-200/50">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="pr-3">
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">Connection</p>
                <p className="text-sm font-bold text-slate-900 leading-none">Encrypted</p>
              </div>
            </div>

            {/* Second Floating Glassy element */}
            <div className="absolute right-0 sm:-right-4 lg:-right-6 top-[20%] bg-white/80 backdrop-blur-xl p-3 sm:p-4 rounded-2xl shadow-xl shadow-black/5 border border-white/60 flex items-center gap-3 animate-float z-40" style={{ animationDelay: '1s' }}>
              <div className="pr-3 pl-2">
                <p className="text-sm font-bold text-slate-900 leading-none text-right">No Logs</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5 text-right">100% Ephemeral</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;