import { useState, useEffect, Suspense } from 'react';
import { lazy } from 'react';
import {
  useParams,
  NavLink,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import Loader from 'react-loader-spinner';
import s from './MovieDetailsPage.module.css';
import { getMovieDetails } from '../service/tmdbAPI';
import MovieDetails from '../components/MovieDetails';

const Cast = lazy(() => import('./Cast' /* webpackChunkName: "cast" */));
const Reviews = lazy(() =>
  import('./Reviews' /* webpackChunkName: "reviews" */),
);



function MovieDetailsPage() {
  const [movie, setMovie] = useState([]);

  const { movieId } = useParams();
  const { url, path } = useRouteMatch();

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <MovieDetails {...movie} />

       <ul className={s.nav}>
            <li>
              <NavLink
                to={`${url}/cast`}
                className={s.link}
                activeClassName={s.activeLink}
              >
                Cast
              </NavLink>
            </li>

            <li>
              <NavLink
                to={`${url}/reviews`}
                className={s.link}
                activeClassName={s.activeLink}
              >
                Reviews
              </NavLink>
            </li>
          </ul>

          <Suspense fallback={<Loader />}>
           
          <Route path={`${path}/cast`}>
            <Cast movieId={movieId} />
          </Route>

          <Route path={`${path}/reviews`}>
            <Reviews movieId={movieId} />
          </Route>
        
          </Suspense>
    </>
  );
}
export default MovieDetailsPage;