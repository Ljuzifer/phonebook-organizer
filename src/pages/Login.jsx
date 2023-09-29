import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { LoginGlobalStyle } from './Login.styled';
import { Box } from 'components/GlobalStyle';

export default function Login() {
  return (
    <Box>
      <Helmet title="Login" />

      <h2>Login Form</h2>
      <h5>Please sign up and let's work!!!</h5>
      <LoginForm />
      <LoginGlobalStyle />
    </Box>
  );
}
