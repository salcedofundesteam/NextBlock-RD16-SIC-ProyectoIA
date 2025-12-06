import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import VisualDemo from '../components/VisualDemo';
import Testimonials from '../components/Testimonials';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <VisualDemo />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default LandingPage;
