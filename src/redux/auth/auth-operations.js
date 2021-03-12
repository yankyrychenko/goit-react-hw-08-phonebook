import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const signUp = credentials => dispatch => {
  dispatch(authActions.signUpRequest());

  axios
    .post('/users/signup', credentials)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(authActions.signUpSuccess(data));
    })
    .catch(error => dispatch(authActions.signUpError(error.message)));
};

const logIn = credentials => dispatch => {
  dispatch(authActions.logInRequest());

  axios
    .post('/users/login', credentials)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(authActions.signUpSuccess(data));
    })
    .catch(error => dispatch(authActions.signUpError(error.message)));
};

const logOut = () => dispatch => {
  dispatch(authActions.logOutRequest());

  axios
    .post('/users/logout')
    .then(() => {
      token.unset();
      dispatch(authActions.logOutSuccess());
    })
    .catch(error => dispatch(authActions.logOutError(error.message)));
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  dispatch(authActions.getCurrentUserRequest());

  axios
    .get('/users/current')
    .then(({ data }) => dispatch(authActions.getCurrentUserSuccess(data)))
    .catch(error => dispatch(authActions.getCurrentUserError(error.message)));
};

export default { signUp, logIn, logOut, getCurrentUser };
