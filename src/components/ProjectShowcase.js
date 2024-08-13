import React from 'react';
import './ProjectShowcase.css';

const projects = [
  {
    title: 'Senft Lux Rentals',
    description: 'A luxury rental service platform.',
    image: '/path/to/senft-lux-rentals.jpg',
    link: '#'
  },
  {
    title: 'Labor Driven',
    description: 'A job matching service for labor workers.',
    image: '/path/to/labor-driven.jpg',
    link: '#'
  },
  {
    title: 'NOCD',
    description: 'A mobile application for OCD treatment.',
    image: '/path/to/nocd.jpg',
    link: '#'
  },
  {
    title: 'Carnival API',
    description: 'An API for managing carnival events.',
    image: '/path/to/carnival-api.jpg',
    link: '#'
  }
];

const ProjectShowcase = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <a href={project.link} className="text-blue-600 mt-4 inline-block hover:text-blue-700">
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectShowcase;