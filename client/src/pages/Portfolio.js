import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Process from '../sections/Process';
import Services from '../sections/Services';
import LaunchBanner from '../sections/LaunchBanner';
import Pricing from '../sections/Pricing';
import Testimonials from '../sections/Testimonials';
import LatestArticles from '../sections/LatestArticles';
import CTAReady from '../sections/CTAReady';
import Footer from '../components/Footer';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#07060a] text-white">
      <Navbar />
  <Hero />
  <About />
  <Process />
  <Services />
  <Projects />
  <LaunchBanner />
  <Pricing />
  <Testimonials />
  <LatestArticles />
  <CTAReady />
      <Footer />
    </div>
  );
};

export default Portfolio;
