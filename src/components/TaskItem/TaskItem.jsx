import { useDispatch } from 'react-redux';
import { Checkbox, DelButton, TaskThumb, Text } from './TaskItem.styled';
import { fetchDeleteTask, fetchToggleTask } from 'redux/tasks/operations';

export default function TaskItem({ id, text, completed }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(fetchDeleteTask(id));
  };
  const handleToggle = () =>
    dispatch(fetchToggleTask({ taskId: id, completed }));

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
