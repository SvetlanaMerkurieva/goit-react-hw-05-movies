import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import shortid from 'shortid';
import s from './HomePage.module.css';

const HomePage = () => {
  const location = useLocation();

  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=597522cf6881ad12863cfcef806a7c6d&page=1&per_page=20',
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

  return (
    <section className={s.movies}>
      <h1>Trending today</h1>
      <div>
        {error && <h1>{error.message}</h1>}
        {movies && (
          <ul>
            {movies.results.map(movie => (
              <li key={shortid()}>
                <Link
                  className={s.link}
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: { from: location },
                  }}
                >
                  {movie.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default HomePage;
