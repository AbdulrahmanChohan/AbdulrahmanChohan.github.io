import React, { useEffect, useState, useRef } from 'react';

const Icons = {
  discovery: (
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="11" cy="11" r="5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  planning: (
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 11h6M9 15h6M7 7h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  design: (
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3l9 6-9 6-9-6 9-6z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 21V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  development: (
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 18l6-6-6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  testing: (
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 2v11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 2v11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 13h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  launch: (
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
};

const steps = [
  { id: 1, key: 'discovery', icon: 'discovery', title: 'Discovery', subtitle: 'Understanding goals and requirements', points: ['Initial consultation','Project requirements analysis','Market research','Competitor analysis','Goal setting'], gradient: 'linear-gradient(180deg,#0e1a23,#0b1118)', accent: '#6ccfe8' },
  { id: 2, key: 'planning', icon: 'planning', title: 'Planning', subtitle: 'Creating a detailed roadmap and strategy for your project.', points: ['Project scope definition','Timeline creation','Resource allocation','Technology selection','Risk assessment'], gradient: 'linear-gradient(180deg,#0f2530,#0b141b)', accent: '#5edacb' },
  { id: 3, key: 'design', icon: 'design', title: 'Design', subtitle: 'Crafting visually stunning and user-friendly interfaces.', points: ['Wireframing','UI/UX design','Prototype development','Client feedback integration','Design finalization'], gradient: 'linear-gradient(180deg,#1b2330,#111721)', accent: '#9ddffc' },
  { id: 4, key: 'development', icon: 'development', title: 'Development', subtitle: 'Building robust and scalable solutions with modern technologies.', points: ['Frontend development','Backend implementation','Database integration','API development','Code optimization'], gradient: 'linear-gradient(180deg,#17202a,#0e141c)', accent: '#83d7f4' },
  { id: 5, key: 'testing', icon: 'testing', title: 'Testing', subtitle: 'Ensuring functionality, performance, and compatibility across devices.', points: ['Functionality testing','Performance optimization','Cross-browser compatibility','Mobile responsiveness','Security testing'], gradient: 'linear-gradient(180deg,#0d2424,#081416)', accent: '#63d4c5' },
  { id: 6, key: 'launch', icon: 'launch', title: 'Launch', subtitle: 'Deploying your project with a smooth transition to the live environment.', points: ['Final review','Deployment preparation','Go-live execution','Post-launch monitoring','Client training'], gradient: 'linear-gradient(180deg,#10212d,#0a131a)', accent: '#8ddcf7' }
];

export default function Process() {
  const [active, setActive] = useState(2); // default to Planning
  const [animKey, setAnimKey] = useState(0);
  const intervalRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return undefined;

    startInterval();
    return stopInterval;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startInterval() {
    stopInterval();
    intervalRef.current = setInterval(() => {
      setActive((prev) => {
        const next = prev >= steps.length ? 1 : prev + 1;
        setAnimKey((k) => k + 1);
        return next;
      });
    }, 15000);
  }

  function stopInterval() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  const select = (id) => {
    // animate transition out/in
    setAnimKey((k) => k + 1);
    setActive(id);
    // restart timer
    startInterval();
  };

  const current = steps.find((s) => s.id === active) || steps[0];

  const prefersReduced = (typeof window !== 'undefined') && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <section id="process" ref={sectionRef} className="py-20 bg-[#07060a] text-white relative" onMouseEnter={() => stopInterval()} onMouseLeave={() => startInterval()}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-8" data-reveal>
          <div className="inline-block mb-4">
            <span className="text-sm section-chip px-3 py-1 rounded-full">My Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3">How I <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Work</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">A structured approach to delivering exceptional results for your project.</p>
        </div>

        {/* timeline with connecting line */}
        <div className="relative w-full mb-12" data-reveal data-reveal-delay="80">
          <div className="absolute left-8 right-8 top-1/2 transform -translate-y-1/2 h-[1px] bg-white/10 hidden md:block" />
          <div className="flex items-center justify-between gap-4 md:gap-8 px-6 md:px-28 relative z-10">
            {steps.map((s) => {
              const completed = s.id < active;
              const isActive = s.id === active;
              return (
                <div key={s.id} className="flex-1 flex flex-col items-center text-center">
                      <button
                        onClick={() => select(s.id)}
                        aria-label={s.title}
                        className={`relative flex items-center justify-center rounded-full transition-all duration-300 ${isActive ? 'w-14 h-14 bg-white text-black scale-105 shadow-xl' : completed ? 'w-10 h-10 bg-transparent text-white/80 border border-white/20' : 'w-10 h-10 bg-transparent text-white/70 border border-white/10'}`}
                      >
                        {completed && !isActive ? (
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ) : (
                          // icon for the step
                          Icons[s.key]
                        )}
                      </button>
                  <div className="text-xs text-white/60 mt-3">{s.title}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-reveal data-reveal-delay="120">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(180deg,#14323d,#0d1b22)' }}>
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 7h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" stroke="rgba(255,255,255,0.95)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-white/60">Step • {String(current.id).padStart(2, '0')}</div>
                <h3 className="text-3xl md:text-4xl font-extrabold">{current.title}</h3>
              </div>
            </div>

            <p className="text-gray-300 mb-6 text-lg">{current.subtitle}</p>

            <ul className="space-y-4 text-gray-300 mt-6">
              {current.points.map((p, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-white/60 mt-1">›</span>
                  <span className="text-gray-300">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: animated visual card */}
          <div className="relative" data-reveal data-reveal-delay="160">
            <div
              key={animKey}
              className={`rounded-[18px] p-16 border border-white/6 min-h-[320px] flex items-center justify-center overflow-hidden transform transition-all duration-700 ${prefersReduced ? '' : 'opacity-0 translate-y-6 animate-in'}`}
              style={{ background: current.gradient }}
            >
              {/* decorative soft circles with accent color */}
              <div className="absolute -left-10 -top-10 w-48 h-48 rounded-full opacity-12" style={{ background: `radial-gradient(circle, ${current.accent}, transparent)` }} />
              <div className="absolute right-10 bottom-10 w-44 h-44 rounded-full opacity-10" style={{ background: `radial-gradient(circle, ${current.accent}, transparent)` }} />

              <div className="text-center z-10">
                <div className="w-20 h-20 rounded-full bg-black/50 flex items-center justify-center mx-auto mb-4">
                  {Icons[current.key]}
                </div>
                <h4 className="text-xl font-bold mb-2">{current.title}</h4>
                <p className="text-gray-300 max-w-md mx-auto">{current.subtitle}</p>
              </div>
            </div>

            {/* floating step number */}
            <div className="absolute -right-8 -bottom-8 w-16 h-16 rounded-md bg-black/70 border border-white/8 flex items-center justify-center shadow-xl">
              <span className="text-2xl font-extrabold text-white">{String(current.id).padStart(2, '0')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* animations: simple fade/slide for content change */}
      <style>{`
        @keyframes contentIn { from { opacity: 0; transform: translateY(18px) } to { opacity: 1; transform: translateY(0) } }
        .animate-in { animation: contentIn 560ms ease-out forwards; }
        /* reduce motion respects */
        @media (prefers-reduced-motion: reduce) { .animate-in { animation: none !important; } }
      `}</style>
    </section>
  );
}
