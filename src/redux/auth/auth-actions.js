import { createAction } from '@reduxjs/toolkit';

const signUpRequest = createAction('auth/signupRequest');
const signUpSuccess = createAction('auth/signupSuccess');
const signUpError = createAction('auth/signupError');

const logInRequest = createAction('auth/logInRequest');
const logInSuccess = createAction('auth/logInSuccess');
const logInError = createAction('auth/logInError');

const logOutRequest = createAction('auth/logOutRequest');
const logOutSuccess = createAction('auth/logOutSuccess');
const logOutError = createAction('auth/logOutError');

const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');
const getCurrentUserError = createAction('auth/getCurrentUserError');

export default {
  signUpRequest,
  signUpSuccess,
  signUpError,
  logInRequest,
  logInSuccess,
  logInError,
  logOutRequest,
  logOutSuccess,
  logOutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
};
