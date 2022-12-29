import { useSignupMutation } from 'redux/auth/contactsApi';
import { useNavigate } from 'react-router-dom';

import style from '../ContactForm/ContactForm.module.css';
import TextField from '@mui/material/TextField';
import { toast } from 'react-toastify';


export const RegisterForm = () => {
  const [signup] = useSignupMutation();
  const navigate = useNavigate();
 
  const handleSubmit = async evt => {
    const form = evt.target;
    const {
      name: { value: name },
      email: { value: email },
      password: { value: password },
    } = form;

    const credentials = { name, email, password };

    evt.preventDefault();

    await signup(credentials)
      .unwrap()
      .then(() => navigate('/contacts'))
      .catch(() => {
        toast.warn('User with this email address already exists', {
  icon: "🦄",  theme: "dark"
});
      });

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className={style.form}>
      <div className={style.formText}>Please Sign In</div>
      <label className={style.formText}>
        <TextField
          label="Name"
          id="demo-helper-text-misaligned"
          type="text"
          name="name"
          required
          className={style.formInput}
          color="secondary" 
        />
      </label>
      <label className={style.formText}>
        <TextField
          label="Email"
          id="outlined-basic"
          type="email"
          name="email"
          autoComplete="off"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
          className={style.formInput}
          color="secondary" 
        />
      </label>
      <label className={style.formText}>
        <TextField
          label="Password"
          helperText="Password should contain min. eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
          
          type="password"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
          name="password"
          autoComplete="off"
          required
          className={style.formInput}
          color="secondary" 
        />
      </label>
      <button className={style.formBtn} type="submit">
        Register
      </button>
    </form>
  );
};
