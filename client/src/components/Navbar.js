import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('home');

  const links = [
  { id: 'hero', label: 'Home', key: 'home' },
  { id: 'about', label: 'About Me', key: 'about' },
  { id: 'projects', label: 'Portfolio', key: 'portfolio' },
  { id: 'services', label: 'Services', key: 'services' }
  ];

  const scrollToSection = (sectionId, key) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
    if (key) setActive(key);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#07060a] text-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-16 flex items-center relative">
          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-md bg-gradient-to-br from-purple-500 to-pink-500 shadow-md">
              {/* simple hex/diamond svg */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M12 2L20 7v10l-8 5-8-5V7l8-5z" fill="rgba(255,255,255,0.95)" />
              </svg>
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-semibold text-white">Abdulrahman</span>
              <span className="text-xs text-white/60">Code Meets Creativity.</span>
            </div>
          </div>

          {/* Center: Nav links */}
          <div className="hidden md:flex absolute left-0 right-0 justify-center pointer-events-auto">
            <div className="flex items-center gap-8">
              {links.map((link) => (
                <button
                  key={link.key}
                  onClick={() => scrollToSection(link.id, link.key)}
                  className={`relative px-2 py-2 text-sm font-medium transition-colors duration-200 ${active === link.key ? 'text-white' : 'text-white/70 hover:text-white'}`}
                >
                  {link.label}
                  {/* active underline */}
                  {active === link.key && (
                    <span className="absolute left-0 right-0 -bottom-3 mx-auto w-12 h-0.5 bg-white rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Hire button + mobile toggle */}
          <div className="ml-auto flex items-center gap-4">
            <button
              onClick={() => alert('Open contact or hiring flow')}
              className="hidden sm:inline-flex items-center gap-3 bg-white text-[#0b0b0d] px-4 py-2 rounded-full font-medium shadow-sm hover:shadow-md transition"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 7h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" stroke="#0b0b0d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 3v4" stroke="#0b0b0d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 3v4" stroke="#0b0b0d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Hire Me</span>
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

          {/* apply scrollbar color (replace decorative stripe) */}
          <style>{`
            /* WebKit (Chrome, Edge, Safari) */
            :root::-webkit-scrollbar { width: 10px; height: 10px; }
            :root::-webkit-scrollbar-track { background: transparent; }
            :root::-webkit-scrollbar-thumb {
              background: linear-gradient(180deg, #7c3aed, #ec4899);
              border-radius: 9999px;
              border: 2px solid rgba(255,255,255,0.02);
            }

            /* Firefox */
            :root { scrollbar-width: thin; scrollbar-color: #7c3aed transparent; }
          `}</style>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#07060a] border-t border-white/5">
          <div className="px-4 py-3 space-y-1">
            {links.map((link) => (
              <button
                key={link.key}
                onClick={() => scrollToSection(link.id, link.key)}
                className="block w-full text-left px-3 py-2 text-white/80 hover:text-white"
              >
                {link.label}
              </button>
            ))}
            <button onClick={() => alert('Open contact or hiring flow')} className="mt-2 w-full bg-white text-[#0b0b0d] px-4 py-2 rounded-full font-medium">
              Hire Me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
