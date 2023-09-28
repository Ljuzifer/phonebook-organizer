import { HiMicrophone } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/contactsSlice';
import { fetchDeleteContact } from 'redux/operations';
// import { deleteContact } from 'redux/actions';

export const ContactItem = ({ contact }) => {
  // const contacts = useSelector(getContacts);
  const { id, name, phone } = contact;
  const dispatch = useDispatch();

  const onContactDelete = () => dispatch(fetchDeleteContact(id));

  return (
    <>
      <HiMicrophone />
      <span>{name}</span>
      <div>
        <span>{phone} </span>
        <button type="button" onClick={onContactDelete}>
          Delete
        </button>
      </div>
    </>
  );
};
