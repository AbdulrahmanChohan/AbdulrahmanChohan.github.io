import React, { useEffect } from 'react';
import './App.css';
import Portfolio from './pages/Portfolio';

function App() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('[data-reveal]'));
    if (!elements.length) return undefined;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    elements.forEach((element) => {
      element.classList.add('reveal');
      const delay = Number(element.getAttribute('data-reveal-delay') || 0);
      if (Number.isFinite(delay) && delay > 0) {
        element.style.transitionDelay = `${delay}ms`;
      }
    });

    if (prefersReduced) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.12
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Portfolio />
    </div>
  );
}

export default App;
