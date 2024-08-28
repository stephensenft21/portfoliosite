import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import * as rssParser from 'react-native-rss-parser';

// 1. Create the context with a descriptive name
export const NewsContext = createContext();

// 2. Create the provider component
export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Replace `username` with the Medium username you want to fetch articles from
        const response = await axios.get('https://medium.com/feed/@username');
        const rss = await rssParser.parse(response.data);
        
        const fetchedNews = rss.items.map(item => ({
          title: item.title,
          excerpt: item.summary,
          link: item.links[0].url,
          imageUrl: item.content.includes('<img') ? item.content.match(/<img.*?src="(.*?)"/)[1] : 'https://source.unsplash.com/featured/?medium'
        }));

        setNews(fetchedNews);
      } catch (error) {
        console.error('Error fetching Medium news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <NewsContext.Provider value={{ news, loading }}>
      {children}
    </NewsContext.Provider>
  );
};
