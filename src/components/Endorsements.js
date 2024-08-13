import React from 'react';

const endorsements = [
  {
    endorser: 'Jane Smith',
    position: 'CTO, TechCorp',
    endorsement: 'A highly skilled developer with an eye for detail and a passion for delivering quality work.',
  },
  // Add other endorsements...
];

const Endorsements = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md mt-12">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Professional Endorsements</h3>
      <ul className="space-y-6">
        {endorsements.map((endorsement, index) => (
          <li key={index}>
            <p className="text-gray-700 italic">"{endorsement.endorsement}"</p>
            <p className="text-blue-600 mt-2 font-semibold">{endorsement.endorser}, {endorsement.position}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Endorsements;
