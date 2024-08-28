import React, { useContext } from 'react';
import { NewsContext } from '../context/NewsContext';

const NewsList = () => {
  const { news, loading, error } = useContext(NewsContext);

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <div
      className="relative bg-fixed bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('https://source.unsplash.com/featured/?technology,abstract')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto py-20 px-6">
        <h3 className="text-4xl font-bold text-white mb-12 text-center">Tech News</h3>
        <ul className="space-y-12">
          {loading ? (
            Array.from({ length: 5 }).map((_, index) => (
              <li key={index} className="bg-white p-6 rounded-lg shadow-lg">
                {/* Placeholder for loading state */}
              </li>
            ))
          ) : (
            news.map((article, index) => (
              <li
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
              >
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h4 className="text-2xl font-bold text-blue-600">{article.title}</h4>
                  <p className="text-gray-600 mt-2">{article.excerpt}</p>
                  <a
                    href={article.link}
                    className="text-blue-600 mt-4 inline-block hover:text-blue-700"
                  >
                    Read More
                  </a>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default NewsList;
