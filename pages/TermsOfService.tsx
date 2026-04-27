import React from 'react';
import { Ban, Shield, ShieldCheck, Heart, Share2 } from 'lucide-react';

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
                            Convene is provided "as is" without warranties of any kind. While our architecture is designed to support a high level of security, users should always use situational awareness when communicating in high-risk environments.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <ShieldCheck className="w-6 h-6 text-brand-600" /> 02. No Guarantees
                        </h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Convene recognizes that in some jurisdictions, human rights activities—including civil resistance , documentation of abuses, and communication among civil society actors—may be restricted or penalized under repressive  laws.
                        </p>
                    </section>



                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <Ban className="w-6 h-6 text-brand-600" /> 03.  Prohibited Conduct
                        </h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            You may not use Convene to:
                        </p>
                        <p className='text-slate-600 leading-relaxed text-lg'>
                            <ul className="mt-4 space-y-2 list-disc pl-6 pb-4 text-slate-600">
                                <li>Facilitate exploitation, coercion, or abuse, including human trafficking, forced labor, or sexual exploitation</li>
                                <li>Promote or engage in harassment, intimidation, or targeted abuse</li>
                                <li>Interfere with or undermine the security, integrity, or availability of the platform or other users’ access to it</li>
                                <li>Distribute malware, conduct phishing, or engage in other activities intended to compromise systems or data</li>
                                <li>Coordinate or support actions that violate internationally recognized human rights standards</li>
                            </ul>
                        </p>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            In assessing potential misuse, Convene will prioritize internationally recognized human rights principles, including those reflected in frameworks such as the Universal Declaration of Human Rights
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <Share2 className="w-6 h-6 text-brand-600" /> 04. Open Source & Contributions
                        </h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Convene is an open-source project. Modification and redistribution are encouraged under our license. We are a rights-centered platform built in partnership with human rights defenders and digital security experts.
                        </p>

                    </section>

                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mt-16 text-center">
                        <p className="text-sm text-slate-500 italic mb-4">
                            Last updated: March 10, 2026.
                        </p>
                        <p className="text-sm text-slate-400">
                            Convene is a project of Rights Action Lab, a non-profit 501(c)3 organization.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
