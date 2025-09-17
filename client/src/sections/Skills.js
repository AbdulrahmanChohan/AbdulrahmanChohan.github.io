import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 80 },
        { name: 'TypeScript', level: 75 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Laravel', level: 88 },
        { name: 'PHP', level: 82 },
        { name: 'Express.js', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'MySQL', level: 78 }
      ]
    },
    {
      title: 'Full Stack Frameworks',
      skills: [
        { name: 'MERN Stack', level: 85 },
        { name: 'Laravel', level: 88 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 70 },
        { name: 'Docker', level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[#07060a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            I'm constantly learning and expanding my skill set. Here are the technologies
            and tools I work with most frequently.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gradient-to-br from-black/30 to-transparent p-6 rounded-xl border border-white/5">
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-white/70 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/6 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-600 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">Other Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Full Stack Development', 'API Development', 'Database Design', 'MVC Architecture',
              'Version Control', 'Agile/Scrum', 'Testing', 'Performance Optimization',
              'Security Best Practices', 'Deployment', 'CI/CD', 'Microservices'
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-white/6 text-white/80 px-4 py-2 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
