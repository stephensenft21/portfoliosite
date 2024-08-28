import React from 'react';

const caseStudies = [
  {
    title: 'StudyCentral Development',
    problem: 'Need for a compliant, scalable healthcare CTMS application.',
    approach: 'Developed custom UI components using Angular 15, established REST endpoints using .NET Core, and integrated Azure cloud tools for monitoring and compliance.',
    outcome: 'Enhanced application features while ensuring compliance with healthcare regulations, improving document management and user permission protocols.'
  },
  {
    title: 'HCA Healthcare Automation',
    problem: 'Inefficient HR processes leading to delays and increased SLA for candidate onboarding.',
    approach: 'Streamlined tasks through enterprise-level automation using UIPATH, reducing manual effort and aligning automation with compliance standards.',
    outcome: 'Saved 146 annual hours in HR, significantly reducing onboarding SLA and improving candidate experience.'
  },
  {
    title: 'Relevnt App Enhancement',
    problem: 'User engagement and app deployment errors.',
    approach: 'Implemented SSO integration using Native Modules and enhanced app features through React Native development.',
    outcome: 'Improved user engagement and reduced app deployment errors, leading to a more efficient update process.'
  }
];

const DetailedCaseStudies = () => {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Detailed Case Studies</h3>
      <ul className="space-y-6">
        {caseStudies.map((caseStudy, index) => (
          <li key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold text-blue-600">{caseStudy.title}</h4>
            <p className="text-gray-700 mt-2"><strong>Problem:</strong> {caseStudy.problem}</p>
            <p className="text-gray-700 mt-2"><strong>Approach:</strong> {caseStudy.approach}</p>
            <p className="text-gray-700 mt-2"><strong>Outcome:</strong> {caseStudy.outcome}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DetailedCaseStudies;
