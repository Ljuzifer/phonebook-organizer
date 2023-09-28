import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectTotalContacts = state => state.contacts.items.length;

export const selectContactsStatus = state => state.contacts.isLoading;

export const selectContactsError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterField) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterField.toLowerCase())
    )
);
