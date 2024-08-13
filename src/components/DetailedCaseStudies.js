import React from 'react';

const caseStudies = [
  {
    title: 'Labor Driven',
    problem: 'Complex workflow automation',
    approach: 'Built a scalable microservice architecture using Node.js and Docker.',
    outcome: 'Reduced processing time by 40%.',
  },
  // Add other case studies...
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
