import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink exact to="/" className={s.link} activeclassname={s.activeLink}>
        Home
      </NavLink>
      <NavLink to="/movies" className={s.link} activeclassname={s.activeLink}>
        Movies
      </NavLink>
    </nav>
  );
};
