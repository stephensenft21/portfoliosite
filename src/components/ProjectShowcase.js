import React from 'react';

const projects = [
  {
    title: 'Senft Lux Rentals',
    description: 'A luxury property rental platform built with React and Node.js.',
    link: '#'
  },
  // Add other projects...
];

const ProjectShowcase = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300"
        >
          <div className="p-6">
            <h3 className="text-xl font-bold text-primary">{project.title}</h3>
            <p className="text-textSecondary mt-2">{project.description}</p>
            <a href={project.link} className="text-secondary mt-4 inline-block hover:text-accent transition duration-300">
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectShowcase;
