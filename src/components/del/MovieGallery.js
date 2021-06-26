import React, { Component} from "react";
import { Link} from 'react-router-dom';
//import PropTypes from "prop-types";
import s from "./MovieDetails.module.css";
import { searchMovies} from '../../service/tmdbAPI';
//import ImageItem from "./ImageItem";
import noImageFound from '../logo.svg';



class MovieGallery extends Component {
    state = {
        movies: [],
        url: '',
    currentPage: 1,
        searchQuery: '',
    query:'',
      isLoading: false,
      
    }
componentDidUpdate(prevProps, prevState) {
     if (prevProps.query !== this.props.query) {
      this.setState({ movies: [], error: null }, () =>
        this.fetchMov(),
      );
  }

  }

  fetchMov = () => {
    const { movies } = this.state;
    const { query } = this.props;

    const options = {
      query,
       
      movies,
    };

    this.setState({ isLoading: true });

    
      searchMovies(options)
         .then(movies => {
        this.setState(prevState => ({
          movies: [...prevState.movies, ...movies],
          
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };


  render() {
    const { movies, url, isLoading, error } = this.state;
    
    return (
      <>
        {error && <h1>Sorry...We are doing our best</h1>}
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

      </>
    );
  }
}

export default MovieGallery;