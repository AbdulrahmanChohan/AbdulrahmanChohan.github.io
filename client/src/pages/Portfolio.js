import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Services from '../sections/Services';
import Contact from '../sections/Contact';
import Footer from '../components/Footer';

const Portfolio = () => {
  return (
    <div className="min-h-screen theme-shell text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;
