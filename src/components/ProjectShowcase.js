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
    <div className="project-showcase">
      <h2>Featured Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="project-link">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;