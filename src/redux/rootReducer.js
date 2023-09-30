import { combineReducers } from '@reduxjs/toolkit';
import { tasksReducer } from './tasks/tasksSlice';

export const rootReducer = combineReducers({
  tasks: tasksReducer,
});
