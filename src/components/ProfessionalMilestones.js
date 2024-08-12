import React from 'react';
import './ProfessionalMilestones.css';

const ProfessionalMilestones = () => {
  const milestones = [
    {
      role: 'Application Engineer',
      company: 'SCRI/Mckesson',
      period: 'April 2022 - April 2024',
      description: 'Contributed to feature development for StudyCentral, ensuring compliance with healthcare regulations and enhancing application features.'
    },
    {
      role: 'Technical Resident/Automation Engineer',
      company: 'HCA Healthcare',
      period: 'October 2021 - April 2022',
      description: 'Streamlined tasks and implemented enterprise-level automations, saving 146 annual hours in HR.'
    },
    {
      role: 'Mobile Application Developer',
      company: 'Relevnt, Inc.',
      period: 'June 2021 - March 2022',
      description: 'Implemented SSO integration and developed native modules, enhancing user engagement for the Relevnt app.'
    },
    {
      role: 'Full Stack Developer Lead',
      company: 'Labor Driven, LLC',
      period: 'December 2020 - October 2021',
      description: 'Led the technical management and development of a high-level web application, collaborating closely with a team of developers and product owners.'
    }
  ];

  return (
    <div className="professional-milestones">
      <h2>Professional Milestones</h2>
      <ul>
        {milestones.map((milestone, index) => (
          <li key={index}>
            <strong>{milestone.role}</strong> at {milestone.company} ({milestone.period})
            <p>{milestone.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfessionalMilestones;
