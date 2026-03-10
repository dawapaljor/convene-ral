import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Shield, Users, Zap } from 'lucide-react';

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqCategories = [
        {
            title: "General",
            icon: HelpCircle,
            questions: [
                {
                    q: "What is Convene?",
                    a: "Convene is a secure, browser-based messaging platform designed for human rights defenders, journalists, and anyone needing ephemeral communication without leaving a digital footprint."
                },
                {
                    q: "Is Convene really free?",
                    a: "Yes, our basic ephemeral rooms are completely free. We also offer specialized plans for NGOs and activists to support our mission-driven work."
                },
                {
                    q: "Do I need to create an account?",
                    a: "No. Convene is designed to be used without any signup or personal identifiers. Just create a room and share the link."
                }
            ]
        },
        {
            title: "Security",
            icon: Shield,
            questions: [
                {
                    q: "How is my data protected?",
                    a: "We use Signal-grade end-to-end encryption (E2EE). Your messages are encrypted on your device and can only be decrypted by the intended recipients."
                },
                {
                    q: "Do you keep any logs?",
                    a: "We do not store any message logs, IP addresses, or metadata. Once a room is deleted or expires, all associated data is permanently wiped from our servers."
                },
                {
                    q: "What happens if a room link is leaked?",
                    a: "Room links are ephemeral and expire. However, you should only share links with trusted individuals. For added security, you can set custom expiry times in our Pro plans."
                }
            ]
        },
        {
            title: "Usage",
            icon: Zap,
            questions: [
                {
                    q: "Do I need to install an app?",
                    a: "No. Convene works directly in your web browser on both desktop and mobile devices. No installation is required."
                },
                {
                    q: "Can I use it on my phone?",
                    a: "Absolutely. Convene is optimized for mobile browsers, ensuring security and ease of use on the go."
                },
                {
                    q: "What is the participant limit?",
                    a: "Free rooms support up to 10 participants. Our Pro and NGO plans offer higher limits for larger teams and organizations."
                }
            ]
        },
        {
            title: "NGO & Activists",
            icon: Users,
            questions: [
                {
                    q: "How can my organization use Convene?",
                    a: "Convene is ideal for sensitive field operations, coordination, and secure reporting. Our NGO/Activist plan provides dedicated support and advanced security features."
                },
                {
                    q: "Can we self-host Convene?",
                    a: "Yes, our NGO/Activist plan includes guidance and support for self-hosting Convene on your own infrastructure for maximum control."
                }
            ]
        }
    ];

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    let questionCounter = 0;

    return (
        <div className="pt-32 pb-16 bg-slate-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Frequently Asked <span className="text-brand-600">Questions</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Everything you need to know about Convene's security, privacy, and usage.
                    </p>
                </div>

                <div className="space-y-12">
                    {faqCategories.map((category, catIdx) => (
                        <div key={catIdx} className="animate-fade-in-up" style={{ animationDelay: `${catIdx * 0.1}s` }}>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-brand-50 rounded-lg">
                                    <category.icon className="w-6 h-6 text-brand-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">{category.title}</h2>
                            </div>
                            <div className="space-y-4">
                                {category.questions.map((item, qIdx) => {
                                    const currentIndex = questionCounter++;
                                    const isOpen = openIndex === currentIndex;
                                    return (
                                        <div
                                            key={qIdx}
                                            className={`bg-white rounded-2xl border transition-all duration-300 ${isOpen ? 'border-brand-500 shadow-lg' : 'border-slate-200 hover:border-brand-200'}`}
                                        >
                                            <button
                                                onClick={() => toggleAccordion(currentIndex)}
                                                className="w-full flex items-center justify-between p-6 text-left"
                                            >
                                                <span className="font-bold text-slate-900 pr-8">{item.q}</span>
                                                {isOpen ? (
                                                    <ChevronUp className="w-5 h-5 text-brand-600 flex-shrink-0" />
                                                ) : (
                                                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                                                )}
                                            </button>
                                            <div
                                                className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                            >
                                                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                                                    {item.a}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Still have questions? */}
                <div className="mt-20 p-8 bg-white rounded-3xl border border-slate-200 text-center shadow-sm">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Still have questions?</h2>
                    <p className="text-slate-600 mb-8">We're here to help you stay safe and secure.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="bg-brand-600 text-white font-bold py-3 px-8 rounded-full hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/20">
                            Contact Support
                        </button>
                        <button className="bg-white text-slate-900 font-bold py-3 px-8 rounded-full border border-slate-200 hover:bg-slate-50 transition-all">
                            Documentation
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
