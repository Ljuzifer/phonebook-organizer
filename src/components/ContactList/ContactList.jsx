import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import ContactItem from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

export default function ContactList() {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          <ContactItem contact={contact} />
        </li>
      ))}
    </List>
  );
}
