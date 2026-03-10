import React from 'react';
import Features from '../components/Features';
import ComparisonTable from '../components/ComparisonTable';

const FeaturesPage: React.FC = () => {
    return (
        <div className="pt-32 pb-16 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Security & <span className="text-brand-600">Features</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Explore the powerful capabilities and uncompromising security standards that make Convene a trusted platform for human rights defenders.
                    </p>
                </div>
            </div>

            <Features />

            <ComparisonTable />

            {/* Security Deep Dive Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1">
                            <div className="bg-brand-900 rounded-3xl p-8 text-brand-50 shadow-2xl relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                        <span className="w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center text-sm">01</span>
                                        Zero Metadata Retention
                                    </h3>
                                    <p className="text-brand-100 mb-8 leading-relaxed">
                                        Most "secure" apps still track who you talk to and when. Convene is designed to be architecturally incapable of storing this data. No logs, no timestamps, no digital breadcrumbs.
                                    </p>

                                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                        <span className="w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center text-sm">02</span>
                                        Signal-Grade E2EE
                                    </h3>
                                    <p className="text-brand-100 leading-relaxed">
                                        We use the industry-leading Double Ratchet algorithm for end-to-end encryption. Your messages are encrypted before they ever leave your device.
                                    </p>
                                </div>
                                <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl"></div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 space-y-6">
                            <h2 className="text-3xl font-bold text-slate-900">Built for the Most Challenging Environments</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Convene isn't just another chat app. It's a specialized tool built for environments where digital safety is a matter of life and death.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Censorship-resistant architecture",
                                    "Low-bandwidth optimization",
                                    "No digital fingerprinting",
                                    "Anti-traffic analysis measures"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                                        <div className="w-5 h-5 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeaturesPage;
