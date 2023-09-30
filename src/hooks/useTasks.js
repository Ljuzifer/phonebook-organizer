import { useSelector } from 'react-redux';
import { selectAllTasks } from 'redux/tasks/selectors';

export const useTasks = () => {
  const tasks = useSelector(selectAllTasks);

  return tasks;
};
