import React from 'react';

const endorsements = [
  {
    endorser: '',
    position: '',
    endorsement: ''
  },
  {
    endorser: '',
    position: '',
    endorsement: ''
  },
  {
    endorser: '',
    position: '',
    endorsement: ''
  }
];

const Endorsements = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md mt-12">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Professional Endorsements</h3>
      <ul className="space-y-6">
        {endorsements.map((endorsement, index) => (
          <li key={index}>
            {/* <p className="text-gray-700 italic">"{endorsement.endorsement}"</p>
            <p className="text-blue-600 mt-2 font-semibold">{endorsement.endorser}, {endorsement.position}</p> */}
          </li>

))}
 <div className="mt-6">
            <a href="#portfolio" className="inline-block bg-highlight text-white py-2 px-4 sm:py-3 sm:px-6 rounded-md shadow-lg hover:bg-accent hover:animate-bounce transition duration-300">
             Add Endorsement
            </a>
          </div>
      </ul>
    </div>
  );
};

export default Endorsements;
