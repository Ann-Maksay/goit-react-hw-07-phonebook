import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { FormWrapper } from "./ContactFormStyled";
import { addContact } from "../../redux/phonebook/phonebook-actions";

const INITIAL_STATE = {
  name: "",
  number: "",
};

class ContactForm extends Component {
  static propTypes = {
    onAdd: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
  };

  handleChangeForm = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const { onAdd } = this.props;

    onAdd({ id: uuidv4(), name, number });

    this.resetForm();
  };

  resetForm = () => {
    this.setState(INITIAL_STATE);
  };

  render() {
    const { name, number } = this.state;
    return (
      <FormWrapper>
        <form onSubmit={this.handleSubmit}>
          <label className="formItem">
            <p className="lableTitle">Name</p>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              placeholder="Name"
              required
              value={name}
              onChange={this.handleChangeForm}
            />
          </label>
          <label className="formItem">
            <p className="lableTitle">Number</p>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              placeholder="Phone"
              required
              value={number}
              onChange={this.handleChangeForm}
            />
          </label>
          <button type="submit" className="submitButton">
            Add contact
          </button>
        </form>
      </FormWrapper>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  onAdd: (contact) => dispatch(addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
