import { HiMicrophone } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
import { fetchDeleteContact } from 'redux/contacts/operations';
// import { deleteContact } from 'redux/contactsSlice';
// import { deleteContact } from 'redux/actions';

export default function ContactItem({ contact }) {
  // const contacts = useSelector(getContacts);
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  const onContactDelete = () => dispatch(fetchDeleteContact(id));

  return (
    <>
      <HiMicrophone />
      <span>{name}</span>
      <div>
        <span>{number} </span>
        <button type="button" onClick={onContactDelete}>
          Delete
        </button>
      </div>
    </>
  );
}
