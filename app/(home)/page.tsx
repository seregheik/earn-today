import React from 'react';
import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import FeaturesSection from '../components/landing/FeaturesSection';
import WhyChooseSection from '../components/landing/WhyChooseSection';
import HowItWorksSection from '../components/landing/HowItWorksSection';
import FooterCTA from '../components/landing/FooterCTA';

export const metadata = {
  title: 'EarnToday | Get tasks done & start earning',
  description: 'Find trusted people to get things done & Turn everyday tasks into income with EarnToday.',
};

const Homepage = () => {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-20">
                <HeroSection />
                <FeaturesSection />
                <WhyChooseSection />
                <HowItWorksSection />
            </div>
            <FooterCTA />
        </main>
    );
};

export default Homepage;