import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { AppHeader } from './AppBar.styled';

export default function AppBar() {
  const { isLoggedIn } = useAuth();

  return (
    <AppHeader>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppHeader>
  );
}
