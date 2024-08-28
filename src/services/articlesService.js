import axios from 'axios';

const API_URL = 'https://dev.to/api/articles?per_page=5'; // Replace with the API URL you need

export const fetchArticles = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.map(article => ({
      title: article.title,
      excerpt: article.description,
      link: article.url,
      imageUrl: article.social_image,
    }));
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw new Error('Failed to fetch articles. Please try again later.');
  }
};
