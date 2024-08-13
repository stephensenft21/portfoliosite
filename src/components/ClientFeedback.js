import React from 'react';

const feedbacks = [
  {
    client: 'John Doe',
    feedback: 'Amazing work! The project was delivered on time and exceeded all expectations.',
  },
  // Add other feedbacks...
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
