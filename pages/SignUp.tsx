import React, { useState } from 'react';
import { ArrowLeft, Check, ShieldCheck, Mail, Building, LayoutGrid } from 'lucide-react';
import { Page } from '../App';

interface SignUpProps {
    onNavigate: (page: Page) => void;
    initialPlan?: string;
}

const PLANS = [
    { id: 'free', name: 'Starter', price: '$0' },
    { id: 'pro', name: 'Community', price: '$29' },
    { id: 'enterprise', name: 'Enterprise', price: 'Custom' }
];

const SignUp: React.FC<SignUpProps> = ({ onNavigate, initialPlan = 'free' }) => {
    const [selectedPlan, setSelectedPlan] = useState(initialPlan.toLowerCase());
    const [formData, setFormData] = useState({
        orgName: '',
        email: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        // Simulate API call
        setTimeout(() => {
            alert('Request received! We will contact you shortly.');
            onNavigate('home');
        }, 1500);
    };

    return (
        <div className="min-h-screen pt-24 pb-20 bg-slate-50 relative overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-brand-100 rounded-full blur-[120px] opacity-50 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-blue-100 rounded-full blur-[100px] opacity-40 translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <button
                    onClick={() => onNavigate('pricing')}
                    className="flex items-center gap-2 text-slate-500 hover:text-brand-600 transition-colors mb-8 font-medium group"
                >
                    <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                    Back to Pricing
                </button>

                <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden flex flex-col md:flex-row">
                    {/* Left Side: Summary */}
                    <div className="md:w-5/12 bg-slate-900 p-8 md:p-12 text-white flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 bg-brand-500 rounded-2xl flex items-center justify-center mb-6">
                                <ShieldCheck className="w-7 h-7 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4 tracking-tight">Deploy Convene</h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                Secure your organization's communications in minutes with our zero-knowledge infra.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    '100% End-to-End Encrypted',
                                    'Zero Knowledge Storage',
                                    'Browser-Native (No Apps)',
                                    'Self-Destructing Rooms'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                                        <Check className="w-4 h-4 text-brand-400" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>


                    </div>

                    {/* Right Side: Form */}
                    <div className="md:w-7/12 p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-slate-900 mb-8">Get your own Convene</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Org Name */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                                    <Building size={16} className="text-brand-500" />
                                    Organisation Name
                                </label>
                                <input
                                    required
                                    type="text"
                                    placeholder="e.g. Acme Rights"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                                    value={formData.orgName}
                                    onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                                    <Mail size={16} className="text-brand-500" />
                                    Email Address
                                </label>
                                <input
                                    required
                                    type="email"
                                    placeholder="you@organisation.com"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            {/* Plan Selection */}
                            <div className="pt-4">
                                <label className="block text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
                                    <LayoutGrid size={16} className="text-brand-500" />
                                    Select Your Plan
                                </label>
                                <div className="grid grid-cols-1 gap-3">
                                    {PLANS.map((plan) => (
                                        <label
                                            key={plan.id}
                                            className={`relative flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedPlan === plan.id
                                                ? 'border-brand-500 bg-brand-50/50 shadow-sm'
                                                : 'border-slate-100 hover:border-slate-200 bg-white'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <input
                                                    type="radio"
                                                    name="plan"
                                                    value={plan.id}
                                                    checked={selectedPlan === plan.id}
                                                    onChange={() => setSelectedPlan(plan.id)}
                                                    className="w-4 h-4 text-brand-600 border-slate-300 focus:ring-brand-500 h-0 w-0 opacity-0 absolute"
                                                />
                                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${selectedPlan === plan.id ? 'border-brand-500 bg-brand-500' : 'border-slate-300'
                                                    }`}>
                                                    {selectedPlan === plan.id && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                                                </div>
                                                <span className={`font-bold ${selectedPlan === plan.id ? 'text-brand-900' : 'text-slate-700'}`}>
                                                    {plan.name}
                                                </span>
                                            </div>
                                            <span className="text-sm font-bold text-slate-500">{plan.price}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitted}
                                className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg active:scale-95 flex items-center justify-center gap-3 ${isSubmitted ? 'bg-emerald-500' : 'bg-brand-600 hover:bg-brand-700 shadow-brand-500/30'
                                    }`}
                            >
                                {isSubmitted ? (
                                    <>
                                        <Check size={20} />
                                        Sent Successfully
                                    </>
                                ) : 'Complete Sign Up'}
                            </button>
                            <p className="text-[11px] text-center text-slate-400 mt-4 leading-relaxed">
                                By clicking, you agree to our Terms of Service and Privacy Policy. <br /> No credit card required to start trial.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
