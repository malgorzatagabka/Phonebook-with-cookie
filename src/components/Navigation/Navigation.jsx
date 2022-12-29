import { NavLink } from 'react-router-dom';
import { useAuth } from 'utils/hooks/useAuth';
import style from "../Navigation/Navigation.module.css"

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={style.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={style.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};