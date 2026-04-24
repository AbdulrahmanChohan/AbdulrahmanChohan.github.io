import React from 'react';
import { scrollToSection } from '../utils/scrollToSection';

const PROFILE_IMAGE = `${process.env.PUBLIC_URL}/images/profile-portrait.jpg`;
const PROFILE_FALLBACK = 'https://via.placeholder.com/760x1024/0b1219/e6efff?text=Abdulrahman+Chohan';

const About = () => {
  const handleImageError = (event) => {
    if (event.currentTarget.src !== PROFILE_FALLBACK) {
      event.currentTarget.src = PROFILE_FALLBACK;
    }
  };

  return (
    <section id="about" className="py-24 bg-[#07060a] text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: image card with badge */}
          <div className="relative flex justify-center lg:justify-start" data-reveal> 
            <div className="relative">
              {/* image container */}
              <div className="w-80 h-[430px] md:w-96 md:h-[520px] rounded-[30px] p-3 portrait-shell">
                <div className="w-full h-full rounded-[22px] overflow-hidden bg-black/40 flex items-center justify-center">
                  <img
                    src={PROFILE_IMAGE}
                    onError={handleImageError}
                    alt="Profile"
                    className="w-full h-full object-cover portrait-image"
                  />
                </div>
              </div>

              {/* circular badge */}
              <div className="absolute -top-6 -left-6 w-24 h-24 md:w-28 md:h-28 flex items-center justify-center rounded-full" aria-hidden>
                <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-600 to-pink-500 p-[6px] shadow-lg">
                  <div className="w-full h-full rounded-full bg-[#07060a] flex flex-col items-center justify-center text-center">
                    <span className="text-white font-extrabold text-lg md:text-xl">50+</span>
                    <span className="text-xs text-white/70">Completed<br/>Projects</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right: text content */}
          <div className="pt-6 lg:pt-0" data-reveal data-reveal-delay="120">
            <div className="inline-block mb-4">
              <span className="text-sm section-chip px-3 py-1 rounded-full">About Me</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Crafting Digital Experiences
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Since 2022</span>
            </h2>

            <p className="text-gray-300 mb-6 leading-relaxed">
              I’m a passionate Web Developer who's deeply committed to bringing ideas to life through thoughtful, user-centered design. Every project I take on is built with care, creativity, and a clear understanding of what the client truly needs. My goal is always to create websites that not only look great but also work smoothly and deliver results.
            </p>

            <p className="text-gray-300 mb-8 leading-relaxed">
              What truly drives me is the satisfaction of solving problems and making a real impact for the people I work with. I believe in clear communication, long term value, and building strong relationships through trust and reliability. I also enjoy sharing what I learn along the way and helping others grow through content on social media.
            </p>

            <div>
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full font-medium transition btn-primary"
              >
                Learn More
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14" stroke="#07060a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 5l7 7-7 7" stroke="#07060a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
