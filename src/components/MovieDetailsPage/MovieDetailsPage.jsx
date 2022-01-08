import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const MovieDetailsPage = () => {
  const { movieId } = useParams();

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
  }, []);

  return (
    <div>
      {error && <h1>{error.message}</h1>}
      <button type="button">Go back</button>
      {movie && (
        <section>
          <img srs={movie.poster_path} alt={movie.title}></img>
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
          <li>Cast</li>
          <li>Reviews</li>
        </ul>
      </div>
    </div>
  );
};
