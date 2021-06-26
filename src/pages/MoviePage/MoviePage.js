import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as apiService from '../../service/tmdbAPI';
import Loader from '../../components/Loader/Loader';
import Status from '../../service/status';
import noImageFound from '../../logo.svg';
import SearchBar from '../../components/SearchBar/SearchBar';
import s from './MoviesPage.module.css';

function MoviesPage() {
  const { url } = useRouteMatch();
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    if (!query) {
      return;
    }

    setStatus(Status.PENDING);
    apiService
      .searchMovies(query)
      .then(({ results }) => {
        if (results.length === 0) {
           toast.error(`No results were found for ${query}!`);
          setStatus(Status.REJECTED);
          return;
        }

        setMovies(results);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        toast.error('Something went wrong. Try again.');
        setStatus(Status.REJECTED);
      });
  }, [query]);

  const searchMovies = newSearch => {
    if (query === newSearch) {
      return;
    }

    setQuery(newSearch);
    setMovies(null);
    setStatus(Status.IDLE);
  };

  return (
    <main className={s.main}>
      <SearchBar onSubmit={searchMovies} />

      {status === Status.PENDING && <Loader />}
      
      {status === Status.RESOLVED && (
        <ul className={s.moviesList}>
          {movies.map(movie => (
            <li key={movie.id} className={s.moviesItem}>
              <Link to={`${url}/${movie.id}`}>
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                      : noImageFound
                  }
                  alt={movie.title}
                  className={s.poster}
                />
              </Link>
              <p className={s.movieTitle}>{movie.title}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
export default MoviesPage;