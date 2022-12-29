import ContactForm from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactsList/ContactsList';
import style from '../components/App.module.css';
import { useGetContactsQuery } from '../redux/auth/contactsApi';
import Loader from 'components/Loader/Loader';

const Contacts = () => {
  const { data: isLoggedIn, isLoading, isError, error } = useGetContactsQuery();

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (isLoggedIn) {
    content = (
      <div className={style.container}>
        <h1>Phonebook</h1>
        <div className={style.wrapper}>
          <ContactForm />
          <Filter />
        </div>
        <ContactList />
      </div>
    );
  } else if (isError) {
    content = <p>{JSON.stringify(error)}</p>;
  }
  return content;
};

export default Contacts;
