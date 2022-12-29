import { useLoginMutation } from 'redux/auth/contactsApi';
import style from "../ContactForm/ContactForm.module.css"
import TextField from '@mui/material/TextField';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';


export const LoginForm = () => {

  const [login] = useLoginMutation();
 
  const handleSubmit = async evt => {
    const form = evt.target;
    const {
      email: { value: email },
      password: { value: password },
    } = form;

    const credentials = { email, password };
    evt.preventDefault();
    await login(credentials)
      .unwrap()
      .then(({ token }) => Cookies.set('token', token))
      .catch(() => {
        toast.warn('Please check your email address or password');
      });

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="current-password" className={style.form}>
      <div className={style.formText}>Please Log In</div>
      <TextField
        label="Email"
        id="demo-helper-text-misaligned"
      type="email"
        name="email"
        required
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        color="secondary" 
        className={style.formInput}
      />
      <label className={style.formText}>
       
       
      </label>
      <label>
        <TextField
          label="Password"
        id="validation-outlined-input"
          type="password"
          required
          name="password"
          color="secondary" 
         className={style.formInput}
        />
      </label>
      <button className={style.formBtn} type="submit">LOG IN</button>
    </form>
  );
};
