import { useDispatch } from 'react-redux';
import { EditForm } from './TaskEditor.styled';
import { fetchAddTask } from 'redux/tasks/operations';

export default function TaskEditor() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const text = form.elements.text.value;

    if (text !== '') {
      dispatch(fetchAddTask({ text }));
      form.reset();
      return;
    }
    alert('Task cannot be empty. Enter some text!');
  };

  return (
    <EditForm onSubmit={handleSubmit}>
      {/* <label htmlFor="task" name="text"></label> */}
      <input id="task" name="text" placeholder="Enter your task" />
      <button type="submit">Add task</button>
    </EditForm>
  );
}
