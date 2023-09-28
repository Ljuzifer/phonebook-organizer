import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const TASK_URL = 'https://6515d25e09e3260018c92f5c.mockapi.io/api';
// axios.defaults.baseURL = 'https://goit-task-manager.herokuapp.com/';

// GET @ /tasks
export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`${TASK_URL}/tasks`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// POST @ /tasks
export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (text, thunkAPI) => {
    try {
      const response = await axios.post(`${TASK_URL}/tasks`, { text });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// DELETE @ /tasks/:id
export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`${TASK_URL}/tasks/${taskId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
