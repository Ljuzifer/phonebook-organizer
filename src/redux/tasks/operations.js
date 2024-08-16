import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/tasks');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchAddTask = createAsyncThunk(
  'tasks/addTask',
  async ({ text }, thunkAPI) => {
    try {
      const response = await axios.post('/api/tasks', { text });
      console.log(response.data);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchDeleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/tasks/${taskId}`);
      return response.data;
    } catch (e) {
      console.log('nea tuta');

      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchToggleTask = createAsyncThunk(
  'tasks/toggleTask',
  async ({ taskId, completed }, thunkAPI) => {
    try {
      const response = await axios.patch(`/api/tasks/${taskId}/completed`, {
        completed,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
