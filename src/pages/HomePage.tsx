import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';
import { Benefits } from '../components/Benefits';
import { CTA } from '../components/CTA';
import { Pricing } from '../components/Pricing';
import { StackedCards } from '../components/StackedCards';
import { AddExchangeSend } from '../components/AddExchangeSend';
import { useNavigate } from 'react-router';

export function HomePage() {
    const navigate = useNavigate();

    return (
        <>
            <Hero onGetStarted={() => navigate('/contact')} />
            <AddExchangeSend />
            <Features />
            <StackedCards />
            <HowItWorks />
            <Benefits />
            <Pricing />
            <CTA onGetStarted={() => navigate('/contact')} />
        </>
    );
}
