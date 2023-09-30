import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from 'redux/tasks/tasksSlice';

// import { deleteTask } from 'redux/tasks/operations';
// import { deleteTask } from 'redux/tasks/operations';
// import css from './Task.module.css';
import { DelButton, TaskThumb, Text } from './TaskItem.styled';

export default function TaskItem({ id, text, completed }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(id));
  const handleToggle = () => dispatch(toggleCompleted(id));

  return (
    <TaskThumb>
      <input type="checkbox" checked={completed} onChange={handleToggle} />
      <Text>{text}</Text>
      <DelButton type="button" onClick={handleDelete}>
        Delete
      </DelButton>
    </TaskThumb>
  );
}

// import { useDispatch } from 'react-redux';
// import { MdClose } from 'react-icons/md';
// import { deleteTask, toggleCompleted } from 'redux/tasksSlice';
// import css from './Task.module.css';

// export const Task = ({ task }) => {
//   const dispatch = useDispatch();

//   const handleDelete = () => dispatch(deleteTask(task.id));

//   const handleToggle = () => dispatch(toggleCompleted(task.id));

//   return (
//     <div className={css.wrapper}>
//       <input
//         type="checkbox"
//         className={css.checkbox}
//         checked={task.completed}
//         onChange={handleToggle}
//       />
//       <p className={css.text}>{task.text}</p>
//       <button className={css.btn} onClick={handleDelete}>
//         <MdClose size={24} />
//       </button>
//     </div>
//   );
// };
