import React from 'react';
import NewsList from '../components/NewsList';
import VideoList from '../components/VideoList';
import MediaPlayer from '../components/MediaPlayer';

const BlogPage = () => {
  return (
    <div className="bg-background min-h-screen p-8">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-primary mb-6">Blog & Tutorials</h2>
        
        {/* News Section */}
        <section className="mt-12">
          <h3 className="text-2xl font-semibold text-primary mb-4">Latest News</h3>
          <NewsList />
        </section>

        {/* Tutorials Section */}
        <section className="mt-12">
          <h3 className="text-2xl font-semibold text-primary mb-4">Tech Tutorials</h3>
          <MediaPlayer />
        </section>
      </div>
    </div>
  );
};

export default BlogPage;
