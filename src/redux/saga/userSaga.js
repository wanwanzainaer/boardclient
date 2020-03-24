import { call, all, put, takeLatest } from 'redux-saga/effects';
import Types from '../actions/types';
import axios from '../../api/axios';
import {
  checkAuthFailure,
  setCurrentUser,
  signUpFailure,
  signInFailure
} from '../actions/userAction';
export function* checkTokenAuth() {
  try {
    const {
      data: {
        data: { user }
      }
    } = yield axios.get('/users/auth');
    yield put(setCurrentUser({ user }));
  } catch (e) {
    yield put(checkAuthFailure(e));
  }
}
export function* onCheckAuthStart() {
  yield takeLatest(Types.CHECK_AUTH_START, checkTokenAuth);
}

export function* onSignUp({ payload }) {
  try {
    const {
      data: {
        token,
        data: { user }
      }
    } = yield axios.post('/users/signup', { ...payload });
    yield put(setCurrentUser({ user, token }));
  } catch (e) {
    yield put(signUpFailure(e));
  }
}
export function* onSignUpStart() {
  yield takeLatest(Types.SIGN_UP_START, onSignUp);
}

export function* onSignIn({ payload }) {
  try {
    const {
      data: {
        token,
        data: { user }
      }
    } = yield axios.post('/users/login', { ...payload });
    yield put(setCurrentUser({ user, token }));
  } catch (e) {
    yield put(signInFailure(e));
  }
}
export function* onSignInStart() {
  yield takeLatest(Types.SIGN_IN_START, onSignIn);
}

export function* userSaga() {
  yield all([call(onCheckAuthStart), call(onSignUpStart), call(onSignInStart)]);
}
