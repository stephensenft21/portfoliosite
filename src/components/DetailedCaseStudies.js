import React from 'react';
import './DetailedCaseStudies.css';

const caseStudies = [
  {
    title: 'Senft Lux Rentals',
    problem: 'The client needed a scalable platform to manage luxury rentals efficiently.',
    approach: 'Developed a React frontend with a .NET Core backend, integrating payment processing and booking management.',
    technologies: ['React', '.NET Core', 'Stripe', 'SQL Server'],
    outcome: 'Successfully launched with positive client feedback and increasing user adoption.'
  },
  {
    title: 'Labor Driven',
    problem: 'Labor workers needed a reliable job matching service.',
    approach: 'Built a responsive web app using React and AWS services for backend.',
    technologies: ['React', 'AWS Cognito', 'Redux', 'Formik'],
    outcome: 'Improved job matching accuracy and user engagement.'
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
