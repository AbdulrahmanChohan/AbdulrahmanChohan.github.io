import React, { useState, useEffect } from 'react';
import { projectsAPI } from '../services/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await projectsAPI.getAll();
        setProjects(data);
      } catch (err) {
        setError('Failed to load projects');
        console.error('Error loading projects:', err);
        // Fallback to sample data if API fails
        setProjects([
          {
            _id: 1,
            title: 'E-Commerce Platform (Laravel + React)',
            description: 'Full-stack e-commerce solution with Laravel backend, React frontend, MySQL database, and Stripe payment integration. Features include user authentication, admin dashboard, and inventory management.',
            image: 'https://via.placeholder.com/400x250',
            technologies: ['Laravel', 'React', 'MySQL', 'Stripe', 'Tailwind CSS'],
            github: 'https://github.com',
            live: 'https://example.com'
          },
          {
            _id: 2,
            title: 'Task Management System (MERN Stack)',
            description: 'Collaborative task management application built with MERN stack. Features real-time updates, team collaboration, progress tracking, and advanced filtering capabilities.',
            image: 'https://via.placeholder.com/400x250',
            technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Express'],
            github: 'https://github.com',
            live: 'https://example.com'
          },
          {
            _id: 3,
            title: 'Content Management System (Laravel)',
            description: 'Custom CMS built with Laravel featuring modular architecture, role-based permissions, media management, and SEO optimization. Perfect for content-heavy websites.',
            image: 'https://via.placeholder.com/400x250',
            technologies: ['Laravel', 'MySQL', 'Blade', 'jQuery', 'Bootstrap'],
            github: 'https://github.com',
            live: 'https://example.com'
          },
          {
            _id: 4,
            title: 'Real-time Chat Application (Node.js + React)',
            description: 'Scalable chat application with real-time messaging, file sharing, user presence indicators, and message encryption. Built with modern web technologies.',
            image: 'https://via.placeholder.com/400x250',
            technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'JWT'],
            github: 'https://github.com',
            live: 'https://example.com'
          },
          {
            _id: 5,
            title: 'Business Analytics Dashboard (Laravel + Vue.js)',
            description: 'Comprehensive business intelligence dashboard with data visualization, automated reporting, and KPI tracking. Integrates with multiple data sources.',
            image: 'https://via.placeholder.com/400x250',
            technologies: ['Laravel', 'Vue.js', 'MySQL', 'Chart.js', 'API'],
            github: 'https://github.com',
            live: 'https://example.com'
          },
          {
            _id: 6,
            title: 'Social Media Platform (MERN Stack)',
            description: 'Full-featured social media platform with user profiles, posts, comments, likes, and real-time notifications. Includes advanced features like content moderation and analytics.',
            image: 'https://via.placeholder.com/400x250',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Cloudinary'],
            github: 'https://github.com',
            live: 'https://example.com'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-[#07060a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-300">Loading projects...</p>
        </div>
      </section>
    );
  }

  if (error && projects.length === 0) {
    return (
      <section id="projects" className="py-20 bg-[#07060a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-[#07060a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A selection of my most recent work and featured projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project._id || project.id} className="bg-gradient-to-br from-black/40 via-black/30 to-transparent rounded-xl overflow-hidden border border-white/5 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-full h-48 bg-gradient-to-br from-purple-900/20 to-transparent overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-white/6 text-white/70 text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-white/10 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 hover:border-white/20"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 hover:opacity-95"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
