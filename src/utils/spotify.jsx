import axios from 'axios';

const SPOTIFY_API_URL = 'https://api.spotify.com/v1';

const getSpotifyData = async (endpoint, params, token) => {
  try {
    const response = await axios.get(`${SPOTIFY_API_URL}/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data from Spotify API', error);
    throw error;
  }
};

export const fetchIndianSongs2023 = async (token) => {
  const params = {
    q: 'year:2023',
    type: 'track',
    market: 'IN',
    limit: 50,
  };
  return getSpotifyData('search', params, token);
};