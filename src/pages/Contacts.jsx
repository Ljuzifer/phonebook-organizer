import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import CountOfContacts from 'components/CountOfContacts/CountOfContacts';
import Message from 'components/Message/Message';

import { fetchContacts } from 'redux/contacts/operations';
import { selectTotalContacts } from 'redux/contacts/selectors';
import { Box } from 'components/GlobalStyle';
import { ContactsGlobalStyle } from './Contacts.styled';
import { Toaster } from 'react-hot-toast';

export default function Contacts() {
  const dispatch = useDispatch();
  const contactsLength = useSelector(selectTotalContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box>
      <Helmet title="Your contacts" />

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
      <ContactsGlobalStyle />
      <Toaster />
    </Box>
  );
}
