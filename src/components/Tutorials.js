import React from 'react';
import './Tutorials.css';

const tutorials = [
  {
    title: 'Building a Full-Stack App with React and Node.js',
    summary: 'A step-by-step guide to creating a full-stack web application using React for the frontend and Node.js for the backend.',
    link: '#'
  },
  {
    title: 'Getting Started with TypeScript in React',
    summary: 'An introductory tutorial on integrating TypeScript into your React projects for better type safety.',
    link: '#'
  },
  // Add more tutorials as needed
];

const Tutorials = () => {
  return (
    <div className="tutorials mt-3 mb-3">
      <h2>Tutorials</h2>
      <ul>
        {tutorials.map((tutorial, index) => (
          <li key={index}>
            <h3>{tutorial.title}</h3>
            <p>{tutorial.summary}</p>
            <a href={tutorial.link} className="btn">Read More</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tutorials;
