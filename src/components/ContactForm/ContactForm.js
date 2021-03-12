import React, { Component } from 'react';
import { connect } from 'react-redux';
import { contactsOperations } from '../../redux/contacts';
import style from './ContactForm.module.css';

class ContactForm extends Component {
  state = { name: '', number: '' };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit({
      name: this.state.name,
      number: this.state.number,
    });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <form className={style.form} onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              className={style.input}
              autoComplete="off"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Number
            <input
              className={style.input}
              autoComplete="off"
              type="text"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>
          <button className={style.btn} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(contactsOperations.addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
