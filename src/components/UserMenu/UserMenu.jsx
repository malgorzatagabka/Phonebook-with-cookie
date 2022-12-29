import { useDispatch } from 'react-redux';
import { useLogoutMutation } from 'redux/auth/contactsApi';
import { useAuth } from 'utils/hooks/useAuth';
import style from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [logout] = useLogoutMutation();

  return (
    <div>
      <p className={style.username}>Welcome, {user.name}</p>
      <button className={style.userBtn} type="button" onClick={() => dispatch(logout())}>
        LOG OUT
      </button>
    </div>
  );
};

