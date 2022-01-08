export const MoviesPage = () => {
  /*const [nameMovies, setNameMovies] = useState('');
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);

  const onChange = e => {
    setNameMovies(e.target.value);
  };

  const onClick = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=597522cf6881ad12863cfcef806a7c6d&language=en-US&page=1&include_adult=false`,
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(
          new Error(`К сожалению, по Вашему запросу фильмов нет`),
        );
      })
      .then(movies => setMovies(movies))
      .catch(e => setError(e));
  };

  console.log(movies);*/

  return (
    <form>
      <input type="text"></input>
      <button type="button">Search</button>
    </form>
  );
};
