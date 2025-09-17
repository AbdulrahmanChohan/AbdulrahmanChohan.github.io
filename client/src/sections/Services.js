import React, { useRef, useEffect } from 'react';

const services = [
  { id: 1, title: 'Content Management', desc: 'WordPress, Shopify, and custom CMS setup with easy dashboards and secure admin panels.' },
  { id: 2, title: 'Blog Setup', desc: 'Structured blog creation with categories, tags, and SEO-ready content structure.' },
  { id: 3, title: 'CMS Training & Support', desc: 'User training and manuals to help you easily manage your own content.' },
  { id: 4, title: 'Branding', desc: 'Logo design, typography, color systems and brand kits for a consistent online presence.' },
  { id: 5, title: 'Performance Optimization', desc: 'Speed improvements with caching, image optimization, and code-splitting.' },
  { id: 6, title: 'Custom Integrations', desc: 'API integrations, payment gateways and third-party service connections.' }
];

export default function Services() {
  const trackRef = useRef(null);
  const contentRef = useRef(null);
  const rafRef = useRef(null);
  const speedRef = useRef(0.45); // pixels per frame, tweakable
  const isPausedRef = useRef(false);
  const posRef = useRef(0);
  const copyWidthRef = useRef(0);

  useEffect(() => {
    const container = trackRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    // respect reduced motion
    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      speedRef.current = 0;
    }

    const calcWidths = () => {
      // width of single copy (we duplicated items in JSX)
      copyWidthRef.current = content.scrollWidth / 2 || 0;
      // ensure position is within bounds
      if (Math.abs(posRef.current) >= copyWidthRef.current && copyWidthRef.current > 0) {
        posRef.current = posRef.current % copyWidthRef.current;
      }
    };

    calcWidths();

    let rafId;
    const tick = () => {
      if (!isPausedRef.current && speedRef.current !== 0 && copyWidthRef.current > 0) {
        posRef.current -= speedRef.current;
        // wrap when a full copy scrolled
        if (Math.abs(posRef.current) >= copyWidthRef.current) {
          posRef.current += copyWidthRef.current;
        }
        content.style.transform = `translateX(${posRef.current}px)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    const onResize = () => {
      // small timeout to allow layout to settle
      setTimeout(calcWidths, 50);
    };
    window.addEventListener('resize', onResize);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const scroll = (dir = 'next') => {
    const node = trackRef.current;
    if (!node) return;
    const width = node.clientWidth;
    node.scrollBy({ left: dir === 'next' ? width * 0.6 : -width * 0.6, behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-[#07060a] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <span className="text-sm bg-white/6 text-white/80 px-3 py-1 rounded-full">Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3">What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Offer</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Comprehensive web development and design services tailored to your specific needs.</p>
        </div>

        <div className="relative -mx-6 lg:-mx-8">
          {/* full-bleed continuous track */}
          <div
            ref={trackRef}
            className="overflow-hidden no-scrollbar py-6 px-6"
            onMouseEnter={() => (isPausedRef.current = true)}
            onMouseLeave={() => (isPausedRef.current = false)}
            onTouchStart={() => (isPausedRef.current = true)}
            onTouchEnd={() => (isPausedRef.current = false)}
          >
            <div ref={contentRef} className="flex gap-6 will-change-transform">
              {[...services, ...services].map((s, idx) => (
                <div key={`${s.id}-${idx}`} className="min-w-[300px] sm:min-w-[360px] md:min-w-[420px] lg:min-w-[480px] bg-black/40 border border-white/5 rounded-xl p-6 flex-shrink-0">
                  <div className="w-12 h-12 rounded-md bg-gradient-to-br from-purple-700 to-pink-500 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 7h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-gray-300 mb-6">{s.desc}</p>
                  <button className="text-sm font-medium text-white/90 inline-flex items-center gap-2">Learn More <span>→</span></button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="inline-flex items-center gap-3 bg-white text-[#07060a] px-6 py-3 rounded-full font-medium shadow-sm">View All Services →</button>
        </div>
      </div>
    </section>
  );
}
