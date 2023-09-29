import { Helmet } from 'react-helmet';
import Register from './Register';
import { useAuth } from 'hooks';
import { Box } from 'components/GlobalStyle';
import { HomeGlobalStyle } from './Home.styled';
import { GiOldMicrophone } from 'react-icons/gi';
export default function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Helmet title="Phonebook" />

      {!isLoggedIn ? (
        <Register />
      ) : (
        <Box>
          <h1>Phonebook manager welcome page</h1>

          <GiOldMicrophone />
          <HomeGlobalStyle />
        </Box>
      )}
    </>
  );
}
