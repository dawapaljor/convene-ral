import React from 'react';
import { MousePointer2, Share2, ShieldCheck, Trash2, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
    const steps = [
        {
            title: "Create a Room",
            description: "Generate a secure, encrypted room instantly. No signup, no personal data, no cookies required.",
            icon: MousePointer2,
            color: "bg-blue-500"
        },
        {
            title: "Share the Link",
            description: "Send the unique room link to your recipients via any channel. The link is your only key.",
            icon: Share2,
            color: "bg-purple-500"
        },
        {
            title: "Connect Securely",
            description: "Messages are encrypted on your device and sent directly to others using browser-to-browser technology.",
            icon: ShieldCheck,
            color: "bg-emerald-500"
        },
        {
            title: "Destroy on Exit",
            description: "Once the last person leaves or the timer expires, the room and all its data are wiped forever.",
            icon: Trash2,
            color: "bg-rose-500"
        }
    ];

    return (
        <div className="pt-32 pb-16 bg-white min-h-screen">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                    Privacy by <span className="text-brand-600">Design</span>
                </h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                    Convene is architected to ensure that your conversations remain private, ephemeral, and entirely under your control.
                </p>
            </section>

            {/* Step-by-Step Flow */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
                    {/* Connecting line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>

                    {steps.map((step, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center group">
                            <div className={`w-24 h-24 ${step.color} rounded-3xl flex items-center justify-center text-white shadow-lg mb-8 transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-3`}>
                                <step.icon className="w-10 h-10" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {step.description}
                            </p>
                            {idx < steps.length - 1 && (
                                <div className="mt-8 lg:hidden">
                                    <ArrowRight className="w-6 h-6 text-slate-300 rotate-90" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Technical Deep Dive */}
            <section className="bg-slate-50 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">The Technology Behind the Privacy</h2>
                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                                        <div className="w-3 h-3 bg-brand-500 rounded-full animate-pulse"></div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 mb-2">WebRTC Peer-to-Peer</h4>
                                        <p className="text-slate-600 leading-relaxed">
                                            Whenever possible, Convene establishes a direct connection between users' browsers, meaning your data doesn't even pass through our servers.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                                        <div className="w-3 h-3 bg-brand-500 rounded-full"></div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 mb-2">Client-Side Encryption</h4>
                                        <p className="text-slate-600 leading-relaxed">
                                            Encryption keys are generated in your browser and never shared with us. We couldn't read your messages even if we wanted to.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                                        <div className="w-3 h-3 bg-brand-500 rounded-full"></div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 mb-2">Zero-Persistence Storage</h4>
                                        <p className="text-slate-600 leading-relaxed">
                                            Our infrastructure uses RAM-only storage for active session coordination. Once a session ends, its memory is zeroed out.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square bg-white rounded-3xl shadow-2xl p-12 relative overflow-hidden flex items-center justify-center">
                                <div className="absolute inset-0 bg-brand-50/50"></div>
                                <svg className="w-full h-full text-brand-500/10" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                                    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                                </svg>
                                <div className="relative z-10 text-center">
                                    <div className="bg-brand-600 text-white p-6 rounded-2xl shadow-xl mb-6 inline-block">
                                        <ShieldCheck className="w-12 h-12" />
                                    </div>
                                    <div className="text-2xl font-bold text-slate-900">Protected</div>
                                    <div className="text-brand-600 font-medium">End-to-End</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-brand-600 rounded-3xl p-12 text-center text-white shadow-xl shadow-brand-500/20">
                        <h2 className="text-3xl font-bold mb-6">Experience it yourself</h2>
                        <p className="text-brand-100 mb-10 text-lg">
                            No registration. No wait. Just secure, ephemeral communication in seconds.
                        </p>
                        <button className="bg-white text-brand-600 hover:bg-brand-50 font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:-translate-y-1">
                            Start a Room Now
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HowItWorks;
