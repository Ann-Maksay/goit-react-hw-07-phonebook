import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  fetchActions,
  addActions,
  deleteActions,
  changeFilter,
} from "./phonebook-actions";

const items = createReducer([], {
  [fetchActions.fetchContactSuccess]: (_, { payload }) => payload,
  [addActions.addContactSuccess]: (state, { payload }) =>
    state.find((contact) => contact.name === payload.name)
      ? state
      : [...state, payload],

  [deleteActions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchActions.fetchContactRequest]: () => true,
  [fetchActions.fetchContactSuccess]: () => false,
  [fetchActions.fetchContactError]: () => false,
  [addActions.addContactRequest]: () => true,
  [addActions.addContactSuccess]: () => false,
  [addActions.addContactError]: () => false,
  [deleteActions.deleteContactRequest]: () => true,
  [deleteActions.deleteContactSuccess]: () => false,
  [deleteActions.deleteContactError]: () => false,
});

const contactsReducer = combineReducers({
  items,
  filter,
  loading,
});

export default contactsReducer;
