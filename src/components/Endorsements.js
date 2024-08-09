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
    <div className="endorsements mt-3 mb-3">
      <h2>Endorsements</h2>
      <ul>
        {endorsements.map((endorsement, index) => (
          <li key={index}>
            <blockquote>{endorsement.endorsement}</blockquote>
            <p><strong>{endorsement.name}</strong> - {endorsement.position}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Endorsements;
