import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import s from './Cast.module.css';

export const Cast = () => {
  const { movieId } = useParams();

  const [actors, setActors] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=597522cf6881ad12863cfcef806a7c6d&language=en-US`,
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(`К сожалению, описания фильма нет`));
      })
      .then(actors => setActors(actors.cast))
      .catch(e => setError(e));
  }, [movieId]);

  console.log(actors);

  return (
    <div className={s.div}>
      {error && <h1>{error.message}</h1>}
      {actors && (
        <section className={s.actors}>
          {actors.map(actor => (
            <div className={s.item} key={actor.id}>
              <img
                className={s.image}
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
              ></img>
              <h3>{actor.original_name}</h3>
              <p>Character: {actor.character}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};
