import React from 'react';

const experiences = [
  {
    role: 'Application Engineer',
    company: 'SCRI/Mckesson',
    date: 'April 2022 - April 2024',
    description: 'Contributed to feature development for StudyCentral, ensuring compliance with healthcare regulations and enhancing application features using Angular 15 and .NET Core.'
  },
  {
    role: 'Technical Resident/Automation Engineer',
    company: 'HCA Healthcare',
    date: 'October 2021 - April 2022',
    description: 'Enhanced operational efficiency by streamlining tasks and implementing enterprise-level automations, saving 146 annual hours in HR.'
  },
  {
    role: 'Mobile Application Developer',
    company: 'Relevnt, Inc.',
    date: 'June 2021 - March 2022',
    description: 'Implemented SSO integration and developed native modules with React Native, enhancing user engagement for the Relevnt app.'
  },
  {
    role: 'Full Stack Developer Lead',
    company: 'Labor Driven, LLC',
    date: 'December 2020 - October 2021',
    description: 'Led the technical management of a web application, collaborating closely with developers and product owners using React.js and AWS technologies.'
  }
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
