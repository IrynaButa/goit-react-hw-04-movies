import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '485d9041c92ec8ba4800b24ef3f52471';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = { api_key: API_KEY, language: 'en-EN' };


export const getTrending = () => {
	return axios.get('/trending/movie/week').then(res => res.data.results);
};

export const getMovieDetails = movieId => {
	return axios.get(`/movie/${movieId}`).then(res => res.data);
};

export const getMovieCredits = movieId => {
	return axios.get(`/movie/${movieId}/credits`).then(res => res.data.cast);
};

export const getMovieReviews = movieId => {
	return axios.get(`/movie/${movieId}/reviews`).then(res => res.data.results);
};

export const searchMovies = query => {
	return axios
		.get(`/search/movie?query=${query}`)
		.then(res => res.data.results);
};