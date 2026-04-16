import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#07060a] text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: image card with badge */}
          <div className="relative flex justify-center lg:justify-start"> 
            <div className="relative">
              {/* image container */}
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-xl bg-gradient-to-br from-purple-900/30 to-transparent p-3 shadow-2xl">
                <div className="w-full h-full rounded-lg overflow-hidden bg-black/40 flex items-center justify-center">
                  <img
                    src="https://via.placeholder.com/640x640.png?text=Profile"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-lg border-4 border-black/60"
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
          <div className="pt-6 lg:pt-0">
            <div className="inline-block mb-4">
              <span className="text-sm bg-white/6 text-white/80 px-3 py-1 rounded-full">About Me</span>
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
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-3 bg-white text-[#07060a] px-5 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition"
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
