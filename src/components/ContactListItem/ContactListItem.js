import React from "react";
import PropTypes from "prop-types";

const ContactListItem = ({ name, number, handleDelete }) => {
  return (
    <li className="contactListItem">
      <p>
        {name}: {number}
      </p>
      <button
        type="button"
        name={name}
        onClick={handleDelete}
        className="contactListDeleteButton"
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
