import { createAction } from "@reduxjs/toolkit";

const fetchContactRequest = createAction("phonebook/fetchRequest");
const fetchContactSuccess = createAction("phonebook/fetchSuccess");
const fetchContactError = createAction("phonebook/fetchError");

export const fetchActions = {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
};

const addContactRequest = createAction("phonebook/addRequest");
const addContactSuccess = createAction("phonebook/addSuccess");
const addContactError = createAction("phonebook/addError");

export const addActions = {
  addContactRequest,
  addContactSuccess,
  addContactError,
};

const deleteContactRequest = createAction("phonebook/deleteRequest");
const deleteContactSuccess = createAction("phonebook/deleteSuccess");
const deleteContactError = createAction("phonebook/deleteError");

export const deleteActions = {
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
};

export const changeFilter = createAction("phonebook/changeFilter");
