import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import CountOfContacts from 'components/CountOfContacts/CountOfContacts';
import Message from 'components/Message/Message';

import { fetchContacts } from 'redux/contacts/operations';
import { selectTotalContacts } from 'redux/contacts/selectors';
import { Box } from 'components/GlobalStyle';
import { ContactsGlobalStyle, ContactsDesk } from './Contacts.styled';
// import { Toaster } from 'react-hot-toast';

export default function Contacts() {
  const dispatch = useDispatch();
  const totalContacts = useSelector(selectTotalContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <Box>
        <Helmet>
          <title>Your contacts</title>
        </Helmet>

        <h1>Phonebook-Organizer</h1>
        <ContactsDesk>
          <ContactForm />
          <div>
            <h2>Contacts</h2>
            <CountOfContacts />
            <Filter />
            {totalContacts === 0 ? (
              <Message message="Oops! Contact's list is empty..." />
            ) : (
              <ContactList />
            )}
          </div>
        </ContactsDesk>
        <ContactsGlobalStyle />
        {/* <Toaster /> */}
      </Box>
    </HelmetProvider>
  );
}
