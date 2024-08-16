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
  const { _id, name, phone, email, avatarURL } = contact;
  const dispatch = useDispatch();
  const location = useLocation();

  const onContactDelete = () => dispatch(fetchDeleteContact(_id));

  return (
    <ListItem>
      <ListItemLink to={`/contacts/${_id}`} state={{ from: location }}>
        {/* <div style={{ width: '100%', height: '100%' }}> */}
        <img src={avatarURL} alt="Contact's avatar" />
        {/* </div> */}
        <HiMicrophone size={22} />
        <div>
          <span>{name}</span>
          {phone && (
            <p>
              phone: <b>{phone}</b>
            </p>
          )}
          {email && (
            <p>
              email: <b>{email}</b>
            </p>
          )}
        </div>
      </ListItemLink>
      <DelBtnItem type="button" onClick={onContactDelete}>
        Delete
      </DelBtnItem>
    </ListItem>
  );
}
