import React from 'react';

const milestones = [
  {
    role: 'Application Engineer',
    company: 'SCRI/Mckesson',
    period: 'April 2022 - April 2024',
    description: 'Contributed to feature development for StudyCentral, ensuring compliance with healthcare regulations and enhancing application features.'
  },
  // Add other milestones...
];

const ProfessionalMilestones = () => {
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

export default ProfessionalMilestones;
