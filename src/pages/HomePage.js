import React from 'react';
import HeroSection from '../components/HeroSection';
import QuickIntroduction from '../components/QuickIntroduction';
import CTAButton from '../components/CTAButton';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <QuickIntroduction />
      <CTAButton />
    </div>
  );
};

export default HomePage;
