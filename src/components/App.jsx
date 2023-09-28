import { useDispatch, useSelector } from 'react-redux';
import { selectTotalContacts } from 'redux/selectors';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Message } from './Message/Message';
import { GlobalStyle, Box } from './GlobalStyle';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { CountOfContacts } from './CountOfContacts/CountOfContacts';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  const dispatch = useDispatch();
  const contactsLength = useSelector(selectTotalContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <CountOfContacts />
      <Filter />
      {contactsLength === 0 ? (
        <Message message="Oops! Contact's list is empty..." />
      ) : (
        <ContactList />
      )}

      <GlobalStyle />
      <Toaster />
    </Box>
  );
};
