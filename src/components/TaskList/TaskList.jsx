import TaskItem from 'components/TaskItem/TaskItem';
import { List } from './TaskList.styled';
import { useSelector } from 'react-redux';
import { selectAllTasks } from 'redux/tasks/selectors';

export default function TaskList() {
  const tasks = useSelector(selectAllTasks);
  console.log(tasks);

  return (
    <List>
      {tasks.map(({ _id, text, completed }) => (
        <li key={_id}>
          <TaskItem id={_id} text={text} completed={completed} />
        </li>
      ))}
    </List>
  );
}
