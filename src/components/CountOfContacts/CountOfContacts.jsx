import { useSelector } from 'react-redux';
import {
  selectTotalContacts,
  selectVisibleContacts,
} from 'redux/contacts/selectors';
import { ItemsCount } from './CountOfContacts.styled';

export default function CountOfContacts() {
  const visibleContacts = useSelector(selectVisibleContacts);
  const totalContacts = useSelector(selectTotalContacts);

  return (
    <>
      <ItemsCount>
        <div>
          Total contacts:<b> {totalContacts}</b>
        </div>{' '}
        <div>
          Shown contacts:
          <b> {visibleContacts.length}</b>
        </div>
      </ItemsCount>
    </>
  );
}
