import React from "react";
import PropTypes from "prop-types";

const ContactListItem = ({ name, number, id, handleDelete }) => {
  return (
    <li className="contactListItem">
      <p>
        {name}: {number}
      </p>
      <button
        type="button"
        name={id}
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
  id: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
