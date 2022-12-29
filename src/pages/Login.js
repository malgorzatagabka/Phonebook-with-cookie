import { LoginForm } from 'components/LoginForm/LoginForm';
import style from '../components/App.module.css';

const Login = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
