const BASE_URL = import.meta.env.VITE_NEWS_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async () => {
  try {
    const response = await fetch(`${BASE_URL}latest-news?apiKey=${API_KEY}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
