import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { LoginGlobalStyle } from './Login.styled';
import { Box } from 'components/GlobalStyle';

export default function Login() {
  return (
    <HelmetProvider>
      <Box>
        <Helmet>
          <title>Login</title>
        </Helmet>

        <h2>Login Form</h2>
        <h5>Please sign up and let's work!!!</h5>
        <LoginForm />

        <LoginGlobalStyle />
      </Box>
    </HelmetProvider>
  );
}
