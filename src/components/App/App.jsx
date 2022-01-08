import { Switch, Route } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { HomePage } from '../../pages/HomePage';
import { MoviesPage } from '../../pages/MoviesPage';
import { MovieDetailsPage } from '../MovieDetailsPage/MovieDetailsPage';

export default function App() {
  return (
    <>
      <Navigation />
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
