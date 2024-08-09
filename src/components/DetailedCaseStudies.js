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
    <div className="detailed-case-studies">
      <h2>Case Studies</h2>
      {caseStudies.map((study, index) => (
        <div key={index} className="case-study">
          <h3>{study.title}</h3>
          <p><strong>Problem:</strong> {study.problem}</p>
          <p><strong>Approach:</strong> {study.approach}</p>
          <p><strong>Technologies:</strong> {study.technologies.join(', ')}</p>
          <p><strong>Outcome:</strong> {study.outcome}</p>
        </div>
      ))}
    </div>
  );
};

export default DetailedCaseStudies;
