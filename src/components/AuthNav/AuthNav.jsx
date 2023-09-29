import { AuthBox, AuthLink } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <AuthBox>
      <AuthLink to="/register">Register</AuthLink>
      <AuthLink to="/login">Log In</AuthLink>
    </AuthBox>
  );
}
