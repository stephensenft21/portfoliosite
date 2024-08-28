// src/components/Tutorials.js
import React, { useContext } from 'react';
import {VideosContext} from '../context/VideoContext'
import SkeletonLoader from './SkeletonLoader'; // Assuming you have a skeleton loader component

const VideoList = () => {
  const { videos, loading, error } = useContext(VideosContext);

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
    <div className="space-y-8">
      {videos.map((video, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
          <iframe
            width="100%"
            height="315"
            src={video.url}
            title={video.title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <h4 className="text-xl font-bold text-primary mt-4">{video.title}</h4>
          <p className="text-gray-600 mt-2">{video.description}</p>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
