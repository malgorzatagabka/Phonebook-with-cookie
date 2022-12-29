import { RegisterForm } from '../components/RegisterForm/RegisterForm';
import style from '../components/App.module.css';

const Register = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
