import { PricingSection } from '../components/PricingSection';
import { Page } from '../App';

interface PricingProps {
    onNavigate: (page: Page, plan?: string) => void;
    onContactUs: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onNavigate, onContactUs }) => {
    return (
        <div className="min-h-screen bg-white">
            <PricingSection onNavigate={onNavigate} onContactUs={onContactUs} />
        </div>
    );
};

export default Pricing;
