import { createGlobalStyle } from 'styled-components';
import registerImage from '../images/register.jpg';

export const RegisterStyle = createGlobalStyle`
body{
    /* background-image: url('https://kartinki.pics/uploads/posts/2021-07/thumbs/1625655412_56-kartinkin-com-p-biblioteka-art-art-krasivo-61.jpg'); */

    background-image: url(${registerImage});
}
`;
