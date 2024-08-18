import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import TaskList from 'components/TaskList/TaskList';
import TaskEditor from 'components/TaskEditor/TaskEditor';
import { TasksGlobalStyle } from './Tasks.styled';
import { Box } from 'components/GlobalStyle';
import { fetchTasks } from 'redux/tasks/operations';

export default function Tasks() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <Box>
        <Helmet>
          <title>Your tasks</title>
        </Helmet>

        <TaskEditor />
        <TaskList />
        <TasksGlobalStyle />
      </Box>
    </HelmetProvider>
  );
}
