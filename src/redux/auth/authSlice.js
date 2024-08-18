import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refresh } from './authOperations';
import toast from 'react-hot-toast';

const initialState = {
  user: { name: null, email: null, avatar: null },
  error: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user.name = action.payload.user.name;
        // state.token = action.payload.token;
        state.isLoggedIn = false;
        toast.success(`Hello ${state.user.name}, please login now!`, {
          duration: 2800,
          position: 'top-center',
        });
      })
      .addCase(logIn.pending, (state, _) => {
        state.isRefreshing = true;
        toast.loading(
          'Please wait until the free render API is "wakes up"... This may take a few minutes :)'
        );
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        toast.dismiss();
        toast.success('Hello, my friend :)', {
          duration: 2800,
          position: 'top-right',
        });
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload;
        toast.dismiss();
        alert(`Oops! It's an error: ${state.error}`);
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refresh.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refresh.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
