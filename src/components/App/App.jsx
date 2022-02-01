import { lazy, Suspense } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
//import { HomePage } from '../HomePage/HomePage';
//import { MoviesPage } from '../MoviesPage/MoviesPage';
//import { MovieDetailsPage } from '../MovieDetailsPage/MovieDetailsPage';
import s from './App.module.css';

const HomePage = lazy(() =>
  import('../HomePage/HomePage.jsx' /*webpackChunkName: "home-page"*/),
);
const MoviesPage = lazy(() =>
  import('../MoviesPage/MoviesPage.jsx' /*webpackChunkName: "movies-page"*/),
);
const MovieDetailsPage = lazy(() =>
  import(
    '../MovieDetailsPage/MovieDetailsPage.jsx' /*webpackChunkName: "moviesdetails-page"*/
  ),
);
//В <Suspense fallback={<h1>Загружаем...</h1>}></Suspense> оборачивала);

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
      <Suspense fallback={<h1>Загружаем...</h1>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
        </Switch>
      </Suspense>
    </>
  );
}
