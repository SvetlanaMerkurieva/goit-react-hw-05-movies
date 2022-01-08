import { useState, useEffect } from 'react';
import { useParams, Link, useRouteMatch, Route } from 'react-router-dom';
import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';
import s from '../MovieDetailsPage/MovieDetailsPage.module.css';

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { url } = useRouteMatch();

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=597522cf6881ad12863cfcef806a7c6d&language=en-US`,
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(`К сожалению, описания фильма нет`));
      })
      .then(movie => setMovie(movie))
      .catch(e => setError(e));
  }, [movieId]);

  return (
    <div>
      {error && <h1>{error.message}</h1>}
      <button type="button">Go back</button>
      {movie && (
        <section className={s.section}>
          <img src={movie.poster_path} alt={movie.title}></img>
          <h1>
            {movie.title}({movie.release_date})
          </h1>
          <p>User Score: {movie.vote_average}</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </section>
      )}
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to={`${url}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`${url}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>
      <Route path="/movies/:movieId/cast">
        <Cast />
      </Route>
      <Route path="/movies/:movieId/reviews">
        <Reviews />
      </Route>
    </div>
  );
};
