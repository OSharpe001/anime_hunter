import axios from 'axios';

const BASE_URL = "https://anime-db.p.rapidapi.com";

const options = {
  method: 'GET',
//   url: 'https://anime-db.p.rapidapi.com/anime',
  params: {
    page: '1',
    size: '10',
    // search: 'Fullmetal',
    // genres: 'Fantasy,Drama',
    sortBy: 'ranking',
    sortOrder: 'asc'
  },
  headers: {
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};