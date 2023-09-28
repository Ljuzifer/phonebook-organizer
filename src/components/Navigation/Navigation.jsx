import { useAuth } from 'hooks';
import { NavigationLink, NavThumb } from './Navigation.styled';

export default function Navigation() {
  const { isLoggedIn } = useAuth();

  return (
    <NavThumb>
      <NavigationLink to="/">Home</NavigationLink>
      {isLoggedIn && (
        <>
          <NavigationLink to="/contacts">Contacts</NavigationLink>
          <NavigationLink to="/tasks">Tasks</NavigationLink>
        </>
      )}
    </NavThumb>
  );
}
