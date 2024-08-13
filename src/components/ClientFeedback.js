import React from 'react';
import './ClientFeedback.css';

const feedbacks = [
  {
    name: 'John Doe',
    feedback: 'Stephen was instrumental in our project’s success. His attention to detail and ability to solve complex problems was invaluable.',
    position: 'Project Manager at TechCorp'
  },
  {
    name: 'Jane Smith',
    feedback: 'Working with Stephen was a pleasure. His expertise in full-stack development significantly improved our product’s performance.',
    position: 'CTO at Innovatech'
  },
  // Add more feedback as needed
];

const ClientFeedback = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Client Feedback</h3>
      <ul className="space-y-6">
        {feedbacks.map((feedback, index) => (
          <li key={index}>
            <p className="text-gray-700 italic">"{feedback.feedback}"</p>
            <p className="text-blue-600 mt-2 font-semibold">- {feedback.client}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientFeedback;
