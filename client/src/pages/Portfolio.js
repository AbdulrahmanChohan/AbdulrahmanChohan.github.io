import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import Projects from '../sections/Projects';
import Services from '../sections/Services';
import Contact from '../sections/Contact';
import Footer from '../components/Footer';

const Portfolio = () => {
  return (
    <div className="min-h-screen theme-shell text-white">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;
