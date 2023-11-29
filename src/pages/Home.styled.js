import { createGlobalStyle } from 'styled-components';
import HomeImage from '../../public/img/home.jpg';

export const HomeGlobalStyle = createGlobalStyle`
body{
    /* background-image: url('https://kartinki.pics/uploads/posts/2021-07/1625655366_42-kartinkin-com-p-biblioteka-art-art-krasivo-47.jpg'); */

    background-image: url(${HomeImage});
}

svg{
    width: 220px;
    height: 220px;
    color: midnightblue;
}
`;
