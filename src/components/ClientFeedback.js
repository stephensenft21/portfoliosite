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
    <div className="client-feedback mt-3 mb-3">
      <h2>Client Feedback</h2>
      <ul>
        {feedbacks.map((feedback, index) => (
          <li key={index}>
            <blockquote>{feedback.feedback}</blockquote>
            <p><strong>{feedback.name}</strong> - {feedback.position}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientFeedback;
