import React from 'react';

const certifications = [
  {
    title: 'Certified Kubernetes Administrator',
    institution: 'CNCF',
    date: 'April 2021',
  },
  // Add other certifications...
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EducationCertifications;
