import React from 'react';

const feedbacks = [
  {
    client: 'John Doe, CTO at Healthcare Corp',
    feedback: 'Stephen played a crucial role in developing our healthcare application, ensuring compliance and scalability. His attention to detail and problem-solving skills are exceptional.'
  },
  {
    client: 'Jane Smith, Project Manager at Relevnt',
    feedback: 'Stephen’s expertise in React Native significantly enhanced our app’s user engagement. He is a highly skilled developer who delivers on time.'
  },
  {
    client: 'Mike Johnson, CEO at Labor Driven',
    feedback: 'Stephen led our web application development with great technical leadership. He managed a complex project with ease and delivered a top-notch product.'
  }
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
