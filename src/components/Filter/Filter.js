import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { contactsActions, contactsSelectors } from '../../redux/contacts/';
import style from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <>
    <h2>Contacts</h2>
    <label className={style.filter}>
      Find contacts by name
      <input
        className={style.input}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </label>
  </>
);

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.findContact(e.target.value)),
});

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
