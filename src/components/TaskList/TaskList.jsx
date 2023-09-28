// import { useSelector } from 'react-redux';
// import { Task } from '../Task/Task';
// import { selectAllTasks } from 'redux/tasks/selectors';
import TaskItem from 'components/TaskItem/TaskItem';
import { useTasks } from 'hooks/useTasks';
import { List } from './TaskList.styled';
// import { TaskList } from './TaskList.styled';
// import css from './TaskList.module.css';

export default function TaskList() {
  //   const tasks = useSelector(selectAllTasks);
  const { tasks } = useTasks();

  return (
    <List>
      {tasks.map(({ id, text }) => (
        <li key={id}>
          <TaskItem id={id} text={text} />
        </li>
      ))}
    </List>
  );
}
