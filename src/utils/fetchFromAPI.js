import axios from 'axios';

const BASE_URL = "https://anime-db.p.rapidapi.com";

const options = {
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  // *** REMEMBER TO ERASE AFTER TESTING IS COMPLETE!! ***
  console.log("FETCHFROMAPI'S FETCH CALL URL: ", `${BASE_URL}/${url}`, options);

  return data;
};