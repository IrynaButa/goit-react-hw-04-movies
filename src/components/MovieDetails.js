import styles from './MovieDetails.module.css';
import { getMovieDetails } from '../service/tmdbAPI';
import { BASE_IMAGE_URL } from '../../constants';

 function MovieDetailsPage({
  title,
  vote_average,
  homepage,
  genres,
  poster_path,
  backdrop_path,
  overview,
}) {
  const posterUrl = getMovieDetails(poster_path);
  return (
    <article className={styles.article}>
     <h1 className={styles.MovieDetails__title}>{title}</h1>
				<div className={styles.MovieDetails__grid}>
					<img src={`${BASE_IMAGE_URL}/w500${poster_path}`} alt={title} />
					<div>
						{genres.length && (
							<ul className={styles.MovieDetails__genres}>
								{genres.map(genre => (
									<li
										className={styles.MovieDetails__genres__item}
										key={genre.id}
									>
										{genre.name}
									</li>
								))}
							</ul>
          )}
        </div>
        </div>
    </article>
  );
}
export default MovieDetailsPage;