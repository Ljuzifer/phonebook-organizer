import { createGlobalStyle } from 'styled-components';
import LoginImage from '../images/login.jpg';

export const LoginGlobalStyle = createGlobalStyle`
body{
    /* background-image: url('https://kartinki.pics/uploads/posts/2021-07/1625655405_50-kartinkin-com-p-biblioteka-art-art-krasivo-55.jpg'); */

    background-image: url(${LoginImage});
}`;
