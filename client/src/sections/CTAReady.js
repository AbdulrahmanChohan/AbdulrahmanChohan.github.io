import React from 'react';
import { scrollToSection } from '../utils/scrollToSection';

export default function CTAReady(){
  const jumpToContact = () => {
    scrollToSection('contact');
  };

  return (
    <section id="ready" className="py-16 bg-gradient-to-r from-purple-800 via-black to-pink-800 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center" data-reveal>
        <h3 className="text-2xl lg:text-3xl font-extrabold mb-4">Ready to Start Your Next Project?</h3>
        <p className="text-gray-300 mb-6">Let’s collaborate to bring your vision to life with cutting-edge technology and thoughtful design.</p>
        <button onClick={jumpToContact} className="px-6 py-3 rounded-full font-semibold btn-primary">Get In Touch</button>
      </div>
    </section>
  );
}
