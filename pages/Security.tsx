import React from 'react';
import { Shield, Lock, EyeOff, Server, HardDrive, RefreshCcw, Search, Users, ExternalLink, Mail, Zap, Trash2 } from 'lucide-react';

interface SecurityProps {
    onContactUs: () => void;
}

const Security: React.FC<SecurityProps> = ({ onContactUs }) => {
    return (
        <div className="pt-24 pb-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Header */}
                <div className="mb-16 text-center animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider mb-6">
                        <Shield className="w-3 h-3" />
                        Trusted by Rights Defenders
                    </div>
                     <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Privacy-Centered <span className="text-brand-600">Security</span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        Convene creates places where you can be you with no strings attached—no personal phone numbers or email addresses are required.
                    </p>
                </div>

                {/* Section: Privacy-Centered Simplified */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                    <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <Users className="w-8 h-8 text-brand-600 mb-4" />
                        <h3 className="font-bold text-slate-900 mb-2">Free to Be You</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            Represented by account IDs and QR codes. Connect in seconds by link or scan.
                        </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <EyeOff className="w-8 h-8 text-brand-600 mb-4" />
                        <h3 className="font-bold text-slate-900 mb-2">No Strings Attached</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            No email or phone number needed. Automated usernames encourage pseudonyms.
                        </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <Search className="w-8 h-8 text-brand-600 mb-4" />
                        <h3 className="font-bold text-slate-900 mb-2">No Data Mining</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            We don't mine for data. GDPR compliant processing for legitimate purposes only.
                        </p>
                    </div>
                </div>

                {/* Section: Serious About Security */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px flex-grow bg-slate-100"></div>
                        <h2 className="text-2xl font-bold text-slate-900 shrink-0">Serious About Security</h2>
                        <div className="h-px flex-grow bg-slate-100"></div>
                    </div>
                    
                    <p className="text-slate-600 mb-12">
                        Convene is designed to ensure the safety of every individual. Our architecture is built to minimize risk and maximize protection in hostile environments.
                    </p>

                    <div className="space-y-12">
                        <div className="flex gap-6">
                            <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center shrink-0">
                                <Lock className="w-6 h-6 text-brand-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2">End-to-End Encryption</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Convene is built on the Matrix protocol, an open network for secure, decentralized communication. Matrix’s state-of-the-art end-to-end encryption offers security on the device and in transit. Keys are generated and stored in the user’s local browser storage. All messages are encrypted and decrypted in-memory in the Convene web app running in the browser.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center shrink-0">
                                <Server className="w-6 h-6 text-brand-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2">Secure Infrastructure</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    The Convene team has experience deploying on Amazon Web Services (ISO certified for Cloud Security and Data Protection), Microsoft Azure Cloud, and other independent providers. We use web application firewalls to secure our services and can deploy solutions in other environment as requested.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center shrink-0">
                                <HardDrive className="w-6 h-6 text-brand-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2">Data Storage & Sovereignty</h3>
                                <div className="text-slate-600 leading-relaxed space-y-4">
                                    <p>
                                        Servers are currently hosted in the United States or Europe. We utilize the Amazon Cloudfront CDN, which may cache data in centers between the service and the user.
                                    </p>
                                    <p>
                                        <strong>Encryption:</strong> All message and media content is encrypted using Matrix E2EE keys. These keys are <strong>NOT</strong> stored in any server or data center—they reside only on the user's device or browser.
                                    </p>
                                    <p>
                                        <strong>Deletion:</strong> When rooms are deleted, all content and metadata are wiped from the servers. When a user closes their browser tab or logs out, all local key and message data is deleted.
                                    </p>
                                    <p>
                                        <strong>Logs:</strong> No full IP addresses are logged, only country-level info. Access logs are kept for the minimal amount of time necessary to operate and are never shared.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Grid Section: Audits, Accountability, etc */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                     <div className="p-8 rounded-3xl border border-slate-100 shadow-sm">
                        <RefreshCcw className="w-8 h-8 text-brand-600 mb-4" />
                        <h3 className="text-lg font-bold mb-2">Communication & Auth</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            All internal and external communications are encrypted (TLS, VPN, SSH, OpenPGP, Signal, Matrix). All services require two-factor authentication (2FA) with hardware tokens from authorized devices.
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl border border-slate-100 shadow-sm">
                        <ExternalLink className="w-8 h-8 text-brand-600 mb-4" />
                        <h3 className="text-lg font-bold mb-2">Open & Accountable</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            The code is open source under the AGPL v3.0, available on Gitlab under the “Keanu” codename. 
                             <a href="https://gitlab.com/keanuapp/" target="_blank" rel="noopener noreferrer" className="text-brand-600 block mt-2 hover:underline">View on Gitlab &rarr;</a>
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl border border-slate-100 shadow-sm">
                        <Shield className="w-8 h-8 text-brand-600 mb-4" />
                        <h3 className="text-lg font-bold mb-2">Security Audits</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            We use reputable third-party penetration testing teams for annual security audits. Reports are available upon request to ensure transparency and accountability.
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl border border-slate-100 shadow-sm">
                        <Zap className="w-8 h-8 text-brand-600 mb-4" />
                        <h3 className="text-lg font-bold mb-2">Anti-Censorship</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Services can be accessed through alternate and “mirror” domains to resist traffic surveillance and blocking in highly censored environments.
                        </p>
                    </div>
                </div>

                {/* Final Callouts */}
                <div className="space-y-8 mb-20">
                     <div className="flex items-start gap-4">
                        <Trash2 className="w-6 h-6 text-brand-600 shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold">Self-Destructing</h3>
                            <p className="text-slate-600">Easily delete rooms, wipe messages, or all information from the app with one tap.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Users className="w-6 h-6 text-brand-600 shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold">Trusted Relationships</h3>
                            <p className="text-slate-600">Real identities aren’t linked. We deploy various methods for users to be confident that connections are who they expect.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Shield className="w-6 h-6 text-brand-600 shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold">Rights Defender Centered</h3>
                            <p className="text-slate-600">Collaborating deeply with leading human rights and humanitarian organizations to uphold human dignity.</p>
                        </div>
                    </div>
                </div>

                {/* Contact Banner */}
                <div className="p-10 rounded-[2.5rem] bg-brand-600 text-white text-center relative overflow-hidden">
                    <h2 className="text-3xl font-bold mb-4 relative z-10">Make it your own.</h2>
                    <p className="text-brand-100 mb-8 max-w-xl mx-auto relative z-10">
                        We’ll work with you to customize, brand, and deploy an instance of the service. All code and infrastructure is open-source and easy to customize.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                         <button
                            type="button"
                            onClick={onContactUs}
                            className="bg-white text-brand-600 px-8 py-3 rounded-xl font-bold hover:bg-brand-50 transition-colors flex items-center gap-2"
                         >
                            <Mail className="w-4 h-4" /> Contact Us
                        </button>
                    </div>
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                </div>
            </div>
        </div>
    );
};

export default Security;
