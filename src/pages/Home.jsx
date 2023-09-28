import { useAuth } from 'hooks';
import { Helmet } from 'react-helmet';
import { HomeGlobalStyle } from './Home.styled';
import Register from './Register';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <Helmet>
        <link
          href="../../public/icons8-office-phone-32.png"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <title>Phonebook</title>
      </Helmet>
      {!isLoggedIn ? (
        <Register />
      ) : (
        <div style={styles.container}>
          <h1 style={styles.title}>
            Phonebook manager welcome page{' '}
            <span role="img" aria-label="Greeting icon">
              💁‍♀️
            </span>
          </h1>
          <HomeGlobalStyle />
        </div>
      )}
    </>
  );
}
