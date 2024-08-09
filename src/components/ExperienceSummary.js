import React from 'react';
import './ExperienceSummary.css';

const experiences = [
  {
    role: 'Application Engineer',
    company: 'SCRI/Mckesson',
    date: 'April 2022 - April 2024',
    location: 'Nashville, TN (Hybrid)',
    description: 'Contributed to feature development for StudyCentral, ensuring compliance with healthcare regulations and enhancing application features.'
  },
  {
    role: 'Technical Resident/Automation Engineer',
    company: 'HCA Healthcare',
    date: 'October 2021 - April 2022',
    location: 'Nashville, TN (Hybrid)',
    description: 'Streamlined tasks and implemented enterprise-level automations, saving 146 annual hours in HR.'
  },
  // Add more experiences as needed
];

const ExperienceSummary = () => {
  return (
    <div className="experience-summary mt-3 mb-3">
      <h2>Professional Experience</h2>
      <ul>
        {experiences.map((experience, index) => (
          <li key={index}>
            <h3>{experience.role}</h3>
            <p><strong>{experience.company}</strong></p>
            <p>{experience.date}</p>
            <p>{experience.location}</p>
            <p>{experience.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceSummary;
