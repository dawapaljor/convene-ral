import React from 'react';
import { HowItWorksSection } from '../components/HowItWorksSection';

const HowItWorks: React.FC = () => {
    return (
        <div className="pt-20 min-h-screen bg-white">
            <HowItWorksSection />
            
            {/* CTA Section - Keep this on the page level or in the component? 
                The user asked for "contents" as a separate component. 
                I'll put the CTA here in the page to keep the section clean. */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-brand-600 rounded-3xl p-12 text-center text-white shadow-xl shadow-brand-500/20">
                        <h2 className="text-3xl font-bold mb-6">Experience it yourself</h2>
                        <p className="text-brand-100 mb-10 text-lg">
                            No registration. No wait. Just secure, ephemeral communication in seconds.
                        </p>
                        <button className="bg-white text-brand-600 hover:bg-brand-50 font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:-translate-y-1">
                            Start a Room Now
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HowItWorks;
