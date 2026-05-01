import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Shield, Zap, Users } from 'lucide-react';

import { Page } from '../App';

interface FAQProps {
    onNavigate: (page: Page) => void;
    onContactUs: () => void;
}

const FAQ: React.FC<FAQProps> = ({ onNavigate, onContactUs }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqCategories = [
        {
            title: "General",
            icon: HelpCircle,
            questions: [

                {
                    q: "Can we self-host Convene?",
                    a: "Yes, our Community and Enterprise plan includes guidance and support for self-hosting Convene on your own infrastructure for maximum control."
                },
                {
                    q: "Is Convene really free?",
                    a: (<>
                        Yes, our starter package gives you 24hrs of unlimited access to a secure, ephemeral room completely free. All your messages (older than 24 hours) in the room are deleted automatically along with the room. If you would like a new room, please contact us <button onClick={(e) => { e.preventDefault(); onContactUs(); }} className="text-brand-600 hover:underline font-medium inline-flex items-center">here</button>. Note that we also offer specialized plans for individuals and organizations to support your  mission-driven work.
                    </>)
                },
                {
                    q: "Do I need to create an account?",
                    a: (<>
                        No. Convene is designed to be used without any signup or personal identifiers. Just create a room and share the link. Get started <button onClick={() => onNavigate('pricing')} className="text-brand-600 hover:underline font-medium inline-flex items-center">here.</button>
                    </>)
                },
                {
                    q: "How can my organization use Convene?",
                    a: "Convene is built to support secure private communications, information sharing and human rights documentation. It has many use cases – training platform, chat space during a gathering or conference, secure dropbox for sources to journalists, classroom aid, information sharing in heavily censored areas, and more. Our specialized plans provide dedicated support and advanced customizable security features, designed to meet the unique demands of your organization. "
                },

            ]
        },
        {
            title: "Security",
            icon: Shield,
            questions: [
                {
                    q: "How is my data protected?",
                    a: (
                        <>
                            We use Signal-grade End-to-End encryption (E2EE). Your messages are encrypted on your device and can only be decrypted by the intended recipients. Read our privacy policy <button onClick={() => onNavigate('privacy')} className="text-brand-600 hover:underline font-medium inline-flex items-center"> here.</button>
                        </>
                    )
                },
                {
                    q: "What happens if a room link is leaked?",
                    a: "Room links are as private as the platform you share it in. However, Convene has additional security and room moderation capabilities such as allowing the room admin to lock the room (ensuring no one joins after your trusted contact does), kick out any suspicious users, set a time period for disappearing messages, etc. Convene rooms are designed to support anonymity as each user is automatically given a random guest avatar and nickname."
                },
                {
                    q: "Do you keep any logs?",
                    a: (
                        <>
                            We do not store any message logs, IP addresses, or metadata. Once a room is deleted or expires, all associated data is permanently wiped from our servers. Read our privacy policy <button onClick={() => onNavigate('privacy')} className="text-brand-600 hover:underline font-medium inline-flex items-center">here.</button>
                        </>
                    )
                },

            ]
        },
        {
            title: "Usage",
            icon: Zap,
            questions: [
                {
                    q: "Do I need to install an app?",
                    a: (
                        <>
                            No. Convene works directly in your web browser on both desktop and mobile devices. No installation is required. Get Started <button onClick={() => onNavigate('pricing')} className="text-brand-600 hover:underline font-medium inline-flex items-center"> here. </button>
                        </>
                    )
                },
                {
                    q: "Can I use it on my phone?",
                    a: "Convene is optimized for mobile browsers, ensuring security and ease of use on the go."
                },

                {
                    q: "Is there a limit on the number of participants?",
                    a: (
                        <>
                            There is no limit on the number of participants. Our Community and Enterprise <button onClick={() => onNavigate('pricing')} className="text-brand-600 hover:underline font-medium inline-flex items-center"> plans </button> offer more robust features for larger teams and organizations.
                        </>
                    )
                }
            ]
        },

        {
            title: "Non Profit Organizations and Community Groups",
            icon: Users,
            questions: [
                {
                    q: "How can my organization use Convene?",
                    a: "Convene is ideal for your organization’s communication needs where your team needs access to a browser based ephemeral messaging system without sharing their personal identification. It is currently used by journalists, human rights defenders and digital security trainers. Our specialized plans provides dedicated support and advanced security features that you can customize based on your organization’s needs."
                },
                {
                    q: "Can we self-host Convene?",
                    a: "Yes, our specialized plan includes guidance and support for self-hosting Convene on your own infrastructure for maximum control."
                },

                {
                    q: "What is the participant limit?",
                    a: "Free rooms support up to 10 participants. Our Pro and NGO plans offer higher limits for larger teams and organizations."
                },
                {
                    q: " What happens if a room link is leaked?",
                    a: "Room links are as private as the platform you share it in. However, Convene has additional security and room moderation capabilities such as allowing the room admin to lock the room (ensuring no one joins after your trusted contact does), kick out any suspicious users, setting time period for disappearing messages, etc. In addition, Convene rooms are designed to support anonymity as each user is automatically given a random guest avatar and nickname."
                },

            ]
        },

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
                        <button onClick={(e) => { e.preventDefault(); onContactUs(); }} className="bg-brand-600 text-white font-bold py-3 px-8 rounded-full hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/20">
                            Contact Support
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
