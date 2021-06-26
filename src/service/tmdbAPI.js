

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '485d9041c92ec8ba4800b24ef3f52471';

async function apiService(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(
        new Error('404 The resource you requested could not be found 🥺'),
      );
}

export function getTrending() {
  return apiService(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
}

export function searchMovies(query) {
  return apiService(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`,
  );
}

export function getMovieDetails(movieId) {
  return apiService(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
}

export function getMovieCredits(movieId) {
  return apiService(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
}

export function getMovieReviews(movieId) {
  return apiService(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
}