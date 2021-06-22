import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { ContactListWrapper } from "./ContactListStyled";
import ContactListItem from "../ContactListItem/ContactListItem";
import { deleteContact } from "../../redux/phonebook/phonebook-actions";

const ContactList = ({ contacts, onDelete }) => {
  const handleDelete = (e) => {
    onDelete(e.target.name);
  };

  return (
    <ContactListWrapper>
      <ul className="contactList">
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactListItem
              key={id}
              name={name}
              number={number}
              handleDelete={handleDelete}
            ></ContactListItem>
          );
        })}
      </ul>
    </ContactListWrapper>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onDelete: PropTypes.func.isRequired,
};

const getContactList = (filter, allContacts) => {
  const contactsList = allContacts.filter((elem) =>
    elem.name.toLowerCase().includes(filter.toLowerCase())
  );
  return contactsList;
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getContactList(filter, items),
});

const mapDispatchToProps = (dispatch) => ({
  onDelete: (name) => dispatch(deleteContact(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
