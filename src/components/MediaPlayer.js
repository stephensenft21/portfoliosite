import React, { useContext, useState } from 'react';
import ReactPlayer from 'react-player';
import { VideoContext } from '../context/VideoContext';

const MediaPlayer = () => {
  const { videos } = useContext(VideoContext);
  const [currentPlaylistIndex, setCurrentPlaylistIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const playlists = [
    //RoadMaps
    'PLTjRvDozrdlx82aIrsHY_Ndr3mKGK4tgq',
    //Playlist = Coding Tools 
    'PLTjRvDozrdlzHQolHzfa-xZ79InSMpbCe',
    //Playlist = C# Tutorials
    'gfkTfcpWqAY&list=PLTjRvDozrdlz3_FPXwb6lX_HoGXa09Yef',
    //Playlist = Typescript Tutorials
    'PLTjRvDozrdlxJjrQ4phZAUmiRn-HbK3M_',
    //Playlist = AWS Tutorial
    'PLwyXYwu8kL0wg9R_VMeXy0JiK5_c70IrV',
    //Playlist = React Tutorials 
    'PLNqp92_EXZBJs6rKouX5U8-tWJgTLaeKv',

    // Add more playlist IDs here
  ];

  const handleVideoEnd = () => {
    if (currentVideoIndex < filteredVideos.length - 1) {
      setCurrentVideoIndex((prevIndex) => prevIndex + 1);
    } else {
      // Move to the next playlist
      setCurrentPlaylistIndex((prevIndex) =>
        prevIndex === playlists.length - 1 ? 0 : prevIndex + 1
      );
      setCurrentVideoIndex(0);
    }
  };

  const handlePlaylistChange = (index) => {
    setCurrentPlaylistIndex(index);
    setCurrentVideoIndex(0);
  };

  const getThumbnailUrl = (url) => {
    const videoId = url.split('v=')[1] || url.split('/').pop();
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  };

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-primary mb-4">Watch Tutorials</h3>

      {/* Search Bar */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search videos..."
        className="w-full p-2 mb-6 border border-gray-300 rounded-md"
      />

      <ReactPlayer
        url={`https://www.youtube.com/playlist?list=${playlists[currentPlaylistIndex]}&index=${currentVideoIndex + 1}`}
        controls
        playing
        onEnded={handleVideoEnd}
        className="rounded-lg overflow-hidden"
        width="100%"
        height="480px"
      />
      <p className="text-gray-500 mt-4 mb-4">
        Playing: {filteredVideos[currentVideoIndex]?.title || 'No video found'}
      </p>

      {/* Horizontal Scrollable Video List */}
      <div className="w-full overflow-x-auto">
        <div className="flex space-x-4">
          {filteredVideos.map((video, index) => (
            <div
              key={index}
              className={`flex-shrink-0 cursor-pointer rounded-lg p-2 ${
                index === currentVideoIndex
                  ? 'bg-primary text-white'
                  : 'bg-gray-100'
              } hover:bg-primary hover:text-white transition duration-300`}
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

      {/* Playlist Navigation */}
      <div className="flex justify-center mt-6 space-x-4">
        {playlists.map((playlist, index) => (
          <button
            key={index}
            onClick={() => handlePlaylistChange(index)}
            className={`px-4 py-2 rounded-md ${
              index === currentPlaylistIndex
                ? 'bg-primary text-white'
                : 'bg-gray-200'
            } hover:bg-primary hover:text-white transition duration-300`}
          >
            Playlist {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MediaPlayer;
