import { useDispatch, useSelector } from 'react-redux';
import { searchFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { Search } from './Filter.styled';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onChangeFilter = newSymbol => {
    dispatch(searchFilter(newSymbol));
  };

  return (
    <Search>
      <input
        type="text"
        value={filter}
        onChange={e => onChangeFilter(e.target.value)}
        placeholder="Search..."
      />
    </Search>
  );
}
