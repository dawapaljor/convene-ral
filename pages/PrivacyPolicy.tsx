import React from 'react';
import { EyeOff, Lock, Database } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="pt-32 pb-16 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Privacy <span className="text-brand-600">Policy</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        We don't just protect your data; we ensure we never have it.
                    </p>
                </div>

                <div className="prose prose-slate max-w-none space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <EyeOff className="w-6 h-6 text-brand-600" /> 01. Zero Data Collection
                        </h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Convene does not collect, store, or profile any personal information. This means:
                        </p>
                        <ul className="mt-4 space-y-2 list-disc pl-6 text-slate-600">
                            <li>No email addresses or phone numbers required.</li>
                            <li>No cookies or digital trackers.</li>
                            <li>No IP address logging.</li>
                            <li>No analytical profiling.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <Lock className="w-6 h-6 text-brand-600" /> 02. End-to-End Encryption
                        </h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            All communication within Convene is encrypted on your device before it is sent. Only the participants in your room have the keys to decrypt and read your messages. We cannot access your conversations even if we were compelled to.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <Database className="w-6 h-6 text-brand-600" /> 03. Ephemeral Storage
                        </h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Our servers act only as a temporary conduit for encrypted traffic. Once a room is closed or its timer expires, all data associated with that session is permanently wiped from our server's RAM. No digital breadcrumbs remain.
                        </p>
                    </section>



                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mt-16">
                        <p className="text-sm text-slate-500 text-center italic">
                            Last updated: March 10, 2026. This policy is as simple as our architecture: if we don't have it, we can't lose it, and we can't share it.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
