import React from 'react';
import './Endorsements.css';

const endorsements = [
  {
    name: 'Alice Brown',
    endorsement: 'Stephen’s skill in React and Node.js is top-notch. He’s a developer you can rely on to deliver quality work.',
    position: 'Lead Developer at SoftSolutions'
  },
  {
    name: 'Michael Johnson',
    endorsement: 'I highly recommend Stephen for any project requiring deep technical expertise and a collaborative approach.',
    position: 'CEO at WebWorks'
  },
  // Add more endorsements as needed
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

