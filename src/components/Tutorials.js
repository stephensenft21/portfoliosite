import React from 'react';

const tutorials = [
  {
    title: 'Building a REST API with Express.js',
    excerpt: 'A step-by-step guide on creating a RESTful API using Node.js and Express.js.',
    link: '#'
  },
  {
    title: 'Implementing SSO with React Native',
    excerpt: 'Learn how to implement Single Sign-On (SSO) in your React Native applications.',
    link: '#'
  },
  {
    title: 'Optimizing SQL Queries for Performance',
    excerpt: 'Tips and tricks for improving the performance of your SQL queries, including indexing and query optimization techniques.',
    link: '#'
  }
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
