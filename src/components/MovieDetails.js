import s from './MovieDetails.module.css';
//import { getMovieDetails } from '../service/tmdbAPI';
//import { BASE_IMAGE_URL } from '../../constants';

import noImage from '../logo.svg';

 function makeImagePath(path, size = 'w342') {
  if (!path) return noImage;
  return `https://image.tmdb.org/t/p/${size}/${path}`;
}


 function MovieDetails({
  title,
  vote_average,
  homepage,
  genres,
  poster_path,
  backdrop_path,
  overview,
}) {
  const posterUrl = makeImagePath(poster_path);
  return (
   <article className={s.article}>
      <div className={s.titleBlock}>
        <h2 className={s.movieTitle}>{title}</h2>

        <img className={s.image} src={posterUrl} alt={title} width="300" />
      </div>
      <div className={s.description}>
        <h3 className={s.title}>Genres: </h3>
        <ul className={s.genresList}>
          {genres &&
            genres.map((genre, idx) => <li key={idx}>{genre.name}</li>)}
        </ul>
        <h3 className={s.title}>Description:</h3>
        <p className={s.overview}>{overview}</p>

        <p className={s.voteText}>
          tmbd: <span className={s.vote}>{vote_average}</span>
        </p>
        <a className={s.link} href={homepage} target="_blank" rel="noreferrer">
          {/* <HiLink className={s.icon} /> */}
        </a>
      </div>
    </article>
  );
}
export default MovieDetails;