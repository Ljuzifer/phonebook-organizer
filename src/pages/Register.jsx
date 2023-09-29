import { Helmet } from 'react-helmet';
import RegisterForm from 'components/RegisterForm/RegisterForm';
// import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { RegisterStyle } from './Register.styled';
import { Box } from 'components/GlobalStyle';

export default function Register() {
  return (
    <Box>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
      <RegisterStyle />
    </Box>
  );
}
