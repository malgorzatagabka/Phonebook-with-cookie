import { Link } from "react-router-dom";
import style from '../components/App.module.css';

export const WelcomePage = () => {

    return (
      <div className={style.container}>
          <div className={style.wrapper}>
        <Link to="/register" className={style.link}> Sign in </Link> to start your journey with my app.{' '} <br></br>If you're already registered just <Link to="/login" className={style.link}>log in</Link> 
    </div>  
      </div>
      
  );
};