import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TechEcosystem from './components/TechEcosystem';
import CoreCapabilities from './components/CoreCapabilities';
import WhyCognexon from './components/WhyCognexon';
import ExecutionFramework from './components/ExecutionFramework';
import ProductsShowcase from './components/ProductsShowcase';
import FeaturedProjects from './components/FeaturedProjects';
import AiAdvantageBand from './components/AiAdvantageBand';
import EngagementModels from './components/EngagementModels';
import FaqSection from './components/FaqSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-gray-950 overflow-x-hidden">
      <Header />
      <Hero />
      <TechEcosystem />
      <CoreCapabilities />
      <WhyCognexon />
      <ExecutionFramework />
      <ProductsShowcase />
      <FeaturedProjects />
      <AiAdvantageBand />
      <EngagementModels />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
}
