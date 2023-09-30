// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import TaskList from 'components/TaskList/TaskList';
import TaskEditor from 'components/TaskEditor/TaskEditor';
import { TasksGlobalStyle } from './Tasks.styled';
import { Box } from 'components/GlobalStyle';

export default function Tasks() {
  return (
    <Box>
      <Helmet title="Your tasks" />

      <TaskEditor />
      <TaskList />
      <TasksGlobalStyle />
    </Box>
  );
}
