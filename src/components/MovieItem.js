import PropTypes from 'prop-types';
import styles from './MovieList.module.css';
import { Link, withRouter } from 'react-router-dom';

//import { routes } from '../../routes';
//import { BASE_IMAGE_URL } from '../../constants';

export const MovieItem = withRouter(
	({ id, src, alt, title, date, location }) => (
		<li className={styles.MovieItem}>
			<Link
				to={{
					// pathname: `${routes.movies}/${id}`,
					state: {
						from: location,
					},
				}}
				className={styles.MovieItem__link}
			>
				<div className={styles.MovieItem__img_wrapper}>
					{/* <img src={`${BASE_IMAGE_URL}/w300/${src}`} alt={alt} /> */}
				</div>
				<div className={styles.MovieItem__descr}>
					<h3>{title}</h3>
					<p>{date}</p>
				</div>
			</Link>
		</li>
	),
);

// MovieItem.propTypes = {
// 	src: PropTypes.string.isRequired,
// 	alt: PropTypes.string.isRequired,
// 	title: PropTypes.string.isRequired,
// 	date: PropTypes.string.isRequired,
// };