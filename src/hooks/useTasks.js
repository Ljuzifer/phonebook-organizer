import { useSelector } from 'react-redux';
import {
  selectAllTasks,
  selectFilter,
  selectLoading,
} from 'redux/tasks/selectors';

export const useTasks = () => {
  const tasks = useSelector(selectAllTasks);
  const filter = useSelector(selectFilter);
  const loading = useSelector(selectLoading);

  return {
    tasks,
    filter,
    loading,
  };
};
