import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import ContactItem from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

export default function ContactList() {
  const visibleContacts = useSelector(selectVisibleContacts);
  const sortedContacts = visibleContacts.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <List>
      {sortedContacts.map(contact => (
        <li key={contact._id}>
          <ContactItem contact={contact} />
        </li>
      ))}
    </List>
  );
}
