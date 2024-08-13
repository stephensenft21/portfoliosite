import React from 'react';
import './Articles.css';

const articles = [
  {
    title: 'Exploring the Latest in React 18',
    summary: 'An in-depth look at the new features and improvements in React 18.',
    link: '#'
  },
  {
    title: 'Handling State Management with Redux',
    summary: 'A guide to managing complex state in React applications using Redux.',
    link: '#'
  },
  // Add more articles as needed
];

const Articles = () => {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Articles</h3>
      <ul className="space-y-6">
        {articles.map((article, index) => (
          <li key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold text-blue-600">{article.title}</h4>
            <p className="text-gray-600 mt-2">{article.excerpt}</p>
            <a href={article.link} className="text-blue-600 mt-4 inline-block hover:text-blue-700">
              Read More
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
