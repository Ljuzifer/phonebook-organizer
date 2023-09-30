import TaskItem from 'components/TaskItem/TaskItem';
import { useTasks } from 'hooks/useTasks';
import { List } from './TaskList.styled';

export default function TaskList() {
  const { tasks } = useTasks();

  return (
    <List>
      {tasks.map(({ id, text, completed }) => (
        <li key={id}>
          <TaskItem id={id} text={text} completed={completed} />
        </li>
      ))}
    </List>
  );
}
