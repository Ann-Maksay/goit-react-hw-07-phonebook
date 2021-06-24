import axios from "axios";
import { fetchActions, addActions, deleteActions } from "./phonebook-actions";

axios.defaults.baseURL = "http://localhost:4040";

export const fetchContacts = () => async (dispatch) => {
  dispatch(fetchActions.fetchContactRequest());

  try {
    const { data } = await axios.get("/contacts");
    dispatch(fetchActions.fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchActions.fetchContactError(error));
  }
};

export const addContacts = (contact) => async (dispatch) => {
  dispatch(addActions.addContactRequest());

  try {
    const { data } = await axios.post("/contacts", contact);
    dispatch(addActions.addContactSuccess(data));
  } catch (error) {
    dispatch(addActions.addContactError(error));
  }
};

export const deleteContacts = (contactId) => async (dispatch) => {
  dispatch(deleteActions.deleteContactRequest());

  try {
    await axios.delete(`/contacts/${contactId}`);
    dispatch(deleteActions.deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(deleteActions.deleteContactError(error));
  }
};
