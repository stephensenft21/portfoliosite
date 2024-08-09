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
    <div className="articles mt-3 mb-3">
      <h2>Articles</h2>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <h3>{article.title}</h3>
            <p>{article.summary}</p>
            <a href={article.link} className="btn">Read More</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
