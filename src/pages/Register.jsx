import { Helmet, HelmetProvider } from 'react-helmet-async';
import RegisterForm from 'components/RegisterForm/RegisterForm';
// import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { RegisterStyle } from './Register.styled';
import { Box } from 'components/GlobalStyle';

export default function Register() {
  return (
    <HelmetProvider>
      <Box>
        <Helmet>
          <title>Registration</title>
        </Helmet>

        <RegisterForm />
        <RegisterStyle />
      </Box>
    </HelmetProvider>
  );
}
