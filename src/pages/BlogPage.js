import React from 'react';
import Articles from '../components/Articles';
import Tutorials from '../components/Tutorials';

const BlogPage = () => {
  return (
    <div className="py-20 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">Blog & Insights</h2>
        <Articles />
        <Tutorials />
      </div>
    </div>
  );
};

export default BlogPage;
