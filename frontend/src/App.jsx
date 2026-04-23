import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
import AboutPage from './pages/Aboutpage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ProjectsPage from './pages/ProjectsPage';

function HomePage() {
  return (
    <div id="top" className="min-h-screen bg-gray-950 overflow-x-hidden">
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

export default function App() {
  return (
    <div className="bg-gray-950 overflow-x-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path='/projects' element={<ProjectsPage/>}/>
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
      </Routes>
    </div>
  );
}