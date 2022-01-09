import { Switch, Route, NavLink } from 'react-router-dom';
import { HomePage } from '../HomePage/HomePage';
import { MoviesPage } from '../MoviesPage/MoviesPage';
import { MovieDetailsPage } from '../MovieDetailsPage/MovieDetailsPage';
import s from './App.module.css';

export default function App() {
  return (
    <>
      <nav className={s.nav}>
        <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
          Home
        </NavLink>
        <NavLink to="/movies" className={s.link} activeClassName={s.activeLink}>
          Movies
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/movies">
          <MoviesPage />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
        <Route>
          <HomePage />
        </Route>
      </Switch>
    </>
  );
}
