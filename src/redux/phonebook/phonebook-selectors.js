import { createSelector } from "@reduxjs/toolkit";

export const getLoading = (state) => state.contacts.loading;

export const getFilter = (state) => state.contacts.filter;

export const getAllContacts = (state) => state.contacts.items;

export const getContactsByFilter = createSelector(
  [getFilter, getAllContacts],
  (filter, allContacts) => {
    const contactsList = allContacts.filter((elem) =>
      elem.name.toLowerCase().includes(filter.toLowerCase())
    );
    return contactsList;
  }
);
