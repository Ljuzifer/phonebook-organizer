import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import {
  fetchAddContact,
  fetchContacts,
  fetchDeleteContact,
} from './operations';

const toastLoading = toast.loading('', { position: 'top-right' });

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  toast.loading('Waiting...', {
    id: toastLoading,
    position: 'top-right',
  });
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;

  toast.dismiss(toastLoading);
  toast.success('You`ve got this!', {
    duration: 2800,
    position: 'top-right',
  });
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;

  toast.dismiss(toastLoading);
  toast.error(state.error, {
    duration: 2800,
    position: 'top-right',
  });
};

const handleAddFulfilled = (state, action) => {
  // state.isLoading = false;
  // state.error = null;
  // state.items.push(action.payload);

  toast.dismiss(toastLoading);
  toast.success('Contact is added!', {
    duration: 2800,
    position: 'top-right',
  });

  return { ...state, items: [...state.items, action.payload] };
};

const handleDeleteContact = (state, action) => {
  toast.dismiss(toastLoading);
  toast.success('Contact is deleted!', {
    duration: 2800,
    position: 'top-right',
  });

  return {
    ...state,
    items: state.items.filter(item => item.id !== action.payload.id),
  };
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
      .addCase(fetchDeleteContact.fulfilled, handleDeleteContact)
      .addCase(fetchDeleteContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
