import React, { useContext, useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { VideoContext } from '../context/VideoContext';
import SkeletonLoader from './SkeletonLoader';

// Function to get the thumbnail URL from a YouTube video URL
const getThumbnailUrl = (url) => {
  // Extract video ID from the URL
  const videoId = url.split('v=')[1] || url.split('/').pop();
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
};

const MediaPlayer = () => {
  const { videos, isLoadingContent } = useContext(VideoContext);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const handleVideoEnd = () => {
    // Automatically play the next video when the current one ends
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 2000); // Simulated delay of 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoadingContent || !isReady) {
    return (
      <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <SkeletonLoader />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-16 h-16 border-t-4 border-primary border-solid rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (!videos || videos.length === 0) {
    return <p className="text-center text-gray-500">No videos available.</p>;
  }

  return (
    <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-primary mb-4">Watch Tutorials</h3>
      <ReactPlayer
        url={videos[currentVideoIndex].url}
        controls
        playing
        onEnded={handleVideoEnd}
        className="rounded-lg overflow-hidden"
        width="100%"
        height="480px"
      />
      <p className="text-gray-500 mt-4 mb-4">Playing: {videos[currentVideoIndex].title}</p>

      {/* Horizontal Scrollable Video List */}
      <div className="w-full overflow-x-auto">
        <div className="flex space-x-4">
          {videos.map((video, index) => (
            <div
              key={index}
              className={`flex-shrink-0 cursor-pointer rounded-lg p-2 ${index === currentVideoIndex ? 'bg-primary text-white' : 'bg-gray-100'} hover:bg-primary hover:text-white transition duration-300`}
              onClick={() => setCurrentVideoIndex(index)}
            >
              <img
                src={getThumbnailUrl(video.url)}
                alt={video.title}
                className="w-40 h-24 object-cover rounded-lg mb-2"
              />
              <p className="text-sm text-center">{video.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaPlayer;
