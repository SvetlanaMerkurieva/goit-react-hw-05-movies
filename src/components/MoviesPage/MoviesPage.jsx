import { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import s from './MoviesPage.module.css';

export const MoviesPage = () => {
  const location = useLocation();
  const history = useHistory();

  const [nameMovies, setNameMovies] = useState('');
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);

  const onChangeNameMovies = e => {
    setNameMovies(e.target.value);
  };

  const onSearchMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=597522cf6881ad12863cfcef806a7c6d&language=en-US&query=${nameMovies}&page=1&include_adult=false`,
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(
          new Error(`К сожалению, по Вашему запросу фильмов нет`),
        );
      })
      .then(movies => setMovies(movies.results))
      .catch(e => setError(e));

    history.push({ ...location, search: `query=${nameMovies}` });
    setNameMovies('');
  };
  console.log(location);
  console.log(movies);

  return (
    <>
      <form className={s.form}>
        <input
          className={s.input}
          type="text"
          value={nameMovies}
          onChange={onChangeNameMovies}
          placeholder="Enter a word to search for movies"
        ></input>
        <button type="button" onClick={onSearchMovies} className={s.button}>
          Search
        </button>
      </form>
      <section className={s.movies}>
        {error && <h1>{error.message}</h1>}
        {movies && (
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
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
      </section>
    </>
  );
};
