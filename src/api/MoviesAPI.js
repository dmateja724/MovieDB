const BASE_URL = `https://api.themoviedb.org`;
const API_KEY = '';

const getMovieDetails = (movieID) => {
  return fetch(
    `${BASE_URL}/3/movie/${movieID}?api_key=${API_KEY}&language=en-US`,
  ).then((response) => response.json());
};

const getPopularMovies = () => {
  return fetch(
    `${BASE_URL}/3/movie/popular?api_key=${API_KEY}`,
  ).then((response) => response.json());
};

export default {
  getPopularMovies: getPopularMovies,
  getMovieDetails: getMovieDetails,
};
