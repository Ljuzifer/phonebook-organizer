import { HiMicrophone } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { fetchDeleteContact } from 'redux/contacts/operations';
import { ListItemLink, DelBtnItem, ListItem } from './ContactItem.styled';
// import { deleteContact } from 'redux/contactsSlice';
// import { deleteContact } from 'redux/actions';

export default function ContactItem({ contact }) {
  // const contacts = useSelector(getContacts);
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  const location = useLocation();

  const onContactDelete = () => dispatch(fetchDeleteContact(id));

  return (
    <ListItem>
      <ListItemLink to={`/contacts/${id}`} state={{ from: location }}>
        <HiMicrophone size={22} />
        <div>
          <span>{name}</span>
          <b>{number} </b>
        </div>
      </ListItemLink>
      <DelBtnItem type="button" onClick={onContactDelete}>
        Delete
      </DelBtnItem>
    </ListItem>
  );
}
