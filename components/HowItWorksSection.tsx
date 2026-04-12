import React from 'react';
import { MousePointer2, Share2, ShieldCheck, Trash2, ArrowRight } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
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
        <div className="py-24 bg-white">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 animate-fade-in-up">
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                    How it <span className="text-brand-600">Works</span>
                </h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                    A simple 4-step process to secure your communication without leaving a digital footprint.
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

        </div>
    );
};
