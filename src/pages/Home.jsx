import { Helmet, HelmetProvider } from 'react-helmet-async';
// import Register from './Register';
// import { useAuth } from 'hooks';
import { Box } from 'components/GlobalStyle';
import { HomeGlobalStyle } from './Home.styled';
import { GiOldMicrophone } from 'react-icons/gi';
export default function Home() {
  // const { isLoggedIn } = useAuth();

  return (
    <HelmetProvider>
      <Helmet>
        <title>Organizer</title>
      </Helmet>

      {/* {!isLoggedIn ? (
        <Register />
      ) : ( */}
      <Box>
        <h1 style={{ fontSize: 44 }}>WELCOME !!!</h1>
        <b
          style={{
            display: 'inline-block',
            fontSize: 22,
            marginBottom: '13px',
            textTransform: 'uppercase',
          }}
        >
          It's your
        </b>
        <h2 style={{ fontSize: 44 }}>Phonebook Organizer</h2>

        <GiOldMicrophone />
        <HomeGlobalStyle />
      </Box>
      {/* )} */}
    </HelmetProvider>
  );
}
