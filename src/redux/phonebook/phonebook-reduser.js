import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./phonebook-actions";

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) =>
    state.find((contact) => contact.name === payload.name)
      ? state
      : [...state, payload],

  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ name }) => name !== payload),
});

const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items,
  filter,
});

export default contactsReducer;
