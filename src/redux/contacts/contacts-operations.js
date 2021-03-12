import axios from 'axios';
import actions from './contacts-actions';

const fetchContacts = () => dispatch => {
  dispatch(actions.fetchContactRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(actions.fetchContactSuccess(data)))
    .catch(error => dispatch(actions.fetchContactError(error.message)));
};

const addContact = ({ name, number }) => dispatch => {
  dispatch(actions.addContactRequest());

  axios
    .post('/contacts', {
      name: name,
      number: number,
    })
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch(error => dispatch(actions.addContactError(error.message)));
};

const deleteContact = contactId => dispatch => {
  dispatch(actions.deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(actions.deleteContactSuccess(contactId)))
    .catch(error => dispatch(actions.deleteContactError(error.message)));
};

export default { fetchContacts, addContact, deleteContact };
