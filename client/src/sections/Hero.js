import React from 'react';
import { scrollToSection } from '../utils/scrollToSection';

const PROFILE_IMAGE = `${process.env.PUBLIC_URL}/images/profile-portrait.jpg`;
const PROFILE_FALLBACK = 'https://via.placeholder.com/760x1024/0b1219/e6efff?text=Abdulrahman+Chohan';
const TRUST_BADGES = ['Full-Stack', 'Shopify', 'MERN', 'Laravel', 'Node.js', 'React'];

const Hero = () => {
  const handleImageError = (event) => {
    if (event.currentTarget.src !== PROFILE_FALLBACK) {
      event.currentTarget.src = PROFILE_FALLBACK;
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden text-white pt-32 pb-20 lg:pt-36 lg:pb-24">
      <div aria-hidden className="absolute inset-0 hero-mesh" />

      <div aria-hidden className="absolute inset-x-0 top-[18%] hidden lg:block pointer-events-none select-none">
        <p className="hero-faint-text">
          FULL STACK SHOPIFY DEVELOPER FULL STACK SHOPIFY DEVELOPER
        </p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="max-w-3xl" data-reveal>
            <span className="inline-flex section-chip px-3 py-1 rounded-full text-sm">
              Trusted By Founders In US and Europe
            </span>

            <h1 className="mt-7 text-[clamp(2.2rem,6vw,5.2rem)] font-extrabold leading-[1.02] tracking-[-0.03em]">
              Full-Stack and Shopify Developer
              <span className="block mt-5 text-[clamp(1.15rem,2.2vw,1.85rem)] text-cyan-200/95 font-semibold tracking-normal">
                High-converting digital products engineered for growth, speed, and reliability.
              </span>
            </h1>

            <p className="mt-7 text-gray-300 text-lg max-w-2xl">
              I design and develop premium web platforms, SaaS dashboards, and Shopify storefronts
              with precise UX and production-grade architecture.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-3 rounded-full px-6 py-3 font-semibold btn-primary"
              >
                Start Your Project
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-3 rounded-full px-6 py-3 font-semibold btn-secondary"
              >
                View Featured Work
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {TRUST_BADGES.map((item) => (
                <span key={item} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/14 text-white/90">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end" data-reveal data-reveal-delay="130">
            <div className="relative">
              <div className="portrait-shell w-[292px] h-[408px] md:w-[336px] md:h-[480px] lg:w-[376px] lg:h-[540px]">
                <img
                  src={PROFILE_IMAGE}
                  onError={handleImageError}
                  alt="Professional portrait of Abdulrahman Chohan"
                  className="portrait-image"
                />
              </div>

              <div className="absolute -left-6 -bottom-6 rounded-2xl border border-white/15 bg-[#0b0f14]/90 backdrop-blur-md px-4 py-3 shadow-2xl">
                <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-200/80">Availability</p>
                <p className="text-sm mt-1 text-white font-semibold">Open for May and June projects</p>
              </div>

              <div
                className="absolute -inset-8 -z-10 opacity-60 blur-3xl"
                style={{ background: 'radial-gradient(circle at 30% 20%, rgba(24, 220, 206, 0.45), transparent 55%)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
