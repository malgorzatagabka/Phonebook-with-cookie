import { useAuth } from 'utils/hooks/useAuth';
import { WelcomePage } from "./WelcomePage";
import { AuthPage } from "./AuthPage";
import style from '../components/App.module.css';

const Home = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div className={style.container}>
      <h1>
        Phonebook{' '}
      </h1>
      {isLoggedIn ? <AuthPage /> : <WelcomePage />}
  
    </div>
  );
}

export default Home;
