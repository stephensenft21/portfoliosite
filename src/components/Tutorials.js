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
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Tutorials</h3>
        <ul className="space-y-6">
          {tutorials.map((tutorial, index) => (
            <li key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-blue-600">{tutorial.title}</h4>
              <p className="text-gray-600 mt-2">{tutorial.excerpt}</p>
              <a href={tutorial.link} className="text-blue-600 mt-4 inline-block hover:text-blue-700">
                Read More
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default Tutorials;
