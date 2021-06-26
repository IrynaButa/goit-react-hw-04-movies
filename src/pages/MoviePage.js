import {Component} from 'react'
import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { searchMovies } from '../service/tmdbAPI';
//import Loader from '../../components/Loader/Loader';
import Status from '../service/status';
//import ErrorView from '../../components/ErrorView/ErrorView';

import SearchBar from '../components/SearchBar';
import MovieGallery from '../components/MovieGallery'
import s from './MoviesPage.module.css';


class MoviePage extends Component {
  state = {
    query: ''
  };

  
  handleSubmitSearchbar = (query) => {
    this.setState({ query });
  };
  render() {
    return (
       <>
        <SearchBar onSubmit={this.handleSubmitSearchbar} />
        <MovieGallery query={this.state.query} />
      </>
    );
  }
}

export default MoviePage;


// function MoviesPage() {
//   const { url } = useRouteMatch();
//   const [query, setQuery] = useState('');
//   const [movies, setMovies] = useState(null);
//   const [error, setError] = useState(null);
//   const [status, setStatus] = useState(Status.IDLE);

//   useEffect(() => {
//     if (!query) {
//       return;
//     }

//     setStatus(Status.PENDING);
//     searchMovies(query)
//       .then(({ results }) => {
//         if (results.length === 0) {
//           setError(`No results were found for ${query}!`);
//           setStatus(Status.REJECTED);
//           return;
//         }

//         setMovies(results);
//         setStatus(Status.RESOLVED);
//       })
//       .catch(error => {
//         setError(error.message);
//         setStatus(Status.REJECTED);
//       });
//   }, [query]);

//   const searchImages = newSearch => {
//     if (query === newSearch) {
//       return;
//     }

//     setQuery(newSearch);
//     setMovies(null);
//     setError(null);
//     setStatus(Status.IDLE);
//   };

//   return (
//     <main className={s.main}>
//       <SearchBar onSubmit={searchImages} />

//       {/* {status === Status.PENDING && <Loader />} */}

//       {/* {status === Status.REJECTED && <ErrorView message={error} />} */}

//       {status === Status.RESOLVED && (
//         <ul className={s.moviesList}>
//           {movies.map(movie => (
//             <li key={movie.id} className={s.moviesItem}>
//               <Link to={`${url}/${movie.id}`}>
//                 <img
//                   src={
//                     movie.poster_path
//                       ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
//                       : noImageFound
//                   }
//                   alt={movie.title}
//                   className={s.poster}
//                 />
//               </Link>
//               <p className={s.movieTitle}>{movie.title}</p>
//             </li>
//           ))}
//         </ul>
//         )} 
//     </main>
//   );
// }
// export default MoviesPage;