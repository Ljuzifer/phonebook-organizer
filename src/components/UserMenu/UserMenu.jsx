import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';
import { Wrapper } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  console.log(user);

  return (
    <Wrapper>
      <p>Welcome, {user.name ?? 'unnamed user :)'}</p>
      <img src={user.avatar} alt="User's avatar" />
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </Wrapper>
  );
}
