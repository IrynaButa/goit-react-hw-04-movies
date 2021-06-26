import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as apiService from '../../service/tmdbAPI';
import Status from '../../service/status';
import Loader from '../../components/Loader/Loader';
import noImageFound from '../../logo.svg';
import s from './Cast.module.css';

function Cast() {
  const { movieId } = useParams();
  const [authors, setAuthors] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    apiService
      .getMovieCredits(movieId)
      .then(({ cast }) => {
        if (cast.length === 0) {
          toast.error('Oops.. No results!');
          setStatus(Status.IDLE);
          return;
        }
        setAuthors(cast);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        toast.error('Something went wrong. Try again.');
        setStatus(Status.REJECTED);
      });
  }, [movieId]);

  return (
    <>
      {status === Status.PENDING && <Loader />}

      {status === Status.RESOLVED && (
        <ul className={s.cast}>
          {authors.map(author => (
            <li key={author.id} className={s.item}>
              <img
                src={
                  author.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${author.profile_path}`
                    : noImageFound
                }
                alt={author.original_name}
                className={s.photo}
              />
              <h4 className={s.name}>{author.original_name}</h4>
              <p className={s.character}>{author.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Cast;