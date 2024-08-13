import React from 'react';

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
];

const ExperienceSummary = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Experience Summary</h3>
      <ul className="space-y-6">
        {experiences.map((experience, index) => (
          <li key={index}>
            <h4 className="text-xl font-semibold text-blue-600">{experience.role}</h4>
            <p className="text-gray-700">{experience.company} - {experience.date}</p>
            <p className="text-gray-600 mt-2">{experience.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceSummary;
