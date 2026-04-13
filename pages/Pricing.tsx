import { PricingSection } from '../components/PricingSection';
import { Page } from '../App';

interface PricingProps {
    onNavigate: (page: Page, plan?: string) => void;
}

const Pricing: React.FC<PricingProps> = ({ onNavigate }) => {
    return (
        <div className="min-h-screen bg-white">
            <PricingSection onNavigate={onNavigate} />
        </div>
    );
};

export default Pricing;
