import { Helmet } from 'react-helmet';
import { HomeGlobalStyle } from './Home.styled';

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
  return (
    <>
      <Helmet>
        <link
          href="https://icons8.com/icon/80357/office-phone"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <title>Phonebook</title>
      </Helmet>
      <div style={styles.container}>
        <h1 style={styles.title}>
          Phonebook manager welcome page{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
        <HomeGlobalStyle />
      </div>
    </>
  );
}
