import React from 'react';
import Articles from '../components/Articles';
import Tutorials from '../components/Tutorials';

const BlogPage = () => {
  return (
    <div className="bg-background min-h-screen p-8">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-primary mb-6">Blog & Tutorials</h2>
        
        {/* Articles */}
        <div className="mt-12">
          <Articles />
        </div>

        {/* Tutorials */}
        <div className="mt-12">
          <Tutorials />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
