import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import {
  fetchAddTask,
  fetchDeleteTask,
  fetchTasks,
  fetchToggleTask,
} from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;

  toast.success('You`ve got this!', {
    duration: 2800,
    position: 'top-center',
  });
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;

  toast.error(state.error, {
    duration: 2800,
    position: 'top-center',
  });
};

const handleAddFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);

  toast.success('Task is added!', {
    duration: 2800,
    position: 'top-center',
  });
};

const handleDeleteFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;

  state.items = state.items.filter(item => item._id !== action.payload._id);

  toast.success('Task is deleted!', {
    duration: 2800,
    position: 'top-center',
  });
};

const handleToggleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const task = state.items.find(task => task._id === action.payload._id);
  if (task) {
    task.completed = action.payload.completed;
  }

  toast.success(task.completed ? 'Task is completed!' : 'Task is incomplete!', {
    duration: 2800,
    position: 'top-center',
  });
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, handlePending)
      .addCase(fetchTasks.fulfilled, handleFulfilled)
      .addCase(fetchTasks.rejected, handleRejected)
      .addCase(fetchAddTask.pending, handlePending)
      .addCase(fetchAddTask.fulfilled, handleAddFulfilled)
      .addCase(fetchAddTask.rejected, handleRejected)
      .addCase(fetchDeleteTask.pending, handlePending)
      .addCase(fetchDeleteTask.fulfilled, handleDeleteFulfilled)
      .addCase(fetchDeleteTask.rejected, handleRejected)
      .addCase(fetchToggleTask.pending, handlePending)
      .addCase(fetchToggleTask.fulfilled, handleToggleFulfilled)
      .addCase(fetchToggleTask.rejected, handleRejected);
  },
});

export const tasksReducer = tasksSlice.reducer;
