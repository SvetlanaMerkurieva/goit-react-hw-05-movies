import { Switch, Route } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { HomePage } from '../../pages/HomePage';

export default function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </>
  );
}
