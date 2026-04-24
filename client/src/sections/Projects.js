import React from 'react';

const PROJECTS = [
  {
    id: 'shopify-plus',
    title: 'Shopify Plus Storefront Revamp',
    summary: 'Premium storefront redesign focused on conversion rate optimization, fast loading pages, and clean merchandising flow.',
    technologies: ['Shopify', 'React', 'Node.js'],
    github: 'https://github.com',
    live: 'https://example.com',
    tones: ['#14e0d6', '#1178b6']
  },
  {
    id: 'saas-dashboard',
    title: 'B2B SaaS Analytics Platform',
    summary: 'MERN-powered admin suite with real-time data pipelines, role-based controls, and actionable KPI dashboards for operations teams.',
    technologies: ['MERN', 'React', 'Node.js'],
    github: 'https://github.com',
    live: 'https://example.com',
    tones: ['#2bf6e8', '#2d5cff']
  },
  {
    id: 'laravel-commerce',
    title: 'Laravel Commerce Operations Suite',
    summary: 'Custom PHP and Laravel system connecting order management, inventory workflows, and reporting across multiple sales channels.',
    technologies: ['PHP', 'Laravel', 'Shopify'],
    github: 'https://github.com',
    live: 'https://example.com',
    tones: ['#19d7c7', '#0f2c51']
  },
  {
    id: 'react-node-portal',
    title: 'Client Operations Portal',
    summary: 'Enterprise-ready React and Node.js web app with workflow automations, contract management, and secure partner onboarding.',
    technologies: ['React', 'Node.js', 'MERN'],
    github: 'https://github.com',
    live: 'https://example.com',
    tones: ['#00f0d2', '#1575a8']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-[#07060a] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16" data-reveal>
          <div className="inline-block mb-4">
            <span className="text-sm section-chip px-3 py-1 rounded-full">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Production-ready systems designed for measurable business outcomes across ecommerce and SaaS products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <article
              key={project.id}
              data-reveal
              data-reveal-delay={String((index % 2) * 110)}
              className="project-card rounded-2xl overflow-hidden border border-white/10 flex flex-col h-full"
            >
              <div
                className="project-mockup-wrap"
                style={{
                  '--mockup-a': project.tones[0],
                  '--mockup-b': project.tones[1]
                }}
              >
                <div className="device-laptop" aria-hidden>
                  <div className="device-screen">
                    <div className="screen-topbar">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="screen-layout">
                      <div className="screen-sidebar" />
                      <div className="screen-main">
                        <div className="screen-main-row" />
                        <div className="screen-main-grid">
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="device-base" />
                </div>

                <div className="device-phone" aria-hidden>
                  <div className="device-phone-screen">
                    <div className="phone-notch" />
                    <div className="phone-content">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-5 leading-relaxed flex-1">{project.summary}</p>

                <div className="mb-6 flex flex-wrap gap-2.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={`${project.id}-${tech}`}
                      className="stack-pill"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 icon-wrap border border-white/20 text-white text-center py-2.5 px-4 rounded-lg transition-colors duration-200 hover:border-cyan-200/50"
                  >
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 icon-wrap text-[#04161a] text-center py-2.5 px-4 rounded-lg transition-colors duration-200 btn-primary"
                  >
                    Live Preview
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3" data-reveal data-reveal-delay="120">
          {['PHP', 'Laravel', 'MERN', 'React', 'Node.js', 'Shopify'].map((tech) => (
            <span key={`global-${tech}`} className="stack-pill stack-pill-global">{tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
