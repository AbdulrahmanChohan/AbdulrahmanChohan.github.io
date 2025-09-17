import React, { useEffect, useRef } from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-screen flex items-center text-white"
      style={{ backgroundColor: '#07060a' }}
    >
      {/* particle/star canvas for interactive background */}
      <canvas
        ref={null}
        id="hero-particles-canvas"
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      />

      {/* diagonal streak background (subtle, decorative) */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-25deg, rgba(255,255,255,0.02) 0 2px, transparent 2px 12px)'
        }}
      />

  <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Left: copy */}
          <div className="text-left z-10">
            <span className="inline-block bg-white/6 text-white/80 px-3 py-1 rounded-full text-sm mb-6">
              Built with Passion.
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight">
              Meet <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Your Name</span>
            </h1>

            <p className="mt-4 text-xl text-gray-300 font-medium">
              A Passionate <span className="text-white font-semibold">Front-end Developer</span>
            </p>

            <p className="mt-6 max-w-2xl text-gray-400">
              I build responsive, performance-driven websites and enjoy turning ideas into
              polished, maintainable code. I specialize in Laravel, React, Node.js and MERN stack.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-3 bg-gray-200/10 hover:bg-gray-200/20 border border-white/10 text-white px-5 py-3 rounded-full font-medium transition"
              >
                View Projects
                <svg className="w-4 h-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-5 py-3 rounded-full font-semibold transition shadow-lg"
              >
                My Story
              </button>
            </div>
          </div>

          {/* Right: profile image with decorative ring */}
          <div className="flex justify-center lg:justify-end z-10">
            <div className="relative">
              {/* outer decorative ring */}
              <div className="rounded-full p-4 bg-gradient-to-b from-white/3 to-transparent shadow-2xl">
                <div className="rounded-full bg-gradient-to-r from-purple-900 to-transparent p-2">
                  <div className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-purple-800/40 to-transparent flex items-center justify-center shadow-inner">
                    <img
                      src="https://via.placeholder.com/400x400"
                      alt="Profile"
                      className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-black/60 shadow-lg"
                    />
                  </div>
                </div>
              </div>
              {/* subtle outer glow */}
              <div className="absolute -inset-2 rounded-full blur-xl opacity-30" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(139,92,246,0.18), transparent 30%)' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Large word slider / marquee under hero content */}
      <div className="absolute inset-x-0 bottom-8 z-20 overflow-hidden pointer-events-none">
        <style>{`
          .marquee-track { display: inline-flex; gap: 4rem; align-items: center; }
          @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
          .marquee-anim { animation: marquee 28s linear infinite; }
        `}</style>

        <div className="w-full">
          <div className="marquee-anim" style={{ whiteSpace: 'nowrap' }}>
            <div className="marquee-track" aria-hidden>
              {/* duplicated content for seamless loop */}
              {['Dedicated','Innovative','Creative','Passionate','Reliable','Focused'].map((word, idx) => (
                <div key={`a-${idx}`} className="inline-block px-6">
                  <span style={{ fontSize: 'clamp(48px, 10vw, 140px)', lineHeight: 1 }} className="font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-400">
                    {word.toUpperCase()}
                  </span>
                </div>
              ))}

              {['Dedicated','Innovative','Creative','Passionate','Reliable','Focused'].map((word, idx) => (
                <div key={`b-${idx}`} className="inline-block px-6">
                  <span style={{ fontSize: 'clamp(48px, 10vw, 140px)', lineHeight: 1 }} className="font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200">
                    {word.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Canvas animation logic (mounted via effect) */}
      {
        /* initialize canvas after DOM render */
      }
      <CanvasParticles />
    </section>
  );
};

function CanvasParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = document.getElementById('hero-particles-canvas');
    if (!canvas) return;
    canvasRef.current = canvas;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = canvas.clientWidth);
    let height = (canvas.height = canvas.clientHeight);

    const DPR = Math.max(1, window.devicePixelRatio || 1);
    canvas.width = width * DPR;
    canvas.height = height * DPR;
    ctx.scale(DPR, DPR);

  const particles = [];
  // You can change this multiplier to increase/decrease particle quantity.
  // WARNING: Very large particle counts (tens of thousands) will heavily tax CPU/GPU
  // and may hang or crash browsers, especially on mobile or low-end machines.
  // Increase the multiplier only if you understand the performance risk.
  // To reach extremely high counts you can raise the multiplier (e.g., 12..200).
  const PARTICLE_MULTIPLIER = 12; // <-- change this to control quantity (start with 12)
  // Compute count based on viewport area, multiplied and clamped to an upper max (up to 80k)
  const PARTICLE_COUNT = Math.max(40, Math.min(80000, Math.floor((width * height) / 25000) * PARTICLE_MULTIPLIER));

    const rand = (a, b) => a + Math.random() * (b - a);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: rand(0.8, 2.6),
        alpha: rand(0.06, 0.28),
        vx: rand(-0.2, 0.2),
        vy: rand(-0.1, 0.1),
        parallaxFactor: rand(0.02, 0.12)
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetX = mouseX;
    let targetY = mouseY;

    const onResize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      const DPR = Math.max(1, window.devicePixelRatio || 1);
      canvas.width = width * DPR;
      canvas.height = height * DPR;
      ctx.scale(DPR, DPR);
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      targetX = (e.clientX - rect.left);
      targetY = (e.clientY - rect.top);
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMove);

    let raf = null;

    const draw = () => {
      // smooth mouse position
      mouseX += (targetX - mouseX) * 0.08;
      mouseY += (targetY - mouseY) * 0.08;

      ctx.clearRect(0, 0, width, height);

      for (let p of particles) {
        // natural drift
        p.x += p.vx;
        p.y += p.vy;

        // wrap
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

  // parallax offset based on mouse distance from center
  // Inverted: particles move opposite to mouse movement
  const dx = -(mouseX - width / 2) * p.parallaxFactor;
  const dy = -(mouseY - height / 2) * p.parallaxFactor;

        const drawX = p.x + dx;
        const drawY = p.y + dy;

        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;
        ctx.arc(drawX, drawY, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return null;
}

export default Hero;
