import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import ContactItem from 'components/ContactItem/ContactItem';
import { List, ListItemLink } from './ContactList.styled';
// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/contacts/operations';
import { useLocation } from 'react-router-dom';

export default function ContactList() {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const location = useLocation();
  const visibleContacts = useSelector(selectVisibleContacts);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  // const handleContactClick = contactId => {
  //   navigate(`/contacts/${contactId}`);
  // };

  return (
    <List>
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          <ListItemLink
            to={`/contacts/${contact.id}`}
            state={{ from: location }}
          >
            <ContactItem contact={contact} />
          </ListItemLink>
        </li>
      ))}
    </List>
  );
}
