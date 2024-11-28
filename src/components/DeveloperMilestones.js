import React from 'react';

const milestones = [
  {
    role: 'Application Engineer',
    company: 'SCRI/Mckesson',
    period: 'April 2022 - April 2024',
    description: 'Contributed to feature development for StudyCentral, ensuring compliance with healthcare regulations and enhancing application features. Developed custom UI components with Angular 15 and REST endpoints using .NET Core.'
  },
  {
    role: 'Technical Resident/Automation Engineer',
    company: 'HCA Healthcare',
    period: 'October 2021 - April 2022',
    description: 'Enhanced operational efficiency by streamlining tasks, saving 146 annual hours in HR through automation. Developed skills in RPA tools like UIPATH.'
  },
  {
    role: 'Mobile Application Developer',
    company: 'Relevnt, Inc.',
    period: 'June 2021 - March 2022',
    description: 'Implemented SSO integration and enhanced the Relevent app, reducing deployment errors and improving user engagement.'
  },
  {
    role: 'Full Stack Developer Lead',
    company: 'Labor Driven, LLC',
    period: 'December 2020 - October 2021',
    description: 'Led the technical management and development of a high-level web application, collaborating with developers and product owners using React.js and AWS technologies.'
  }
];

const DeveloperMilestones = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Professional Milestones</h2>
      <ul className="space-y-4">
        {milestones.map((milestone, index) => (
          <li key={index} className="border-b border-gray-200 pb-4">
            <strong className="text-xl font-semibold text-blue-600">{milestone.role}</strong>
            <p className="text-gray-700">{milestone.company} ({milestone.period})</p>
            <p className="text-gray-600 mt-2">{milestone.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeveloperMilestones;
