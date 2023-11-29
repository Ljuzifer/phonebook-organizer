import { createGlobalStyle } from 'styled-components';
import tasksImage from '../images/tasks.jpg';

export const TasksGlobalStyle = createGlobalStyle`
body{
    /* background-image: url('https://kartinki.pics/uploads/posts/2021-07/1625655357_41-kartinkin-com-p-biblioteka-art-art-krasivo-46.jpg'); */

    background-image: url(${tasksImage});
}
`;
