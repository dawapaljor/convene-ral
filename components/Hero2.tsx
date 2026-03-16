import React from 'react';
import ChatInterface from './ChatInterface';
import { ArrowRight, ShieldCheck, Users, Globe } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-white to-slate-50">

            {/* Subtle Grid Background */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

                    {/* Text Content */}
                    <div className="lg:col-span-6 text-center lg:text-left mb-16 lg:mb-0 animate-fade-in-up">
                        <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-200 bg-brand-50 text-brand-700 text-xs font-semibold mb-8 uppercase tracking-wider">
                            <span className="flex w-2 h-2 bg-brand-600 rounded-full mr-2 animate-pulse"></span>
                            No Sign-up • No App • No Phone number • No Logs
                        </div>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                            Private conversations <span className="text-brand-600">instantly.</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Browser-based, ephemeral, and encrypted communication with Signal-grade security. Used by human rights defenders to share information safely in censored environments.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand-600 rounded-full hover:bg-brand-700 transition-all duration-300 shadow-xl shadow-brand-500/20 transform hover:-translate-y-1">
                                Start a Secure Room
                                <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
                            </button>
                            <button className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all duration-300 shadow-sm">
                                How it Works
                            </button>
                        </div>

                        <div className="mt-10 border-t border-slate-200 pt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 text-slate-500 text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-green-500" />
                                Signal-grade Security
                            </div>
                            <div className="flex items-center gap-2">
                                <Globe className="w-5 h-5 text-blue-500" />
                                Censorship Resistant
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5 text-purple-500" />
                                No Account Needed
                            </div>
                        </div>
                    </div>

                    {/* Chat Demo Graphic */}
                    <div className="lg:col-span-6 relative animate-float">
                        {/* Decorative Blobs */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-brand-100/50 blur-[80px] rounded-full pointer-events-none mix-blend-multiply"></div>
                        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-100/50 blur-[60px] rounded-full pointer-events-none mix-blend-multiply"></div>

                        <ChatInterface />

                        {/* Floating Badges */}
                        <div className="absolute -right-6 top-1/4 bg-white/90 backdrop-blur-xl p-4 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 animate-bounce delay-700 hidden lg:block">
                            <div className="flex items-center gap-3">
                                <div className="bg-green-100 p-2 rounded-full">
                                    <ShieldCheck className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 font-medium">Security Status</div>
                                    <div className="text-sm font-bold text-slate-900">Encrypted</div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -left-8 bottom-1/3 bg-white/90 backdrop-blur-xl p-4 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 animate-bounce delay-300 hidden lg:block">
                            <div className="flex items-center gap-3">
                                <div className="bg-orange-100 p-2 rounded-full">
                                    <Users className="w-5 h-5 text-orange-600" />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 font-medium">Participants</div>
                                    <div className="text-sm font-bold text-slate-900">Anonymous</div>
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