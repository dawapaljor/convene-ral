import React from 'react';
import { Check, Shield, Users, Globe, Lock, MessageSquare, Terminal } from 'lucide-react';

interface PricingPlan {
    name: string;
    price: string;
    period?: string;
    description: string;
    features: string[];
    cta: string;
    highlighted: boolean;
    icon: React.ComponentType<{ className?: string }>;
}

export const PricingSection: React.FC = () => {
    const tiers: PricingPlan[] = [
        {
            name: "Starter",
            price: "$0",
            period: "/month",
            description: "For individual users and short-term secure messaging.",
            features: [
                "Ephemeral Rooms (24h)",
                "End-to-End Encryption",
                "Up to 10 participants",
                "Browser-based (No install)",
                "Basic file sharing (5MB)"
            ],
            cta: "Get Started",
            highlighted: false,
            icon: MessageSquare
        },
        {
            name: "Community",
            price: "Custom",
            period: "",
            description: "Dedicated resources for high-impact human rights missions.",
            features: [
                "Unlimited ephemeral rooms",
                "Priority Support",
                "Advanced Security Features",
                "Self-hosting guidance",
                "Custom domain integration"
            ],
            cta: "Contact Us",
            highlighted: false,
            icon: Shield
        },
        {
            name: "Enterprise",
            price: "Custom",
            period: "",
            description: "Scalable solutions for organizations and large teams.",
            features: [
                "Admin Control Panel",
                "Team Management",
                "SLA and Support",
                "Audit Logs (Optional privacy)",
                "Dedicated Server Instance"
            ],
            cta: "Talk to Sales",
            highlighted: false,
            icon: Terminal
        }
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Plans for Every <span className="text-brand-600">Mission</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Choose the plan that fits your security needs. All plans include our core end-to-end encryption.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tiers.map((tier, idx) => (
                        <div
                            key={idx}
                            className={`relative bg-white p-8 rounded-3xl border ${tier.highlighted ? 'border-brand-500 ring-2 ring-brand-500/20 shadow-xl' : 'border-slate-200'} transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden`}
                        >
                            {tier.highlighted && (
                                <div className="absolute top-0 right-0 bg-brand-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6">
                                <div className={`w-12 h-12 ${tier.highlighted ? 'bg-brand-500 text-white' : 'bg-brand-50 text-brand-600'} rounded-2xl flex items-center justify-center mb-4`}>
                                    <tier.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-3xl font-bold text-slate-900">{tier.price}</span>
                                    {tier.period && <span className="text-slate-500 text-sm font-medium">{tier.period}</span>}
                                </div>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                    {tier.description}
                                </p>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {tier.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-3">
                                        <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-brand-50 flex items-center justify-center">
                                            <Check className="w-3 h-3 text-brand-600" />
                                        </div>
                                        <span className="text-sm text-slate-600">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-3.5 rounded-xl font-bold transition-all duration-300 ${tier.highlighted
                                    ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-500/25'
                                    : 'bg-slate-50 text-slate-900 hover:bg-slate-100 border border-slate-200'
                                    }`}
                            >
                                {tier.cta}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Security Assurance */}
                <div className="mt-20 p-8 bg-brand-900 rounded-3xl text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8">
                        <div className="text-left max-w-xl">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <Lock className="w-6 h-6 text-brand-400" /> Security by Architecture
                            </h2>
                            <p className="text-brand-100/80 leading-relaxed">
                                Regardless of the plan you choose, Convene never stores your logs, your keys, or your personal metadata. Our security model is based on <strong>Zero Knowledge</strong>.
                            </p>
                        </div>
                        <div className="flex-shrink-0 flex gap-4">
                            <div className="p-4 bg-white/10 rounded-2xl border border-white/10 text-center">
                                <Globe className="w-8 h-8 mx-auto mb-2 text-brand-400" />
                                <div className="text-[10px] font-bold uppercase tracking-tight">Global</div>
                            </div>
                            <div className="p-4 bg-white/10 rounded-2xl border border-white/10 text-center">
                                <Shield className="w-8 h-8 mx-auto mb-2 text-brand-400" />
                                <div className="text-[10px] font-bold uppercase tracking-tight">Secure</div>
                            </div>
                            <div className="p-4 bg-white/10 rounded-2xl border border-white/10 text-center">
                                <Users className="w-8 h-8 mx-auto mb-2 text-brand-400" />
                                <div className="text-[10px] font-bold uppercase tracking-tight">Civic</div>
                            </div>
                        </div>
                    </div>
                    {/* Background pattern */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                </div>

                {/* FAQ Preview */}
                <div className="mt-20 text-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Have questions?</h2>
                    <p className="text-slate-600 mb-8">Check out our FAQ or contact our support team.</p>
                    <button className="text-brand-600 font-bold hover:underline transition-all">
                        <a href='/faq'>View FAQ &rarr;</a>
                    </button>
                </div>
            </div>
        </section>
    );
};
