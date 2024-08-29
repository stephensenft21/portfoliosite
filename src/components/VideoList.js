import React, { useContext } from 'react';
import { VideoContext } from '../context/VideoContext';
import SkeletonLoader from './SkeletonLoader'; // Assuming you have a skeleton loader component

const VideoList = () => {
  const { videos, loading, error } = useContext(VideoContext);

  // Helper function to format YouTube thumbnail URL
  const getThumbnailUrl = (url) => {
    const videoId = url.split('v=')[1] || url.split('/').pop();
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; // High-quality thumbnail
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48">
        <SkeletonLoader />
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error.message}</p>;
  }

  return (
    <div className="py-8">
      {/* <h2 className="text-3xl font-bold text-primary text-center mb-8">Tech Tutorials</h2>
      <div className="flex overflow-x-auto space-x-6 pb-6">
        {videos.map((video, index) => (
          <div key={index} className="min-w-[300px] bg-white p-6 rounded-lg shadow-lg flex-shrink-0">
            <div className="relative">
              <img
                src={getThumbnailUrl(video.url)}
                alt={video.title}
                className="w-full h-200 object-cover rounded-t-lg"
              />
              <iframe
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${video.url.split('v=')[1] || video.url.split('/').pop()}`}
                title={video.title}
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300"
              ></iframe>
            </div>
            <h4 className="text-xl font-bold text-primary mt-4">{video.title}</h4>
            <p className="text-gray-600 mt-2">{video.description}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default VideoList;
