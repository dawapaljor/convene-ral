import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import { HowItWorksSection } from '../components/HowItWorksSection';
import Testimonials from '../components/Testimonials';
import { Page } from '../App';

interface HomeProps {
    onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
    return (
        <div className="flex flex-col gap-0">
            <Hero onNavigate={onNavigate} />
            
            <div id="security-features">
                <div className="bg-white pt-24 pb-8">
                     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                            Security & <span className="text-brand-600">Features</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Built from the ground up to protect your privacy in the digital age.
                        </p>
                    </div>
                </div>
                <Features />
            </div>

            <div id="how-it-works">
                <HowItWorksSection />
            </div>

            <div id="testimonials">
                <Testimonials />
            </div>
        </div>
    );
};

export default Home;
