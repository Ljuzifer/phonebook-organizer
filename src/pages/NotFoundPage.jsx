import { Box } from 'components/GlobalStyle';
import { Helmet } from 'react-helmet';
import { NotFoundGlobalStyle } from './NotFoundPage.styled';

export default function NotFound() {
  return (
    <main>
      <Helmet title="Not Found..." />
      <Box>
        <h1 style={{ fontSize: 120 }}>404</h1>
        <b style={{ fontSize: 28 }}>Sorry, we couldn't find that page...</b>
      </Box>
      <NotFoundGlobalStyle />
    </main>
  );
}
