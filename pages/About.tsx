import React from 'react';
import { Shield, Lock, Globe, Users, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
    return (
        <div className="pt-32 pb-16">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                            Privacy as a <span className="text-brand-600">Human Right</span>
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                            Convene was built with a singular mission: to provide a safe, ephemeral, and accessible communication tool for those who need it most.
                        </p>
                    </div>
                </div>
                {/* Decorative background elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 opacity-10">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-brand-500 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-200 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
                </div>
            </section>

            {/* Our Mission */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-slate-900 border-l-4 border-brand-500 pl-4">Our Mission</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                In an era of increasing digital surveillance, human rights defenders, journalists, and activists often lack the tools to communicate without leaving a digital footprint. Apps that require phone numbers or email addresses can be vectors for tracking and targeting.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Convene breaks this cycle by providing a <strong>browser-based, no-install, no-signup</strong> messaging platform. It is designed to be truly ephemeral—once the room is deleted, the data is gone forever.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="aspect-square bg-brand-50 rounded-2xl flex items-center justify-center p-8 shadow-inner">
                                <Shield className="w-32 h-32 text-brand-500 animate-float" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">Core Values</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Radical Privacy",
                                description: "We don't just protect your data; we ensure we never have it. No accounts, no cookies, no tracking.",
                                icon: UserX,
                            },
                            {
                                title: "Uncompromising Security",
                                description: "Signal-grade end-to-end encryption ensures that only you and your recipients can read your messages.",
                                icon: Lock,
                            },
                            {
                                title: "Global Accessibility",
                                description: "Optimized for low-bandwidth environments and older browsers, making security available to everyone.",
                                icon: Globe,
                            }
                        ].map((value, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
                                <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-6">
                                    <value.icon className="w-6 h-6 text-brand-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The HRL Legacy */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
                    <Award className="w-16 h-16 text-brand-600 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Built by HRL</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                        Convene is an open-source product of HRL, a non-profit 501(c)3 charitable organization dedicated to advancing human rights through technology. We believe that technology should empower, not endanger.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <span className="inline-flex items-center px-4 py-2 rounded-full bg-brand-50 text-brand-700 text-sm font-medium border border-brand-100">
                            <Users className="w-4 h-4 mr-2" /> Open Source
                        </span>
                        <span className="inline-flex items-center px-4 py-2 rounded-full bg-brand-50 text-brand-700 text-sm font-medium border border-brand-100">
                            <Heart className="w-4 h-4 mr-2" /> Non-Profit
                        </span>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-brand-600 rounded-3xl p-12 text-center text-white shadow-xl shadow-brand-500/20 relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-6">Ready to communicate securely?</h2>
                            <p className="text-brand-100 mb-10 text-lg max-w-2xl mx-auto">
                                Join thousands of users who trust Convene for their most sensitive conversations. No strings attached.
                            </p>
                            <button className="bg-white text-brand-600 hover:bg-brand-50 font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:-translate-y-1">
                                Start a New Room
                            </button>
                        </div>
                        {/* Background pattern */}
                        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-brand-400/20 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Internal icon for core values
const UserX: React.FC<any> = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="17" y1="8" x2="22" y2="13" />
        <line x1="22" y1="8" x2="17" y2="13" />
    </svg>
);

export default About;
