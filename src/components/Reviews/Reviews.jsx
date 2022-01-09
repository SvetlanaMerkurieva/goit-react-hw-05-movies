import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import s from './Reviews.module.css';

export const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState(null);
  const [reviewsLength, setReviewsLength] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=597522cf6881ad12863cfcef806a7c6d&language=en-US`,
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(`К сожалению, обзоров фильма нет`));
      })
      .then(reviews => {
        setReviews(reviews.results);
        setReviewsLength(reviews.results.length);
      })
      .catch(e => setError(e));
  }, [movieId, reviewsLength]);

  if (reviewsLength === 0) {
    return <h3 className={s.text}>К сожалению, обзоров фильма нет</h3>;
  return (
    <div className={s.div}>
      {error && <h1>{error.message}</h1>}
      {reviews && (
        <section>
          {reviews.map(review => (
            <div key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};
