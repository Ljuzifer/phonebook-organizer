import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import {
  fetchAddContact,
  fetchContacts,
  fetchDeleteContact,
  fetchEditContact,
} from './operations';

// export const toastLoading = toast.loading('', { position: 'top-center' });

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  // toast.loading('Waiting...', {
  //   id: toastLoading,
  //   position: 'top-center',
  // });
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;

  // toast.dismiss(toastLoading);
  toast.success('You`ve got this!', {
    duration: 2800,
    position: 'top-center',
  });
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;

  // toast.dismiss(toastLoading);
  toast.error(state.error, {
    duration: 2800,
    position: 'top-center',
  });
};

const handleAddFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
  // const newState = {
  //   isLoading: false,
  //   error: null,
  //   items: [...state.items, action.payload],
  // };

  // toast.dismiss(toastLoading);
  toast.success('Contact is added!', {
    duration: 2800,
    position: 'top-center',
  });
  // return newState;
  // return { ...state, items: [...state.items, action.payload] };
};

const handleDeleteFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = state.items.filter(item => item._id !== action.payload._id);

  // toast.dismiss(toastLoading);
  toast.success('Contact is deleted!', {
    duration: 2800,
    position: 'top-center',
  });

  // return {
  //   ...state,
  //   items: state.items.filter(item => item._id !== action.payload),
  // };
};

const handleEditFulfilled = (state, action) => {
  // toast.dismiss(toastLoading);
  // toast.success('Contact is updated!', {
  //   duration: 2800,
  //   position: 'top-center',
  // });
  state.isLoading = false;
  state.error = null;
  state.items = state.items.map(contact =>
    contact._id === action.payload._id ? action.payload : contact
  );

  // const newState = {
  //   ...state,
  //   items: state.items.map(contact =>
  //     contact._id === action.payload._id ? action.payload : contact
  //   ),
  // };

  // return newState;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFulfilled)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(fetchAddContact.pending, handlePending)
      .addCase(fetchAddContact.fulfilled, handleAddFulfilled)
      .addCase(fetchAddContact.rejected, handleRejected)
      .addCase(fetchDeleteContact.pending, handlePending)
      .addCase(fetchDeleteContact.fulfilled, handleDeleteFulfilled)
      .addCase(fetchDeleteContact.rejected, handleRejected)
      .addCase(fetchEditContact.pending, handlePending)
      .addCase(fetchEditContact.fulfilled, handleEditFulfilled)
      .addCase(fetchEditContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
