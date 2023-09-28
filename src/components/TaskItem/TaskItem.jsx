import { useDispatch } from 'react-redux';
import { deleteTask } from 'redux/tasks/operations';
// import { deleteTask } from 'redux/tasks/operations';
// import css from './Task.module.css';
import { DelButton, TaskThumb, Text } from './TaskItem.styled';

export default function TaskItem({ id, text }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(id));

  return (
    <TaskThumb>
      <Text>{text}</Text>
      <DelButton type="button" onClick={handleDelete}>
        Delete
      </DelButton>
    </TaskThumb>
  );
}
