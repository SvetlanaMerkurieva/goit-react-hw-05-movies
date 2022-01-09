import { useState, useEffect } from 'react';
//import { lazy, Suspense } from 'react'; - НЕ РАБОТАЕТ
import {
  useParams,
  Link,
  useRouteMatch,
  Route,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';
import s from '../MovieDetailsPage/MovieDetailsPage.module.css';

//const Cast = lazy(() =>
// import('../Cast/Cast.jsx' /*webpackChunckName: "cast"*/),
//);
//const Reviews = lazy(() =>
// import('../Reviews/Reviews.jsx' /*webpackChunckName: "reviews"*/),
//); - НЕ РАБОТАЕТ

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { url } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  console.log(location);

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

  const onClickGoBack = () => {
    history.push(location?.state?.from ?? '/');
  };
  console.log(movie);

  return (
    <div>
      {error && <h1>{error.message}</h1>}
      <button type="button" onClick={onClickGoBack} className={s.button}>
        Go back
      </button>
      {movie && (
        <section className={s.section}>
          <img
            className={s.image}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          ></img>
          <div className={s.description}>
            <h1 className={s.title}>
              {movie.title} ({movie.release_date.substr(0, 4)})
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
          </div>
        </section>
      )}
      <div className={s.addInfo}>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link
              to={{
                pathname: `${url}/cast`,
                state: { from: location },
              }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to={{ pathname: `${url}/reviews`, state: { from: location } }}
            >
              Reviews
            </Link>
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
