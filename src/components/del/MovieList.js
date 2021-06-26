import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import s from '../components/MovieList.module.css';
import noImage from '../../src/logo.svg';

//import { MovieItem } from './MovieItem';

function MovieList({ movies }) {
  return (
    <ul className={s.list}>
      {movies.map(({ id, title, poster_path, original_name }) => {
        return (
          <li key={id} className={s.movie}>
            <NavLink to={`movies/${id}`} className={s.movie}>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : noImage
                }
                alt=""
                width="200"
                height="300"
                className={s.poster}
              />
              <p>{title ? title : original_name}</p>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
// MovieList.defaultProps = {
// 	movies: [],
// };

// MovieList.propTypes = {
// 	movies: PropTypes.array,
// };
export default MovieList;

