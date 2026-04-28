import React from 'react';
import { Check, Shield, Users, Globe, Lock, MessageSquare, Terminal, Zap, ArrowRight } from 'lucide-react';

import { Page } from '../App';

interface PricingPlan {
    id: string;
    name: string;
    price: string;
    yearlyPrice?: string;
    period: string;
    description: string;
    features: string[];
    cta: string;
    highlighted: boolean;
    icon: React.ComponentType<{ className?: string }>;
}

interface PricingSectionProps {
    onNavigate: (page: Page, plan?: string) => void;
    onContactUs: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onNavigate, onContactUs }) => {
    const [isYearly, setIsYearly] = React.useState(false);

    const calculateSavings = (monthlyPrice: string, yearlyPrice?: string): number | null => {
        if (!yearlyPrice) return null;
        const monthly = parseFloat(monthlyPrice.replace('$', '').replace(',', ''));
        const yearly = parseFloat(yearlyPrice.replace('$', '').replace(',', ''));
        if (isNaN(monthly) || isNaN(yearly)) return null;
        const annualCost = monthly * 12;
        return Math.round(((annualCost - yearly) / annualCost) * 100);
    };

    const tiers: PricingPlan[] = [
        {
            id: "free",
            name: "Starter",
            price: "Free",
            period: "",
            description: "For individuals needing an immediate secure room.",
            features: [
                "24 hour access to ephemeral room",
                "End-to-End Encryption",
                "Browser-based (No install)",
                "Basic file sharing (10MB)",
                "Disappearing messages"
            ],
            cta: "Get Started ",
            highlighted: false,
            icon: MessageSquare
        },
        {
            id: "pro",
            name: "Community",
            price: "$200",
            yearlyPrice: "$2000",
            period: "/Monthly",
            description: "Dedicated resource for organizations and groups",
            features: [
                "Unlimited access to ephemeral rooms",
                "Permanent rooms available",
                "Community support",
                "Advanced Security Features",
                "Self-hosting guidance",
                "Custom domain integration",
            ],
            cta: "Get Started ",
            highlighted: true,
            icon: Shield
        },
        {
            id: "enterprise",
            name: "Enterprise",
            price: "Custom",
            period: "",
            description: "Scalable solutions for larger teams and those with (tailored/specific/unique/custom/individualized) security requirements.",
            features: [
                "Admin Control Panel",
                "Team Management",
                "SLA and Support",
                "Audit Logs (Optional privacy)",
                "Dedicated Server Instance",
                "White-label options",
                "Custom security audits"
            ],
            cta: "Get Started ",
            highlighted: false,
            icon: Terminal
        }
    ];

    return (
        <section className="relative py-24 overflow-hidden bg-white">
            {/* Background Decorations */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-50 rounded-full blur-[120px] opacity-50"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-50 rounded-full blur-[120px] opacity-50"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 space-y-4 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider">
                        <Zap className="w-3 h-3" />
                        Simple & Transparent
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
                        Get your own <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-500">Convene</span>
                    </h1>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        Whether you're a single activist or a global organization, we have a plan to keep your communications private.
                    </p>

                    {/* Monthly/Yearly Toggle */}
                    <div className="flex justify-center items-center gap-4 mt-8">
                        <span className={`text-sm font-semibold ${!isYearly ? 'text-slate-900' : 'text-slate-500'}`}>
                            Monthly
                        </span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${isYearly ? 'bg-brand-600' : 'bg-slate-300'
                                }`}
                        >
                            <div
                                className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${isYearly ? 'translate-x-8' : 'translate-x-1'
                                    }`}
                            ></div>
                        </button>
                        <span className={`text-sm font-semibold ${isYearly ? 'text-slate-900' : 'text-slate-500'}`}>
                            Yearly
                        </span>
                        {isYearly && (
                            (() => {
                                const communityTier = tiers.find(t => t.id === 'pro');
                                const savings = communityTier ? calculateSavings(communityTier.price, communityTier.yearlyPrice) : null;
                                return savings ? (
                                    <span className="ml-2 px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full">
                                        Save {savings}%
                                    </span>
                                ) : null;
                            })()
                        )}
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tiers.map((tier, idx) => (
                        <div
                            key={idx}
                            className={`group relative flex flex-col p-8 rounded-[2rem] transition-all duration-500 hover:translate-y-[-8px] ${tier.highlighted
                                ? 'bg-slate-900 text-white shadow-2xl scale-105 z-10'
                                : 'bg-white border border-slate-100 shadow-sm hover:shadow-xl'
                                }`}
                        >
                            {tier.highlighted && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-brand-500 to-brand-600 text-white text-[11px] font-bold rounded-full uppercase tracking-widest shadow-lg">
                                    Recommended
                                </div>
                            )}

                            <div className="mb-8">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 ${tier.highlighted ? 'bg-brand-500/20 text-brand-400' : 'bg-brand-50 text-brand-600'
                                    }`}>
                                    <tier.icon className="w-7 h-7" />
                                </div>
                                <h3 className={`text-2xl font-bold mb-2 ${tier.highlighted ? 'text-white' : 'text-slate-900'}`}>
                                    {tier.name}
                                </h3>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className={`text-4xl font-black ${tier.highlighted ? 'text-white' : 'text-slate-900'}`}>
                                        {isYearly && tier.yearlyPrice ? tier.yearlyPrice : tier.price}
                                    </span>
                                    {tier.period && (
                                        <span className={tier.highlighted ? 'text-slate-400 font-medium' : 'text-slate-500 font-medium'}>
                                            {isYearly && tier.yearlyPrice ? '/Year' : tier.period}
                                        </span>
                                    )}
                                </div>
                                <p className={`text-sm leading-relaxed ${tier.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>
                                    {tier.description}
                                </p>
                            </div>

                            <div className={`h-px w-full mb-8 ${tier.highlighted ? 'bg-slate-800' : 'bg-slate-100'}`}></div>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {tier.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-center gap-3">
                                        <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${tier.highlighted ? 'bg-brand-500/10' : 'bg-brand-50'
                                            }`}>
                                            <Check className="w-3.5 h-3.5 text-brand-500" />
                                        </div>
                                        <span className={`text-sm ${tier.highlighted ? 'text-slate-300' : 'text-slate-600'}`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => onNavigate('signup', tier.id)}
                                className={`group/btn relative w-full py-4 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden ${tier.highlighted
                                    ? 'bg-brand-600 text-white hover:bg-brand-500'
                                    : 'bg-slate-900 text-white hover:bg-slate-800'
                                    }`}
                            >
                                <span className="relative z-10">{tier.cta}</span>
                                <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover/btn:translate-x-1" />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></div>
                            </button>
                        </div>
                    ))}
                </div>

                {/* Assurance Banner */}
                <div className="mt-24 relative p-12 rounded-[3rem] bg-gradient-to-br from-slate-900 to-brand-900 text-white overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/3 h-full overflow-hidden opacity-10">
                        <div className="w-[500px] h-[500px] border-[50px] border-white rounded-full"></div>
                    </div>

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-brand-300 text-xs font-semibold uppercase tracking-wider mb-4">
                                <Lock className="w-3 h-3" />
                                Zero Compromise
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Privacy is a Human Right, <br />Not a Feature.
                            </h2>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                Regardless of your plan, Convene never stores your logs, your keys, or your personal metadata. Our security model is mathematically proven to be zero-knowledge.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-8">
                            {[
                                { icon: Shield, label: "Audited" },
                                { icon: Globe, label: "Global" },
                                { icon: Users, label: "Civic" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center gap-3">
                                    <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10 backdrop-blur-sm">
                                        <item.icon className="w-8 h-8 text-brand-400" />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="mt-24 text-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Still have questions?</h2>
                    <p className="text-slate-600 mb-10">Explore our documentation or reach out to our team of security experts.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={onContactUs}
                            className="px-8 py-3 rounded-xl bg-slate-50 text-slate-900 font-bold border border-slate-200 hover:bg-slate-100 transition-all"
                        >
                            Contact Support
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
};
