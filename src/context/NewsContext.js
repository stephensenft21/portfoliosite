import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = '32781bab-418f-437f-baa8-be4357aacc35'; // Your Perigon API key
  const API_URL = `https://api.perigon.io/v1/articles?categories=technology&apiKey=${API_KEY}`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(API_URL);
        setNews(response.data.articles.map(article => ({
          id: article.id, // Unique identifier
          title: article.title,
          imageUrl: article.image_url,
          excerpt: article.summary,
          link: article.url,
          isBlog: false, // Adjust as necessary
        })));
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchNews();
  }, [API_URL]);

  return (
    <NewsContext.Provider value={{ news, loading, error }}>
      {children}
    </NewsContext.Provider>
  );
};
