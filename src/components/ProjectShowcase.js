import React from 'react';

const projects = [
  {
    title: 'StudyCentral',
    description: 'An enterprise healthcare CTMS application developed with Angular 15 and .NET Core. Enhanced application features and ensured compliance with healthcare regulations.',
    link: '#'
  },
  {
    title: 'Relevnt App',
    description: 'Enhanced a social media application through improved user engagement strategies and SSO integration using React Native.',
    link: '#'
  },
  {
    title: 'Labor Driven Web Application',
    description: 'Led the development of a high-level web application using React.js, AWS Cognito, and Formik for a labor management platform.',
    link: '#'
  }
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
