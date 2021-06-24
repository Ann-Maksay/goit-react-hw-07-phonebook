import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { ContactListWrapper } from "./ContactListStyled";
import ContactListItem from "../ContactListItem/ContactListItem";

import {
  deleteContacts,
  fetchContacts,
} from "../../redux/phonebook/phonebook-operation";
import {
  getContactsByFilter,
  getLoading,
} from "../../redux/phonebook/phonebook-selectors";

// ({ contacts, onDelete })

class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  handleDelete = (e) => {
    this.props.onDelete(e.target.name);
  };

  render() {
    const { contacts, loading } = this.props;

    return (
      <ContactListWrapper>
        {loading && <p>Loading...</p>}
        <ul className="contactList">
          {contacts.map(({ id, name, number }) => {
            return (
              <ContactListItem
                key={id}
                name={name}
                id={id}
                number={number}
                handleDelete={this.handleDelete}
              ></ContactListItem>
            );
          })}
        </ul>
      </ContactListWrapper>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onDelete: PropTypes.func.isRequired,
  fetchContacts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: getContactsByFilter(state),
  loading: getLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(fetchContacts()),
  onDelete: (id) => dispatch(deleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
