import Types from './types';
import history from '../../history';

export const setCurrentUser = ({ user, token }) => {
  if (token) localStorage.setItem('token', 'Bearer ' + token);
  history.push('/test');
  return {
    type: Types.SET_CUREENT_USER,
    payload: user
  };
};
export const checkAuthStart = () => {
  return {
    type: Types.CHECK_AUTH_START
  };
};
export const checkAuthFailure = error => {
  return {
    type: Types.CHECK_AUTH_FAILURE,
    error: error.message
  };
};

export const signUpStart = reqBody => {
  return {
    type: Types.SIGN_UP_START,
    payload: reqBody
  };
};

export const signUpFailure = error => {
  return {
    type: Types.SIGN_UP_FAILURE,
    payload: error.message
  };
};

export const signInStart = eamilAndPassword => {
  return { type: Types.SIGN_IN_START, payload: eamilAndPassword };
};

export const signInFailure = error => {
  return {
    type: Types.SIGN_IN_FAILURE,
    payload: error.message
  };
};
