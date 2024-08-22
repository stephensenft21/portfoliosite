import React from 'react';

const certifications = [
  {
    title: 'Fullstack Developer',
    institution: 'Nashville Software School',
    date: 'February 2019 - February 2020',
    description: '6-month immersive apprenticeship focusing on JavaScript, HTML5, CSS3, React.js, and RESTful APIs.'
  },
  {
    title: 'Vue Mastery Course',
    institution: 'Vue.js',
    date: 'March 2021 - April 2021',
    description: 'Immersive course focusing on efficient application structuring, state management, and SPA development using Vue.js.'
  },
  {
    title: 'SQL Mastery Course',
    institution: 'PostgreSQL',
    date: 'August 2020 - September 2020',
    description: '5-week professional development course in SQL, mastering database design, data manipulation, and query formulation.'
  }
];

const EducationCertifications = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Education & Certifications</h3>
      <ul className="space-y-4">
        {certifications.map((certification, index) => (
          <li key={index}>
            <h4 className="text-xl font-semibold text-blue-600">{certification.title}</h4>
            <p className="text-gray-700">{certification.institution} - {certification.date}</p>
            <p className="text-gray-600 mt-2">{certification.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EducationCertifications;
