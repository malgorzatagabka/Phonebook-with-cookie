import style from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/fiterSlice';
import debounce from 'debounce';
import TextField from '@mui/material/TextField';

export const Filter = () => {
    
  const dispatch = useDispatch();

  const onChange = debounce(e => {
  const value = e.target.value.toLowerCase();

  dispatch(setFilter(value));
    
  },1000);


  return (
    <label className={style.filterLabel}>
      Find contact by name
      <TextField className={style.filterInput}
        type="name"
        label="Search"
        id="demo-helper-text-misaligned"
        color="secondary" 
        onChange={onChange} />
    </label>
  );
};
