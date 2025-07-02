
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import TechStack from '../components/TechStack';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Navigation - fixed at top */}
      <Navigation />
      
      {/* Main content sections */}
      <main>
        {/* Hero section - full viewport height */}
        <Hero />
        
        {/* About section */}
        <About />
        
        {/* Tech stack section (the "That" section) */}
        <TechStack />
        
        {/* Contact section */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
