import { createGlobalStyle } from 'styled-components';
import notFoundImage from '../images/not_found.jpg';

export const NotFoundGlobalStyle = createGlobalStyle`
body{
    background-image: url(${notFoundImage});
}
`;
