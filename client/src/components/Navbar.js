import React, { useEffect, useState } from 'react';
import { scrollToSection as jumpToSection } from '../utils/scrollToSection';

const NAV_LINKS = [
  { id: 'hero', label: 'Home', key: 'home' },
  { id: 'services', label: 'Services', key: 'services' },
  { id: 'projects', label: 'Projects', key: 'projects' },
  { id: 'contact', label: 'Contact', key: 'contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('home');

  const scrollToSection = (sectionId, key) => {
    jumpToSection(sectionId);
    setIsOpen(false);
    if (key) setActive(key);
  };

  useEffect(() => {
    const sectionKeyById = {
      hero: 'home',
      services: 'services',
      projects: 'projects',
      contact: 'contact'
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          const key = sectionKeyById[visible[0].target.id];
          if (key) setActive(key);
        }
      },
      {
        root: null,
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0.2, 0.4, 0.6]
      }
    );

    NAV_LINKS.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 text-white glass-nav">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-16 flex items-center relative">
          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center w-10 h-10 rounded-md shadow-md"
              style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-2))' }}
            >
              {/* simple hex/diamond svg */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M12 2L20 7v10l-8 5-8-5V7l8-5z" fill="rgba(255,255,255,0.95)" />
              </svg>
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-semibold text-white tracking-wide">Abdulrahman</span>
              <span className="text-xs text-white/60">Full-Stack and Shopify Developer</span>
            </div>
          </div>

          {/* Center: Nav links */}
          <div className="hidden md:flex absolute left-0 right-0 justify-center pointer-events-auto">
            <div className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.key}
                  onClick={() => scrollToSection(link.id, link.key)}
                  className={`relative px-2 py-2 text-sm font-medium transition-colors duration-200 ${active === link.key ? 'text-white' : 'text-white/70 hover:text-white'}`}
                >
                  {link.label}
                  {/* active underline */}
                  {active === link.key && (
                    <span className="absolute left-0 right-0 -bottom-3 mx-auto w-12 h-0.5 rounded-full" style={{ backgroundColor: 'var(--accent-2)' }} />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Hire button + mobile toggle */}
          <div className="ml-auto flex items-center gap-4">
            <button
              onClick={() => scrollToSection('contact', 'contact')}
              className="hidden sm:inline-flex items-center gap-3 px-4 py-2 rounded-full btn-primary"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 7h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" stroke="#0b0b0d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 3v4" stroke="#0b0b0d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 3v4" stroke="#0b0b0d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Book a Call</span>
            </button>

            {/* mobile hamburger */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md text-white/90 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/70 border-t border-white/10 backdrop-blur-xl">
          <div className="px-4 py-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.key}
                onClick={() => scrollToSection(link.id, link.key)}
                className="block w-full text-left px-3 py-2 text-white/80 hover:text-white"
              >
                {link.label}
              </button>
            ))}
            <button onClick={() => scrollToSection('contact', 'contact')} className="mt-2 w-full px-4 py-2 rounded-full btn-primary">
              Book a Call
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
