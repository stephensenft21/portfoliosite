import React from 'react';
import Articles from '../components/Articles.js';
import Tutorials from '../components/Tutorials';

const BlogPage = () => {
  return (
    <div className="blog-page">
      <Articles />
      <Tutorials />
    </div>
  );
};

export default BlogPage;