import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import shortid from 'shortid';

export const MoviesInTrending = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=597522cf6881ad12863cfcef806a7c6d&page=1&per_page=20',
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(`К сожалению, фильмов нет`));
      })
      .then(movies => setMovies(movies))
      .catch(e => setError(e));
  }, []);

  console.log(movies);

  return (
    <div>
      {error && <h1>{error.message}</h1>}
      {movies && (
        <ul>
          {movies.results.map(movie => (
            <li key={shortid()}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
