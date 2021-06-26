import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as apiService from '../../service/tmdbAPI';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Status from '../../service/status';
import Loader from '../../components/Loader/Loader';
import s from './Reviews.module.css';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    apiService
      .getMovieReviews(movieId)
      .then(({ results, total_pages }) => {
        if (results.length === 0) {
          toast.error("Sorry. We don't have any reviews for this movie.");
          setStatus(Status.IDLE);
          return;
        }
        setReviews(results);
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
        <>
          <ul>
            {reviews.map(review => (
              <li key={review.id} className={s.item}>
                <h4 className={s.author}>Author: {review.author}</h4>
                <p className={s.content}>{review.content}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
export default Reviews;