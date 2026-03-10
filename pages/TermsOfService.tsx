import React from 'react';
import { Gavel, AlertTriangle, ShieldCheck, Heart } from 'lucide-react';

const TermsOfService: React.FC = () => {
    return (
        <div className="pt-32 pb-16 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Terms of <span className="text-brand-600">Service</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        By using Convene, you agree to these simple principles designed to protect the safety and integrity of the platform.
                    </p>
                </div>

                <div className="prose prose-slate max-w-none space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <Heart className="w-6 h-6 text-brand-600" /> 01. Intended Use
                        </h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Convene is a tool for journalists, activists, and human rights defenders. We expect all users to use the platform in ways that respect human rights and the safety of others.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <ShieldCheck className="w-6 h-6 text-brand-600" /> 02. No Warranty
                        </h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Convene is provided "as is" without warranty of any kind. While we strive for absolute security through our architecture, users should always use situational awareness when communicating in high-risk environments.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <AlertTriangle className="w-6 h-6 text-brand-600" /> 03. Prohibited Conduct
                        </h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Users are prohibited from using Convene for illegal activities, harassment, or to knowingly compromise the security of the platform or its users.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <Gavel className="w-6 h-6 text-brand-600" /> 04. Open Source & Contributions
                        </h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Convene is an open-source project. Modification and redistribution are encouraged under our license. We are a community-driven platform built by the HRL mission.
                        </p>
                    </section>

                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mt-16 text-center">
                        <p className="text-sm text-slate-500 italic mb-4">
                            Last updated: March 10, 2026.
                        </p>
                        <p className="text-sm text-slate-400">
                            Convene is a project of HRL, a 501(c)3 non-profit organization.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
