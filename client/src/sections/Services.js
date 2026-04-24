import React from 'react';
import { scrollToSection } from '../utils/scrollToSection';

const services = [
  {
    id: 'web',
    title: 'Web Development',
    desc: 'Modern frontend and backend engineering for SaaS platforms, business websites, and custom web apps.',
    points: ['React and Next.js interfaces', 'Laravel or Node.js APIs', 'Performance-first architecture'],
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 5h18v14H3z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 9h18" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 14l2-2-2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 16h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: 'server',
    title: 'Server and DevOps Management',
    desc: 'Secure cloud setup, deployment pipelines, and uptime-focused server operations for production apps.',
    points: ['Linux and VPS hardening', 'CI/CD and release workflows', 'Monitoring and incident prevention'],
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="4" y="4" width="16" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="4" y="14" width="16" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8" cy="7" r="1" fill="currentColor" />
        <circle cx="8" cy="17" r="1" fill="currentColor" />
      </svg>
    )
  },
  {
    id: 'commerce',
    title: 'Shopify and Ecommerce Systems',
    desc: 'Conversion-focused storefronts and custom commerce features built for revenue growth.',
    points: ['Shopify theme and app integrations', 'Checkout and CRO optimization', 'Catalog, payment, and fulfillment flows'],
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M6 8h12l-1.2 9a2 2 0 0 1-2 1.7H9.2a2 2 0 0 1-2-1.7L6 8z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 10V7a3 3 0 0 1 6 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  }
];

export default function Services() {
  const scrollToContact = () => {
    scrollToSection('contact');
  };

  return (
    <section id="services" className="py-24 bg-[#07060a] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14" data-reveal>
          <div className="inline-block mb-4">
            <span className="text-sm section-chip px-3 py-1 rounded-full">Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            What I Offer
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Strategic engineering services crafted for teams that need a reliable technical partner and premium user experience execution.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <article
              key={service.id}
              data-reveal
              data-reveal-delay={String(index * 90)}
              className="service-card rounded-2xl p-7 h-full flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl icon-wrap mb-5 bg-white/5 border border-white/15 text-cyan-200">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.desc}</p>

              <ul className="space-y-2 text-sm text-gray-300 mb-8 flex-1">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-300" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <button onClick={scrollToContact} className="text-sm font-semibold text-cyan-200 inline-flex items-center gap-2 hover:text-cyan-100 mt-auto">
                Discuss This Service <span aria-hidden>→</span>
              </button>
            </article>
          ))}
        </div>

        <div className="text-center mt-12" data-reveal data-reveal-delay="180">
          <button onClick={scrollToContact} className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-medium btn-primary">
            Start a High-Impact Project
          </button>
        </div>
      </div>
    </section>
  );
}
