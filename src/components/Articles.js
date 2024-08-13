import React from 'react';

const articles = [
  {
    title: 'Understanding React Hooks',
    excerpt: 'Learn about the power of React Hooks and how they can simplify your component logic.',
    link: '#'
  },
  {
    title: 'Azure DevOps for Healthcare Applications',
    excerpt: 'A deep dive into using Azure DevOps to maintain high coding standards and ensure compliance in healthcare projects.',
    link: '#'
  },
  {
    title: 'Best Practices for Automating HR Processes',
    excerpt: 'How to streamline HR operations and reduce SLA times using automation tools like UIPATH.',
    link: '#'
  }
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
  