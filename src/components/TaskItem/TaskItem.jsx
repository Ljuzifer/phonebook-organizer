import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from 'redux/tasks/tasksSlice';
import { Checkbox, DelButton, TaskThumb, Text } from './TaskItem.styled';

export default function TaskItem({ id, text, completed }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(id));
  const handleToggle = () => dispatch(toggleCompleted(id));

  return (
    <TaskThumb>
      <Checkbox type="checkbox" checked={completed} onChange={handleToggle} />
      <Text>{text}</Text>
      <DelButton type="button" onClick={handleDelete}>
        Delete
      </DelButton>
    </TaskThumb>
  );
}
