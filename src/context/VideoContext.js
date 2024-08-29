import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const VideoContext = createContext();

export const VideosProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = 'AIzaSyCC-1evfYVYIQTWMb4zLeijNr5SrWytl_w'; // Replace with your YouTube API key
  const PLAYLIST_ID = 'PLTjRvDozrdlxcA1Zc_EF5PMNfUW9IuWzm'; // Replace with your YouTube playlist ID
  const API_URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&key=${API_KEY}`;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(API_URL);
        setVideos(response.data.items.map(item => ({
          id: item.snippet.resourceId.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnail: item.snippet.thumbnails.high.url,
          url: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
        })));
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchVideos();
  }, [API_URL]);

  return (
    <VideoContext.Provider value={{ videos, loading, error }}>
      {children}
    </VideoContext.Provider>
  );
};
